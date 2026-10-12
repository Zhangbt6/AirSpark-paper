# AirSpark paper design

Public discussion website for the AirSpark research paper. This repository contains only the static paper-design pages, not the AirSpark simulation source code.

- Current design: v0.10 — A Simulated Academy for Self-Improving Aerial Manipulation
- Evaluation: native AM-Bench return testing and paired real-scene experiments; stage-evidence-driven practice and bounded policy improvement.
- Earlier designs: `versions/v0.9.1/index.html`, `versions/v0.8/index.html`, `versions/v0.7/index.html` and `versions/v0.6/index.html`
- Project: https://github.com/Zhangbt6/AirSpark (access required)

## Update

Edit `index.html` (abstract), `chapters.js` (chapters), `style.css`, and `app.js`. Commit and push to `codex/paper-website`; GitHub Pages publishes the branch root automatically. Preserve version snapshots under `versions/` and use relative asset links for project-site compatibility.

Maintain source metadata in `citations.js`. Insert `<cite data-ref="source-key"></cite>` next to a supported claim; multiple keys are space separated. Numbers follow first occurrence. The bibliography includes source types, primary links, and chapter backlinks. Cite background evidence separately from proposed AirSpark methods and unrun experiments. The abstract remains self-contained without citations, following paper convention.

The website describes proposed methods and experiments, not established experimental results. Do not add credentials, private logs, or simulation code to this public repository.
