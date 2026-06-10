# Dcode Object Lifecycles And Workflows

## Purpose

This page defines the lifecycle of each Dcode object and the workflows the localhost demo should eventually support.

Important audit fact: the 2026-05-29 active Base scan found `0` Lark workflows/automations across the audited active Bases. So the workflows below are business workflows, not confirmed existing Lark automations. Today many of them are manual, formula/view-based, or spreadsheet-style status changes.

## Object Lifecycle Map

| Object | Lifecycle States | Created By | Changed By | Ends / Closes When |
|---|---|---|---|---|
| Person | Draft, Active, Duplicate Suspected, Merged, Archived | Registration, manual import, source table import | Dedupe, profile update, merge review | Person is merged or no longer relevant |
| Student | Prospect, Registered, Confirmed, Active, Backlog, Dropped, Left After Rules, Graduate, Closed | Registration accepted or student source import | Registration, payment, class, DOE, backlog workflows | Graduate, closed, merged, or archived |
| Coach | Candidate, Confirmed, Assigned, Active, Completed, Inactive, Archived | Coach registration/import, graduate conversion | Coach ops, assignment, DOE review | Assignment ends or coach inactive |
| Graduate | Pending Graduation, Graduate Confirmed, Coach Eligible, Archived | Completion workflow | Graduation approval, coach eligibility review | Converted to coach candidate or archived |
| Registration | Draft, Submitted, Incomplete, Confirmed, Payment Pending, Approved For Entry, Cancelled, Converted | Intake form/manual entry | Call center, finance, operations | Creates class membership or is cancelled |
| Contact Log | Planned, Attempted, Reached, No Answer, Follow-up Needed, Escalated, Closed | Support/call center task | Call center updates | Issue resolved or escalated |
| Payment Plan | Draft, Offered, Accepted, Active, Completed, Cancelled | Registration/finance setup | Finance | Payment completed/cancelled |
| Payment Submission | Submitted, Pending Verification, Approved, Rejected, Exception, Transferred, Refunded | Student/admin submits proof | Finance approval workflow | Approved, rejected, refunded, transferred |
| Finance Approval | Requested, Under Review, Approved, Rejected, Exception | Payment submission | Finance reviewer | Approval decision logged |
| Transfer Case | Requested, Pending Approval, Approved, Applied, Rejected, Cancelled | Finance/ops exception | Finance + operations | Transfer applied or rejected |
| Program | Draft, Active, Paused, Retired | Management setup | Governance | Retired |
| Course Level | Draft, Active, Paused, Retired | Program setup | Operations/governance | Retired |
| Cohort | Planned, Recruiting, Intake Open, Active, Closing, Closed, Archived | Cohort setup | Operations/class admin | Cohort closed and reports approved |
| Class Phase | Planned, Open, In Progress, Completed, Closed | Cohort setup | Class operations | Phase completion approved |
| Class Session | Scheduled, Confirmed, In Progress, Completed, Cancelled, Rescheduled | Class schedule | Hall/class ops | Session completed/cancelled |
| Hall | Available, Reserved, In Use, Maintenance, Inactive | Venue setup | Scheduling/admin | Hall inactive |
| Attendance | Expected, Checked In, Absent, Late, Excused, Corrected | Class session roster | Admin/teacher | Attendance confirmed/corrected |
| Class Membership | Pending Gate, Active, Completed, Backlog, Dropped, Transferred, Closed | Class entry approval | Payment/class/backlog workflows | Completed, backlog, dropped, transferred, closed |
| Phase Participation | Not Started, Entered, In Progress, Completed, Backlog, Dropped, Left, Transferred | Class membership/phase entry | Class operations, DOE, support | Phase completed or exception recorded |
| DOE Submission | Not Started, Draft, Submitted, Needs Review, Approved, Rejected, Revised, Late | DOE cycle | Student, coach, DOE team | Approved/rejected/closed |
| Weekly Plan | Draft, Submitted, Coach Reviewed, In Progress, Completed, Missed, Revised | DOE workflow | Student/coach | Week closed |
| DOE Result | Calculating, Pending Approval, Approved, Rejected, Published, Archived | DOE scoring/report workflow | DOE owner/coach | Published or archived |
| Coach Assignment | Proposed, Confirmed, Active, Reassigned, Completed, Cancelled | Coach ops | Coach ops/class ops | Assignment completed/cancelled |
| Coach Review | Pending, Submitted, Returned, Approved, Finalized | DOE/coach workflow | Coach/DOE owner | Review finalized |
| Grade Assessment | Pending, Draft, Submitted, Reviewed, Approved, Overridden, Published | EMO/coach/DOE workflow | Authorized reviewer | Published/overridden |
| Backlog Case | Open, Needs Contact, Contacted, Recovery Planned, Re-entry Pending, Re-entered, Closed Lost, Closed Consumed | Backlog creation | Support/ops/finance | Re-entered or closed |
| Drop Case | Proposed, Under Review, Confirmed, Reported, Closed | Support/class ops | Operations/manager | Reported and closed |
| Leave Case | Proposed, Rule Checked, Approved, Reported, Closed | Rule/leave workflow | Operations/teacher/manager | Reported and closed |
| Re-entry Verification | Requested, Identity Checked, Payment Checked, Ops Approved, Finance Approved, Approved, Rejected | Backlog recovery | Ops + finance | New registration/class membership created or rejected |
| Report Definition | Draft, Under Review, Approved, Active, Deprecated | Governance/reporting | Data owner/leadership | Deprecated |
| Report Inclusion | Candidate, Included, Excluded, Exception, Approved | Report generation | Data owner/manager | Report approved |
| Source Base | Discovered, Scanned, Classified, Mapped, Governed, Archived | Lark audit | Data/governance | Archived |
| Source Table | Discovered, Role Labeled, Field Mapped, Trusted, Derived, Legacy, Deprecated | Lark audit | Data/governance | Deprecated/legacy |
| Field Mapping | Proposed, Reviewed, Approved, Implemented, Deprecated | Data mapping | Data owner/AGA | Implemented/deprecated |
| Schema Request | Draft, Submitted, Impact Review, Approved, Rejected, Implemented | Staff/admin request | Governance/AGA | Implemented/rejected |
| Audit Log | Created, Immutable | Every workflow | System only | Never edited |

