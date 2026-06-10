# D.136 Class Bible (admin dcode) Analysis - May 28, 2026

Base: [D.136 Class Bible. (admin dcode)](https://zsggz2p1btda.sg.larksuite.com/base/GGPiba6WEaG1hCsrpJIlJO3bgDb)

## Executive Summary

- Status: readable under AGA TECH SUPPORT account.
- Owner: Dcode Sdn Bhd.
- This Base should be deeply audited because it is a current admin Dcode Class Bible for CP136, with learner/coach Bible tables, masterlists, backlog/transition tables, DOE/declaration tables, grading/EMO tables, and result/outcome tables.
- Structure size: 26 tables, 0 fields, 0 views.

## Table Groups

| Group | Tables |
|---|---:|
| Backlog / transition | 1 |
| Bible core | 4 |
| Coach roster | 1 |
| DOE / declaration | 5 |
| Masterlist / final list | 9 |
| Other | 1 |
| Registration | 1 |
| Result / outcome | 1 |
| Scoring / grading | 2 |
| Summary / aggregation | 1 |

## Key Tables To Audit First

| Priority | Table | Why it matters | Fields | Views |
|---:|---|---|---:|---:|
| 1 | ✅✅136学员-NEWBIBLE_（Dcode) | Main learner Bible table for CP136. | 0 | 0 |
| 2 | ✅✅136教练-NEWBIBLE_（Dcode) | Main coach Bible table for CP136. | 0 | 0 |
| 3 | ✅✅136-WHOLE-MASTERLIST【基础-高四】 | Whole masterlist across course levels; likely reporting source. | 0 | 0 |
| 3 | ✅✅136-【神奇宝宝】WHOLE-MASTERLIST【基础-高四】 | Whole masterlist across course levels; likely reporting source. | 0 | 0 |
| 4 | 🖊️🖊️136-基础FINAL MASTERLIST | Final learner list for foundation stage. | 0 | 0 |
| 5 | ✅135-【旧Backlog进现行】WHOLE-MASTERLIST 高阶一Bible. | Backlog/transition handling, important for status correctness. | 0 | 0 |
| 5 | ✅✅136-旧Backlog【基础-高四】 | Backlog/transition handling, important for status correctness. | 0 | 0 |
| 5 | 🖊️-136-高阶一-【高阶一Backlog】Final Masterlist. | Backlog/transition handling, important for status correctness. | 0 | 0 |
| 5 | 🖊️-136-高阶二-【高阶二Backlog】Bible | Backlog/transition handling, important for status correctness. | 0 | 0 |
| 5 | 🖊️🖊️136-【基础Backlog】FINAL MASTERLIST. | Backlog/transition handling, important for status correctness. | 0 | 0 |
| 6 | 🖊️-136-高阶一-【守则后离开】Final Masterlist. | Leave/withdrawal after rules; affects counts and reporting. | 0 | 0 |
| 6 | 🖊️🖊️136-【基础守则离开】FINAL MASTERLIST. | Leave/withdrawal after rules; affects counts and reporting. | 0 | 0 |
| 7 | ✅135-高二工作坊DOE宣告（开班前） | DOE/declaration/business outcome logic. | 0 | 0 |
| 7 | ✅A0-136_高一-10天宣告 | DOE/declaration/business outcome logic. | 0 | 0 |

## Findings

- The Base is not just a simple contact list. It combines operational source tables and derived/reporting lists, so field/view extraction is needed before changing or consolidating anything.
- There are multiple stage-specific final masterlists and backlog/leave tables. These likely answer Gulichan’s meeting concern about knowing which list/report should include current class, backlog, or post-rule-leave people.
- There are duplicate/legacy references, including CP135-named tables inside the CP136 Base. These should be reviewed with Gulichan before using the Base as a clean standard.
- Several tables appear to represent the same business object at different lifecycle stages: NEWBIBLE, WHOLE-MASTERLIST, FINAL MASTERLIST, Backlog, leave/守则后离开, DOE/declaration, result. The phase-2 audit should map these into one flow.

## Recommended Next Step

Deep audit these first: learner NEWBIBLE, coach NEWBIBLE, WHOLE-MASTERLIST, foundation/high-stage FINAL MASTERLIST tables, Backlog tables, 守则后离开 tables, DOE/declaration tables, and Grade ABC tables. For each, extract fields, views, formulas/lookups, record counts, and identify the source-of-truth table versus derived/reporting tables.

## Files

- Raw structure JSON: `dcode_aga_d136_class_bible_analysis_2026-05-28.json`
- Table summary CSV: `dcode_aga_d136_class_bible_tables_2026-05-28.csv`
