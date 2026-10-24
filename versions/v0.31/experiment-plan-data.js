window.AIRSPARK_STUDY_PLAN = {
  "plan_version": "v0.31",
  "status": "planning_draft_not_frozen_or_measured",
  "protocol_reference": "closed-loop-config.template.json",
  "purpose": "Make existing E1/E2/E3 executable and expose blank result templates; no new method or comparison group.",
  "task_candidates": [
    "LemonHarvesting",
    "CabinetPickPlace"
  ],
  "representative_task": "LemonHarvesting",
  "student_priority": "DiffusionPolicy",
  "planning_defaults": {
    "seeds": 3,
    "rounds": 3,
    "diagnostic": 20,
    "expert": 50,
    "validation": 30,
    "test": 100,
    "real": 20,
    "gpuHours": null
  },
  "settings": [
    {
      "id": "main-lemon-b1",
      "task": "LemonHarvesting",
      "group": "B1",
      "source": "AirSpark",
      "package": "E2"
    },
    {
      "id": "main-lemon-full",
      "task": "LemonHarvesting",
      "group": "B3+adapt-history",
      "source": "AirSpark",
      "package": "E2"
    },
    {
      "id": "main-cabinet-b1",
      "task": "CabinetPickPlace",
      "group": "B1",
      "source": "AirSpark",
      "package": "E2"
    },
    {
      "id": "main-cabinet-full",
      "task": "CabinetPickPlace",
      "group": "B3+adapt-history",
      "source": "AirSpark",
      "package": "E2"
    },
    {
      "id": "mechanism-lemon-b3",
      "task": "LemonHarvesting",
      "group": "B3",
      "source": "AirSpark",
      "package": "E2a"
    },
    {
      "id": "mechanism-lemon-rule",
      "task": "LemonHarvesting",
      "group": "B3+adapt-rule",
      "source": "AirSpark",
      "package": "E2a"
    },
    {
      "id": "mechanism-lemon-current",
      "task": "LemonHarvesting",
      "group": "B3+adapt-current",
      "source": "AirSpark",
      "package": "E2a"
    },
    {
      "id": "source-lemon-native-b1",
      "task": "LemonHarvesting",
      "group": "B1",
      "source": "native_AMBench",
      "package": "E1b"
    }
  ],
  "pilot": {
    "chains": 1,
    "max_candidate_training": 2,
    "separate_from_formal_results": true
  },
  "counts_at_defaults": {
    "incremental_settings": 8,
    "independent_learning_chains": 24,
    "max_intervention_attempts": 72,
    "max_candidate_training": 72,
    "diagnostic_rollouts": 1440,
    "max_expert_attempts": 3600,
    "max_development_rollouts": 4320,
    "academy_sealed_rollouts": 2700,
    "native_sealed_rollouts": 2100,
    "physical_real_rollouts": 120
  },
  "formulas": {
    "chains": "8*S",
    "candidate_upper_bound": "8*S*R",
    "diagnostic": "8*S*R*N_C",
    "expert_attempt_upper_bound": "8*S*R*N_expert",
    "validation_upper_bound": "2*8*S*R*N_V",
    "academy_test": "9*S*N_T",
    "native_test": "7*S*N_T",
    "physical_real": "3*2*N_real_total_per_group_condition"
  },
  "B0": "No incremental training. Same pinned initial state within each task/paired seed. Record initial acquisition/training provenance and costs separately.",
  "real": {
    "task": "LemonHarvesting",
    "groups": [
      "B0",
      "B1",
      "B3+adapt-history"
    ],
    "conditions": [
      "reconstructed_corresponding",
      "held_out_object_or_layout"
    ],
    "episodes_per_group_condition_is_total_across_chains": true,
    "balance_chain_assignment_with_same_pattern_across_groups": true,
    "reuse_checkpoints_requires_verified_embodiment_and_deployment_contract": true,
    "if_not_compatible": "Plan matching parent and minimum corresponding learning comparisons with separate training and cost before claiming transfer."
  },
  "statistics": "Pilot-informed precision/power; S=3 is a scheduling starting point, not a sufficiency claim. Independent learning chain is the unit; paired seed identifiers and evaluation starts across methods. Do not treat rollout counts as training replicates. A single pilot chain cannot estimate between-chain training variance; any additional independent pilot chains must be separately scheduled and costed.",
  "unresolved": [
    "official task and robot contracts",
    "B0 provenance and initial-state version",
    "condition definitions and fixed expert feasibility",
    "training steps and minimum qualified data",
    "time_compute_agent_caps",
    "acceptance_gain_and_retention_thresholds",
    "retest_sampling_stopping_rules",
    "pilot_precision_and_chain_count",
    "physical_embodiment_and_scene_correspondence"
  ],
  "result_tables": [
    "study-settings",
    "result-facility",
    "result-source",
    "result-main",
    "result-native",
    "result-real",
    "result-mechanism",
    "result-diagnosis",
    "result-rounds",
    "study-progress"
  ],
  "result_storage": "browser-local only, no server synchronization; manually export and verify before sharing",
  "results": "all cells intentionally blank",
  "facility_checks": {
    "status": "planning_draft",
    "tasks": 2,
    "control_clip_types_per_task": 5,
    "repeats_per_clip": 3,
    "paired_control_clips_total": 30,
    "resets_per_task": 20,
    "resets_total": 40,
    "recovery_cases": [
      "after_collection",
      "after_training",
      "at_evaluation_commit_boundary"
    ],
    "recovery_checks_total": 3,
    "recovery_reuses_pilot_artifacts_where_possible": true,
    "legal_clip_definitions_and_tolerances": "freeze_in_S0"
  }
};
