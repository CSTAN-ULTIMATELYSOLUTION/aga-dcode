# Dcode Demo Full Cycle Test Plan

## Purpose

This page defines how to adjust the localhost demo so it proves the Dcode operating model works end to end.

The demo should not only show screens. It should prove one real learner can move through Dcode's lifecycle with proper objects, approvals, evidence, reports, and audit trail.

## Demo Promise

The live demo should prove:

> Dcode can move one learner from registration to payment, class entry, advanced phase, DOE, report, graduation/coach eligibility, or backlog recovery, while preserving source mapping and audit evidence.

## Current App Fit

| Area | Current Demo Has | Needs Adjustment |
|---|---|---|
| Registration | New student registration modal exists. | Make it visibly create Person + Student + Registration. |
| Payment | Finance page and payment approval action exist. | Show Payment Submission + Finance Approval + class-entry gate. |
| Status Change | Approval modal exists. | Tie each status to lifecycle event and required evidence. |
| Students | Student table and detail modal exist. | Add lifecycle timeline and object links. |
| Classes | Cohort, class, hall, session views exist. | Separate Class Membership and Phase Participation. |
| DOE | DOE dashboard and DOE modal exist. | Add DOE Submission, Weekly Plan, Coach Review, DOE Result, Grade ABC. |
| Backlog | Backlog view exists. | Add Backlog Case lifecycle and Re-entry Verification. |
| Reports | Reports view exists. | Add inclusion/exclusion reason per student. |
| Governance | Governance and mapping screens exist. | Add Source Base/Table/Field Mapping as first-class demo proof. |

## Full Demo Story

Use one scripted learner:

| Field | Demo Value |
|---|---|
| Person | Tan Mei Xin |
| Student ID | Auto-generated, e.g. `S2599xxx` |
| Phone | `012-555 0138` |
| Target Cohort | `CP138` |
| Course Path | Basic -> Advanced Phase 1 -> Advanced Phase 2 / DOE |
| Payment Plan | Full payment before class entry |
| Coach | Coach Lim Wei |
| DOE Scenario | Declaration submitted, coach review pending, then approved |
| Exception Scenario | Optional branch: missed DOE or backlog re-entry |

## Full Cycle Happy Path

| Step | Workflow | Screen | Action | Expected Object Change | Proof To Show |
|---:|---|---|---|---|---|
| 1 | WF-001 Learner Registration | Registrations / Dashboard | Create new registration | Person Draft/Active, Student Registered, Registration Submitted | Registration row + student row + object log |
| 2 | WF-003 Registration Confirmation | Registrations | Add call center contact log and confirm | Registration Confirmed, Contact Log Closed | Call log tab shows reached/confirmed |
| 3 | WF-010 Payment Plan Setup | Finance | Create/assign payment plan | Payment Plan Active | Payment plan displayed on student detail |
| 4 | WF-011 Payment Submission | Finance / Payments | Submit bank-in proof | Payment Submission Pending Verification | Payment evidence note visible |
| 5 | WF-012 Finance Verification | Verify Payment modal | Finance approves payment | Payment Submission Approved, Finance Approval Approved | Approval modal evidence + audit log |
| 6 | WF-013 Class Entry Payment Gate | Dashboard / Students | Move to Fully Paid | Student Confirmed/Fully Paid, Registration Approved For Entry | Class-entry gate unlocked |
| 7 | WF-024 Class Entry Approval | Classes & Cohorts | Enroll into class membership | Class Membership Active | Student linked to CP138 membership |
| 8 | WF-025 First-Day Check-in | Classes / Hall | Confirm attendance | Attendance Checked In | Attendance row and hall utilization update |
| 9 | WF-026 Phase Entry | Dashboard | Move Basic -> Advanced Phase 1 | Phase Participation Entered | Lifecycle timeline shows phase event |
| 10 | WF-027 Phase Completion | Dashboard | Complete Advanced Phase 1 | Phase Participation Completed | Teacher/manager approval note |
| 11 | WF-043 DOE Start | DOE | Start DOE at Advanced Phase 2 | DOE Submission Not Started/Draft, DOE cycle opened | DOE cohort card shows student |
| 12 | WF-044 DOE Declaration Submission | DOE | Submit DOE | DOE Submission Submitted | DOE status changes from Pending to Submitted |
| 13 | WF-046 Coach DOE Review | DOE / Coach | Coach reviews declaration | Coach Review Submitted/Approved | Coach review visible |
| 14 | WF-047 DOE Result Approval | DOE | Approve DOE result | DOE Result Approved | DOE dashboard result count updates |
| 15 | WF-048 Grade ABC / EMO Assessment | DOE / Reports | Assign Grade ABC | Grade Assessment Approved | Grade shown with source |
| 16 | WF-064 Report Definition Approval | Reports | Generate teacher/manager report | Report Inclusion Candidate/Included | Student included with reason |
| 17 | WF-065 Final Masterlist Production | Reports | Approve final list | Report Inclusion Approved | Final report shows source and inclusion logic |
| 18 | WF-037 Graduation Confirmation | Students | Mark graduate | Student Graduate, Graduate Confirmed | Coach eligibility unlocked |
| 19 | WF-038 Graduate To Coach Candidate | Coaches | Create coach candidate | Coach Candidate | Person has Student + Coach role |

