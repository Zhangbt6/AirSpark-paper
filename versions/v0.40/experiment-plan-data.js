window.AIRSPARK_STUDY_PLAN = {
  "plan_version": "v0.40",
  "status": "three_task_scope_fixed_runtime_validation_pending",
  "date": "2026-11-09",
  "tasks": [
    "LemonHarvesting",
    "PushSlider",
    "PressButton"
  ],
  "students": [
    "DP"
  ],
  "defaults": {
    "chains": 3,
    "max_interventions": 2
  },
  "resources": {
    "hardware": null,
    "execution": "measure_then_schedule",
    "budget_unit": "collection_attempts_and_fixed_training_steps",
    "per_round_caps": null,
    "evaluation_counts": {
      "sealed_per_model": 50,
      "real_sim_per_model": 30
    }
  },
  "settings": [
    {
      "id": "DP-LemonHarvesting-fixed",
      "student": "DP",
      "task": "LemonHarvesting",
      "group": "fixed",
      "name": "固定练习",
      "tier": 1,
      "line": "benchmark",
      "chains": 3,
      "max_interventions": 2,
      "parent_contract": "task_common_parent"
    },
    {
      "id": "DP-LemonHarvesting-full",
      "student": "DP",
      "task": "LemonHarvesting",
      "group": "full",
      "name": "完整方法",
      "tier": 1,
      "line": "benchmark",
      "chains": 3,
      "max_interventions": 2,
      "parent_contract": "task_common_parent"
    },
    {
      "id": "DP-PushSlider-fixed",
      "student": "DP",
      "task": "PushSlider",
      "group": "fixed",
      "name": "固定练习",
      "tier": 1,
      "line": "benchmark",
      "chains": 3,
      "max_interventions": 2,
      "parent_contract": "task_common_parent"
    },
    {
      "id": "DP-PushSlider-full",
      "student": "DP",
      "task": "PushSlider",
      "group": "full",
      "name": "完整方法",
      "tier": 1,
      "line": "benchmark",
      "chains": 3,
      "max_interventions": 2,
      "parent_contract": "task_common_parent"
    },
    {
      "id": "DP-PressButton-fixed",
      "student": "DP",
      "task": "PressButton",
      "group": "fixed",
      "name": "固定练习",
      "tier": 1,
      "line": "benchmark",
      "chains": 3,
      "max_interventions": 2,
      "parent_contract": "task_common_parent"
    },
    {
      "id": "DP-PressButton-full",
      "student": "DP",
      "task": "PressButton",
      "group": "full",
      "name": "完整方法",
      "tier": 1,
      "line": "benchmark",
      "chains": 3,
      "max_interventions": 2,
      "parent_contract": "task_common_parent"
    },
    {
      "id": "DP-LemonHarvesting-rule",
      "student": "DP",
      "task": "LemonHarvesting",
      "group": "rule",
      "name": "规则分配",
      "tier": 3,
      "line": "ablation",
      "chains": 3,
      "max_interventions": 2,
      "parent_contract": "lemon_common_parent"
    },
    {
      "id": "DP-LemonHarvesting-no_history",
      "student": "DP",
      "task": "LemonHarvesting",
      "group": "no_history",
      "name": "无跨轮记忆",
      "tier": 3,
      "line": "ablation",
      "chains": 3,
      "max_interventions": 2,
      "parent_contract": "lemon_common_parent"
    },
    {
      "id": "real-DP-lemon-fixed",
      "student": "DP",
      "task": "LemonHarvesting",
      "group": "fixed",
      "name": "重建场景＋固定练习",
      "tier": 2,
      "line": "real_matched_embodiment",
      "chains": 3,
      "max_interventions": 2,
      "parent_contract": "real_common_parent"
    },
    {
      "id": "real-DP-lemon-full",
      "student": "DP",
      "task": "LemonHarvesting",
      "group": "full",
      "name": "重建场景＋完整方法",
      "tier": 2,
      "line": "real_matched_embodiment",
      "chains": 3,
      "max_interventions": 2,
      "parent_contract": "real_common_parent"
    }
  ],
  "totals": {
    "incremental_settings": 10,
    "chains": 30,
    "max_candidate_trainings": 60,
    "benchmark_sealed_models": 27,
    "benchmark_sealed_episodes": 1350,
    "real_sim_models": 7,
    "real_sim_episodes": 210,
    "real_episodes": 90
  },
  "tiers": [
    {
      "tier": 1,
      "name": "DP 三任务主对照",
      "settings": 6,
      "chains": 18,
      "max_candidate_trainings": 36
    },
    {
      "tier": 2,
      "name": "重建场景实机固定／完整对照",
      "settings": 2,
      "chains": 6,
      "max_candidate_trainings": 12
    },
    {
      "tier": 3,
      "name": "柠檬规划与跨轮记忆消融",
      "settings": 2,
      "chains": 6,
      "max_candidate_trainings": 12
    }
  ],
  "training": {
    "initialization": "retained_parent_registered_weights",
    "optimizer": "reinitialized_per_candidate",
    "learning_rate_schedule": "reinitialized_per_candidate",
    "steps_per_candidate": null,
    "replay_rule": null,
    "exact_training_state_resume": false
  },
  "planning": {
    "full": "Mentor_proposes_condition_proportions_and_registered_options",
    "rule": "visitation_times_conditional_failure_over_qualified_cost",
    "validator": [
      "feasibility",
      "normalization",
      "coverage_floor",
      "condition_caps",
      "budget"
    ],
    "history_ablation": "primary two-update lemon control; current diagnosis only; historical records, prior learning feedback and derived summaries masked; policy weights and training data preserved",
    "task_score_controller_inputs": "fixed"
  },
  "supervision": {
    "primary": "condition_specific_complete_expert",
    "optional": "validated_physical_prefix_expert_suffix",
    "minimum_pilot_attempts_per_condition": 10,
    "minimum_qualified_fraction": 0.7,
    "expert_mask_and_chunk_boundaries": true,
    "same_registry_for_all_groups": true
  },
  "metrics": {
    "lemon_primary": "task_truth.source_task_success at registered evaluation time",
    "lemon_secondary": [
      "ever_success",
      "platform_latched_success",
      "two_second_stability"
    ],
    "slider_primary": "source_endpoint_threshold",
    "diagnostics": [
      "stage_reach",
      "conditional_stage_pass",
      "safety_stop",
      "contact",
      "tracking"
    ],
    "supervision_unit": "unique_expert_timesteps_and_duration_plus_eligible_windows",
    "lemon_platform": "task_truth.task_success / placement_release_latched_v2 separately",
    "press_button_primary": "registered source PressButton goal predicate; runtime field/threshold binding pending",
    "main_table": [
      "complete_success",
      "key_stage_reach",
      "qualified_supervision_and_expert_attempts"
    ],
    "failure_distribution": "one pre-registered primary failure label per scoreable episode; use success plus mutually exclusive failures for all-episode stacks; retain secondary labels"
  },
  "splits": {
    "C_count": null,
    "V_count": null,
    "T_per_task": 50,
    "pre_registered_manifests": true,
    "actual_state_overlap_check": true,
    "test_feedback": false
  },
  "real_test": {
    "common_parent": true,
    "same_reconstructed_scene": true,
    "initial_models": 1,
    "initial_episodes": 30,
    "updated_groups": 2,
    "chains_per_group": 3,
    "episodes_per_updated_model": 10,
    "main_episodes": 90,
    "sim_episodes_per_model": 30,
    "total_sim_episodes": 210,
    "matched_start_blocks": true,
    "runtime_mentor_correction": false,
    "initial_real_data_and_replay": null,
    "optional_standard_scene_control_real_episodes": 30
  },
  "extensions": [
    "ACT_lemon",
    "native_return_after_interface_verification",
    "cross_initialization_experience_reuse",
    "standard_scene_full_control",
    "offline_multi_LLM_planning_comparison",
    "retrospective_sealed_learning_curve"
  ],
  "pending": [
    "parent_and_data_hashes",
    "task_and_score_manifest",
    "split_manifests",
    "legal_condition_ranges",
    "collection_attempt_cap",
    "training_steps_and_replay",
    "acceptance_thresholds",
    "agent_model_prompt_and_permissions",
    "gpu_count_and_measured_runtime",
    "real_data_and_start_blocks",
    "qualified_suffix_registry",
    "press_button_UE_task_expert_and_data_validation",
    "press_button_parent_and_native_criterion_binding"
  ],
  "count_note": "Training upper bounds exclude initial training, pilots, diagnostics, development, collection and optional tests.",
  "metrics_contract": "protocol/metrics-v0.40.json",
  "press_button": {
    "task": "PressButton",
    "status": "included_in_primary_scope_UE_validation_pending",
    "interaction_class": "instantaneous_contact",
    "native_source": "https://github.com/ambench/ambench",
    "UE_verified": false,
    "existing_evidence": "legacy/research/receipts/phase1_pressbutton_20261014.json; native only",
    "readiness": [
      "UE physical task and verified criterion",
      "expert and data QA",
      "observation/action alignment",
      "train reload and rollout smoke",
      "resource schedule including all tests"
    ],
    "chains_per_updated_method": 3,
    "max_interventions": 2,
    "methods": [
      "initial",
      "fixed",
      "full"
    ],
    "scope_authorization": "user_2026-11-09",
    "native_criterion_binding": null,
    "primary_test_models": 7,
    "primary_test_episodes": 350,
    "readiness_review_Beijing": "2026-11-10",
    "fallback": "Review UE readiness and parent on development pilots by Nov 10. If zero success, diagnose deployment, expert, and learning first; document any scope change before sealed testing. Zero success is a valid result, not a post-hoc exclusion rule."
  },
  "learning_curves": {
    "primary": "paired development pool V; per-chain thin lines and mean bold lines",
    "sealed_optional": "after all learning decisions freeze, retrospectively evaluate R1 checkpoints; no feedback to learning",
    "additional_three_task_R1_episodes": 900,
    "memory_evidence": "paired full/no-history R2 outcomes plus traceable interventions; first-round inputs have no prior intervention history"
  },
  "memory_ablation": {
    "status": "primary_lemon_component_control",
    "chains": 3,
    "updates": 2,
    "preserved": [
      "current policy weights",
      "cumulative training dataset and replay",
      "current diagnosis from current policy rollouts",
      "fixed tool registry and safety constraints",
      "runtime budget and round index"
    ],
    "masked": [
      "prior execution and evaluation reports",
      "prior practice plans",
      "prior learning feedback",
      "derived historical explanations and recommendations",
      "prior LLM conversation and retrieval state"
    ],
    "implementation": "fresh Mentor context per round; no historical summaries through tool results or runtime metadata",
    "scope": "history can first affect the second practice decision; not evidence of long-term memory benefits",
    "same_parent_tools_budget_training_and_acceptance": true
  }
};