## Workflow Catalogue

### Identity And Intake

| ID | Workflow | Main Objects | Trigger | Owner | Normal Output | Exception Path |
|---|---|---|---|---|---|---|
| WF-001 | Learner Registration | Person, Student, Registration | New learner signs up or admin enters learner | Operations / Support | Registration submitted and linked to student | Incomplete registration or duplicate person |
| WF-002 | Learner Identity Dedupe | Person, Student | New registration/import creates possible duplicate | Data Owner / Operations | One durable person identity | Merge review required |
| WF-003 | Registration Confirmation | Registration, Contact Log, Student | Registration needs verification | Call Center / Support | Confirmed registration | No answer, wrong contact, cancelled |
| WF-004 | Incomplete Registration Recovery | Registration, Contact Log | Mandatory details missing | Support | Completed registration | Cancelled or escalated |
| WF-005 | Registration Cancellation | Registration, Payment Submission | Learner cancels before class entry | Operations / Finance | Cancelled registration | Refund/transfer required |
| WF-006 | Backlog Re-registration Intake | Backlog Case, Re-entry Verification, Registration | Backlog learner wants new cohort | Support / Operations | Re-entry verification started | Duplicate/unpaid/consumed conflict |

### Finance

| ID | Workflow | Main Objects | Trigger | Owner | Normal Output | Exception Path |
|---|---|---|---|---|---|---|
| WF-010 | Payment Plan Setup | Registration, Payment Plan | Registration confirmed | Finance / Operations | Payment plan active | Wrong plan or missing fee |
| WF-011 | Payment Submission | Payment Submission, Registration | Proof/bank-in received | Support / Finance | Pending finance verification | Missing proof or mismatch |
| WF-012 | Finance Verification | Payment Submission, Finance Approval | Payment pending review | Finance | Approved or rejected payment | Exception / unclear bank-in |
| WF-013 | Class Entry Payment Gate | Finance Approval, Class Membership | Payment approved | Finance / Operations | Learner allowed into class | Deposit only, balance due, rejected proof |
| WF-014 | Balance Follow-up | Payment Plan, Contact Log | Balance remains due | Finance / Support | Paid or follow-up logged | Escalate to manager |
| WF-015 | Transfer Money / Seat | Transfer Case, Payment Submission, Registration | 转款 or 转名额 requested | Finance / Operations | Transfer applied to target registration | Rejected / conflicting ownership |
| WF-016 | Refund / Adjustment | Finance Adjustment, Payment Submission | Refund/discount/correction needed | Finance | Adjustment approved | Manager approval required |

