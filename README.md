# CCSbench

A rebuild of the Critical Code Studies Workbench on top of
[**bench-kit**](https://github.com/critical-code-studies/bench-kit) —
the shared code used by the SHRDLU, Spacewar!, ELIZA and Melville
benches. Sibling in the *-bench family alongside
[**LLMbench**](https://github.com/dmberry/LLMbench).

> This repository is **early scaffolding**. Active design work is in
> progress; the first release (v1.0.0) ships when bench-kit itself
> reaches 1.0 — the point at which Stages 0–2 of the bench-kit
> *project builder* land (settings-definable bench config, runtime
> versions, storage adapter + project file). Until then, use
> [**CCS-WB-classic**](https://github.com/Computational-Hermeneutics/CCS-WB-classic)
> (pre-bench-kit, frozen at v5.2.0).

## What this will be

- **Close reading of code as cultural artefact**, with six typed
  annotations (Observation, Question, Metaphor, Pattern, Context,
  Critique) over any file the user brings in.
- **Kintsugi repair**, using bench-kit's existing repair register
  (`hibi` / `yobitsugi` / `kake` / `mount`) so builder-made and
  published benches share one renderer. Held files are never mutated;
  repairs are overlaid in gold at read time. An opt-in *flatten*
  action can derive a child version with the repairs applied in
  place.
- **Side-by-side comparison** of two files within one project, and of
  two versions of one program (via bench-kit's Collate, Genealogy and
  Book's Compare).
- **A project builder** — users build a bench by hand in the browser
  or in a desktop wrapper (Tauri is the first-choice standalone
  target), without needing a repository up front. Finished projects
  export as static, citable benches.
- **Local-first storage** with the Supabase cloud ring from
  CCS-WB-classic available as one optional backend.
- **AI dialogue as an opt-in module** — the browser-direct provider
  roster from CCS-WB-classic (Anthropic, OpenAI, Google, Ollama,
  OpenRouter, Hugging Face, OpenAI-compatible), with keys in
  `localStorage`.

## History

See [`GENEALOGY.md`](GENEALOGY.md) for the full lineage back to the
pre-bench-kit CCS-WB codebase.

## Licence

GPL-3.0-or-later (inherited from CCS-WB-classic v5.2.0).
