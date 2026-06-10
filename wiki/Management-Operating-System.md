# Management Operating System

## Purpose

This page explains how to manage the audit and turn it into a living operating system for Dcode.

The goal is not only to clean files. The goal is to make every important business number traceable to a source, owner, workflow, and decision.

## Operating Cadence

| Cadence | Meeting | Output |
|---|---|---|
| Daily during audit | Data discovery standup | What was mapped, what is blocked, what needs owner confirmation. |
| Twice weekly | Business logic interview | Answer question bank sections with process owners. |
| Weekly | Source-of-truth review | Approve table and field ownership decisions. |
| Weekly | Workflow registry review | Approve workflow owners, triggers, statuses, and report impact. |
| Monthly | Leadership metrics review | Approve report definitions and resolve metric disputes. |

## Audit Phases

| Phase | Name | Goal | Output |
|---|---|---|---|
| 1 | Inventory | Find all relevant Bases. | Base inventory and access status. |
| 2 | Structure Audit | Extract tables, fields, views, forms, dashboards, workflows. | Schema catalog. |
| 3 | Business Interview | Ask ordered logic questions. | Answered question bank. |
| 4 | Ontology Mapping | Define objects, relationships, and states. | Ontology and state model. |
| 5 | Source-Of-Truth Mapping | Assign authority for each object and field. | Source-of-truth registry. |
| 6 | Workflow Registry | Name and document workflows. | Workflow registry. |
| 7 | Report Registry | Map reports to sources and filters. | Report lineage and inclusion rules. |
| 8 | Cleanup Plan | Decide what to keep, merge, archive, or rebuild. | Migration and governance plan. |

## Roles

| Role | Responsibility |
|---|---|
| Executive Sponsor | Resolves business-rule conflicts and approves final definitions. |
| Business Owner | Owns correctness of a process, such as DOE, finance, or support. |
| Data Owner | Owns schema, source-of-truth, and change control. |
| Operations Lead | Explains class and cohort execution. |
| Coach Ops Lead | Explains coach assignment and coach outcomes. |
| Support Lead | Explains call center, confirmation, risk, and backlog handling. |
| Finance Lead | Explains payment, invoice, receipt, refund, and transfer logic. |
| Technical Auditor | Extracts Lark metadata and builds lineage maps. |

## Management Artifacts

| Artifact | Location | Owner |
|---|---|---|
| Question Bank | [Business Logic Question Bank](Business-Logic-Question-Bank.md) | Technical Auditor + Business Owners |
| Ontology | [Ontology Analysis](Ontology-Analysis.md) | Data Owner |
| Business DNA | [Business DNA](Business-DNA.md) | Executive Sponsor |
| Workflow Registry | [Workflow Registry](Workflow-Registry.md) | Operations + Data Owner |
| Base Inventory | [Lark Base Inventory](Lark-Base-Inventory.md) | Technical Auditor |
| D.136 Deep Audit | [D.136 Class Bible Audit](D136-Class-Bible-Audit.md) | Technical Auditor |

## How To Manage A Messy Base

For each Base, complete this sequence:

1. Identify the business area: Class Bible, DOE, Backlog, Call Center, Finance, or Portal.
2. List all tables.
3. Label each table as `source`, `working`, `derived`, `reporting`, or `legacy`.
4. Identify the business object represented by each table.
5. Identify fields that represent identity, status, payment, result, owner, and timestamp.
6. Identify views that function as reports.
7. Identify formulas and lookups that create derived truth.
8. Identify manual-edit fields and protected fields.
9. Map each table to one or more workflows.
10. Map each final report to its upstream source tables.
11. Record open questions.
12. Get process-owner approval.

## Decision Rules

| Situation | Management Rule |
|---|---|
| Two tables have the same people | Choose one source; label the other derived, reporting, or legacy. |
| Two teams disagree on a number | Trace the number to source, filter, and inclusion rules. |
| A copied table is actively edited | Decide whether it is actually working data or stop manual edits. |
| A report includes backlog | State which backlog statuses are included. |
| A report excludes leave cases | State which leave statuses are excluded. |
| Finance and operations conflict | Finance owns money truth; operations owns class participation truth. |
| DOE and Class Bible conflict | Identify whether the dispute is identity, cohort, level, or result. |

## First 30-Day Plan

| Week | Focus | Output |
|---|---|---|
| Week 1 | D.136 table role mapping | Every D.136 table labeled and questioned. |
| Week 2 | D.136 workflow registry | Registration, class entry, backlog, DOE, final list workflows mapped. |
| Week 3 | CP136 DOE and Finance linkage | DOE and payment source-of-truth mapped to Class Bible. |
| Week 4 | Report definitions | Leadership reports mapped to source tables and inclusion rules. |

