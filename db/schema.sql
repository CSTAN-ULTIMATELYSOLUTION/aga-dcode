-- Dcode Admin Portal Demo
-- Canonical source-of-truth schema for Postgres / Supabase-style databases.

create extension if not exists pgcrypto;

create table if not exists companies (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  registration_no text,
  status text not null default 'active',
  created_at timestamptz not null default now()
);

create table if not exists persons (
  id uuid primary key default gen_random_uuid(),
  chinese_name text,
  english_name text,
  phone text,
  normalized_phone text,
  email text,
  ic_no text,
  gender text,
  date_of_birth date,
  dedupe_key text unique,
  created_at timestamptz not null default now()
);

create table if not exists students (
  id uuid primary key default gen_random_uuid(),
  person_id uuid not null references persons(id),
  student_no text unique not null,
  current_status text not null default 'registered',
  first_registered_at timestamptz,
  is_graduate boolean not null default false,
  graduate_at timestamptz
);

create table if not exists coaches (
  id uuid primary key default gen_random_uuid(),
  person_id uuid not null references persons(id),
  coach_no text unique,
  coach_status text not null default 'candidate',
  eligible_from_student_id uuid references students(id),
  approved_at timestamptz
);

create table if not exists programs (
  id uuid primary key default gen_random_uuid(),
  company_id uuid not null references companies(id),
  name text not null,
  description text,
  status text not null default 'active'
);

create table if not exists course_levels (
  id uuid primary key default gen_random_uuid(),
  program_id uuid not null references programs(id),
  code text not null,
  name text not null,
  sequence_no integer not null,
  requires_payment boolean not null default true,
  requires_doe boolean not null default false
);

create table if not exists cohorts (
  id uuid primary key default gen_random_uuid(),
  course_level_id uuid not null references course_levels(id),
  cohort_code text not null,
  center text,
  start_date date,
  end_date date,
  status text not null default 'draft',
  created_at timestamptz not null default now(),
  unique (course_level_id, cohort_code)
);

create table if not exists class_phases (
  id uuid primary key default gen_random_uuid(),
  cohort_id uuid not null references cohorts(id),
  phase_code text not null,
  phase_name text not null,
  sequence_no integer not null,
  starts_doe boolean not null default false,
  status text not null default 'planned'
);

create table if not exists venues (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  address text,
  status text not null default 'active'
);

create table if not exists halls (
  id uuid primary key default gen_random_uuid(),
  venue_id uuid not null references venues(id),
  hall_name text not null,
  capacity integer not null,
  status text not null default 'active',
  unique (venue_id, hall_name)
);

create table if not exists registrations (
  id uuid primary key default gen_random_uuid(),
  student_id uuid not null references students(id),
  target_cohort_id uuid not null references cohorts(id),
  registration_source text not null default 'portal',
  registered_at timestamptz not null default now(),
  registration_status text not null default 'registered',
  is_backlog_reentry boolean not null default false,
  verification_status text not null default 'pending',
  verified_by text,
  verified_at timestamptz
);

create table if not exists payment_plans (
  id uuid primary key default gen_random_uuid(),
  registration_id uuid not null references registrations(id),
  plan_type text not null check (plan_type in ('one_time_full', 'staged')),
  total_amount numeric(12,2) not null,
  currency text not null default 'MYR',
  deposit_required numeric(12,2) not null default 0,
  full_payment_required_before_entry boolean not null default true
);

create table if not exists payments (
  id uuid primary key default gen_random_uuid(),
  registration_id uuid not null references registrations(id),
  payment_plan_id uuid references payment_plans(id),
  payment_type text not null,
  amount numeric(12,2) not null,
  currency text not null default 'MYR',
  payment_method text,
  bank_in_reference text,
  paid_at timestamptz,
  verification_status text not null default 'pending',
  verified_by text,
  verified_at timestamptz
);

create table if not exists class_memberships (
  id uuid primary key default gen_random_uuid(),
  student_id uuid not null references students(id),
  cohort_id uuid not null references cohorts(id),
  registration_id uuid references registrations(id),
  membership_status text not null default 'pending_payment',
  entered_at timestamptz,
  completed_at timestamptz,
  closed_at timestamptz,
  unique (student_id, cohort_id)
);

create table if not exists phase_participations (
  id uuid primary key default gen_random_uuid(),
  class_membership_id uuid not null references class_memberships(id),
  class_phase_id uuid not null references class_phases(id),
  phase_status text not null default 'not_started',
  entered_at timestamptz,
  completed_at timestamptz,
  left_at timestamptz,
  leave_reason text,
  unique (class_membership_id, class_phase_id)
);

create table if not exists class_sessions (
  id uuid primary key default gen_random_uuid(),
  cohort_id uuid not null references cohorts(id),
  class_phase_id uuid references class_phases(id),
  hall_id uuid not null references halls(id),
  session_start timestamptz not null,
  session_end timestamptz not null,
  expected_students integer not null default 0,
  checked_in_students integer not null default 0,
  session_status text not null default 'scheduled'
);

create table if not exists attendance_records (
  id uuid primary key default gen_random_uuid(),
  class_session_id uuid not null references class_sessions(id),
  student_id uuid not null references students(id),
  class_membership_id uuid references class_memberships(id),
  attendance_status text not null default 'expected',
  checked_in_at timestamptz,
  notes text,
  unique (class_session_id, student_id)
);

