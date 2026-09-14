"""Compile every tutorial snippet to catch breakage from dependency changes.

Strategy: batched `mkc build -j` over groups of generated snippet files rather than
a build per file. The JS target runs the same pxt TypeScript frontend as the native
build -- identical type checking and API resolution -- but skips ARM codegen and the
CODAL link, which is what makes batching viable at all. Batching ~730 snippets into
one native binary would overflow micro:bit flash and fail for reasons that have
nothing to do with the tutorials.

Files are pre-chunked into groups of CHUNK_SIZE rather than compiled all at once:
the JS target still enforces a total-program-size ceiling, and 76 tutorials in one
project has already been enough to exceed it. Small, fixed-size chunks stay well
under that ceiling regardless of how many tutorials this extension grows to.

To keep the coverage the JS target cannot give (flash size, C++ shim linkage), the
hand-written API smoke test in tests/test.ts is additionally built natively, on its own.

When a chunk fails, it is bisected to attribute the error to a single tutorial.

Usage:
    python run-all-tests.py
"""

import copy
import glob
import json
import os
import shutil
import signal
import subprocess
import sys
import tempfile

PXT_JSON = "pxt.json"
SMOKE_TEST = "tests/test.ts"
GENERATED_DIR = "tests/generated"
EXTRA_DEPS_DIR = "tests/generated/extra-deps"

# Kept comfortably under the JS target's total-program-size ceiling: 76 files in
# one project was already enough to exceed it by tens of kilobytes, so this leaves
# ample headroom without needing to detect or react to that error specifically.
CHUNK_SIZE = 15

# Tutorials that reach outside this extension's dependency set compile only with
# these added. The overlay is applied to a temporary pxt.json and never committed,
# so what users install is unchanged.
EXTRA_DEPS_OVERLAY = {"datalogger": "*", "radio": "*", "microphone": "*"}

_original_pxt_json = None


def restore_pxt_json(*_args):
    """Put pxt.json back. Registered for normal exit and for signals."""
    if _original_pxt_json is not None:
        with open(PXT_JSON, "w", encoding="utf-8") as f:
            json.dump(_original_pxt_json, f, indent=4)
            f.write("\n")


def _signal_handler(signum, frame):
    restore_pxt_json()
    sys.exit(130)


def ts_files(directory, recursive=False):
    pattern = os.path.join(directory, "**", "*.ts") if recursive else os.path.join(directory, "*.ts")
    return sorted(p.replace(os.path.sep, "/") for p in glob.glob(pattern, recursive=recursive))


BUILD_RETRIES = 2


def build(test_files, native=False, extra_deps=None):
    """Set testFiles, run mkc, return (ok, combined_output)."""
    config = copy.deepcopy(_original_pxt_json)
    config["testFiles"] = test_files
    if extra_deps:
        config["dependencies"] = {**config["dependencies"], **extra_deps}

    with open(PXT_JSON, "w", encoding="utf-8") as f:
        json.dump(config, f, indent=4)
        f.write("\n")

    cmd = ["mkc", "build"] + ([] if native else ["-j"])
    result = subprocess.run(cmd, capture_output=True, text=True, shell=True)
    return result.returncode == 0, (result.stdout or "") + (result.stderr or "")


def build_confirmed(test_files, native=False, extra_deps=None, retries=BUILD_RETRIES):
    """Like build(), but a failure is only trusted once it repeats.

    `mkc` occasionally fails a build for reasons that have nothing to do with the
    snippet under test (a flaky network fetch of a github: dependency, a transient
    tool hiccup). A single failing run is retried up to `retries` times; only a
    failure that reproduces every time is reported, so compile_batch() never
    mistakes a one-off blip for a real compile error. The last attempt's output
    is returned, whichever way it went.
    """
    ok, output = build(test_files, native=native, extra_deps=extra_deps)
    for _ in range(retries - 1):
        if ok:
            break
        ok, output = build(test_files, native=native, extra_deps=extra_deps)
    return ok, output


def chunked(items, size):
    return [items[i:i + size] for i in range(0, len(items), size)]


