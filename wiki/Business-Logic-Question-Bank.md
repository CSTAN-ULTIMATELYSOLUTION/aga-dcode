# Business Logic Question Bank

## Purpose

Use this ordered question bank to extract the complete business logic of the Dcode education platform from founders, operations, coaches, finance, support, and data owners.

The questions are ordered so the team can move from business identity to data truth, then from student journey to reporting and automation.

## 1. Company And Education Model

1. What is Dcode's core education promise to a learner?
2. What transformation is the platform expected to deliver?
3. What are the main programs, courses, or levels?
4. What is the difference between 基础, 高阶一, 高阶二, 高三, 高四, and DOE?
5. Which programs are mandatory, optional, repeated, or advanced?
6. What does a complete learner journey look like from lead to graduate?
7. Which outcomes does the company care about most: attendance, completion, declaration, business result, payment, transformation, referral, or retention?
8. What does the company consider a successful cohort?
9. What does the company consider a failed or risky cohort?
10. Which teams own education delivery, sales, support, finance, DOE, and reporting?

## 2. Person Identity And Master Data

1. What is the unique identity of a learner?
2. What is the unique identity of a coach?
3. Can one person be both learner and coach?
4. Can one person join multiple cohorts?
5. Can one person repeat the same level?
6. What fields are required to identify a person reliably?
7. Which table is the source of truth for learner name, phone, email, class, and level?
8. Which table is the source of truth for coach identity and assignment?
9. How are Chinese name, English name, phone number, and Lark identity normalized?
10. What happens when duplicate person records are found?

## 3. Cohort, Class, And Level Structure

1. What is a cohort, for example CP136 or CP137?
2. What is the naming rule for cohorts?
3. What is the difference between CP, KLCP, MYCP, and other cohort prefixes?
4. What is the relationship between cohort, course level, class date, and center?
5. Can a learner move from one cohort to another?
6. Can a learner be active in multiple levels at once?
7. Which table defines current cohort membership?
8. Which table defines historical cohort membership?
9. Which table defines final cohort results?
10. What is the rule for closing a cohort?

## 4. Learner Lifecycle

1. What statuses can a learner have before joining class?
2. What statuses can a learner have during class?
3. What statuses can a learner have after class?
4. What does 已进课室 mean operationally?
5. What does 已消耗 mean operationally?
6. What does Backlog mean operationally?
7. What does 守则后离开 mean operationally?
8. What does 下车 mean operationally?
9. What does 转款 or 转名额 mean operationally?
10. What status controls whether a learner is counted in final reports?
11. What status controls whether support should continue follow-up?
12. What status controls whether finance should expect payment?

## 5. Coach Lifecycle

1. How does a coach enter the system?
2. How is a coach assigned to a cohort?
3. How is a coach assigned to learners?
4. Can a coach serve multiple cohorts at the same time?
5. What coach statuses exist?
6. What does coach DOE mean?
7. What coach performance metrics are tracked?
8. Which table is the source of truth for coach roster?
9. Which table is the source of truth for coach result or grading?
10. What coach data should be visible to operations, DOE, finance, and leadership?

## 6. Registration And Intake

1. Where does registration data originate?
2. Which forms feed course registration tables?
3. Who verifies registration?
4. What fields are mandatory before a learner can enter class?
5. What is the approval or confirmation process?
6. How are incomplete registrations handled?
7. How are transfers handled?
8. How are cancellations handled?
9. How does registration connect to payment?
10. How does registration connect to Class Bible?

## 7. Call Center And Support

1. What does the Call Center own?
2. What support actions happen before class?
3. What support actions happen during class?
4. What support actions happen after class?
5. Which follow-up statuses exist?
6. Which support fields should update the learner master record?
7. Which support fields are only operational notes?
8. What is the escalation path when a learner is risky, unreachable, unpaid, or wants to leave?
9. Which tables should support staff edit directly?
10. Which tables should support staff never edit?

## 8. DOE And Declaration Logic

