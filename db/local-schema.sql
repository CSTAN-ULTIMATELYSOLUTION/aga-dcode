pragma foreign_keys = on;

create table if not exists app_meta (
  key text primary key,
  value text not null
);

create table if not exists stage_columns (
  key text primary key,
  label text not null,
  tone text not null,
  hidden_count integer not null default 0,
  sort_order integer not null
);

create table if not exists students (
  student_id text primary key,
  name text not null,
  stage_key text not null references stage_columns(key),
  status text not null,
  cohort_code text not null,
  doe_status text not null default 'Not started',
  live_cohort text not null,
  enrollment_history text not null,
  finance_links text not null default '',
  coach_link text not null default 'Not eligible',
  created_at text not null default current_timestamp
);

create table if not exists persons (
  person_id text primary key,
  student_id text not null references students(student_id),
  name text not null,
  phone text not null default '',
  tax_tin text not null default '',
  source text not null,
  status text not null,
  created_at text not null default current_timestamp
);

create table if not exists person_role_ids (
  role_id text primary key,
  person_id text not null references persons(person_id),
  role_type text not null,
  role_ref_id text not null,
  cohort_code text not null default '',
  role_status text not null,
  created_at text not null default current_timestamp
);

create table if not exists student_profiles (
  student_profile_id text primary key,
  person_id text not null references persons(person_id),
  student_id text not null references students(student_id),
  cohort_code text not null,
  current_stage text not null,
  payment_clearance text not null,
  created_at text not null default current_timestamp
);

create table if not exists coaches (
  coach_id text primary key,
  student_id text not null references students(student_id),
  name text not null,
  graduate_from text not null,
  assignment text not null,
  status text not null
);

create table if not exists cohorts (
  cohort_code text primary key,
  program text not null,
  venue_hall text not null,
  status text not null,
  size_label text not null
);

create table if not exists cohort_classes (
  class_id text primary key,
  cohort_code text not null references cohorts(cohort_code),
  class_name text not null,
  class_type text not null,
  sequence_no integer not null,
  teacher_name text not null,
  coach_count integer not null default 0,
  status text not null
);

create table if not exists class_sessions (
  session_id text primary key,
  class_id text not null references cohort_classes(class_id),
  hall_name text not null,
  session_date text not null,
  session_time text not null,
  expected_students integer not null,
  status text not null
);

create table if not exists halls (
  hall_name text primary key,
  capacity integer not null,
  usage integer not null,
  schedule text not null,
  status text not null default 'active'
);

create table if not exists registrations (
  registration_id text primary key,
  student_id text not null references students(student_id),
  name text not null,
  cohort_code text not null,
  status text not null,
  payment_status text not null
);

create table if not exists finance_records (
  record_id text primary key,
  student_id text not null references students(student_id),
  registration_id text not null,
  cohort_code text not null,
  amount text not null,
  status text not null,
  approval_note text not null,
  next_gate text not null
);

create table if not exists payments (
  payment_id text primary key,
  invoice_id text not null,
  student_id text not null references students(student_id),
  cohort_code text not null,
  amount text not null,
  status text not null
);

create table if not exists person_finance_ledger (
  ledger_id text primary key,
  person_id text not null references persons(person_id),
  student_id text not null references students(student_id),
  registration_id text not null default '',
  cohort_code text not null default '',
  transaction_type text not null,
  amount_cents integer not null,
  money_direction text not null,
  transaction_status text not null,
  source_ref text not null,
  note text not null,
  occurred_at text not null default current_timestamp
);

create table if not exists payment_submissions (
  payment_submission_id text primary key,
  registration_id text not null references registrations(registration_id),
  student_id text not null references students(student_id),
  amount text not null,
  payment_type text not null,
  slip_reference text not null,
  status text not null,
  submitted_at text not null default current_timestamp
);

create table if not exists finance_approvals (
  finance_approval_id text primary key,
  payment_submission_id text not null references payment_submissions(payment_submission_id),
  registration_id text not null references registrations(registration_id),
  status text not null,
  approved_by text not null,
  note text not null,
  approved_at text not null default current_timestamp
);

create table if not exists call_center_confirmations (
  confirmation_id text primary key,
  registration_id text not null references registrations(registration_id),
  student_id text not null references students(student_id),
  status text not null,
  confirmed_by text not null,
  note text not null,
  confirmed_at text not null default current_timestamp
);

