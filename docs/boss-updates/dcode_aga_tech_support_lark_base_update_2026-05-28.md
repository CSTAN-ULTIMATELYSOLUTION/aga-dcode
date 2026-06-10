# Dcode AGA Tech Support Lark Base Access & Inventory Update - May 28, 2026

## Message to 

I reran the May 28 Base access inventory using the Dcode AGA Tech Support Lark account, not the personal account.

Current status:
- Lark CLI user access is working for the AGA TECH SUPPORT account for search, Wiki Base resolution, Base metadata, and table-list reads.
- I searched owned Bases plus keyword groups: Dcode, DOE, Class Bible, Backlog, Call Center, Finance, Portal, and Operation.
- Raw search hits collected: 239; deduped visible Base candidates: 129.
- Readable through CLI: 129; failed/partial access: 0.
- Ownership split: 58 owned by AGA Tech Support, 29 owned by Dcode, 42 shared/other owner.
- Wiki-wrapped Bases resolved/tested: 20.
- Login note: the account was incrementally authorized for `base:app:read`, `wiki:node:read`, and `base:table:read` after the first searchable-only pass showed missing scopes.
- Meeting-note caveat: the local DOCX says the meeting was on May 26, 2026 at 15:55:40 CST and lasted 54m 27s, but the locally extractable transcript text only reaches around 25:25. If the full Lark Minutes transcript exists, it should be retrieved before doing the deeper business-logic audit.

