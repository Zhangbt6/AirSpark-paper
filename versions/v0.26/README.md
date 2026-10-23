# AirSpark paper design

Public discussion website for the AirSpark research paper. This repository contains only the static paper-design pages, not the AirSpark simulation source code.

- Current Chinese manuscript: v0.26 — A Simulated Academy for Self-Improving Aerial Manipulation
- Paper structure: abstract, introduction, related work, method, experiments, discussion, conclusion, references, appendix.
- Evaluation: native AM-Bench return testing and paired real-scene experiments; stage-evidence-driven practice and bounded policy improvement.
- Earlier designs: `versions/v0.20/index.html`, `versions/v0.19/index.html`, `versions/v0.18/index.html`, `versions/v0.17/index.html`, `versions/v0.15.1/index.html`, `versions/v0.15/index.html`, `versions/v0.14/index.html`, `versions/v0.13/index.html`, `versions/v0.12/index.html`, `versions/v0.11/index.html`, `versions/v0.10/index.html`, `versions/v0.9.1/index.html`, `versions/v0.8/index.html`, `versions/v0.7/index.html` and `versions/v0.6/index.html`
- v0.13 specifies process-condition selection, physical prefixes, expert-only action supervision, C/V/T separation, and shared-tool collection controls. It adds Fly-by-Code, RialTo, MimicGen and MuJoCo; updates bibliographic metadata and exports BibTeX. No new experimental results are claimed.
- v0.14 retains two contributions, unifies the paper name SparkMentor, distinguishes program refinement from parameter learning, and adds 11 verified formal publications. It strengthens the shared-tool recovery baseline and documents source-selection decisions in the appendix. Historical snapshots and engine interfaces are unchanged.
- v0.15 foregrounds the academy platform, separates shared infrastructure, SparkMentor orchestration and interchangeable practice methods, and adds platform reliability evaluation using the main experiment tasks. The appendix includes a 10-slide group-meeting outline for 2026-10-20; this is not a finished deck. No new implementation or experimental completion is claimed.
- v0.15.1 adds RPG (arXiv:2610.02204v1) as a direct simulation-practice-to-real-deployment neighbor; distinguishes persistent skill/prompt revision from student parameter learning and adds its evidence boundaries and meeting comparison. The main experiment matrix is unchanged.
- Project: https://github.com/Zhangbt6/AirSpark (access required)

## Update

Current authoring source is the local CVPR_Airspark manuscript project: paired English LaTeX / Chinese HTML chapters share references, figures, and protocol. Use its sync/check export before publication; do not independently edit generated `index.html` and `chapters.js`. Commit only reviewed static exports to `codex/paper-website`; GitHub Pages publishes the branch root automatically. Preserve version snapshots under `versions/` and use relative asset links for project-site compatibility.

Maintain source metadata in `references-data.js`; `citations.js` renders references and backlinks. Insert `<cite data-ref="source-key"></cite>` next to a supported claim; multiple keys are space separated. The website uses numeric citations with author-sorted entries. Run `node scripts/build-references.mjs` after metadata edits to regenerate `references.bib`. The final submission's official author kit controls BibTeX ordering and formatting. The inspected public CVPR template is still labeled 2026; do not label this website as a validated CVPR 2027 template.

The bibliography includes complete author metadata, publication types, source links and chapter backlinks. Do not infer conference acceptance solely from an arXiv comment. Keep formal publication, preprint, software and documentation records distinct. Cite background evidence separately from proposed AirSpark methods and unrun experiments. The abstract remains self-contained without citations, following paper convention.

The website describes proposed methods and experiments, not established experimental results. Do not add credentials, private logs, or simulation code to this public repository.

Write main chapters as connected paper prose. Keep implementation schedules, resource checks, and editorial history in the appendix. Use `data-number` for chapter numbering and `data-nav` on subsection headings for the sidebar. Preserve existing section IDs when reorganizing so previously shared links still work.

Publication checks prioritize original proceedings, publisher records and author-hosted manuscripts. Distinguish conference year from PMLR publication year. The literature map records reading priorities and deferred candidates; it is not a claim that all cited methods have been independently reproduced.

## Paper figures (v0.16)

Four original research-design figures are embedded in Methods and Experiments, with a figure index in the appendix. SVG keeps editable text and geometry; 2880-pixel PNG files support slides. They contain no measured outcomes or implementation-completion claims. Downloadable bundle: `figures/AirSpark-Figures-v0.16.zip`.

