# Lark Base Weakness Screen

## Purpose

This page is the first-pass structural screen of all readable Dcode-related Lark Bases from the May 28, 2026 inventory. It does not yet prove record-level correctness; it flags which Bases look messy, duplicated, mixed, legacy, or risky from their names, table lists, ownership, and metadata.

## Screening Method

Each Base is scored using visible inventory signals: table count, old/copy/test words, mixed cohort numbers, generic table names, source/report/workflow tables mixed together, ownership, wiki-wrapped Bases, and invalid last-open metadata.

## Risk Summary

| Risk | Count |
|---|---:|
| Critical | 22 |
| High | 37 |
| Medium | 53 |
| Low | 17 |

## Area Summary

| Area | Count |
|---|---:|
| Class Bible | 71 |
| Call Center | 40 |
| Backlog | 36 |
| DOE | 35 |
| Finance | 33 |
| Unknown | 24 |
| Portal | 3 |

## Priority Bases To Review First

| Priority | Base | Area | Tables | Weakness | Recommended Action |
|---:|---|---|---:|---|---|
| 1 | CP136-DOE （学员&教练） | DOE, Call Center | 36 | high table count (36); old/copy/test signals; mixed cohort numbers: 133, 135, 136, 137; generic table names; source tables mixed with reporting tables; workflow/input tables mixed with summary/reporting | deep audit; archive/rename decision; separate source vs report; map workflow lineage |
| 2 | CP137-DOE 【学员&教练】 | DOE | 34 | high table count (34); old/copy/test signals; two cohort numbers mixed: 135, 137; generic table names; source tables mixed with reporting tables; workflow/input tables mixed with summary/reporting; last-open metadata missing/invalid | deep audit; archive/rename decision; separate source vs report; map workflow lineage |
| 3 | 135 Class Bible. (admin dcode) | Class Bible, DOE, Backlog, Call Center, Finance | 33 | high table count (33); old/copy/test signals; two cohort numbers mixed: 128, 135; generic table names; source tables mixed with reporting tables; workflow/input tables mixed with summary/reporting | deep audit; archive/rename decision; separate source vs report; map workflow lineage |
| 4 | CP135-DOE （学员&教练） | DOE | 32 | high table count (32); old/copy/test signals; mixed cohort numbers: 133, 135, 137; source tables mixed with reporting tables; workflow/input tables mixed with summary/reporting | deep audit; archive/rename decision; separate source vs report; map workflow lineage |
| 5 | D.137 Class Bible. (admin dcode) | Class Bible, DOE, Backlog, Call Center | 28 | high table count (28); old/copy/test signals; two cohort numbers mixed: 135, 137; generic table names; source tables mixed with reporting tables; workflow/input tables mixed with summary/reporting; last-open metadata missing/invalid | deep audit; archive/rename decision; separate source vs report; map workflow lineage |
| 6 | D.136 Class Bible. (admin dcode) | Class Bible, DOE, Backlog, Call Center | 26 | high table count (26); old/copy/test signals; two cohort numbers mixed: 135, 136; source tables mixed with reporting tables; workflow/input tables mixed with summary/reporting | deep audit; archive/rename decision; separate source vs report; map workflow lineage |
| 7 | 131-DOE （教练） | Class Bible, DOE, Call Center | 24 | medium table count (24); mixed cohort numbers: 001, 002, 130, 131; source tables mixed with reporting tables; workflow/input tables mixed with summary/reporting; wiki-wrapped Base | deep audit; separate source vs report; map workflow lineage |
| 8 | CP133-DOE （学员&教练） | Class Bible, DOE | 24 | medium table count (24); old/copy/test signals; mixed cohort numbers: 006, 129, 133; source tables mixed with reporting tables; workflow/input tables mixed with summary/reporting | deep audit; archive/rename decision; separate source vs report; map workflow lineage |
| 9 | 129-DOE （教练） | Class Bible, DOE, Call Center | 21 | medium table count (21); mixed cohort numbers: 001, 002, 003, 128, 129; source tables mixed with reporting tables; workflow/input tables mixed with summary/reporting; AGA-owned copy or working area; wiki-wrapped Base | deep audit; separate source vs report; map workflow lineage; confirm owner |
| 10 | Class Bible - 128 (admin) Copy | Class Bible, Backlog, Call Center, Finance | 21 | medium table count (21); old/copy/test signals; mixed cohort numbers: 100, 125, 126, 127, 128, 129; AGA-owned copy or working area | deep audit; archive/rename decision; confirm owner |
| 11 | 不用旧版本-KLCP136-DOE （学员&教练） | Class Bible, DOE | 21 | medium table count (21); old/copy/test signals; mixed cohort numbers: 002, 006, 129, 132, 136, 137; source tables mixed with reporting tables; workflow/input tables mixed with summary/reporting; last-open metadata missing/invalid | deep audit; archive/rename decision; separate source vs report; map workflow lineage |
| 12 | 旧的版本CP137-DOE （学员&教练） | Class Bible, DOE | 21 | medium table count (21); old/copy/test signals; two cohort numbers mixed: 132, 137; source tables mixed with reporting tables; workflow/input tables mixed with summary/reporting | deep audit; archive/rename decision; separate source vs report; map workflow lineage |
| 13 | 132 Class Bible (admin dcode) | Class Bible, Backlog, Call Center | 20 | medium table count (20); mixed cohort numbers: 128, 131, 132; source tables mixed with reporting tables; last-open metadata missing/invalid | deep audit; separate source vs report |
| 14 | 133-DOE （教练） | Class Bible, DOE, Call Center | 19 | medium table count (19); mixed cohort numbers: 002, 129, 130, 133; source tables mixed with reporting tables; workflow/input tables mixed with summary/reporting; AGA-owned copy or working area; wiki-wrapped Base | deep audit; separate source vs report; map workflow lineage; confirm owner |
| 15 | 132-DOE （教练） | Class Bible, DOE, Call Center | 18 | medium table count (18); two cohort numbers mixed: 130, 132; source tables mixed with reporting tables; workflow/input tables mixed with summary/reporting; AGA-owned copy or working area; wiki-wrapped Base | deep audit; separate source vs report; map workflow lineage; confirm owner |
| 16 | 137-DOE （教练） | Class Bible, DOE, Call Center | 18 | medium table count (18); mixed cohort numbers: 129, 130, 137; source tables mixed with reporting tables; workflow/input tables mixed with summary/reporting; AGA-owned copy or working area; wiki-wrapped Base | deep audit; separate source vs report; map workflow lineage; confirm owner |
| 17 | 138 Class Bible (admin dcode) | Class Bible, Backlog | 17 | medium table count (17); mixed cohort numbers: 128, 131, 138; source tables mixed with reporting tables; last-open metadata missing/invalid | deep audit; separate source vs report |
| 18 | CP132-DOE （学员） | Class Bible, DOE | 16 | medium table count (16); mixed cohort numbers: 006, 129, 132; workflow/input tables mixed with summary/reporting; last-open metadata missing/invalid | deep audit; map workflow lineage |
| 19 | 130-DOE （学员） | Class Bible, DOE | 15 | medium table count (15); old/copy/test signals; mixed cohort numbers: 006, 129, 130; workflow/input tables mixed with summary/reporting | deep audit; archive/rename decision; map workflow lineage |
| 20 | Call Center （Dcode) 副本 | Class Bible, Call Center | 13 | old/copy/test signals; mixed cohort numbers: 120, 127, 128, 129; generic table names; last-open metadata missing/invalid | deep audit; archive/rename decision |
| 21 | 129-DOE test | Class Bible, DOE | 11 | old/copy/test signals; mixed cohort numbers: 001, 002, 003, 004, 005, 006, 129; generic table names; AGA-owned copy or working area | deep audit; archive/rename decision; confirm owner |
| 22 | 130-DOE （教练）old | DOE | 8 | mixed cohort numbers: 001, 004, 128, 130; workflow/input tables mixed with summary/reporting; AGA-owned copy or working area; wiki-wrapped Base | deep audit; map workflow lineage; confirm owner |
| 23 | 130-DOE （教练） | Class Bible, DOE, Call Center | 24 | medium table count (24); source tables mixed with reporting tables; workflow/input tables mixed with summary/reporting; wiki-wrapped Base | deep audit; separate source vs report; map workflow lineage |
| 24 | 134 Class Bible (admin) | Class Bible, Backlog, Call Center | 20 | medium table count (20); mixed cohort numbers: 128, 129, 134; AGA-owned copy or working area; wiki-wrapped Base | deep audit; confirm owner |
| 25 | 135 Class Bible (admin) | Class Bible, Backlog, Call Center | 20 | medium table count (20); mixed cohort numbers: 128, 129, 135; AGA-owned copy or working area; wiki-wrapped Base | deep audit; confirm owner |

