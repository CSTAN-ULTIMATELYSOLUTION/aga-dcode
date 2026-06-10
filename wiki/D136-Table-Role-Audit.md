# D.136 Table Role Audit

## Purpose

This is the Level 2 table role audit for `D.136 Class Bible. (admin dcode)`. It translates Dcode table names into AGA system language, labels each table by role, and records the first weakness and next action for each table.

## Translation Principle

Dcode language and system language should both be preserved. For example, `Class Bible` is Dcode language for a grouping of many things; in system language it may contain `Student`, `Coach`, `Registration`, `Class Member`, `DOE`, `Backlog`, `Report`, and `Workflow` objects.

## Role Summary

| Role | Count | Meaning |
|---|---:|---|
| `source` | 3 | Candidate source-of-truth table. |
| `working` | 11 | Operational table used during a workflow. |
| `derived` | 3 | Copied, linked, calculated, or bridge table. |
| `reporting` | 8 | Final list, view surface, or manager/teacher report. |
| `legacy` | 1 | Old/template/reference table that should not be active truth unless confirmed. |
| `unknown` | 0 | Cannot classify safely from metadata alone. |

## System Object Summary

| System Object | Tables |
|---|---:|
| DOE / Declaration | 5 |
| Backlog / Transition | 3 |
| Class Phase Report | 3 |
| Grade / Segmentation | 2 |
| Class Member / Report Bridge | 2 |
| Drop / Leave Report | 2 |
| Backlog Report | 2 |
| Student / Class Member | 1 |
| Coach | 1 |
| Registration | 1 |
| Coach / Coach Roster | 1 |
| Call Center / Advanced Phase | 1 |
| Summary / Aggregation | 1 |
| DOE / Result | 1 |

## Table Role Matrix

| Role | Dcode Table | System Object | Fields | Views | Weakness | Next Action |
|---|---|---|---:|---:|---|---|
| `source` | ✅✅136学员-NEWBIBLE_（Dcode) | Student / Class Member | 144 | 9 | very wide table (144 fields); form metadata blocked by missing scope | confirm as source of truth; protect schema; compare 141-field schema with other masterlists |
| `source` | ✅✅136教练-NEWBIBLE_（Dcode) | Coach | 200 | 4 | very wide table (200 fields); form metadata blocked by missing scope | confirm as source of truth; protect schema; compare 141-field schema with other masterlists |
| `source` | ✅课程报名 | Registration | 8 | 1 | form metadata blocked by missing scope | confirm as source of truth; protect schema |
| `working` | ✅✅136-旧Backlog【基础-高四】 | Backlog / Transition | 141 | 26 | very wide table (141 fields); many views (26); backlog separated from lifecycle state; form metadata blocked by missing scope | map workflow trigger/input/output; convert to lifecycle-event model; compare 141-field schema with other masterlists |
| `working` | ✅135-【旧Backlog进现行】WHOLE-MASTERLIST 高阶一Bible. | Backlog / Transition | 141 | 26 | very wide table (141 fields); many views (26); CP135 reference inside CP136 Base; backlog separated from lifecycle state; form metadata blocked by missing scope | map workflow trigger/input/output; convert to lifecycle-event model; decide whether CP135 table should remain in CP136 Base; compare 141-field schema with other masterlists |
| `working` | 🖊️-136-高阶二-【高阶二Backlog】Bible | Backlog / Transition | 141 | 1 | very wide table (141 fields); backlog separated from lifecycle state; form metadata blocked by missing scope | map workflow trigger/input/output; convert to lifecycle-event model; compare 141-field schema with other masterlists |
| `working` | ✅教练名单（中心） | Coach / Coach Roster | 41 | 3 | form metadata blocked by missing scope | map workflow trigger/input/output |
| `working` | ✅A0-136_高一-10天宣告 | DOE / Declaration | 13 | 1 | form metadata blocked by missing scope | map workflow trigger/input/output |
| `working` | ✅A0-136高一-10天宣告 | DOE / Declaration | 15 | 1 | form metadata blocked by missing scope | map workflow trigger/input/output |
| `working` | ✅高二工作坊DOE宣告（开班前） | DOE / Declaration | 29 | 1 | form metadata blocked by missing scope | map workflow trigger/input/output |
| `working` | 【高二】事业成就表 | DOE / Declaration | 28 | 3 | form metadata blocked by missing scope | map workflow trigger/input/output |
| `working` | 高阶二2Call | Call Center / Advanced Phase | 141 | 1 | very wide table (141 fields); form metadata blocked by missing scope | map workflow trigger/input/output; compare 141-field schema with other masterlists |
| `working` | Grade ABC【EMO】 | Grade / Segmentation | 26 | 2 | form metadata blocked by missing scope | map workflow trigger/input/output |
| `working` | Grade ABC【教练填】 | Grade / Segmentation | 6 | 2 | form metadata blocked by missing scope | map workflow trigger/input/output |
| `derived` | ✅✅136-WHOLE-MASTERLIST【基础-高四】 | Class Member / Report Bridge | 141 | 38 | very wide table (141 fields); many views (38); likely copied/derived layer; form metadata blocked by missing scope | trace upstream source; stop manual edits if derived; compare 141-field schema with other masterlists |
| `derived` | ✅✅136-【神奇宝宝】WHOLE-MASTERLIST【基础-高四】 | Class Member / Report Bridge | 141 | 26 | very wide table (141 fields); many views (26); likely copied/derived layer; form metadata blocked by missing scope | trace upstream source; stop manual edits if derived; compare 141-field schema with other masterlists |
| `derived` | 总结合 | Summary / Aggregation | 32 | 3 | likely copied/derived layer; form metadata blocked by missing scope | trace upstream source; stop manual edits if derived |
| `reporting` | 🖊️-136-高阶一-FINAL MASTERLIST | Class Phase Report | 141 | 1 | very wide table (141 fields); report table may be edited like source; form metadata blocked by missing scope | define inclusion/exclusion rules; trace report lineage; compare 141-field schema with other masterlists |
| `reporting` | 🖊️-136-高阶一-【守则后离开】Final Masterlist. | Drop / Leave Report | 141 | 1 | very wide table (141 fields); report table may be edited like source; form metadata blocked by missing scope | define inclusion/exclusion rules; trace report lineage; compare 141-field schema with other masterlists |
| `reporting` | 🖊️-136-高阶一-【高阶一Backlog】Final Masterlist. | Backlog Report | 141 | 1 | very wide table (141 fields); backlog separated from lifecycle state; report table may be edited like source; form metadata blocked by missing scope | define inclusion/exclusion rules; trace report lineage; convert to lifecycle-event model; compare 141-field schema with other masterlists |
| `reporting` | 🖊️-136-高阶二-Final Masterlist. | Class Phase Report | 141 | 1 | very wide table (141 fields); report table may be edited like source; form metadata blocked by missing scope | define inclusion/exclusion rules; trace report lineage; compare 141-field schema with other masterlists |
| `reporting` | 🖊️🖊️136-【基础Backlog】FINAL MASTERLIST. | Backlog Report | 141 | 1 | very wide table (141 fields); backlog separated from lifecycle state; report table may be edited like source; form metadata blocked by missing scope | define inclusion/exclusion rules; trace report lineage; convert to lifecycle-event model; compare 141-field schema with other masterlists |
| `reporting` | 🖊️🖊️136-【基础守则离开】FINAL MASTERLIST. | Drop / Leave Report | 141 | 1 | very wide table (141 fields); report table may be edited like source; form metadata blocked by missing scope | define inclusion/exclusion rules; trace report lineage; compare 141-field schema with other masterlists |
| `reporting` | 🖊️🖊️136-基础FINAL MASTERLIST | Class Phase Report | 141 | 1 | very wide table (141 fields); report table may be edited like source; form metadata blocked by missing scope | define inclusion/exclusion rules; trace report lineage; compare 141-field schema with other masterlists |
| `reporting` | 🔥-学员海星个人结果 | DOE / Result | 5 | 1 | form metadata blocked by missing scope | define inclusion/exclusion rules; trace report lineage |
| `legacy` | ✅135-高二工作坊DOE宣告（开班前） | DOE / Declaration | 29 | 1 | CP135 reference inside CP136 Base; form metadata blocked by missing scope | confirm archive/reference status; decide whether CP135 table should remain in CP136 Base |