Edit `scripts/build-figures.py` and run it with Python 3. Export PNG with `node scripts/export-figures.cjs` (`sharp` must be available through Node module lookup). Rebuild the ZIP from the four SVG/PNG pairs, `FIGURE-NOTES.txt` and both source scripts after changes. Figure numbers and captions are maintained in `chapters.js`.

The v0.16.1 website displays Chinese figures by default. English SVG/PNG assets and the v0.16 English bundle are retained unchanged. Run `python scripts/localize-figures.py` after building the English SVGs, then `node scripts/export-figures.cjs --zh` to export Chinese PNGs. The v0.16.1 ZIP includes both languages and all three source scripts.

The v0.16.2 revision redraws Figure 4 as a three-part experimental pipeline (initialization, AirSpark improvement, simulation/real evaluation). English and Chinese variants, figure dimensions, caption and native-evaluation prose are synchronized. The detailed B0–B3 comparison remains in the experiment table.

The v0.17 figure organization separates the academy platform (Figure 1) from the RSI method (Figure 2), followed by the experimental pipeline (Figure 3). Execution alignment and expert-continuation details are supplementary Figures A1/A2. Chinese is the default display language; English vector/PNG files are retained. The RSI selector is the current process-condition reference method, not a claim of recursive teacher self-modification.


## v0.18 — bounded completion of the feedback loop

Retains the academy title, both contribution headings, the process-condition reference method, B0–B3, native AM-Bench testing and real-scene transfer. Adds learning-response records, intervention memory and bounded practice-plan adaptation as supporting mechanisms. The representative-task analysis separates fixed plans, current feedback and historical intervention feedback; it does not replace the main experiment matrix or claim a first teaching-evolution algorithm.

Only Figure 2 is revised: execution feedback, learning feedback and a dashed bounded-adjustment branch. Figure 1, Figure 3 and A1/A2 retain their contents. Current bilingual bundle: `figures/AirSpark-Figures-v0.18.zip`. Full v0.17 text and figures are archived under `versions/v0.17/`. The appendix anchor `#revision-v018` lists exactly what changed. Four references and BibTeX entries add the curriculum/learning-feedback context. No new implementation or measured results are claimed.


## v0.19 — feedback principles and concrete interventions

Retains the academy positioning, both contributions, all existing figures and the B0–B3/native/real evaluation matrix. Adds a learning-feedback formulation separating capability profiles, fixed objectives, measurements, intervention decisions and the actual training process; no learned predictor or convergence guarantee is claimed. Documents intervention priorities, an aerial takeover-timing case, diagnostic routing and bounded exit paths. Appendix A.6 gives a conditional acceptance statement, its statistical assumptions and a reading route. New bilingual Figure A3 explains the feedback roles without replacing the three main figures. Full v0.18 is archived. See `#revision-v019` for the exact change list. No new implementation or empirical result is claimed.


## v0.20 — executable research protocol and manuscript editing

Preserves the academy and feedback-driven policy self-improvement contributions and method scope. Adds Algorithm 1, an empirical acceptance rule, a state transition table, and a pilot/freeze configuration table with a downloadable JSON template. Rejected candidates do not overwrite accepted training state or silently add replay data; cost, attempts and memory persist. Uses population objective J_D, distinguishes capability c from acquisition cost kappa, and spells out condition counting and sparse coverage. Explicit labels distinguish B3 and the current/history-feedback adaptation variants. Compresses the abstract and principle explanation; implementation priorities remain available in a collapsible block. Feedback Systems is now a 2021 second-edition book entry. Figure 2 symbols, Figure 3 deployment note and Figure A3 target role are synchronized. Full v0.19 is archived; `#revision-v020` lists changes. Numeric parameters remain pilot-pending; this is a research protocol, not a claim that rollout/training code or results are complete.


## v0.21 — align the main claim with main evidence

Retains the academy platform and feedback-driven policy self-improvement contributions. The main study compares fixed B3, deterministic plan revision, current-feedback agent revision, and history-informed agent revision on at least two distinct tasks with one student backend and at least three ordered intervention opportunities. Rule and history-agent decisions share evidence, history, tools, actions and resource caps; all tested branches and rejections are charged. B1/B2 support focused allocation analysis.

