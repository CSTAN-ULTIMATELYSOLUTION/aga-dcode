-- Useful demo views for the Dcode admin portal.

create or replace view v_student_profile as
select
  s.id as student_id,
  s.student_no,
  coalesce(p.chinese_name, p.english_name) as display_name,
  p.phone,
  p.email,
  s.current_status,
  c.cohort_code,
  cm.membership_status,
  max(pay.verification_status) as payment_verification_status,
  count(distinct dsub.id) filter (where dsub.status = 'pending') as pending_doe_count,
  count(distinct b.id) filter (where b.closed_at is null) as open_backlog_count
from students s
join persons p on p.id = s.person_id
left join class_memberships cm on cm.student_id = s.id
left join cohorts c on c.id = cm.cohort_id
left join registrations r on r.student_id = s.id
left join payments pay on pay.registration_id = r.id
left join phase_participations pp on pp.class_membership_id = cm.id
left join doe_submissions dsub on dsub.phase_participation_id = pp.id
left join backlog_cases b on b.student_id = s.id
group by s.id, s.student_no, p.chinese_name, p.english_name, p.phone, p.email, s.current_status, c.cohort_code, cm.membership_status;

create or replace view v_cohort_operations as
select
  c.id as cohort_id,
  c.cohort_code,
  c.status,
  count(distinct r.id) as registrations,
  count(distinct cm.id) as class_members,
  count(distinct cm.id) filter (where cm.membership_status = 'active') as active_members,
  count(distinct pp.id) filter (where pp.phase_status = 'active') as active_phase_participations,
  count(distinct b.id) filter (where b.closed_at is null) as open_backlog_cases
from cohorts c
left join registrations r on r.target_cohort_id = c.id
left join class_memberships cm on cm.cohort_id = c.id
left join phase_participations pp on pp.class_membership_id = cm.id
left join backlog_cases b on b.class_membership_id = cm.id
group by c.id, c.cohort_code, c.status;

create or replace view v_hall_utilization as
select
  v.name as venue_name,
  h.hall_name,
  h.capacity,
  count(cs.id) as scheduled_sessions,
  coalesce(sum(extract(epoch from (cs.session_end - cs.session_start)) / 3600), 0)::numeric(10,2) as scheduled_hours,
  coalesce(sum(cs.expected_students), 0) as expected_students,
  coalesce(sum(cs.checked_in_students), 0) as checked_in_students,
  case
    when coalesce(sum(h.capacity), 0) = 0 then 0
    else round((coalesce(sum(cs.checked_in_students), 0)::numeric / nullif(sum(h.capacity), 0)) * 100, 2)
  end as checked_in_capacity_utilization_pct
from halls h
join venues v on v.id = h.venue_id
left join class_sessions cs on cs.hall_id = h.id
group by v.name, h.hall_name, h.capacity;
