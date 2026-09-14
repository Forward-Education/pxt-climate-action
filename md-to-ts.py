"""Extract code snippets from tutorial markdown into compilable TypeScript.

Every ```blocks / ```block / ```template fence in curriculum/*.md is emitted as its
own namespace so that snippets which declare the same variable cannot collide. One
.ts file is produced per tutorial, named after it, so a compiler diagnostic points
straight back at the tutorial it came from.

Tutorials that use an API outside this extension's dependency set (datalogger, radio)
are written to a separate output directory, because those snippets only compile under
the temporary overlay that run-all-tests.py applies.

Usage:
    python md-to-ts.py [--src curriculum] [--out tests/generated]
"""

import argparse
import os
import re
import sys

# Fences holding TypeScript we can compile. ```package is dependency metadata and
# ```spy is static Python; neither belongs in a .ts file.
CODE_FENCES = ("blocks", "block", "template")

# ```customts snippets already declare their own namespace, so they are emitted
# verbatim rather than wrapped.
RAW_FENCES = ("customts",)

FENCE_RE = re.compile(
    r"^```(" + "|".join(CODE_FENCES + RAW_FENCES) + r")\n(.*?)^```",
    re.DOTALL | re.MULTILINE,
)

# APIs that live outside this extension's dependency set. Tutorials using them are
# built under a temporary overlay (see run-all-tests.py) so the shipped dependencies
# in pxt.json stay exactly as they are.
EXTRA_DEP_RE = re.compile(r"\b(?:datalogger|radio)\.\w+|\binput\.soundLevel\b")

# Tutorials with no compilable TypeScript at all. Anything else yielding zero
# snippets means the extractor has regressed, so it is reported as an error.
NO_SNIPPETS_EXPECTED = {
    "ev-obstacle-py.md",  # Python tutorial: all 20 fences are ```spy
    "blank-project.md",  # empty starter template, no code by design
    "gr5-wind-lvl1.md",  # prose and images only
}


# MakeCode snippets assign variables without declaring them -- the blocks editor owns
# the variable table, so the markdown shows `total = 0`, never `let total = 0`. As
# standalone TypeScript that is an undefined name, so the first bare assignment to an
# otherwise-undeclared identifier is promoted to a declaration. Taking the first
# assignment (rather than emitting `let x = 0`) keeps the inferred type correct.
# Matches `name = value` and the compound forms (`name += 1`), which MakeCode emits
# for counters. A compound assignment tells us nothing about the initial value, so
# those are declared 0.
ASSIGN_RE = re.compile(r"^(\s*)([A-Za-z_$][\w$]*)\s*(\+|-|\*|/)?=\s*(?!=)", re.MULTILINE)
DECLARED_RE = re.compile(r"\b(?:let|const|var|function|namespace)\s+([A-Za-z_$][\w$]*)")


def implicit_variables(code: str) -> dict:
    """Map each assigned-but-undeclared name to its first assigned expression."""
    declared = set(DECLARED_RE.findall(code))
    first_value = {}
    for m in ASSIGN_RE.finditer(code):
        name = m.group(2)
        if name in declared or name in first_value:
            continue
        if m.group(3):  # compound assignment: initial value is not knowable here
            first_value[name] = "0"
            continue
        rhs = code[m.end():].split("\n", 1)[0].strip()
        balanced = all(rhs.count(a) == rhs.count(b) for a, b in ("()", "[]", "{}"))
        first_value[name] = rhs if rhs and balanced else "0"

    # A variable whose first assignment we guessed at may be assigned a boolean
    # elsewhere; `let x = 0` would then be a type error. Booleans win over the guess.
    for name in list(first_value):
        if re.search(rf"^\s*{re.escape(name)}\s*=\s*(true|false)\b", code, re.M):
            first_value[name] = "false"
    return first_value


def declare_implicit_variables(code: str, shared: dict) -> str:
    """Hoist a `let` for every name that is assigned but never declared.

    Declarations go at the top of the snippet rather than at the first assignment,
    because MakeCode variables are function-scope globals and their first assignment
    is often nested inside an `if` or an event handler -- declaring in place would
    scope the variable too narrowly for later steps to see it.

    The initialiser is copied from the first assignment so the inferred type is right
    (a variable holding a string must not be declared `= 0`). If that expression does
    not stand alone -- unbalanced brackets from a multi-line assignment -- it falls
    back to 0.

    `shared` carries every implicit variable found anywhere in the tutorial, because
    a variable is often assigned in one step and only read in a later one -- looking
    at a single fence would leave the reader undeclared.

    The regex is anchored at line start, so property assignments (`obj.field = 1`)
    and comparisons (`==`) are already excluded and need no special handling.
    """
    declared = set(DECLARED_RE.findall(code))
    needed = {n: v for n, v in shared.items() if n not in declared}
    if not needed:
        return code
    header = "\n".join(f"let {n} = {v}" for n, v in sorted(needed.items()))
    return header + "\n" + code


def namespace_for(slug: str, kind: str, index: int) -> str:
    """Build a deterministic, collision-proof namespace identifier."""
    ident = re.sub(r"[^0-9a-zA-Z]", "_", slug)
    if not ident[0].isalpha():
        ident = "t_" + ident
    return f"{ident}_{kind}{index:02d}"


