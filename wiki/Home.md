# Dcode Wiki Home

## What This Wiki Is For

Use this wiki to answer one question:

> What is Dcode's real operating model, and how should the localhost demo represent it?

The main conclusion so far:

- `Class Bible` is not one clean object. It is a mixed Lark operating container.
- The clean demo should be based on objects like Student, Registration, Payment, Class Membership, DOE, Backlog, Report, and Source Mapping.
- The 2026-05-29 active Base audit found `0` confirmed Lark workflows/automations, so current Dcode workflow should be shown as manual gates, approvals, status changes, and reports first.

## Read These First

1. [Dcode Ontology Operating Model](Dcode-Ontology-Operating-Model.md)  
   The clearest object model. Use this before changing the demo.

2. [Dcode Object Lifecycles And Workflows](Dcode-Object-Lifecycles-And-Workflows.md)  
   Lifecycle states for each object and the workflow catalogue from registration to DOE, backlog, reporting, and governance.

3. [Dcode Demo Full Cycle Test Plan](Dcode-Demo-Full-Cycle-Test-Plan.md)  
   How to adjust localhost and prove the full Dcode lifecycle with real-life test cases.

4. [Dcode Admin Portal Concept](Dcode-Admin-Portal-Concept.md)  
   What the localhost admin portal should become.

5. [Dcode Canonical Source Of Truth Schema](Dcode-Canonical-Source-Of-Truth-Schema.md)  
   Clean backend/data model behind the demo.

6. [Business Logic Map](Business-Logic-Map.md)  
   Short map of how Class Bible, DOE, Backlog, Call Center, and Finance connect.

## Current Demo Direction

The localhost demo should make these flows clear first:

1. Registration creates `Person + Student + Registration`.
2. Finance approval gates class entry.
3. Student status changes require evidence and approval.
4. Class Membership is separate from Student.
5. Phase Participation tracks Basic, 高一, 高二, 高三, 高四.
6. DOE starts around advanced phase / 高二.
7. Backlog is a lifecycle case with recovery or closure.
8. Reports must explain why each student is included or excluded.
9. Source Base and Source Table labels show where data came from.

## Useful Reference

- [Workflow Registry](Workflow-Registry.md): older workflow registry; useful as background, but the newer lifecycle/workflow page is clearer.
- [Business Logic Question Bank](Business-Logic-Question-Bank.md): questions to ask Dcode leadership/PIC when logic is unclear.
- [D136 Table Role Audit](D136-Table-Role-Audit.md): table role labels for the first model Base.
- [D136 Field Duplication Analysis](D136-Field-Duplication-Analysis.md): repeated field/table problems to avoid copying into the ERP.
- [Lark Base Weakness Screen](Lark-Base-Weakness-Screen.md): risk screen of readable Bases.
- [Lark Base Inventory](Lark-Base-Inventory.md): account/Base inventory.

## Archive / Deep Detail

These files are not the first read. Keep them only when deeper evidence is needed:

- [Now Next Plan](Now-Next-Plan.md)
- [Management Operating System](Management-Operating-System.md)
- [Dcode AI-Native ERP Project Charter](Dcode-AI-Native-ERP-Project-Charter.md)
- [Business DNA](Business-DNA.md)
- [Ontology Analysis](Ontology-Analysis.md)
- [D136 Class Bible Audit](D136-Class-Bible-Audit.md)
- [D136 Field Dictionary](D136-Field-Dictionary.md)
- [D136 Field Inventory](D136-Field-Inventory.md)

## Caveats

- Dashboard/form/workflow metadata may be incomplete if Lark permissions are missing.
- The active Base audit pack from 2026-05-29 is the best current evidence for Base/table counts.
- Do not treat copied masterlists or final reports as source truth until approved by Dcode.
