# Workflow Registry

## Purpose

The workflow registry turns messy Lark Bases into named business processes. Each workflow should have an owner, trigger, inputs, outputs, system of record, and reporting impact.

Use this registry during interviews and table audits.

## Registry Template

| Field | Description |
|---|---|
| Workflow ID | Stable ID such as `WF-001`. |
| Workflow Name | Human-readable process name. |
| Business Owner | Team or role accountable for correctness. |
| Trigger | What starts the workflow. |
| Input Object | Learner, coach, cohort, payment, declaration, etc. |
| Source Table | Table where the workflow starts. |
| Working Tables | Tables edited during the workflow. |
| Output Table | Table/report that receives the result. |
| Statuses | Allowed lifecycle states. |
| Automation | Manual, formula, lookup, Lark workflow, external integration. |
| Exception Path | What happens when normal flow fails. |
| Reporting Impact | Which report/dashboard uses the output. |
| Open Questions | Gaps to resolve. |

## Initial Workflow Registry

| ID | Workflow | Owner | Trigger | Input | Source / Working Data | Output | Status |
|---|---|---|---|---|---|---|---|
| WF-001 | Learner Registration | Operations / Support | Learner signs up or is entered manually | Learner, course, cohort | `课程报名`, learner NEWBIBLE | Confirmed learner record | Needs source confirmation |
| WF-002 | Learner Identity Creation | Operations | Registration accepted | Learner | Learner NEWBIBLE | Durable learner identity | Needs duplicate rule |
| WF-003 | Coach Registration | Coach Ops | Coach joins or is assigned | Coach | Coach NEWBIBLE, coach roster | Coach record | Needs owner confirmation |
| WF-004 | Cohort Setup | Operations / Data Owner | New cohort launches | Cohort, course level | Class Bible templates, DOE templates | New cohort Bases/tables | Needs standard SOP |
| WF-005 | Learner Confirmation Call | Call Center | New or pending learner needs confirmation | Learner | Call Center, Class Bible fields | Confirmation status | Needs status definitions |
| WF-006 | Class Entry | Operations | Learner attends/enters class | Learner, cohort | Class Bible | 已进课室 / active state | Needs inclusion rules |
| WF-007 | Coach Assignment | Coach Ops | Learner/group needs coach | Learner, coach, cohort | Coach roster, learner Bible | Assignment relation | Needs source table |
| WF-008 | Grade ABC / EMO Classification | EMO / Coach | Learner assessment submitted | Learner, grade | Grade ABC tables | Grade result | Needs grading authority |
| WF-009 | DOE Declaration | DOE Team | Learner enters DOE stage or declaration cycle | Learner, declaration | DOE declaration tables | DOE submission/result | Needs source and scoring rules |
| WF-010 | Weekly DOE Plan | DOE Team | Weekly plan cycle starts | Learner, coach, plan | DOE weekly plan tables | Weekly plan/result | Needs formula audit |
| WF-011 | Backlog Creation | Support / Operations | Learner defers, misses, leaves, or cannot proceed | Learner, cohort, status | Backlog tables, Class Bible | Backlog record | Needs Backlog definition |
| WF-012 | Backlog Recovery Into Current Cohort | Support / Operations | Backlog learner becomes active again | Learner, backlog, cohort | Old Backlog, current Class Bible | Current learner record | Needs transition rule |
| WF-013 | After-Rules Leave | Operations | Learner leaves after formal rule point | Learner, reason | 守则后离开 tables | Leave record / report exclusion | Needs counting rule |
| WF-014 | Payment Tracking | Finance | Invoice, deposit, balance, transfer, or receipt event | Learner, payment | Finance Bases | Payment status | Needs finance source of truth |
| WF-015 | Transfer / Seat Movement | Finance / Operations | Payment or seat moved | Learner, payment, cohort | Class Bible, Finance | Transfer state | Needs authority split |
| WF-016 | Final Masterlist Production | Operations / Data Owner | Cohort stage closes | Learner, cohort, level | WHOLE-MASTERLIST, FINAL MASTERLIST | Final report table | Needs source lineage |
| WF-017 | Leadership Reporting | Leadership / Data Owner | Weekly/monthly reporting cycle | Metrics | Final lists, views, dashboards | Approved report | Needs dashboard scope |
| WF-018 | Cohort Archive | Data Owner | Cohort is closed | Cohort, reports, records | Class Bible / DOE / Finance | Archived status | Needs retention rule |

## Workflow Detail Cards

### WF-001 Learner Registration

| Field | Value |
|---|---|
| Owner | Operations / Support |
| Trigger | Learner signs up, is referred, or is entered manually. |
| Input | Name, contact, course interest, cohort, payment expectation. |
| Output | Learner is ready for confirmation and class assignment. |
| Risk | Registration may create duplicate learner records. |
| Questions | Which table is authoritative: `课程报名`, learner NEWBIBLE, or another intake table? |

### WF-011 Backlog Creation

| Field | Value |
|---|---|
| Owner | Support / Operations |
| Trigger | Learner cannot continue in current active path. |
| Input | Learner, cohort, course level, reason, payment/consumption state. |
| Output | Backlog lifecycle record. |
| Risk | Backlog may be counted as active, lost, or pending depending on report. |
| Questions | Is Backlog a deferred learner, unpaid learner, transferred learner, unconsumed entitlement, or all of these with separate statuses? |

### WF-016 Final Masterlist Production

| Field | Value |
|---|---|
| Owner | Operations / Data Owner |
| Trigger | Course stage or cohort reporting period closes. |
| Input | Current learners, backlog decisions, leave decisions, DOE/result fields. |
| Output | Final masterlist for reporting. |
| Risk | Manual copy from WHOLE-MASTERLIST can drift from source. |
| Questions | Which final masterlist is authoritative for each level and cohort? |

## Workflow Registry Maintenance Rules

1. Every workflow must have one accountable business owner.
2. Every workflow must state its source table.
3. Every workflow must state whether it is manual, formula-based, lookup-based, Lark workflow-based, or external.
4. Every workflow must define allowed statuses.
5. Every workflow must define report impact.
6. Every workflow must have an exception path.
7. Workflows that produce leadership numbers require approval from leadership and the data owner.