At least one main task crosses native/academy collection with coverage/history-informed revision, addressing the value of academy data over direct native collection. Parent provenance, native task/robot/action/scoring correspondence, practical effects, power/precision and sample counts must be frozen after pilots. Report absolute changes from B0 as well as matched-budget contrasts. Physical-real testing means a frozen student runs on actual hardware, with real-scene appearance reconstruction and explicit physical/robot registration. A different embodiment requires a matching parent and separately charged minimal loop. No quantitative result is asserted.

Figures 2 and 3 and the shared JSON protocol are updated. To rebuild current figures, run the original generators/localization/feedback builder, then `python scripts/build-study-figures-v021.py` before PNG export; earlier generators otherwise overwrite the new diagrams. Current bilingual bundle: `figures/AirSpark-Figures-v0.21.zip`. Full v0.20 is archived; `#revision-v021` lists exact changes.


## v0.22 — clarify the learning cycle and feedback semantics

Figure 2 returns to six numbered stages: policy rollout, interaction diagnosis, feedback-guided practice planning, expert supervision generation, student policy update, and learning evaluation/acceptance. Intervention memory sits outside the main cycle. E_r and prior M_r guide the current plan A_r; learning feedback F_r is stored in M_(r+1) for subsequent decisions. Plan/configuration/decision-rule notation is disambiguated; no teacher network or new search space is added.

The abstract and introduction focus on why generated experience need not improve the current student. Contribution definitions describe facilities and mechanism, with group counts retained in experiments. Fixed experience B3 still reallocates conditions from execution feedback; the current variant retains its current plan/latest feedback and is not memory-free. Frozen physical deployment is distinguished from an unperformed real-failure-return loop. Main comparisons and budgets remain unchanged.

Rebuild the original generators, localization, feedback figure, and v0.21 study figures first, then run `python scripts/build-rsi-figure-v022.py` before PNG export. The current editable bilingual bundle is `figures/AirSpark-Figures-v0.22.zip`. Full v0.21 is archived; `#revision-v022` and `#rsi-module-contract` record changes and module semantics.


## v0.23 — academy and feedback-driven aerial policy self-improvement

Restores the academy/platform research objective, with three related-work sections and moving-viewpoint challenges first. Primary study: B0 / fixed coverage workflow B1 / complete AirSpark (canonical ID B3+adapt-history), on at least two tasks and one student backend. Rule/current/history attribution is limited to one representative task. E1 reliability includes a native/academy B1 source pair; a full 2x2 is optional. Every intervention selects one plan and trains at most one candidate against the retained parent. Round counts, chain counts and budgets remain pilot-dependent. No new measured results.

Figure 2 is byte-for-byte unchanged from v0.22. Figure 3 alone is redrawn for E1/E2/E3. For a complete rebuild, run the earlier figure builders, then build-rsi-figure-v022.py, then build-study-figure-v023.py, and finally export-figures.cjs. The v0.23 bundle includes both languages and build sources. The exact public v0.22 site is archived under versions/v0.22/. Source and pairing checks are maintained in the separate local manuscript project; unpublished English manuscript sources are not exported to Pages.

## v0.24 — aerial capability challenges and feedback learning

The Chinese abstract and introduction now follow aerial capability challenges, feedback-driven learning, the simulated academy, and capability validation. The two contributions remain the academy and feedback-driven aerial policy self-improvement. Six-stage RSI, intervention memory, diagnostic routing, reference practice mechanisms, figures, protocol, and E1/E2/E3 remain unchanged from v0.23. Method refinements can continue independently of this narrative revision. English LaTeX and its PDF intentionally remain at v0.23 pending sentence-level agreement; they are not part of this public export. The v0.23 site is archived under versions/v0.23/. No new results are claimed.

## v0.25 — motivation clarified in Chinese

Clarifies how aerial motion, onboard vision, and contact create coordination demands; distinguishes execution feedback from measured learning feedback; and explains the academy's repeatable interaction facilities. The two contributions, six-step method, figures, protocol, experiments, and English manuscript remain unchanged. Exact Chinese sentence changes appear under #revision-v025; v0.24 is archived. No new results or claims of Agent/memory superiority are introduced.

## v0.26 — formal manuscript prose

Rewrites the Chinese abstract and introduction, retains the three related-work sections, and replaces conversational commentary with technical positioning and evaluation statements. Method and experiment prose is edited without changing algorithms, equations, tables, figures, or protocol. Contributions are verbatim preserved. Discussion is consolidated; no experimental findings are added. English LaTeX remains at v0.23 pending coordinated translation. The v0.25 site is archived.
