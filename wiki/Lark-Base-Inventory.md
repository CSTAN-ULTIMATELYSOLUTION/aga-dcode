# Lark Base Inventory

## What Was Done

The audit used the Dcode AGA TECH SUPPORT Lark account, not a personal account. The CLI was authorized for Base search, Wiki Base resolution, Base metadata reads, and table-list reads.

Search areas included:

- Dcode
- DOE
- Class Bible
- Backlog
- Call Center
- Finance
- Portal
- Operation

## Inventory Results

| Metric | Count |
|---|---:|
| Raw search hits | 239 |
| Deduped Base candidates | 129 |
| Readable Bases | 129 |
| Failed or partial access | 0 |
| Owned by AGA Tech Support | 58 |
| Owned by Dcode | 29 |
| Shared or other owner | 42 |
| Wiki-wrapped Bases resolved | 20 |

## Important Bases

| Area | Example Base | Why It Matters |
|---|---|---|
| Class Bible | `D.136 Class Bible. (admin dcode)` | Current CP136 operational data and reporting lists. |
| Class Bible | `D.137 Class Bible. (admin dcode)` | Similar newer cohort structure for comparison. |
| DOE | `CP135-DOE`, `CP136-DOE`, `CP137-DOE` | Declaration, challenge, scoring, and result logic. |
| Backlog | `客服 Backlog`, `Dcode Backlog` | Handles current/backlog/consumed/leave states. |
| Call Center | `Call Center (Dcode)` | Follow-up and form-driven customer service workflow. |
| Finance | `Finance`, `Finance 2.0` | Payment and finance-related class tracking. |
| Portal | `Dcode Sdn Bhd Portal` | Portal structure and system-level tables. |

## Source Files

- [Inventory CSV](../data/inventory/dcode_aga_tech_support_lark_base_inventory_2026-05-28.csv)
- [Inventory JSON](../data/inventory/dcode_aga_tech_support_lark_base_inventory_2026-05-28.json)
- [Boss update](../docs/boss-updates/dcode_aga_tech_support_lark_base_update_2026-05-28.md)

## Related Screen

- [Lark Base Weakness Screen](Lark-Base-Weakness-Screen.md): first-pass risk screen across all 129 readable Bases.
