# Tutorial migration: pxt-fwd-edu → pxt-climate-action

Status of the move of tutorial content from the old mono-repo extension
(`pxt-fwd-edu`) into this one, and what still needs doing.

## Why

Tutorial content lives inside an approved extension so that it inherits the
extension's approved status. The Climate Action Kit moved from `pxt-fwd-edu`
(a mono-repo with its hardware blocks vendored in) to `pxt-climate-action`,
which pulls its blocks from `Forward-Education/pxt-fwd-modules`. The tutorials
had been copied across and partially ported, but were never registered in
`pxt.json`, were pinned to a stale version, and had never been compiled by
anything.

## Done

### Packaging

- All 88 `curriculum/*.md` registered in `pxt.json` `files[]` (90 entries with
  `README.md` and `tutorial-info-cache.json`). Without this the extension does
  not serve them.
- Dependency pin in every tutorial's ` ```package ` fence updated
  `#v1.1.0` → `#v2.0.2`, matching `pxt.json` `version`.
- `radio` and `microphone` declared in the 5 tutorials that use them. They were
  missing, so those blocks were unavailable to students.

### Compilation testing

Nothing had ever compiled this content. `pxt-fwd-edu` shipped 204 releases with
CI that only bumped versions and checked `pxt.json` paths.

- `md-to-ts.py` rewritten: extracts **all** ` ```blocks `, ` ```block ` and
  ` ```template ` fences (728 snippets) rather than only the last one per file
  (86). One `.ts` per tutorial, one namespace per snippet.
- `run-all-tests.py` rewritten: one batched `mkc build -j` instead of a native
  build per file, bisecting on failure to attribute an error to a tutorial.
- `testFiles` is build-only (`pxtlib/package.ts:883-888` — `files` + `testFiles`
  compile only at `level == 0`), so none of this reaches users.
- CI regenerates, fails if `tests/generated` is stale, then compiles.
- `pxtjson-sanity-check.yml` guards packaging: every `files[]` path exists,
  every tutorial is listed, and the pin matches `version`.

**Result: 85/85 files compile, 0 errors** (was 28/85, 919 errors).

### Content defects fixed

All pre-existing, all live in production before this work:

| Defect | Scale |
|---|---|
| API renames missed by the original port | 231 calls |
| Malformed code fences | ~60 fences |
| Asset URLs (personal fork, `blob/` HTML, pinned SHA, dead `github.io`) | 1,110 refs |
| `drive`/`stop`/`turn` rewritten to v1.1.11 signatures | 301 calls |

The four renames were `fwdDistance*` → `distance`/`isPastThreshold`,
`conSetEnabled` → `servo.setEnabled`, `fwdSetEnabled`/`isEnabled` →
`setEnabled`/`enabled`, and `fwdSetActive` → `setActive`.

Asset URLs had four incompatible bases, including 46 pointing at a personal fork
(one on a patch branch), 36 using `github.com/.../blob/` which serves HTML not
image bytes, and 137 on `forward-education.github.io`, which **404s** — there is
no `gh-pages` branch. All now use
`raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/`,
verified to return 200.

Individually repaired: a stray backtick in `robo-delivery-11-12.md` that opened
an unterminated template literal (and leaked parse errors into other files'
builds), an orphaned `else if` in `hs-autodelivery-modify.md`, a fence in
`ms-smartbin-modify.md` missing its `basic.forever` wrapper, and declaration
order in `gr7-wildfire-use.md`.

### How the generator handles MakeCode's conventions

Tutorial markdown is not standalone TypeScript. The generator bridges the gap in
the **generated tests only** — the markdown is never rewritten to suit the
compiler:

- **Implicit variables.** The blocks editor owns the variable table, so snippets
  show `total = 0`, never `let total = 0`. Declarations are synthesised, typed
  from the first assignment.
- **Cross-fence declarations.** A tutorial declares a variable once, in the step
  that introduces it; later excerpts use it without repeating the declaration.
  That `let` is carried across.
- **Blank parameter slots.** A step asking the student to drag in a value renders
  as `showNumber()` or `setAngle(servo, )`, which cannot compile. The substitute is
  listed explicitly in [`tests/blank-fills.json`](tests/blank-fills.json), keyed by
  tutorial and callee; each value is the answer the tutorial itself shows in a later
  step. Only callees named there are touched, so a genuinely zero-argument call
  (`clearScreen()`, `dial1.position()`) and a trailing comma in a multi-line call
  are both left alone.

  This is deliberately a lookup rather than inference. An earlier version deduced
  the value by finding the same call completed elsewhere in the tutorial; it worked,
  but it silently replaced the whole argument list — swapping `fwdBase.leftServo`
  for a different servo in six tutorials — and read trailing commas as empty
  sockets. A blank with no entry now fails the build, which is the point: someone
  decides the answer instead of it being guessed.

  A marker comment in the fence would be simpler still, but does not work: pxt
  strips only `@hide`, `@highlight`, `@collapsed` and `@validate-*`
  (`pxtblocks/importer.ts`), so any other comment is rendered onto the block and
  would show the student the answer.
- **Numeric shadows in boolean sockets.** `IsDrivingEnabled = 0` is the editor's
  default shadow in an unfilled boolean socket. Where the variable is assigned
  `true`/`false` elsewhere, the `0` becomes `false`.

## Left to do

### 1. Driving blocks need hardware calibration — blocking for those tutorials

`pxt-fwd-modules` commit `edf1af1` ("update driving blocks") **deleted**
`fwdMotors.stop` and `fwdMotors.turn` and changed `drive()` from
`(direction, speed)` to `(leftSpeed, rightSpeed, duration)`. The old API survives
only on the unmerged `motion`/`rpm` branches. The tutorials were written against
it.

The rewrite to v1.1.11 compiles, but is **not behaviour-preserving**:

- Old `drive(direction, speed)` ran **continuously**. New `drive(l, r, duration)`
  runs for a fixed time then stops. Every duration is a placeholder — a flat
  `1000` ms that nobody has tested on hardware.
- `turn(angle)` called `turnInPlace(angle)`, which converted degrees into
  differential motor timing using the vehicle's geometry. v1.1.11 has no
  angle-based turn. Of **95 rewritten call sites**, **92** carry
  `// TODO: calibrate duration -- was turn(N) degrees in place`; the other 3 were
  `turn(0)` and became `drive(0, 0, 0)`, which needs no calibration.