create table if not exists call_center_contact_logs (
  contact_log_id text primary key,
  registration_id text not null references registrations(registration_id),
  student_id text not null references students(student_id),
  person_id text not null references persons(person_id),
  contact_method text not null,
  contact_direction text not null,
  contact_result text not null,
  contact_note text not null,
  next_follow_up_at text not null default '',
  handled_by text not null,
  created_at text not null default current_timestamp
);

create table if not exists cohort_enrollments (
  enrollment_id text primary key,
  registration_id text not null references registrations(registration_id),
  student_id text not null references students(student_id),
  cohort_code text not null references cohorts(cohort_code),
  status text not null,
  payment_clearance text not null,
  created_at text not null default current_timestamp
);

create table if not exists class_memberships (
  membership_id text primary key,
  enrollment_id text not null references cohort_enrollments(enrollment_id),
  registration_id text not null references registrations(registration_id),
  student_id text not null references students(student_id),
  class_id text not null references cohort_classes(class_id),
  status text not null,
  attendance_status text not null,
  payment_clearance text not null,
  created_at text not null default current_timestamp
);

create table if not exists attendance_confirmations (
  attendance_id text primary key,
  membership_id text not null references class_memberships(membership_id),
  student_id text not null references students(student_id),
  status text not null,
  confirmed_by text not null,
  note text not null,
  confirmed_at text not null default current_timestamp
);

create table if not exists teacher_reports (
  teacher_report_id text primary key,
  class_id text not null references cohort_classes(class_id),
  report_name text not null,
  status text not null,
  summary text not null,
  generated_at text not null default current_timestamp
);

create table if not exists manager_reports (
  manager_report_id text primary key,
  cohort_code text not null references cohorts(cohort_code),
  report_name text not null,
  status text not null,
  summary text not null,
  generated_at text not null default current_timestamp
);

create table if not exists transfers (
  transfer_id text primary key,
  student_id text not null references students(student_id),
  transfer_type text not null,
  amount text not null,
  status text not null
);

create table if not exists adjustments (
  adjustment_id text primary key,
  invoice_id text not null,
  adjustment_type text not null,
  amount text not null,
  status text not null
);

create table if not exists lifecycle_events (
  event_id text primary key,
  student_id text not null references students(student_id),
  event_type text not null,
  cohort_code text not null,
  event_date text not null
);

create table if not exists workflow_definitions (
  workflow_id text primary key,
  workflow_name text not null,
  object_group text not null,
  owner text not null,
  trigger_event text not null,
  normal_output text not null,
  exception_path text not null
);

create table if not exists demo_scenarios (
  scenario_id text primary key,
  scenario_name text not null,
  student_id text not null references students(student_id),
  current_step integer not null default 1,
  status text not null,
  proof_goal text not null
);

create table if not exists demo_scenario_steps (
  scenario_id text not null references demo_scenarios(scenario_id),
  step_no integer not null,
  workflow_id text not null references workflow_definitions(workflow_id),
  screen_name text not null,
  object_type text not null,
  object_id text not null,
  status_from text not null,
  status_to text not null,
  actor text not null,
  evidence_required text not null,
  report_impact text not null,
  source_mapping text not null,
  primary key (scenario_id, step_no)
);

create table if not exists workflow_events (
  workflow_event_id text primary key,
  scenario_id text not null references demo_scenarios(scenario_id),
  step_no integer not null,
  workflow_id text not null references workflow_definitions(workflow_id),
  student_id text not null references students(student_id),
  object_type text not null,
  object_id text not null,
  status_from text not null,
  status_to text not null,
  actor text not null,
  evidence_note text not null,
  report_impact text not null,
  source_mapping text not null,
  event_at text not null default current_timestamp
);

create table if not exists phase_participations (
  phase_participation_id text primary key,
  student_id text not null references students(student_id),
  membership_id text,
  cohort_code text not null references cohorts(cohort_code),
  class_id text not null references cohort_classes(class_id),
  phase_name text not null,
  phase_status text not null,
  entered_at text not null default '',
  completed_at text not null default '',
  evidence_note text not null default ''
);

create table if not exists backlog_cases (
  backlog_case_id text primary key,
  student_id text not null references students(student_id),
  registration_id text,
  cohort_code text not null,
  phase_name text not null,
  backlog_reason text not null,
  case_status text not null,
  double_verification_status text not null,
  opened_at text not null default current_timestamp,
  closed_at text not null default ''
);