### Cohort, Class, And Hall

| ID | Workflow | Main Objects | Trigger | Owner | Normal Output | Exception Path |
|---|---|---|---|---|---|---|
| WF-020 | Program / Level Setup | Program, Course Level | New product/level defined | Leadership / Ops | Active level | Governance review |
| WF-021 | Cohort Setup | Cohort, Class Phase, Source Base | New CP cohort planned | Operations / Data Owner | Cohort with phases | Missing template/source mapping |
| WF-022 | Class Schedule Setup | Cohort, Class Session, Hall | Cohort calendar planned | Operations | Scheduled class sessions | Hall conflict/reschedule |
| WF-023 | Hall Reservation | Hall, Class Session | Session needs room | Admin / Operations | Hall reserved | Capacity or clash issue |
| WF-024 | Class Entry Approval | Registration, Payment, Class Membership | Learner passes gates | Operations | Active class membership | Payment/support/identity gate blocked |
| WF-025 | First-Day Check-in | Attendance, Class Membership | Learner arrives | Class Admin | Attendance checked in | Absent/late/unverified |
| WF-026 | Phase Entry | Phase Participation, Class Membership | Student moves into next phase | Class Ops | Phase entered | Payment/backlog/drop conflict |
| WF-027 | Phase Completion | Phase Participation | Phase finished | Teacher / Ops | Phase completed | Missing attendance/result |
| WF-028 | Cohort Closing | Cohort, Report Definition, Report Inclusion | Cohort/phase ends | Ops / Data Owner | Closed cohort and approved reports | Disputed counts |

### Student Lifecycle And Exceptions

| ID | Workflow | Main Objects | Trigger | Owner | Normal Output | Exception Path |
|---|---|---|---|---|---|---|
| WF-030 | Student Status Change Approval | Student, Lifecycle Event, Audit Log | Any lifecycle status change | Operations / Manager | Approved lifecycle event | Rejected or needs evidence |
| WF-031 | Backlog Creation | Student, Backlog Case, Phase Participation | Student cannot continue | Support / Operations | Open backlog case | Finance/consumption ambiguity |
| WF-032 | Backlog Follow-up | Backlog Case, Contact Log | Open backlog needs action | Support | Recovery plan or closure | Unreachable / escalated |
| WF-033 | Backlog Recovery | Backlog Case, Re-entry Verification | Learner can return | Support / Operations | Re-entry approved | Double verification fails |
| WF-034 | Drop / 下车 Handling | Drop Case, Student, Report Inclusion | Student drops | Operations / Teacher | Drop event reported | Refund/transfer/backlog decision |
| WF-035 | 守则后离开 Handling | Leave Case, Student, Phase Participation | Formal leave after rule point | Operations / Manager | Leave case reported | Rule dispute |
| WF-036 | Student Transfer Cohort | Student, Registration, Transfer Case | Student moves cohort | Operations / Finance | New target membership | Payment/seat conflict |
| WF-037 | Graduation Confirmation | Student, Graduate, Report Inclusion | Required path completed | Teacher / Ops | Graduate confirmed | Missing DOE/attendance/payment |
| WF-038 | Graduate To Coach Candidate | Graduate, Coach | Graduate applies/qualifies | Coach Ops | Coach candidate created | Not eligible |

### Coach And DOE