## Full Base Screen

| Risk | Base | Owner | Area | Tables | Weakness | Recommended Action |
|---|---|---|---|---:|---|---|
| Critical | CP136-DOE （学员&教练） | owned by Dcode | DOE, Call Center | 36 | high table count (36); old/copy/test signals; mixed cohort numbers: 133, 135, 136, 137; generic table names; source tables mixed with reporting tables; workflow/input tables mixed with summary/reporting | deep audit; archive/rename decision; separate source vs report; map workflow lineage |
| Critical | CP137-DOE 【学员&教练】 | owned by Dcode | DOE | 34 | high table count (34); old/copy/test signals; two cohort numbers mixed: 135, 137; generic table names; source tables mixed with reporting tables; workflow/input tables mixed with summary/reporting; last-open metadata missing/invalid | deep audit; archive/rename decision; separate source vs report; map workflow lineage |
| Critical | 135 Class Bible. (admin dcode) | owned by Dcode | Class Bible, DOE, Backlog, Call Center, Finance | 33 | high table count (33); old/copy/test signals; two cohort numbers mixed: 128, 135; generic table names; source tables mixed with reporting tables; workflow/input tables mixed with summary/reporting | deep audit; archive/rename decision; separate source vs report; map workflow lineage |
| Critical | CP135-DOE （学员&教练） | owned by Dcode | DOE | 32 | high table count (32); old/copy/test signals; mixed cohort numbers: 133, 135, 137; source tables mixed with reporting tables; workflow/input tables mixed with summary/reporting | deep audit; archive/rename decision; separate source vs report; map workflow lineage |
| Critical | D.137 Class Bible. (admin dcode) | owned by Dcode | Class Bible, DOE, Backlog, Call Center | 28 | high table count (28); old/copy/test signals; two cohort numbers mixed: 135, 137; generic table names; source tables mixed with reporting tables; workflow/input tables mixed with summary/reporting; last-open metadata missing/invalid | deep audit; archive/rename decision; separate source vs report; map workflow lineage |
| Critical | D.136 Class Bible. (admin dcode) | owned by Dcode | Class Bible, DOE, Backlog, Call Center | 26 | high table count (26); old/copy/test signals; two cohort numbers mixed: 135, 136; source tables mixed with reporting tables; workflow/input tables mixed with summary/reporting | deep audit; archive/rename decision; separate source vs report; map workflow lineage |
| Critical | 131-DOE （教练） | owned by Dcode | Class Bible, DOE, Call Center | 24 | medium table count (24); mixed cohort numbers: 001, 002, 130, 131; source tables mixed with reporting tables; workflow/input tables mixed with summary/reporting; wiki-wrapped Base | deep audit; separate source vs report; map workflow lineage |
| Critical | CP133-DOE （学员&教练） | owned by Dcode | Class Bible, DOE | 24 | medium table count (24); old/copy/test signals; mixed cohort numbers: 006, 129, 133; source tables mixed with reporting tables; workflow/input tables mixed with summary/reporting | deep audit; archive/rename decision; separate source vs report; map workflow lineage |
| Critical | 129-DOE （教练） | owned by AGA Tech Support | Class Bible, DOE, Call Center | 21 | medium table count (21); mixed cohort numbers: 001, 002, 003, 128, 129; source tables mixed with reporting tables; workflow/input tables mixed with summary/reporting; AGA-owned copy or working area; wiki-wrapped Base | deep audit; separate source vs report; map workflow lineage; confirm owner |
| Critical | Class Bible - 128 (admin) Copy | owned by AGA Tech Support | Class Bible, Backlog, Call Center, Finance | 21 | medium table count (21); old/copy/test signals; mixed cohort numbers: 100, 125, 126, 127, 128, 129; AGA-owned copy or working area | deep audit; archive/rename decision; confirm owner |
| Critical | 不用旧版本-KLCP136-DOE （学员&教练） | owned by Dcode | Class Bible, DOE | 21 | medium table count (21); old/copy/test signals; mixed cohort numbers: 002, 006, 129, 132, 136, 137; source tables mixed with reporting tables; workflow/input tables mixed with summary/reporting; last-open metadata missing/invalid | deep audit; archive/rename decision; separate source vs report; map workflow lineage |
| Critical | 旧的版本CP137-DOE （学员&教练） | owned by Dcode | Class Bible, DOE | 21 | medium table count (21); old/copy/test signals; two cohort numbers mixed: 132, 137; source tables mixed with reporting tables; workflow/input tables mixed with summary/reporting | deep audit; archive/rename decision; separate source vs report; map workflow lineage |
| Critical | 132 Class Bible (admin dcode) | owned by Dcode | Class Bible, Backlog, Call Center | 20 | medium table count (20); mixed cohort numbers: 128, 131, 132; source tables mixed with reporting tables; last-open metadata missing/invalid | deep audit; separate source vs report |
| Critical | 133-DOE （教练） | owned by AGA Tech Support | Class Bible, DOE, Call Center | 19 | medium table count (19); mixed cohort numbers: 002, 129, 130, 133; source tables mixed with reporting tables; workflow/input tables mixed with summary/reporting; AGA-owned copy or working area; wiki-wrapped Base | deep audit; separate source vs report; map workflow lineage; confirm owner |
| Critical | 132-DOE （教练） | owned by AGA Tech Support | Class Bible, DOE, Call Center | 18 | medium table count (18); two cohort numbers mixed: 130, 132; source tables mixed with reporting tables; workflow/input tables mixed with summary/reporting; AGA-owned copy or working area; wiki-wrapped Base | deep audit; separate source vs report; map workflow lineage; confirm owner |
| Critical | 137-DOE （教练） | owned by AGA Tech Support | Class Bible, DOE, Call Center | 18 | medium table count (18); mixed cohort numbers: 129, 130, 137; source tables mixed with reporting tables; workflow/input tables mixed with summary/reporting; AGA-owned copy or working area; wiki-wrapped Base | deep audit; separate source vs report; map workflow lineage; confirm owner |
| Critical | 138 Class Bible (admin dcode) | owned by Dcode | Class Bible, Backlog | 17 | medium table count (17); mixed cohort numbers: 128, 131, 138; source tables mixed with reporting tables; last-open metadata missing/invalid | deep audit; separate source vs report |
| Critical | CP132-DOE （学员） | owned by Dcode | Class Bible, DOE | 16 | medium table count (16); mixed cohort numbers: 006, 129, 132; workflow/input tables mixed with summary/reporting; last-open metadata missing/invalid | deep audit; map workflow lineage |
| Critical | 130-DOE （学员） | owned by Dcode | Class Bible, DOE | 15 | medium table count (15); old/copy/test signals; mixed cohort numbers: 006, 129, 130; workflow/input tables mixed with summary/reporting | deep audit; archive/rename decision; map workflow lineage |
| Critical | Call Center （Dcode) 副本 | owned by Dcode | Class Bible, Call Center | 13 | old/copy/test signals; mixed cohort numbers: 120, 127, 128, 129; generic table names; last-open metadata missing/invalid | deep audit; archive/rename decision |
| Critical | 129-DOE test | owned by AGA Tech Support | Class Bible, DOE | 11 | old/copy/test signals; mixed cohort numbers: 001, 002, 003, 004, 005, 006, 129; generic table names; AGA-owned copy or working area | deep audit; archive/rename decision; confirm owner |
| Critical | 130-DOE （教练）old | owned by AGA Tech Support | DOE | 8 | mixed cohort numbers: 001, 004, 128, 130; workflow/input tables mixed with summary/reporting; AGA-owned copy or working area; wiki-wrapped Base | deep audit; map workflow lineage; confirm owner |
| High | 130-DOE （教练） | owned by Dcode | Class Bible, DOE, Call Center | 24 | medium table count (24); source tables mixed with reporting tables; workflow/input tables mixed with summary/reporting; wiki-wrapped Base | deep audit; separate source vs report; map workflow lineage |
| High | 134 Class Bible (admin) | owned by AGA Tech Support | Class Bible, Backlog, Call Center | 20 | medium table count (20); mixed cohort numbers: 128, 129, 134; AGA-owned copy or working area; wiki-wrapped Base | deep audit; confirm owner |
| High | 135 Class Bible (admin) | owned by AGA Tech Support | Class Bible, Backlog, Call Center | 20 | medium table count (20); mixed cohort numbers: 128, 129, 135; AGA-owned copy or working area; wiki-wrapped Base | deep audit; confirm owner |
| High | 136 Class Bible (admin) | owned by AGA Tech Support | Class Bible, Backlog, Call Center | 20 | medium table count (20); mixed cohort numbers: 128, 129, 136; AGA-owned copy or working area; wiki-wrapped Base | deep audit; confirm owner |
| High | 137 Class Bible (admin) | owned by AGA Tech Support | Class Bible, Backlog, Call Center | 20 | medium table count (20); mixed cohort numbers: 128, 129, 137; AGA-owned copy or working area; wiki-wrapped Base | deep audit; confirm owner |
| High | Class Bible - 129 (admin) | owned by AGA Tech Support | Class Bible, Call Center | 20 | medium table count (20); mixed cohort numbers: 126, 127, 128, 129, 130; AGA-owned copy or working area | deep audit; confirm owner |
| High | 128-DOE （学员） | owned by Dcode | Class Bible, DOE, Call Center | 19 | medium table count (19); mixed cohort numbers: 002, 003, 004, 005, 128, 200 | deep audit |
| High | 133 Class Bible (admin dcode) | owned by Dcode | Class Bible, Backlog, Call Center | 19 | medium table count (19); two cohort numbers mixed: 128, 133; generic table names | deep audit |
| High | Finance | owned by AGA Tech Support | Class Bible, Call Center, Finance | 19 | medium table count (19); mixed cohort numbers: 124, 125, 126, 127, 128, 129; AGA-owned copy or working area | deep audit; confirm owner |
| High | 130 Class Bible (admin) | owned by AGA Tech Support | Class Bible, Backlog | 18 | medium table count (18); two cohort numbers mixed: 128, 130; AGA-owned copy or working area; wiki-wrapped Base | deep audit; confirm owner |
| High | 131 Class Bible (admin) | owned by AGA Tech Support | Class Bible, Backlog | 18 | medium table count (18); mixed cohort numbers: 128, 130, 131; AGA-owned copy or working area; wiki-wrapped Base | deep audit; confirm owner |
| High | 132 Class Bible (admin) | owned by AGA Tech Support | Class Bible, Backlog | 18 | medium table count (18); mixed cohort numbers: 128, 130, 132; AGA-owned copy or working area; wiki-wrapped Base | deep audit; confirm owner |
| High | CP132-DOE （教练） | owned by Dcode | Class Bible, DOE, Call Center | 18 | medium table count (18); two cohort numbers mixed: 131, 132; workflow/input tables mixed with summary/reporting; last-open metadata missing/invalid | deep audit; map workflow lineage |
| High | Dcode Backlog | owned by Dcode | Class Bible, Backlog, Finance | 18 | medium table count (18); old/copy/test signals; generic table names | deep audit; archive/rename decision |
| High | Finance 2.0 | owned by AGA Tech Support | Class Bible, Call Center, Finance | 18 | medium table count (18); mixed cohort numbers: 124, 125, 126, 127, 128, 129; AGA-owned copy or working area | deep audit; confirm owner |
| High | 129 Class Bible (admin dcode) | owned by Dcode | Class Bible, Backlog, Call Center | 17 | medium table count (17); mixed cohort numbers: 128, 129, 131; last-open metadata missing/invalid | deep audit |
| High | 129 Class Bible (admin) | owned by Dcode | Class Bible, Backlog, Call Center | 17 | medium table count (17); two cohort numbers mixed: 128, 129; wiki-wrapped Base | deep audit |
| High | 130 Class Bible (admin dcode) | owned by Dcode | Class Bible, Backlog, Call Center | 17 | medium table count (17); mixed cohort numbers: 128, 130, 131; last-open metadata missing/invalid | deep audit |
| High | 131 Class Bible (admin dcode) | owned by Dcode | Class Bible, Backlog | 17 | medium table count (17); two cohort numbers mixed: 128, 131; source tables mixed with reporting tables | deep audit; separate source vs report |
| High | 131-DOE （学员） | owned by Dcode | Class Bible, DOE | 17 | medium table count (17); mixed cohort numbers: 006, 129, 131; workflow/input tables mixed with summary/reporting | deep audit; map workflow lineage |
| High | 133 Class Bible (admin) | owned by AGA Tech Support | Class Bible, Backlog | 17 | medium table count (17); mixed cohort numbers: 128, 130, 133; AGA-owned copy or working area; wiki-wrapped Base | deep audit; confirm owner |
| High | 137 Class Bible. (admin dcode) | owned by Dcode | Class Bible, Backlog, Call Center | 17 | medium table count (17); mixed cohort numbers: 128, 136, 137; last-open metadata missing/invalid | deep audit |
| High | Class Bible - 129 (admin) | owned by AGA Tech Support | Class Bible, Backlog, Call Center | 17 | medium table count (17); mixed cohort numbers: 100, 126, 127, 128, 129; AGA-owned copy or working area | deep audit; confirm owner |
| High | Class Bible - 129 (admin) old | owned by AGA Tech Support | Class Bible, DOE, Backlog, Finance | 15 | medium table count (15); two cohort numbers mixed: 128, 129; AGA-owned copy or working area; wiki-wrapped Base | deep audit; confirm owner |
| High | 129-DOE （学员） | owned by AGA Tech Support | Class Bible, DOE | 14 | mixed cohort numbers: 001, 002, 003, 004, 005, 006, 129, 230; generic table names; AGA-owned copy or working area; wiki-wrapped Base | deep audit; confirm owner |
| High | Call Center （Dcode) | owned by Dcode | Class Bible, Call Center | 13 | mixed cohort numbers: 120, 127, 128, 129; generic table names; last-open metadata missing/invalid | deep audit |
| High | Call Center | owned by AGA Tech Support | Class Bible, Call Center | 12 | mixed cohort numbers: 120, 127, 128, 129; AGA-owned copy or working area | deep audit; confirm owner |
| High | ✅Class Bible - 127 (admin) | owned by AGA Tech Support | Class Bible, Call Center, Finance | 12 | mixed cohort numbers: 124, 125, 126, 127; AGA-owned copy or working area | deep audit; confirm owner |
| High | 1.0 - Class Bible - 125 (admin) | owned by AGA Tech Support | Class Bible, Call Center, Finance | 11 | mixed cohort numbers: 117, 118, 119, 120, 125; AGA-owned copy or working area | deep audit; confirm owner |
| High | 2.0 - Class Bible - 125 (admin) | owned by AGA Tech Support | Class Bible, Call Center, Finance | 11 | mixed cohort numbers: 117, 118, 119, 120, 125; AGA-owned copy or working area | deep audit; confirm owner |
| High | Class Bible - 120 (admin) | owned by AGA Tech Support | Class Bible, Call Center, Finance | 11 | mixed cohort numbers: 117, 118, 119, 120; AGA-owned copy or working area | deep audit; confirm owner |
| High | ✅ Class Bible - 124 (admin) | owned by AGA Tech Support | Class Bible | 11 | mixed cohort numbers: 117, 118, 119, 120, 124; AGA-owned copy or working area | deep audit; confirm owner |
| High | ✅Class Bible - 126 (admin) | owned by AGA Tech Support | Class Bible, Call Center, Finance | 11 | mixed cohort numbers: 117, 118, 119, 120, 126; AGA-owned copy or working area | deep audit; confirm owner |
| High | 128-DOE （教练） | owned by AGA Tech Support | Class Bible, DOE | 10 | two cohort numbers mixed: 127, 128; generic table names; AGA-owned copy or working area; wiki-wrapped Base | deep audit; confirm owner |
| High | 指引部门 | owned by AGA Tech Support | Unknown | 9 | mixed cohort numbers: 124, 125, 126, 127, 128, 129; AGA-owned copy or working area | deep audit; confirm owner |
| High | Call Center 2.0 | owned by AGA Tech Support | Class Bible, Call Center | 8 | mixed cohort numbers: 120, 127, 128, 129; AGA-owned copy or working area | deep audit; confirm owner |
| High | Student Main Database | owned by AGA Tech Support | Unknown | 5 | mixed cohort numbers: 118, 119, 120; AGA-owned copy or working area | deep audit; confirm owner |
| Medium | 128 Class Bible (admin) | owned by AGA Tech Support | Class Bible, Backlog | 18 | medium table count (18); AGA-owned copy or working area | confirm owner |
| Medium | 126 - DOE挑战 （学员） | shared/other owner | DOE | 14 | two cohort numbers mixed: 125, 126; shared/other owner | confirm owner |
| Medium | 129 - DOE挑战 （学员) | owned by AGA Tech Support | DOE | 12 | two cohort numbers mixed: 125, 129; AGA-owned copy or working area | confirm owner |
| Medium | 124 Bible | owned by AGA Tech Support | Class Bible, Backlog | 10 | AGA-owned copy or working area; last-open metadata missing/invalid | confirm owner |
| Medium | JCP Bible (113+) | owned by AGA Tech Support | Class Bible | 9 | AGA-owned copy or working area; last-open metadata missing/invalid | confirm owner |
| Medium | Dcode Bible | owned by AGA Tech Support | Class Bible, Backlog, Call Center | 8 | AGA-owned copy or working area; last-open metadata missing/invalid | confirm owner |
| Medium | Dcode Bible | owned by AGA Tech Support | Class Bible, Backlog, Call Center | 8 | AGA-owned copy or working area; last-open metadata missing/invalid | confirm owner |
| Medium | Store Inventory & Revenue Tracking | shared/other owner | Unknown | 8 | shared/other owner; last-open metadata missing/invalid | confirm owner |
| Medium | Store Inventory & Revenue Tracking | shared/other owner | Unknown | 8 | shared/other owner; last-open metadata missing/invalid | confirm owner |
| Medium | 126 - 宣告和总结 （学员） | shared/other owner | DOE | 7 | generic table names; shared/other owner | confirm owner |
| Medium | Online Order Fulfilment & Inventory Management | shared/other owner | DOE, Portal | 7 | shared/other owner; last-open metadata missing/invalid | confirm owner |
| Medium | Online Order Fulfilment & Inventory Management | shared/other owner | DOE, Portal | 7 | shared/other owner; last-open metadata missing/invalid | confirm owner |
| Medium | Real Estate Project Management | shared/other owner | Finance | 6 | shared/other owner; last-open metadata missing/invalid | confirm owner |
| Medium | Real Estate Project Management | shared/other owner | Finance | 6 | shared/other owner; last-open metadata missing/invalid | confirm owner |
| Medium | 复习基础Bible | owned by AGA Tech Support | Class Bible, Backlog | 6 | AGA-owned copy or working area; last-open metadata missing/invalid | confirm owner |
| Medium | 复习基础Bible | owned by AGA Tech Support | Class Bible, Backlog | 6 | AGA-owned copy or working area; last-open metadata missing/invalid | confirm owner |
| Medium | Fixed Assets Management | shared/other owner | Finance | 5 | shared/other owner; last-open metadata missing/invalid | confirm owner |
| Medium | Fixed Assets Management | shared/other owner | Finance | 5 | shared/other owner; last-open metadata missing/invalid | confirm owner |
| Medium | 客服 Backlog | owned by AGA Tech Support | Class Bible, Backlog, Call Center | 5 | two cohort numbers mixed: 136, 137; AGA-owned copy or working area | confirm owner |
| Medium | ✨Manufacturing Inspection System: AI Autofill Pass/Fail (Quality Assurance Test) [AI] | shared/other owner | Unknown | 4 | shared/other owner; last-open metadata missing/invalid | confirm owner |
| Medium | ✨Manufacturing Inspection System: AI Autofill Pass/Fail (Quality Assurance Test) [AI] | shared/other owner | Unknown | 4 | shared/other owner; last-open metadata missing/invalid | confirm owner |
| Medium | ✨Sales Management System: AI Autofill Client Health Score [AI] | shared/other owner | Finance | 4 | shared/other owner; last-open metadata missing/invalid | confirm owner |
| Medium | ✨Sales Management System: AI Autofill Client Health Score [AI] | shared/other owner | Finance | 4 | shared/other owner; last-open metadata missing/invalid | confirm owner |
| Medium | E-commerce After-sales Management (Resending, Refund, Medium and Negative Comments Processing ) | shared/other owner | DOE | 3 | shared/other owner; last-open metadata missing/invalid | confirm owner |
| Medium | E-commerce After-sales Management (Resending, Refund, Medium and Negative Comments Processing ) | shared/other owner | DOE | 3 | shared/other owner; last-open metadata missing/invalid | confirm owner |
| Medium | New Property Preparation | shared/other owner | Unknown | 3 | shared/other owner; last-open metadata missing/invalid | confirm owner |
| Medium | New Property Preparation | shared/other owner | Unknown | 3 | shared/other owner; last-open metadata missing/invalid | confirm owner |
| Medium | OKR Task Subdivision and Progress Control | shared/other owner | Unknown | 3 | shared/other owner; last-open metadata missing/invalid | confirm owner |
| Medium | OKR Task Subdivision and Progress Control | shared/other owner | Unknown | 3 | shared/other owner; last-open metadata missing/invalid | confirm owner |
| Medium | Order Management (With Inventory Management) | shared/other owner | DOE | 3 | shared/other owner; last-open metadata missing/invalid | confirm owner |
| Medium | Order Management (With Inventory Management) | shared/other owner | DOE | 3 | shared/other owner; last-open metadata missing/invalid | confirm owner |
| Medium | 准教练报名名单 | owned by AGA Tech Support | Class Bible | 3 | AGA-owned copy or working area; wiki-wrapped Base | confirm owner |
| Medium | 指引部门 | owned by AGA Tech Support | Unknown | 3 | AGA-owned copy or working area; last-open metadata missing/invalid | confirm owner |
| Medium | 🎉  New Year Objectives for 2022 | shared/other owner | Finance | 3 | shared/other owner; last-open metadata missing/invalid | confirm owner |
| Medium | 🎉  New Year Objectives for 2022 | shared/other owner | Finance | 3 | shared/other owner; last-open metadata missing/invalid | confirm owner |
| Medium | Business Analysis (Dashboard) | shared/other owner | Unknown | 2 | shared/other owner; last-open metadata missing/invalid | confirm owner |
| Medium | Course schedule | shared/other owner | Unknown | 2 | shared/other owner; last-open metadata missing/invalid | confirm owner |
| Medium | Course schedule | shared/other owner | Unknown | 2 | shared/other owner; last-open metadata missing/invalid | confirm owner |
| Medium | Daily Sales Amount Summary | shared/other owner | Finance | 2 | shared/other owner; last-open metadata missing/invalid | confirm owner |
| Medium | Event planning | shared/other owner | Finance | 2 | shared/other owner; last-open metadata missing/invalid | confirm owner |
| Medium | Event planning | shared/other owner | Finance | 2 | shared/other owner; last-open metadata missing/invalid | confirm owner |
| Medium | Personal Reading Record | shared/other owner | Finance | 2 | shared/other owner; last-open metadata missing/invalid | confirm owner |
| Medium | Personal Reading Record | shared/other owner | Finance | 2 | shared/other owner; last-open metadata missing/invalid | confirm owner |
| Medium | ✨直播间选品：AI 创作商品介绍 [AI] | shared/other owner | Unknown | 2 | shared/other owner; last-open metadata missing/invalid | confirm owner |
| Medium | ✨直播间选品：AI 创作商品介绍 [AI] | shared/other owner | Unknown | 2 | shared/other owner; last-open metadata missing/invalid | confirm owner |
| Medium | Client successes | shared/other owner | Finance | 1 | shared/other owner; last-open metadata missing/invalid | confirm owner |
| Medium | Client successes | shared/other owner | Finance | 1 | shared/other owner; last-open metadata missing/invalid | confirm owner |
| Medium | Employee information | shared/other owner | Finance | 1 | shared/other owner; last-open metadata missing/invalid | confirm owner |
| Medium | Employee information | shared/other owner | Finance | 1 | shared/other owner; last-open metadata missing/invalid | confirm owner |
| Medium | ✨Version Updates: AI Autofill Release Notes [AI] | shared/other owner | Unknown | 1 | shared/other owner; last-open metadata missing/invalid | confirm owner |
| Medium | ✨Version Updates: Autofill Release Notes [AI] | shared/other owner | Unknown | 1 | shared/other owner; last-open metadata missing/invalid | confirm owner |
| Medium | ✨产品版本管理：AI 撰写功能发行说明 [AI] | shared/other owner | Unknown | 1 | shared/other owner; last-open metadata missing/invalid | confirm owner |
| Medium | ✨产品版本管理：AI 智能填充发行说明 [AI] | shared/other owner | Unknown | 1 | shared/other owner; last-open metadata missing/invalid | confirm owner |
| Low | 100 Bible 19_12_22 | owned by AGA Tech Support | Class Bible, Backlog, Finance | 11 | AGA-owned copy or working area | confirm owner |
| Low | Dcode Sdn Bhd Portal | owned by AGA Tech Support | Portal | 11 | AGA-owned copy or working area | confirm owner |
| Low | 125 Bible | owned by AGA Tech Support | Class Bible, Backlog | 9 | AGA-owned copy or working area | confirm owner |
| Low | 126 Bible | owned by AGA Tech Support | Class Bible, Backlog | 9 | AGA-owned copy or working area | confirm owner |
| Low | 127 Bible | owned by AGA Tech Support | Class Bible, Backlog | 9 | AGA-owned copy or working area | confirm owner |
| Low | 128 Bible | owned by AGA Tech Support | Class Bible, Backlog, Finance | 9 | AGA-owned copy or working area | confirm owner |
| Low | 129 Bible | owned by AGA Tech Support | Class Bible, Backlog | 9 | AGA-owned copy or working area | confirm owner |
| Low | 129 - 宣告和总结 （学员) | owned by AGA Tech Support | DOE | 5 | AGA-owned copy or working area | confirm owner |
| Low | Finance Department | owned by AGA Tech Support | Finance | 4 | AGA-owned copy or working area | confirm owner |
| Low | Invoice management | owned by AGA Tech Support | Unknown | 4 | AGA-owned copy or working area | confirm owner |
| Low | Receipt management | owned by AGA Tech Support | Unknown | 4 | AGA-owned copy or working area | confirm owner |
| Low | Receipt management | owned by AGA Tech Support | Unknown | 4 | AGA-owned copy or working area | confirm owner |
| Low | Dcode Class Bible (NEW) | owned by AGA Tech Support | Class Bible | 3 | AGA-owned copy or working area | confirm owner |
| Low | MYCP Bible | owned by Dcode | Class Bible, Finance | 2 | last-open metadata missing/invalid | keep in inventory |
| Low | General Bible | owned by AGA Tech Support | Class Bible | 1 | AGA-owned copy or working area | confirm owner |
| Low | 团队进阶 | owned by Dcode | Call Center, Finance | 1 | last-open metadata missing/invalid | keep in inventory |
| Low | Dcode Sdn Bhd | owned by AGA Tech Support | Unknown | 0 | AGA-owned copy or working area | confirm owner |

## How To Use This

1. Start with Critical and High Bases, not all 129 at once.
2. For each priority Base, open the table list and label each table as `source`, `working`, `derived`, `reporting`, `legacy`, or `unknown`.
3. Map each table to the Dcode ontology object: student, registration, payment, class member, DOE, backlog, report, coach, or workflow.
4. Record whether the Base should be kept, cleaned, merged, archived, rebuilt, or moved into the ERP backend.
5. Use this screen as triage only; final decisions require field-level and record-level checks.

## Source

- [Inventory CSV](../data/inventory/dcode_aga_tech_support_lark_base_inventory_2026-05-28.csv)
