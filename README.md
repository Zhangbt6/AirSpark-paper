# AirSpark paper design

Public discussion website for the AirSpark research paper. This repository contains only the static paper-design pages, not the AirSpark simulation source code.

- Current manuscript: v0.13 — A Simulated Academy for Self-Improving Aerial Manipulation
- Paper structure: abstract, introduction, related work, method, experiments, discussion, conclusion, references, appendix.
- Evaluation: native AM-Bench return testing and paired real-scene experiments; stage-evidence-driven practice and bounded policy improvement.
- Earlier designs: `versions/v0.12/index.html`, `versions/v0.11/index.html`, `versions/v0.10/index.html`, `versions/v0.9.1/index.html`, `versions/v0.8/index.html`, `versions/v0.7/index.html` and `versions/v0.6/index.html`
- v0.13 specifies process-condition selection, physical prefixes, expert-only action supervision, C/V/T separation, and shared-tool collection controls. It adds Fly-by-Code, RialTo, MimicGen and MuJoCo; updates bibliographic metadata and exports BibTeX. No new experimental results are claimed.
- Project: https://github.com/Zhangbt6/AirSpark (access required)

## Update

Edit `index.html` (abstract), `chapters.js` (chapters), `style.css`, and `app.js`. Commit and push to `codex/paper-website`; GitHub Pages publishes the branch root automatically. Preserve version snapshots under `versions/` and use relative asset links for project-site compatibility.

Maintain source metadata in `references-data.js`; `citations.js` renders references and backlinks. Insert `<cite data-ref="source-key"></cite>` next to a supported claim; multiple keys are space separated. The website uses numeric citations with author-sorted entries. Run `node scripts/build-references.mjs` after metadata edits to regenerate `references.bib`. The final submission's official author kit controls BibTeX ordering and formatting. The inspected public CVPR template is still labeled 2026; do not label this website as a validated CVPR 2027 template.

The bibliography includes complete author metadata, publication types, source links and chapter backlinks. Do not infer conference acceptance solely from an arXiv comment. Keep formal publication, preprint, software and documentation records distinct. Cite background evidence separately from proposed AirSpark methods and unrun experiments. The abstract remains self-contained without citations, following paper convention.

The website describes proposed methods and experiments, not established experimental results. Do not add credentials, private logs, or simulation code to this public repository.

Write main chapters as connected paper prose. Keep implementation schedules, resource checks, and editorial history in the appendix. Use `data-number` for chapter numbering and `data-nav` on subsection headings for the sidebar. Preserve existing section IDs when reorganizing so previously shared links still work.
