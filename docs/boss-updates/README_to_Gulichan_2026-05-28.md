# May 28 Update To Gulichan

Hi Gulichan, today I completed the Lark Base access and inventory work using the Dcode AGA TECH SUPPORT account, not my personal account.

## What I Did Today

- Logged in and authorized the Dcode AGA TECH SUPPORT Lark account for CLI access.
- Searched relevant Dcode Bases using keywords: Dcode, DOE, Class Bible, Backlog, Call Center, Finance, Portal, and Operation.
- Found 239 raw search hits and deduped them into 129 visible Base candidates.
- Confirmed all 129 Bases are readable through Lark CLI.
- Classified ownership: 58 owned by AGA Tech Support, 29 owned by Dcode, and 42 shared/other owner.
- Resolved 20 wiki-wrapped Bases successfully.
- Deep-audited `D.136 Class Bible. (admin dcode)` as the first example Base.
- For `D.136 Class Bible. (admin dcode)`, extracted 26 tables, 2,409 fields, 157 views, and 0 forms.
- Started the business logic mapping for DOE, Class Bible, Call Center, Finance, and Backlog.

## Important Finding

`D.136 Class Bible. (admin dcode)` should be deeply audited because it combines the main Class Bible data, masterlists, final lists, backlog/leave handling, DOE/declaration logic, grading, registration, and result tables. This is exactly the type of Base where we need to identify source-of-truth versus reporting/derived tables.

## Files Included

- `dcode_aga_tech_support_lark_base_boss_update_2026-05-28.md`
- `dcode_aga_tech_support_lark_base_inventory_2026-05-28.csv`
- `dcode_aga_tech_support_lark_base_inventory_2026-05-28.json`
- `dcode_aga_d136_class_bible_deep_audit_2026-05-28.md`
- `dcode_aga_d136_class_bible_deep_tables_2026-05-28.csv`
- `dcode_aga_d136_class_bible_deep_audit_2026-05-28.json`
- `dcode_business_logic_mapping_starter_2026-05-28.md`

## Pending / Next

- Dashboard and workflow extraction still need extra Lark scopes: `base:dashboard:read` and `base:workflow:read`.
- After that, I can finish mapping automations and dashboards into the system document.
- Next phase should confirm which Bases are in scope, then map each table as source, working, derived, reporting, or legacy.

## Suggested Next Question

Which Bases should be phase-2 audited first: Class Bible, DOE, Call Center, Finance, or Backlog?
