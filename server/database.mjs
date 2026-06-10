import { readFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { DatabaseSync } from 'node:sqlite';

const rootDir = dirname(dirname(fileURLToPath(import.meta.url)));
const dbPath = join(rootDir, 'data', 'dcode.sqlite');
const schemaPath = join(rootDir, 'db', 'local-schema.sql');

mkdirSync(dirname(dbPath), { recursive: true });

export const db = new DatabaseSync(dbPath);
db.exec(readFileSync(schemaPath, 'utf8'));
migrateDatabase();
seedDatabase();
ensureDoeDashboardData();

function insertMany(sql, rows) {
  const statement = db.prepare(sql);
  for (const row of rows) statement.run(...row);
}

function migrateDatabase() {
  const hallColumns = db.prepare('pragma table_info(halls)').all().map((column) => column.name);
  if (!hallColumns.includes('status')) {
    db.exec("alter table halls add column status text not null default 'active'");
  }
  const personColumns = db.prepare('pragma table_info(persons)').all().map((column) => column.name);
  if (!personColumns.includes('tax_tin')) {
    db.exec("alter table persons add column tax_tin text not null default ''");
  }
}

function ensureDoeDashboardData() {
  insertMany(
    'insert or ignore into stage_columns (key, label, tone, hidden_count, sort_order) values (?, ?, ?, ?, ?)',
    [
      ['advanced3', 'Advanced Phase 3', 'teal', 6, 6],
      ['advanced4', 'Advanced Phase 4 / Graduation', 'green', 4, 7],
    ]
  );

  db.prepare("update stage_columns set label = 'Advanced Phase 2' where key = 'advanced2'").run();
  db.prepare("update stage_columns set sort_order = 8 where key = 'backlog'").run();
  db.prepare("update cohort_classes set class_name = 'Advanced Phase 2' where class_name = 'Advanced Phase 2 / DOE'").run();

  insertMany(
    `insert or ignore into students
      (student_id, name, stage_key, status, cohort_code, doe_status, live_cohort, enrollment_history, finance_links, coach_link)
      values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      ['S2504928', 'Mei Xin Lee', 'advanced3', 'Advanced Phase 3 live', 'CP138', 'Reviewed', 'CP138 Advanced Phase 3', 'CP136 Basic - Completed | CP137 Advanced Phase 2 - Completed | CP138 Advanced Phase 3 - Live', 'INV-2505-0928 - RM 3,600 - Verified', 'Coach follow-up clear'],
      ['S2504934', 'Arjun Pillai', 'advanced3', 'Advanced Phase 3 live', 'CP138', 'Pending revision', 'CP138 Advanced Phase 3', 'CP138 Advanced Phase 3 - Live', 'INV-2505-0934 - RM 3,600 - Verified', 'Coach follow-up pending'],
      ['S2504941', 'Tan Wei Sheng', 'advanced3', 'Advanced Phase 3 live', 'CP138', 'Submitted', 'CP138 Advanced Phase 3', 'CP138 Advanced Phase 3 - Live', '', 'Coach follow-up clear'],
      ['S2504890', 'Grace Lim', 'advanced4', 'Graduation review', 'CP138', 'Final review', 'CP138 Advanced Phase 4 / Graduation', 'CP136 Basic - Completed | CP137 Advanced Phase 3 - Completed | CP138 Advanced Phase 4 - Live', 'INV-2505-0890 - RM 3,600 - Verified', 'Coach follow-up clear'],
      ['S2504894', 'Mohamad Syafiq', 'advanced4', 'Graduation review', 'CP138', 'Pending final DOE', 'CP138 Advanced Phase 4 / Graduation', 'CP138 Advanced Phase 4 - Live', 'INV-2505-0894 - RM 3,600 - Verified', 'Coach follow-up pending'],
      ['S2504898', 'Priya Raman', 'advanced4', 'Graduation review', 'CP138', 'Submitted', 'CP138 Advanced Phase 4 / Graduation', 'CP138 Advanced Phase 4 - Live', '', 'Coach follow-up clear'],
    ]
  );

  const existingPersons = db.prepare('select count(*) as count from persons').get().count;
  if (existingPersons === 0) {
    db.exec(`
      insert into persons (person_id, student_id, name, source, status)
      select 'PER-' || student_id, student_id, name, 'Legacy Student Seed', 'Active'
      from students;

      insert into student_profiles (student_profile_id, person_id, student_id, cohort_code, current_stage, payment_clearance)
      select 'SP-' || student_id, 'PER-' || student_id, student_id, cohort_code, stage_key, case when finance_links like '%Verified%' then 'Fully Paid' else 'Pending' end
      from students;
    `);
  }
}

function seedDatabase() {
  const seeded = db.prepare("select value from app_meta where key = 'seed_version'").get();
  if (seeded?.value === '7') return;

  db.exec(`
    pragma foreign_keys = off;
    delete from object_logs;
    delete from tasks;
    delete from activities;
    delete from person_finance_ledger;
    delete from person_role_ids;
    delete from source_mappings;
    delete from report_inclusions;
    delete from grade_assessments;
    delete from doe_results;
    delete from coach_reviews;
    delete from weekly_plans;
    delete from doe_submissions;
    delete from reentry_verifications;
    delete from backlog_cases;
    delete from phase_participations;
    delete from workflow_events;
    delete from demo_scenario_steps;
    delete from demo_scenarios;
    delete from workflow_definitions;
    delete from lark_mappings;
    delete from permissions;
    delete from schema_requests;
    delete from governance_items;
    delete from reports;
    delete from lifecycle_events;
    delete from adjustments;
    delete from transfers;
    delete from payments;
    delete from finance_records;
    delete from finance_approvals;
    delete from payment_submissions;
    delete from call_center_contact_logs;
    delete from call_center_confirmations;
    delete from attendance_confirmations;
    delete from class_memberships;
    delete from cohort_enrollments;
    delete from student_profiles;
    delete from persons;
    delete from registrations;
    delete from halls;
    delete from class_sessions;
    delete from cohort_classes;
    delete from cohorts;
    delete from coaches;
    delete from students;
    delete from stage_columns;
    pragma foreign_keys = on;
  `);

  insertMany(
    'insert into stage_columns (key, label, tone, hidden_count, sort_order) values (?, ?, ?, ?, ?)',
    [
      ['registered', 'Registered', 'slate', 0, 1],
      ['paid', 'Fully Paid', 'green', 0, 2],
      ['basic', 'Basic Class', 'blue', 0, 3],
      ['advanced1', 'Advanced Phase 1', 'indigo', 0, 4],
      ['advanced2', 'Advanced Phase 2 / DOE', 'purple', 0, 5],
      ['backlog', 'Backlog', 'orange', 0, 6],
    ]
  );

  insertMany(
    `insert into students
      (student_id, name, stage_key, status, cohort_code, doe_status, live_cohort, enrollment_history, finance_links, coach_link)
      values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      ['S2505128', 'Aisyah Binti Rahman', 'registered', '19 May 2026', 'CP138', 'Not started', 'Registered for CP138', 'CP136 Basic - Completed | CP137 Advanced Phase 1 - Dropped | CP138 Registered - Live', 'INV-2505-1024 - RM 3,600 - Verified', 'Not eligible yet'],
      ['S2505142', 'Muhammad Hariz', 'registered', '19 May 2026', 'CP138', 'Not started', 'Registered for CP138', 'CP138 Registered - Live', 'INV-2505-1025 - RM 500 - Pending', 'Not eligible yet'],
      ['S2505150', 'Lim Jia Wen', 'registered', '18 May 2026', 'CP138', 'Not started', 'Registered for CP138', 'CP138 Registered - Live', 'INV-2505-1026 - RM 3,600 - Pending', 'Not eligible yet'],
      ['S2505156', 'Nurul Izzati', 'registered', '18 May 2026', 'CP138', 'Not started', 'Registered for CP138', 'CP138 Registered - Live', '', 'Not eligible yet'],
      ['S2505162', 'Daniel Wong', 'registered', '17 May 2026', 'CP138', 'Not started', 'Registered for CP138', 'CP138 Registered - Live', '', 'Not eligible yet'],
      ['S2505031', 'Luqman Hakim', 'paid', '18 May 2026', 'CP138', 'Not required yet', 'CP138 Fully Paid', 'CP135 Basic - Completed | CP136 Advanced - Graduated | CP138 Coach Assignment - Live', 'INV-2505-1003 - RM 3,600 - Verified', 'Coach C-001, linked from graduated student S2505031'],
      ['S2505044', 'Tham Yu Xuan', 'paid', '18 May 2026', 'CP138', 'Not required yet', 'CP138 Fully Paid', 'CP138 Fully Paid - Live', '', 'Not eligible yet'],
      ['S2505078', 'Farah Nadia', 'paid', '17 May 2026', 'CP138', 'Not required yet', 'CP138 Fully Paid', 'CP136 Advanced - Graduated | CP138 Coach Assignment - Live', '', 'Coach C-002, linked from graduated student S2505078'],
      ['S2505089', 'Rajesh Kumar', 'paid', '16 May 2026', 'CP138', 'Not required yet', 'CP138 Fully Paid', 'CP136 Advanced - Graduated | CP138 Coach Assignment - Live', '', 'Coach C-003, linked from graduated student S2505089'],
      ['S2505095', 'Lee Chen Jie', 'paid', '16 May 2026', 'CP138', 'Not required yet', 'CP138 Fully Paid', 'CP136 Advanced - Graduated | CP138 Coach Assignment - Live', '', 'Coach C-004, linked from graduated student S2505095'],
      ['S2505003', 'Wong Zi Le', 'basic', 'Started 12 May 2026', 'CP138', 'Not required yet', 'CP138 Basic Class', 'CP138 Basic Class - Live', '', 'Not eligible yet'],
      ['S2505007', 'Ng Kai Sheng', 'basic', 'Started 12 May 2026', 'CP138', 'Not required yet', 'CP138 Basic Class', 'CP138 Basic Class - Live', '', 'Not eligible yet'],
      ['S2505012', 'Aiman Hakimi', 'basic', 'Started 12 May 2026', 'CP138', 'Not required yet', 'CP138 Basic Class', 'CP138 Basic Class - Live', '', 'Not eligible yet'],
      ['S2505016', 'Chan Wei Xian', 'basic', 'Started 12 May 2026', 'CP138', 'Not required yet', 'CP138 Basic Class', 'CP138 Basic Class - Live', '', 'Not eligible yet'],
      ['S2505023', 'Tan Jie Rou', 'basic', 'Started 12 May 2026', 'CP138', 'Not required yet', 'CP138 Basic Class', 'CP138 Basic Class - Live', '', 'Not eligible yet'],
      ['S2504987', 'Cheah Jun Yi', 'advanced1', 'Started 5 May 2026', 'CP138', 'Submitted', 'CP138 Advanced Phase 1', 'CP136 Basic - Completed | CP137 Advanced Phase 1 - Completed | CP138 Advanced Phase 1 - Live', 'INV-2505-0987 - RM 3,600 - Verified', 'Future coach candidate after graduation'],
      ['S2504991', 'Yap Li Wen', 'advanced1', 'Started 5 May 2026', 'CP138', 'Not started', 'CP138 Advanced Phase 1', 'CP138 Advanced Phase 1 - Live', '', 'Future coach candidate after graduation'],
      ['S2504998', 'Dev Sharma', 'advanced1', 'Started 5 May 2026', 'CP138', 'Not started', 'CP138 Advanced Phase 1', 'CP138 Advanced Phase 1 - Live', '', 'Future coach candidate after graduation'],
      ['S2505000', 'Nur Syazwani', 'advanced1', 'Started 5 May 2026', 'CP138', 'Not started', 'CP138 Advanced Phase 1', 'CP138 Advanced Phase 1 - Live', '', 'Future coach candidate after graduation'],
      ['S2505008', 'Ong Zhi Qiang', 'advanced1', 'Started 5 May 2026', 'CP138', 'Not started', 'CP138 Advanced Phase 1', 'CP138 Advanced Phase 1 - Live', '', 'Future coach candidate after graduation'],
      ['S2504956', 'Alia Natasha', 'advanced2', 'DOE Pending', 'CP138', 'DOE Pending', 'CP138 Advanced Phase 2 / DOE', 'CP136 Basic - Completed | CP137 Advanced Phase 1 - Completed | CP138 Advanced Phase 2 - Live', 'INV-2505-0956 - RM 3,600 - Verified', 'Not eligible until DOE and graduation complete'],
      ['S2504961', 'Muhammad Danish', 'advanced2', 'DOE Pending', 'CP138', 'DOE Pending', 'CP138 Advanced Phase 2 / DOE', 'CP138 Advanced Phase 2 - Live', '', 'Not eligible until DOE and graduation complete'],
      ['S2504988', 'Khoo Ying Xuan', 'advanced2', 'DOE Pending', 'CP138', 'DOE Pending', 'CP138 Advanced Phase 2 / DOE', 'CP138 Advanced Phase 2 - Live', '', 'Not eligible until DOE and graduation complete'],
      ['S2504972', 'Ho Kar Ming', 'advanced2', 'DOE Pending', 'CP138', 'DOE Pending', 'CP138 Advanced Phase 2 / DOE', 'CP138 Advanced Phase 2 - Live', '', 'Not eligible until DOE and graduation complete'],
      ['S2504979', 'Siti Amani', 'advanced2', 'DOE Pending', 'CP138', 'DOE Pending', 'CP138 Advanced Phase 2 / DOE', 'CP138 Advanced Phase 2 - Live', '', 'Not eligible until DOE and graduation complete'],
      ['S2504877', 'Jared Lim', 'backlog', 'Overdue 12 May', 'CP137', 'Not active', 'Backlog / Re-entry pending', 'CP137 Advanced Phase 1 - Dropped', '', 'Not eligible'],
      ['S2504884', 'Nurul Huda', 'backlog', 'Overdue 10 May', 'CP137', 'Not active', 'Backlog / Re-entry pending', 'CP136 Basic - Completed | CP137 Advanced Phase 1 - Dropped', 'TRF-001 - RM 500 - Pending approval', 'Not eligible'],
      ['S2504891', 'Karthik Raman', 'backlog', 'Overdue 9 May', 'CP137', 'Not active', 'Backlog / Re-entry pending', 'CP137 Advanced Phase 1 - Dropped', '', 'Not eligible'],
      ['S2504897', 'Wong Ee Lin', 'backlog', 'Overdue 7 May', 'CP137', 'Not active', 'Backlog / Re-entry pending', 'CP137 Advanced Phase 1 - Dropped', '', 'Not eligible'],
      ['S2504903', 'Tan Wei Sheng', 'backlog', 'Overdue 6 May', 'CP137', 'Not active', 'Backlog / Re-entry pending', 'CP137 Advanced Phase 1 - Dropped', '', 'Not eligible'],
    ]
  );

  insertMany('insert into coaches values (?, ?, ?, ?, ?, ?)', [
    ['C-001', 'S2505031', 'Luqman Hakim', 'CP136 Advanced Graduate', 'CP138 Basic Class', 'Assigned'],
    ['C-002', 'S2505078', 'Farah Nadia', 'CP136 Advanced Graduate', 'CP138 Advanced Phase 1', 'Assigned'],
    ['C-003', 'S2505089', 'Rajesh Kumar', 'CP136 Advanced Graduate', 'CP138 Advanced Phase 2', 'Assigned'],
    ['C-004', 'S2505095', 'Lee Chen Jie', 'CP136 Advanced Graduate', 'CP138 Backlog Follow-up', 'Assigned'],
  ]);

  insertMany('insert into cohorts values (?, ?, ?, ?, ?)', [
    ['CP138', 'Certificate in Data Analytics', 'Dcode KL Center / Hall A', 'Planned', '130 students'],
    ['CP137', 'Advanced Business System', 'Dcode KL Center / Hall B', 'Active', '96 students'],
    ['CP136', 'Class Bible Migration', 'Dcode KL Center / Lab 1', 'Audit', '129 records'],
  ]);

  seedClassesAndSessions();

  insertMany('insert into halls (hall_name, capacity, usage, schedule, status) values (?, ?, ?, ?, ?)', [
    ['Hall A', 40, 90, '7 / 8 slots', 'active'],
    ['Hall B', 30, 67, '4 / 6 slots', 'active'],
    ['Lab 1', 24, 83, '5 / 6 slots', 'active'],
    ['Lab 2', 24, 71, '5 / 7 slots', 'active'],
    ['Training Room 1', 12, 58, '7 / 12 slots', 'active'],
    ['Training Room 2', 12, 33, '4 / 12 slots', 'active'],
    ['Discussion Room', 8, 50, '3 / 6 slots', 'active'],
    ['Auditorium', 80, 75, '3 / 4 slots', 'active'],
  ]);

  insertMany('insert into registrations values (?, ?, ?, ?, ?, ?)', [
    ['REG-S2505128', 'S2505128', 'Aisyah Binti Rahman', 'CP138', 'Registered', 'Pending payment'],
    ['REG-S2505142', 'S2505142', 'Muhammad Hariz', 'CP138', 'Registered', 'Pending payment'],
    ['REG-S2505150', 'S2505150', 'Lim Jia Wen', 'CP138', 'Registered', 'Pending payment'],
    ['REG-2505169', 'S2505128', 'Ahmad Danish', 'CP138', 'Pending verification', 'No payment'],
    ['REG-2505170', 'S2505142', 'Chong Li En', 'CP138', 'Confirmed', 'Deposit paid'],
    ['REG-2505171', 'S2505150', 'Maya Tan', 'CP138', 'Registered', 'No payment'],
  ]);

  insertMany('insert into finance_records values (?, ?, ?, ?, ?, ?, ?, ?)', [
    ['INV-2505-1024', 'S2505128', 'REG-S2505128', 'CP138', 'RM 3,600', 'Verified', 'Verified by Finance Staff', 'Can enter Basic once full payment confirmed'],
    ['INV-2505-1025', 'S2505142', 'REG-S2505142', 'CP138', 'RM 500', 'Pending', 'Pending finance verification', 'Cannot enter Basic yet'],
    ['INV-2505-1026', 'S2505150', 'REG-S2505150', 'CP138', 'RM 3,600', 'Pending', 'Pending finance verification', 'Cannot enter Basic yet'],
    ['TRF-2505-002', 'S2504884', 'REG-S2504884', 'CP137', 'RM 500', 'Transfer Review', 'Transfer review', 'Manager approval required'],
  ]);

  insertMany('insert into payments values (?, ?, ?, ?, ?, ?)', [
    ['PAY-001', 'INV-2505-1024', 'S2505128', 'CP138', 'RM 3,600', 'Verified'],
    ['PAY-002', 'INV-2505-1025', 'S2505142', 'CP138', 'RM 500', 'Pending'],
    ['PAY-003', 'INV-2505-1026', 'S2505150', 'CP138', 'RM 3,600', 'Pending'],
  ]);

  insertMany('insert into transfers values (?, ?, ?, ?, ?)', [
    ['TRF-001', 'S2504884', 'Payment transfer', 'RM 500', 'Pending approval'],
    ['TRF-002', 'S2504903', 'Seat transfer', '-', 'Approved'],
  ]);

  insertMany('insert into adjustments values (?, ?, ?, ?, ?)', [
    ['ADJ-001', 'INV-2505-1008', 'Discount', '-RM 300', 'Approved'],
    ['ADJ-002', 'INV-2505-1011', 'Refund', '-RM 500', 'Pending'],
  ]);

  insertMany('insert into lifecycle_events values (?, ?, ?, ?, ?)', [
    ['EVT-001', 'S2505128', 'Registered', 'CP138', '19 May 2026'],
    ['EVT-002', 'S2505031', 'Payment verified', 'CP138', '20 May 2026'],
    ['EVT-003', 'S2505003', 'Entered basic class', 'CP138', '12 May 2026'],
    ['EVT-004', 'S2504972', 'DOE started', 'CP138', '20 May 2026'],
    ['EVT-005', 'S2504884', 'Backlog opened', 'CP137', '10 May 2026'],
  ]);

  insertMany('insert into reports values (?, ?, ?, ?, ?)', [
    ['RPT-001', 'CP138 Teacher Status Report', 'Teacher / Manager', 'Approved', 'Includes backlog'],
    ['RPT-002', 'CP138 DOE Report', 'DOE', 'Draft', 'Advanced Phase 2'],
    ['RPT-003', 'Hall Utilization Weekly', 'Operations', 'Approved', 'All halls'],
  ]);

  insertMany('insert into governance_items values (?, ?, ?, ?, ?)', [
    ['GOV-001', 'Schema request', 'Add lifecycle event type', 'Approved', 'AGA'],
    ['GOV-002', 'Permission update', 'Finance payment verification', 'Pending', 'AGA'],
    ['GOV-003', 'Report definition', 'CP138 teacher report', 'Approved', 'Dcode Manager'],
  ]);

  insertMany('insert into schema_requests values (?, ?, ?, ?, ?)', [
    ['SCR-001', 'Add field', 'backlog_cases.double_verification_status', 'Approved', 'AGA'],
    ['SCR-002', 'Add status', 'DOE Submitted', 'Approved', 'AGA'],
  ]);

  insertMany('insert into permissions values (?, ?, ?, ?, ?)', [
    ['Finance Staff', 'Finance / Payments', 'Edit verification only', 'Active', 'Dcode'],
    ['Teacher', 'Cohort / DOE', 'View only', 'Active', 'Dcode'],
    ['AGA Admin', 'All modules', 'Full access', 'Active', 'AGA'],
  ]);

  insertMany('insert into lark_mappings values (?, ?, ?, ?, ?)', [
    ['GGPiba6WEaG1hCsrpJIlJO3bgDb', 'D.136 Class Bible', '26 tables', '2,409 fields', 'Mapped'],
    ['tbl-student-newbible', '✅✅136学员-NEWBIBLE_（Dcode)', 'source', '144 fields', 'Review'],
    ['tbl-whole-masterlist', '✅✅136-WHOLE-MASTERLIST【基础-高四】', 'derived', '141 fields', 'Review'],
    ['tbl-final-masterlist', '🖊️🖊️136-基础FINAL MASTERLIST', 'reporting', '141 fields', 'Review'],
  ]);

  insertMany('insert into activities (label, activity_time) values (?, ?)', [
    ['Invoice INV-2505-1024 paid by Aisyah Binti Rahman', '20 May 2026, 09:58 AM'],
    ['DOE received for S2504987 - Cheah Jun Yi', '20 May 2026, 09:31 AM'],
    ['New registration S2505168 - Ahmad Danish', '20 May 2026, 09:15 AM'],
    ['Class CP138 - Advanced Phase 1 session updated', '20 May 2026, 08:47 AM'],
    ['Payment reminder sent to 12 students', '20 May 2026, 08:30 AM'],
  ]);

  insertMany('insert into tasks (label, due_date) values (?, ?)', [
    ['Verify payments for 38 invoices', '20 May 2026'],
    ['Follow up DOE for 24 students', '21 May 2026'],
    ['Resolve 16 backlog cases', '22 May 2026'],
    ['Update hall schedule for next week', '23 May 2026'],
  ]);

  insertMany('insert into object_logs (object_id, object_type, action, actor, log_time, detail) values (?, ?, ?, ?, ?, ?)', [
    ['S2505128', 'Student', 'Registered', 'Call Center', '20 May 2026, 09:15 AM', 'Registration received and attached to CP138.'],
    ['INV-2505-1024', 'Payment', 'Verified', 'Finance Staff', '20 May 2026, 09:58 AM', 'Payment evidence matched bank-in reference.'],
    ['CP138', 'Cohort', 'Class session updated', 'Dcode Admin', '20 May 2026, 08:47 AM', 'Advanced Phase 1 class timing confirmed.'],
    ['S2504987', 'DOE', 'DOE received', 'Student Portal', '20 May 2026, 09:31 AM', 'DOE submission synced into cohort record.'],
  ]);

  seedWorkflowShowcase();
  ensurePersonProfilesForStudents();
  seedPersonFinanceDemo();

  db.prepare("insert or replace into app_meta (key, value) values ('registration_seq', '5169')").run();
  db.prepare("insert or replace into app_meta (key, value) values ('seed_version', '7')").run();
}

