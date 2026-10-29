# CCSbench

<a href="https://doi.org/10.5281/zenodo.23764690"><img src="https://zenodo.org/badge/1435787520.svg" alt="DOI"></a>

A rebuild of the Critical Code Studies Workbench on top of
[**bench-kit**](https://github.com/critical-code-studies/bench-kit),
the shared code used by the SHRDLU, Spacewar!, ELIZA and Melville
benches. Sibling in the *-bench family alongside
[**LLMbench**](https://github.com/dmberry/LLMbench).

> **Status: early scaffolding.** This repository holds the bench-kit
> template customised for CCSbench, pinned at
> [bench-kit v0.84.0](https://github.com/critical-code-studies/bench-kit/releases/tag/v0.84.0)
> (Stage 3 of the hand-built project: annotation types, Beside two-file
> comparison, Kintsugi repairs). The first release (v1.0.0) ships when
> bench-kit itself reaches 1.0, bundling Stages 0 through 2 of the
> *project builder* (settings-definable bench config, runtime versions,
> storage adapter and project file). Until then, use
> [**CCS-WB-classic**](https://github.com/Computational-Hermeneutics/CCS-WB-classic)
> (pre-bench-kit, frozen at v5.2.0).

## What this will be

- **Close reading of code as cultural artefact**, with six typed
  annotations (Observation, Question, Metaphor, Pattern, Context,
  Critique) over any file the user brings in.
- **Kintsugi repair**, using bench-kit's existing repair register
  (`hibi` / `yobitsugi` / `kake`) so builder-made and published benches
  share one renderer. Held files are never mutated; repairs are
  overlaid in gold at read time. An opt-in *flatten* action derives a
  child version with the repairs applied in place.
- **Side-by-side comparison** of two files within one project (Beside,
  landed in bench-kit 0.84.0) and of two versions of one program (via
  the kit's existing Collate, Genealogy and Book's Compare).
- **A project builder**. Users build a bench by hand in the browser or
  in a desktop wrapper (Tauri is the first-choice standalone target),
  without needing a repository up front. Finished projects export as
  static, citable benches.
- **Local-first storage** with the Supabase cloud ring from
  CCS-WB-classic available as one optional backend if the user wants it.

The LLM / AI-dialogue module from CCS-WB-classic has been dropped for
the v1 line. The classic repository preserves that implementation if a
reader needs it.

## Running locally

A plain static site: no build step, no framework. Any static file
server works.

```
git clone --recursive https://github.com/Computational-Hermeneutics/CCSbench.git
cd CCSbench
python3 -m http.server 8080
# open http://localhost:8080/research/
```

If you cloned without `--recursive`, pull the bench-kit submodule:
`git submodule update --init --recursive`.

## History

See [`GENEALOGY.md`](GENEALOGY.md) for the full lineage back to the
pre-bench-kit CCS-WB codebase.

## Licence

GPL-3.0-or-later (inherited from CCS-WB-classic v5.2.0 and from
bench-kit).

## Citation

<a href="https://doi.org/10.5281/zenodo.23764690"><img src="https://zenodo.org/badge/1435787520.svg" alt="DOI"></a>

Archived on Zenodo. The badge above is the concept DOI
(10.5281/zenodo.23764690), which always resolves to the latest
archived snapshot of CCSbench. Cite a specific version with its own
DOI (listed on the Zenodo record under *Versions*).

Suggested citation (v0.9.2):

> Berry, D. M. (2026). *CCSbench: Critical Code Studies Workbench on bench-kit* (v0.9.2). Zenodo. https://doi.org/10.5281/zenodo.23764691

CCSbench continues the pre-bench-kit lineage of
[CCS-WB-classic](https://doi.org/10.5281/zenodo.23714574).
