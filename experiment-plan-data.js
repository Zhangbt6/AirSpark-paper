window.AIRSPARK_STUDY_PLAN = {
  "plan_version": "v0.33",
  "status": "planning_protocol_not_frozen_or_measured",
  "date": "2026-10-25",
  "tasks": [
    "LemonHarvesting",
    "PushSlider"
  ],
  "students": [
    "ACT",
    "DP",
    "pi05_LoRA"
  ],
  "resources": {
    "hardware": "single_RTX_4090",
    "execution": "serial",
    "budget_unit": null,
    "per_round_caps": null,
    "evaluation_counts": null
  },
  "defaults": {
    "chains": 3,
    "max_interventions": 4
  },
  "settings": [
    {
      "id": "DP-LemonHarvesting-B1",
      "student": "DP",
      "task": "LemonHarvesting",
      "group": "B1",
      "name": "固定练习",
      "tier": 1,
      "line": "benchmark",
      "parent_contract": "task_student_parent",
      "chains": 3,
      "max_interventions": 4
    },
    {
      "id": "DP-LemonHarvesting-B3+adapt-history",
      "student": "DP",
      "task": "LemonHarvesting",
      "group": "B3+adapt-history",
      "name": "AirSpark（完整）",
      "tier": 1,
      "line": "benchmark",
      "parent_contract": "task_student_parent",
      "chains": 3,
      "max_interventions": 4
    },
    {
      "id": "DP-PushSlider-B1",
      "student": "DP",
      "task": "PushSlider",
      "group": "B1",
      "name": "固定练习",
      "tier": 1,
      "line": "benchmark",
      "parent_contract": "task_student_parent",
      "chains": 3,
      "max_interventions": 4
    },
    {
      "id": "DP-PushSlider-B3+adapt-history",
      "student": "DP",
      "task": "PushSlider",
      "group": "B3+adapt-history",
      "name": "AirSpark（完整）",
      "tier": 1,
      "line": "benchmark",
      "parent_contract": "task_student_parent",
      "chains": 3,
      "max_interventions": 4
    },
    {
      "id": "pi05_LoRA-LemonHarvesting-B1",
      "student": "pi05_LoRA",
      "task": "LemonHarvesting",
      "group": "B1",
      "name": "固定练习",
      "tier": 4,
      "line": "benchmark",
      "parent_contract": "task_student_parent",
      "chains": 3,
      "max_interventions": 4
    },
    {
      "id": "pi05_LoRA-LemonHarvesting-B3+adapt-history",
      "student": "pi05_LoRA",
      "task": "LemonHarvesting",
      "group": "B3+adapt-history",
      "name": "AirSpark（完整）",
      "tier": 4,
      "line": "benchmark",
      "parent_contract": "task_student_parent",
      "chains": 3,
      "max_interventions": 4
    },
    {
      "id": "pi05_LoRA-PushSlider-B1",
      "student": "pi05_LoRA",
      "task": "PushSlider",
      "group": "B1",
      "name": "固定练习",
      "tier": 4,
      "line": "benchmark",
      "parent_contract": "task_student_parent",
      "chains": 3,
      "max_interventions": 4
    },
    {
      "id": "pi05_LoRA-PushSlider-B3+adapt-history",
      "student": "pi05_LoRA",
      "task": "PushSlider",
      "group": "B3+adapt-history",
      "name": "AirSpark（完整）",
      "tier": 4,
      "line": "benchmark",
      "parent_contract": "task_student_parent",
      "chains": 3,
      "max_interventions": 4
    },
    {
      "id": "ACT-LemonHarvesting-B1",
      "student": "ACT",
      "task": "LemonHarvesting",
      "group": "B1",
      "name": "固定练习",
      "tier": 5,
      "line": "benchmark",
      "parent_contract": "task_student_parent",
      "chains": 3,
      "max_interventions": 4
    },
    {
      "id": "ACT-LemonHarvesting-B3+adapt-history",
      "student": "ACT",
      "task": "LemonHarvesting",
      "group": "B3+adapt-history",
      "name": "AirSpark（完整）",
      "tier": 5,
      "line": "benchmark",
      "parent_contract": "task_student_parent",
      "chains": 3,
      "max_interventions": 4
    },
    {
      "id": "ACT-PushSlider-B1",
      "student": "ACT",
      "task": "PushSlider",
      "group": "B1",
      "name": "固定练习",
      "tier": 5,
      "line": "benchmark",
      "parent_contract": "task_student_parent",
      "chains": 3,
      "max_interventions": 4
    },
    {
      "id": "ACT-PushSlider-B3+adapt-history",
      "student": "ACT",
      "task": "PushSlider",
      "group": "B3+adapt-history",
      "name": "AirSpark（完整）",
      "tier": 5,
      "line": "benchmark",
      "parent_contract": "task_student_parent",
      "chains": 3,
      "max_interventions": 4
    },
    {
      "id": "DP-LemonHarvesting-B3",
      "student": "DP",
      "task": "LemonHarvesting",
      "group": "B3",
      "name": "AirSpark（无方案修订）",
      "tier": 2,
      "line": "benchmark",
      "parent_contract": "task_student_parent",
      "chains": 3,
      "max_interventions": 4
    },
    {
      "id": "DP-LemonHarvesting-B3+adapt-rule",
      "student": "DP",
      "task": "LemonHarvesting",
      "group": "B3+adapt-rule",
      "name": "AirSpark（规则修订）",
      "tier": 2,
      "line": "benchmark",
      "parent_contract": "task_student_parent",
      "chains": 3,
      "max_interventions": 4
    },
    {
      "id": "DP-LemonHarvesting-B3+adapt-current",
      "student": "DP",
      "task": "LemonHarvesting",
      "group": "B3+adapt-current",
      "name": "AirSpark（无跨轮记忆）",
      "tier": 2,
      "line": "benchmark",
      "parent_contract": "task_student_parent",
      "chains": 3,
      "max_interventions": 4
    },
    {
      "id": "real-DP-lemon-benchmark",
      "student": "DP",
      "task": "LemonHarvesting",
      "group": "B3+adapt-history",
      "name": "AirSpark-基准场景",
      "tier": 1,
      "line": "real_matched_embodiment",
      "parent_contract": "real_common_parent",
      "chains": 3,
      "max_interventions": 4
    },
    {
      "id": "real-DP-lemon-reconstructed",
      "student": "DP",
      "task": "LemonHarvesting",
      "group": "B3+adapt-history",
      "name": "AirSpark-重建场景",
      "tier": 1,
      "line": "real_matched_embodiment",
      "parent_contract": "real_common_parent",
      "chains": 3,
      "max_interventions": 4
    },
    {
      "id": "reuse-DP-lemon-imported",
      "student": "DP",
      "task": "LemonHarvesting",
      "group": "B3+adapt-history",
      "name": "导入源教学经验",
      "tier": 3,
      "line": "reuse",
      "parent_contract": "new_disjoint_demo_parent",
      "chains": 3,
      "max_interventions": 4
    },
    {
      "id": "reuse-DP-lemon-empty",
      "student": "DP",
      "task": "LemonHarvesting",
      "group": "B3+adapt-history",
      "name": "空源教学经验",
      "tier": 3,
      "line": "reuse",
      "parent_contract": "new_disjoint_demo_parent",
      "chains": 3,
      "max_interventions": 4
    }
  ],
  "totals": {
    "incremental_settings": 19,
    "chains": 57,
    "max_candidate_trainings": 228
  },
  "excluded_from_training_count": [
    "initial_policy_training",
    "pilots",
    "optional_supplements"
  ],
  "native_return": {
    "line": "benchmark_only",
    "adds_candidate_training": false,
    "cost_charged": true
  },
  "reuse": {
    "source": "three_predeclared_DP_lemon_full_chains",
    "mapping": "source_i_to_target_i",
    "treatments": [
      "imported_K",
      "empty_K"
    ],
    "both_train_new_parent": true,
    "initial_demo_disjoint_from_source": true,
    "forbidden_imports": [
      "student_weights",
      "training_trajectories",
      "sealed_information"
    ],
    "source_cost_separate": true
  },
  "real_test": {
    "embodiment": "independent_of_FA_Hexa",
    "no_benchmark_checkpoint_reuse": true,
    "initial_models": 1,
    "initial_episodes": 30,
    "updated_groups": 2,
    "chains_per_group": 3,
    "episodes_per_updated_model": 10,
    "main_episodes": 90,
    "heldout_optional": true,
    "heldout_episodes_per_model": 5,
    "heldout_total_episodes": 35,
    "same_fixed_real_replay": true,
    "real_replay_fraction": null,
    "new_real_data_after_initialization": false
  },
  "tiers": [
    {
      "tier": 0,
      "name": "先导、接口、扫描配准与初始化",
      "settings": null,
      "chains": null,
      "max_candidate_trainings": null
    },
    {
      "tier": 1,
      "name": "DP 两任务＋独立本体两组实机线",
      "settings": 6,
      "chains": 18,
      "max_candidate_trainings": 72
    },
    {
      "tier": 2,
      "name": "DP 柠檬组件",
      "settings": 3,
      "chains": 9,
      "max_candidate_trainings": 36
    },
    {
      "tier": 3,
      "name": "跨初始化经验复用",
      "settings": 2,
      "chains": 6,
      "max_candidate_trainings": 24
    },
    {
      "tier": 4,
      "name": "π0.5 两任务",
      "settings": 4,
      "chains": 12,
      "max_candidate_trainings": 48
    },
    {
      "tier": 5,
      "name": "ACT 两任务",
      "settings": 4,
      "chains": 12,
      "max_candidate_trainings": 48
    },
    {
      "tier": 6,
      "name": "其他补充实验，单列",
      "settings": null,
      "chains": null,
      "max_candidate_trainings": null
    }
  ],
  "pending": [
    "task_and_interface_manifests",
    "C_V_T_sizes",
    "initial_data_counts",
    "initial_parent_hashes",
    "LoRA_configuration",
    "Agent_configuration",
    "budget_units_caps",
    "evaluation_counts",
    "gain_and_retention_thresholds",
    "minimum_relevant_effect",
    "interval_estimand_method",
    "no_gain_trigger",
    "real_replay_fraction",
    "hardware_fault_replacement"
  ],
  "count_note": "Upper bounds, not a completion commitment. Evaluation costs count; initial training, pilots and optional studies are separate."
};