## Exception Branch A: Payment Not Verified

| Step | Workflow | Trigger | Expected Result |
|---:|---|---|---|
| A1 | WF-011 Payment Submission | Student submits unclear proof | Payment Submission Pending Verification |
| A2 | WF-012 Finance Verification | Finance rejects proof | Payment Submission Rejected |
| A3 | WF-014 Balance Follow-up | Finance/support follows up | Contact Log Follow-up Needed |
| A4 | WF-013 Class Entry Payment Gate | Attempt class entry | Blocked; cannot create active Class Membership |

This proves finance owns payment truth and class entry cannot bypass approval.

## Exception Branch B: No Show / Backlog

| Step | Workflow | Trigger | Expected Result |
|---:|---|---|---|
| B1 | WF-025 First-Day Check-in | Student absent | Attendance Absent |
| B2 | WF-031 Backlog Creation | Ops moves student to backlog | Backlog Case Open |
| B3 | WF-032 Backlog Follow-up | Support calls student | Contact Log Reached / Recovery Planned |
| B4 | WF-033 Backlog Recovery | Student wants next cohort | Re-entry Verification Requested |
| B5 | WF-006 Backlog Re-registration Intake | Double verification passes | New Registration created and linked to old backlog |

This proves Backlog is not just a table. It is a lifecycle case with recovery.

## Exception Branch C: DOE Late Or Rejected

| Step | Workflow | Trigger | Expected Result |
|---:|---|---|---|
| C1 | WF-043 DOE Start | Student enters 高二 | DOE Submission Draft |
| C2 | WF-044 DOE Submission | Student misses deadline | DOE Submission Late |
| C3 | WF-046 Coach DOE Review | Coach returns work | Coach Review Returned |
| C4 | WF-045 Weekly DOE Plan | Student resubmits plan | Weekly Plan Revised |
| C5 | WF-047 DOE Result Approval | DOE owner approves | DOE Result Approved |

This proves DOE has student, phase, coach, weekly plan, and result context.

## Exception Branch D: Transfer / Seat Movement

| Step | Workflow | Trigger | Expected Result |
|---:|---|---|---|
| D1 | WF-015 Transfer Money / Seat | Student requests transfer | Transfer Case Requested |
| D2 | WF-015 Transfer Approval | Finance/ops approve | Transfer Case Approved |
| D3 | WF-036 Student Transfer Cohort | Target cohort selected | New registration/class membership target |
| D4 | WF-064 Report Definition Approval | Reports refresh | Old cohort excludes or labels transfer correctly |

This proves transfer affects finance, class membership, and reporting together.

## Demo Screen Adjustments

### Dashboard

Add a `Full Cycle Demo` panel with one primary button:

- Start Full Cycle
- Continue Next Step
- Reset Scenario
- Show Proof Trail

The panel should show the current step, workflow ID, current object, status before/after, and evidence required.

### Registrations

Show three linked records after creation:

- Person
- Student
- Registration

Add status chips:

- Registration Submitted
- Call Center Confirmed
- Payment Pending
- Approved For Entry
- Converted

### Student Detail

Add a lifecycle timeline:

- Registered
- Confirmed
- Fully Paid
- Class Member Active
- Basic Done
- Advanced Phase 1
- DOE Started
- DOE Approved
- Graduate / Backlog

