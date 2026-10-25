# AirSpark paper design v0.33.1

Public static discussion manuscript: **AirSpark: A Simulated Academy for Self-Improving Aerial Manipulation**.
Research protocol only; quantitative results and implementation validation remain pending.

- Two contributions: the aerial manipulation simulated academy and feedback-driven policy self-improvement.
- Six-stage loop: rollout, stage diagnosis, practice planning, expert supervision, student update, evaluation/acceptance.
- Main tasks: Lemon Harvesting and Push Slider. ACT, DP and π0.5 LoRA test applicability, not architecture rankings.
- Benchmark students return to native AM-Bench after freeze. The independent hardware embodiment has separate initialization and two scene-source learning groups; 90 primary episodes.
- Components and cross-initialization experience reuse use DP lemon. Reuse remains an extension, not a third contribution.
- `protocol.html` holds the execution tiers, local ledger and exports. Its 19 settings / 57 chains / maximum 228 candidate trainings exclude initialization, pilots and supplements.
- Unknown budgets, evaluation counts, training/LoRA/Agent settings and thresholds remain unregistered.

## Authoring and publishing

The local CVPR_Airspark project is the canonical paired English LaTeX / Chinese HTML source. Shared figures, bibliography and protocol export to this static repository. Only reviewed static files publish to `Zhangbt6/AirSpark-paper`, branch `codex/paper-website`; unpublished LaTeX sources and generated PDFs are not exported.

Run the canonical project's sync/check before export. Current figure builders are `build-rsi-figure-v033.py` and `build-study-figure-v033.py`, followed by PNG export. Older builders and archives are historical, not current execution instructions.

Historical sites, including the complete v0.32, remain under `versions/`. Their tasks, counts, data-entry interfaces and deferred translation statuses do not describe v0.33.1. Current change list and pending pilot registration are in `protocol/revision-v0.33.1.txt`.


实机澄清：真实场景为自建摘柠檬场景，无需复现 AM-Bench 布局。常规仿真练习环境与初始化数据来源、数量、组成后续登记，尚未准备，不预设等量混合；当前不安排额外未见布局泛化及固定回合。主实机 90 回合不变。
