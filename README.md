# AirSpark paper design

Public discussion website for the AirSpark research paper. This repository contains only the static paper-design pages, not the AirSpark simulation source code.

- Current manuscript: v0.16.1 — A Simulated Academy for Self-Improving Aerial Manipulation
- Paper structure: abstract, introduction, related work, method, experiments, discussion, conclusion, references, appendix.
- Evaluation: native AM-Bench return testing and paired real-scene experiments; stage-evidence-driven practice and bounded policy improvement.
- Earlier designs: `versions/v0.15.1/index.html`, `versions/v0.15/index.html`, `versions/v0.14/index.html`, `versions/v0.13/index.html`, `versions/v0.12/index.html`, `versions/v0.11/index.html`, `versions/v0.10/index.html`, `versions/v0.9.1/index.html`, `versions/v0.8/index.html`, `versions/v0.7/index.html` and `versions/v0.6/index.html`
- v0.13 specifies process-condition selection, physical prefixes, expert-only action supervision, C/V/T separation, and shared-tool collection controls. It adds Fly-by-Code, RialTo, MimicGen and MuJoCo; updates bibliographic metadata and exports BibTeX. No new experimental results are claimed.
- v0.14 retains two contributions, unifies the paper name SparkMentor, distinguishes program refinement from parameter learning, and adds 11 verified formal publications. It strengthens the shared-tool recovery baseline and documents source-selection decisions in the appendix. Historical snapshots and engine interfaces are unchanged.
- v0.15 foregrounds the academy platform, separates shared infrastructure, SparkMentor orchestration and interchangeable practice methods, and adds platform reliability evaluation using the main experiment tasks. The appendix includes a 10-slide group-meeting outline for 2026-10-20; this is not a finished deck. No new implementation or experimental completion is claimed.
- v0.15.1 adds RPG (arXiv:2610.02204v1) as a direct simulation-practice-to-real-deployment neighbor; distinguishes persistent skill/prompt revision from student parameter learning and adds its evidence boundaries and meeting comparison. The main experiment matrix is unchanged.
- Project: https://github.com/Zhangbt6/AirSpark (access required)

## Update

Edit `index.html` (abstract), `chapters.js` (chapters), `style.css`, and `app.js`. Commit and push to `codex/paper-website`; GitHub Pages publishes the branch root automatically. Preserve version snapshots under `versions/` and use relative asset links for project-site compatibility.

Maintain source metadata in `references-data.js`; `citations.js` renders references and backlinks. Insert `<cite data-ref="source-key"></cite>` next to a supported claim; multiple keys are space separated. The website uses numeric citations with author-sorted entries. Run `node scripts/build-references.mjs` after metadata edits to regenerate `references.bib`. The final submission's official author kit controls BibTeX ordering and formatting. The inspected public CVPR template is still labeled 2026; do not label this website as a validated CVPR 2027 template.

The bibliography includes complete author metadata, publication types, source links and chapter backlinks. Do not infer conference acceptance solely from an arXiv comment. Keep formal publication, preprint, software and documentation records distinct. Cite background evidence separately from proposed AirSpark methods and unrun experiments. The abstract remains self-contained without citations, following paper convention.

The website describes proposed methods and experiments, not established experimental results. Do not add credentials, private logs, or simulation code to this public repository.

Write main chapters as connected paper prose. Keep implementation schedules, resource checks, and editorial history in the appendix. Use `data-number` for chapter numbering and `data-nav` on subsection headings for the sidebar. Preserve existing section IDs when reorganizing so previously shared links still work.

Publication checks prioritize original proceedings, publisher records and author-hosted manuscripts. Distinguish conference year from PMLR publication year. The literature map records reading priorities and deferred candidates; it is not a claim that all cited methods have been independently reproduced.

## Paper figures (v0.16)

Four original research-design figures are embedded in Methods and Experiments, with a figure index in the appendix. SVG keeps editable text and geometry; 2880-pixel PNG files support slides. They contain no measured outcomes or implementation-completion claims. Downloadable bundle: `figures/AirSpark-Figures-v0.16.zip`.

Edit `scripts/build-figures.py` and run it with Python 3. Export PNG with `node scripts/export-figures.cjs` (`sharp` must be available through Node module lookup). Rebuild the ZIP from the four SVG/PNG pairs, `FIGURE-NOTES.txt` and both source scripts after changes. Figure numbers and captions are maintained in `chapters.js`.

The v0.16.1 website displays Chinese figures by default. English SVG/PNG assets and the v0.16 English bundle are retained unchanged. Run `python scripts/localize-figures.py` after building the English SVGs, then `node scripts/export-figures.cjs --zh` to export Chinese PNGs. The v0.16.1 ZIP includes both languages and all three source scripts.
