-- Seed data for local demo / Supabase prototype.

insert into companies (name, registration_no)
values ('Dcode Sdn Bhd', 'DEMO-DCODE-001')
on conflict do nothing;

with c as (
  select id from companies where name = 'Dcode Sdn Bhd' limit 1
), p as (
  insert into programs (company_id, name, description)
  select id, 'Dcode Education Program', 'Cohort-based basic and advanced learning path' from c
  returning id
), levels as (
  insert into course_levels (program_id, code, name, sequence_no, requires_payment, requires_doe)
  select id, 'BASIC', 'Basic Class', 1, true, false from p
  union all
  select id, 'ADV1', 'Advanced Phase 1', 2, true, false from p
  union all
  select id, 'ADV2', 'Advanced Phase 2 / DOE', 3, true, true from p
  returning id, code
), cohort as (
  insert into cohorts (course_level_id, cohort_code, center, start_date, end_date, status)
  select id, 'CP138', 'Dcode KL Center', '2026-06-04', '2026-06-30', 'planned'
  from levels where code = 'BASIC'
  returning id
), phases as (
  insert into class_phases (cohort_id, phase_code, phase_name, sequence_no, starts_doe, status)
  select id, 'BASIC', 'Basic Class', 1, false, 'planned' from cohort
  union all
  select id, 'ADV1', 'Advanced Phase 1', 2, false, 'planned' from cohort
  union all
  select id, 'ADV2', 'Advanced Phase 2 / DOE', 3, true, 'planned' from cohort
  returning id
), venue as (
  insert into venues (name, address)
  values ('Dcode KL Center', 'Kuala Lumpur, Malaysia')
  returning id
), hall as (
  insert into halls (venue_id, hall_name, capacity)
  select id, 'Hall A', 40 from venue
  union all
  select id, 'Hall B', 30 from venue
  returning id, hall_name
)
insert into class_sessions (cohort_id, class_phase_id, hall_id, session_start, session_end, expected_students, checked_in_students, session_status)
select
  cohort.id,
  (select id from class_phases where cohort_id = cohort.id and phase_code = 'BASIC' limit 1),
  (select id from hall where hall_name = 'Hall A' limit 1),
  '2026-06-04 09:00+08',
  '2026-06-04 18:00+08',
  40,
  0,
  'scheduled'
from cohort;

insert into persons (chinese_name, english_name, phone, normalized_phone, email, dedupe_key)
values
  ('陈嘉仪', 'Aisyah Binti Rahman', '+6012-100-0001', '60121000001', 'aisyah@example.com', '60121000001'),
  ('林伟杰', 'Muhammad Hariz', '+6012-100-0002', '60121000002', 'hariz@example.com', '60121000002'),
  ('黄子乐', 'Wong Zi Le', '+6012-100-0003', '60121000003', 'zile@example.com', '60121000003'),
  ('张嘉明', 'Ho Kar Ming', '+6012-100-0004', '60121000004', 'karming@example.com', '60121000004'),
  ('李美雯', 'Lee Mei Wen', '+6012-100-0005', '60121000005', 'meiwen@example.com', '60121000005')
on conflict (dedupe_key) do nothing;

insert into students (person_id, student_no, current_status, first_registered_at)
select id, 'S2505128', 'registered', '2026-05-19 09:00+08' from persons where dedupe_key = '60121000001'
union all select id, 'S2505142', 'registered', '2026-05-19 09:15+08' from persons where dedupe_key = '60121000002'
union all select id, 'S2505003', 'entered_basic_class', '2026-05-12 09:00+08' from persons where dedupe_key = '60121000003'
union all select id, 'S2504972', 'advanced_phase_2', '2026-05-05 09:00+08' from persons where dedupe_key = '60121000004'
union all select id, 'S2504884', 'backlog', '2026-04-21 09:00+08' from persons where dedupe_key = '60121000005'
on conflict (student_no) do nothing;

with cohort as (select id from cohorts where cohort_code = 'CP138' limit 1)
insert into registrations (student_id, target_cohort_id, registration_status, verification_status)
select s.id, cohort.id, 'registered', 'pending'
from students s, cohort
where s.student_no in ('S2505128', 'S2505142')
on conflict do nothing;

with reg as (
  select r.id
  from registrations r
  join students s on s.id = r.student_id
  where s.student_no = 'S2505128'
  limit 1
), plan as (
  insert into payment_plans (registration_id, plan_type, total_amount, deposit_required)
  select id, 'one_time_full', 3600, 500 from reg
  returning id, registration_id
)
insert into payments (registration_id, payment_plan_id, payment_type, amount, payment_method, bank_in_reference, paid_at, verification_status)
select registration_id, id, 'full_payment', 3600, 'Online Banking', 'MBB-CP138-0001', '2026-05-20 09:58+08', 'verified'
from plan;

insert into lark_sources (base_token, base_name, owner_name, url, access_status, last_scanned_at)
values (
  'GGPiba6WEaG1hCsrpJIlJO3bgDb',
  'D.136 Class Bible. (admin dcode)',
  'Dcode Sdn Bhd',
  'https://zsggz2p1btda.sg.larksuite.com/base/GGPiba6WEaG1hCsrpJIlJO3bgDb',
  'readable',
  '2026-05-28 23:40+08'
)
on conflict (base_token) do nothing;
