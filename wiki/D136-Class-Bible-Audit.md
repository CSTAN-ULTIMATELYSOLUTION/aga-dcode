# D.136 Class Bible Audit

## Base

`D.136 Class Bible. (admin dcode)`

URL: <https://zsggz2p1btda.sg.larksuite.com/base/GGPiba6WEaG1hCsrpJIlJO3bgDb>

## Current Deep Audit Counts

| Item | Count |
|---|---:|
| Tables | 26 |
| Fields | 2,409 |
| Views | 157 |
| Forms | 0 extracted |
| Dashboards | Blocked by missing scope |
| Workflows | Blocked by missing scope |

## Table Groups

| Group | Tables |
|---|---:|
| Bible core | 4 |
| Masterlist / final list | 9 |
| DOE / declaration | 5 |
| Scoring / grading | 2 |
| Backlog / transition | 1 |
| Registration | 1 |
| Coach roster | 1 |
| Result / outcome | 1 |
| Summary / aggregation | 1 |
| Other | 1 |

## Highest Priority Tables

| Priority | Table | Why It Matters |
|---:|---|---|
| 1 | `136 student NEWBIBLE` | Main learner/source table. |
| 2 | `136 coach NEWBIBLE` | Main coach/source table. |
| 3 | `136 WHOLE-MASTERLIST` | Likely bridge between source data and reports. |
| 4 | `136 foundation FINAL MASTERLIST` | Likely final reporting list for foundation stage. |
| 5 | Backlog tables | Decide who is current, pending, consumed, or moved forward. |
| 6 | Leave/withdrawal tables | Affects counts and report inclusion. |
| 7 | DOE/declaration tables | Business outcome and declaration logic. |
| 8 | Grade ABC tables | EMO/coach scoring and segmentation. |

## Main Finding

D.136 is not just a list of people. It is a mixed operational system containing source records, copied lists, final lists, backlog lists, DOE/declaration records, grade/scoring records, and result records.

That means any reporting change should first identify which table is the source of truth and which tables are downstream copies or reporting surfaces.

## Level 2 Role Audit

- [D.136 Table Role Audit](D136-Table-Role-Audit.md): table-by-table classification into `source`, `working`, `derived`, `reporting`, `legacy`, or `unknown`, with system object mapping and next actions.
- [D.136 Field Dictionary](D136-Field-Dictionary.md): clearer field/column dictionary with option values for each D.136 table.
- [D.136 Field Duplication Analysis](D136-Field-Duplication-Analysis.md): duplicate table families, repeated fields, and what should combine together.

## Known Issues To Confirm

- CP135-named tables appear inside the CP136 Base.
- Multiple tables have the same 141-field shape, suggesting copied or derived masterlists.
- There are separate tables for current class, backlog, and after-rules-leave records.
- Some views are dashboard-style views, but Base dashboard extraction still needs permission.

## Source Files

- [Deep audit report](../docs/audits/dcode_aga_d136_class_bible_deep_audit_2026-05-28.md)
- [Shallow analysis report](../docs/audits/dcode_aga_d136_class_bible_analysis_2026-05-28.md)
- [Deep table CSV](../data/d136-class-bible/dcode_aga_d136_class_bible_deep_tables_2026-05-28.csv)
- [Deep audit JSON](../data/d136-class-bible/dcode_aga_d136_class_bible_deep_audit_2026-05-28.json)
