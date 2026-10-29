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
[**Computational-Hermeneutics/CCS-WB-classic**](https://github.com/Computational-Hermeneutics/CCS-WB-classic):
the pre-bench-kit CCS-WB, built as a Next.js / React application.
Authored by David M. Berry (2026-01 through 2026-10).

- **Initial commit** `0a1d38e`, 2026-01-19: *Critical Code Studies Workbench*.
- **v4.0.0**, 2026-05: *Full local control; cloud is now a pure optional add-on.*
- **v5.0.0**, 2026-08: *Cloud ring-fence. The Supabase code is one folder and one flag away from disabled or removed.*
- **v5.2.0**, 2026-10-02: *Relicensed MIT to GPL-3.0-or-later (all versions).*
  Tag [`v5.2.0`](https://github.com/Computational-Hermeneutics/CCS-WB-classic/releases/tag/v5.2.0).
- **`pre-bench-kit`**, 2026-10-27: frozen baseline for the migration.
  Tag [`pre-bench-kit`](https://github.com/Computational-Hermeneutics/CCS-WB-classic/releases/tag/pre-bench-kit).
- **v5.2.1**, 2026-10-27: in-app Classic rebrand.
- **v5.2.2**, 2026-10-28: Zenodo metadata fix. Concept DOI
  [10.5281/zenodo.23714574](https://doi.org/10.5281/zenodo.23714574).

CCS-WB-classic is preserved as a scholarly artefact: the pre-kit
CCS-WB design in its own right. No further development lands there.

### CCSbench (this repository)
Rebuilt on top of
[**critical-code-studies/bench-kit**](https://github.com/critical-code-studies/bench-kit),
the shared code already used by SHRDLU, Spacewar!, ELIZA and Melville
benches. The bench-kit *project builder* lets a user build a bench
from files they bring in, without a repository up front, and later
publish the result as a static, citable bench.

- **v0.9.0** (planned): the scaffold on bench-kit v0.84.0 (Stage 3).
- **v1.0.0** (planned): ships when bench-kit itself reaches 1.0, which
  bundles Stages 0 through 2 of the project builder
  (settings-definable bench config, runtime versions, storage adapter
  and project file).
- Stages 4 and 6 (static-bench export, Tauri desktop wrapper) land in
  subsequent 1.x releases.
- The AI module (originally Stage 5) has been dropped for the v1 line.

## What carries over, what changes

**Carried over from classic.** Six annotation types (Observation,
Question, Metaphor, Pattern, Context, Critique); the `.ccs` project
file (as a strawman for the kit's project file, kept readable); the
historical sample corpus (FLOW-MATIC 1958 through Apollo 11 Comanche055
1969), to land in the builder's blank project when Stage 1 arrives;
GPL-3.0-or-later licence.

**Changed.** Framework-free DOM instead of Next.js / React.
Kintsugi mode uses bench-kit's existing repair register
(`hibi` / `yobitsugi` / `kake`) rather than a seventh annotation type.
Held files are never mutated; repairs overlay the original. Side-by-side
comparison uses the kit's existing Collate, Genealogy and Book's
Compare for two-version reading; two-files within one version (Beside)
is new in bench-kit 0.84.0. A standalone downloadable desktop app via
Tauri sits alongside the browser build.

**Dropped.** The browser-direct AI co-reader (seven providers) is not
part of the v1 line. CCS-WB-classic preserves that implementation.

## Attribution

Copyright 2025 to 2026 David M. Berry. GPL-3.0-or-later. See
[`LICENSE`](LICENSE).

The bench-kit lineage, independently maintained at
[critical-code-studies/bench-kit](https://github.com/critical-code-studies/bench-kit),
is separately GPL-3.0-licensed; see that repository's own LICENSE and
history.