| ID | Workflow | Main Objects | Trigger | Owner | Normal Output | Exception Path |
|---|---|---|---|---|---|---|
| WF-040 | Coach Registration | Person, Coach | Coach enters system | Coach Ops | Coach candidate/confirmed | Duplicate or eligibility issue |
| WF-041 | Coach Assignment | Coach, Coach Assignment, Student | Cohort/phase needs coach | Coach Ops | Active assignment | Reassignment needed |
| WF-042 | Coach Reassignment | Coach Assignment | Coach unavailable or mismatch | Coach Ops | Updated assignment | Student/coach conflict |
| WF-043 | DOE Start | Phase Participation, DOE Submission | Student reaches 高二 / DOE start point | DOE Team | DOE cycle opened | Missing phase/payment/coach |
| WF-044 | DOE Declaration Submission | DOE Submission | Student submits declaration | Student / DOE Team | Submitted DOE declaration | Late/incomplete/revision |
| WF-045 | Weekly DOE Plan | Weekly Plan, Coach Review | Weekly DOE cycle starts | Student / Coach | Coach-reviewed plan | Missed week/revision |
| WF-046 | Coach DOE Review | Coach Review, DOE Submission | Submission needs coach verification | Coach | Review submitted | Returned to student |
| WF-047 | DOE Result Approval | DOE Result, Report Inclusion | DOE scoring/result ready | DOE Owner | Approved result | Rejected/disputed score |
| WF-048 | Grade ABC / EMO Assessment | Grade Assessment, Student | Assessment period or coach submission | EMO / Coach / DOE | Approved grade | Override or second review |
| WF-049 | DOE Dashboard Publishing | DOE Result, Grade Assessment, Report Definition | DOE period closes | DOE Owner / Data Owner | Published DOE dashboard | Dashboard count dispute |

### Reporting And Governance

| ID | Workflow | Main Objects | Trigger | Owner | Normal Output | Exception Path |
|---|---|---|---|---|---|---|
| WF-060 | Source Base Scan | Source Base, Source Table | New/active Lark Base found | AGA / Data Owner | Base scanned and counted | Permission missing |
| WF-061 | Source Table Role Labeling | Source Table | Audit reviews table | AGA / Data Owner | Source/working/derived/reporting/legacy label | Unknown role |
| WF-062 | Field Mapping | Field Mapping, Source Table | Table chosen for sync/import | AGA / Data Owner | Approved mapping | Ambiguous field meaning |
| WF-063 | Source-Of-Truth Approval | Source Table, Field Mapping | Object needs official source | Leadership / Data Owner | Approved source rule | Conflicting tables |
| WF-064 | Report Definition Approval | Report Definition | Report/dashboard needed | Leadership / Data Owner | Approved report logic | Inclusion dispute |
| WF-065 | Final Masterlist Production | Report Inclusion, Report Definition | Phase/cohort closes | Operations / Data Owner | Final masterlist/report | Manual copy drift |
| WF-066 | Dashboard Publishing | Report Definition, Report Inclusion | Approved metrics ready | Data Owner | Published dashboard | Dashboard source blocked |
| WF-067 | Schema Change Request | Schema Request, Source Table | Staff needs new field/table | AGA / Governance | Approved/implemented schema change | Rejected due duplication |
| WF-068 | Legacy Table Retirement | Source Table, Report Definition | Old/copy table identified | Data Owner | Table marked legacy/deprecated | Still used by report |
| WF-069 | Audit Log Review | Audit Log | Weekly/monthly governance review | Governance / Leadership | Issues found and assigned | Missing actor/evidence |

## Workflow-To-Object Coverage

| Object Group | Must-Have Workflows For Demo |
|---|---|
| Identity | WF-001, WF-002, WF-003 |
| Registration | WF-001, WF-003, WF-004, WF-005, WF-006 |
| Finance | WF-010 to WF-016 |
| Class Operations | WF-021 to WF-028 |
| Student Lifecycle | WF-030 to WF-038 |
| Backlog | WF-031, WF-032, WF-033 |
| Coach | WF-038, WF-040, WF-041, WF-042 |
| DOE | WF-043 to WF-049 |
| Reporting | WF-064, WF-065, WF-066 |
| Governance / Lark Mapping | WF-060 to WF-063, WF-067 to WF-069 |

## Demo Priority

### Phase 1: Make The Demo Feel Real

Implement or clearly show these first:

1. Learner Registration creates Person + Student + Registration.
2. Finance Verification gates Class Entry.
3. Student Status Change requires approval evidence.
4. Class Membership and Phase Participation are separate from Student.
5. DOE starts at advanced phase / 高二.
6. Backlog is a lifecycle case with recovery path.
7. Source Base/Table labels explain where the data came from.

### Phase 2: Make The Demo Feel Operational

Add:

1. Contact logs and follow-up attempts.
2. Coach assignment and coach review.
3. Weekly DOE plan.
4. Grade ABC / EMO assessment.
5. Report inclusion/exclusion reasoning.
6. Transfer and refund/adjustment handling.

### Phase 3: Make The Demo Feel Governed

Add:

1. Field mapping screen.
2. Source-of-truth approval.
3. Schema change request approval.
4. Legacy table retirement.
5. Audit log review.