Each timeline event should show workflow ID, actor, evidence note, and timestamp.

### Finance

Split generic finance status into:

- Payment Plan
- Payment Submission
- Finance Approval
- Adjustment / Transfer

Class-entry actions should be disabled until `Finance Approval = Approved`.

### Classes & Cohorts

Show:

- Cohort
- Class Phase
- Class Session
- Hall
- Attendance
- Class Membership
- Phase Participation

This prevents the demo from making Student look like the same thing as Class Membership.

### DOE

Show DOE as its own object chain:

`Phase Participation -> DOE Submission -> Weekly Plan -> Coach Review -> DOE Result -> Grade ABC -> Report`

The DOE page should not just say "DOE Pending" or "DOE Submitted"; it should show why and who must act next.

### Backlog

Show backlog with lifecycle:

`Open -> Needs Contact -> Recovery Planned -> Re-entry Pending -> Re-entered / Closed Lost`

Add double verification:

- Identity checked
- Payment checked
- Ops approved
- Finance approved

### Reports

Every report row should show inclusion reason:

- Included: active class member
- Included: backlog still report-relevant
- Excluded: transferred to next cohort
- Excluded: cancelled before class entry
- Exception: payment approved but attendance missing

### Governance

Show the proof layer:

- Source Base
- Source Table
- Table Role: source / working / derived / reporting / legacy
- Field Mapping
- Workflow Audit Log

## Acceptance Test Cases

### TC-001 Full Cycle Happy Path

| Field | Value |
|---|---|
| Goal | Prove one student can complete the full Dcode journey. |
| Start | No record for Tan Mei Xin. |
| Steps | Run Full Cycle Happy Path steps 1-19. |
| Expected | Student becomes Graduate and Coach Candidate; report includes student with approved DOE result. |
| Must Show | Person, Student, Registration, Payment, Class Membership, DOE, Grade, Report, Audit Log. |

### TC-002 Payment Gate Blocks Class Entry

| Field | Value |
|---|---|
| Goal | Prove finance controls class entry. |
| Start | Registration confirmed but payment proof rejected. |
| Steps | Run Exception Branch A. |
| Expected | Student cannot become active class member. |
| Must Show | Rejected finance approval and blocked class-entry button/state. |

### TC-003 Backlog Recovery

| Field | Value |
|---|---|
| Goal | Prove backlog is lifecycle case, not side table. |
| Start | Student absent or drops during class. |
| Steps | Run Exception Branch B. |
| Expected | Backlog case opens, contact log added, re-entry verification creates linked registration. |
| Must Show | Old student path and new registration connected. |

### TC-004 DOE With Coach Review

| Field | Value |
|---|---|
| Goal | Prove DOE requires phase and coach context. |
| Start | Student in Advanced Phase 2. |
| Steps | Run Exception Branch C or happy path DOE steps. |
| Expected | DOE submission reviewed by coach, then approved as result. |
| Must Show | DOE Submission, Weekly Plan, Coach Review, DOE Result, Grade ABC. |

### TC-005 Transfer Case Affects Reports

| Field | Value |
|---|---|
| Goal | Prove transfer affects finance, cohort, and report inclusion. |
| Start | Student has payment/seat in old cohort. |
| Steps | Run Exception Branch D. |
| Expected | Transfer applied; old cohort report labels or excludes correctly. |
| Must Show | Transfer Case, finance approval, new target registration, report inclusion reason. |

### TC-006 Source Mapping Proof

| Field | Value |
|---|---|
| Goal | Prove demo can explain where each object came from. |
| Start | Any student detail page. |
| Steps | Open source mapping/governance proof. |
| Expected | Student shows source Base/table/field mapping and table role. |
| Must Show | Class Bible source candidate, DOE source, finance source, report output. |

## What To Build First

Build in this order:

1. Full Cycle Demo runner/state machine.
2. Lifecycle timeline on Student detail.
3. Finance gate enforcement in UI.
4. DOE object chain.
5. Backlog case and re-entry verification.
6. Report inclusion reasons.
7. Source mapping proof panel.

## Demo Completion Definition

The demo is ready when a viewer can watch one student move from registration to final report and answer:

1. What object was created?
2. What status changed?
3. Who approved it?
4. What evidence was captured?
5. What workflow ID caused it?
6. Which report changed?
7. Which source table does it map back to?