def compile_batch(test_files, extra_deps=None):
    """Compile test_files and return the genuine failures, bisecting on failure.

    A result entry is a filename string for one bad snippet, or a tuple of
    filenames for a set that only fails compiled together (a true cross-file
    collision). Every verdict is confirmed with build_confirmed() before being
    trusted, including the base case -- a leaf is never blamed just for being
    what's left over when the recursion bottoms out; it has to fail to compile
    on its own.
    """
    if not test_files:
        return []

    ok, _ = build_confirmed(test_files, extra_deps=extra_deps)
    if ok:
        return []
    if len(test_files) == 1:
        return list(test_files)

    mid = len(test_files) // 2
    halves = [test_files[:mid], test_files[mid:]]

    culprits = []
    any_half_failed = False
    for half in halves:
        half_ok, _ = build_confirmed(half, extra_deps=extra_deps)
        if not half_ok:
            any_half_failed = True
            culprits.extend(compile_batch(half, extra_deps=extra_deps))

    if culprits:
        return culprits

    # The retry in build_confirmed() already ruled out a transient failure for
    # the full test_files set above, so if we get here -- no half is itself
    # guilty of anything, whether because both halves passed outright or
    # because a failing half's own recursion found nothing inside it -- the
    # only remaining explanation is that these files fail only when compiled
    # together (a true cross-file collision), not any single snippet, and it
    # isn't a size issue (handled above). Wrapped in a tuple so run_pass can
    # tell "one bad file" apart from "these files only fail as a group" and
    # report it as such, instead of rebuilding each member alone and printing
    # a misleading OK.
    return [tuple(test_files)]


def run_pass(label, test_files, extra_deps=None):
    """Compile test_files in CHUNK_SIZE-sized groups, bisecting any chunk that
    fails. Returns the genuine failures across all chunks."""
    if not test_files:
        print(f"[{label}] no test files; skipping")
        return []

    chunks = chunked(test_files, CHUNK_SIZE)
    print(f"[{label}] building {len(test_files)} file(s) in {len(chunks)} chunk(s) of up to {CHUNK_SIZE}...")
    culprits = []
    for chunk in chunks:
        culprits.extend(compile_batch(chunk, extra_deps=extra_deps))

    if not culprits:
        print(f"[{label}] OK")
        return []

    print(f"[{label}] FAILED")
    for culprit in culprits:
        if isinstance(culprit, tuple):
            # A group that only fails together: rebuilding one member alone
            # would just print a misleading "Build OK", so show the group's
            # own failing build instead.
            group = list(culprit)
            _, detail = build_confirmed(group, extra_deps=extra_deps)
            print(f"\n--- {' + '.join(group)} (fails only as a group) ---")
        else:
            _, detail = build_confirmed([culprit], extra_deps=extra_deps)
            print(f"\n--- {culprit} ---")
        print(detail.strip())
    return culprits


def main():
    global _original_pxt_json

    if not os.path.exists(PXT_JSON):
        print(f"error: {PXT_JSON} not found; run from the repo root", file=sys.stderr)
        return 1

    with open(PXT_JSON, encoding="utf-8") as f:
        _original_pxt_json = json.load(f)

    signal.signal(signal.SIGINT, _signal_handler)
    signal.signal(signal.SIGTERM, _signal_handler)

    generated = ts_files(GENERATED_DIR)
    extra_deps = ts_files(EXTRA_DEPS_DIR)

    if not generated and not extra_deps:
        print("error: no generated tests found; run `python md-to-ts.py` first", file=sys.stderr)
        return 1

    failures = []
    try:
        # Pass 1: every snippet that compiles against the shipped dependency set,
        # alongside the hand-written smoke test.
        failures += run_pass("snippets", [SMOKE_TEST] + generated)

        # Pass 2: tutorials needing datalogger/radio, under a temporary overlay.
        failures += run_pass("extra-deps", extra_deps, extra_deps=EXTRA_DEPS_OVERLAY)

        # Pass 3: native build of the smoke test only, for link-step coverage that
        # the JS target cannot provide.
        print("[native] building smoke test natively...")
        ok, output = build_confirmed([SMOKE_TEST], native=True)
        if ok:
            print("[native] OK")
        else:
            print("[native] FAILED")
            print(output.strip())
            failures.append(SMOKE_TEST + " (native)")
    finally:
        restore_pxt_json()

    if failures:
        print("\n=== FAILED ===")
        for failure in failures:
            if isinstance(failure, tuple):
                print(f"  {' + '.join(failure)} (fails only as a group)")
            else:
                print(f"  {failure}")
        return 1

    print("\nAll passes succeeded.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