1. What is DOE in business terms?
2. Which course levels require DOE?
3. What is a declaration?
4. What is a daily declaration?
5. What is a weekly plan?
6. What is a DOE result?
7. Which tables capture raw DOE submissions?
8. Which tables calculate DOE summary results?
9. Which tables are final DOE reports?
10. What formulas or scoring rules determine DOE success?
11. How does DOE connect to Class Bible records?
12. How does DOE connect to coach assignment?

## 9. Grading, EMO, And Segmentation

1. What does EMO mean in this operating system?
2. What is Grade ABC?
3. Who assigns Grade ABC?
4. What is the difference between EMO grade and coach-filled grade?
5. What fields determine grade?
6. Is grade subjective, formula-based, or both?
7. Where is the final grade stored?
8. Which reports depend on grade?
9. Can grade change over time?
10. Who is allowed to change grade?

## 10. Finance And Payment Logic

1. What products or fees exist?
2. What payment statuses exist?
3. What is the source of truth for payment received?
4. What is the source of truth for invoice issued?
5. What is the source of truth for receipt issued?
6. How are deposits, balances, hotel fees, miscellaneous fees, and transfers tracked?
7. What does paid but not active mean?
8. What does active but unpaid mean?
9. How does finance status affect class entry?
10. How does finance status affect final reporting?

## 11. Backlog And Transition Logic

1. What creates a backlog record?
2. Who owns backlog follow-up?
3. What statuses exist inside backlog?
4. When does backlog become current class?
5. When does current class become backlog?
6. When is backlog considered consumed?
7. When is backlog considered lost or closed?
8. Which backlog table is source of truth?
9. Which backlog tables are copied reports?
10. Should backlog records appear in final masterlists?
11. Should backlog records appear in finance reports?
12. Should backlog records appear in DOE reports?

## 12. Reporting And Dashboard Logic

1. What reports does leadership rely on weekly?
2. What reports does operations rely on daily?
3. What reports does finance rely on?
4. What reports does support rely on?
5. What reports does DOE rely on?
6. Which Base/table/view powers each report?
7. What are the inclusion and exclusion rules for each report?
8. Which reports include backlog?
9. Which reports exclude after-rules-leave records?
10. Which reports should be cohort-based versus person-based?
11. Which report numbers are currently disputed?
12. Who approves final report definitions?

## 13. Data Ownership And Governance

1. Who owns each Base?
2. Who owns each table?
3. Who owns each critical field?
4. Which tables are allowed to be edited manually?
5. Which tables should be generated only by formula, lookup, workflow, or import?
6. Which fields are protected?
7. What is the process for schema changes?
8. What is the process for adding a new cohort?
9. What is the process for archiving an old cohort?
10. What is the process for deleting or merging duplicate records?

## 14. Automation And Workflow

1. Which actions are manual today?
2. Which actions are automated by Lark workflow?
3. Which actions are automated by formulas or lookups?
4. Which actions are automated outside Lark?
5. What triggers each workflow?
6. What record does each workflow create, update, or notify?
7. Who receives workflow notifications?
8. What can fail silently?
9. What should never be automated?
10. Which workflows need audit logs?

## 15. System Boundaries

1. Which parts of the platform live in Lark Base?
2. Which parts live in Lark Docs, Sheets, Minutes, or Wiki?
3. Which parts live outside Lark?
4. Which systems push data into Lark?
5. Which systems pull data from Lark?
6. Where are files, recordings, receipts, and evidence stored?
7. Which data should be exported?
8. Which data should never leave Lark?
9. Which integration has highest operational risk?
10. Which process breaks if Lark access changes?

## 16. Completion Criteria

The business logic audit is complete only when these questions can be answered for every critical process:

1. What is the source record?
2. Who owns it?
3. Who can edit it?
4. What lifecycle state does it represent?
5. Which workflow creates it?
6. Which workflow changes it?
7. Which reports consume it?
8. Which fields are calculated?
9. Which fields are manually entered?
10. Which fields are copied from another table?
11. What is the exception path?
12. What is the final business decision made from this data?

