# Business DNA

## Purpose

Business DNA describes how Dcode actually creates value, delivers education, moves people through programs, and makes decisions from data.

This page should be reviewed with leadership and then refined into the company's operating doctrine.

## DNA Statement

Dcode appears to operate as a cohort-based education and transformation platform. Its core unit is not only a course, but a learner journey managed across class delivery, coaching, declaration/DOE, support follow-up, finance, backlog recovery, and final outcome reporting.

## Value Creation Model

| Layer | Business Meaning | Evidence To Confirm |
|---|---|---|
| Attract | Bring learner into the ecosystem. | Leads, referrals, call center forms, registration tables |
| Qualify | Understand learner background, motivation, readiness, and payment status. | EMO forms, Grade ABC, registration, finance fields |
| Enroll | Confirm learner into a cohort and course level. | 课程报名, Class Bible source tables |
| Deliver | Run course experience and coaching. | Class Bible, coach roster, attendance/status fields |
| Declare | Capture commitment, DOE, daily/weekly plans, and business/family/social results. | DOE Bases and declaration tables |
| Advance | Move learner through 基础, 高阶一, 高阶二, and later stages. | Whole masterlist and final masterlists |
| Recover | Handle backlog, transfer, leave, or re-entry. | Backlog and 守则后离开 tables |
| Report | Produce leadership, operations, DOE, finance, and support metrics. | Final tables, views, dashboards |

## Core Business Units

| Unit | Description | Primary Data |
|---|---|---|
| Learner | The main customer/student/person being transformed. | Learner NEWBIBLE |
| Coach | Delivery and accountability role attached to learners. | Coach NEWBIBLE / coach roster |
| Cohort | Numbered operating cycle such as CP136. | Class Bible / DOE Bases |
| Course Level | Education stage such as 基础 or 高阶一. | Masterlists / final lists |
| DOE | Declaration and outcome engine. | DOE tables |
| Support | Confirmation, follow-up, risk handling, and backlog recovery. | Call Center / Backlog |
| Finance | Payment, invoices, receipts, transfer, and balance tracking. | Finance Bases |
| Report | Business decision surface. | Views, dashboards, final masterlists |

## Operating Principles

1. A learner should have one durable identity across cohorts and course levels.
2. A cohort should have one confirmed source table for active membership.
3. Backlog should be treated as a lifecycle state, not a disconnected side list.
4. Finance status should be owned by finance and linked back to learner/cohort identity.
5. DOE results should link to learner identity and cohort, not only copied names.
6. Final reports should declare their inclusion rules.
7. Derived/reporting tables should not be edited as if they are source tables.
8. Old cohort references should be labeled as legacy, template, or active dependency.

## Business Metrics

| Metric | Definition Needed | Source To Confirm |
|---|---|---|
| Registered learners | Who counts as registered? | 课程报名 / learner Bible |
| Confirmed learners | Who is expected to attend? | Class Bible confirmation fields |
| Entered classroom | What qualifies as entered? | 已进课室 fields |
| Completed learners | Which completion rule applies by level? | Final masterlists |
| Backlog count | Which backlog states are counted? | Backlog tables |
| Leave count | Which leave state counts as loss? | 守则后离开 tables |
| Paid count | Which payment states count as paid? | Finance |
| DOE completion | Which declarations/results count? | DOE tables |
| Coach performance | Which learner/DOE/grade measures apply? | Coach and DOE tables |
| Cohort outcome | Which final report is authoritative? | Approved reporting table/view |

## Business Capability Map

| Capability | Description | Current Evidence |
|---|---|---|
| Cohort setup | Create new class cycle and tables. | Repeated CP135/136/137 structures |
| Learner intake | Register and qualify learners. | 课程报名, EMO forms |
| Coach management | Assign and track coaches. | Coach NEWBIBLE, coach roster |
| Course operations | Manage class status and movement. | Class Bible tables |
| DOE operations | Capture declarations and results. | DOE Bases |
| Backlog recovery | Move deferred/old learners into active path. | Backlog tables |
| Finance operations | Track fees, deposits, balances, receipts. | Finance Bases |
| Reporting | Produce final and operational views. | Masterlists, final lists, dashboard views |
| Governance | Decide source-of-truth and edit permissions. | Not yet formalized |

## Business DNA Risks

| Risk | Impact |
|---|---|
| Cohort data copied instead of modeled | Every new cohort increases maintenance and confusion. |
| Same object stored in many tables | No one can know which number is true. |
| Backlog not defined as state machine | Reports will mix active, deferred, and lost learners. |
| Finance duplicated into operations | Payment truth can split from class truth. |
| DOE copied by cohort | Outcome logic can drift between cohorts. |
| Reporting rules undocumented | Leadership debates numbers instead of decisions. |

## Target Management Model

Dcode should manage the platform through five registries:

1. **Object Registry**: learner, coach, cohort, course level, payment, DOE, backlog, report.
2. **Workflow Registry**: named workflows with owner, trigger, input, output, and system of record.
3. **Source-Of-Truth Registry**: table/field authority by business object.
4. **Report Registry**: each report's source, filter, inclusion rules, and owner.
5. **Exception Registry**: transfers, backlog, leave, duplicate, refund, and manual override rules.