create table if not exists reentry_verifications (
  reentry_id text primary key,
  backlog_case_id text not null references backlog_cases(backlog_case_id),
  student_id text not null references students(student_id),
  target_registration_id text not null,
  identity_status text not null,
  payment_status text not null,
  ops_status text not null,
  finance_status text not null,
  final_status text not null
);

create table if not exists doe_submissions (
  doe_submission_id text primary key,
  student_id text not null references students(student_id),
  phase_participation_id text,
  submission_type text not null,
  submission_status text not null,
  submitted_at text not null default '',
  content_summary text not null
);

create table if not exists weekly_plans (
  weekly_plan_id text primary key,
  doe_submission_id text not null references doe_submissions(doe_submission_id),
  student_id text not null references students(student_id),
  week_label text not null,
  plan_status text not null,
  coach_status text not null,
  obstacle_note text not null
);

create table if not exists coach_reviews (
  coach_review_id text primary key,
  doe_submission_id text not null references doe_submissions(doe_submission_id),
  coach_id text not null references coaches(coach_id),
  student_id text not null references students(student_id),
  review_status text not null,
  review_note text not null,
  reviewed_at text not null default ''
);

create table if not exists doe_results (
  doe_result_id text primary key,
  doe_submission_id text not null references doe_submissions(doe_submission_id),
  student_id text not null references students(student_id),
  result_type text not null,
  score text not null,
  result_status text not null,
  approved_by text not null,
  approved_at text not null default ''
);

create table if not exists grade_assessments (
  grade_assessment_id text primary key,
  student_id text not null references students(student_id),
  grade_type text not null,
  grade_value text not null,
  source_type text not null,
  assessment_status text not null,
  assessed_by text not null,
  assessed_at text not null default ''
);

create table if not exists report_inclusions (
  report_inclusion_id text primary key,
  report_id text not null,
  student_id text not null references students(student_id),
  inclusion_status text not null,
  inclusion_reason text not null,
  source_object text not null,
  approved_by text not null,
  approved_at text not null default ''
);

create table if not exists source_mappings (
  mapping_id text primary key,
  canonical_object text not null,
  canonical_id text not null,
  source_base text not null,
  source_table text not null,
  source_role text not null,
  field_mapping_summary text not null,
  confidence text not null,
  status text not null
);

create table if not exists reports (
  report_id text primary key,
  report_name text not null,
  audience text not null,
  status text not null,
  rule text not null
);

create table if not exists governance_items (
  governance_id text primary key,
  item_type text not null,
  name text not null,
  status text not null,
  owner text not null
);

create table if not exists schema_requests (
  request_id text primary key,
  request_type text not null,
  object_name text not null,
  status text not null,
  owner text not null
);

create table if not exists permissions (
  role_name text primary key,
  module_name text not null,
  permission_level text not null,
  status text not null,
  owner text not null
);

create table if not exists lark_mappings (
  token_id text primary key,
  lark_object text not null,
  role text not null,
  size_label text not null,
  status text not null
);

create table if not exists lark_import_runs (
  import_id text primary key,
  source_name text not null,
  source_path text not null,
  imported_at text not null default current_timestamp,
  table_count integer not null,
  field_count integer not null,
  person_candidate_count integer not null,
  status text not null
);

create table if not exists lark_source_tables (
  table_id text primary key,
  table_name text not null,
  category text not null,
  field_count integer not null default 0,
  view_count integer not null default 0,
  form_count integer not null default 0,
  role_guess text not null,
  source_path text not null,
  imported_at text not null default current_timestamp
);

create table if not exists lark_source_fields (
  field_id text not null,
  table_id text not null,
  table_name text not null,
  category text not null,
  field_order integer not null,
  field_name text not null,
  field_type text not null,
  option_count integer not null default 0,
  options_preview text not null default '',
  imported_at text not null default current_timestamp,
  primary key (table_id, field_order, field_name)
);

create table if not exists lark_person_field_candidates (
  candidate_id text primary key,
  table_id text not null,
  table_name text not null,
  field_id text not null,
  field_name text not null,
  field_order integer not null,
  field_type text not null,
  person_attribute text not null,
  source_role text not null,
  confidence text not null,
  import_note text not null,
  imported_at text not null default current_timestamp
);

create table if not exists activities (
  id integer primary key autoincrement,
  label text not null,
  activity_time text not null
);

create table if not exists tasks (
  id integer primary key autoincrement,
  label text not null,
  due_date text not null
);

create table if not exists object_logs (
  id integer primary key autoincrement,
  object_id text not null,
  object_type text not null,
  action text not null,
  actor text not null,
  log_time text not null,
  detail text not null
);
