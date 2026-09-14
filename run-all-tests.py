"""Compile every tutorial snippet to catch breakage from dependency changes.

Strategy: one batched `mkc build -j` over all generated snippet files rather than a
build per file. The JS target runs the same pxt TypeScript frontend as the native
build -- identical type checking and API resolution -- but skips ARM codegen and the
CODAL link, which is what makes batching viable at all. Batching ~730 snippets into
one native binary would overflow micro:bit flash and fail for reasons that have
nothing to do with the tutorials.

To keep the coverage the JS target cannot give (flash size, C++ shim linkage), the
hand-written API smoke test in tests/test.ts is additionally built natively, on its own.

When a batch fails, it is bisected to attribute the error to a single tutorial.

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


def bisect(test_files, extra_deps=None):
    """Narrow a failing batch down to the individual files that fail."""
    if len(test_files) == 1:
        return test_files

    mid = len(test_files) // 2
    halves = [test_files[:mid], test_files[mid:]]
    culprits = []
    for half in halves:
        ok, _ = build(half, extra_deps=extra_deps)
        if not ok:
            culprits.extend(bisect(half, extra_deps=extra_deps))

    # Both halves passing individually means the failure needs the whole set --
    # a cross-file collision rather than one bad snippet.
    return culprits or test_files


def run_pass(label, test_files, extra_deps=None):
    """Run one batched pass; bisect and report on failure. Returns list of failures."""
    if not test_files:
        print(f"[{label}] no test files; skipping")
        return []

    print(f"[{label}] building {len(test_files)} file(s)...")
    ok, output = build(test_files, extra_deps=extra_deps)
    if ok:
        print(f"[{label}] OK")
        return []

    print(f"[{label}] FAILED -- bisecting to attribute the error")
    culprits = bisect(test_files, extra_deps=extra_deps)
    for culprit in culprits:
        _, detail = build([culprit], extra_deps=extra_deps)
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
        ok, output = build([SMOKE_TEST], native=True)
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
            print(f"  {failure}")
        return 1

    print("\nAll passes succeeded.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
