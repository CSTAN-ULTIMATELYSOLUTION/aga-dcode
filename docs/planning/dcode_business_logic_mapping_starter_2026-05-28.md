# Dcode Business Logic Mapping Starter - May 28, 2026

## Purpose

This document is the starter system map requested after the May 26 meeting. The goal is to turn the Lark Bases into a clear business/system document, so Gulichan can see which Base/table is source data, which table is reporting, and where DOE, Class Bible, Call Center, Finance, and Backlog logic connects.

## Current Evidence

- Inventory was run using the Dcode AGA TECH SUPPORT Lark account.
- 129 deduped visible Bases were found and all 129 were readable.
- Key example deep-audited Base: `D.136 Class Bible. (admin dcode)`.
- For `D.136 Class Bible. (admin dcode)`, extracted 26 tables, 2,409 fields, 157 views, and 0 forms.
- Dashboard/workflow extraction still needs `base:dashboard:read` and `base:workflow:read` authorization.

## Business Areas To Map

| Area | What It Likely Controls | Example Bases / Tables | Why It Matters |
|---|---|---|---|
| Class Bible | Student and coach master data, class status, attendance/category fields, final lists | Dcode Class Bible, D.136 Class Bible, D.137 Class Bible, student/coach NEWBIBLE tables | This is likely the source-of-truth for who belongs to each class/cohort. |
| DOE | Declaration, challenge, result, weekly plan, achievement/reporting logic | CP135/136/137 DOE Bases, DOE declaration tables inside Class Bible | Boss needs to know which DOE result comes from which table and how people are counted. |
| Call Center | Contact workflow, customer service/backlog follow-up, EMO/basic/high-level forms | Call Center (Dcode), 客服 Backlog | Connects operational follow-up to Class Bible records. |
| Finance | Payments, invoices, class payment tracking, finance-related Bible tables | Finance, Finance 2.0, Finance-related tables | Needed to verify payment/result/reporting consistency. |
| Backlog | People not yet moved forward, old backlog into current list, after-rules leave cases | Backlog tables, 旧Backlog, 高阶Backlog, 守则后离开 tables | This is the key ambiguity Gulichan mentioned: who should count in reports and who should not. |

## Proposed System Logic Map

1. Class Bible should be mapped first as the main person/class layer.
2. DOE should map to Class Bible by cohort and person identity, not by manual copy.
3. Call Center should map to Class Bible as follow-up/status actions.
4. Finance should map to Class Bible as payment/transaction status.
5. Backlog should be treated as a lifecycle state, not a separate disconnected list.
6. Final report tables should clearly identify whether they include current class, backlog, and after-rules-leave records.

## D.136 Class Bible Initial Mapping

| Table Group | Count | Interpretation |
|---|---:|---|
| Bible core | 4 | Main student/coach source tables and Bible-related tables. |
| Masterlist / final list | 9 | Derived or reporting lists across stages. Needs source-of-truth check. |
| DOE / declaration | 5 | Declaration/outcome logic linked to class journey. |
| Scoring / grading | 2 | Grade ABC / EMO scoring or segmentation. |
| Backlog / transition | 1 | Explicit backlog handling. |
| Registration | 1 | Course registration intake. |
| Coach roster | 1 | Coach list / center roster. |
| Result / outcome | 1 | Result table, likely used for reporting. |
| Summary / aggregation | 1 | Summary table, likely derived. |

## Recommended Phase 2

- For each priority Base, label each table as `source`, `working`, `derived`, `reporting`, or `legacy`.
- For each table, extract fields, views, formulas, lookups, record counts, and key filters.
- Build one flow diagram: Class Bible -> Call Center -> Backlog -> DOE -> Finance -> Final Report.
- Confirm with Gulichan which report should include current class, backlog, and after-rules-leave records.
- After dashboard/workflow scopes are authorized, extract automation and dashboard logic to complete the system document.
