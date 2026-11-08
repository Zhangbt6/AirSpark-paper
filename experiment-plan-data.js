window.AIRSPARK_STUDY_PLAN = {
  "plan_version": "v0.36",
  "status": "scope_fixed_pilot_parameters_pending",
  "date": "2026-11-08",
  "tasks": [
    "LemonHarvesting",
    "PushSlider"
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
    "incremental_settings": 8,
    "chains": 24,
    "max_candidate_trainings": 48,
    "benchmark_sealed_models": 20,
    "benchmark_sealed_episodes": 1000,
    "real_sim_models": 7,
    "real_sim_episodes": 210,
    "real_episodes": 90
  },
  "tiers": [
    {
      "tier": 1,
      "name": "DP 两任务主对照",
      "settings": 4,
      "chains": 12,
      "max_candidate_trainings": 24
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
      "name": "柠檬规则与记忆消融",
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
    "history_ablation": "current_diagnosis_latest_available_learning_feedback_and_runtime_only",
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
    "lemon_primary": "verified_source_task_final_success_with_version",
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
    "supervision_unit": "qualified_expert_action_windows"
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
    "standard_scene_full_control"
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
    "qualified_suffix_registry"
  ],
  "count_note": "Training upper bounds exclude initial training, pilots, diagnostics, development, collection and optional tests."
};