- `setupDriving` lost its `bias` parameter. **11 calls** carried non-zero
  calibration (`10`, `-35`, `45`) in `gr11-electriccar-*`, `gr9-treeSeeder-*` and
  `hs-mobileirrigation-*`. Those values have nowhere to go; the vehicles will
  drift until recalibrated.

```bash
grep -rn "TODO: calibrate" curriculum/
```

Restoring the deleted blocks in `pxt-fwd-modules` and releasing a new version
remains the cheaper fix, and would let every TODO be deleted.

### 2. Release cadence vs. the pin

Every tutorial pins `#v2.0.2`, and CI fails if that drifts from `pxt.json`.
At this repo's cadence (7 releases in 15 months) that is a `sed` a few times a
year.

It does **not** survive porting `makecode-bump.yml` from `pxt-fwd-edu`, which
bumps on every push to `main` — hence that repo's 204 tags. That would mean
rewriting 86 files per merge, and the two workflows would fight (bump commits a
version, the pin check immediately fails). If the cadence rises, pin to a moving
ref (a `stable` branch) instead, so promotion is deliberate but costs no edits.

### 3. Not covered by the tests

- `ev-obstacle-py.md` is the only Python tutorial (20 ` ```spy ` fences) and is
  excluded — nothing there is compile-checked.
- `mkc build -j` skips ARM codegen and the CODAL link, so flash-size overflow and
  C++ shim linkage are not covered for snippets. `tests/test.ts` is still built
  natively to keep that path exercised.
- Two referenced assets do not exist in either repo and were already broken:
  `dial-middleServo.gif` (`wind-gr-5-lesson.md`, `windenergy.md`) and
  `gr3-wind1-lvl1-pluganim.webp` (`gr3-wind-lvl1.md`, `gr3-wind-lvl2.md`,
  `gr5-wind-lvl1.md`).

### 4. Deferred

- **Translations.** `pxt-fwd-edu` has 5 files under `_locales/{es,fr}` covering 3
  wind lessons. They were not migrated. They would need the same API port as the
  English originals, or they will fail to load blocks.
- **`||fwdSensors:...||` macros.** LED-ring, dial and touch instructions still
  reference the old flat namespace and point students at the wrong drawer; they
  belong under `||fwdLights:||` and `||fwdButtons:||`. ~40 files. Cosmetic, but
  visible.
- **`tutorial-info-cache.json`** covers only the two `README.md` snippets.
  Regenerate it now the tutorials ship, or every tutorial recompiles its snippets
  on open.
- **`tutorial-assets/` is 303 MB**, which only affects clone size (assets are
  fetched by URL, not bundled). Compressing the PNGs and converting GIFs to webp
  would help; serving from a `gh-pages` branch would also make the `github.io`
  base work.

## Running it

```bash
python md-to-ts.py      # curriculum/*.md -> tests/generated/*.ts
python run-all-tests.py # batched compile; bisects to attribute failures
```

Generation is idempotent — re-running it on unchanged markdown is a no-op, which
is what the CI staleness check relies on. Commit `tests/generated/` whenever
`curriculum/` changes.