create table if not exists student_lifecycle_events (
  id uuid primary key default gen_random_uuid(),
  student_id uuid not null references students(id),
  registration_id uuid references registrations(id),
  class_membership_id uuid references class_memberships(id),
  phase_participation_id uuid references phase_participations(id),
  event_type text not null,
  event_status text not null default 'active',
  event_at timestamptz not null default now(),
  reason text,
  notes text,
  created_by text,
  verified_by text
);

create table if not exists backlog_cases (
  id uuid primary key default gen_random_uuid(),
  student_id uuid not null references students(id),
  registration_id uuid references registrations(id),
  class_membership_id uuid references class_memberships(id),
  backlog_reason text,
  opened_at timestamptz not null default now(),
  closed_at timestamptz,
  reentry_registration_id uuid references registrations(id),
  double_verification_status text not null default 'pending'
);

create table if not exists transfer_cases (
  id uuid primary key default gen_random_uuid(),
  student_id uuid not null references students(id),
  from_registration_id uuid references registrations(id),
  to_registration_id uuid references registrations(id),
  transfer_type text not null check (transfer_type in ('payment', 'seat')),
  amount numeric(12,2),
  currency text not null default 'MYR',
  status text not null default 'pending',
  approved_by text,
  approved_at timestamptz
);

create table if not exists doe_submissions (
  id uuid primary key default gen_random_uuid(),
  student_id uuid not null references students(id),
  phase_participation_id uuid references phase_participations(id),
  submission_type text not null,
  submitted_at timestamptz,
  content text,
  status text not null default 'pending',
  source_lark_record_id text
);

create table if not exists doe_results (
  id uuid primary key default gen_random_uuid(),
  student_id uuid not null references students(id),
  phase_participation_id uuid references phase_participations(id),
  result_type text not null,
  score numeric(8,2),
  result_status text not null default 'draft',
  approved_by text,
  approved_at timestamptz
);

create table if not exists grade_assessments (
  id uuid primary key default gen_random_uuid(),
  student_id uuid not null references students(id),
  class_membership_id uuid references class_memberships(id),
  grade_type text not null,
  grade_value text not null,
  assessed_by text,
  assessed_at timestamptz not null default now(),
  notes text
);

create table if not exists coach_assignments (
  id uuid primary key default gen_random_uuid(),
  coach_id uuid not null references coaches(id),
  student_id uuid references students(id),
  class_membership_id uuid references class_memberships(id),
  phase_participation_id uuid references phase_participations(id),
  assignment_status text not null default 'active',
  assigned_at timestamptz not null default now(),
  ended_at timestamptz
);

create table if not exists reports (
  id uuid primary key default gen_random_uuid(),
  report_name text not null,
  report_type text not null,
  owner_name text,
  definition_status text not null default 'draft',
  approved_by text,
  approved_at timestamptz
);

create table if not exists report_inclusions (
  id uuid primary key default gen_random_uuid(),
  report_id uuid not null references reports(id),
  student_id uuid references students(id),
  class_membership_id uuid references class_memberships(id),
  phase_participation_id uuid references phase_participations(id),
  inclusion_status text not null default 'included',
  inclusion_reason text
);

create table if not exists schema_change_requests (
  id uuid primary key default gen_random_uuid(),
  request_type text not null,
  object_name text not null,
  field_name text,
  reason text,
  requested_by text,
  approved_by text,
  status text not null default 'pending',
  created_at timestamptz not null default now()
);

create table if not exists lark_sources (
  id uuid primary key default gen_random_uuid(),
  base_token text unique not null,
  base_name text not null,
  owner_name text,
  url text,
  access_status text,
  last_scanned_at timestamptz
);

create table if not exists lark_tables (
  id uuid primary key default gen_random_uuid(),
  lark_source_id uuid not null references lark_sources(id),
  table_id text not null,
  table_name text not null,
  table_role text,
  field_count integer,
  view_count integer,
  unique (lark_source_id, table_id)
);

create table if not exists lark_fields (
  id uuid primary key default gen_random_uuid(),
  lark_table_id uuid not null references lark_tables(id),
  field_id text not null,
  field_name text not null,
  field_type text,
  options_json jsonb,
  field_order integer,
  unique (lark_table_id, field_id)
);

create table if not exists lark_records_raw (
  id uuid primary key default gen_random_uuid(),
  lark_table_id uuid not null references lark_tables(id),
  record_id text not null,
  record_json jsonb not null,
  extracted_at timestamptz not null default now(),
  record_hash text,
  unique (lark_table_id, record_id)
);

create table if not exists lark_record_mappings (
  id uuid primary key default gen_random_uuid(),
  lark_table_id uuid not null references lark_tables(id),
  lark_record_id text not null,
  canonical_table text not null,
  canonical_id uuid not null,
  confidence numeric(4,3) not null default 1,
  mapping_status text not null default 'mapped'
);

create index if not exists idx_students_person_id on students(person_id);
create index if not exists idx_registrations_target_cohort_id on registrations(target_cohort_id);
create index if not exists idx_payments_registration_id on payments(registration_id);
create index if not exists idx_class_memberships_cohort_id on class_memberships(cohort_id);
create index if not exists idx_phase_participations_phase_id on phase_participations(class_phase_id);
create index if not exists idx_lifecycle_student_id on student_lifecycle_events(student_id);
create index if not exists idx_backlog_student_id on backlog_cases(student_id);
create index if not exists idx_sessions_hall_start on class_sessions(hall_id, session_start);
