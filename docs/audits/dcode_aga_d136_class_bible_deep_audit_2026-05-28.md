# D.136 Class Bible (admin dcode) Deep Audit - May 28, 2026

Base: [D.136 Class Bible. (admin dcode)](https://zsggz2p1btda.sg.larksuite.com/base/GGPiba6WEaG1hCsrpJIlJO3bgDb)

## Executive Summary

- Status: readable under AGA TECH SUPPORT account.
- Owner: Dcode Sdn Bhd.
- Recommended: deeply audit this Base as a phase-2 priority because it appears to combine source-of-truth Class Bible data, final masterlists, backlog/leave handling, DOE/declaration logic, grading, registration, and result tables.
- Extracted: 26 tables, 2409 fields, 157 views, 0 forms, 0 dashboards, 0 workflows.
- Dashboard extraction note: {
  "ok": false,
  "identity": "user",
  "error": {
    "type": "missing_scope",
    "message": "missing required scope(s): base:dashboard:read",
    "hint": "run `lark-cli auth login --scope \"base:dashboard:read\"` in 
- Workflow extraction note: {
  "ok": false,
  "identity": "user",
  "error": {
    "type": "missing_scope",
    "message": "missing required scope(s): base:workflow:read",
    "hint": "run `lark-cli auth login --scope \"base:workflow:read\"` in th

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

## Highest Priority Tables

| Priority | Table | Why | Fields | Views | Forms |
|---:|---|---|---:|---:|---:|
| 1 | ✅✅136学员-NEWBIBLE_（Dcode) | Main learner Bible/source table. | 144 | 9 | 0 |
| 2 | ✅✅136教练-NEWBIBLE_（Dcode) | Main coach Bible/source table. | 200 | 4 | 0 |
| 3 | ✅✅136-WHOLE-MASTERLIST【基础-高四】 | Whole masterlist across levels; likely reporting bridge. | 141 | 38 | 0 |
| 3 | ✅✅136-【神奇宝宝】WHOLE-MASTERLIST【基础-高四】 | Whole masterlist across levels; likely reporting bridge. | 141 | 26 | 0 |
| 4 | 🖊️🖊️136-基础FINAL MASTERLIST | Foundation final list; likely reporting source. | 141 | 1 | 0 |
| 5 | ✅135-【旧Backlog进现行】WHOLE-MASTERLIST 高阶一Bible. | Backlog/transition handling. | 141 | 26 | 0 |
| 5 | ✅✅136-旧Backlog【基础-高四】 | Backlog/transition handling. | 141 | 26 | 0 |
| 5 | 🖊️-136-高阶一-【高阶一Backlog】Final Masterlist. | Backlog/transition handling. | 141 | 1 | 0 |
| 5 | 🖊️-136-高阶二-【高阶二Backlog】Bible | Backlog/transition handling. | 141 | 1 | 0 |
| 5 | 🖊️🖊️136-【基础Backlog】FINAL MASTERLIST. | Backlog/transition handling. | 141 | 1 | 0 |
| 6 | 🖊️-136-高阶一-【守则后离开】Final Masterlist. | Leave/withdrawal handling affects counts. | 141 | 1 | 0 |
| 6 | 🖊️🖊️136-【基础守则离开】FINAL MASTERLIST. | Leave/withdrawal handling affects counts. | 141 | 1 | 0 |
| 7 | ✅135-高二工作坊DOE宣告（开班前） | DOE/declaration/business outcome logic. | 29 | 1 | 0 |
| 7 | ✅A0-136_高一-10天宣告 | DOE/declaration/business outcome logic. | 13 | 1 | 0 |
| 7 | ✅A0-136高一-10天宣告 | DOE/declaration/business outcome logic. | 15 | 1 | 0 |
| 7 | ✅高二工作坊DOE宣告（开班前） | DOE/declaration/business outcome logic. | 29 | 1 | 0 |

## Forms / Dashboards / Workflows

| Area | Count | Note |
|---|---:|---|
| Forms | 0 | Sum across all tables. |
| Dashboards | 0 | Base-level dashboards. |
| Workflows | 0 | Base automation workflows. |

## Findings

- The Base has several layers of the same business population: NEWBIBLE, WHOLE-MASTERLIST, FINAL MASTERLIST, Backlog, 守则后离开, DOE/declaration, and result tables. This is exactly the kind of structure that needs source-of-truth mapping before reporting or automation changes.
- CP135-named tables appear inside this CP136 Base, which should be treated as a legacy/reference or possible duplication risk until confirmed.
- Phase 2 should map each table to one role: input/source, working list, derived list, reporting list, or legacy/archive.
- Next useful extraction, if needed, is record counts and formula/lookup inspection for the highest-priority tables.

## Files

- Raw deep audit JSON: `dcode_aga_d136_class_bible_deep_audit_2026-05-28.json`
- Deep table CSV: `dcode_aga_d136_class_bible_deep_tables_2026-05-28.csv`