# Tutorials name their MakeCode variables in prose macros like ||Variables:total||.
# That is the author's own declaration list, and it is the only evidence available for
# a variable the snippets merely read and never assign. Only the unambiguous form is
# used -- a macro holding a single identifier -- so block descriptions such as
# ||variables:set list to|| are ignored rather than guessed at.
VARIABLE_MACRO_RE = re.compile(r"\|\|[Vv]ariables:([A-Za-z_$][\w$]*)\|\|")


def extract(path: str):
    """Return (snippets, needs_extra_deps) for one markdown file.

    Each snippet is (kind, index, code). Fences are numbered per kind so that the
    name in a build error maps back to "the Nth blocks fence in this tutorial".
    """
    with open(path, encoding="utf-8") as f:
        content = f.read()

    fences = [(k, c.strip()) for k, c in FENCE_RE.findall(content) if c.strip()]

    # Collect implicit variables across the whole tutorial first: a variable assigned
    # in step 3 may only be read in step 7.
    shared = {}
    for kind, code in fences:
        if kind not in RAW_FENCES:
            for name, value in implicit_variables(code).items():
                shared.setdefault(name, value)

    # Variables the snippets only ever read are invisible to the assignment scan, so
    # fall back to the names the tutorial prose declares.
    all_code = "\n".join(c for k, c in fences if k not in RAW_FENCES)
    for name in VARIABLE_MACRO_RE.findall(content):
        if re.search(rf"\b{re.escape(name)}\b", all_code):
            shared.setdefault(name, "0")

    # An indexed variable is a list, not a number; `let x = 0` would make `x[i]` an
    # error about Number having no index signature.
    for name in list(shared):
        if shared[name] == "0" and re.search(rf"\b{re.escape(name)}\s*\[", all_code):
            shared[name] = "[0]"

    # A boolean assignment anywhere in the tutorial overrides a numeric guess made
    # from some other step's first assignment.
    for name in list(shared):
        if re.search(rf"^\s*{re.escape(name)}\s*=\s*(true|false)\b", all_code, re.M):
            shared[name] = "false"

    snippets = []
    counters = {}
    for kind, code in fences:
        counters[kind] = counters.get(kind, 0) + 1
        if kind not in RAW_FENCES:
            code = declare_implicit_variables(code, shared)
        snippets.append((kind, counters[kind], code))

    needs_extra_deps = any(EXTRA_DEP_RE.search(code) for _, _, code in snippets)
    return snippets, needs_extra_deps


def render(slug: str, source_name: str, snippets) -> str:
    """Render one tutorial's snippets as a single TypeScript file."""
    out = [
        "// AUTO-GENERATED by md-to-ts.py -- do not edit.",
        f"// Source: curriculum/{source_name}",
        "",
    ]
    for kind, index, code in snippets:
        out.append(f"// {source_name} :: ```{kind} fence #{index}")
        if kind in RAW_FENCES:
            out.append(code)
        else:
            out.append(f"namespace {namespace_for(slug, kind, index)} {{")
            out.append(code)
            out.append("}")
        out.append("")
    return "\n".join(out)


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--src", default="curriculum", help="tutorial markdown directory")
    parser.add_argument("--out", default="tests/generated", help="output directory")
    args = parser.parse_args()

    if not os.path.isdir(args.src):
        print(f"error: source directory not found: {args.src}", file=sys.stderr)
        return 1

    plain_dir = args.out
    extra_dir = os.path.join(args.out, "extra-deps")
    os.makedirs(plain_dir, exist_ok=True)
    os.makedirs(extra_dir, exist_ok=True)

    # Clear previous output so deleted tutorials don't leave orphaned tests behind.
    for directory in (plain_dir, extra_dir):
        for stale in os.listdir(directory):
            if stale.endswith(".ts"):
                os.remove(os.path.join(directory, stale))

    md_files = sorted(f for f in os.listdir(args.src) if f.lower().endswith(".md"))
    total_snippets = 0
    extra_files = []
    unexpectedly_empty = []

    for name in md_files:
        slug = os.path.splitext(name)[0]
        snippets, needs_extra = extract(os.path.join(args.src, name))

        if not snippets:
            if name not in NO_SNIPPETS_EXPECTED:
                unexpectedly_empty.append(name)
            continue

        target_dir = extra_dir if needs_extra else plain_dir
        if needs_extra:
            extra_files.append(name)

        with open(os.path.join(target_dir, slug + ".ts"), "w", encoding="utf-8") as f:
            f.write(render(slug, name, snippets))

        total_snippets += len(snippets)

    print(f"Read {len(md_files)} markdown files from {args.src}")
    print(f"Wrote {total_snippets} snippets")
    skipped = len(unexpectedly_empty) + len(NO_SNIPPETS_EXPECTED & set(md_files))
    print(f"  {plain_dir}: {len(md_files) - len(extra_files) - skipped} tutorials")
    print(f"  {extra_dir}: {len(extra_files)} tutorials needing datalogger/radio")

    if unexpectedly_empty:
        print(
            "\nerror: no compilable snippets found in:\n  "
            + "\n  ".join(unexpectedly_empty)
            + "\nAdd to NO_SNIPPETS_EXPECTED if intentional.",
            file=sys.stderr,
        )
        return 1

    return 0


if __name__ == "__main__":
    sys.exit(main())