function seedClassesAndSessions() {
  const existing = db.prepare('select count(*) as count from cohort_classes').get().count;
  if (existing > 0) return;

  insertMany('insert into cohort_classes values (?, ?, ?, ?, ?, ?, ?, ?)', [
    ['CLS-CP138-BASIC', 'CP138', 'Basic Class', 'Core class', 1, 'Dr. Ivan Tan', 4, 'In Progress'],
    ['CLS-CP138-ADV1', 'CP138', 'Advanced Phase 1', 'Advanced phase', 2, 'Puan Nurul Izzati', 4, 'In Progress'],
    ['CLS-CP138-ADV2', 'CP138', 'Advanced Phase 2 / DOE', 'Advanced phase + DOE', 3, 'Mr. Viknesh Kumar', 4, 'DOE Pending'],
    ['CLS-CP138-ADV3', 'CP138', 'Advanced Phase 3', 'Advanced phase', 4, 'Ms. Lee Mei Wen', 3, 'Planned'],
    ['CLS-CP138-ADV4', 'CP138', 'Advanced Phase 4 / Graduation', 'Graduation phase', 5, 'Mr. Daniel Lim', 3, 'Planned'],
    ['CLS-CP137-BASIC', 'CP137', 'Basic Class', 'Core class', 1, 'Ms. Lee Mei Wen', 3, 'Completed'],
    ['CLS-CP137-ADV1', 'CP137', 'Advanced Phase 1', 'Advanced phase', 2, 'Dr. Ivan Tan', 3, 'Active'],
    ['CLS-CP136-AUDIT', 'CP136', 'Class Bible Migration Audit', 'Data audit', 1, 'AGA Ops', 0, 'Audit'],
  ]);

  insertMany('insert into class_sessions values (?, ?, ?, ?, ?, ?, ?)', [
    ['SES-CP138-BASIC-01', 'CLS-CP138-BASIC', 'Hall A', '29 May 2026', '10:00-13:00', 40, 'Scheduled'],
    ['SES-CP138-BASIC-02', 'CLS-CP138-BASIC', 'Hall A', '30 May 2026', '10:00-13:00', 40, 'Scheduled'],
    ['SES-CP138-ADV1-01', 'CLS-CP138-ADV1', 'Hall B', '5 Jun 2026', '14:00-17:00', 36, 'Scheduled'],
    ['SES-CP138-ADV2-01', 'CLS-CP138-ADV2', 'Lab 1', '12 Jun 2026', '14:00-17:00', 32, 'DOE Review'],
    ['SES-CP138-ADV3-01', 'CLS-CP138-ADV3', 'Lab 2', '19 Jun 2026', '14:00-17:00', 28, 'Planned'],
    ['SES-CP138-ADV4-01', 'CLS-CP138-ADV4', 'Auditorium', '26 Jun 2026', '10:00-13:00', 80, 'Planned'],
    ['SES-CP137-BASIC-01', 'CLS-CP137-BASIC', 'Hall B', '18 Apr 2026', '10:00-13:00', 36, 'Completed'],
    ['SES-CP137-ADV1-01', 'CLS-CP137-ADV1', 'Training Room 1', '31 May 2026', '14:00-17:00', 18, 'Scheduled'],
    ['SES-CP136-AUDIT-01', 'CLS-CP136-AUDIT', 'Lab 1', '20 May 2026', '09:00-12:00', 0, 'Audit'],
  ]);
}