Verified examples:
- [Dcode Sdn Bhd Portal](https://zsggz2p1btda.sg.larksuite.com/base/KZfGbYq0QaQ4sJsKiCLl4i3igWb): readable, 11 tables. Tables: System List, Table List, Milestones List, Enquiry List, Clarification List, Meeting List, Module List, Flow List, +3 more.
- [Dcode Class Bible (NEW)](https://zsggz2p1btda.sg.larksuite.com/base/RXedblJx8a3dkssOyRhlX0xZgEM): readable, 3 tables. Tables: ✅✅学员-NEWBIBLE_（Dcode), ✅✅教练-NEWBIBLE_（Dcode), ✅✅WHOLE-MASTERLIST【基础-高四】.
- [D.137 Class Bible. (admin dcode) ](https://zsggz2p1btda.sg.larksuite.com/base/EuSDbyrP9aI05asV0gPlwYOHgpf): readable, 28 tables. Tables: ✅✅137学员-NEWBIBLE_（Dcode), 总结合, Grade ABC【EMO】, Grade ABC【教练填】, ✅教练名单（中心）, ✅✅137教练-NEWBIBLE_（Dcode), ✅课程报名, ✅✅137-WHOLE-MASTERLIST【基础-高四】, +20 more.
- [CP135-DOE （学员&教练）  ](https://zsggz2p1btda.sg.larksuite.com/base/PhYnbXigRaHMHCsqXWwleXlagZd): readable, 32 tables. Tables: 🔥135-事业挑战, Dcode资料库, 135个人资料, ✅135-高二工作坊DOE宣告（开班前）, ✅B5.2-【周计划表】, ✅C1-135--教练-SUMMARY DOE, ✅C2-135-教练- SUMMARY DOE Form, ✅A0-133高一-10天宣告, +24 more.
- [客服 Backlog](https://zsggz2p1btda.sg.larksuite.com/base/V6SSbZXH2alyQhs5Rv4lD006gKf): readable, 5 tables. Tables: KLCP136 客服Summary - 136 Bible, KLCP137 客服Summary - 136 Bible, ✅✅136教练-NEWBIBLE_（Dcode), ✅✅136学员-NEWBIBLE_（Dcode), ✅.Dcode海星_基础Whole Bible.
- [Call Center （Dcode)](https://zsggz2p1btda.sg.larksuite.com/base/UzEcb657ZaUnumsm5g1lurAWgkb): readable, 13 tables. Tables: ✅EMO FORM - 学员, ✅EMO FORM - 教练, ✅基础问卷, ✅高阶问卷, 海星名单-学员(KLCP120), 海星名单-教练(KLCP120), ✅128-教练-NEWBIBLE, ✅128-学员-NEWBIBLE, +5 more.
- [Finance](https://zsggz2p1btda.sg.larksuite.com/base/LOEibcDpFa11wHs8M89ltA98gfc): readable, 19 tables. Tables: 124 海星名单-学员 (bible), 124 海星名单-教练 (bible), 124 高二挑战, 125 海星名单-学员 (bible), 125 海星名单-教练 (bible), 125 高二挑战, 126 海星名单-学员 (bible), 126 海星名单-教练 (bible), +11 more.

Next: Use this inventory for Gulichan to confirm which Bases are truly in scope. Phase 2 can extract deeper schema details such as fields, views, forms, dashboards, workflows, and business logic mapping.

## Inventory Summary

| Metric | Count |
|---|---:|
| Raw search hits | 239 |
| Deduped candidates | 129 |
| Readable | 129 |
| Failed/partial | 0 |
| Owned by AGA Tech Support | 58 |
| Owned by Dcode | 29 |
| Shared/other owner | 42 |
| Wiki-wrapped | 20 |

## Readable Inventory

| Base | Owner | Access | Tables | Updated | Source |
|---|---|---|---:|---|---|
| [CP135-DOE （学员&教练）  ](https://zsggz2p1btda.sg.larksuite.com/base/PhYnbXigRaHMHCsqXWwleXlagZd) | Dcode Sdn Bhd | owned by Dcode | 32 | 2026-05-28T21:21:45+08:00 | keyword_DOE |
| [CP136-DOE （学员&教练）  ](https://zsggz2p1btda.sg.larksuite.com/base/JS92bpyyCaaDrUskBH7la2kGgQc) | Dcode Sdn Bhd | owned by Dcode | 36 | 2026-05-28T21:17:54+08:00 | keyword_DOE |
| [CP137-DOE 【学员&教练】](https://zsggz2p1btda.sg.larksuite.com/base/AlKxbd35laCJlQsAZF2lUvp3gvg) | Dcode Sdn Bhd | owned by Dcode | 34 | 2026-05-28T20:49:29+08:00 | keyword_DOE |
| [客服 Backlog](https://zsggz2p1btda.sg.larksuite.com/base/V6SSbZXH2alyQhs5Rv4lD006gKf) | AGA TECH SUPPORT | owned by AGA Tech Support | 5 | 2026-05-28T18:38:36+08:00 | keyword_Backlog, owned_by_me |
| [D.136 Class Bible. (admin dcode)    ](https://zsggz2p1btda.sg.larksuite.com/base/GGPiba6WEaG1hCsrpJIlJO3bgDb) | Dcode Sdn Bhd | owned by Dcode | 26 | 2026-05-28T17:44:34+08:00 | keyword_Class_Bible, keyword_Dcode |
| [D.137 Class Bible. (admin dcode) ](https://zsggz2p1btda.sg.larksuite.com/base/EuSDbyrP9aI05asV0gPlwYOHgpf) | Dcode Sdn Bhd | owned by Dcode | 28 | 2026-05-28T16:02:09+08:00 | keyword_Class_Bible, keyword_Dcode |
| [135 Class Bible. (admin dcode)   ](https://zsggz2p1btda.sg.larksuite.com/base/Zd8abS0C3agSNnsNHpKlNoXOg7d) | Dcode Sdn Bhd | owned by Dcode | 33 | 2026-05-28T12:53:02+08:00 | keyword_Class_Bible, keyword_Dcode |
| [旧的版本CP137-DOE （学员&教练）   ](https://zsggz2p1btda.sg.larksuite.com/base/NZ83bt1qma8tLLsdUPhlVtcSg3b) | Dcode Sdn Bhd | owned by Dcode | 21 | 2026-05-28T12:17:08+08:00 | keyword_DOE |
| [CP133-DOE （学员&教练） ](https://zsggz2p1btda.sg.larksuite.com/base/RZ1tbEuUIaEffPsTx9plXZerg3g) | Dcode Sdn Bhd | owned by Dcode | 24 | 2026-05-25T12:10:03+08:00 | keyword_DOE |
| [131-DOE （学员） ](https://zsggz2p1btda.sg.larksuite.com/base/MnxpbEYoeaR6SwswtDflTptSgTg) | Dcode Sdn Bhd | owned by Dcode | 17 | 2026-05-18T20:21:06+08:00 | keyword_DOE |
| [团队进阶](https://zsggz2p1btda.sg.larksuite.com/base/BWThbrBVTafa26sM2WelD3Flggc) | Dcode Sdn Bhd | owned by Dcode | 1 | 2026-05-12T12:29:31+08:00 | keyword_Call_Center, keyword_Dcode, keyword_Finance, keyword_Operation |
| [133 Class Bible (admin dcode)](https://zsggz2p1btda.sg.larksuite.com/base/HgQgbfusTawotLsd80el5GSUguc) | Dcode Sdn Bhd | owned by Dcode | 19 | 2026-05-12T11:14:59+08:00 | keyword_Class_Bible, keyword_Dcode |
| [133-DOE （教练）](https://zsggz2p1btda.sg.larksuite.com/base/FktOb9NnfaqZI7sOOdxlBTaTg1b) | AGA TECH SUPPORT | owned by AGA Tech Support | 19 | 2026-05-06T13:46:57+08:00 | keyword_DOE, owned_by_me |
| [Dcode Backlog](https://zsggz2p1btda.sg.larksuite.com/base/C87nb9eQtaa2M7smtG8lpYRogRh) | Dcode Sdn Bhd | owned by Dcode | 18 | 2026-04-22T20:45:23+08:00 | keyword_Backlog, keyword_Dcode |
| [不用旧版本-KLCP136-DOE （学员&教练） ](https://zsggz2p1btda.sg.larksuite.com/base/BqefbwbPPa5OsPs6zZglCtm4g9b) | Dcode Sdn Bhd | owned by Dcode | 21 | 2026-04-18T22:07:47+08:00 | keyword_DOE |
| [Call Center （Dcode)](https://zsggz2p1btda.sg.larksuite.com/base/UzEcb657ZaUnumsm5g1lurAWgkb) | Dcode Sdn Bhd | owned by Dcode | 13 | 2026-04-16T17:08:39+08:00 | keyword_Call_Center, keyword_Dcode |
| [CP132-DOE （教练） ](https://zsggz2p1btda.sg.larksuite.com/base/YXe1bLk9CalgCfsQOXOlLisHgod) | Dcode Sdn Bhd | owned by Dcode | 18 | 2026-04-16T14:49:32+08:00 | keyword_DOE |
| [CP132-DOE （学员）  ](https://zsggz2p1btda.sg.larksuite.com/base/VXp9bWOoIa9OmbsmMprlRUkJgZf) | Dcode Sdn Bhd | owned by Dcode | 16 | 2026-04-15T18:27:41+08:00 | keyword_DOE |
| [Dcode Class Bible (NEW)](https://zsggz2p1btda.sg.larksuite.com/base/RXedblJx8a3dkssOyRhlX0xZgEM) | AGA TECH SUPPORT | owned by AGA Tech Support | 3 | 2026-04-13T15:05:54+08:00 | keyword_Class_Bible, keyword_Dcode, owned_by_me |
| [Dcode Sdn Bhd](https://zsggz2p1btda.sg.larksuite.com/app/HyxAbrOGna0O83sAosOlwfbfgDM) | AGA TECH SUPPORT | owned by AGA Tech Support | 0 | 2026-04-13T02:48:36+08:00 | keyword_Dcode, owned_by_me |
| [132 Class Bible (admin dcode) ](https://zsggz2p1btda.sg.larksuite.com/base/BhzEbw2BvaQBsmsfGIxlu75Xgag) | Dcode Sdn Bhd | owned by Dcode | 20 | 2026-04-08T19:31:41+08:00 | keyword_Class_Bible, keyword_Dcode |
| [Call Center （Dcode) 副本](https://zsggz2p1btda.sg.larksuite.com/base/FpTubI6WnaTI7MsysOQl5pWRg9c) | Dcode Sdn Bhd | owned by Dcode | 13 | 2026-04-03T17:33:58+08:00 | keyword_Call_Center, keyword_Dcode |
| [Dcode Sdn Bhd Portal](https://zsggz2p1btda.sg.larksuite.com/base/KZfGbYq0QaQ4sJsKiCLl4i3igWb) | AGA TECH SUPPORT | owned by AGA Tech Support | 11 | 2026-03-24T00:24:11+08:00 | keyword_Dcode, keyword_Portal, owned_by_me |
| [138 Class Bible (admin dcode)](https://zsggz2p1btda.sg.larksuite.com/base/FnDObKXysaVFqssVRxTlXXmfgAh) | Dcode Sdn Bhd | owned by Dcode | 17 | 2026-03-20T00:13:16+08:00 | keyword_Class_Bible, keyword_Dcode |
| [130-DOE （教练）](https://zsggz2p1btda.sg.larksuite.com/base/IxVlbvbeRajkGosp8LtlvF2BgYf) | Dcode Sdn Bhd | owned by Dcode | 24 | 2026-02-28T16:21:28+08:00 | keyword_DOE |
| [131 Class Bible (admin dcode)](https://zsggz2p1btda.sg.larksuite.com/base/AEVobnC89aFMlbsiuhRlTphIgqf) | Dcode Sdn Bhd | owned by Dcode | 17 | 2026-02-25T23:13:46+08:00 | keyword_Class_Bible, keyword_Dcode |
| [129-DOE （学员）](https://zsggz2p1btda.sg.larksuite.com/base/SUObboOHQaSHZxsqVOKlyXDfgVg) | AGA TECH SUPPORT | owned by AGA Tech Support | 14 | 2026-02-13T14:45:46+08:00 | keyword_DOE, owned_by_me |
| [137 Class Bible. (admin dcode)   ](https://zsggz2p1btda.sg.larksuite.com/base/UUalbXCbQapcVfsF5UwltigcgNf) | Dcode Sdn Bhd | owned by Dcode | 17 | 2026-02-10T20:07:43+08:00 | keyword_Class_Bible, keyword_Dcode |
| [131-DOE （教练）](https://zsggz2p1btda.sg.larksuite.com/base/VAbLbDZMOapNTGss7CmloEaXgWh) | Dcode Sdn Bhd | owned by Dcode | 24 | 2026-02-09T15:34:26+08:00 | keyword_DOE |
| [130-DOE （学员）](https://zsggz2p1btda.sg.larksuite.com/base/Rw1nbSJglanQQnsyl4slq3cugfd) | Dcode Sdn Bhd | owned by Dcode | 15 | 2026-01-29T15:36:46+08:00 | keyword_DOE |
| [MYCP Bible](https://zsggz2p1btda.sg.larksuite.com/base/FlWbbEIutaJKy6s6XFtlHE4CglF) | Dcode Sdn Bhd | owned by Dcode | 2 | 2026-01-20T10:17:46+08:00 | keyword_Dcode, keyword_Finance, keyword_Operation |
| [128-DOE （学员）](https://zsggz2p1btda.sg.larksuite.com/base/RdEibn2g8ajEDxskXwPldLfWgZe) | Dcode Sdn Bhd | owned by Dcode | 19 | 2026-01-19T09:00:02+08:00 | keyword_DOE |
| [133 Class Bible (admin)](https://zsggz2p1btda.sg.larksuite.com/base/WqWSb39yAas7rVsKD6ulj7Twghb) | AGA TECH SUPPORT | owned by AGA Tech Support | 17 | 2026-01-13T14:47:00+08:00 | keyword_Class_Bible, owned_by_me |
| [129 Class Bible (admin) ](https://zsggz2p1btda.sg.larksuite.com/base/XTDqbN3u0auH1XsQnIZl6Uyxgkb) | Dcode Sdn Bhd | owned by Dcode | 17 | 2026-01-05T11:44:31+08:00 | keyword_Class_Bible |
| [Call Center](https://zsggz2p1btda.sg.larksuite.com/base/HKMfb23U2aXdVssjLXvlJMvlgMS) | AGA TECH SUPPORT | owned by AGA Tech Support | 12 | 2025-12-31T21:05:15+08:00 | keyword_Call_Center, owned_by_me |
| [130 Class Bible (admin dcode)](https://zsggz2p1btda.sg.larksuite.com/base/EWi7bxe9ha4O5osZrOClLlengig) | Dcode Sdn Bhd | owned by Dcode | 17 | 2025-12-16T21:10:28+08:00 | keyword_Class_Bible, keyword_Dcode |
| [131 Class Bible (admin)](https://zsggz2p1btda.sg.larksuite.com/base/UgTkbfJHEaVitJs6jeKlJ7QkgFd) | AGA TECH SUPPORT | owned by AGA Tech Support | 18 | 2025-12-04T11:31:29+08:00 | keyword_Class_Bible, owned_by_me |
| [130 Class Bible (admin)](https://zsggz2p1btda.sg.larksuite.com/base/BeYUb8HSQaKmT7sNmTglecKAgPh) | AGA TECH SUPPORT | owned by AGA Tech Support | 18 | 2025-12-04T11:31:26+08:00 | keyword_Class_Bible, owned_by_me |
| [132-DOE （教练）](https://zsggz2p1btda.sg.larksuite.com/base/BdlPbhegia5KeYs1V2tljo2JgWh) | AGA TECH SUPPORT | owned by AGA Tech Support | 18 | 2025-11-18T13:00:39+08:00 | keyword_DOE, owned_by_me |
| [129-DOE （教练）](https://zsggz2p1btda.sg.larksuite.com/base/PL5ZbItJIa2WfosJKV5lyISVgdd) | AGA TECH SUPPORT | owned by AGA Tech Support | 21 | 2025-11-07T03:51:02+08:00 | keyword_DOE, owned_by_me |
| [129 Class Bible (admin dcode) ](https://zsggz2p1btda.sg.larksuite.com/base/QG34bWiAFaF1VrsgpuzlZNYkgHc) | Dcode Sdn Bhd | owned by Dcode | 17 | 2025-10-29T08:30:45+08:00 | keyword_Class_Bible, keyword_Dcode |
| [128 Class Bible (admin)](https://zsggz2p1btda.sg.larksuite.com/base/IncMbXDTNagUmMsuRxGlfj3ugob) | AGA TECH SUPPORT | owned by AGA Tech Support | 18 | 2025-10-18T09:33:22+08:00 | keyword_Class_Bible, owned_by_me |
| [126 - 宣告和总结 （学员）](https://tf9hdlw5dgg.sg.larksuite.com/base/NezubbPfQaa7aYsC2rhlFi8sgVb) | Chi Shiong Tan | shared/other owner | 7 | 2025-09-19T13:46:26+08:00 | keyword_DOE, keyword_Dcode |
| [128-DOE （教练）](https://zsggz2p1btda.sg.larksuite.com/base/GNuXbeBMma4ipFsHh4ZlB33fgZd) | AGA TECH SUPPORT | owned by AGA Tech Support | 10 | 2025-09-16T23:57:59+08:00 | keyword_DOE, owned_by_me |
| [137-DOE （教练）](https://zsggz2p1btda.sg.larksuite.com/base/InDqbaK1ka1AS3sH6xulmor1g4d) | AGA TECH SUPPORT | owned by AGA Tech Support | 18 | 2025-08-17T14:59:18+08:00 | keyword_DOE, owned_by_me |
| [137 Class Bible (admin)](https://zsggz2p1btda.sg.larksuite.com/base/MFDzbfnRKavPvvsXpBcl7GJ9gG9) | AGA TECH SUPPORT | owned by AGA Tech Support | 20 | 2025-08-17T14:55:29+08:00 | keyword_Class_Bible, owned_by_me |
| [136 Class Bible (admin)](https://zsggz2p1btda.sg.larksuite.com/base/Q7WrbpjYJaY6e9sZ5JVlCmxQgnc) | AGA TECH SUPPORT | owned by AGA Tech Support | 20 | 2025-08-17T14:54:27+08:00 | keyword_Class_Bible, owned_by_me |
| [135 Class Bible (admin)](https://zsggz2p1btda.sg.larksuite.com/base/KBvebnkwda8uTQs8oEEleKnngoh) | AGA TECH SUPPORT | owned by AGA Tech Support | 20 | 2025-08-17T14:53:44+08:00 | keyword_Class_Bible, owned_by_me |
| [134 Class Bible (admin)](https://zsggz2p1btda.sg.larksuite.com/base/ByYFbqD4KabRResKydil0LXYgpc) | AGA TECH SUPPORT | owned by AGA Tech Support | 20 | 2025-08-17T14:52:53+08:00 | keyword_Class_Bible, owned_by_me |
| [129-DOE test](https://zsggz2p1btda.sg.larksuite.com/base/SG2nb7QeiaZvJxsKWygliaA6gLc) | AGA TECH SUPPORT | owned by AGA Tech Support | 11 | 2025-08-06T17:54:56+08:00 | keyword_DOE, owned_by_me |
| [132 Class Bible (admin)](https://zsggz2p1btda.sg.larksuite.com/base/UtbmbkCQXa4bfMsE5R5ltVTpgSb) | AGA TECH SUPPORT | owned by AGA Tech Support | 18 | 2025-08-03T18:49:22+08:00 | keyword_Class_Bible, owned_by_me |
| [Finance](https://zsggz2p1btda.sg.larksuite.com/base/LOEibcDpFa11wHs8M89ltA98gfc) | AGA TECH SUPPORT | owned by AGA Tech Support | 19 | 2025-07-24T20:55:38+08:00 | keyword_Call_Center, keyword_Class_Bible, keyword_Dcode, keyword_Finance, owned_by_me |
| [准教练报名名单](https://zsggz2p1btda.sg.larksuite.com/base/TkK1bxDzqabe7Asbi6wlwnOWgFf) | AGA TECH SUPPORT | owned by AGA Tech Support | 3 | 2025-07-23T01:35:29+08:00 | owned_by_me |
| [130-DOE （教练）old](https://zsggz2p1btda.sg.larksuite.com/base/BHcyb9DszaPaRnsgVdqlQViSg0b) | AGA TECH SUPPORT | owned by AGA Tech Support | 8 | 2025-07-17T16:54:31+08:00 | keyword_DOE, owned_by_me |
| [Invoice management](https://zsggz2p1btda.sg.larksuite.com/base/DKR3b8zLka9C0xsBBLFlciYVgsg) | AGA TECH SUPPORT | owned by AGA Tech Support | 4 | 2025-07-17T01:04:38+08:00 | owned_by_me |
| [Receipt management](https://zsggz2p1btda.sg.larksuite.com/base/BvxKbIooVa0M7WsnmhWl5nHYgmh) | AGA TECH SUPPORT | owned by AGA Tech Support | 4 | 2025-07-17T00:48:11+08:00 | owned_by_me |
| [Receipt management](https://zsggz2p1btda.sg.larksuite.com/base/Mfd4boeVYa0QJ8s652klslJmgOP) | AGA TECH SUPPORT | owned by AGA Tech Support | 4 | 2025-07-17T00:42:37+08:00 | owned_by_me |
| [Class Bible - 129 (admin) old](https://zsggz2p1btda.sg.larksuite.com/base/NA5bbB0AKa89fTsJfWilDw8AgFc) | AGA TECH SUPPORT | owned by AGA Tech Support | 15 | 2025-07-17T00:27:16+08:00 | keyword_Class_Bible, owned_by_me |
| [126 - DOE挑战 （学员）](https://tf9hdlw5dgg.sg.larksuite.com/base/MOZqbGi02aVuaNsjEsDl3DRmgJe) | Chi Shiong Tan | shared/other owner | 14 | 2025-06-24T22:47:08+08:00 | keyword_DOE |
| [Daily Sales Amount Summary](https://www.sg.larksuite.com/base/EX19b0qgDaPRzIsbee6lpk30gHb) | Assiter | shared/other owner | 2 | 2025-06-19T21:24:26+08:00 | keyword_Finance |
| [Business Analysis (Dashboard)](https://www.sg.larksuite.com/base/KLGybysA1aI53EsP2HglAbfAgsg) | Assiter | shared/other owner | 2 | 2025-06-19T21:22:37+08:00 | keyword_Operation |
| [Class Bible - 129 (admin)](https://zsggz2p1btda.sg.larksuite.com/base/PbsObD83Ra7jbgsFMDbl23ljgqf) | AGA TECH SUPPORT | owned by AGA Tech Support | 20 | 2025-06-11T08:35:35+08:00 | keyword_Call_Center, keyword_Class_Bible, keyword_Dcode, owned_by_me |
| [Class Bible - 129 (admin) ](https://zsggz2p1btda.sg.larksuite.com/base/Rvv9beHUvaSbtosug98lK0vMgxf) | AGA TECH SUPPORT | owned by AGA Tech Support | 17 | 2025-06-10T17:09:06+08:00 | keyword_Call_Center, keyword_Class_Bible, keyword_Dcode, keyword_Operation, owned_by_me |
| [指引部门](https://zsggz2p1btda.sg.larksuite.com/base/MYRbbfD2oawhrysXIU2lQAo7gVe) | AGA TECH SUPPORT | owned by AGA Tech Support | 9 | 2025-06-02T22:47:05+08:00 | owned_by_me |
| [✅Class Bible - 127 (admin) ](https://zsggz2p1btda.sg.larksuite.com/base/Z83ObKLk1aJxKxsU0ZTlY2ukgTd) | AGA TECH SUPPORT | owned by AGA Tech Support | 12 | 2025-06-01T08:59:07+08:00 | keyword_Call_Center, keyword_Class_Bible, keyword_Dcode, keyword_Finance, owned_by_me |
| [129 - 宣告和总结 （学员)](https://zsggz2p1btda.sg.larksuite.com/base/Oh4IbphpRaB1hpsZwOBl6BXNgCb) | AGA TECH SUPPORT | owned by AGA Tech Support | 5 | 2025-05-30T18:07:03+08:00 | owned_by_me |
| [129 - DOE挑战 （学员)](https://zsggz2p1btda.sg.larksuite.com/base/EY08bLKGCay3Jys6a0Slc7Kogzj) | AGA TECH SUPPORT | owned by AGA Tech Support | 12 | 2025-05-30T18:06:38+08:00 | keyword_DOE, owned_by_me |
| [Call Center 2.0](https://zsggz2p1btda.sg.larksuite.com/base/N03KbODU8aC3yvsFPyklsgc5gRe) | AGA TECH SUPPORT | owned by AGA Tech Support | 8 | 2025-05-30T17:29:30+08:00 | keyword_Call_Center, keyword_Class_Bible, keyword_Dcode, keyword_Operation, owned_by_me |
| [Class Bible - 128 (admin) Copy](https://zsggz2p1btda.sg.larksuite.com/base/G3dCbEiE2aVtkIswzvwliPQig1f) | AGA TECH SUPPORT | owned by AGA Tech Support | 21 | 2025-05-30T17:23:29+08:00 | keyword_Backlog, keyword_Call_Center, keyword_Class_Bible, keyword_Dcode, keyword_Finance, keyword_Operation, owned_by_me |
| [Finance 2.0](https://zsggz2p1btda.sg.larksuite.com/base/GVhYbqHdkakydCsvvQiluFATg7b) | AGA TECH SUPPORT | owned by AGA Tech Support | 18 | 2025-05-27T18:58:43+08:00 | keyword_Call_Center, keyword_Class_Bible, keyword_Dcode, keyword_Finance, owned_by_me |
| [2.0 - Class Bible - 125 (admin)](https://zsggz2p1btda.sg.larksuite.com/base/AIPqb8TXfa4bXDscopMl4Heegjb) | AGA TECH SUPPORT | owned by AGA Tech Support | 11 | 2025-05-27T18:53:52+08:00 | keyword_Call_Center, keyword_Class_Bible, keyword_Dcode, keyword_Finance, owned_by_me |
| [1.0 - Class Bible - 125 (admin)](https://zsggz2p1btda.sg.larksuite.com/base/IRPVbYDQlanifpsfrBFlXvc3gAg) | AGA TECH SUPPORT | owned by AGA Tech Support | 11 | 2025-05-26T07:09:37+08:00 | keyword_Call_Center, keyword_Class_Bible, keyword_Dcode, keyword_Finance, owned_by_me |
| [✅Class Bible - 126 (admin)](https://zsggz2p1btda.sg.larksuite.com/base/JMAwbVYBWaBbVNspsxPlrYJLgJS) | AGA TECH SUPPORT | owned by AGA Tech Support | 11 | 2025-05-25T13:35:20+08:00 | keyword_Call_Center, keyword_Class_Bible, keyword_Dcode, keyword_Finance, owned_by_me |
| [General Bible](https://zsggz2p1btda.sg.larksuite.com/base/JVWBbgqnXalrXLsqN8flFrxpgXf) | AGA TECH SUPPORT | owned by AGA Tech Support | 1 | 2025-05-24T23:25:48+08:00 | owned_by_me |
| [✅ Class Bible - 124 (admin) ](https://zsggz2p1btda.sg.larksuite.com/base/XreLbDtWTawQJHsoOmAl6PStgVg) | AGA TECH SUPPORT | owned by AGA Tech Support | 11 | 2025-05-23T13:46:11+08:00 | keyword_Class_Bible, owned_by_me |
| [128 Bible](https://zsggz2p1btda.sg.larksuite.com/base/Q4zNbCTDvalFHSsFBM8lHT7sgdf) | AGA TECH SUPPORT | owned by AGA Tech Support | 9 | 2025-05-13T22:06:59+08:00 | keyword_Finance, owned_by_me |
| [JCP Bible (113+)](https://zsggz2p1btda.sg.larksuite.com/base/Qn96bgTeMatW94s3cNsl141Yg2e) | AGA TECH SUPPORT | owned by AGA Tech Support | 9 | 2025-05-13T21:59:53+08:00 | keyword_Class_Bible, keyword_Dcode, keyword_Operation, owned_by_me |
| [复习基础Bible ](https://zsggz2p1btda.sg.larksuite.com/base/Fg4XbXlW1a61N8sjGyol4Rnvgpc) | AGA TECH SUPPORT | owned by AGA Tech Support | 6 | 2025-05-13T21:59:35+08:00 | owned_by_me |
| [Dcode Bible](https://zsggz2p1btda.sg.larksuite.com/base/YGQobapWQa8uHdsW3dplkif3gPe) | AGA TECH SUPPORT | owned by AGA Tech Support | 8 | 2025-05-13T21:59:31+08:00 | keyword_Call_Center, keyword_Dcode, owned_by_me |
| [124 Bible](https://zsggz2p1btda.sg.larksuite.com/base/Jab3bFcYmaln1tsnorNlhukcgYe) | AGA TECH SUPPORT | owned by AGA Tech Support | 10 | 2025-05-13T21:59:27+08:00 | owned_by_me |
| ... | ... | ... | ... | ... | 49 more rows in CSV |

## Repeat Prompt

```text
Use Lark CLI as user to audit all Dcode-relevant Lark Bases from the AGA TECH SUPPORT account. Search owned bitables and keywords Dcode, DOE, Class Bible, Backlog, Call Center, Finance, Portal, Operation. Paginate all results, dedupe by URL/token, classify ownership, resolve /wiki/ URLs with wiki +node-get, verify each Base with base +base-get and base +table-list, then produce a boss-ready summary with access gaps and a CSV inventory.
```

## Files

- Raw JSON: `dcode_aga_tech_support_lark_base_inventory_2026-05-28.json`
- CSV inventory: `dcode_aga_tech_support_lark_base_inventory_2026-05-28.csv`
- Boss update Markdown: `dcode_aga_tech_support_lark_base_boss_update_2026-05-28.md`
