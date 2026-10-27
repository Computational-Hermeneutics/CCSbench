# Genealogy

The lineage of the Critical Code Studies Workbench, from original
inspiration through the pre-bench-kit codebase to this bench-kit-based
rebuild.

## Lineage

### Prior inspiration
The LICENSE of the earliest CCS-WB tagged versions carried the line
*"Based loosely on an original codebase by Matthew Grimes."* No
Grimes-authored commits exist in the repository: the credit reflected
general inspiration and prior conversation, not incorporated code.

### CCS-WB-classic
[**Computational-Hermeneutics/CCS-WB-classic**](https://github.com/Computational-Hermeneutics/CCS-WB-classic)
— the pre-bench-kit CCS-WB, built as a Next.js / React application.
Authored by David M. Berry (2026-01 → 2026-10).

- **Initial commit** `0a1d38e`, 2026-01-19 — *Critical Code Studies Workbench*.
- **v4.0.0**, 2026-05 — *Full local control; cloud is now a pure optional add-on.*
- **v5.0.0**, 2026-08 — *Cloud ring-fence — the Supabase code is one folder and one flag away from disabled or removed.*
- **v5.2.0**, 2026-10-02 — *Relicensed MIT → GPL-3.0-or-later (all versions).*
  Tag [`v5.2.0`](https://github.com/Computational-Hermeneutics/CCS-WB-classic/releases/tag/v5.2.0).
- **`pre-bench-kit`**, 2026-10-27 — frozen baseline for the migration.
  Tag [`pre-bench-kit`](https://github.com/Computational-Hermeneutics/CCS-WB-classic/releases/tag/pre-bench-kit).

CCS-WB-classic is preserved as a scholarly artefact — the pre-kit
CCS-WB design in its own right. No further development lands there.

### CCSbench (this repository)
Rebuilt on top of
[**critical-code-studies/bench-kit**](https://github.com/critical-code-studies/bench-kit),
the shared code already used by SHRDLU, Spacewar!, ELIZA and Melville
benches. The bench-kit *project builder* (new in kit 1.0) lets a user
build a bench from files they bring in, without a repository up front,
and later publish the result as a static, citable bench.

- **v1.0.0** (planned) ships when bench-kit itself reaches 1.0 — the
  release that bundles Stages 0–2 of the project builder
  (settings-definable bench config, runtime versions, storage adapter
  and project file).
- Stages 3–6 (typed annotations, static-bench export, AI module,
  Tauri desktop wrapper) land in subsequent 1.x releases.
- Interim scaffolding is tagged 0.9x.

## What carries over, what changes

**Carried over from classic.** Six annotation types (Observation,
Question, Metaphor, Pattern, Context, Critique); the `.ccs` project
file (as a strawman for the kit's project file); the browser-direct
AI provider roster (as an opt-in kit module); the historical sample
corpus (FLOW-MATIC 1958 through Apollo 11 Comanche055 1969) — carried
only by the builder's blank project, never bundled into instantiated
corpus benches.

**Changed.** Framework-free DOM instead of Next.js / React.
Kintsugi mode uses bench-kit's existing repair register
(`hibi` / `yobitsugi` / `kake` / `mount`) rather than a seventh
annotation type. Held files are never mutated; repairs overlay the
original. Side-by-side comparison uses the kit's existing Collate,
Genealogy and Book's Compare for two-version reading; two-files
within one version is new. A standalone downloadable desktop app via
Tauri sits alongside the browser build.

## Attribution

Copyright © 2025–2026 David M. Berry. GPL-3.0-or-later. See
[`LICENSE`](LICENSE).

The bench-kit lineage, independently maintained at
[critical-code-studies/bench-kit](https://github.com/critical-code-studies/bench-kit),
is separately GPL-3.0-licensed; see that repository's own LICENSE and
history.