function seedWorkflowShowcase() {
  insertMany(
    `insert or ignore into students
      (student_id, name, stage_key, status, cohort_code, doe_status, live_cohort, enrollment_history, finance_links, coach_link)
      values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      ['S2599000', 'Tan Mei Xin', 'advanced2', 'DOE Submitted / Coach Review Pending', 'CP138', 'DOE Submitted', 'CP138 Advanced Phase 2 / DOE', 'CP138 Registration - Confirmed | CP138 Fully Paid - Approved | CP138 Basic - Completed | CP138 Advanced Phase 1 - Completed | CP138 Advanced Phase 2 DOE - Live', 'INV-S2599000 - RM 3,600 - Approved Full Payment', 'Coach C-900 - Lim Wei'],
    ]
  );
  db.prepare("insert or ignore into persons (person_id, student_id, name, phone, source, status) values ('PER-S2599000', 'S2599000', 'Tan Mei Xin', '012-555 0138', 'Demo Full Cycle Registration', 'Active')").run();
  db.prepare("insert or ignore into student_profiles (student_profile_id, person_id, student_id, cohort_code, current_stage, payment_clearance) values ('SP-S2599000', 'PER-S2599000', 'S2599000', 'CP138', 'Advanced Phase 2 / DOE', 'Approved Full Payment')").run();
  db.prepare("insert or ignore into registrations values ('REG-S2599000', 'S2599000', 'Tan Mei Xin', 'CP138', 'Approved For Entry', 'Approved Full Payment')").run();
  db.prepare("insert or ignore into coaches values ('C-900', 'S2505089', 'Lim Wei', 'CP136 Advanced Graduate', 'CP138 Advanced Phase 2', 'Active')").run();
  db.prepare("insert or ignore into finance_records values ('INV-S2599000', 'S2599000', 'REG-S2599000', 'CP138', 'RM 3,600', 'Approved Full Payment', 'Verified by Finance Staff', 'Class entry unlocked')").run();
  db.prepare("insert or ignore into payment_submissions values ('PS-S2599000', 'REG-S2599000', 'S2599000', 'RM 3,600', 'Full Payment', 'BANKIN-S2599000', 'Approved Full Payment', '2026-05-29 09:20:00')").run();
  db.prepare("insert or ignore into finance_approvals values ('FA-PS-S2599000', 'PS-S2599000', 'REG-S2599000', 'Approved Full Payment', 'Finance Staff', 'Bank-in proof matched registration invoice.', '2026-05-29 09:35:00')").run();
  db.prepare("insert or ignore into call_center_confirmations values ('CC-S2599000', 'REG-S2599000', 'S2599000', 'Call Center Confirmed', 'Call Center', 'Student confirmed CP138 attendance and payment plan.', '2026-05-29 09:05:00')").run();
  db.prepare("insert or ignore into call_center_contact_logs values ('CCLOG-S2599000-1', 'REG-S2599000', 'S2599000', 'PER-S2599000', 'Call', 'Outbound', 'Confirmed', 'Student confirmed attendance for CP138 Basic and Advanced path.', '2026-05-29', 'Call Center', '2026-05-29 09:05:00')").run();
  db.prepare("insert or ignore into cohort_enrollments values ('ENR-S2599000', 'REG-S2599000', 'S2599000', 'CP138', 'Active', 'Approved Full Payment', '2026-05-29 09:45:00')").run();
  db.prepare("insert or ignore into class_memberships values ('MEM-S2599000-BASIC', 'ENR-S2599000', 'REG-S2599000', 'S2599000', 'CLS-CP138-BASIC', 'Completed', 'Checked In', 'Approved Full Payment', '2026-05-29 10:00:00')").run();
  db.prepare("insert or ignore into attendance_confirmations values ('ATT-S2599000-BASIC', 'MEM-S2599000-BASIC', 'S2599000', 'Checked In', 'Class Admin', 'First-day attendance confirmed in Hall A.', '2026-05-29 10:10:00')").run();

  insertMany(
    'insert or ignore into phase_participations values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
    [
      ['PP-S2599000-BASIC', 'S2599000', 'MEM-S2599000-BASIC', 'CP138', 'CLS-CP138-BASIC', 'Basic Class', 'Completed', '2026-05-29 10:00:00', '2026-05-29 13:00:00', 'Teacher confirmed basic completion.'],
      ['PP-S2599000-ADV1', 'S2599000', 'MEM-S2599000-BASIC', 'CP138', 'CLS-CP138-ADV1', 'Advanced Phase 1', 'Completed', '2026-06-05 14:00:00', '2026-06-05 17:00:00', 'Advanced Phase 1 completion accepted.'],
      ['PP-S2599000-ADV2', 'S2599000', 'MEM-S2599000-BASIC', 'CP138', 'CLS-CP138-ADV2', 'Advanced Phase 2 / DOE', 'In Progress', '2026-06-12 14:00:00', '', 'DOE cycle opened at Advanced Phase 2.'],
    ]
  );

  db.prepare("insert or ignore into doe_submissions values ('DOE-S2599000-DECL', 'S2599000', 'PP-S2599000-ADV2', 'DOE Declaration', 'Submitted', '2026-06-12 15:10:00', 'Career challenge declaration and weekly commitment submitted.')").run();
  db.prepare("insert or ignore into weekly_plans values ('WP-S2599000-W1', 'DOE-S2599000-DECL', 'S2599000', 'Week 1', 'Submitted', 'Coach Review Pending', 'Needs clearer daily follow-up action.')").run();
  db.prepare("insert or ignore into coach_reviews values ('CR-S2599000-1', 'DOE-S2599000-DECL', 'C-900', 'S2599000', 'Pending', 'Coach Lim Wei reviewing declaration and weekly plan.', '')").run();
  db.prepare("insert or ignore into doe_results values ('DR-S2599000-1', 'DOE-S2599000-DECL', 'S2599000', 'DOE Progress', 'Pending', 'Pending Approval', 'DOE Coordinator', '')").run();
  db.prepare("insert or ignore into grade_assessments values ('GA-S2599000-ABC', 'S2599000', 'Grade ABC', 'Pending', 'Coach Review', 'Pending', 'Coach Lim Wei', '')").run();
  db.prepare("insert or ignore into reports values ('RPT-FULL-CYCLE', 'CP138 Full Cycle Proof Report', 'Manager / Teacher / DOE', 'Draft', 'Include student when finance approved, attendance checked in, DOE submitted, and report inclusion reason documented')").run();
  db.prepare("insert or ignore into report_inclusions values ('RI-S2599000', 'RPT-FULL-CYCLE', 'S2599000', 'Candidate', 'Included after DOE coach review is approved.', 'DOE-S2599000-DECL', 'Data Owner', '')").run();

  insertMany(
    'insert or ignore into workflow_definitions values (?, ?, ?, ?, ?, ?, ?)',
    [
      ['WF-001', 'Learner Registration', 'Identity and Intake', 'Operations / Support', 'New learner signs up or admin enters learner', 'Registration submitted and linked to student', 'Incomplete registration or duplicate person'],
      ['WF-003', 'Registration Confirmation', 'Identity and Intake', 'Call Center / Support', 'Registration needs verification', 'Confirmed registration', 'No answer, wrong contact, cancelled'],
      ['WF-011', 'Payment Submission', 'Finance', 'Support / Finance', 'Proof or bank-in received', 'Pending finance verification', 'Missing proof or mismatch'],
      ['WF-012', 'Finance Verification', 'Finance', 'Finance', 'Payment pending review', 'Approved or rejected payment', 'Exception / unclear bank-in'],
      ['WF-024', 'Class Entry Approval', 'Cohort, Class, And Hall', 'Operations', 'Learner passes gates', 'Active class membership', 'Payment/support/identity gate blocked'],
      ['WF-025', 'First-Day Check-in', 'Cohort, Class, And Hall', 'Class Admin', 'Learner arrives', 'Attendance checked in', 'Absent/late/unverified'],
      ['WF-026', 'Phase Entry', 'Cohort, Class, And Hall', 'Class Ops', 'Student moves into next phase', 'Phase entered', 'Payment/backlog/drop conflict'],
      ['WF-043', 'DOE Start', 'Coach And DOE', 'DOE Team', 'Student reaches 高二 / DOE start point', 'DOE cycle opened', 'Missing phase/payment/coach'],
      ['WF-044', 'DOE Declaration Submission', 'Coach And DOE', 'Student / DOE Team', 'Student submits declaration', 'Submitted DOE declaration', 'Late/incomplete/revision'],
      ['WF-046', 'Coach DOE Review', 'Coach And DOE', 'Coach', 'Submission needs coach verification', 'Review submitted', 'Returned to student'],
      ['WF-047', 'DOE Result Approval', 'Coach And DOE', 'DOE Owner', 'DOE scoring/result ready', 'Approved result', 'Rejected/disputed score'],
      ['WF-048', 'Grade ABC / EMO Assessment', 'Coach And DOE', 'EMO / Coach / DOE', 'Assessment period or coach submission', 'Approved grade', 'Override or second review'],
      ['WF-064', 'Report Definition Approval', 'Reporting And Governance', 'Leadership / Data Owner', 'Report/dashboard needed', 'Approved report logic', 'Inclusion dispute'],
      ['WF-065', 'Final Masterlist Production', 'Reporting And Governance', 'Operations / Data Owner', 'Phase/cohort closes', 'Final masterlist/report', 'Manual copy drift'],
      ['WF-037', 'Graduation Confirmation', 'Student Lifecycle And Exceptions', 'Teacher / Ops', 'Required path completed', 'Graduate confirmed', 'Missing DOE/attendance/payment'],
    ]
  );

  db.prepare("insert or ignore into demo_scenarios values ('SCN-FULL-CYCLE', 'Tan Mei Xin full Dcode lifecycle proof', 'S2599000', 10, 'Build showcase ready', 'Prove registration-to-report lifecycle with workflow, status, evidence, source mapping, and report impact.')").run();

  insertMany(
    'insert or ignore into demo_scenario_steps values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
    [
      ['SCN-FULL-CYCLE', 1, 'WF-001', 'Registrations', 'Registration', 'REG-S2599000', 'No record', 'Registration Submitted', 'Student Portal', 'Name, phone, target cohort', 'New student appears in registration and student views', 'D.136 Class Bible / 课程报名 -> registrations'],
      ['SCN-FULL-CYCLE', 2, 'WF-003', 'Registrations', 'Contact Log', 'CCLOG-S2599000-1', 'Need First Call', 'Call Center Confirmed', 'Call Center', 'Call note and confirmation', 'Registration can proceed to payment gate', '客服 fields -> call_center_contact_logs'],
      ['SCN-FULL-CYCLE', 3, 'WF-011', 'Finance', 'Payment Submission', 'PS-S2599000', 'No proof', 'Pending Finance Verification', 'Student Portal', 'Bank-in proof reference', 'Finance queue receives payment proof', 'Finance fields -> payment_submissions'],
      ['SCN-FULL-CYCLE', 4, 'WF-012', 'Finance', 'Finance Approval', 'FA-PS-S2599000', 'Under Review', 'Approved Full Payment', 'Finance Staff', 'Bank-in proof matched invoice', 'Class entry gate unlocked', 'Finance approval -> finance_approvals'],
      ['SCN-FULL-CYCLE', 5, 'WF-024', 'Classes & Cohorts', 'Class Membership', 'MEM-S2599000-BASIC', 'Pending Gate', 'Active', 'Operations', 'Finance approval + call center confirmation', 'Student becomes active class member', 'Class Bible -> class_memberships'],
      ['SCN-FULL-CYCLE', 6, 'WF-025', 'Classes & Cohorts', 'Attendance', 'ATT-S2599000-BASIC', 'Expected', 'Checked In', 'Class Admin', 'First-day check-in', 'Attendance affects teacher report', 'Class session -> attendance_confirmations'],
      ['SCN-FULL-CYCLE', 7, 'WF-026', 'Dashboard', 'Phase Participation', 'PP-S2599000-ADV1', 'Basic Completed', 'Advanced Phase 1 Completed', 'Teacher', 'Teacher completion note', 'Student can enter DOE start phase', 'Class phase -> phase_participations'],
      ['SCN-FULL-CYCLE', 8, 'WF-043', 'DOE', 'DOE Submission', 'DOE-S2599000-DECL', 'Not Started', 'DOE Cycle Opened', 'DOE Coordinator', 'Advanced Phase 2 entry', 'DOE dashboard shows student', 'CP138 DOE Base -> doe_submissions'],
      ['SCN-FULL-CYCLE', 9, 'WF-044', 'DOE', 'DOE Submission', 'DOE-S2599000-DECL', 'Draft', 'Submitted', 'Student Portal', 'Declaration content submitted', 'Teacher DOE queue updates', 'DOE declaration table -> doe_submissions'],
      ['SCN-FULL-CYCLE', 10, 'WF-046', 'DOE', 'Coach Review', 'CR-S2599000-1', 'Pending', 'Submitted', 'Coach Lim Wei', 'Coach review note', 'DOE result can be approved', 'Coach review -> coach_reviews'],
      ['SCN-FULL-CYCLE', 11, 'WF-047', 'DOE', 'DOE Result', 'DR-S2599000-1', 'Pending Approval', 'Approved', 'DOE Coordinator', 'DOE scoring checked', 'DOE report count updates', 'DOE result table -> doe_results'],
      ['SCN-FULL-CYCLE', 12, 'WF-048', 'DOE', 'Grade Assessment', 'GA-S2599000-ABC', 'Pending', 'Grade B Approved', 'Coach Lim Wei', 'Grade ABC rationale', 'Grade visible in final report', 'Grade ABC table -> grade_assessments'],
      ['SCN-FULL-CYCLE', 13, 'WF-064', 'Reports', 'Report Inclusion', 'RI-S2599000', 'Candidate', 'Included', 'Data Owner', 'Inclusion rule approved', 'Student included with reason', 'Final Masterlist -> report_inclusions'],
      ['SCN-FULL-CYCLE', 14, 'WF-065', 'Reports', 'Report', 'RPT-FULL-CYCLE', 'Draft', 'Approved', 'Manager', 'Report definition approved', 'Teacher/manager can trust final list', 'Report definition -> reports'],
      ['SCN-FULL-CYCLE', 15, 'WF-037', 'Students', 'Student', 'S2599000', 'Advanced Phase 2 / DOE', 'Graduate / Coach Eligible', 'Teacher / Ops', 'Completion, DOE, finance, attendance evidence', 'Coach candidate can be created', 'Student lifecycle -> students/coaches'],
    ]
  );

  insertMany(
    'insert or ignore into workflow_events values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
    [
      ['WE-S2599000-01', 'SCN-FULL-CYCLE', 1, 'WF-001', 'S2599000', 'Registration', 'REG-S2599000', 'No record', 'Registration Submitted', 'Student Portal', 'Registration form captured name, phone, and CP138 target.', 'Student appears on registration queue.', 'D.136 Class Bible / 课程报名', '2026-05-29 08:55:00'],
      ['WE-S2599000-02', 'SCN-FULL-CYCLE', 2, 'WF-003', 'S2599000', 'Contact Log', 'CCLOG-S2599000-1', 'Need First Call', 'Call Center Confirmed', 'Call Center', 'Student confirmed CP138 attendance and payment plan.', 'Registration can proceed to payment gate.', '客服 confirmation fields', '2026-05-29 09:05:00'],
      ['WE-S2599000-03', 'SCN-FULL-CYCLE', 4, 'WF-012', 'S2599000', 'Finance Approval', 'FA-PS-S2599000', 'Under Review', 'Approved Full Payment', 'Finance Staff', 'Bank-in proof matched registration invoice.', 'Class entry gate unlocked.', 'Finance approval table', '2026-05-29 09:35:00'],
      ['WE-S2599000-04', 'SCN-FULL-CYCLE', 6, 'WF-025', 'S2599000', 'Attendance', 'ATT-S2599000-BASIC', 'Expected', 'Checked In', 'Class Admin', 'First-day attendance confirmed in Hall A.', 'Teacher report can count attendance.', 'Class session attendance', '2026-05-29 10:10:00'],
      ['WE-S2599000-05', 'SCN-FULL-CYCLE', 9, 'WF-044', 'S2599000', 'DOE Submission', 'DOE-S2599000-DECL', 'Draft', 'Submitted', 'Student Portal', 'Career challenge declaration and weekly commitment submitted.', 'DOE teacher queue updates.', 'CP138 DOE declaration table', '2026-06-12 15:10:00'],
    ]
  );

  insertMany(
    'insert or ignore into source_mappings values (?, ?, ?, ?, ?, ?, ?, ?, ?)',
    [
      ['MAP-S2599000-STUDENT', 'Student', 'S2599000', 'D.136 Class Bible. (admin dcode)', '✅✅136学员-NEWBIBLE_（Dcode)', 'source', 'name, phone, cohort, class phase, status', 'high', 'Mapped'],
      ['MAP-S2599000-REG', 'Registration', 'REG-S2599000', 'D.136 Class Bible. (admin dcode)', '✅课程报名', 'source', 'registration, target cohort, payment expectation', 'medium', 'Mapped'],
      ['MAP-S2599000-DOE', 'DOE Submission', 'DOE-S2599000-DECL', 'CP138 DOE （学员&教练）', 'DOE 宣告 / weekly plan table', 'working', 'declaration, weekly plan, coach review, result', 'medium', 'Mapped'],
      ['MAP-S2599000-REPORT', 'Report Inclusion', 'RI-S2599000', 'D.136 Class Bible. (admin dcode)', 'FINAL MASTERLIST / DOE dashboard', 'reporting', 'inclusion status, reason, approved report', 'medium', 'Mapped'],
    ]
  );

  insertMany('insert or ignore into object_logs (object_id, object_type, action, actor, log_time, detail) values (?, ?, ?, ?, ?, ?)', [
    ['SCN-FULL-CYCLE', 'Demo Scenario', 'Built SQL workflow showcase', 'AGA Admin', 'Just now', 'Full-cycle scenario seeded from workflow/lifecycle model for Tan Mei Xin.'],
    ['S2599000', 'Student', 'Lifecycle showcase ready', 'AGA Admin', 'Just now', 'Registration, finance, class, DOE, report, and source mapping proof records are linked.'],
  ]);
}

function ensurePersonProfilesForStudents() {
  db.exec(`
    insert or ignore into persons (person_id, student_id, name, phone, source, status)
    select 'PER-' || student_id, student_id, name, '', 'Student Seed / Lifecycle Import', 'Active'
    from students;

    insert or ignore into student_profiles (student_profile_id, person_id, student_id, cohort_code, current_stage, payment_clearance)
    select
      'SP-' || student_id,
      'PER-' || student_id,
      student_id,
      cohort_code,
      stage_key,
      case when finance_links like '%Verified%' or finance_links like '%Approved%' then 'Approved Full Payment' else 'Pending' end
    from students;
  `);

  db.exec(`
    insert or ignore into person_role_ids (role_id, person_id, role_type, role_ref_id, cohort_code, role_status)
    select 'ROLE-STU-' || s.student_id, 'PER-' || s.student_id, 'Student', s.student_id, s.cohort_code, s.status
    from students s;

    insert or ignore into person_role_ids (role_id, person_id, role_type, role_ref_id, cohort_code, role_status)
    select 'ROLE-COACH-' || c.coach_id, 'PER-' || c.student_id, 'Coach', c.coach_id, substr(c.assignment, 1, 5), c.status
    from coaches c;
  `);
}

function seedPersonFinanceDemo() {
  const tanStudent = db.prepare("select student_id from students where name = 'Tan Chi Shiong'").get();
  if (!tanStudent) {
    db.prepare(`insert or ignore into students
      (student_id, name, stage_key, status, cohort_code, doe_status, live_cohort, enrollment_history, finance_links, coach_link)
      values ('S-TCS-001', 'Tan Chi Shiong', 'advanced2', 'Active Coach / Student History', 'CP120', 'Reviewed', 'CP120 Coach Assignment', 'CP100 Basic - Completed | CP120 Coach - Active', 'Person finance account has ledger entries', 'Coach C-TCS-001')`).run();
    db.prepare("insert or ignore into persons (person_id, student_id, name, phone, tax_tin, source, status) values ('PER-TCS-001', 'S-TCS-001', 'Tan Chi Shiong', '012-000 0001', 'IG1234567890', 'Demo CRM Person', 'Active')").run();
    db.prepare("insert or ignore into student_profiles (student_profile_id, person_id, student_id, cohort_code, current_stage, payment_clearance) values ('SP-TCS-001', 'PER-TCS-001', 'S-TCS-001', 'CP120', 'Coach / Advanced History', 'Approved Full Payment')").run();
    db.prepare("insert or ignore into coaches values ('C-TCS-001', 'S-TCS-001', 'Tan Chi Shiong', 'CP100 Basic Graduate', 'CP120 Coach', 'Active')").run();
  }

  db.prepare("update persons set tax_tin = 'IG1234567890' where person_id = 'PER-TCS-001'").run();
  db.prepare("update students set enrollment_history = 'CP100 Basic - Completed | CP120 Coach - Active' where student_id = 'S-TCS-001'").run();
  db.prepare("update coaches set graduate_from = 'CP100 Basic Graduate' where coach_id = 'C-TCS-001'").run();
  db.prepare("delete from person_role_ids where role_id = 'ROLE-TCS-STUDENT-CP108'").run();
  db.prepare("delete from person_finance_ledger where ledger_id = 'LED-TCS-004'").run();

  insertMany(
    'insert or ignore into person_role_ids (role_id, person_id, role_type, role_ref_id, cohort_code, role_status) values (?, ?, ?, ?, ?, ?)',
    [
      ['ROLE-TCS-PERSON', 'PER-TCS-001', 'Person', 'PER-TCS-001', '', 'Active'],
      ['ROLE-TCS-STUDENT-CP100', 'PER-TCS-001', 'Student', 'S-TCS-001', 'CP100', 'Completed Basic'],
      ['ROLE-TCS-COACH-CP120', 'PER-TCS-001', 'Coach', 'C-TCS-001', 'CP120', 'Active'],
    ]
  );

  insertMany(
    'insert or ignore into person_finance_ledger values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
    [
      ['LED-TCS-001', 'PER-TCS-001', 'S-TCS-001', 'REG-TCS-CP100', 'CP100', 'Deposit', 50000, 'in', 'Approved', 'BANKIN-TCS-001', 'Basic class deposit received.', '2026-01-05 10:00:00'],
      ['LED-TCS-002', 'PER-TCS-001', 'S-TCS-001', 'REG-TCS-CP100', 'CP100', 'Full Payment', 310000, 'in', 'Approved', 'BANKIN-TCS-002', 'Balance paid before Basic class entry.', '2026-01-08 11:00:00'],
      ['LED-TCS-003', 'PER-TCS-001', 'S-TCS-001', 'REG-TCS-CP100', 'CP100', 'Consumed', -360000, 'out', 'Used', 'CLS-CP100-BASIC', 'CP100 class entitlement consumed.', '2026-01-20 18:00:00'],
      ['LED-TCS-005', 'PER-TCS-001', 'S-TCS-001', 'REG-TCS-CP120', 'CP120', 'Coach Deposit Waiver', 0, 'neutral', 'Approved', 'COACH-C-TCS-001', 'Coach role has no student payment required.', '2026-03-01 09:00:00'],
    ]
  );

  writeObjectLog('PER-TCS-001', 'Person Finance Account', 'Ledger seeded', 'Tan Chi Shiong finance account shows payments, consumed amount, and remaining credit.', 'Finance Staff');
}

export function getAppState() {
  seedClassesAndSessions();
  const stageRows = db.prepare('select * from stage_columns order by sort_order').all();
  const students = db.prepare('select * from students order by datetime(created_at) desc, student_id desc').all();
  const columns = stageRows.map((column) => ({
    key: column.key,
    label: column.label,
    tone: column.tone,
    hidden: 0,
    students: students
      .filter((student) => student.stage_key === column.key)
      .map((student) => ({ id: student.student_id, name: student.name, status: student.status })),
  }));

  const personRows = db.prepare(`
      select p.person_id as id, p.name, case when s.coach_link like 'Coach %' then 'Student / Coach' when s.stage_key = 'backlog' then 'Student / Backlog' else 'Student' end as role, s.cohort_code, p.status
      from persons p
      join students s on s.student_id = p.student_id
      order by p.created_at desc, p.person_id desc
    `).all().map((row) => [row.id, row.name, row.role, row.cohort_code, row.status]);

  const pageRows = {
    Persons: personRows,
    CRM: personRows,
    Person: personRows,
    Students: db.prepare('select student_id, name, cohort_code, stage_key, status from students order by datetime(created_at) desc, student_id desc').all().map((row) => [row.student_id, row.name, row.cohort_code, stageLabel(row.stage_key), row.status]),
    Coaches: db.prepare('select coach_id, student_id, name, graduate_from, assignment, status from coaches').all().map(Object.values),
    Backlog: db.prepare("select student_id, name, 'Dropped / did not complete' as reason, status, 'Double verification needed' as action from students where stage_key = 'backlog'").all().map(Object.values),
    Registrations: db.prepare(`
      select
        r.registration_id,
        r.name,
        r.cohort_code,
        r.status as registration_status,
        r.payment_status,
        coalesce(cc.status, 'Call Center Pending') as call_center_status,
        case
          when cm.status is not null then cm.status
          when fa.status like 'Approved%' and cc.status = 'Call Center Confirmed' then 'Ready to Enroll'
          else 'Gate Pending'
        end as next_action
      from registrations r
      left join call_center_confirmations cc on cc.registration_id = r.registration_id
      left join payment_submissions ps on ps.registration_id = r.registration_id
      left join finance_approvals fa on fa.payment_submission_id = ps.payment_submission_id
      left join class_memberships cm on cm.registration_id = r.registration_id
      order by r.registration_id desc
    `).all().map(Object.values),
    'Classes & Cohorts': db.prepare(`
      select
        c.cohort_code,
        c.program,
        count(distinct cc.class_id) || ' classes' as classes,
        count(cs.session_id) || ' sessions' as sessions,
        c.status,
        c.size_label
      from cohorts c
      left join cohort_classes cc on cc.cohort_code = c.cohort_code
      left join class_sessions cs on cs.class_id = cc.class_id
      group by c.cohort_code, c.program, c.status, c.size_label
      order by c.cohort_code desc
    `).all().map(Object.values),
    DOE: db.prepare("select student_id, name, cohort_code, stage_key as phase, doe_status from students where stage_key in ('advanced1', 'advanced2', 'advanced3', 'advanced4')").all().map((row) => [row.student_id, row.name, row.cohort_code, stageLabel(row.phase), row.doe_status]),
    'Hall Utilization': db.prepare("select hall_name, capacity || ' pax' as capacity, usage || '%' as usage, schedule, status, case when status != 'active' then 'Disabled' when usage >= 85 then 'High' else 'Normal' end as risk from halls order by status, hall_name").all().map(Object.values),
    'Lifecycle Events': [
      ...db.prepare(`
        select workflow_event_id, student_id, workflow_id || ' / ' || object_type, status_to, event_at
        from workflow_events
        order by datetime(event_at) desc, workflow_event_id desc
      `).all().map(Object.values),
      ...db.prepare('select event_id, student_id, event_type, cohort_code, event_date from lifecycle_events').all().map(Object.values),
    ],
    Finance: db.prepare(`
      select
        coalesce(ps.payment_submission_id, fr.record_id) as record_id,
        coalesce(ps.student_id, fr.student_id) as student_id,
        coalesce(ps.registration_id, fr.registration_id) as registration_id,
        coalesce(r.cohort_code, fr.cohort_code) as cohort_code,
        coalesce(ps.amount, fr.amount) as amount,
        coalesce(fa.status, ps.status, fr.status) as status
      from finance_records fr
      left join registrations r on r.registration_id = fr.registration_id
      left join payment_submissions ps on ps.registration_id = fr.registration_id
      left join finance_approvals fa on fa.payment_submission_id = ps.payment_submission_id
      union
      select ps.payment_submission_id, ps.student_id, ps.registration_id, r.cohort_code, ps.amount, coalesce(fa.status, ps.status)
      from payment_submissions ps
      join registrations r on r.registration_id = ps.registration_id
      left join finance_approvals fa on fa.payment_submission_id = ps.payment_submission_id
      order by record_id desc
    `).all().map(Object.values),
    Payments: db.prepare(`
      select
        ps.payment_submission_id,
        ps.slip_reference,
        ps.student_id,
        r.cohort_code,
        ps.amount,
        coalesce(fa.status, ps.status) as status
      from payment_submissions ps
      join registrations r on r.registration_id = ps.registration_id
      left join finance_approvals fa on fa.payment_submission_id = ps.payment_submission_id
      union
      select payment_id, invoice_id, student_id, cohort_code, amount, status from payments
      order by 1 desc
    `).all().map(Object.values),
    Transfers: db.prepare('select transfer_id, student_id, transfer_type, amount, status from transfers').all().map(Object.values),
    Adjustments: db.prepare('select adjustment_id, invoice_id, adjustment_type, amount, status from adjustments').all().map(Object.values),
    Reports: [
      ...db.prepare("select teacher_report_id, report_name, 'Teacher / Class' as audience, status, summary from teacher_reports order by generated_at desc").all().map(Object.values),
      ...db.prepare("select manager_report_id, report_name, 'Manager / Cohort' as audience, status, summary from manager_reports order by generated_at desc").all().map(Object.values),
      ...db.prepare('select report_id, report_name, audience, status, rule from reports').all().map(Object.values),
    ],
    Governance: db.prepare('select governance_id, item_type, name, status, owner from governance_items').all().map(Object.values),
    'Schema Requests': db.prepare('select request_id, request_type, object_name, status, owner from schema_requests').all().map(Object.values),
    Permissions: db.prepare('select role_name, module_name, permission_level, status, owner from permissions').all().map(Object.values),
    'AGA-only Lark Mapping': getLarkMappingRows(),
  };

  const objectLogs = db.prepare('select * from object_logs order by id desc').all().map((log) => ({
    id: `LOG-${String(log.id).padStart(3, '0')}`,
    objectId: log.object_id,
    objectType: log.object_type,
    action: log.action,
    actor: log.actor,
    at: log.log_time,
    detail: log.detail,
  }));

  pageRows['Audit Log'] = objectLogs.map((log) => [log.id, log.objectId, log.objectType, log.action, log.at]);

  return {
    columns,
    halls: db.prepare('select hall_name as name, capacity as cap, usage, schedule, status from halls order by status, hall_name').all(),
    hallSessions: getHallSessions(),
    classCalendar: getClassCalendar(),
    doeDashboard: getDoeDashboard(),
    callCenterDashboard: getCallCenterDashboard(),
    activities: db.prepare('select label, activity_time from activities order by id desc limit 7').all().map((row) => [row.label, row.activity_time]),
    tasks: db.prepare('select label, due_date from tasks order by id desc limit 6').all().map((row) => [row.label, row.due_date]),
    objectLogs,
    pageRows,
    cohortTree: getCohortTree(),
    demoCycle: getDemoCycle(),
    relationships: getRelationships(),
    registrationSeq: Number(db.prepare("select value from app_meta where key = 'registration_seq'").get()?.value || 5169),
  };
}

function getDemoCycle() {
  const scenario = db.prepare(`
    select ds.*, s.name as student_name, s.cohort_code, s.stage_key, s.status as student_status, s.doe_status
    from demo_scenarios ds
    join students s on s.student_id = ds.student_id
    order by ds.scenario_id
    limit 1
  `).get();
  if (!scenario) return null;

  const steps = db.prepare(`
    select
      dss.*,
      wd.workflow_name,
      wd.object_group,
      wd.owner,
      wd.exception_path
    from demo_scenario_steps dss
    join workflow_definitions wd on wd.workflow_id = dss.workflow_id
    where dss.scenario_id = ?
    order by dss.step_no
  `).all(scenario.scenario_id);
  const events = db.prepare(`
    select *
    from workflow_events
    where scenario_id = ?
    order by step_no, datetime(event_at)
  `).all(scenario.scenario_id);
  const mappings = db.prepare(`
    select canonical_object, canonical_id, source_base, source_table, source_role, field_mapping_summary, confidence, status
    from source_mappings
    where canonical_id in (
      select object_id from demo_scenario_steps where scenario_id = ?
    )
    or canonical_id = ?
    order by canonical_object
  `).all(scenario.scenario_id, scenario.student_id);
  const doeChain = db.prepare(`
    select 'DOE Submission' as objectType, doe_submission_id as objectId, submission_status as status, content_summary as detail from doe_submissions where student_id = ?
    union all
    select 'Weekly Plan', weekly_plan_id, plan_status || ' / ' || coach_status, obstacle_note from weekly_plans where student_id = ?
    union all
    select 'Coach Review', coach_review_id, review_status, review_note from coach_reviews where student_id = ?
    union all
    select 'DOE Result', doe_result_id, result_status, result_type || ': ' || score from doe_results where student_id = ?
    union all
    select 'Grade Assessment', grade_assessment_id, assessment_status, grade_type || ': ' || grade_value || ' (' || source_type || ')' from grade_assessments where student_id = ?
  `).all(scenario.student_id, scenario.student_id, scenario.student_id, scenario.student_id, scenario.student_id);
  const reportProof = db.prepare(`
    select ri.report_inclusion_id, ri.report_id, r.report_name, ri.inclusion_status, ri.inclusion_reason, ri.source_object
    from report_inclusions ri
    left join reports r on r.report_id = ri.report_id
    where ri.student_id = ?
  `).all(scenario.student_id);

  const currentStep = steps.find((step) => step.step_no === scenario.current_step) || steps[0];
  const completed = events.length;
  return {
    scenarioId: scenario.scenario_id,
    name: scenario.scenario_name,
    proofGoal: scenario.proof_goal,
    status: scenario.status,
    student: {
      id: scenario.student_id,
      name: scenario.student_name,
      cohort: scenario.cohort_code,
      stage: stageLabel(scenario.stage_key),
      status: scenario.student_status,
      doeStatus: scenario.doe_status,
    },
    currentStep,
    progress: {
      current: scenario.current_step,
      total: steps.length,
      completed,
    },
    steps,
    events,
    mappings,
    doeChain,
    reportProof,
  };
}

function getHallSessions() {
  const rows = db.prepare(`
    select
      h.hall_name as hallName,
      h.capacity,
      h.usage,
      h.schedule,
      h.status as hallStatus,
      co.cohort_code as cohort,
      cc.class_name as className,
      cs.session_id as sessionId,
      cs.session_date as sessionDate,
      cs.session_time as sessionTime,
      cs.expected_students as expectedStudents,
      cs.status as sessionStatus
    from halls h
    left join class_sessions cs on cs.hall_name = h.hall_name
    left join cohort_classes cc on cc.class_id = cs.class_id
    left join cohorts co on co.cohort_code = cc.cohort_code
    order by h.status, h.hall_name, cs.session_date
  `).all();

  const hallNames = [...new Set(rows.map((row) => row.hallName))];
  return hallNames.map((hallName) => {
    const hallRows = rows.filter((row) => row.hallName === hallName);
    const first = hallRows[0];
    return {
      name: hallName,
      capacity: first.capacity,
      usage: first.usage,
      schedule: first.schedule,
      status: first.hallStatus,
      sessions: hallRows
        .filter((row) => row.sessionId)
        .map((row) => ({
          id: row.sessionId,
          cohort: row.cohort,
          className: row.className,
          date: row.sessionDate,
          time: row.sessionTime,
          expectedStudents: row.expectedStudents,
          status: row.sessionStatus,
        })),
    };
  });
}

function getClassCalendar() {
  return db.prepare(`
    select
      cs.session_id as id,
      co.cohort_code as cohort,
      cc.class_name as className,
      cs.hall_name as hall,
      cs.session_date as date,
      cs.session_time as time,
      cs.expected_students as expectedStudents,
      cs.status
    from class_sessions cs
    join cohort_classes cc on cc.class_id = cs.class_id
    join cohorts co on co.cohort_code = cc.cohort_code
    order by cs.session_date, cs.session_time, co.cohort_code
  `).all().map((row) => ({
    id: row.id,
    cohort: row.cohort,
    className: row.className,
    hall: row.hall,
    date: row.date,
    time: row.time,
    expectedStudents: row.expectedStudents,
    status: row.status,
  }));
}

function getCohortTree() {
  const cohorts = db.prepare('select * from cohorts order by cohort_code desc').all();
  const classes = db.prepare('select * from cohort_classes order by cohort_code desc, sequence_no').all();
  const sessions = db.prepare('select * from class_sessions order by session_date, session_time').all();

  return cohorts.map((cohort) => ({
    code: cohort.cohort_code,
    program: cohort.program,
    venueHall: cohort.venue_hall,
    status: cohort.status,
    size: cohort.size_label,
    classes: classes
      .filter((classRow) => classRow.cohort_code === cohort.cohort_code)
      .map((classRow) => ({
        membershipStats: getClassMembershipStats(classRow.class_id),
        id: classRow.class_id,
        name: classRow.class_name,
        type: classRow.class_type,
        teacher: classRow.teacher_name,
        coachCount: classRow.coach_count,
        status: classRow.status,
        sessions: sessions
          .filter((session) => session.class_id === classRow.class_id)
          .map((session) => ({
            id: session.session_id,
            hall: session.hall_name,
            date: session.session_date,
            time: session.session_time,
            expectedStudents: session.expected_students,
            status: session.status,
          })),
      })),
  }));
}

function getClassMembershipStats(classId) {
  const rows = db.prepare(`
    select
      status,
      payment_clearance as paymentClearance,
      count(*) as count
    from class_memberships
    where class_id = ?
    group by status, payment_clearance
  `).all(classId);
  return {
    preRegistered: rows.filter((row) => row.status === 'Pre-Registered').reduce((sum, row) => sum + row.count, 0),
    confirmed: rows.filter((row) => row.status === 'Confirmed').reduce((sum, row) => sum + row.count, 0),
    noShow: rows.filter((row) => row.status === 'No Show').reduce((sum, row) => sum + row.count, 0),
    paymentPending: rows.filter((row) => row.paymentClearance !== 'Approved Full Payment').reduce((sum, row) => sum + row.count, 0),
  };
}

function getDoeDashboard() {
  const advancedClasses = db.prepare(`
    select
      cc.class_id,
      cc.cohort_code,
      c.program,
      cc.class_name,
      cc.teacher_name,
      cc.coach_count,
      cc.status,
      cc.sequence_no
    from cohort_classes cc
    join cohorts c on c.cohort_code = cc.cohort_code
    where cc.class_name like 'Advanced Phase%'
    order by cc.cohort_code desc, cc.sequence_no
  `).all();
  const students = db.prepare(`
    select student_id, name, stage_key, status, cohort_code, doe_status, coach_link
    from students
    where stage_key in ('advanced1', 'advanced2', 'advanced3', 'advanced4')
    order by student_id
  `).all();
  const coaches = db.prepare('select coach_id, student_id, name, graduate_from, assignment, status from coaches order by coach_id').all();
  const sessions = db.prepare('select class_id, hall_name, session_date, session_time, status from class_sessions order by session_date, session_time').all();
  const phaseStageMap = {
    'Advanced Phase 1': 'advanced1',
    'Advanced Phase 2': 'advanced2',
    'Advanced Phase 3': 'advanced3',
    'Advanced Phase 4 / Graduation': 'advanced4',
  };

  const byCohort = new Map();
  for (const classRow of advancedClasses) {
    const stageKey = phaseStageMap[classRow.class_name];
    if (!stageKey) continue;
    if (!byCohort.has(classRow.cohort_code)) {
      byCohort.set(classRow.cohort_code, {
        cohortCode: classRow.cohort_code,
        program: classRow.program,
        phases: [],
      });
    }

    const classStudents = students
      .filter((student) => student.cohort_code === classRow.cohort_code && student.stage_key === stageKey)
      .map((student) => ({
        studentId: student.student_id,
        name: student.name,
        doeStatus: student.doe_status,
        coachStatus: student.coach_link,
        currentLifecycleStatus: student.status,
      }));
    const classCoaches = coaches
      .filter((coach) => coach.assignment.includes(classRow.cohort_code) && coach.assignment.includes(classRow.class_name.replace(' / Graduation', '')))
      .map((coach) => ({
        coachId: coach.coach_id,
        studentId: coach.student_id,
        name: coach.name,
        graduateFrom: coach.graduate_from,
        assignment: coach.assignment,
        status: coach.status,
      }));
    const submitted = classStudents.filter((student) => /submitted|reviewed|final review/i.test(student.doeStatus)).length;
    const pending = classStudents.filter((student) => /pending|not started|revision/i.test(student.doeStatus)).length;
    const coachFollowUpPending = classStudents.filter((student) => /pending|not eligible/i.test(student.coachStatus)).length;

    byCohort.get(classRow.cohort_code).phases.push({
      classId: classRow.class_id,
      phaseName: classRow.class_name,
      teacher: classRow.teacher_name,
      coaches: classCoaches,
      students: classStudents,
      sessions: sessions
        .filter((session) => session.class_id === classRow.class_id)
        .map((session) => ({
          hall: session.hall_name,
          date: session.session_date,
          time: session.session_time,
          status: session.status,
        })),
      stats: {
        totalStudents: classStudents.length,
        submitted,
        pending,
        missing: Math.max(classStudents.length - submitted - pending, 0),
        coachFollowUpPending,
        teacherReviewStatus: pending > 0 ? 'Review needed' : 'On track',
      },
    });
  }

  return Array.from(byCohort.values()).filter((cohort) => cohort.phases.length > 0);
}

function getCallCenterDashboard() {
  const registrations = db.prepare(`
    select
      r.registration_id as registrationId,
      r.student_id as studentId,
      r.name,
      r.cohort_code as cohortCode,
      r.status as registrationStatus,
      r.payment_status as paymentStatus,
      p.person_id as personId,
      coalesce(p.phone, '') as phone,
      coalesce(cc.status, 'Need First Call') as callStatus,
      coalesce(last_log.contact_method, '-') as lastMethod,
      coalesce(last_log.contact_result, 'Need First Call') as lastResult,
      coalesce(last_log.contact_note, 'No contact attempt saved yet') as lastNote,
      coalesce(last_log.next_follow_up_at, '') as nextFollowUpAt,
      coalesce(last_log.handled_by, 'Unassigned') as handledBy,
      coalesce(log_counts.contactAttempts, 0) as contactAttempts
    from registrations r
    left join persons p on p.student_id = r.student_id
    left join call_center_confirmations cc on cc.registration_id = r.registration_id
    left join (
      select registration_id, count(*) as contactAttempts
      from call_center_contact_logs
      group by registration_id
    ) log_counts on log_counts.registration_id = r.registration_id
    left join call_center_contact_logs last_log
      on last_log.contact_log_id = (
        select contact_log_id
        from call_center_contact_logs scoped_log
        where scoped_log.registration_id = r.registration_id
        order by datetime(scoped_log.created_at) desc, scoped_log.contact_log_id desc
        limit 1
      )
    order by r.registration_id desc
  `).all();

  const isToday = (value) => value && /today|just now|29 May 2026/i.test(value);
  const queue = {
    newSubmitted: registrations.filter((row) => row.registrationStatus === 'Submitted'),
    needFirstCall: registrations.filter((row) => row.contactAttempts === 0 && !/confirmed|failed/i.test(row.callStatus)),
    waitingStudentReply: registrations.filter((row) => /waiting|follow/i.test(row.callStatus)),
    followUpToday: registrations.filter((row) => isToday(row.nextFollowUpAt)),
    confirmed: registrations.filter((row) => row.callStatus === 'Call Center Confirmed'),
    failed: registrations.filter((row) => /failed|wrong|rejected/i.test(row.callStatus)),
  };
  const confirmedWithAttempts = registrations.filter((row) => row.callStatus === 'Call Center Confirmed' && row.contactAttempts > 0);
  const avgAttempts = confirmedWithAttempts.length
    ? (confirmedWithAttempts.reduce((sum, row) => sum + row.contactAttempts, 0) / confirmedWithAttempts.length).toFixed(1)
    : '0.0';
  const staff = Object.entries(registrations.reduce((acc, row) => {
    if (row.handledBy && row.handledBy !== 'Unassigned') acc[row.handledBy] = (acc[row.handledBy] || 0) + 1;
    return acc;
  }, {})).map(([name, count]) => ({ name, count }));

  return {
    stats: {
      newSubmitted: queue.newSubmitted.length,
      needFirstCall: queue.needFirstCall.length,
      waitingStudentReply: queue.waitingStudentReply.length,
      followUpToday: queue.followUpToday.length,
      confirmedToday: registrations.filter((row) => row.callStatus === 'Call Center Confirmed' && isToday(row.nextFollowUpAt)).length,
      confirmed: queue.confirmed.length,
      failed: queue.failed.length,
      avgAttempts,
    },
    staff,
    queue,
    rows: registrations,
  };
}

function stageLabel(stageKey) {
  return db.prepare('select label from stage_columns where key = ?').get(stageKey)?.label || stageKey;
}

function getLarkMappingRows() {
  const objectMappings = db.prepare(`
    select
      canonical_object,
      canonical_id,
      source_table,
      source_role,
      confidence,
      source_base,
      field_mapping_summary
    from source_mappings
    order by
      case source_role when 'source' then 1 when 'working' then 2 when 'reporting' then 3 else 4 end,
      canonical_object
  `).all();
  if (objectMappings.length > 0) {
    return objectMappings.map((row) => [
      row.canonical_object,
      row.canonical_id,
      row.source_table,
      row.source_role,
      row.confidence,
      row.source_base,
      row.field_mapping_summary,
    ]);
  }

  const importedCandidates = db.prepare(`
    select
      person_attribute,
      field_name,
      table_name,
      source_role,
      confidence,
      field_type,
      import_note
    from lark_person_field_candidates
    order by
      case confidence when 'high' then 1 when 'medium' then 2 else 3 end,
      case person_attribute
        when 'name' then 1
        when 'phone' then 2
        when 'student_id' then 3
        when 'emergency_contact' then 4
        when 'coach_assignment' then 5
        when 'finance' then 6
        else 7
      end,
      table_name,
      field_order
    limit 80
  `).all();

  if (importedCandidates.length > 0) {
    return importedCandidates.map((row) => [
      row.person_attribute,
      row.field_name,
      row.table_name,
      row.source_role,
      row.confidence,
      row.field_type,
      row.import_note,
    ]);
  }

  return db.prepare('select token_id, lark_object, role, size_label, status from lark_mappings').all().map(Object.values);
}

function getLarkPersonSchema() {
  const latestRun = db.prepare('select * from lark_import_runs order by imported_at desc limit 1').get();
  const attributeCounts = db.prepare(`
    select person_attribute as attribute, count(*) as count
    from lark_person_field_candidates
    group by person_attribute
    order by count(*) desc, person_attribute
  `).all();
  const sourceTables = db.prepare(`
    select table_id as tableId, table_name as tableName, role_guess as role, field_count as fieldCount, view_count as viewCount
    from lark_source_tables
    order by
      case role_guess
        when 'Learner Source' then 1
        when 'Coach Source' then 2
        when 'Registration Source' then 3
        when 'Backlog / Exit' then 4
        else 5
      end,
      field_count desc
    limit 10
  `).all();
  const topFields = db.prepare(`
    select
      person_attribute as attribute,
      field_name as fieldName,
      table_name as tableName,
      source_role as sourceRole,
      confidence,
      field_type as fieldType,
      field_order as fieldOrder
    from lark_person_field_candidates
    order by
      case confidence when 'high' then 1 when 'medium' then 2 else 3 end,
      case person_attribute
        when 'name' then 1
        when 'phone' then 2
        when 'student_id' then 3
        when 'emergency_contact' then 4
        when 'coach_assignment' then 5
        when 'finance' then 6
        else 7
      end,
      table_name,
      field_order
    limit 24
  `).all();

  return {
    latestRun: latestRun ? {
      importId: latestRun.import_id,
      sourceName: latestRun.source_name,
      sourcePath: latestRun.source_path,
      tableCount: latestRun.table_count,
      fieldCount: latestRun.field_count,
      personCandidateCount: latestRun.person_candidate_count,
      status: latestRun.status,
      importedAt: latestRun.imported_at,
    } : null,
    attributeCounts,
    sourceTables,
    topFields,
    note: 'Project CSV currently contains Lark schema and field inventory only. It does not contain actual person row exports.',
  };
}

function getRelationships() {
  const studentRows = db.prepare('select student_id, doe_status, live_cohort, enrollment_history, finance_links, coach_link from students').all();
  const coachRows = db.prepare('select coach_id, student_id, name, graduate_from, assignment from coaches').all();
  const personRows = db.prepare('select person_id, tax_tin from persons').all();
  const roleRows = db.prepare('select person_id, role_type, role_ref_id, cohort_code, role_status from person_role_ids order by person_id, role_type, cohort_code').all();
  const ledgerRows = db.prepare('select person_id, ledger_id, student_id, registration_id, cohort_code, transaction_type, amount_cents, money_direction, transaction_status, source_ref, note, occurred_at from person_finance_ledger order by person_id, occurred_at').all();
  const financeRows = db.prepare('select record_id, student_id, registration_id, cohort_code, approval_note, next_gate from finance_records').all();
  const paymentRows = db.prepare('select payment_id, invoice_id, student_id, cohort_code, status from payments').all();
  const registrationRows = db.prepare(`
    select
      r.registration_id,
      r.student_id,
      r.name,
      r.cohort_code,
      r.status,
      r.payment_status,
      p.person_id,
      coalesce(p.phone, '') as phone,
      coalesce(cc.status, 'Need First Call') as call_center_status,
      coalesce(cc.note, 'No final call center decision yet') as call_center_note
    from registrations r
    left join persons p on p.student_id = r.student_id
    left join call_center_confirmations cc on cc.registration_id = r.registration_id
  `).all();
  const contactLogs = db.prepare(`
    select
      contact_log_id,
      registration_id,
      student_id,
      person_id,
      contact_method,
      contact_direction,
      contact_result,
      contact_note,
      next_follow_up_at,
      handled_by,
      created_at
    from call_center_contact_logs
    order by datetime(created_at) desc, contact_log_id desc
  `).all();

  const financeAccounts = {};
  const taxTinByPerson = Object.fromEntries(personRows.map((row) => [row.person_id, row.tax_tin || 'Not captured']));
  for (const row of ledgerRows) {
    financeAccounts[row.person_id] ||= {
      taxTin: taxTinByPerson[row.person_id] || 'Not captured',
      entries: [],
      totalPaidCents: 0,
      totalUsedCents: 0,
      pendingCents: 0,
      availableCents: 0,
    };
    financeAccounts[row.person_id].entries.push(row);
    if (row.money_direction === 'in' && row.transaction_status === 'Approved') financeAccounts[row.person_id].totalPaidCents += row.amount_cents;
    if (row.money_direction === 'out' && ['Used', 'Approved'].includes(row.transaction_status)) financeAccounts[row.person_id].totalUsedCents += Math.abs(row.amount_cents);
    if (/pending/i.test(row.transaction_status)) financeAccounts[row.person_id].pendingCents += row.amount_cents;
  }
  for (const account of Object.values(financeAccounts)) {
    account.availableCents = account.totalPaidCents - account.totalUsedCents;
  }

  const rolesByPerson = roleRows.reduce((groups, row) => {
    groups[row.person_id] ||= [];
    groups[row.person_id].push(row);
    return groups;
  }, {});

  return {
    students: Object.fromEntries(studentRows.map((row) => [row.student_id, {
      doe: row.doe_status,
      liveCohort: row.live_cohort,
      enrollments: row.enrollment_history.split(' | '),
      finance: row.finance_links ? row.finance_links.split(' | ') : ['No linked finance record in local DB'],
      coach: row.coach_link,
    }])),
    coaches: Object.fromEntries(coachRows.map((row) => [row.coach_id, {
      studentId: row.student_id,
      name: row.name,
      graduateFrom: row.graduate_from,
      currentAssignment: row.assignment,
    }])),
    personRoles: rolesByPerson,
    personFinanceAccounts: financeAccounts,
    finance: {
      ...Object.fromEntries(financeRows.map((row) => [row.record_id, {
        studentId: row.student_id,
        registrationId: row.registration_id,
        cohort: row.cohort_code,
        approval: row.approval_note,
        nextGate: row.next_gate,
      }])),
      ...Object.fromEntries(paymentRows.map((row) => [row.payment_id, {
        studentId: row.student_id,
        registrationId: row.invoice_id,
        cohort: row.cohort_code,
        approval: row.status,
        nextGate: row.status === 'Verified' ? 'Student is finance-cleared' : 'Finance follow-up needed',
      }])),
    },
    registrations: Object.fromEntries(registrationRows.map((row) => [row.registration_id, {
      studentId: row.student_id,
      personId: row.person_id,
      name: row.name,
      cohort: row.cohort_code,
      status: row.status,
      paymentStatus: row.payment_status,
      phone: row.phone || 'Phone not captured yet',
      callCenterStatus: row.call_center_status,
      callCenterNote: row.call_center_note,
      callCenterLogs: contactLogs
        .filter((log) => log.registration_id === row.registration_id)
        .map((log) => ({
          id: log.contact_log_id,
          method: log.contact_method,
          direction: log.contact_direction,
          result: log.contact_result,
          note: log.contact_note,
          nextFollowUpAt: log.next_follow_up_at,
          handledBy: log.handled_by,
          createdAt: log.created_at,
        })),
    }])),
    larkPersonSchema: getLarkPersonSchema(),
  };
}

export function writeObjectLog(objectId, objectType, action, detail, actor = 'Admin A.') {
  db.prepare('insert into object_logs (object_id, object_type, action, actor, log_time, detail) values (?, ?, ?, ?, ?, ?)').run(
    objectId,
    objectType,
    action,
    actor,
    'Just now',
    detail
  );
}

export function pushActivity(label) {
  db.prepare('insert into activities (label, activity_time) values (?, ?)').run(label, 'Just now');
}

export function addTask(label) {
  db.prepare('insert into tasks (label, due_date) values (?, ?)').run(label, 'Today');
}

export function createRegistration(payload = {}) {
  const seq = Number(db.prepare("select value from app_meta where key = 'registration_seq'").get()?.value || 5169);
  const names = ['Ahmad Danish', 'Chong Li En', 'Maya Tan', 'Syafiq Aiman', 'Koh Wei Han'];
  const studentId = String(payload.studentId || `S250${seq}`).trim().toUpperCase();
  const name = String(payload.name || names[seq % names.length]).trim();
  const phone = String(payload.phone || `+60 12-${String(seq).slice(-4)} ${String(seq + 18).slice(-4)}`).trim();
  const cohortCode = String(payload.cohortCode || 'CP138').trim().toUpperCase();
  const paymentStatus = String(payload.paymentStatus || 'Pending Finance Approval').trim();
  const registrationId = `REG-${studentId}`;
  const personId = `PER-${studentId}`;
  if (!name) throw new Error('Student name is required.');
  if (!db.prepare('select cohort_code from cohorts where cohort_code = ?').get(cohortCode)) {
    throw new Error(`Please choose a valid cohort.`);
  }
  if (db.prepare('select student_id from students where student_id = ?').get(studentId)) {
    throw new Error(`${studentId} already exists.`);
  }
  if (!payload.studentId) {
    db.prepare("update app_meta set value = ? where key = 'registration_seq'").run(String(seq + 1));
  }
  db.prepare(`insert into students (student_id, name, stage_key, status, cohort_code, doe_status, live_cohort, enrollment_history, finance_links, coach_link)
    values (?, ?, 'registered', 'Registration Submitted', ?, 'Not started', ?, ?, '', 'Not eligible yet')`).run(
      studentId,
      name,
      cohortCode,
      `Registered for ${cohortCode}`,
      `${cohortCode} Registered - Live`
    );
  db.prepare("insert into persons (person_id, student_id, name, phone, source, status) values (?, ?, ?, ?, 'Student Registration Form', 'Active')").run(personId, studentId, name, phone);
  db.prepare("insert into student_profiles (student_profile_id, person_id, student_id, cohort_code, current_stage, payment_clearance) values (?, ?, ?, ?, 'Registration Submitted', 'Pending')").run(`SP-${studentId}`, personId, studentId, cohortCode);
  db.prepare('insert into registrations values (?, ?, ?, ?, ?, ?)').run(registrationId, studentId, name, cohortCode, 'Submitted', paymentStatus);
  db.prepare('insert into lifecycle_events values (?, ?, ?, ?, ?)').run(`EVT-${Date.now()}-REG`, studentId, 'Registration Submitted', cohortCode, 'Just now');
  const message = `${studentId} ${name} submitted registration for ${cohortCode}`;
  pushActivity(message);
  addTask(`Call center confirm ${studentId}`);
  addTask(`Finance approve payment slip for ${studentId}`);
  writeObjectLog(studentId, 'Student', 'Registration Submitted', message, 'Student Portal');
  writeObjectLog(registrationId, 'Registration', 'Created', `New registration linked to ${studentId}.`);
  return message;
}

export function updateStudentStatus(payload = {}) {
  const studentId = String(payload.studentId || '').trim().toUpperCase();
  const stageKey = String(payload.stageKey || '').trim();
  const status = String(payload.status || '').trim();
  const doeStatus = String(payload.doeStatus || '').trim();
  const requestedBy = String(payload.requestedBy || '').trim();
  const approvedBy = String(payload.approvedBy || 'Dcode Admin').trim();
  const evidenceNote = String(payload.evidenceNote || '').trim();
  const student = db.prepare('select student_id, name, cohort_code from students where student_id = ?').get(studentId);
  if (!student) throw new Error('Please choose a valid student.');
  if (!db.prepare('select key from stage_columns where key = ?').get(stageKey)) {
    throw new Error('Please choose a valid lifecycle stage.');
  }
  if (!status) throw new Error('Status is required.');

  const stageName = stageLabel(stageKey);
  db.prepare(`
    update students
    set stage_key = ?,
        status = ?,
        doe_status = coalesce(nullif(?, ''), doe_status),
        live_cohort = ?
    where student_id = ?
  `).run(stageKey, status, doeStatus, `${student.cohort_code} ${stageName}`, studentId);
  db.prepare('update student_profiles set current_stage = ? where student_id = ?').run(stageName, studentId);
  db.prepare('insert into lifecycle_events values (?, ?, ?, ?, ?)').run(`EVT-${Date.now()}-STATUS`, studentId, `Status updated to ${stageName}`, student.cohort_code, 'Just now');
  const approvalTrail = [
    requestedBy ? `requested by ${requestedBy}` : '',
    `approved by ${approvedBy}`,
    evidenceNote ? `evidence: ${evidenceNote}` : '',
  ].filter(Boolean).join(' / ');
  const message = `${studentId} ${student.name} updated to ${stageName}: ${status}`;
  pushActivity(message);
  if (requestedBy) {
    writeObjectLog(studentId, 'Student', 'Status Change Requested', `${message}. ${approvalTrail}`, requestedBy);
  }
  writeObjectLog(studentId, 'Student', 'Status Updated', `${message}. ${approvalTrail}`, approvedBy);
  return message;
}

export function submitPaymentSlip() {
  const registration = db.prepare(`
    select r.registration_id, r.student_id, r.name
    from registrations r
    left join payment_submissions ps on ps.registration_id = r.registration_id
    where ps.payment_submission_id is null
    order by r.registration_id desc
    limit 1
  `).get();
  if (!registration) return 'No registration waiting for payment slip submission.';
  const paymentId = `PS-${registration.student_id}-${Date.now()}`;
  db.prepare("insert into payment_submissions values (?, ?, ?, 'RM 500', 'Deposit', ?, 'Pending Finance Approval', current_timestamp)").run(
    paymentId,
    registration.registration_id,
    registration.student_id,
    `SLIP-${registration.student_id}`
  );
  db.prepare("insert or replace into finance_records values (?, ?, ?, 'CP138', 'RM 500', 'Pending Finance Approval', 'Waiting finance bank-in match', 'Cannot pre-register until approved')").run(
    `INV-${registration.student_id}`,
    registration.student_id,
    registration.registration_id
  );
  db.prepare("update registrations set payment_status = 'Pending Finance Approval' where registration_id = ?").run(registration.registration_id);
  db.prepare('insert into lifecycle_events values (?, ?, ?, ?, ?)').run(`EVT-${Date.now()}-PAY`, registration.student_id, 'Payment Slip Submitted', 'CP138', 'Just now');
  const message = `${registration.student_id} submitted payment slip for finance approval`;
  pushActivity(message);
  writeObjectLog(paymentId, 'Payment Submission', 'Submitted', message, 'Student Portal');
  return message;
}

export function approvePayment() {
  const payment = db.prepare(`
    select ps.*
    from payment_submissions ps
    left join finance_approvals fa on fa.payment_submission_id = ps.payment_submission_id
    where fa.finance_approval_id is null or fa.status in ('Rejected', 'Correction Needed')
    order by ps.submitted_at desc, ps.payment_submission_id desc
    limit 1
  `).get();
  if (!payment) return 'No payment submissions waiting for finance approval.';
  const status = payment.payment_type === 'Full Payment' ? 'Approved Full Payment' : 'Approved Deposit';
  db.prepare('insert or replace into finance_approvals values (?, ?, ?, ?, ?, ?, current_timestamp)').run(
    `FA-${payment.payment_submission_id}`,
    payment.payment_submission_id,
    payment.registration_id,
    status,
    'Finance Staff',
    'Payment evidence matched bank-in reference'
  );
  db.prepare('update payment_submissions set status = ? where payment_submission_id = ?').run(status, payment.payment_submission_id);
  db.prepare('update registrations set payment_status = ? where registration_id = ?').run(status, payment.registration_id);
  db.prepare('update finance_records set status = ?, approval_note = ?, next_gate = ? where registration_id = ?').run(status, 'Verified by Finance Staff', 'Need call center confirmation before pre-registration', payment.registration_id);
  db.prepare('update student_profiles set payment_clearance = ? where student_id = ?').run(status, payment.student_id);
  db.prepare('insert into lifecycle_events values (?, ?, ?, ?, ?)').run(`EVT-${Date.now()}-FIN`, payment.student_id, 'Finance Approved', 'CP138', 'Just now');
  const message = `${payment.student_id} payment approved by finance as ${status}`;
  pushActivity(message);
  writeObjectLog(payment.payment_submission_id, 'Payment Submission', 'Finance Approved', message, 'Finance Staff');
  return message;
}

export function rejectPayment() {
  return updateFirstPaymentApproval('Rejected', 'Payment slip rejected by finance');
}

export function requestPaymentCorrection() {
  return updateFirstPaymentApproval('Correction Needed', 'Finance requested payment slip correction');
}

function updateFirstPaymentApproval(status, messagePrefix) {
  const payment = db.prepare("select * from payment_submissions where status = 'Pending Finance Approval' order by submitted_at desc limit 1").get();
  if (!payment) return 'No pending finance payment to update.';
  db.prepare('update payment_submissions set status = ? where payment_submission_id = ?').run(status, payment.payment_submission_id);
  db.prepare('update registrations set payment_status = ? where registration_id = ?').run(status, payment.registration_id);
  db.prepare('insert or replace into finance_approvals values (?, ?, ?, ?, ?, ?, current_timestamp)').run(`FA-${payment.payment_submission_id}`, payment.payment_submission_id, payment.registration_id, status, 'Finance Staff', messagePrefix);
  db.prepare('insert into lifecycle_events values (?, ?, ?, ?, ?)').run(`EVT-${Date.now()}-FIN`, payment.student_id, `Finance ${status}`, 'CP138', 'Just now');
  const message = `${messagePrefix}: ${payment.student_id}`;
  pushActivity(message);
  writeObjectLog(payment.payment_submission_id, 'Payment Submission', status, message, 'Finance Staff');
  return message;
}

export function callCenterConfirmRegistration() {
  return updateCallCenterConfirmation('Call Center Confirmed', 'Call center confirmed student intention');
}

export function requestStudentReply() {
  return updateCallCenterConfirmation('Waiting Student Reply', 'Call center requested student reply');
}

export function addCallCenterContactLog(payload = {}) {
  const registrationId = String(payload.registrationId || '').trim();
  const registration = db.prepare(`
    select r.*, p.person_id
    from registrations r
    left join persons p on p.student_id = r.student_id
    where r.registration_id = coalesce(nullif(?, ''), r.registration_id)
      and r.status not in ('Pre-Registered')
    order by r.registration_id desc
    limit 1
  `).get(registrationId);
  if (!registration) return 'No registration found for call center contact log.';

  const method = normalizeOption(payload.method, ['Call', 'WhatsApp', 'SMS', 'Email', 'In Person'], 'Call');
  const direction = normalizeOption(payload.direction, ['Outbound', 'Inbound'], 'Outbound');
  const result = normalizeOption(payload.result, ['Answered', 'No Answer', 'Wrong Number', 'Waiting Reply', 'Confirmed', 'Rejected', 'Need Follow Up'], 'Need Follow Up');
  const note = String(payload.note || `${method} contact saved as ${result}`).trim();
  const nextFollowUpAt = String(payload.nextFollowUpAt || '').trim();
  const handledBy = String(payload.handledBy || 'Call Center').trim();
  const logId = `CCLOG-${registration.student_id}-${Date.now()}`;

  db.prepare(`
    insert into call_center_contact_logs
      (contact_log_id, registration_id, student_id, person_id, contact_method, contact_direction, contact_result, contact_note, next_follow_up_at, handled_by, created_at)
    values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, current_timestamp)
  `).run(logId, registration.registration_id, registration.student_id, registration.person_id || `PER-${registration.student_id}`, method, direction, result, note, nextFollowUpAt, handledBy);

  const status = callCenterStatusFromResult(result);
  db.prepare('insert or replace into call_center_confirmations values (?, ?, ?, ?, ?, ?, current_timestamp)').run(
    `CC-${registration.registration_id}`,
    registration.registration_id,
    registration.student_id,
    status,
    handledBy,
    note
  );
  db.prepare('update registrations set status = ? where registration_id = ?').run(status, registration.registration_id);
  db.prepare('insert into lifecycle_events values (?, ?, ?, ?, ?)').run(`EVT-${Date.now()}-CCLOG`, registration.student_id, `Call Center ${result}`, registration.cohort_code, 'Just now');

  const message = `${handledBy} saved ${method} ${direction.toLowerCase()} contact for ${registration.student_id}: ${result}`;
  pushActivity(message);
  writeObjectLog(registration.registration_id, 'Registration', `Call Center ${result}`, note, handledBy);
  writeObjectLog(logId, 'Call Center Contact', result, `${registration.registration_id} - ${note}`, handledBy);
  if (nextFollowUpAt) addTask(`Follow up ${registration.student_id} on ${nextFollowUpAt}`);
  return message;
}

function normalizeOption(value, allowed, fallback) {
  const text = String(value || '').trim();
  return allowed.includes(text) ? text : fallback;
}

function callCenterStatusFromResult(result) {
  if (result === 'Confirmed') return 'Call Center Confirmed';
  if (['Wrong Number', 'Rejected'].includes(result)) return 'Call Center Failed';
  if (result === 'Waiting Reply') return 'Waiting Student Reply';
  return 'Need Follow Up';
}

function updateCallCenterConfirmation(status, messagePrefix) {
  const registration = db.prepare(`
    select r.*
    from registrations r
    left join call_center_confirmations cc on cc.registration_id = r.registration_id
    where cc.confirmation_id is null or cc.status != 'Call Center Confirmed'
    order by r.registration_id desc
    limit 1
  `).get();
  if (!registration) return 'No registration waiting for call center confirmation.';
  db.prepare('insert or replace into call_center_confirmations values (?, ?, ?, ?, ?, ?, current_timestamp)').run(
    `CC-${registration.registration_id}`,
    registration.registration_id,
    registration.student_id,
    status,
    'Call Center',
    messagePrefix
  );
  db.prepare('update registrations set status = ? where registration_id = ?').run(status, registration.registration_id);
  db.prepare('insert into lifecycle_events values (?, ?, ?, ?, ?)').run(`EVT-${Date.now()}-CC`, registration.student_id, status, registration.cohort_code, 'Just now');
  const message = `${messagePrefix}: ${registration.student_id}`;
  pushActivity(message);
  writeObjectLog(registration.registration_id, 'Registration', status, message, 'Call Center');
  return message;
}

export function enrollApprovedRegistration() {
  const registration = db.prepare(`
    select r.*, fa.status as finance_status, cc.status as call_status
    from registrations r
    join payment_submissions ps on ps.registration_id = r.registration_id
    join finance_approvals fa on fa.payment_submission_id = ps.payment_submission_id
    join call_center_confirmations cc on cc.registration_id = r.registration_id
    left join class_memberships cm on cm.registration_id = r.registration_id
    where fa.status like 'Approved%'
      and cc.status = 'Call Center Confirmed'
      and cm.membership_id is null
    order by r.registration_id desc
    limit 1
  `).get();
  if (!registration) return 'No approved registration is ready for class enrollment.';
  const classId = db.prepare("select class_id from cohort_classes where cohort_code = ? and class_name = 'Basic Class' order by sequence_no limit 1").get(registration.cohort_code)?.class_id;
  if (!classId) return `No Basic Class found for ${registration.cohort_code}.`;
  const enrollmentId = `ENR-${registration.student_id}-${Date.now()}`;
  const membershipId = `MEM-${registration.student_id}-${Date.now()}`;
  db.prepare('insert into cohort_enrollments values (?, ?, ?, ?, ?, ?, current_timestamp)').run(enrollmentId, registration.registration_id, registration.student_id, registration.cohort_code, 'Pre-Registered', registration.finance_status);
  db.prepare("insert into class_memberships values (?, ?, ?, ?, ?, 'Pre-Registered', 'Pending First-Day Confirmation', ?, current_timestamp)").run(membershipId, enrollmentId, registration.registration_id, registration.student_id, classId, registration.finance_status);
  db.prepare("update students set status = 'Pre-Registered for Basic Class', live_cohort = ? where student_id = ?").run(`${registration.cohort_code} Basic Class - Pre-Registered`, registration.student_id);
  db.prepare("update registrations set status = 'Pre-Registered' where registration_id = ?").run(registration.registration_id);
  db.prepare('insert into lifecycle_events values (?, ?, ?, ?, ?)').run(`EVT-${Date.now()}-ENR`, registration.student_id, 'Pre-Registered to Class', registration.cohort_code, 'Just now');
  const message = `${registration.student_id} enrolled to ${registration.cohort_code} Basic Class as Pre-Registered`;
  pushActivity(message);
  writeObjectLog(membershipId, 'Class Membership', 'Pre-Registered', message, 'Dcode Admin');
  return message;
}

export function confirmFirstDayAttendance() {
  const membership = db.prepare(`
    select cm.*
    from class_memberships cm
    join registrations r on r.registration_id = cm.registration_id
    where cm.status = 'Pre-Registered'
    order by r.registration_id desc, datetime(cm.created_at) desc, cm.membership_id desc
    limit 1
  `).get();
  if (!membership) return 'No pre-registered class member waiting for first-day confirmation.';
  db.prepare("update class_memberships set status = 'Confirmed', attendance_status = 'First-Day Confirmed' where membership_id = ?").run(membership.membership_id);
  db.prepare("insert into attendance_confirmations values (?, ?, ?, 'Confirmed', 'Dcode Admin', 'First-day attendance confirmed in real class', current_timestamp)").run(`ATT-${membership.student_id}-${Date.now()}`, membership.membership_id, membership.student_id);
  db.prepare("update students set status = 'Confirmed Class Member' where student_id = ?").run(membership.student_id);
  db.prepare('insert into lifecycle_events values (?, ?, ?, ?, ?)').run(`EVT-${Date.now()}-ATT`, membership.student_id, 'First-Day Confirmed', 'CP138', 'Just now');
  const message = `${membership.student_id} confirmed by admin on first class day`;
  pushActivity(message);
  writeObjectLog(membership.membership_id, 'Class Membership', 'First-Day Confirmed', message, 'Dcode Admin');
  return message;
}

export function markNoShow() {
  const membership = db.prepare("select * from class_memberships where status = 'Pre-Registered' order by created_at desc limit 1").get();
  if (!membership) return 'No pre-registered class member waiting for no-show marking.';
  db.prepare("update class_memberships set status = 'No Show', attendance_status = 'No Show' where membership_id = ?").run(membership.membership_id);
  db.prepare("update students set stage_key = 'backlog', status = 'No Show / Backlog Review' where student_id = ?").run(membership.student_id);
  db.prepare("insert into attendance_confirmations values (?, ?, ?, 'No Show', 'Dcode Admin', 'Student did not attend first class day', current_timestamp)").run(`ATT-${membership.student_id}-${Date.now()}`, membership.membership_id, membership.student_id);
  db.prepare('insert into lifecycle_events values (?, ?, ?, ?, ?)').run(`EVT-${Date.now()}-NOSHOW`, membership.student_id, 'No Show / Backlog Opened', 'CP138', 'Just now');
  const message = `${membership.student_id} marked no-show and moved to backlog review`;
  pushActivity(message);
  writeObjectLog(membership.membership_id, 'Class Membership', 'No Show', message, 'Dcode Admin');
  return message;
}

export function moveFirst(fromKey, toKey, status, emptyMessage) {
  const student = db.prepare('select student_id, name from students where stage_key = ? order by created_at, student_id limit 1').get(fromKey);
  if (!student) return emptyMessage;
  db.prepare('update students set stage_key = ?, status = ? where student_id = ?').run(toKey, status, student.student_id);
  const eventId = `EVT-${Date.now()}`;
  db.prepare('insert into lifecycle_events values (?, ?, ?, ?, ?)').run(eventId, student.student_id, `Moved to ${stageLabel(toKey)}`, 'CP138', 'Just now');
  const message = `${student.student_id} ${student.name} moved to ${status}`;
  pushActivity(message);
  writeObjectLog(student.student_id, 'Student', `Moved to ${toKey}`, message);
  return message;
}

export function submitDoe() {
  const student = db.prepare("select student_id, name from students where stage_key = 'advanced2' and doe_status like '%Pending%' order by student_id limit 1").get();
  if (!student) return 'No pending DOE submissions in visible Advanced Phase 2 records.';
  db.prepare("update students set status = 'DOE Submitted', doe_status = 'Submitted' where student_id = ?").run(student.student_id);
  const message = `${student.student_id} ${student.name} submitted DOE`;
  pushActivity(message);
  writeObjectLog(student.student_id, 'DOE', 'Submitted', message, 'Student Portal');
  return message;
}

export function resolveBacklog() {
  const message = moveFirst('backlog', 'registered', 'Backlog re-entry pending double verification', 'No visible backlog cases to resolve.');
  addTask('Double verify backlog re-entry');
  return message;
}

export function scheduleClass() {
  db.prepare("update halls set usage = min(100, usage + 3), schedule = '8 / 8 slots' where hall_name = 'Hall A'").run();
  const message = 'CP138 class session scheduled in Hall A';
  pushActivity(message);
  writeObjectLog('CP138', 'Cohort', 'Scheduled class session', message);
  writeObjectLog('Hall A', 'Hall', 'Reserved slot', 'Hall A utilization updated to 8 / 8 slots.');
  return message;
}

export function createClassSession(payload = {}) {
  const classId = payload.classId;
  const hallName = payload.hallName;
  const sessionDate = payload.sessionDate;
  const sessionTime = payload.sessionTime;
  const expectedStudents = Number(payload.expectedStudents || 0);

  const classRow = db.prepare(`
    select cc.class_id, cc.class_name, co.cohort_code
    from cohort_classes cc
    join cohorts co on co.cohort_code = cc.cohort_code
    where cc.class_id = ?
  `).get(classId);
  if (!classRow) throw new Error('Please choose a valid class.');

  const hall = db.prepare("select hall_name, status from halls where hall_name = ?").get(hallName);
  if (!hall) throw new Error('Please choose a valid hall.');
  if (hall.status !== 'active') throw new Error(`${hallName} is disabled.`);
  if (!sessionDate) throw new Error('Please choose a session date.');
  if (!sessionTime) throw new Error('Please choose a session time.');

  const sessionId = `SES-${classId.replace(/^CLS-/, '')}-${Date.now()}`;
  db.prepare('insert into class_sessions values (?, ?, ?, ?, ?, ?, ?)').run(
    sessionId,
    classId,
    hallName,
    sessionDate,
    sessionTime,
    expectedStudents,
    'Scheduled'
  );

  const usedSlots = db.prepare('select count(*) as count from class_sessions where hall_name = ?').get(hallName).count;
  const totalSlots = Math.max(usedSlots, 8);
  const usage = Math.min(100, Math.round((usedSlots / totalSlots) * 100));
  db.prepare('update halls set usage = ?, schedule = ? where hall_name = ?').run(usage, `${usedSlots} / ${totalSlots} slots`, hallName);

  const message = `${classRow.cohort_code} ${classRow.class_name} scheduled in ${hallName} on ${sessionDate} ${sessionTime}`;
  pushActivity(message);
  writeObjectLog(sessionId, 'Class Session', 'Scheduled', message);
  writeObjectLog(hallName, 'Hall', 'Reserved slot', message);
  writeObjectLog(classRow.cohort_code, 'Cohort', 'Scheduled class session', message);
  return message;
}

export function generateReport() {
  const count = db.prepare('select count(*) as count from students').get().count;
  const message = `Generated CP138 teacher status report with ${count} students`;
  pushActivity(message);
  writeObjectLog('RPT-001', 'Report', 'Generated', message);
  return message;
}

export function generateClassReport() {
  const classRow = db.prepare("select class_id, class_name from cohort_classes where cohort_code = 'CP138' and class_name = 'Basic Class' limit 1").get();
  const stats = getClassMembershipStats(classRow.class_id);
  const reportId = `TRPT-${Date.now()}`;
  const summary = `${stats.preRegistered} pre-registered / ${stats.confirmed} confirmed / ${stats.noShow} no-show / ${stats.paymentPending} payment pending`;
  db.prepare('insert into teacher_reports values (?, ?, ?, ?, ?, current_timestamp)').run(reportId, classRow.class_id, `Teacher Class Report - ${classRow.class_name}`, 'Generated', summary);
  const message = `Generated Teacher Class Report for ${classRow.class_name}`;
  pushActivity(message);
  writeObjectLog(reportId, 'Report', 'Generated', summary);
  return message;
}

export function generateCohortManagerReport() {
  const rows = db.prepare(`
    select cm.status, cm.payment_clearance as paymentClearance, count(*) as count
    from class_memberships cm
    join cohort_enrollments ce on ce.enrollment_id = cm.enrollment_id
    where ce.cohort_code = 'CP138'
    group by cm.status, cm.payment_clearance
  `).all();
  const callPending = db.prepare(`
    select count(*) as count
    from registrations r
    left join call_center_confirmations cc on cc.registration_id = r.registration_id
    where r.cohort_code = 'CP138' and coalesce(cc.status, '') != 'Call Center Confirmed'
  `).get().count;
  const financePending = db.prepare("select count(*) as count from payment_submissions where status = 'Pending Finance Approval'").get().count;
  const reportId = `MRPT-${Date.now()}`;
  const confirmed = rows.filter((row) => row.status === 'Confirmed').reduce((sum, row) => sum + row.count, 0);
  const preRegistered = rows.filter((row) => row.status === 'Pre-Registered').reduce((sum, row) => sum + row.count, 0);
  const noShow = rows.filter((row) => row.status === 'No Show').reduce((sum, row) => sum + row.count, 0);
  const summary = `${preRegistered} pre-registered / ${confirmed} confirmed / ${noShow} no-show / ${financePending} finance pending / ${callPending} call center pending`;
  db.prepare('insert into manager_reports values (?, ?, ?, ?, ?, current_timestamp)').run(reportId, 'CP138', 'Manager Cohort Report - CP138', 'Generated', summary);
  const message = 'Generated Manager Cohort Report for CP138';
  pushActivity(message);
  writeObjectLog(reportId, 'Report', 'Generated', summary);
  return message;
}

export function approveSchema() {
  db.prepare("update schema_requests set status = 'Approved' where request_id = 'SCR-001'").run();
  const message = 'AGA approved schema request: backlog is lifecycle event';
  pushActivity(message);
  writeObjectLog('SCR-001', 'Schema Request', 'Approved', message, 'AGA Admin');
  return message;
}

export function createHall(payload = {}) {
  const count = db.prepare('select count(*) as count from halls').get().count + 1;
  const hallName = payload.name?.trim() || `New Hall ${count}`;
  const capacity = Number(payload.capacity || 20);
  if (db.prepare('select hall_name from halls where hall_name = ?').get(hallName)) {
    throw new Error(`${hallName} already exists.`);
  }
  db.prepare("insert into halls (hall_name, capacity, usage, schedule, status) values (?, ?, 0, '0 / 0 slots', 'active')").run(hallName, capacity);
  const message = `${hallName} created with ${capacity} pax capacity`;
  pushActivity(message);
  writeObjectLog(hallName, 'Hall', 'Created', message);
  return message;
}

export function createCohort(payload = {}) {
  const cohortCode = payload.cohortCode?.trim().toUpperCase();
  const program = payload.program?.trim();
  const venueHall = payload.venueHall?.trim() || 'Dcode KL Center / Unassigned';
  const status = payload.status?.trim() || 'Planned';
  const sizeLabel = payload.sizeLabel?.trim() || '0 students';
  if (!cohortCode) throw new Error('Cohort code is required.');
  if (!program) throw new Error('Program name is required.');
  if (db.prepare('select cohort_code from cohorts where cohort_code = ?').get(cohortCode)) {
    throw new Error(`${cohortCode} already exists.`);
  }
  db.prepare('insert into cohorts values (?, ?, ?, ?, ?)').run(cohortCode, program, venueHall, status, sizeLabel);
  const message = `${cohortCode} cohort created`;
  pushActivity(message);
  writeObjectLog(cohortCode, 'Cohort', 'Created', `${cohortCode} / ${program} created.`);
  return message;
}

export function createCohortClass(payload = {}) {
  const cohortCode = payload.cohortCode?.trim().toUpperCase();
  const className = payload.className?.trim();
  const classType = payload.classType?.trim() || 'Class phase';
  const sequenceNo = Number(payload.sequenceNo || 1);
  const teacherName = payload.teacherName?.trim() || 'Unassigned Teacher';
  const coachCount = Number(payload.coachCount || 0);
  const status = payload.status?.trim() || 'Planned';
  if (!db.prepare('select cohort_code from cohorts where cohort_code = ?').get(cohortCode)) {
    throw new Error(`Please choose a valid cohort.`);
  }
  if (!className) throw new Error('Class / phase name is required.');
  const classId = payload.classId?.trim() || `CLS-${cohortCode}-${className.replace(/[^a-z0-9]+/gi, '-').replace(/^-|-$/g, '').toUpperCase()}`;
  if (db.prepare('select class_id from cohort_classes where class_id = ?').get(classId)) {
    throw new Error(`${classId} already exists.`);
  }
  db.prepare('insert into cohort_classes values (?, ?, ?, ?, ?, ?, ?, ?)').run(
    classId,
    cohortCode,
    className,
    classType,
    sequenceNo,
    teacherName,
    coachCount,
    status
  );
  const message = `${cohortCode} ${className} class created`;
  pushActivity(message);
  writeObjectLog(classId, 'Class', 'Created', `${className} added under ${cohortCode}.`);
  writeObjectLog(cohortCode, 'Cohort', 'Class added', message);
  return message;
}

export function updateHall(payload = {}) {
  const originalName = payload.originalName;
  const hallName = payload.name?.trim() || originalName;
  const capacity = Number(payload.capacity || 20);
  const usage = Number(payload.usage || 0);
  const schedule = payload.schedule?.trim() || '0 / 0 slots';
  const status = payload.status || 'active';
  const existing = db.prepare('select hall_name from halls where hall_name = ?').get(originalName);
  if (!existing) throw new Error(`${originalName} not found.`);
  const duplicate = hallName !== originalName && db.prepare('select hall_name from halls where hall_name = ?').get(hallName);
  if (duplicate) throw new Error(`${hallName} already exists.`);

  db.prepare('update halls set hall_name = ?, capacity = ?, usage = ?, schedule = ?, status = ? where hall_name = ?').run(
    hallName,
    capacity,
    usage,
    schedule,
    status,
    originalName
  );
  db.prepare('update class_sessions set hall_name = ? where hall_name = ?').run(hallName, originalName);
  const message = `${hallName} updated`;
  pushActivity(message);
  writeObjectLog(hallName, 'Hall', 'Updated', message);
  return message;
}

export function disableHall(payload = {}) {
  const hallName = payload.name;
  const existing = db.prepare('select hall_name from halls where hall_name = ?').get(hallName);
  if (!existing) throw new Error(`${hallName} not found.`);
  db.prepare("update halls set status = 'disabled', usage = 0, schedule = 'Disabled' where hall_name = ?").run(hallName);
  const message = `${hallName} disabled`;
  pushActivity(message);
  writeObjectLog(hallName, 'Hall', 'Disabled', `${hallName} is disabled for new class sessions.`);
  return message;
}