## First Findings

1. `Class Bible` is not one object. It is a container that mixes student source data, coach data, registration, masterlists, backlog, DOE, grading, and reports.
2. The 141-field masterlist family is the biggest structural smell. These tables should be compared field-by-field to identify which one is source, copied, filtered, or final reporting.
3. Backlog is currently represented as separate tables, but the target ERP model should treat it as student lifecycle events.
4. CP135-named tables inside the CP136 Base are a clear legacy/reference risk until Dcode confirms why they are there.
5. Final Masterlist tables should not become source-of-truth unless their upstream lineage and inclusion rules are documented.
6. Form metadata is still blocked by missing `base:form:read`, so form ownership and intake structure remain incomplete.

## Recommended Next Audit

Audit the 141-field table family first because it controls the messy middle between source data and reports:

- ✅✅136-WHOLE-MASTERLIST【基础-高四】
- ✅✅136-旧Backlog【基础-高四】
- ✅✅136-【神奇宝宝】WHOLE-MASTERLIST【基础-高四】
- ✅135-【旧Backlog进现行】WHOLE-MASTERLIST 高阶一Bible.
- 🖊️🖊️136-基础FINAL MASTERLIST
- 🖊️🖊️136-【基础守则离开】FINAL MASTERLIST.
- 🖊️🖊️136-【基础Backlog】FINAL MASTERLIST.
- 🖊️-136-高阶一-【高阶一Backlog】Final Masterlist.
- 🖊️-136-高阶一-FINAL MASTERLIST
- 🖊️-136-高阶一-【守则后离开】Final Masterlist.
- 高阶二2Call
- 🖊️-136-高阶二-Final Masterlist.
- 🖊️-136-高阶二-【高阶二Backlog】Bible

For each table in that family, compare fields, formulas, lookups, views, and record counts. Then decide whether to keep, merge, archive, rebuild, or move the logic into the ERP backend.

## Source

- [D.136 deep table CSV](../data/d136-class-bible/dcode_aga_d136_class_bible_deep_tables_2026-05-28.csv)
- [D.136 deep audit](../docs/audits/dcode_aga_d136_class_bible_deep_audit_2026-05-28.md)
- [D.136 field dictionary](D136-Field-Dictionary.md)
- [D.136 field duplication analysis](D136-Field-Duplication-Analysis.md)
