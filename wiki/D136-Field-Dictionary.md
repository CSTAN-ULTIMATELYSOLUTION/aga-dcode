# D.136 Field Dictionary

This page replaces the earlier "Field Inventory" wording with a clearer name. A dictionary is easier to understand: it lists each Lark Base table field/column, its type, and option values when available.

In this wiki, **field** means **Lark Base column**.

## Summary

| Item | Count |
|---|---:|
| Tables | 26 |
| Field records | 2409 |
| Unique field names | 428 |

## Tables

| Table | Category | Fields | Views |
|---|---|---:|---:|
| ✅✅136学员-NEWBIBLE_（Dcode) | Bible core | 144 | 9 |
| 总结合 | Summary / aggregation | 32 | 3 |
| Grade ABC【EMO】 | Scoring / grading | 26 | 2 |
| Grade ABC【教练填】 | Scoring / grading | 6 | 2 |
| ✅教练名单（中心） | Coach roster | 41 | 3 |
| ✅✅136教练-NEWBIBLE_（Dcode) | Bible core | 200 | 4 |
| ✅课程报名 | Registration | 8 | 1 |
| ✅✅136-WHOLE-MASTERLIST【基础-高四】 | Masterlist / final list | 141 | 38 |
| ✅✅136-旧Backlog【基础-高四】 | Backlog / transition | 141 | 26 |
| ✅✅136-【神奇宝宝】WHOLE-MASTERLIST【基础-高四】 | Masterlist / final list | 141 | 26 |
| ✅135-【旧Backlog进现行】WHOLE-MASTERLIST 高阶一Bible. | Bible core | 141 | 26 |
| 🖊️🖊️136-基础FINAL MASTERLIST | Masterlist / final list | 141 | 1 |
| 🖊️🖊️136-【基础守则离开】FINAL MASTERLIST. | Masterlist / final list | 141 | 1 |
| 🖊️🖊️136-【基础Backlog】FINAL MASTERLIST. | Masterlist / final list | 141 | 1 |
| 🖊️-136-高阶一-【高阶一Backlog】Final Masterlist. | Masterlist / final list | 141 | 1 |
| 🖊️-136-高阶一-FINAL MASTERLIST | Masterlist / final list | 141 | 1 |
| 🖊️-136-高阶一-【守则后离开】Final Masterlist. | Masterlist / final list | 141 | 1 |
| ✅A0-136_高一-10天宣告 | DOE / declaration | 13 | 1 |
| ✅A0-136高一-10天宣告 | DOE / declaration | 15 | 1 |
| 高阶二2Call | Other | 141 | 1 |
| 【高二】事业成就表 | DOE / declaration | 28 | 3 |
| ✅高二工作坊DOE宣告（开班前） | DOE / declaration | 29 | 1 |
| ✅135-高二工作坊DOE宣告（开班前） | DOE / declaration | 29 | 1 |
| 🖊️-136-高阶二-Final Masterlist. | Masterlist / final list | 141 | 1 |
| 🖊️-136-高阶二-【高阶二Backlog】Bible | Bible core | 141 | 1 |
| 🔥-学员海星个人结果 | Result / outcome | 5 | 1 |

## Fields And Options By Table

### ✅✅136学员-NEWBIBLE_（Dcode)

Category: `Bible core`  
Fields: `144`  
Views: `9`

| # | Field | Type | Field ID | Options |
|---:|---|---|---|---|
| 1 | EMO 华语名字 | `text` | `fldpVM1MAg` |  |
| 2 | 基础1call | `select` | `fldsppqgFK` | Yes; No; Call 136; Call 137; No Call; Call; Call 138; No Call<br>17/12/25报读过，健康不通过; 日期：19/3/26 时间：10.05pm 位置： 确认136<br>19/3- happy inform call 136; Call 明天12点后call; Call 137 下午才联系; Call 下午; Call WhatsApp on 18-3 after 12pm; Call 137-whatsapp讯息 |
| 3 | 个人海星位置 | `number` | `fldw1sPNp8` |  |
| 4 | 基础健康面谈 | `select` | `flduv1pk53` | 已面谈; 面谈不通过 |
| 5 | 基础确认当班 | `select` | `fld8MIqSZ5` | 确认; 待确认; 不当班; 健康待审核; 健康不通过; 未接电话; KLCP136 |
| 6 | 高阶一2CalL (A,B,C,D) | `select` | `flde5hBvrW` | 确认; 待确认; 不当班; 健康待审核; 健康不通过; 未接电话; Yes |
| 7 | 年龄 | `number` | `fld4Ozu3jN` |  |
| 8 | 字段 2 | `text` | `fldbtSuq2e` |  |
| 9 | 杂费定金  (A,B,C,D) | `lookup` | `fld5YHqAUa` |  |
| 10 | 高阶一C1-3信息  (A,B,C,D) | `select` | `fldbcgHatV` | 已发出; 已回复; Yes |
| 11 | 基础C1-3信息 | `select` | `fldyCLPXM7` | 已发出; 已回复 |
| 12 | 高阶一酒店费用  (A,B,C,D) | `select` | `fldV1Ov1oJ` | 2300; 660 |
| 13 | 高阶健康 | `text` | `fldqC8HLiJ` |  |
| 14 | 杂费定金付费方式 (A,B,C,D) | `lookup` | `fldG89UoDv` |  |
| 15 | 高阶转名额 | `select` | `fldHzSx5He` | 高阶已消耗; 高阶已退款 |
| 16 | 文字-6 | `text` | `flde1ZMLci` |  |
| 17 | 高阶余款  (A,B,C,D) | `text` | `fld5gM9QQd` |  |
| 18 | 职位 | `text` | `fldiMuQal2` |  |
| 19 | 高阶 - 全款/订金 | `formula` | `fldsWv81U0` |  |
| 20 | 杂费定金余款 (A,B,C,D) | `lookup` | `fldr8zEiwc` |  |
| 21 | 付费方式 | `select` | `fldktTMWFK` | Cash; Cheque; Online Banking; Boldpay; Credit Card; Deposit Transfer; 支付宝; 中国银行; Online Transfer; 网上付款 Online Banking; 信用卡Credit Card; 现金 Cash |
| 22 | 酒店费用 | `number` | `fldGZYvrcS` |  |
| 23 | 基础C1-4信息 | `select` | `fld7rF7lrx` | 已发出; 已回复; 18/3/2026 |
| 24 | SO/Transfer No. | `text` | `fldVfTh8yC` |  |
| 25 | 信念系统日期  (A,B,C,D) | `text` | `fld48s0YpN` |  |
| 26 | 信念系统当班  (A,B,C,D) | `select` | `fldZ6nnaBQ` | 当班; 不当班; 待确认 |
| 27 | 婚姻 | `select` | `fldg5w01QF` | 单身; 已婚; 分居; 离婚; 丧偶; 已婚 Married; 单身 Single |
| 28 | 地址 | `text` | `fldA6GtRTG` |  |
| 29 | 高阶一已进课室人数 | `formula` | `fldPcaGbzz` |  |
| 30 | 结果期别 | `select` | `fldUcxqCzB` | KLCP131; KLCP132; KLCP133; KLCP135; KLCP136; KLCP137; KLCP138; KLCP139; KLCP140 |
| 31 | 性别 | `select` | `fldHbPLVek` | 男; 女; 940228-13-5375; 960910-13-6475; 971205-13-5083; 991021-07-6240; 010403-13-0475; 931005-13-6499; 041226-14-0219; 981202-04-5073; 900124-13-6895; 980322-13-6098; 980124-13-6150; 891116-13-6041; 021028-13-0601; 951222-13-6039; 041007-14-1457; 010205-10-0355; 950626-13-6305; 990625-07-5877; 030829-04-0109; 890418-13-6341; 970525-07-5855; 000111-10-1403; 000816-10-0590; 040523-13-0725; 900116-08-5493; 970531-13-6247; 930914-13-6707; 850713-13-6559; 970403-13-6605; 880210-12-5775; 960516-13-6039; 000303-13-1236; 780602-13-5843; 991222-10-6266; 910722-13-5381; 890920-05-5096; 991024-13-5939; 990321-13-6247; 000511-13-1273; 980901-13-6383; 921220-04-5307; 010925-13-0907; 970412-23-5111; 951010-01-5462; 970520-06-5455; 980703-04-5093; 820416-04-5338; 010629-10-2047 |
| 32 | 【报到】高阶一几点到 | `select` | `fldbcbfBgV` | 8pm-10pm; 10pm-12am; 12am后; 开课当天早上 |
| 33 | 高阶一离开 (A,B,C,D) | `select` | `fldhktTdmb` | 高阶一守则前; 高阶一守则后第1天; 高阶一守则后第2天; 高阶一守则后第3天; 高阶一守则后第4天; 高阶一守则后第5天; 高阶四前; 高阶四后 |
| 34 | 高阶二确认期别 (A,B,C,D) | `select` | `fldY4T4BzB` | KLCP131; KLCP132; KLCP133; KLCP135; KLCP136; KLCP137; KLCP138; KLCP139; KLCP140 |
| 35 | 高阶补款 (A,B,C,D) | `text` | `flddyIpxbM` |  |
| 36 | 基础学费 | `number` | `fldOGdbu8I` |  |
| 37 | 高阶二已进课室 (A,B,C,D) | `select` | `fldcZavdOm` | KLCP131; KLCP112; KLCP132; KLCP133; KLCP135; KLCP136; KLCP137; KLCP138; KLCP139; KLCP140 |
| 38 | 基础已进课室人数 | `formula` | `fldGYhSADi` |  |
| 39 | 高阶一确认当班 (A,B,C,D) | `select` | `fldb4fMdP3` | 确认; 待确认; 不当班; 未接电话; 健康待审核; 健康待不通过 |
| 40 | 高阶一来的目的、急需解决的问题  (A,B,C,D) | `text` | `fldBTFVLKs` |  |
| 41 | 高阶二1call  (A,B,C,D) | `select` | `fldLFSilk8` | Yes; No |
| 42 | 基础2Call Status<br>来的目的、急需解决的问题 | `text` | `fldtaHRKkE` |  |
| 43 | 文字-3 | `text` | `fldACg9DB8` |  |
| 44 | 高阶三已进课室人数 | `formula` | `fldG1VmmI3` |  |
| 45 | 高阶一1call(A,B,C,D) | `select` | `fld3LBWyNZ` | Yes; No |
| 46 | 高阶总费用 (A,B,C,D) | `text` | `fldCoHK6zh` |  |
| 47 | 高阶二膳食费用  (A,B,C,D) | `lookup` | `fld7BTqcdC` |  |
| 48 | 基础转名额 | `select` | `fldJ4Ok5wY` | 基础已消耗; 基础已退款 |
| 49 | 电话 | `text` | `fld3pODST1` |  |
| 50 | 高阶付费方式 (A,B,C,D) | `text` | `fldTsnAeEi` |  |
| 51 | 字段 5 | `text` | `fldQldHnzJ` |  |
| 52 | 膳食费用 | `number` | `fldJyjyJaw` |  |
| 53 | 高阶三已进课室 | `select` | `fldACn4pwe` | KLCP131; KLCP112; KLCP131; KLCP132; KLCP133; KLCP135; KLCP136; KLCP137; KLCP138; KLCP139; KLCP140 |
| 54 | 邮政编号 | `number` | `fldoYxtpJe` |  |
| 55 | EMO期别 | `select` | `fldtEM7csn` | KLCP131; KLCP132; KLCP133; KLCP135; KLCP136; KLCP137; KLCP138; KLCP139; KLCP140; KLCP108; KLCP115; KLCP35; KLCP101; KLCP96; KLCP26; KLCP91; KLCP65; KLCP69; KLCP40; KLCP129; KLCP109; KLCP107; KLCP123; KLCP125; KLCP105; KLCP 102; 011-12739137 |
| 56 | 高阶一教练 | `text` | `fldjVaU8zJ` |  |
| 57 | 生日日期 | `datetime` | `fldqty2zuN` |  |
| 58 | 杂费定金补款  (A,B,C,D) | `lookup` | `fldJU2FkyQ` |  |
| 59 | 英文名字 | `text` | `fld7bXtZTW` |  |
| 60 | 基础 - 全款/订金 | `formula` | `flde0Kr9uW` |  |
| 61 | 2 Call Status /学员的位置  (A,B,C,D) | `select` | `fldjcroYaI` | Yes; No，不当班; No,事业; No,家庭; YES; No.大目标; No.未上线; No.Happy 工作坊 待定 事业; No.Happy 事业待确认，自己都不确定什么结果; No, 教练没有提前和学员整理家庭对象和事业; No.事业需要重算+整理; No.教练没有提前整理家庭要梳理; 刘翊隆; Lau Aik Leong |
| 62 | 全报 | `select` | `fld37lkP7m` | 基础全款; 连报; 连报+全款; 连报+M; 连报+M+全款; 高阶; 高阶+全款; 高阶+M; 高阶+M+全款; 复读基础; 复读高阶; 复读-高阶+全款; 复读高阶+M; 复读-高阶+M+全款; 复读-高阶二; 毕业生-复读基础; 毕业生-复读基础+复读高阶一; 毕业生-复读基础+复读高阶二; 全报+M |
| 63 | 邮箱 | `text` | `fld7uLB2sP` |  |
| 64 | 紧急联系人（姓名、关系、电话） | `text` | `fldbdsENL8` |  |
| 65 | 文字-4 | `text` | `fld9Nh7axi` |  |
| 66 | 高阶一确认当班人数 | `formula` | `fldinQISul` |  |
| 67 | 高阶-Invoice Name | `text` | `fldcSFwUNA` |  |
| 68 | 总费用 | `formula` | `fldH64Rore` |  |
| 69 | 高阶一C1-4信息  (A,B,C,D) | `select` | `fldCBOwgh2` | 已发出; 已回复 |
| 70 | 州 | `select` | `fldDJzKBt7` | Kuala Lumpur; Johor; Kedah; Kelantan; Malacca; Negeri Sembilan; Pahang; Perak; Perlis; Penang; Sabah; Sarawak; Terengganu; Singapore; Selangor; 017-6248672; 011-68266865; 010-2129019; 013-3323988; *0061468394134; 014-9656519; 011-177791993; 016-2790722; 019-4878066; 012-3146266; 017-8781315; 016-5257241; 016-8858055; 011-11728996; 010-9812388; 019-2038198; 018-2793992; 016-8659674; 012-4918456; 014-8529319; 014-3558044; 016-4417252; 017-6675979; 016-232870; 010-9686886; 017-7658768; 010-4418837; 016-5226962; 010-2097000; 016-3731331; 017-7739828; 013-9117777; 011-36079796; 010-2092622; 014-6691833 |
| 71 | 高阶四已进课室人数 | `formula` | `fldrIarGll` |  |
| 72 | 高阶二总费用  (A,B,C,D) | `lookup` | `fldqp668Em` |  |
| 73 | 信念系统当班期别 (A,B,C,D) | `text` | `fldCsXxw3P` |  |
| 74 | 序号 | `formula` | `fldEV3sB63` |  |
| 75 | 基础问卷 | `select` | `fld2eXxUcJ` | Yes; No |
| 76 | 杂费定金付费方式_高二  (A,B,C,D) | `lookup` | `fldG29QiQ9` |  |
| 77 | 高阶四已进课室 | `select` | `fldamK4R39` | KLCP131; KLCP132; KLCP133; KLCP135; KLCP136; KLCP137; KLCP138; KLCP139; KLCP140 |
| 78 | 高阶二1 Call Status (A,B,C,D) | `text` | `fldrkv27ER` |  |
| 79 | 【报到】高阶二几点到 | `select` | `fldRMzPjjv` | 8pm-10pm; 10pm-12am; 12am后; 开课当天早上 |
| 80 | 高阶一1 Call Status (A,B,C,D) | `text` | `fldXcdUr7c` |  |
| 81 | 高阶二2Call  (A,B,C,D) | `select` | `fldpTEoMrj` | Yes; No |
| 82 | 高阶SO/Transfer No. (A,B,C,D) | `text` | `fldoGWsYc2` |  |
| 83 | 高阶二后离开原因 | `text` | `fldghrGMDe` |  |
| 84 | 高阶二后离开(A,B,C,D) | `select` | `fldYSq4dt1` | 高级二守则前; 高阶二守则后; 高阶三守则前; 高阶三守则后; 高阶四守则前; 高阶四守则后; 守则后第1天; 守则后第2天; 守则后第3天; 守则后第4天; 守则后第5天 |
| 85 | 基础已进课室（KLCP) | `select` | `fldx22KkI9` | KLCP131; KLCP132; KLCP133; KLCP135; KLCP136; KLCP137; KLCP138; KLCP139; KLCP140 |
| 86 | 补款 | `number` | `fldAQqQ8io` |  |
| 87 | 基础确认期别 | `select` | `fld4FgLMyN` | KLCP131; KLCP132; KLCP133; KLCP135; KLCP136; KLCP137; KLCP138; KLCP139; KLCP140; Yes |
| 88 | 字段 4 | `text` | `fldFGp100R` |  |
| 89 | 高阶学费SST  (A,B,C,D) | `text` | `fldzpuXMP8` |  |
| 90 | 高阶报读日期  (A,B,C,D) | `text` | `fldvKhoqzv` |  |
| 91 | 备注 | `text` | `fldxiJJ1fR` |  |
| 92 | 高阶二已进课室人数 | `formula` | `fldRnyJp4h` |  |
| 93 | 文字-2 | `text` | `fldQxS590Q` |  |
| 94 | 孩子 | `number` | `fldXA3u8NF` |  |
| 95 | 高阶二C1-4信息  (A,B,C,D) | `lookup` | `fld6bJgztP` |  |
| 96 | 高阶二酒店费用  (A,B,C,D) | `lookup` | `fldKLj5OvZ` |  |
| 97 | 膳食 | `select` | `fldbiUCP8C` | 素食; 荤食 |
| 98 | EMO 英文名字 | `text` | `fldFDwxkst` |  |
| 99 | 公司规模 (多少人) | `number` | `fldcyxlNHg` |  |
| 100 | 高阶五进课室 | `text` | `fldOo9qWmA` |  |
| 101 | 高阶二教练 | `text` | `fldWmvMlWV` |  |
| 102 | 高阶二确认当班 (A,B,C,D) | `select` | `fldVLGX5Vu` | 确认; 待确认; 不当班; 未接 |
| 103 | 序号—— | `number` | `fldvAP9Tsv` |  |
| 104 | 客户等级 | `select` | `fldqjJ9DuE` | A+; A; B; C |
| 105 | 月收入 | `number` | `fldBv7HKrH` |  |
| 106 | 备注-转海星/消耗 | `text` | `fldmYPrj9l` |  |
| 107 | 定金 | `number` | `fldSqTZCPk` |  |
| 108 | 高阶二C1-3信息  (A,B,C,D) | `select` | `fldCgmJDvK` | 已回复; 已发出 |
| 109 | 基础离开 | `select` | `fldUMPJqqk` | 基础守则前; 基础守则后第1天; 基础守则后第2天; 基础守则后第3天; 基础守则后第4天; 基础守则后第5天 |
| 110 | 高阶一已进课室 | `select` | `fldQEOsk5K` | KLCP131; KLCP132; KLCP133; KLCP135; KLCP136; KLCP137; KLCP138; KLCP139; KLCP140 |
| 111 | 高阶学费  (A,B,C,D) | `text` | `fld68LoHe7` |  |
| 112 | Mark有约意愿度 | `select` | `fldq89Umtt` | Yes; No |
| 113 | 高阶定金 (A,B,C,D) | `text` | `fld6DwF8on` |  |
| 114 | 华语名字 | `text` | `fldIqZVRsw` |  |
| 115 | 年历 | `number` | `fldApjbspo` |  |
| 116 | 字段 3 | `text` | `fldkeVAL0X` |  |
| 117 | 高阶付费方式_1  (A,B,C,D) | `text` | `fld9pibfS8` |  |
| 118 | 客户等级备注 | `text` | `fldmCN8M7U` |  |
| 119 | 基础1 Call Status | `text` | `fldtKneeQO` |  |
| 120 | 学号 | `number` | `fldcAKHYTF` |  |
| 121 | 行业性质 | `text` | `fldeGX47jN` |  |
| 122 | 基础健康 | `text` | `fldpbydaeC` |  |
| 123 | 文字-1 | `text` | `fldaqIBk4f` |  |
| 124 | 高阶健康面谈 | `select` | `fldUyUboyG` | 已面谈; 面谈不通过 |
| 125 | 公司名称 | `text` | `fldPt86QXy` |  |
| 126 | 付费方式 (1) | `select` | `flds6ly10t` | Online Banking; Credit Card; Boldpay; 4900; 1900 |
| 127 | 课室内名单 | `text` | `fldDnN0ySS` |  |
| 128 | Tax invoice name | `text` | `fldNQzMd0q` |  |
| 129 | 基础阶段教练 | `text` | `fldHTH3wZ9` |  |
| 130 | 基础2Call | `select` | `fld3PR7LZl` | Yes; No; 136 A1 朋友可以一起; 19/3- 目前没有提升的想法，事业从事美容行业，是资深美容师; 137 A1 朋友可以一起 |
| 131 | 基础报读日期 | `datetime` | `fldXqX3bDG` |  |
| 132 | 高阶一问卷(A,B,C,D) | `select` | `fldUPUrzpQ` | Yes; No |
| 133 | 余款 | `formula` | `fldVakFzdK` |  |
| 134 | 8%SST | `number` | `fldKqsFNLd` |  |
| 135 | EMO 联络号码 | `text` | `fld0VFSV0R` |  |
| 136 | 市区 | `text` | `fld1DvHlU7` |  |
| 137 | 文字-5 | `text` | `fld5Xz6qxB` |  |
| 138 | 高阶一确认期别人数 | `formula` | `fldxCrwTN6` |  |
| 139 | IC No | `text` | `fldPi9m6fA` |  |
| 140 | 报名时间段 | `select` | `fldkVHa7Kp` | 星期五晚上; 星期六早上; 星期六中午; 星期六晚上; 星期日早上; 星期日小休【毕业后】; 星期日【结果1】; 星期日【结果2】; 星期日【结果3-结束】 |
| 141 | 高阶二卓越宣言表  (A,B,C,D) | `lookup` | `fldyY1whEh` |  |
| 142 | 高阶一确认期别 (A,B,C,D) | `select` | `fld9EHqoBh` | KLCP135; KLCP136 |
| 143 | 基础酒店人数 | `select` | `fldxAC7Mji` | 3; 4; 5; 6; Landmark |
| 144 | 毕业证 (A,B,C,D) | `text` | `fld8M5DEZF` |  |

### 总结合

Category: `Summary / aggregation`  
Fields: `32`  
Views: `3`

| # | Field | Type | Field ID | Options |
|---:|---|---|---|---|
| 1 | 事业结合 | `formula` | `fldtwZpN0C` |  |
| 2 | 为谁而来？ | `lookup` | `fldbDCI4Ko` |  |
| 3 | 学员态度A: 主动+真诚B: 真诚 但不一定主动C: 不开放 | `lookup` | `fldChqHmmn` |  |
| 4 | 结果期别 | `lookup` | `fldp3kHChd` |  |
| 5 | 存款大约多少？ | `lookup` | `fld1djGTos` |  |
| 6 | Connie ABC | `text` | `fldZ90jtOr` |  |
| 7 | 源头 | `lookup` | `fld2jpKAbI` |  |
| 8 | 基础已进课室 | `lookup` | `fldwToVaD7` |  |
| 9 | 年收入 | `lookup` | `fldRSyuoxL` |  |
| 10 | Copy_学员的名字过来 | `text` | `fldsejE44p` |  |
| 11 | 职位 | `lookup` | `fld2684dzl` |  |
| 12 | 中心全报位置 | `lookup` | `fldLc1iiXG` |  |
| 13 | 佩玲ABC | `text` | `fldpIIM11z` |  |
| 14 | 教练名字 | `lookup` | `fldDwFQ6B8` |  |
| 15 | 工作 | `lookup` | `fld98MpuEu` |  |
| 16 | 学员事业背景 | `lookup` | `fldnqJbaPi` |  |
| 17 | 孩子几个 | `lookup` | `fldBXGNxUg` |  |
| 18 | EMO 华语名字 | `lookup` | `flduoTCKmO` |  |
| 19 | 营业额（经营企业） | `lookup` | `fldREJLS4Y` |  |
| 20 | 基础离开 | `lookup` | `fldiPNnnY5` |  |
| 21 | Cashflow | `lookup` | `fldbSb0ZQZ` |  |
| 22 | 企业人数 | `lookup` | `fldDEYTBdv` |  |
| 23 | 学员这几天发现自己什么？要进步的原因是什么？ | `lookup` | `fldrLXbYe2` |  |
| 24 | 为何而来？ | `lookup` | `fldWCwsgkS` |  |
| 25 | 基础学员名字 | `lookup` | `fldkwRy1OP` |  |
| 26 | EMO期别 | `lookup` | `fld5c6fH5d` |  |
| 27 | 负债 | `lookup` | `fldkv4uk3Z` |  |
| 28 | 行业性质 | `lookup` | `fldFJzWMHl` |  |
| 29 | 年龄 | `lookup` | `fldsYB5iaQ` |  |
| 30 | EMO 联络号码 | `lookup` | `fldr1fhRcw` |  |
| 31 | 连报 | `lookup` | `fldo2mojwC` |  |
| 32 | 婚姻状况 | `lookup` | `fldtn9izYa` |  |

### Grade ABC【EMO】

Category: `Scoring / grading`  
Fields: `26`  
Views: `2`

| # | Field | Type | Field ID | Options |
|---:|---|---|---|---|
| 1 | 海星华语全名 | `text` | `fldjw8KPZi` |  |
| 2 | 工作 | `select` | `fldXqTrzso` | 打工; 经营企业，续下题 |
| 3 | 为何而来？ | `text` | `fldm9u15jd` |  |
| 4 | 联络电话号码 | `text` | `fldaYgSYCg` |  |
| 5 | 其他期别-Emo名字 | `text` | `fldaTO7DXx` |  |
| 6 | 源头 | `select` | `fldnTL4CDO` | 是; 否 |
| 7 | Emo名字【结合】 | `formula` | `fldHFX7upo` |  |
| 8 | 婚姻状况 | `select` | `fldnJYWxlI` | 单身; 结婚; 离婚; 已婚 |
| 9 | 企业人数 | `text` | `fld0eVyrac` |  |
| 10 | Timestamp | `text` | `fldGJb1HIj` |  |
| 11 | 为谁而来？ | `text` | `fldfBFWAtp` |  |
| 12 | 负债 | `text` | `fldbFEj30U` |  |
| 13 | 133-Emo华语全名 | `select` | `fldMIsoUD4` | 蔡咏雯; 黄子朔; 萧有恒; 范志业; 阿妹; 陈俊雄; 蔡汶汉; 吴家卫; 潘金为; 陈凤银; 谢振杰; 张风贞; 龙淑仪; 张家诚; 余慧敏; 林美霖; 杨宇轩; 吴苇文; 刘俊晖; 覃国运; 沈美君; 张欣莉; 吴振帆; 刘俊翔; 林家进; 潘淞霖; 范僡洁; 余洁莹; 卓语麒; 林靖轩; 王媛瑞; 杨恒毅; 黄紫萱; 刘奕宏; 张峻源 |
| 14 | Emo期别 | `select` | `fldrIO0AeT` | KLCP132; KLCP133; KLCP135; KLCP136; KLCP137; KLCP138; KLCP139; KLCP140; KLCP141; KLCP131 |
| 15 | 海星英语全名 | `text` | `fldw0UiVvL` |  |
| 16 | 职业（行业） | `text` | `fldeQDcsXh` |  |
| 17 | 营业额（经营企业） | `text` | `fldgDlI3W6` |  |
| 18 | 连报 | `select` | `fld7Ab982Q` | 是; 否 |
| 19 | Cashflow | `select` | `fldgDkh7pA` | 收入多于支出; 收入少于支出 |
| 20 | 年收入 | `text` | `fldjpPxtQU` |  |
| 21 | 职位 | `text` | `fld3zesICS` |  |
| 22 | 132-Emo华语全名 | `select` | `fldfoOwzvr` | 何金桦; 吳高吉; 张宗强; 张菀芸; 林俊杰; 潘郁财; 蔡诗斌; 詹达磊; 谢志立; 陈婉嫡; 陈家德; 陈柔廷; 陈贤杰; 骆锡涵; 黃敬耀; 黄文彬 |
| 23 | 有几个孩子？ | `number` | `fldqskp06d` |  |
| 24 | 135-Emo华语全名 | `select` | `fldv5bI8q0` | 何嘉励; 梁莉仪; 林汶为; 罗佩珊; 林佑亮; 温俊荣; 苏启业; 詹镇安; 鄧顺喆; 黄开阳; 黎泓毅; 林傢保; 林贤隆; 陈弘晋; 曾逸文; 周祤胜; 张秋香; 许向圣; 纪光祖; 许雪芳; 李汶翔; 刘国靖; 王玮玉; 谢其平; 邱德权; 许伟胜; 曾芷玲; 李美郿; 施伟弟; 沈美诗; 魏龙 |
| 25 | 年龄 | `number` | `fldhCsUzk4` |  |
| 26 | 存款大约多少？ | `text` | `fldedB9mW3` |  |

### Grade ABC【教练填】

Category: `Scoring / grading`  
Fields: `6`  
Views: `2`

| # | Field | Type | Field ID | Options |
|---:|---|---|---|---|
| 1 | 学员态度<br>A: 主动+真诚<br>B: 真诚 但不一定主动<br>C: 不开放 | `text` | `fldhCsUzk4` |  |
| 2 | Timestamp | `text` | `fldGJb1HIj` |  |
| 3 | 教练 | `text` | `fldrIO0AeT` |  |
| 4 | 学员华语名字 | `text` | `fldfoOwzvr` |  |
| 5 | 学员事业背景 | `text` | `fldw0UiVvL` |  |
| 6 | 学员这几天发现自己什么？要进步的原因是什么？ | `text` | `fldjw8KPZi` |  |

### ✅教练名单（中心）

Category: `Coach roster`  
Fields: `41`  
Views: `3`

| # | Field | Type | Field ID | Options |
|---:|---|---|---|---|
| 1 | 工作年资 | `text` | `fldGLR4ISx` |  |
| 2 | 期别 112/116/128 | `text` | `fldO4fGMJ1` |  |
| 3 | 住家地址 | `text` | `fldWQSYat8` |  |
| 4 | Buddy | `text` | `fldWOFFOjz` |  |
| 5 | 年收入水平 | `text` | `fldNNu4G8I` |  |
| 6 | 身份证号码/护照号码 | `text` | `fldVaISR0W` |  |
| 7 | 公司地址 | `text` | `fldPDQpbBS` |  |
| 8 | Buddy Copy | `text` | `fldk8U82Re` |  |
| 9 | 我要创造的价值是什么？我承诺予团队的是什么？多说一说 | `text` | `fldGWIoxjL` |  |
| 10 | 中文全名 副本 | `text` | `fldG1rmQY6` |  |
| 11 | 公司名称 | `text` | `fldoBGcU8L` |  |
| 12 | 付出期别 1 /职位/ 摇篮曲 | `text` | `fldJ7p78Dn` |  |
| 13 | 主要家庭成员 | `text` | `fldjHW69nc` |  |
| 14 | 本人签名 | `text` | `fldRa37c1D` |  |
| 15 | 当教练的目的，多说一说 | `text` | `fldktVFtcC` |  |
| 16 | 对家庭的愿景 | `text` | `fldBMOUiD4` |  |
| 17 | 电子邮箱 | `text` | `fldJlL00GG` |  |
| 18 | 教练级别 | `select` | `fldmfJreVb` | 总教; 团长; 教练 |
| 19 | 教练确定(中心） | `select` | `fldT3zbAFu` | 当班; 不当班; 待定 |
| 20 | 高阶四阶段摇篮曲（三周末） | `text` | `fld3KeKs63` |  |
| 21 | 我承诺于KLCP教练付出之路，并服从以下教练行为守则。 | `text` | `fldfRQ1LYi` |  |
| 22 | 职位 | `text` | `fldx8Pp27X` |  |
| 23 | 娘家直属教练 | `text` | `fldDA94K0b` |  |
| 24 | 教练List | `formula` | `fldVrmW4gd` |  |
| 25 | 娘家期别 | `text` | `fldT55aGUm` |  |
| 26 | 付出期别 2/职位/ 摇篮曲 | `text` | `fldEoxzRSt` |  |
| 27 | 英文名字 (as per IC) | `text` | `fldkj796mb` |  |
| 28 | 付出期别 3 /职位/ 摇篮曲 | `text` | `fldLovBCsa` |  |
| 29 | 付出期别 4 /职位/ 摇篮曲 | `text` | `fldu5d07AS` |  |
| 30 | 承诺于KLCP教练付出之路，并服从以下教练行为守则。 | `select` | `fldeRsQg38` | 我承诺; 我不承诺 |
| 31 | 最亲密家庭成员，联系号码（名字/关系/联络号码） | `text` | `fldSyUUh7D` |  |
| 32 | 对事业的愿景 | `text` | `fldRae2M0j` |  |
| 33 | 我承诺KLCP教练行为守则 | `text` | `fldxBHYil5` |  |
| 34 | 誓约（期别，名字，誓约） | `text` | `fldkpQ5Bbz` |  |
| 35 | 联系号码 | `text` | `fldT9dvn1f` |  |
| 36 | 性别 | `select` | `fldfyRM7rq` | 男; 女 |
| 37 | 部门 | `text` | `fldWnOoa4b` |  |
| 38 | 中文全名 | `text` | `fldj5Fgkhm` |  |
| 39 | 付出期别 5 /职位/ 摇篮曲 副本 | `text` | `fldTLyxlXz` |  |
| 40 | 这段教练之路，可能会出现什么障碍/干扰/挑战？如果以上发生，你有什么新的可能性？ | `text` | `fldzMo5Otd` |  |
| 41 | 婚姻状况(已婚/单身) | `text` | `fldW8o3Q2Y` |  |

### ✅✅136教练-NEWBIBLE_（Dcode)

Category: `Bible core`  
Fields: `200`  
Views: `4`

| # | Field | Type | Field ID | Options |
|---:|---|---|---|---|
| 1 | 高阶一离开 (A,B,C,D) | `select` | `fldhktTdmb` | 高阶一守则前; 高阶一守则后第1天; 高阶一守则后第2天; 高阶一守则后第3天; 高阶一守则后第4天; 高阶一守则后第5天; 高阶四前; 高阶四后 |
| 2 | 字段 86 | `text` | `fldeaYbroD` |  |
| 3 | 字段 87 | `text` | `fldZn5urX2` |  |
| 4 | 膳食 | `select` | `fldbiUCP8C` | 素食; 荤食 |
| 5 | 字段 5 | `text` | `fldaNck1au` |  |
| 6 | 毕业证 (A,B,C,D) | `text` | `fld8M5DEZF` |  |
| 7 | 付费方式 (1) | `select` | `flds6ly10t` | Online Banking; Credit Card; Boldpay; 2775; 4900; Deposit Transfer |
| 8 | 字段 95 | `text` | `fldayllRqI` |  |
| 9 | 客户等级 | `select` | `fldqjJ9DuE` | A+; A; B; C |
| 10 | 基础 - 全款/订金 | `formula` | `fldjOprf2e` |  |
| 11 | SO/Transfer No. | `text` | `fldVfTh8yC` |  |
| 12 | 字段 55 | `text` | `fldEO30DHJ` |  |
| 13 | 高阶二已进课室人数 | `formula` | `fldRnyJp4h` |  |
| 14 | 字段 12 | `text` | `fldh9nRjKy` |  |
| 15 | 生日日期 | `datetime` | `fldqty2zuN` |  |
| 16 | 字段 100 | `text` | `fld6V36ZEu` |  |
| 17 | 州 | `select` | `fldDJzKBt7` | Kuala Lumpur; Johor; Kedah; Kelantan; Malacca; Negeri Sembilan; Pahang; Perak; Perlis; Penang; Sabah; Sarawak; Terengganu; Singapore; Selangor; Seremban |
| 18 | 基础确认期别 | `select` | `fld4FgLMyN` | KLCP131; KLCP132; KLCP133; KLCP135; KLCP136; KLCP137; KLCP138; KLCP139; KLCP140; Yes |
| 19 | 邮箱 | `text` | `fld7uLB2sP` |  |
| 20 | 酒店费用 | `number` | `fldGZYvrcS` |  |
| 21 | 字段 99 | `text` | `fldlsUZLnH` |  |
| 22 | 付费方式 | `select` | `fldktTMWFK` | Cash; Cheque; Online Banking; Boldpay; Credit Card; Deposit Transfer; 支付宝; 中国银行; Online Transfer; 2500 |
| 23 | 字段 56 | `text` | `fldkR17Wpq` |  |
| 24 | 基础2Call | `select` | `fld3PR7LZl` | Yes; No; 19/3-  主要emo推荐，公司领导强烈推荐，希望在个人性格，方向，处事态度方面改善提升<br>*汉文海星不要沟通连报优惠，报到当场再说，不要感觉hardsell<br>after cp walk 6pm<br>无忧无虑的生活，我需要跳出自己的舒适圈和勇敢尝试新事物 . 环游世界，我需要保持我每一年有 300k 以上的年收入 . 可能我的目标会更远大，让我的生命中出现我真正想要和为之奋斗的东西; 海星觉得不能上可以之后退，客服没有回应; 确保，海星1call 说照现在看是没有问题 |
| 25 | 高阶定金 (A,B,C,D) | `text` | `fld6DwF8on` |  |
| 26 | 高阶一C1-4信息  (A,B,C,D) | `select` | `fldCBOwgh2` | 已发出; 已回复 |
| 27 | 总费用 | `formula` | `fldH64Rore` |  |
| 28 | 高阶二后离开(A,B,C,D) | `select` | `fldYSq4dt1` | 高级二守则前; 高阶二守则后; 高阶三守则前; 高阶三守则后; 高阶四守则前; 高阶四守则后; 守则后第1天; 守则后第2天; 守则后第3天; 守则后第4天; 守则后第5天 |
| 29 | 字段 43 | `text` | `fld990X5Yj` |  |
| 30 | 字段 70 | `text` | `fldjJ0cFIR` |  |
| 31 | 基础酒店人数 | `select` | `fldxAC7Mji` | 3; 4; 5; 6; Landmark; Yes |
| 32 | 序号 | `formula` | `fldEV3sB63` |  |
| 33 | 杂费定金付费方式_高二  (A,B,C,D) | `lookup` | `fldG29QiQ9` |  |
| 34 | 高阶二C1-4信息  (A,B,C,D) | `lookup` | `fld6bJgztP` |  |
| 35 | 字段 102 | `text` | `fld1oL4Bxt` |  |
| 36 | 字段 39 | `text` | `fldxEU3Hxn` |  |
| 37 | 基础确认当班 | `select` | `fld8MIqSZ5` | 确认; 待确认; 不当班; 健康待审核; 健康不通过; 未接电话; KLCP136; KLCP137 |
| 38 | 字段 61 | `text` | `fld1JgTUm2` |  |
| 39 | 字段 76 | `text` | `fldidMls45` |  |
| 40 | 字段 92 | `text` | `fldeH0e3a0` |  |
| 41 | 字段 7 | `text` | `fldaIQ6SQA` |  |
| 42 | 字段 42 | `text` | `fld6T2cTA8` |  |
| 43 | 高阶 - 全款/订金 | `formula` | `fldsWv81U0` |  |
| 44 | 高阶付费方式 (A,B,C,D) | `text` | `fldTsnAeEi` |  |
| 45 | 公司规模 (多少人) | `number` | `fldcyxlNHg` |  |
| 46 | 市区 | `text` | `fld1DvHlU7` |  |
| 47 | 字段 13 | `text` | `fldcSc7ogJ` |  |
| 48 | 字段 35 | `text` | `fldpHOs8Cr` |  |
| 49 | 字段 23 | `text` | `fldReH5X9D` |  |
| 50 | 高阶一来的目的、急需解决的问题  (A,B,C,D) | `text` | `fldBTFVLKs` |  |
| 51 | 高阶学费  (A,B,C,D) | `text` | `fld68LoHe7` |  |
| 52 | 基础离开 | `select` | `fldUMPJqqk` | 基础守则前; 基础守则后第1天; 基础守则后第2天; 基础守则后第3天; 基础守则后第4天; 基础守则后第5天 |
| 53 | 高阶一已进课室 | `select` | `fldQEOsk5K` | KLCP131; KLCP132; KLCP133; KLCP135; KLCP136; KLCP137; KLCP138; KLCP139; KLCP140 |
| 54 | 字段 36 | `text` | `fldYvHcKei` |  |
| 55 | 年龄 | `number` | `fld4Ozu3jN` |  |
| 56 | 字段 22 | `text` | `fldWfWvtta` |  |
| 57 | 字段 11 | `text` | `fldAbKMEoC` |  |
| 58 | 杂费定金补款  (A,B,C,D) | `lookup` | `fldJU2FkyQ` |  |
| 59 | 字段 6 | `text` | `fldHrN8YgM` |  |
| 60 | 孩子 | `number` | `fldXA3u8NF` |  |
| 61 | 华语名字 | `text` | `fldIqZVRsw` |  |
| 62 | 字段 91 | `text` | `fldaiuH9VA` |  |
| 63 | 文字-4 | `text` | `fld9Nh7axi` |  |
| 64 | 杂费定金  (A,B,C,D) | `lookup` | `fld5YHqAUa` |  |
| 65 | 字段 97 | `text` | `fldi1B5HDV` |  |
| 66 | 高阶四已进课室 | `select` | `fldamK4R39` | KLCP131; KLCP132; KLCP133; KLCP135; KLCP136; KLCP137; KLCP138; KLCP139; KLCP140 |
| 67 | 字段 83 | `text` | `fld2e26N7X` |  |
| 68 | 高阶健康 | `text` | `fldqC8HLiJ` |  |
| 69 | 高阶五进课室 | `select` | `fldCpZoAnD` | MP18; MP19; MP20; ok最近工作性质比较晚睡，最早1/2am，有时3-5am才到家才睡，有时2-3小时睡眠，有时4-5小时，下午工作精神会比较难熬。去年年尾7/8月照过胃镜，Gastric和发炎，有吃药，吃西药会呕，之后有看医生吃中药，最后一次服药上个星期1x/3/26，目前有时偶尔吃一点就饱，有时吃不下，看情况的。; 去年年头妈妈有认为自己忧郁，当时心情低落，严重anti social。婆婆姑姑有神经症，没有一起居住，不熟。; 偶尔失眠，需要2-3小时入睡。; 平均睡眠6-8小时，浅眠，睡眠品质不好。血压偏低，之前试过一瞬间一片空白，贫血现象较少。几年前自己怀疑过自己忧郁因人比较负面，可是不会有自残的举动。母亲10多年前有忧郁，会自残，现在不会可人也不是很正能量，有时情绪会被带动到，目前没有一起居住可是一星期会见一次。有皮肤敏感，环境如果不干净，接触敏感事物会红肿觉得痒，本身也有照料，通常是轻微的，就会冲水后涂/吃止痒药，太干的情况也会干裂。冷的情况下鼻子容易敏感。; 中学时脚踝受过伤，已康复只是有时会需要扭一扭，不影响走动/跑。大妹有说自己忧郁，可是也没见有去看医生，目前也挺好。中学时有胃痛，上大学后就没有了目前。; 妈妈有忧郁症，很多年了，有吃药看医生，对自己的影响是要照顾她而已。 |
| 70 | 基础已进课室人数 | `formula` | `fldGYhSADi` |  |
| 71 | EMO 英文名字 | `text` | `fldFDwxkst` |  |
| 72 | 字段 33 | `text` | `fldEHZ8bzo` |  |
| 73 | 高阶一教练 | `text` | `fldjVaU8zJ` |  |
| 74 | 字段 90 | `text` | `fldo7hStzx` |  |
| 75 | 文字-3 | `text` | `fldACg9DB8` |  |
| 76 | 字段 31 | `text` | `fldgqu9BSe` |  |
| 77 | 字段 106 | `text` | `fldk2ABJZp` |  |
| 78 | 学号 | `text` | `fldcAKHYTF` |  |
| 79 | 高阶一问卷(A,B,C,D) | `select` | `fldUPUrzpQ` | Yes; No |
| 80 | 报名时间段 | `select` | `fldkVHa7Kp` | 星期五晚上; 星期六早上; 星期六中午; 星期六晚上; 星期日早上; 星期日小休【毕业后】; 星期日【结果1】; 星期日【结果2】; 星期日【结果3-结束】 |
| 81 | 字段 52 | `text` | `fldjI4tN9r` |  |
| 82 | 字段 45 | `text` | `fldMAtPwim` |  |
| 83 | Tax invoice name | `text` | `fldNQzMd0q` |  |
| 84 | 字段 72 | `text` | `fldowCbZvK` |  |
| 85 | EMO期别 | `text` | `fldtEM7csn` |  |
| 86 | 高阶一C1-3信息  (A,B,C,D) | `select` | `fldbcgHatV` | 已发出; 已回复; Yes |
| 87 | 字段 66 | `text` | `fld8N6oSP5` |  |
| 88 | 字段 10 | `text` | `fldI6gncKK` |  |
| 89 | 高阶二酒店费用  (A,B,C,D) | `lookup` | `fldKLj5OvZ` |  |
| 90 | 高阶二膳食费用  (A,B,C,D) | `lookup` | `fld7BTqcdC` |  |
| 91 | 字段 93 | `text` | `fldLgI4Z5Y` |  |
| 92 | 基础已进课室（KLCP) | `select` | `fldx22KkI9` | KLCP131; KLCP132; KLCP133; KLCP135; KLCP136; KLCP137; KLCP138; KLCP139; KLCP140 |
| 93 | 高阶二C1-3信息  (A,B,C,D) | `select` | `fldCgmJDvK` | 已回复; 已发出 |
| 94 | 高阶一1 Call Status (A,B,C,D) | `text` | `fldXcdUr7c` |  |
| 95 | 字段 32 | `text` | `fldMKJJ4Dp` |  |
| 96 | 字段 48 | `text` | `fldBeRspzu` |  |
| 97 | 文字-2 | `text` | `fldQxS590Q` |  |
| 98 | 字段 18 | `text` | `fldlyZmDke` |  |
| 99 | 字段 8 | `text` | `fldmq4KSxK` |  |
| 100 | 字段 4 | `text` | `fldNsWYBqV` |  |
| 101 | 高阶二已进课室 (A,B,C,D) | `select` | `fldcZavdOm` | KLCP131; KLCP112; KLCP132; KLCP133; KLCP135; KLCP136; KLCP137; KLCP138; KLCP139; KLCP140 |
| 102 | 基础阶段教练 | `text` | `fldHTH3wZ9` |  |
| 103 | 备注-转海星/消耗 | `text` | `fldmYPrj9l` |  |
| 104 | 高阶报读日期  (A,B,C,D) | `text` | `fldvKhoqzv` |  |
| 105 | 字段 3 | `text` | `fldFuQunIo` |  |
| 106 | 字段 49 | `text` | `fld5gOle8k` |  |
| 107 | 字段 79 | `text` | `fldwb9G9V7` |  |
| 108 | IC No | `text` | `fldPi9m6fA` |  |
| 109 | 个人海星位置 | `number` | `fldw1sPNp8` |  |
| 110 | 字段 107 | `text` | `fldSylNG2K` |  |
| 111 | 2 Call Status /学员的位置  (A,B,C,D) | `select` | `fldjcroYaI` | Yes; No，不当班; No,事业; No,家庭; YES; No.大目标; No.未上线; No.Happy 工作坊 待定 事业; No.Happy 事业待确认，自己都不确定什么结果; No, 教练没有提前和学员整理家庭对象和事业; No.事业需要重算+整理; No.教练没有提前整理家庭要梳理; 刘翊隆; Lau Aik Leong |
| 112 | 字段 103 | `text` | `fldbUkykrs` |  |
| 113 | 字段 68 | `text` | `fldyWVXlzk` |  |
| 114 | 字段 57 | `text` | `fldyJms19z` |  |
| 115 | 杂费定金付费方式 (A,B,C,D) | `lookup` | `fldG89UoDv` |  |
| 116 | 【报到】高阶一几点到 | `select` | `fldbcbfBgV` | 8pm-10pm; 10pm-12am; 12am后; 开课当天早上 |
| 117 | 基础报读日期 | `datetime` | `fldXqX3bDG` |  |
| 118 | 字段 81 | `text` | `fldlJ6uFdE` |  |
| 119 | 字段 94 | `text` | `fld662AGUE` |  |
| 120 | 高阶-Invoice Name | `text` | `fldcSFwUNA` |  |
| 121 | 高阶三已进课室人数 | `formula` | `fldG1VmmI3` |  |
| 122 | 高阶二后离开原因 | `text` | `fldghrGMDe` |  |
| 123 | 高阶一1call(A,B,C,D) | `select` | `fld3LBWyNZ` | Yes; No |
| 124 | 高阶一确认期别 (A,B,C,D) | `select` | `fld9EHqoBh` | KLCP135; KLCP136 |
| 125 | 行业性质 | `text` | `fldeGX47jN` |  |
| 126 | EMO 华语名字 | `text` | `fldpVM1MAg` |  |
| 127 | 字段 20 | `text` | `fld5aoY6iP` |  |
| 128 | 字段 58 | `text` | `fld0fABnPe` |  |
| 129 | 字段 38 | `text` | `fldr1kOMwb` |  |
| 130 | 字段 73 | `text` | `fldIQ0IASc` |  |
| 131 | 字段 37 | `text` | `fldj9ELWiB` |  |
| 132 | 字段 59 | `text` | `fld5X1nnkZ` |  |
| 133 | 字段 88 | `text` | `fldT8xbH18` |  |
| 134 | 高阶付费方式_1  (A,B,C,D) | `text` | `fld9pibfS8` |  |
| 135 | 序号—— | `number` | `fldvAP9Tsv` |  |
| 136 | 字段 40 | `text` | `fldKqQe5jO` |  |
| 137 | 基础学费 | `text` | `fldOGdbu8I` |  |
| 138 | 字段 84 | `text` | `fld9ZZJGje` |  |
| 139 | EMO 联络号码 | `text` | `fld0VFSV0R` |  |
| 140 | 基础问卷 | `select` | `fld2eXxUcJ` | Yes; No |
| 141 | 字段 46 | `text` | `fld2HALRma` |  |
| 142 | 邮政编号 | `number` | `fldoYxtpJe` |  |
| 143 | 字段 51 | `text` | `fldLz8O8LS` |  |
| 144 | 字段 24 | `text` | `fldZWzyMHV` |  |
| 145 | 高阶一2CalL (A,B,C,D) | `select` | `flde5hBvrW` | 确认; 待确认; 不当班; 健康待审核; 健康不通过; 未接电话; Yes |
| 146 | 字段 54 | `text` | `fldYLrUWpm` |  |
| 147 | 高阶二1 Call Status (A,B,C,D) | `text` | `fldrkv27ER` |  |
| 148 | 信念系统当班期别 (A,B,C,D) | `text` | `fldCsXxw3P` |  |
| 149 | 字段 27 | `text` | `fldnRie4rA` |  |
| 150 | 性别 | `select` | `fldHbPLVek` | 男; 女; 016-3702199; 012-2942928; 019-2637613; 017-2813732; 016-9550535; 018-2234822; 012-5548837 |
| 151 | 基础2Call Status<br>来的目的、急需解决的问题 | `text` | `fldtaHRKkE` |  |
| 152 | 字段 65 | `text` | `fldGYDFbXm` |  |
| 153 | 字段 82 | `text` | `fldat04rXH` |  |
| 154 | 字段 64 | `text` | `fld9VWOHcI` |  |
| 155 | 字段 44 | `text` | `fldC0K7SUE` |  |
| 156 | 高阶总费用 (A,B,C,D) | `text` | `fldCoHK6zh` |  |
| 157 | 8%SST | `number` | `fldKqsFNLd` |  |
| 158 | 基础转名额 | `select` | `fldJ4Ok5wY` | 基础已消耗; 基础已退款 |
| 159 | 字段 2 | `text` | `fldNe93UKk` |  |
| 160 | 高阶一已进课室人数 | `formula` | `fldPcaGbzz` |  |
| 161 | 高阶学费SST  (A,B,C,D) | `text` | `fldzpuXMP8` |  |
| 162 | 年收入 | `number` | `fldBv7HKrH` |  |
| 163 | 字段 26 | `text` | `fldIKUjhTT` |  |
| 164 | 基础1call | `select` | `fldsppqgFK` | Yes; No; 日期：23/3/26 时间：11.45pm 位置：由于个人因素决定不当班此次的课程<br>日期：2/3/26 时间：4.15pm 位置：确认136<br>2/3- call 136 at afternoon<br>日期：20/1/26 时间：1pm 位置：27/1母亲是会拿cancer报告的，29/1需再去第二次并未确定时间，目前无法确定是否可全程参与课程，会再update<br>日期：23/12/25 时间：5.20pm 位置：确认135<br>日期：27/11/25 时间：4.50pm 位置：海星还没确定135，有跟emo沟通了要1月的时候才能确定135日期的安排<br>27/11- call 135<br>日期：11/11/25 时间：1.40pm 位置：12月不行，1月待定，再确认后给我们知道<br>11/11- call 135<br>日期：19/10/25 时间：11.34am 位置：确认报读，时间待确认<br>Call; 日期：17/3/26 时间：7pm 位置：海星沟通参与不到136，待确认之后<br>日期：6/3/26 时间：3.54pm 位置：下星期一海星才能确定他136的安排是否ok，说有可能性会要出国，不过下星期再确定<br>5/3- call 136<br>日期：11/2/26 时间：3.15pm 位置：通知136时间，待之后安排<br>日期：5/11/25 时间：8pm 位置：了解之后的时间中<br>日期：13/8/2025 时间：2pm 位置：海星时间还没确定，需要再安排后通知<br>13/8 - call cp131 at 2pm; 日期：5/3/26 时间：12pm 位置：待确认136时间安排，需在开课前几天才能确认安排; 日期：9/3/26 时间：4.20pm 位置：确认137<br>日期：9/3/26 时间：3.20pm 位置：海星28/3全天是不能参与课程的，说是不能推，他说不清楚是要全程的<br>9/3- call after lunch; 日期：9/3/26 时间：3.20pm 位置：确认137<br>9/3... |
| 165 | 字段 78 | `text` | `fldgGMsjDS` |  |
| 166 | 婚姻 | `select` | `fldg5w01QF` | 单身; 已婚; 分居; 离婚; 丧偶; 0; 单身 Single |
| 167 | 基础健康 | `text` | `fldpbydaeC` |  |
| 168 | 字段 85 | `text` | `fldkYBg9TK` |  |
| 169 | 字段 34 | `text` | `fldVkqcPap` |  |
| 170 | 全报 | `select` | `fld37lkP7m` | 基础全款; 连报; 连报+全款; 连报+M; 连报+M+全款; 高阶; 高阶+全款; 高阶+M; 高阶+M+全款; 复读基础; 复读高阶; 复读-高阶+全款; 复读高阶+M; 复读-高阶+M+全款; 复读-高阶二; 毕业生-复读基础; 毕业生-复读基础+复读高阶一; 毕业生-复读基础+复读高阶二 |
| 171 | 字段 16 | `text` | `fldUIA3xJP` |  |
| 172 | 公司名称 | `text` | `fldPt86QXy` |  |
| 173 | 课室内名单 | `text` | `fldDnN0ySS` |  |
| 174 | 职位 | `text` | `fldiMuQal2` |  |
| 175 | 字段 41 | `text` | `fldXgoUCjc` |  |
| 176 | 字段 101 | `text` | `fldkskRZYS` |  |
| 177 | 紧急联系人（姓名、关系、电话） | `text` | `fldbdsENL8` |  |
| 178 | 字段 17 | `text` | `fldkeNi18G` |  |
| 179 | 信念系统当班  (A,B,C,D) | `select` | `fldZ6nnaBQ` | 当班; 不当班; 待确认 |
| 180 | 高阶补款 (A,B,C,D) | `text` | `flddyIpxbM` |  |
| 181 | 电话 | `text` | `fld3pODST1` |  |
| 182 | 高阶一确认当班人数 | `formula` | `fldinQISul` |  |
| 183 | 字段 105 | `text` | `fldkFDKjpA` |  |
| 184 | 年历 | `number` | `fldApjbspo` |  |
| 185 | 字段 30 | `text` | `fldmATMtIC` |  |
| 186 | 字段 74 | `text` | `fldJl3so1c` |  |
| 187 | 字段 9 | `text` | `fldlk44jk0` |  |
| 188 | 字段 50 | `text` | `flda0AhG99` |  |
| 189 | 字段 67 | `text` | `fld3dKLfrF` |  |
| 190 | 高阶二2Call  (A,B,C,D) | `select` | `fldpTEoMrj` | Yes; No |
| 191 | 高阶二教练 | `text` | `fldWmvMlWV` |  |
| 192 | 字段 19 | `text` | `fldUu5x9K1` |  |
| 193 | 字段 96 | `text` | `fldeVyYIfB` |  |
| 194 | 字段 71 | `text` | `flduBsIuFg` |  |
| 195 | 字段 28 | `text` | `fldKIb14QJ` |  |
| 196 | 基础C1-3信息 | `select` | `fldyCLPXM7` | 已发出; 已回复 |
| 197 | 文字-1 | `text` | `fldaqIBk4f` |  |
| 198 | 高阶二确认期别 (A,B,C,D) | `select` | `fldY4T4BzB` | KLCP131; KLCP132; KLCP133; KLCP135; KLCP136; KLCP137; KLCP138; KLCP139; KLCP140 |
| 199 | 杂费定金余款 (A,B,C,D) | `lookup` | `fldr8zEiwc` |  |
| 200 | 字段 25 | `text` | `fldaGZ82Pk` |  |

### ✅课程报名

Category: `Registration`  
Fields: `8`  
Views: `1`

| # | Field | Type | Field ID | Options |
|---:|---|---|---|---|
| 1 | SourceID | `text` | `fld1MdlDDB` |  |
| 2 | 定金 (RM) | `number` | `fldeyD79Cm` |  |
| 3 | 杂费 (RM) | `number` | `fldzT7825H` |  |
| 4 | 学费 (RM) | `number` | `fldgWwQInd` |  |
| 5 | 课程内容 | `text` | `fldoCh47Tk` |  |
| 6 | Total (RM) | `number` | `fldTWbD6Vk` |  |
| 7 | Grand Total (RM) | `number` | `fld0uBntfe` |  |
| 8 | 8% SST (RM) | `number` | `fldNFHrJtb` |  |

### ✅✅136-WHOLE-MASTERLIST【基础-高四】

Category: `Masterlist / final list`  
Fields: `141`  
Views: `38`

| # | Field | Type | Field ID | Options |
|---:|---|---|---|---|
| 1 | 高阶一确认当班 (A,B,C,D) | `select` | `fldb4fMdP3` | 确认; 待确认; 不当班; 未接电话; 健康待审核; 健康待不通过; 未接; 高阶一确认当班 (A,B,C,D); 1 |
| 2 | 州 | `select` | `fldDJzKBt7` | Kuala Lumpur; Johor; Kedah; Kelantan; Malacca; Negeri Sembilan; Pahang; Perak; Perlis; Penang; Sabah; Sarawak; Terengganu; Singapore; Selangor |
| 3 | 市区 | `text` | `fld1DvHlU7` |  |
| 4 | 文字-1 | `lookup` | `fldaqIBk4f` |  |
| 5 | 杂费定金  (A,B,C,D) | `number` | `fld5YHqAUa` |  |
| 6 | 文字-3 | `lookup` | `fldACg9DB8` |  |
| 7 | 文字-6 | `text` | `flde1ZMLci` |  |
| 8 | 学号 | `number` | `fldcAKHYTF` |  |
| 9 | 高阶二卓越宣言表  (A,B,C,D) | `select` | `fldyY1whEh` | Yes; No |
| 10 | 高阶一确认当班人数 | `formula` | `fldinQISul` |  |
| 11 | 高阶一教练 | `text` | `fldjVaU8zJ` |  |
| 12 | SO/Transfer No. | `number` | `fldVfTh8yC` |  |
| 13 | 高阶四已进课室人数 | `formula` | `fldrIarGll` |  |
| 14 | 高阶健康 | `text` | `fldqC8HLiJ` |  |
| 15 | 基础已进课室+英文名字 | `formula` | `fldEV3sB63` |  |
| 16 | 基础报读日期 | `datetime` | `fldXqX3bDG` |  |
| 17 | 高阶二后离开原因 | `text` | `fldghrGMDe` |  |
| 18 | 高阶余款  (A,B,C,D) | `number` | `fld5gM9QQd` |  |
| 19 | 膳食费用 | `select` | `fldJyjyJaw` | 375; 2300; 2675; 0; 1200 |
| 20 | 高阶补款 (A,B,C,D) | `number` | `flddyIpxbM` |  |
| 21 | 个人海星位置 | `number` | `fldw1sPNp8` |  |
| 22 | EMO 华语名字 | `text` | `fldpVM1MAg` |  |
| 23 | 高阶一酒店费用  (A,B,C,D) | `select` | `fldV1Ov1oJ` | 2300; 1485; 15800; 19904; 2350; 965; 2,300; 13149; 69 |
| 24 | 高阶总费用 (A,B,C,D) | `formula` | `fldCoHK6zh` |  |
| 25 | 高阶 - 全款/订金 | `formula` | `fldsWv81U0` |  |
| 26 | 基础 - 全款/订金 | `formula` | `fldMsWJGBD` |  |
| 27 | 高阶三已进课室 | `select` | `fldACn4pwe` | KLCP131; KLCP112; KLCP131; KLCP132; KLCP133; KLCP135; KLCP136; KLCP137; KLCP138; KLCP139; KLCP140 |
| 28 | 高阶二确认期别 (A,B,C,D) | `select` | `fldY4T4BzB` | KLCP135; KLCP136 |
| 29 | 高阶二1 Call Status (A,B,C,D) | `text` | `fldrkv27ER` |  |
| 30 | 基础学费 | `select` | `fldOGdbu8I` | 5000; 12500; 15800; 16300; 18900; 6800; 5,000; 13,300; 500; 1,580; $5000; $16,300 |
| 31 | 高阶一确认期别人数 | `formula` | `fldxCrwTN6` |  |
| 32 | 课室内名单 | `text` | `fldDnN0ySS` |  |
| 33 | 基础C1-4信息/Account Check | `select` | `fld7rF7lrx` | 已发出; 已回复; Nana 已确认 |
| 34 | 基础阶段教练 | `text` | `fldHTH3wZ9` |  |
| 35 | 毕业证 (A,B,C,D) | `text` | `fld8M5DEZF` |  |
| 36 | 【报到】高阶一几点到 | `select` | `fldbcbfBgV` | 8pm-10pm; 10pm-12am; 12am后; 开课当天早上 |
| 37 | 基础转名额 | `select` | `fldJ4Ok5wY` | 基础已消耗; 基础已退款 |
| 38 | 杂费定金付费方式_高二  (A,B,C,D) | `select` | `fldG29QiQ9` | Cash; Cheque; Online Banking; Boldpay; Credit Card; Deposit Transfer; 支付宝; 中国银行 |
| 39 | 结果期别 | `select` | `fldUcxqCzB` | JCP; Dcode; KLCP132; KLCP133; KLCP135; KLCP136; KLCP137; KLCP138; KLCP139; KLCP140; 复习; 复读; 复读-高阶二; 毕业生-基础-高阶二 |
| 40 | 文字-2 | `lookup` | `fldQxS590Q` |  |
| 41 | 杂费定金付费方式 (A,B,C,D) | `select` | `fldG89UoDv` | Cash; Cheque; Online Banking; Boldpay; Credit Card; Deposit Transfer; 支付宝; 中国银行 |
| 42 | 信念系统当班  (A,B,C,D) | `select` | `fldZ6nnaBQ` | 当班; 不当班; 待确认 |
| 43 | 婚姻 | `select` | `fldg5w01QF` | 单身; 已婚; 分居; 离婚; 丧偶; 0125351616; 医助; 已婚 Married |
| 44 | 性别 | `select` | `fldHbPLVek` | 男; 女 |
| 45 | 邮箱 | `text` | `fld7uLB2sP` |  |
| 46 | 高阶二酒店费用  (A,B,C,D) | `select` | `fldKLj5OvZ` | 2300; 0 |
| 47 | 文字-4 | `lookup` | `fld9Nh7axi` |  |
| 48 | 基础已进课室人数 | `formula` | `fldGYhSADi` |  |
| 49 | 父记录 | `link` | `fldCs2Rbnm` |  |
| 50 | 高阶付费方式 (A,B,C,D) | `select` | `fldTsnAeEi` | Cash; Cheque; Online Banking; Boldpay; Credit Card; Deposit Transfer; 支付宝; 中国银行; 2800; 13800; 9904 |
| 51 | 基础离开 | `select` | `fldUMPJqqk` | 基础守则前; 基础守则后第1天; 基础守则后第2天; 基础守则后第3天; 基础守则后第4天; 基础守则后第5天;  ; 守则后第二天; 守则后第三天 |
| 52 | 总费用 | `formula` | `fldH64Rore` |  |
| 53 | 邮政编号 | `number` | `fldoYxtpJe` |  |
| 54 | 紧急联系人（姓名、关系、电话） | `text` | `fldbdsENL8` |  |
| 55 | 高阶二后离开(A,B,C,D) | `select` | `fldYSq4dt1` | 高阶二守则前; 高阶二守则后; 高阶三守则前; 高阶三守则后; 高阶四守则前; 高阶四守则后; 守则后第1天; 守则后第2天; 守则后第3天; 守则后第4天; 守则后第5天 |
| 56 | 高阶二1call  (A,B,C,D) | `select` | `fldLFSilk8` | Yes; No |
| 57 | 公司名称 | `text` | `fldPt86QXy` |  |
| 58 | 高阶二C1-3信息  (A,B,C,D) | `select` | `fldCgmJDvK` | 已回复; 已发出 |
| 59 | 华语名字 | `text` | `fldIqZVRsw` |  |
| 60 | 信念系统当班期别 (A,B,C,D) | `select` | `fldCsXxw3P` | 学员; 教练 |
| 61 | 高阶一离开 (A,B,C,D) | `select` | `fldhktTdmb` | 高阶一守则前; 高阶一守则后第1天; 高阶一守则后第2天; 高阶一守则后第3天; 高阶一守则后第4天; 高阶一守则后第5天; 高阶四前; 高阶四后 |
| 62 | 高阶SO/Transfer No. (A,B,C,D) | `number` | `fldoGWsYc2` |  |
| 63 | IC No | `text` | `fldPi9m6fA` |  |
| 64 | 信念系统日期  (A,B,C,D) | `select` | `fld48s0YpN` | 当班; 不当班; 待确认 |
| 65 | 高阶二C1-4信息  (A,B,C,D) | `select` | `fld6bJgztP` | 已收 |
| 66 | 高阶一2CalL (A,B,C,D) | `select` | `flde5hBvrW` | 确认; 待确认; 不当班; 健康待审核; 健康不通过; 未接电话; Yes; 高二待定; 住宿钱诗莹，陈培嬿，周美怡3人要一起，如果可以3人一间，浅眠; 顾孩子、老公 ; 书写有压力; 付款会一半Cash，一半transfer<br>住宿钱诗莹，陈培嬿，周美怡3人要一起，如果可以3人一间，浅眠; 想再更深入地运用，继续把高阶上完。要锻炼影响力，帮助自己、身边人看结果。之前看目标会有借口，结果才是答案。要有更多的可能性可以帮助自己、团队100+人完成目标。; 130年尾工作忙。在Emo公司工作，工作要提升业绩，开始在学习带团队。目前没有要Mark有约。; 肉骨茶已经找到新的工人，想要做人、交流可以更好。没有聆听，两夫妻2个都爱答不理。没有安全感，不信任人，要增进人的关系。 |
| 67 | 【报到】高阶二几点到 | `select` | `fldRMzPjjv` | 8pm-10pm; 10pm-12am; 12am后; 开课当天早上 |
| 68 | 高阶一确认期别 (A,B,C,D) | `select` | `fld9EHqoBh` | KLCP135; KLCP136; 1 |
| 69 | 序号—— | `number` | `fldvAP9Tsv` |  |
| 70 | 高阶一已进课室 | `select` | `fldQEOsk5K` | KLCP131; KLCP132; KLCP133; KLCP135; KLCP136; KLCP137; KLCP138; KLCP139; KLCP140 |
| 71 | 职位 | `text` | `fldiMuQal2` |  |
| 72 | 年历 | `number` | `fldApjbspo` |  |
| 73 | 高阶转名额 | `select` | `fldHzSx5He` | 高阶已消耗; 高阶已退款; 27/10- 275mbb<br>19/10- 5000mbb<br>21/10- Evonne Chong Kar Yan500转给Lim Chun Kit<br>9/10- Shirlyn Lai500转给Evonne Chong Kar Yan |
| 74 | 年收入 | `number` | `fldBv7HKrH` |  |
| 75 | 电话 | `text` | `fld3pODST1` |  |
| 76 | 学员/教练 | `select` | `fldTqu9a5z` | 学员; 教练 |
| 77 | 高阶五已经课室 | `select` | `fldOL8qfBY` | MP18; MP19; MP20 |
| 78 | 高阶健康面谈 | `select` | `fldUyUboyG` | 已面谈; 面谈不通过 |
| 79 | 补款 | `number` | `fldAQqQ8io` |  |
| 80 | 孩子 | `number` | `fldXA3u8NF` |  |
| 81 | 文字-5 | `text` | `fld5Xz6qxB` |  |
| 82 | 高阶二总费用  (A,B,C,D) | `formula` | `fldqp668Em` |  |
| 83 | 高阶一已进课室人数 | `formula` | `fldPcaGbzz` |  |
| 84 | 【基础】Tax invoice name | `text` | `fldNQzMd0q` |  |
| 85 | 高阶一C1-3信息  (A,B,C,D) | `select` | `fldbcgHatV` | 已发出; 已回复; Yes |
| 86 | 高阶付费方式_1 | `select` | `fld9pibfS8` | Cash; Cheque; Online Banking; Boldpay; Credit Card; Deposit Transfer; 支付宝; 中国银行; 10000; 0; CC; BOLDPAY; CASH; 10149 |
| 87 | 基础1 Call Status | `text` | `fldtKneeQO` |  |
| 88 | 基础问卷 | `select` | `fld2eXxUcJ` | Yes; No; YES |
| 89 | 高阶报读日期  (A,B,C,D) | `text` | `fldvKhoqzv` |  |
| 90 | 英文名字 | `text` | `fld7bXtZTW` |  |
| 91 | 客户等级 | `select` | `fldqjJ9DuE` | A+; A; B; C |
| 92 | 杂费定金补款  (A,B,C,D) | `number` | `fldJU2FkyQ` |  |
| 93 | 高阶一来的目的、急需解决的问题  (A,B,C,D) | `text` | `fldBTFVLKs` |  |
| 94 | 酒店费用 | `select` | `fldGZYvrcS` | 200; 250; 300; 400; 0; 450; 290; 1200; 240; 350; 2,600 |
| 95 | 余款 | `number` | `fldVakFzdK` |  |
| 96 | 全报 | `select` | `fld37lkP7m` | 基础全款; 连报; 连报+全款; 连报+M; 连报+M+全款; 高阶; 高阶+全款; 高阶+M; 高阶+M+全款; 复读基础; 复读高阶; 复读-高阶一+全款; 复读高阶一+M; 复读-高阶一+M+全款; 复读-高阶二; 复读-高阶二+全款; 复读高阶二+M; 复读-高阶二+M+全款; 毕业生-复读基础; 毕业生-复读基础+复读高阶一; 毕业生-复读基础+复读高阶二; 复读基础+高阶; #REF!; 复读高阶二 |
| 97 | 高阶一问卷(A,B,C,D) | `select` | `fldUPUrzpQ` | Yes; No; YES |
| 98 | 高阶二确认当班 (A,B,C,D) | `select` | `fldVLGX5Vu` | 确认; 不当班; 待确认; 未接 |
| 99 | 高阶-Invoice Name | `text` | `fldcSFwUNA` |  |
| 100 | 高阶三已进课室人数 | `formula` | `fldG1VmmI3` |  |
| 101 | 备注-转海星/消耗 | `select` | `fldmYPrj9l` | Yes; No |
| 102 | 定金 | `number` | `fldSqTZCPk` |  |
| 103 | 付费方式 (1) | `select` | `flds6ly10t` | Cash; Cheque; Online Banking; Boldpay; Credit Card; Deposit Transfer; 支付宝; 中国银行; Online Transfer |
| 104 | 高阶一1 Call Status (A,B,C,D) | `text` | `fldXcdUr7c` |  |
| 105 | EMO 英文名字 | `text` | `fldFDwxkst` |  |
| 106 | 高阶定金 (A,B,C,D) | `number` | `fld6DwF8on` |  |
| 107 | 年龄 | `number` | `fld4Ozu3jN` |  |
| 108 | 公司规模 (多少人) | `number` | `fldcyxlNHg` |  |
| 109 | 基础确认期别 | `select` | `fld4FgLMyN` | KLCP131; KLCP132; KLCP133; KLCP135; KLCP136; KLCP137; KLCP138; KLCP139; KLCP140; KLCP121; KLCP130 |
| 110 | Mark有约意愿度 | `select` | `fldq89Umtt` | Yes; No |
| 111 | 高阶四已进课室 | `select` | `fldamK4R39` | KLCP131; KLCP132; KLCP133; KLCP135; KLCP136; KLCP137; KLCP138; KLCP139; KLCP140 |
| 112 | 杂费定金余款 (A,B,C,D) | `number` | `fldr8zEiwc` |  |
| 113 | 基础2Call Status<br>来的目的、急需解决的问题 | `text` | `fldtaHRKkE` |  |
| 114 | 高阶一1call(A,B,C,D) | `select` | `fld3LBWyNZ` | Yes; No; 5/3 确认136高阶一二当班，高阶三有2场重要的婚礼<br>不当班; 14/3 确认136高阶当班; 1/4 确认136高阶二，高阶一在场外 |
| 115 | 高阶学费SST  (A,B,C,D) | `formula` | `fldzpuXMP8` |  |
| 116 | 高阶一C1-4信息  (A,B,C,D) | `select` | `fldCBOwgh2` | 已发出; 已回复; 3-May-2026; 14/3; 5/3/26 |
| 117 | 基础1call | `select` | `fldsppqgFK` | Yes; No; YES |
| 118 | 基础已进课室（KLCP) | `select` | `fldx22KkI9` | KLCP131; KLCP132; KLCP133; KLCP135; KLCP136; KLCP137; KLCP138; KLCP139; KLCP140; KLCP121; KLCP130 |
| 119 | 行业性质 | `text` | `fldeGX47jN` |  |
| 120 | 基础健康 | `text` | `fldpbydaeC` |  |
| 121 | 8%SST | `formula` | `fldKqsFNLd` |  |
| 122 | EMO期别 | `select` | `fldtEM7csn` | KLCP131; KLCP132; KLCP133; KLCP135; KLCP136; KLCP137; KLCP138; KLCP139; KLCP140; KLCP108; KLCP115; KLCP35; KLCP101; KLCP96; KLCP26; KLCP91; KLCP65; KLCP69; KLCP40; KLCP129; KLCP109; KLCP107; KLCP123; KLCP125; KLCP105; KLCP 102; KLCP127; KLCP87; KLCP116; KLCP59; KLCP119; KLCP128 |
| 123 | 地址 | `text` | `fldA6GtRTG` |  |
| 124 | 备注 | `text` | `fldxiJJ1fR` |  |
| 125 | 高阶二膳食费用  (A,B,C,D) | `select` | `fld7BTqcdC` | 2300 |
| 126 | 2 Call Status /学员的位置  (A,B,C,D) | `text` | `fldjcroYaI` |  |
| 127 | 高阶二教练 | `text` | `fldWmvMlWV` |  |
| 128 | 高阶二已进课室人数 | `formula` | `fldRnyJp4h` |  |
| 129 | EMO 联络号码 | `text` | `fld0VFSV0R` |  |
| 130 | 基础C1-3信息 | `select` | `fldyCLPXM7` | 已发出; 已回复 |
| 131 | 高阶二2Call  (A,B,C,D) | `select` | `fldpTEoMrj` | Yes; No; 未上线; 待Happy想想 |
| 132 | 基础健康面谈 | `select` | `flduv1pk53` | 已面谈; 面谈不通过; yes; Yes |
| 133 | 高阶二已进课室 (A,B,C,D) | `select` | `fldcZavdOm` | KLCP131; KLCP112; KLCP132; KLCP133; KLCP135; KLCP136; KLCP137; KLCP138; KLCP139; KLCP140 |
| 134 | 基础酒店人数 | `select` | `fldxAC7Mji` | 3; 4; 5; 6; Landmark |
| 135 | 基础2Call | `select` | `fld3PR7LZl` | Yes; No |
| 136 | 生日日期 | `datetime` | `fldqty2zuN` |  |
| 137 | 基础确认当班 | `select` | `fld8MIqSZ5` | 确认; 待确认; 不当班; 健康待审核; 健康不通过; 未接电话 |
| 138 | 报名时间段 | `select` | `fldkVHa7Kp` | 基础开班; 星期五晚上; 星期六早上; 星期六中午; 星期六晚上; 星期日早上; 星期日小休【毕业后】; 星期日【结果1】; 星期日【结果2】; 星期日【结果3-结束】 |
| 139 | 高阶学费  (A,B,C,D) | `select` | `fld68LoHe7` | 5000; 12500; 15800; 16300; 18900; 6800; 14600; 10800; 13900; 1080; 1000; 1304; 864 |
| 140 | 膳食 | `select` | `fldbiUCP8C` | 素食; 荤食; No |
| 141 | 付费方式 | `select` | `fldktTMWFK` | Cash; Cheque; Online Banking; Boldpay; Credit Card; Deposit Transfer; 支付宝; 中国银行; Online Transfer |

### ✅✅136-旧Backlog【基础-高四】

Category: `Backlog / transition`  
Fields: `141`  
Views: `26`

| # | Field | Type | Field ID | Options |
|---:|---|---|---|---|
| 1 | 杂费定金付费方式_高二  (A,B,C,D) | `select` | `fldG29QiQ9` | Cash; Cheque; Online Banking; Boldpay; Credit Card; Deposit Transfer; 支付宝; 中国银行 |
| 2 | 高阶一确认期别 (A,B,C,D) | `select` | `fld9EHqoBh` | KLCP135; KLCP136 |
| 3 | 基础已进课室人数 | `formula` | `fldGYhSADi` |  |
| 4 | 高阶付费方式 (A,B,C,D) | `select` | `fldTsnAeEi` | Cash; Cheque; Online Banking; Boldpay; Credit Card; Deposit Transfer; 支付宝; 中国银行 |
| 5 | 公司规模 (多少人) | `number` | `fldcyxlNHg` |  |
| 6 | 2 Call Status /学员的位置  (A,B,C,D) | `lookup` | `fldjcroYaI` |  |
| 7 | 地址 | `text` | `fldA6GtRTG` |  |
| 8 | 高阶二C1-4信息  (A,B,C,D) | `text` | `fld6bJgztP` |  |
| 9 | 孩子 | `number` | `fldXA3u8NF` |  |
| 10 | 基础确认当班 | `select` | `fld8MIqSZ5` | 确认; 待确认; 不当班; 健康待审核; 健康不通过; 未接电话 |
| 11 | IC No | `text` | `fldPi9m6fA` |  |
| 12 | 高阶一1 Call Status (A,B,C,D) | `text` | `fldXcdUr7c` |  |
| 13 | EMO期别 | `select` | `fldtEM7csn` | KLCP131; KLCP132; KLCP133; KLCP135; KLCP136; KLCP137; KLCP138; KLCP139; KLCP140; KLCP108; KLCP115; KLCP35; KLCP101; KLCP96; KLCP26; KLCP91; KLCP65; KLCP69; KLCP40; KLCP129; KLCP109; KLCP107; KLCP123; KLCP125; KLCP105; KLCP 102; KLCP127; KLCP87; KLCP116; KLCP59; KLCP119; KLCP128 |
| 14 | 高阶 - 全款/订金 | `formula` | `fldsWv81U0` |  |
| 15 | 高阶三已进课室 | `select` | `fldACn4pwe` | KLCP131; KLCP112; KLCP131; KLCP132; KLCP133; KLCP135; KLCP136; KLCP137; KLCP138; KLCP139; KLCP140 |
| 16 | 膳食 | `select` | `fldbiUCP8C` | 素食; 荤食; No |
| 17 | 基础1call | `select` | `fldsppqgFK` | Yes; No; YES |
| 18 | 【报到】高阶二几点到 | `select` | `fldRMzPjjv` | 8pm-10pm; 10pm-12am; 12am后; 开课当天早上 |
| 19 | 华语名字 | `text` | `fldIqZVRsw` |  |
| 20 | 高阶二酒店费用  (A,B,C,D) | `select` | `fldKLj5OvZ` | 2300 |
| 21 | 信念系统当班  (A,B,C,D) | `select` | `fldZ6nnaBQ` | 当班; 不当班; 待确认 |
| 22 | 高阶二C1-3信息  (A,B,C,D) | `select` | `fldCgmJDvK` | 已回复; 已发出 |
| 23 | 【报到】高阶一几点到 | `select` | `fldbcbfBgV` | 8pm-10pm; 10pm-12am; 12am后; 开课当天早上 |
| 24 | 高阶三已进课室人数 | `formula` | `fldG1VmmI3` |  |
| 25 | 高阶四已进课室 | `select` | `fldamK4R39` | KLCP131; KLCP132; KLCP133; KLCP135; KLCP136; KLCP137; KLCP138; KLCP139; KLCP140 |
| 26 | 杂费定金余款 (A,B,C,D) | `number` | `fldr8zEiwc` |  |
| 27 | EMO 联络号码 | `text` | `fld0VFSV0R` |  |
| 28 | 婚姻 | `select` | `fldg5w01QF` | 单身; 已婚; 分居; 离婚; 丧偶; 0125351616; 医助; 已婚 Married |
| 29 | 杂费定金补款  (A,B,C,D) | `number` | `fldJU2FkyQ` |  |
| 30 | 文字-6 | `text` | `flde1ZMLci` |  |
| 31 | 付费方式 | `select` | `fldktTMWFK` | Cash; Cheque; Online Banking; Boldpay; Credit Card; Deposit Transfer; 支付宝; 中国银行; Online Transfer |
| 32 | EMO 华语名字 | `text` | `fldpVM1MAg` |  |
| 33 | 基础转名额 | `select` | `fldJ4Ok5wY` | 基础已消耗; 基础已退款 |
| 34 | 高阶二教练 | `number` | `fldWmvMlWV` |  |
| 35 | 高阶一2CalL (A,B,C,D) | `select` | `flde5hBvrW` | 确认; 待确认; 不当班; 健康待审核; 健康不通过; 未接电话; Yes; 高二待定; 住宿钱诗莹，陈培嬿，周美怡3人要一起，如果可以3人一间，浅眠; 顾孩子、老公 ; 书写有压力; 付款会一半Cash，一半transfer<br>住宿钱诗莹，陈培嬿，周美怡3人要一起，如果可以3人一间，浅眠 |
| 36 | 课室内名单 | `text` | `fldDnN0ySS` |  |
| 37 | 高阶一C1-4信息  (A,B,C,D) | `select` | `fldCBOwgh2` | 已发出; 已回复 |
| 38 | 基础 - 全款/订金 | `formula` | `fldMsWJGBD` |  |
| 39 | 高阶二确认期别 (A,B,C,D) | `select` | `fldY4T4BzB` | KLCP135 |
| 40 | 高阶一教练 | `text` | `fldjVaU8zJ` |  |
| 41 | 高阶一确认期别人数 | `formula` | `fldxCrwTN6` |  |
| 42 | 文字-3 | `text` | `fldACg9DB8` |  |
| 43 | 高阶报读日期  (A,B,C,D) | `text` | `fldvKhoqzv` |  |
| 44 | 高阶余款  (A,B,C,D) | `number` | `fld5gM9QQd` |  |
| 45 | 高阶四已进课室人数 | `formula` | `fldrIarGll` |  |
| 46 | 高阶二卓越宣言表  (A,B,C,D) | `text` | `fldyY1whEh` |  |
| 47 | 电话 | `text` | `fld3pODST1` |  |
| 48 | 基础2Call | `select` | `fld3PR7LZl` | Yes; No |
| 49 | 高阶-Invoice Name | `text` | `fldcSFwUNA` |  |
| 50 | 邮箱 | `text` | `fld7uLB2sP` |  |
| 51 | 学员/教练 | `select` | `fldTqu9a5z` | 学员; 教练 |
| 52 | 高阶二总费用  (A,B,C,D) | `formula` | `fldqp668Em` |  |
| 53 | 【基础】Tax invoice name | `text` | `fldNQzMd0q` |  |
| 54 | 高阶二确认当班 (A,B,C,D) | `select` | `fldVLGX5Vu` | 确认; 不当班; 待确认; 未接 |
| 55 | 高阶一1call(A,B,C,D) | `select` | `fld3LBWyNZ` | Yes; No; YES |
| 56 | 杂费定金  (A,B,C,D) | `number` | `fld5YHqAUa` |  |
| 57 | 高阶转名额 | `select` | `fldHzSx5He` | 高阶已消耗; 高阶已退款 |
| 58 | 高阶付费方式_1 | `select` | `fld9pibfS8` | Cash; Cheque; Online Banking; Boldpay; Credit Card; Deposit Transfer; 支付宝; 中国银行 |
| 59 | 毕业证 (A,B,C,D) | `text` | `fld8M5DEZF` |  |
| 60 | 客户等级 | `select` | `fldqjJ9DuE` | A+; A; B; C |
| 61 | 信念系统日期  (A,B,C,D) | `text` | `fld48s0YpN` |  |
| 62 | 高阶二2Call  (A,B,C,D) | `lookup` | `fldpTEoMrj` |  |
| 63 | 高阶二膳食费用  (A,B,C,D) | `select` | `fld7BTqcdC` | 2300 |
| 64 | 备注-转海星/消耗 | `text` | `fldmYPrj9l` |  |
| 65 | 基础问卷 | `select` | `fld2eXxUcJ` | Yes; No; YES |
| 66 | 文字-5 | `text` | `fld5Xz6qxB` |  |
| 67 | 序号—— | `number` | `fldvAP9Tsv` |  |
| 68 | 基础1 Call Status | `text` | `fldtKneeQO` |  |
| 69 | 性别 | `select` | `fldHbPLVek` | 男; 女 |
| 70 | 文字-2 | `text` | `fldQxS590Q` |  |
| 71 | 报名时间段 | `select` | `fldkVHa7Kp` | 基础开班; 星期五晚上; 星期六早上; 星期六中午; 星期六晚上; 星期日早上; 星期日小休【毕业后】; 星期日【结果1】; 星期日【结果2】; 星期日【结果3-结束】 |
| 72 | 高阶一C1-3信息  (A,B,C,D) | `select` | `fldbcgHatV` | 已发出; 已回复; Yes |
| 73 | 总费用 | `formula` | `fldH64Rore` |  |
| 74 | 高阶二1call  (A,B,C,D) | `select` | `fldLFSilk8` | Yes; No |
| 75 | 公司名称 | `text` | `fldPt86QXy` |  |
| 76 | 年龄 | `number` | `fld4Ozu3jN` |  |
| 77 | 高阶五已经课室 | `select` | `fldOL8qfBY` | MP18; MP19; MP20 |
| 78 | 高阶一已进课室人数 | `formula` | `fldPcaGbzz` |  |
| 79 | 基础C1-4信息/Account Check | `select` | `fld7rF7lrx` | 已发出; 已回复; Nana 已确认 |
| 80 | 基础学费 | `select` | `fldOGdbu8I` | 5000; 12500; 15800; 16300; 18900; 6800; 5,000; 13,300; 500; 1,580; $5000; $16,300 |
| 81 | 基础健康面谈 | `select` | `flduv1pk53` | 已面谈; 面谈不通过; yes; Yes |
| 82 | 文字-4 | `text` | `fld9Nh7axi` |  |
| 83 | 学号 | `number` | `fldcAKHYTF` |  |
| 84 | 结果期别 | `select` | `fldUcxqCzB` | JCP; Dcode; KLCP132; KLCP133; KLCP135; KLCP136; KLCP137; KLCP138; KLCP139; KLCP140; 复习; 复读; 复读-高阶二; 毕业生-基础-高阶二 |
| 85 | 文字-1 | `text` | `fldaqIBk4f` |  |
| 86 | 高阶二后离开原因 | `text` | `fldghrGMDe` |  |
| 87 | 紧急联系人（姓名、关系、电话） | `text` | `fldbdsENL8` |  |
| 88 | 行业性质 | `text` | `fldeGX47jN` |  |
| 89 | 基础C1-3信息 | `select` | `fldyCLPXM7` | 已发出; 已回复 |
| 90 | 信念系统当班期别 (A,B,C,D) | `text` | `fldCsXxw3P` |  |
| 91 | 高阶一酒店费用  (A,B,C,D) | `select` | `fldV1Ov1oJ` | 2300; 1485; 2,300 |
| 92 | 基础2Call Status<br>来的目的、急需解决的问题 | `text` | `fldtaHRKkE` |  |
| 93 | 余款 | `number` | `fldVakFzdK` |  |
| 94 | 备注 | `text` | `fldxiJJ1fR` |  |
| 95 | 基础确认期别 | `select` | `fld4FgLMyN` | KLCP131; KLCP132; KLCP133; KLCP135; KLCP136; KLCP137; KLCP138; KLCP139; KLCP140; KLCP121; KLCP130 |
| 96 | 付费方式 (1) | `select` | `flds6ly10t` | Cash; Cheque; Online Banking; Boldpay; Credit Card; Deposit Transfer; 支付宝; 中国银行; Online Transfer |
| 97 | 基础阶段教练 | `text` | `fldHTH3wZ9` |  |
| 98 | 生日日期 | `datetime` | `fldqty2zuN` |  |
| 99 | 高阶一离开 (A,B,C,D) | `select` | `fldhktTdmb` | 高阶一守则前; 高阶一守则后第1天; 高阶一守则后第2天; 高阶一守则后第3天; 高阶一守则后第4天; 高阶一守则后第5天; 高阶四前; 高阶四后 |
| 100 | 高阶一来的目的、急需解决的问题  (A,B,C,D) | `text` | `fldBTFVLKs` |  |
| 101 | 基础已进课室（KLCP) | `select` | `fldx22KkI9` | KLCP131; KLCP132; KLCP133; KLCP135; KLCP136; KLCP137; KLCP138; KLCP139; KLCP140; KLCP121; KLCP130 |
| 102 | 定金 | `number` | `fldSqTZCPk` |  |
| 103 | 基础健康 | `text` | `fldpbydaeC` |  |
| 104 | 市区 | `text` | `fld1DvHlU7` |  |
| 105 | 高阶健康 | `text` | `fldqC8HLiJ` |  |
| 106 | 杂费定金付费方式 (A,B,C,D) | `select` | `fldG89UoDv` | Cash; Cheque; Online Banking; Boldpay; Credit Card; Deposit Transfer; 支付宝; 中国银行 |
| 107 | 高阶一确认当班人数 | `formula` | `fldinQISul` |  |
| 108 | 个人海星位置 | `number` | `fldw1sPNp8` |  |
| 109 | 年收入 | `number` | `fldBv7HKrH` |  |
| 110 | 高阶健康面谈 | `select` | `fldUyUboyG` | 已面谈; 面谈不通过 |
| 111 | 高阶补款 (A,B,C,D) | `number` | `flddyIpxbM` |  |
| 112 | 高阶学费SST  (A,B,C,D) | `formula` | `fldzpuXMP8` |  |
| 113 | SO/Transfer No. | `number` | `fldVfTh8yC` |  |
| 114 | 基础离开 | `select` | `fldUMPJqqk` | 基础守则前; 基础守则后第1天; 基础守则后第2天; 基础守则后第3天; 基础守则后第4天; 基础守则后第5天;  ; 守则后第二天; 守则后第三天 |
| 115 | EMO 英文名字 | `text` | `fldFDwxkst` |  |
| 116 | 邮政编号 | `number` | `fldoYxtpJe` |  |
| 117 | 高阶二1 Call Status (A,B,C,D) | `text` | `fldrkv27ER` |  |
| 118 | 高阶二已进课室人数 | `formula` | `fldRnyJp4h` |  |
| 119 | 高阶SO/Transfer No. (A,B,C,D) | `number` | `fldoGWsYc2` |  |
| 120 | 高阶一问卷(A,B,C,D) | `select` | `fldUPUrzpQ` | Yes; No |
| 121 | 酒店费用 | `select` | `fldGZYvrcS` | 200; 250; 300; 400; 0; 450; 290; 1200; 240; 350; 2,600 |
| 122 | 全报 | `select` | `fld37lkP7m` | 基础全款; 连报; 连报+全款; 连报+M; 连报+M+全款; 高阶; 高阶+全款; 高阶+M; 高阶+M+全款; 复读基础; 复读高阶; 复读-高阶一+全款; 复读高阶一+M; 复读-高阶一+M+全款; 复读-高阶二; 复读-高阶二+全款; 复读高阶二+M; 复读-高阶二+M+全款; 毕业生-复读基础; 毕业生-复读基础+复读高阶一; 毕业生-复读基础+复读高阶二; 复读基础+高阶; #REF! |
| 123 | 膳食费用 | `select` | `fldJyjyJaw` | 375; 2300; 2675; 0; 1200 |
| 124 | 高阶学费  (A,B,C,D) | `select` | `fld68LoHe7` | 5000; 12500; 15800; 16300; 18900; 6800; 14600; 10800; 13900; 1080 |
| 125 | 父记录 | `link` | `fldCs2Rbnm` |  |
| 126 | 高阶一已进课室 | `select` | `fldQEOsk5K` | KLCP131; KLCP132; KLCP133; KLCP135; KLCP136; KLCP137; KLCP138; KLCP139; KLCP140 |
| 127 | 基础酒店人数 | `select` | `fldxAC7Mji` | 3; 4; 5; 6; Landmark |
| 128 | 8%SST | `formula` | `fldKqsFNLd` |  |
| 129 | 州 | `select` | `fldDJzKBt7` | Kuala Lumpur; Johor; Kedah; Kelantan; Malacca; Negeri Sembilan; Pahang; Perak; Perlis; Penang; Sabah; Sarawak; Terengganu; Singapore; Selangor |
| 130 | Mark有约意愿度 | `select` | `fldq89Umtt` | Yes; No |
| 131 | 高阶一确认当班 (A,B,C,D) | `select` | `fldb4fMdP3` | 确认; 待确认; 不当班; 未接电话; 健康待审核; 健康待不通过; 未接; 高阶一确认当班 (A,B,C,D) |
| 132 | 基础报读日期 | `datetime` | `fldXqX3bDG` |  |
| 133 | 基础已进课室+英文名字 | `formula` | `fldEV3sB63` |  |
| 134 | 职位 | `text` | `fldiMuQal2` |  |
| 135 | 高阶二后离开(A,B,C,D) | `select` | `fldYSq4dt1` | 高级二守则前; 高阶二守则后; 高阶三守则前; 高阶三守则后; 高阶四守则前; 高阶四守则后; 守则后第1天; 守则后第2天; 守则后第3天; 守则后第4天; 守则后第5天 |
| 136 | 高阶总费用 (A,B,C,D) | `formula` | `fldCoHK6zh` |  |
| 137 | 英文名字 | `text` | `fld7bXtZTW` |  |
| 138 | 年历 | `number` | `fldApjbspo` |  |
| 139 | 补款 | `number` | `fldAQqQ8io` |  |
| 140 | 高阶定金 (A,B,C,D) | `number` | `fld6DwF8on` |  |
| 141 | 高阶二已进课室 (A,B,C,D) | `select` | `fldcZavdOm` | KLCP131; KLCP112; KLCP132; KLCP133; KLCP135; KLCP136; KLCP137; KLCP138; KLCP139; KLCP140 |

### ✅✅136-【神奇宝宝】WHOLE-MASTERLIST【基础-高四】

Category: `Masterlist / final list`  
Fields: `141`  
Views: `26`

| # | Field | Type | Field ID | Options |
|---:|---|---|---|---|
| 1 | 年收入 | `number` | `fldBv7HKrH` |  |
| 2 | 基础确认期别 | `select` | `fld4FgLMyN` | KLCP131; KLCP132; KLCP133; KLCP135; KLCP136; KLCP137; KLCP138; KLCP139; KLCP140 |
| 3 | 州 | `select` | `fldDJzKBt7` | Kuala Lumpur; Johor; Kedah; Kelantan; Malacca; Negeri Sembilan; Pahang; Perak; Perlis; Penang; Sabah; Sarawak; Terengganu; Singapore; Selangor |
| 4 | 高阶一1 Call Status (A,B,C,D) | `text` | `fldXcdUr7c` |  |
| 5 | EMO期别 | `select` | `fldtEM7csn` | KLCP131; KLCP132; KLCP133; KLCP135; KLCP136; KLCP137; KLCP138; KLCP139; KLCP140; KLCP108; KLCP115; KLCP35; KLCP101; KLCP96; KLCP26; KLCP91; KLCP65; KLCP69; KLCP40; KLCP129; KLCP109; KLCP107; KLCP123; KLCP125; KLCP105; KLCP 102; KLCP127; KLCP87; KLCP116; KLCP59 |
| 6 | 高阶二已进课室 (A,B,C,D) | `select` | `fldcZavdOm` | KLCP131; KLCP112; KLCP132; KLCP133; KLCP135; KLCP136; KLCP137; KLCP138; KLCP139; KLCP140 |
| 7 | 孩子 | `number` | `fldXA3u8NF` |  |
| 8 | EMO 联络号码 | `text` | `fld0VFSV0R` |  |
| 9 | 邮政编号 | `number` | `fldoYxtpJe` |  |
| 10 | 膳食费用 | `select` | `fldJyjyJaw` | 375; 2300; 2675; 0; 1200 |
| 11 | 高阶一确认期别人数 | `formula` | `fldxCrwTN6` |  |
| 12 | 英文名字 | `text` | `fld7bXtZTW` |  |
| 13 | 高阶付费方式_1 | `select` | `fld9pibfS8` | Cash; Cheque; Online Banking; Boldpay; Credit Card; Deposit Transfer; 支付宝; 中国银行 |
| 14 | 高阶一2CalL (A,B,C,D) | `select` | `flde5hBvrW` | 确认; 待确认; 不当班; 健康待审核; 健康不通过; 未接电话; Yes; 高二待定; 住宿钱诗莹，陈培嬿，周美怡3人要一起，如果可以3人一间，浅眠; 顾孩子、老公 ; 书写有压力; 付款会一半Cash，一半transfer<br>住宿钱诗莹，陈培嬿，周美怡3人要一起，如果可以3人一间，浅眠 |
| 15 | 文字-1 | `text` | `fldaqIBk4f` |  |
| 16 | 定金 | `number` | `fldSqTZCPk` |  |
| 17 | 杂费定金付费方式_高二  (A,B,C,D) | `select` | `fldG29QiQ9` | Cash; Cheque; Online Banking; Boldpay; Credit Card; Deposit Transfer; 支付宝; 中国银行 |
| 18 | 公司名称 | `text` | `fldPt86QXy` |  |
| 19 | 高阶一确认当班人数 | `formula` | `fldinQISul` |  |
| 20 | 高阶二1 Call Status (A,B,C,D) | `text` | `fldrkv27ER` |  |
| 21 | 信念系统当班期别 (A,B,C,D) | `text` | `fldCsXxw3P` |  |
| 22 | 高阶二酒店费用  (A,B,C,D) | `select` | `fldKLj5OvZ` | 2300 |
| 23 | 个人海星位置 | `number` | `fldw1sPNp8` |  |
| 24 | 结果期别 | `select` | `fldUcxqCzB` | JCP; Dcode; KLCP132; KLCP133; KLCP135; KLCP136; KLCP137; KLCP138; KLCP139; KLCP140; 复习; 复读; 复读-高阶二; 毕业生-基础-高阶二 |
| 25 | 毕业证 (A,B,C,D) | `text` | `fld8M5DEZF` |  |
| 26 | 高阶定金 (A,B,C,D) | `number` | `fld6DwF8on` |  |
| 27 | 高阶健康 | `text` | `fldqC8HLiJ` |  |
| 28 | 高阶补款 (A,B,C,D) | `number` | `flddyIpxbM` |  |
| 29 | 备注 | `text` | `fldxiJJ1fR` |  |
| 30 | 文字-3 | `text` | `fldACg9DB8` |  |
| 31 | 报名时间段 | `select` | `fldkVHa7Kp` | 基础开班; 星期五晚上; 星期六早上; 星期六中午; 星期六晚上; 星期日早上; 星期日小休【毕业后】; 星期日【结果1】; 星期日【结果2】; 星期日【结果3-结束】 |
| 32 | 基础确认当班 | `select` | `fld8MIqSZ5` | 确认; 待确认; 不当班; 健康待审核; 健康不通过; 未接电话 |
| 33 | 高阶 - 全款/订金 | `formula` | `fldsWv81U0` |  |
| 34 | 高阶二后离开原因 | `text` | `fldghrGMDe` |  |
| 35 | 高阶二教练 | `text` | `fldWmvMlWV` |  |
| 36 | 基础酒店人数 | `select` | `fldxAC7Mji` | 3; 4; 5; 6; Landmark |
| 37 | SO/Transfer No. | `number` | `fldVfTh8yC` |  |
| 38 | 高阶三已进课室 | `select` | `fldACn4pwe` | KLCP131; KLCP112; KLCP131; KLCP132; KLCP133; KLCP135; KLCP136; KLCP137; KLCP138; KLCP139; KLCP140 |
| 39 | 高阶四已进课室人数 | `formula` | `fldrIarGll` |  |
| 40 | 高阶余款  (A,B,C,D) | `number` | `fld5gM9QQd` |  |
| 41 | 高阶二C1-4信息  (A,B,C,D) | `text` | `fld6bJgztP` |  |
| 42 | 基础转名额 | `select` | `fldJ4Ok5wY` | 基础已消耗; 基础已退款 |
| 43 | 年历 | `number` | `fldApjbspo` |  |
| 44 | 杂费定金付费方式 (A,B,C,D) | `select` | `fldG89UoDv` | Cash; Cheque; Online Banking; Boldpay; Credit Card; Deposit Transfer; 支付宝; 中国银行 |
| 45 | 高阶一教练 | `text` | `fldjVaU8zJ` |  |
| 46 | 高阶一C1-3信息  (A,B,C,D) | `select` | `fldbcgHatV` | 已发出; 已回复; Yes |
| 47 | 高阶一C1-4信息  (A,B,C,D) | `select` | `fldCBOwgh2` | 已发出; 已回复 |
| 48 | 基础1 Call Status | `text` | `fldtKneeQO` |  |
| 49 | 高阶总费用 (A,B,C,D) | `formula` | `fldCoHK6zh` |  |
| 50 | 高阶四已进课室 | `select` | `fldamK4R39` | KLCP131; KLCP132; KLCP133; KLCP135; KLCP136; KLCP137; KLCP138; KLCP139; KLCP140 |
| 51 | 基础C1-4信息/Account Check | `select` | `fld7rF7lrx` | 已发出; 已回复; Nana 已确认 |
| 52 | 基础C1-3信息 | `select` | `fldyCLPXM7` | 已发出; 已回复 |
| 53 | 职位 | `text` | `fldiMuQal2` |  |
| 54 | 电话 | `text` | `fld3pODST1` |  |
| 55 | 性别 | `select` | `fldHbPLVek` | 男; 女 |
| 56 | 总费用 | `formula` | `fldH64Rore` |  |
| 57 | 基础健康 | `text` | `fldpbydaeC` |  |
| 58 | 高阶学费SST  (A,B,C,D) | `formula` | `fldzpuXMP8` |  |
| 59 | 基础 - 全款/订金 | `formula` | `fldMsWJGBD` |  |
| 60 | 文字-5 | `text` | `fld5Xz6qxB` |  |
| 61 | 文字-4 | `text` | `fld9Nh7axi` |  |
| 62 | 杂费定金余款 (A,B,C,D) | `number` | `fldr8zEiwc` |  |
| 63 | 高阶学费  (A,B,C,D) | `select` | `fld68LoHe7` | 5000; 12500; 15800; 16300; 18900; 6800; 14600; 10800; 13900; 1080 |
| 64 | 高阶付费方式 (A,B,C,D) | `select` | `fldTsnAeEi` | Cash; Cheque; Online Banking; Boldpay; Credit Card; Deposit Transfer; 支付宝; 中国银行 |
| 65 | 客户等级 | `select` | `fldqjJ9DuE` | A+; A; B; C |
| 66 | EMO 华语名字 | `text` | `fldpVM1MAg` |  |
| 67 | 学号 | `number` | `fldcAKHYTF` |  |
| 68 | 2 Call Status /学员的位置  (A,B,C,D) | `lookup` | `fldjcroYaI` |  |
| 69 | EMO 英文名字 | `text` | `fldFDwxkst` |  |
| 70 | 补款 | `number` | `fldAQqQ8io` |  |
| 71 | 高阶三已进课室人数 | `formula` | `fldG1VmmI3` |  |
| 72 | 基础已进课室人数 | `formula` | `fldGYhSADi` |  |
| 73 | 高阶一问卷(A,B,C,D) | `select` | `fldUPUrzpQ` | Yes; No |
| 74 | 高阶健康面谈 | `select` | `fldUyUboyG` | 已面谈; 面谈不通过 |
| 75 | 行业性质 | `text` | `fldeGX47jN` |  |
| 76 | 高阶报读日期  (A,B,C,D) | `text` | `fldvKhoqzv` |  |
| 77 | 地址 | `text` | `fldA6GtRTG` |  |
| 78 | 基础已进课室（KLCP) | `select` | `fldx22KkI9` | KLCP131; KLCP132; KLCP133; KLCP135; KLCP136; KLCP137; KLCP138; KLCP139; KLCP140 |
| 79 | 高阶SO/Transfer No. (A,B,C,D) | `number` | `fldoGWsYc2` |  |
| 80 | 公司规模 (多少人) | `number` | `fldcyxlNHg` |  |
| 81 | 基础学费 | `select` | `fldOGdbu8I` | 5000; 12500; 15800; 16300; 18900; 6800; 5,000; 13,300; 500; 1,580; $5000 |
| 82 | 膳食 | `select` | `fldbiUCP8C` | 素食; 荤食; No |
| 83 | 父记录 | `link` | `fldCs2Rbnm` |  |
| 84 | 高阶一来的目的、急需解决的问题  (A,B,C,D) | `text` | `fldBTFVLKs` |  |
| 85 | 市区 | `text` | `fld1DvHlU7` |  |
| 86 | 全报 | `select` | `fld37lkP7m` | 基础全款; 连报; 连报+全款; 连报+M; 连报+M+全款; 高阶; 高阶+全款; 高阶+M; 高阶+M+全款; 复读基础; 复读高阶; 复读-高阶一+全款; 复读高阶一+M; 复读-高阶一+M+全款; 复读-高阶二; 复读-高阶二+全款; 复读高阶二+M; 复读-高阶二+M+全款; 毕业生-复读基础; 毕业生-复读基础+复读高阶一; 毕业生-复读基础+复读高阶二; 复读基础+高阶 |
| 87 | 高阶一1call(A,B,C,D) | `select` | `fld3LBWyNZ` | Yes; No |
| 88 | 基础问卷 | `select` | `fld2eXxUcJ` | Yes; No; YES |
| 89 | 高阶一离开 (A,B,C,D) | `select` | `fldhktTdmb` | 高阶一守则前; 高阶一守则后第1天; 高阶一守则后第2天; 高阶一守则后第3天; 高阶一守则后第4天; 高阶一守则后第5天; 高阶四前; 高阶四后 |
| 90 | 文字-2 | `text` | `fldQxS590Q` |  |
| 91 | 高阶一酒店费用  (A,B,C,D) | `select` | `fldV1Ov1oJ` | 2300; 1485 |
| 92 | 信念系统当班  (A,B,C,D) | `select` | `fldZ6nnaBQ` | 当班; 不当班; 待确认 |
| 93 | 付费方式 (1) | `select` | `flds6ly10t` | Cash; Cheque; Online Banking; Boldpay; Credit Card; Deposit Transfer; 支付宝; 中国银行; Online Transfer |
| 94 | 8%SST | `formula` | `fldKqsFNLd` |  |
| 95 | 杂费定金补款  (A,B,C,D) | `number` | `fldJU2FkyQ` |  |
| 96 | 高阶二卓越宣言表  (A,B,C,D) | `text` | `fldyY1whEh` |  |
| 97 | 高阶二后离开(A,B,C,D) | `select` | `fldYSq4dt1` | 高级二守则前; 高阶二守则后; 高阶三守则前; 高阶三守则后; 高阶四守则前; 高阶四守则后; 守则后第1天; 守则后第2天; 守则后第3天; 守则后第4天; 守则后第5天 |
| 98 | 杂费定金  (A,B,C,D) | `number` | `fld5YHqAUa` |  |
| 99 | 高阶二1call  (A,B,C,D) | `select` | `fldLFSilk8` | Yes; No |
| 100 | 基础2Call | `select` | `fld3PR7LZl` | Yes; No |
| 101 | 基础阶段教练 | `text` | `fldHTH3wZ9` |  |
| 102 | 华语名字 | `text` | `fldIqZVRsw` |  |
| 103 | 高阶五已经课室 | `select` | `fldOL8qfBY` | MP18; MP19; MP20 |
| 104 | 基础1call | `select` | `fldsppqgFK` | Yes; No; YES |
| 105 | 基础已进课室+英文名字 | `formula` | `fldEV3sB63` |  |
| 106 | 邮箱 | `text` | `fld7uLB2sP` |  |
| 107 | 高阶二确认当班 (A,B,C,D) | `select` | `fldVLGX5Vu` | 确认; 不当班; 待确认; 未接 |
| 108 | 付费方式 | `select` | `fldktTMWFK` | Cash; Cheque; Online Banking; Boldpay; Credit Card; Deposit Transfer; 支付宝; 中国银行; Online Transfer |
| 109 | 【报到】高阶二几点到 | `select` | `fldRMzPjjv` | 8pm-10pm; 10pm-12am; 12am后; 开课当天早上 |
| 110 | 婚姻 | `select` | `fldg5w01QF` | 单身; 已婚; 分居; 离婚; 丧偶; 0125351616; 医助 |
| 111 | 高阶一确认期别 (A,B,C,D) | `select` | `fld9EHqoBh` | KLCP135; KLCP136 |
| 112 | 基础离开 | `select` | `fldUMPJqqk` | 基础守则前; 基础守则后第1天; 基础守则后第2天; 基础守则后第3天; 基础守则后第4天; 基础守则后第5天;  ; 守则后第二天; 守则后第三天 |
| 113 | 高阶一已进课室人数 | `formula` | `fldPcaGbzz` |  |
| 114 | 高阶二2Call  (A,B,C,D) | `lookup` | `fldpTEoMrj` |  |
| 115 | 【报到】高阶一几点到 | `select` | `fldbcbfBgV` | 8pm-10pm; 10pm-12am; 12am后; 开课当天早上 |
| 116 | 高阶一已进课室 | `select` | `fldQEOsk5K` | KLCP131; KLCP132; KLCP133; KLCP135; KLCP136; KLCP137; KLCP138; KLCP139; KLCP140 |
| 117 | 序号—— | `number` | `fldvAP9Tsv` |  |
| 118 | 高阶一确认当班 (A,B,C,D) | `select` | `fldb4fMdP3` | 确认; 待确认; 不当班; 未接电话; 健康待审核; 健康待不通过; 未接; 高阶一确认当班 (A,B,C,D) |
| 119 | 高阶转名额 | `select` | `fldHzSx5He` | 高阶已消耗; 高阶已退款 |
| 120 | 信念系统日期  (A,B,C,D) | `text` | `fld48s0YpN` |  |
| 121 | 学员/教练 | `select` | `fldTqu9a5z` | 学员; 教练 |
| 122 | 年龄 | `number` | `fld4Ozu3jN` |  |
| 123 | 高阶二确认期别 (A,B,C,D) | `select` | `fldY4T4BzB` | KLCP135 |
| 124 | 酒店费用 | `select` | `fldGZYvrcS` | 200; 250; 300; 400; 0; 450; 290; 1200; 240; 350 |
| 125 | 高阶二膳食费用  (A,B,C,D) | `select` | `fld7BTqcdC` | 2300 |
| 126 | Mark有约意愿度 | `select` | `fldq89Umtt` | Yes; No |
| 127 | 备注-转海星/消耗 | `text` | `fldmYPrj9l` |  |
| 128 | 高阶二已进课室人数 | `formula` | `fldRnyJp4h` |  |
| 129 | 紧急联系人（姓名、关系、电话） | `text` | `fldbdsENL8` |  |
| 130 | 基础2Call Status<br>来的目的、急需解决的问题 | `text` | `fldtaHRKkE` |  |
| 131 | 高阶-Invoice Name | `text` | `fldcSFwUNA` |  |
| 132 | 高阶二总费用  (A,B,C,D) | `formula` | `fldqp668Em` |  |
| 133 | 基础健康面谈 | `select` | `flduv1pk53` | 已面谈; 面谈不通过; yes; Yes |
| 134 | 文字-6 | `text` | `flde1ZMLci` |  |
| 135 | 课室内名单 | `text` | `fldDnN0ySS` |  |
| 136 | IC No | `text` | `fldPi9m6fA` |  |
| 137 | 【基础】Tax invoice name | `text` | `fldNQzMd0q` |  |
| 138 | 基础报读日期 | `datetime` | `fldXqX3bDG` |  |
| 139 | 余款 | `number` | `fldVakFzdK` |  |
| 140 | 高阶二C1-3信息  (A,B,C,D) | `select` | `fldCgmJDvK` | 已回复; 已发出 |
| 141 | 生日日期 | `datetime` | `fldqty2zuN` |  |

### ✅135-【旧Backlog进现行】WHOLE-MASTERLIST 高阶一Bible.

Category: `Bible core`  
Fields: `141`  
Views: `26`

| # | Field | Type | Field ID | Options |
|---:|---|---|---|---|
| 1 | 高阶二2Call  (A,B,C,D) | `lookup` | `fldpTEoMrj` |  |
| 2 | 基础离开 | `select` | `fldUMPJqqk` | 基础守则前; 基础守则后第1天; 基础守则后第2天; 基础守则后第3天; 基础守则后第4天; 基础守则后第5天;  ; 守则后第二天; 守则后第三天 |
| 3 | 市区 | `text` | `fld1DvHlU7` |  |
| 4 | 基础C1-4信息/Account Check | `select` | `fld7rF7lrx` | 已发出; 已回复; Nana 已确认 |
| 5 | 高阶二C1-4信息  (A,B,C,D) | `text` | `fld6bJgztP` |  |
| 6 | 高阶总费用 (A,B,C,D) | `formula` | `fldCoHK6zh` |  |
| 7 | 高阶一离开 (A,B,C,D) | `select` | `fldhktTdmb` | 高阶一守则前; 高阶一守则后第1天; 高阶一守则后第2天; 高阶一守则后第3天; 高阶一守则后第4天; 高阶一守则后第5天; 高阶四前; 高阶四后 |
| 8 | 高阶一酒店费用  (A,B,C,D) | `select` | `fldV1Ov1oJ` | 2300; 1485 |
| 9 | 基础阶段教练 | `text` | `fldHTH3wZ9` |  |
| 10 | 基础C1-3信息 | `select` | `fldyCLPXM7` | 已发出; 已回复 |
| 11 | 高阶付费方式 (A,B,C,D) | `select` | `fldTsnAeEi` | Cash; Cheque; Online Banking; Boldpay; Credit Card; Deposit Transfer; 支付宝; 中国银行 |
| 12 | 基础1 Call Status | `text` | `fldtKneeQO` |  |
| 13 | 高阶-Invoice Name | `text` | `fldcSFwUNA` |  |
| 14 | 高阶一2CalL (A,B,C,D) | `select` | `flde5hBvrW` | 确认; 待确认; 不当班; 健康待审核; 健康不通过; 未接电话; Yes; 高二待定; 住宿钱诗莹，陈培嬿，周美怡3人要一起，如果可以3人一间，浅眠; 顾孩子、老公 ; 书写有压力; 付款会一半Cash，一半transfer<br>住宿钱诗莹，陈培嬿，周美怡3人要一起，如果可以3人一间，浅眠 |
| 15 | 公司名称 | `text` | `fldPt86QXy` |  |
| 16 | 生日日期 | `datetime` | `fldqty2zuN` |  |
| 17 | 8%SST | `formula` | `fldKqsFNLd` |  |
| 18 | 高阶二C1-3信息  (A,B,C,D) | `select` | `fldCgmJDvK` | 已回复; 已发出 |
| 19 | 高阶二教练 | `text` | `fldWmvMlWV` |  |
| 20 | 基础学费 | `select` | `fldOGdbu8I` | 5000; 12500; 15800; 16300; 18900; 6800; 5,000; 13,300; 500; 1,580; $5000 |
| 21 | 高阶二后离开原因 | `text` | `fldghrGMDe` |  |
| 22 | 邮箱 | `text` | `fld7uLB2sP` |  |
| 23 | 基础转名额 | `select` | `fldJ4Ok5wY` | 基础已消耗; 基础已退款 |
| 24 | 个人海星位置 | `number` | `fldw1sPNp8` |  |
| 25 | 基础酒店人数 | `select` | `fldxAC7Mji` | 3; 4; 5; 6; Landmark |
| 26 | 高阶四已进课室人数 | `formula` | `fldrIarGll` |  |
| 27 | Mark有约意愿度 | `select` | `fldq89Umtt` | Yes; No |
| 28 | 总费用 | `formula` | `fldH64Rore` |  |
| 29 | 高阶一确认当班 (A,B,C,D) | `select` | `fldb4fMdP3` | 确认; 待确认; 不当班; 未接电话; 健康待审核; 健康待不通过; 未接; 高阶一确认当班 (A,B,C,D) |
| 30 | 学员/教练 | `select` | `fldTqu9a5z` | 学员; 教练 |
| 31 | 高阶二确认当班 (A,B,C,D) | `select` | `fldVLGX5Vu` | 确认; 不当班; 待确认; 未接 |
| 32 | 基础确认当班 | `select` | `fld8MIqSZ5` | 确认; 待确认; 不当班; 健康待审核; 健康不通过; 未接电话 |
| 33 | 孩子 | `number` | `fldXA3u8NF` |  |
| 34 | 高阶一已进课室 | `select` | `fldQEOsk5K` | KLCP131; KLCP132; KLCP133; KLCP135; KLCP136; KLCP137; KLCP138; KLCP139; KLCP140 |
| 35 | 基础2Call Status<br>来的目的、急需解决的问题 | `text` | `fldtaHRKkE` |  |
| 36 | 客户等级 | `select` | `fldqjJ9DuE` | A+; A; B; C |
| 37 | 高阶一确认期别 (A,B,C,D) | `select` | `fld9EHqoBh` | KLCP135; KLCP136 |
| 38 | 杂费定金  (A,B,C,D) | `number` | `fld5YHqAUa` |  |
| 39 | 文字-5 | `text` | `fld5Xz6qxB` |  |
| 40 | 公司规模 (多少人) | `number` | `fldcyxlNHg` |  |
| 41 | 高阶五已经课室 | `select` | `fldOL8qfBY` | MP18; MP19; MP20 |
| 42 | 基础健康面谈 | `select` | `flduv1pk53` | 已面谈; 面谈不通过; yes; Yes |
| 43 | 高阶定金 (A,B,C,D) | `number` | `fld6DwF8on` |  |
| 44 | 英文名字 | `text` | `fld7bXtZTW` |  |
| 45 | 文字-6 | `text` | `flde1ZMLci` |  |
| 46 | 华语名字 | `text` | `fldIqZVRsw` |  |
| 47 | 报名时间段 | `select` | `fldkVHa7Kp` | 基础开班; 星期五晚上; 星期六早上; 星期六中午; 星期六晚上; 星期日早上; 星期日小休【毕业后】; 星期日【结果1】; 星期日【结果2】; 星期日【结果3-结束】 |
| 48 | 文字-1 | `text` | `fldaqIBk4f` |  |
| 49 | 高阶一来的目的、急需解决的问题  (A,B,C,D) | `text` | `fldBTFVLKs` |  |
| 50 | 邮政编号 | `number` | `fldoYxtpJe` |  |
| 51 | 父记录 | `link` | `fldCs2Rbnm` |  |
| 52 | 信念系统日期  (A,B,C,D) | `text` | `fld48s0YpN` |  |
| 53 | 高阶二膳食费用  (A,B,C,D) | `select` | `fld7BTqcdC` | 2300 |
| 54 | 基础健康 | `text` | `fldpbydaeC` |  |
| 55 | 高阶付费方式_1 | `select` | `fld9pibfS8` | Cash; Cheque; Online Banking; Boldpay; Credit Card; Deposit Transfer; 支付宝; 中国银行 |
| 56 | EMO 联络号码 | `text` | `fld0VFSV0R` |  |
| 57 | 膳食 | `select` | `fldbiUCP8C` | 素食; 荤食; No |
| 58 | 高阶二1 Call Status (A,B,C,D) | `text` | `fldrkv27ER` |  |
| 59 | 结果期别 | `select` | `fldUcxqCzB` | JCP; Dcode; KLCP132; KLCP133; KLCP135; KLCP136; KLCP137; KLCP138; KLCP139; KLCP140; 复习; 复读; 复读-高阶二; 毕业生-基础-高阶二 |
| 60 | 杂费定金付费方式 (A,B,C,D) | `select` | `fldG89UoDv` | Cash; Cheque; Online Banking; Boldpay; Credit Card; Deposit Transfer; 支付宝; 中国银行 |
| 61 | 高阶健康面谈 | `select` | `fldUyUboyG` | 已面谈; 面谈不通过 |
| 62 | EMO 华语名字 | `text` | `fldpVM1MAg` |  |
| 63 | 行业性质 | `text` | `fldeGX47jN` |  |
| 64 | 备注 | `text` | `fldxiJJ1fR` |  |
| 65 | 基础2Call | `select` | `fld3PR7LZl` | Yes; No |
| 66 | 婚姻 | `select` | `fldg5w01QF` | 单身; 已婚; 分居; 离婚; 丧偶; 0125351616; 医助 |
| 67 | 文字-4 | `text` | `fld9Nh7axi` |  |
| 68 | 基础确认期别 | `select` | `fld4FgLMyN` | KLCP131; KLCP132; KLCP133; KLCP135; KLCP136; KLCP137; KLCP138; KLCP139; KLCP140 |
| 69 | 高阶三已进课室人数 | `formula` | `fldG1VmmI3` |  |
| 70 | 序号—— | `number` | `fldvAP9Tsv` |  |
| 71 | 膳食费用 | `select` | `fldJyjyJaw` | 375; 2300; 2675; 0; 1200 |
| 72 | 基础已进课室（KLCP) | `select` | `fldx22KkI9` | KLCP131; KLCP132; KLCP133; KLCP135; KLCP136; KLCP137; KLCP138; KLCP139; KLCP140 |
| 73 | 高阶三已进课室 | `select` | `fldACn4pwe` | KLCP131; KLCP112; KLCP131; KLCP132; KLCP133; KLCP135; KLCP136; KLCP137; KLCP138; KLCP139; KLCP140 |
| 74 | 高阶一1 Call Status (A,B,C,D) | `text` | `fldXcdUr7c` |  |
| 75 | 地址 | `text` | `fldA6GtRTG` |  |
| 76 | 高阶二确认期别 (A,B,C,D) | `select` | `fldY4T4BzB` | KLCP135 |
| 77 | 基础报读日期 | `datetime` | `fldXqX3bDG` |  |
| 78 | 高阶二后离开(A,B,C,D) | `select` | `fldYSq4dt1` | 高级二守则前; 高阶二守则后; 高阶三守则前; 高阶三守则后; 高阶四守则前; 高阶四守则后; 守则后第1天; 守则后第2天; 守则后第3天; 守则后第4天; 守则后第5天 |
| 79 | 高阶一1call(A,B,C,D) | `select` | `fld3LBWyNZ` | Yes; No |
| 80 | 备注-转海星/消耗 | `text` | `fldmYPrj9l` |  |
| 81 | IC No | `text` | `fldPi9m6fA` |  |
| 82 | 文字-2 | `text` | `fldQxS590Q` |  |
| 83 | 高阶学费SST  (A,B,C,D) | `formula` | `fldzpuXMP8` |  |
| 84 | 2 Call Status /学员的位置  (A,B,C,D) | `lookup` | `fldjcroYaI` |  |
| 85 | 余款 | `number` | `fldVakFzdK` |  |
| 86 | 杂费定金补款  (A,B,C,D) | `number` | `fldJU2FkyQ` |  |
| 87 | 高阶二酒店费用  (A,B,C,D) | `select` | `fldKLj5OvZ` | 2300 |
| 88 | 高阶 - 全款/订金 | `formula` | `fldsWv81U0` |  |
| 89 | 基础问卷 | `select` | `fld2eXxUcJ` | Yes; No; YES |
| 90 | 高阶转名额 | `select` | `fldHzSx5He` | 高阶已消耗; 高阶已退款 |
| 91 | 高阶二已进课室人数 | `formula` | `fldRnyJp4h` |  |
| 92 | 信念系统当班期别 (A,B,C,D) | `text` | `fldCsXxw3P` |  |
| 93 | 酒店费用 | `select` | `fldGZYvrcS` | 200; 250; 300; 400; 0; 450; 290; 1200; 240; 350 |
| 94 | 电话 | `text` | `fld3pODST1` |  |
| 95 | 高阶四已进课室 | `select` | `fldamK4R39` | KLCP131; KLCP132; KLCP133; KLCP135; KLCP136; KLCP137; KLCP138; KLCP139; KLCP140 |
| 96 | 高阶二1call  (A,B,C,D) | `select` | `fldLFSilk8` | Yes; No |
| 97 | 基础已进课室+英文名字 | `formula` | `fldEV3sB63` |  |
| 98 | 定金 | `number` | `fldSqTZCPk` |  |
| 99 | 【报到】高阶一几点到 | `select` | `fldbcbfBgV` | 8pm-10pm; 10pm-12am; 12am后; 开课当天早上 |
| 100 | 高阶一确认当班人数 | `formula` | `fldinQISul` |  |
| 101 | 课室内名单 | `text` | `fldDnN0ySS` |  |
| 102 | 高阶一教练 | `text` | `fldjVaU8zJ` |  |
| 103 | 高阶SO/Transfer No. (A,B,C,D) | `number` | `fldoGWsYc2` |  |
| 104 | 高阶余款  (A,B,C,D) | `number` | `fld5gM9QQd` |  |
| 105 | 高阶补款 (A,B,C,D) | `number` | `flddyIpxbM` |  |
| 106 | 学号 | `number` | `fldcAKHYTF` |  |
| 107 | 性别 | `select` | `fldHbPLVek` | 男; 女 |
| 108 | 补款 | `number` | `fldAQqQ8io` |  |
| 109 | 高阶一已进课室人数 | `formula` | `fldPcaGbzz` |  |
| 110 | 高阶报读日期  (A,B,C,D) | `text` | `fldvKhoqzv` |  |
| 111 | 基础已进课室人数 | `formula` | `fldGYhSADi` |  |
| 112 | 【报到】高阶二几点到 | `select` | `fldRMzPjjv` | 8pm-10pm; 10pm-12am; 12am后; 开课当天早上 |
| 113 | 年收入 | `number` | `fldBv7HKrH` |  |
| 114 | 杂费定金余款 (A,B,C,D) | `number` | `fldr8zEiwc` |  |
| 115 | 高阶一C1-4信息  (A,B,C,D) | `select` | `fldCBOwgh2` | 已发出; 已回复 |
| 116 | 高阶健康 | `text` | `fldqC8HLiJ` |  |
| 117 | SO/Transfer No. | `number` | `fldVfTh8yC` |  |
| 118 | 毕业证 (A,B,C,D) | `text` | `fld8M5DEZF` |  |
| 119 | 紧急联系人（姓名、关系、电话） | `text` | `fldbdsENL8` |  |
| 120 | 年历 | `number` | `fldApjbspo` |  |
| 121 | 信念系统当班  (A,B,C,D) | `select` | `fldZ6nnaBQ` | 当班; 不当班; 待确认 |
| 122 | 杂费定金付费方式_高二  (A,B,C,D) | `select` | `fldG29QiQ9` | Cash; Cheque; Online Banking; Boldpay; Credit Card; Deposit Transfer; 支付宝; 中国银行 |
| 123 | 文字-3 | `text` | `fldACg9DB8` |  |
| 124 | 年龄 | `number` | `fld4Ozu3jN` |  |
| 125 | 高阶一确认期别人数 | `formula` | `fldxCrwTN6` |  |
| 126 | 职位 | `text` | `fldiMuQal2` |  |
| 127 | 全报 | `select` | `fld37lkP7m` | 基础全款; 连报; 连报+全款; 连报+M; 连报+M+全款; 高阶; 高阶+全款; 高阶+M; 高阶+M+全款; 复读基础; 复读高阶; 复读-高阶一+全款; 复读高阶一+M; 复读-高阶一+M+全款; 复读-高阶二; 复读-高阶二+全款; 复读高阶二+M; 复读-高阶二+M+全款; 毕业生-复读基础; 毕业生-复读基础+复读高阶一; 毕业生-复读基础+复读高阶二; 复读基础+高阶 |
| 128 | 高阶二卓越宣言表  (A,B,C,D) | `text` | `fldyY1whEh` |  |
| 129 | 基础1call | `select` | `fldsppqgFK` | Yes; No; YES |
| 130 | 付费方式 | `select` | `fldktTMWFK` | Cash; Cheque; Online Banking; Boldpay; Credit Card; Deposit Transfer; 支付宝; 中国银行; Online Transfer |
| 131 | 基础 - 全款/订金 | `formula` | `fldMsWJGBD` |  |
| 132 | 高阶一C1-3信息  (A,B,C,D) | `select` | `fldbcgHatV` | 已发出; 已回复; Yes |
| 133 | 高阶一问卷(A,B,C,D) | `select` | `fldUPUrzpQ` | Yes; No |
| 134 | 高阶二已进课室 (A,B,C,D) | `select` | `fldcZavdOm` | KLCP131; KLCP112; KLCP132; KLCP133; KLCP135; KLCP136; KLCP137; KLCP138; KLCP139; KLCP140 |
| 135 | 付费方式 (1) | `select` | `flds6ly10t` | Cash; Cheque; Online Banking; Boldpay; Credit Card; Deposit Transfer; 支付宝; 中国银行; Online Transfer |
| 136 | 【基础】Tax invoice name | `text` | `fldNQzMd0q` |  |
| 137 | 高阶二总费用  (A,B,C,D) | `formula` | `fldqp668Em` |  |
| 138 | EMO 英文名字 | `text` | `fldFDwxkst` |  |
| 139 | EMO期别 | `select` | `fldtEM7csn` | KLCP131; KLCP132; KLCP133; KLCP135; KLCP136; KLCP137; KLCP138; KLCP139; KLCP140; KLCP108; KLCP115; KLCP35; KLCP101; KLCP96; KLCP26; KLCP91; KLCP65; KLCP69; KLCP40; KLCP129; KLCP109; KLCP107; KLCP123; KLCP125; KLCP105; KLCP 102; KLCP127; KLCP87; KLCP116; KLCP59 |
| 140 | 州 | `select` | `fldDJzKBt7` | Kuala Lumpur; Johor; Kedah; Kelantan; Malacca; Negeri Sembilan; Pahang; Perak; Perlis; Penang; Sabah; Sarawak; Terengganu; Singapore; Selangor |
| 141 | 高阶学费  (A,B,C,D) | `select` | `fld68LoHe7` | 5000; 12500; 15800; 16300; 18900; 6800; 14600; 10800; 13900; 1080 |

### 🖊️🖊️136-基础FINAL MASTERLIST

Category: `Masterlist / final list`  
Fields: `141`  
Views: `1`

| # | Field | Type | Field ID | Options |
|---:|---|---|---|---|
| 1 | 孩子 | `number` | `fldXA3u8NF` |  |
| 2 | 高阶三已进课室 | `select` | `fldACn4pwe` | KLCP131; KLCP112; KLCP131; KLCP132; KLCP133; KLCP135; KLCP136; KLCP137; KLCP138; KLCP139; KLCP140 |
| 3 | 基础阶段教练 | `text` | `fldHTH3wZ9` |  |
| 4 | 高阶四已进课室 | `select` | `fldamK4R39` | KLCP131; KLCP132; KLCP133; KLCP135; KLCP136; KLCP137; KLCP138; KLCP139; KLCP140 |
| 5 | 报名时间段 | `select` | `fldkVHa7Kp` | 基础开班; 星期五晚上; 星期六早上; 星期六中午; 星期六晚上; 星期日早上; 星期日小休【毕业后】; 星期日【结果1】; 星期日【结果2】; 星期日【结果3-结束】 |
| 6 | EMO 英文名字 | `text` | `fldFDwxkst` |  |
| 7 | 文字-6 | `text` | `flde1ZMLci` |  |
| 8 | 课室内名单 | `text` | `fldDnN0ySS` |  |
| 9 | 邮政编号 | `number` | `fldoYxtpJe` |  |
| 10 | 高阶定金 (A,B,C,D) | `number` | `fld6DwF8on` |  |
| 11 | 基础1 Call Status | `text` | `fldtKneeQO` |  |
| 12 | 付费方式 (1) | `select` | `flds6ly10t` | Cash; Cheque; Online Banking; Boldpay; Credit Card; Deposit Transfer; 支付宝; 中国银行; Online Transfer |
| 13 | 高阶一C1-4信息  (A,B,C,D) | `select` | `fldCBOwgh2` | 已发出; 已回复 |
| 14 | 基础已进课室人数 | `formula` | `fldGYhSADi` |  |
| 15 | 基础酒店人数 | `select` | `fldxAC7Mji` | 3; 4; 5; 6; Landmark |
| 16 | 付费方式 | `select` | `fldktTMWFK` | Cash; Cheque; Online Banking; Boldpay; Credit Card; Deposit Transfer; 支付宝; 中国银行; Online Transfer |
| 17 | 杂费定金余款 (A,B,C,D) | `number` | `fldr8zEiwc` |  |
| 18 | 2 Call Status /学员的位置  (A,B,C,D) | `lookup` | `fldjcroYaI` |  |
| 19 | 高阶二1 Call Status (A,B,C,D) | `text` | `fldrkv27ER` |  |
| 20 | 高阶五已经课室 | `select` | `fldOL8qfBY` | MP18; MP19; MP20 |
| 21 | 高阶一1call(A,B,C,D) | `select` | `fld3LBWyNZ` | Yes; No |
| 22 | 高阶补款 (A,B,C,D) | `number` | `flddyIpxbM` |  |
| 23 | EMO期别 | `select` | `fldtEM7csn` | KLCP131; KLCP132; KLCP133; KLCP135; KLCP136; KLCP137; KLCP138; KLCP139; KLCP140; KLCP108; KLCP115; KLCP35; KLCP101; KLCP96; KLCP26; KLCP91; KLCP65; KLCP69; KLCP40; KLCP129; KLCP109; KLCP107; KLCP123; KLCP125; KLCP105; KLCP 102; KLCP127; KLCP87; KLCP116; KLCP59 |
| 24 | 基础C1-4信息/Account Check | `select` | `fld7rF7lrx` | 已发出; 已回复; Nana 已确认 |
| 25 | 高阶转名额 | `select` | `fldHzSx5He` | 高阶已消耗; 高阶已退款 |
| 26 | 地址 | `text` | `fldA6GtRTG` |  |
| 27 | 高阶-Invoice Name | `text` | `fldcSFwUNA` |  |
| 28 | 性别 | `select` | `fldHbPLVek` | 男; 女 |
| 29 | EMO 华语名字 | `text` | `fldpVM1MAg` |  |
| 30 | 高阶一离开 (A,B,C,D) | `select` | `fldhktTdmb` | 高阶一守则前; 高阶一守则后第1天; 高阶一守则后第2天; 高阶一守则后第3天; 高阶一守则后第4天; 高阶一守则后第5天; 高阶四前; 高阶四后 |
| 31 | 基础离开 | `select` | `fldUMPJqqk` | 基础守则前; 基础守则后第1天; 基础守则后第2天; 基础守则后第3天; 基础守则后第4天; 基础守则后第5天;  ; 守则后第二天; 守则后第三天 |
| 32 | 学号 | `number` | `fldcAKHYTF` |  |
| 33 | 高阶付费方式 (A,B,C,D) | `select` | `fldTsnAeEi` | Cash; Cheque; Online Banking; Boldpay; Credit Card; Deposit Transfer; 支付宝; 中国银行 |
| 34 | 行业性质 | `text` | `fldeGX47jN` |  |
| 35 | 高阶二教练 | `text` | `fldWmvMlWV` |  |
| 36 | 结果期别 | `select` | `fldUcxqCzB` | JCP; Dcode; KLCP132; KLCP133; KLCP135; KLCP136; KLCP137; KLCP138; KLCP139; KLCP140; 复习; 复读; 复读-高阶二; 毕业生-基础-高阶二 |
| 37 | 高阶二确认期别 (A,B,C,D) | `select` | `fldY4T4BzB` | KLCP135 |
| 38 | 学员/教练 | `select` | `fldTqu9a5z` | 学员; 教练 |
| 39 | 高阶学费SST  (A,B,C,D) | `formula` | `fldzpuXMP8` |  |
| 40 | 定金 | `number` | `fldSqTZCPk` |  |
| 41 | 华语名字 | `text` | `fldIqZVRsw` |  |
| 42 | 职位 | `text` | `fldiMuQal2` |  |
| 43 | Mark有约意愿度 | `select` | `fldq89Umtt` | Yes; No |
| 44 | 高阶学费  (A,B,C,D) | `select` | `fld68LoHe7` | 5000; 12500; 15800; 16300; 18900; 6800; 14600; 10800; 13900; 1080 |
| 45 | 父记录 | `link` | `fldCs2Rbnm` |  |
| 46 | 毕业证 (A,B,C,D) | `text` | `fld8M5DEZF` |  |
| 47 | 基础健康面谈 | `select` | `flduv1pk53` | 已面谈; 面谈不通过; yes; Yes |
| 48 | 电话 | `text` | `fld3pODST1` |  |
| 49 | 高阶一已进课室 | `select` | `fldQEOsk5K` | KLCP131; KLCP132; KLCP133; KLCP135; KLCP136; KLCP137; KLCP138; KLCP139; KLCP140 |
| 50 | 基础报读日期 | `datetime` | `fldXqX3bDG` |  |
| 51 | 杂费定金付费方式 (A,B,C,D) | `select` | `fldG89UoDv` | Cash; Cheque; Online Banking; Boldpay; Credit Card; Deposit Transfer; 支付宝; 中国银行 |
| 52 | 高阶付费方式_1 | `select` | `fld9pibfS8` | Cash; Cheque; Online Banking; Boldpay; Credit Card; Deposit Transfer; 支付宝; 中国银行 |
| 53 | 基础已进课室（KLCP) | `select` | `fldx22KkI9` | KLCP131; KLCP132; KLCP133; KLCP135; KLCP136; KLCP137; KLCP138; KLCP139; KLCP140 |
| 54 | 【报到】高阶一几点到 | `select` | `fldbcbfBgV` | 8pm-10pm; 10pm-12am; 12am后; 开课当天早上 |
| 55 | 文字-3 | `text` | `fldACg9DB8` |  |
| 56 | 基础学费 | `select` | `fldOGdbu8I` | 5000; 12500; 15800; 16300; 18900; 6800; 5,000; 13,300; 500; 1,580; $5000 |
| 57 | 余款 | `number` | `fldVakFzdK` |  |
| 58 | 高阶二确认当班 (A,B,C,D) | `select` | `fldVLGX5Vu` | 确认; 不当班; 待确认; 未接 |
| 59 | 文字-5 | `text` | `fld5Xz6qxB` |  |
| 60 | 高阶一确认期别人数 | `formula` | `fldxCrwTN6` |  |
| 61 | 年收入 | `number` | `fldBv7HKrH` |  |
| 62 | 信念系统当班  (A,B,C,D) | `select` | `fldZ6nnaBQ` | 当班; 不当班; 待确认 |
| 63 | 文字-4 | `text` | `fld9Nh7axi` |  |
| 64 | 基础已进课室+英文名字 | `formula` | `fldEV3sB63` |  |
| 65 | 高阶一已进课室人数 | `formula` | `fldPcaGbzz` |  |
| 66 | 基础1call | `select` | `fldsppqgFK` | Yes; No; YES |
| 67 | 信念系统当班期别 (A,B,C,D) | `text` | `fldCsXxw3P` |  |
| 68 | 高阶报读日期  (A,B,C,D) | `text` | `fldvKhoqzv` |  |
| 69 | IC No | `text` | `fldPi9m6fA` |  |
| 70 | 高阶二1call  (A,B,C,D) | `select` | `fldLFSilk8` | Yes; No |
| 71 | 酒店费用 | `select` | `fldGZYvrcS` | 200; 250; 300; 400; 0; 450; 290; 1200; 240; 350 |
| 72 | 高阶 - 全款/订金 | `formula` | `fldsWv81U0` |  |
| 73 | 总费用 | `formula` | `fldH64Rore` |  |
| 74 | 高阶二膳食费用  (A,B,C,D) | `select` | `fld7BTqcdC` | 2300 |
| 75 | 杂费定金  (A,B,C,D) | `number` | `fld5YHqAUa` |  |
| 76 | 州 | `select` | `fldDJzKBt7` | Kuala Lumpur; Johor; Kedah; Kelantan; Malacca; Negeri Sembilan; Pahang; Perak; Perlis; Penang; Sabah; Sarawak; Terengganu; Singapore; Selangor |
| 77 | 公司规模 (多少人) | `number` | `fldcyxlNHg` |  |
| 78 | 高阶健康 | `text` | `fldqC8HLiJ` |  |
| 79 | 高阶一酒店费用  (A,B,C,D) | `select` | `fldV1Ov1oJ` | 2300; 1485 |
| 80 | 备注-转海星/消耗 | `text` | `fldmYPrj9l` |  |
| 81 | 8%SST | `formula` | `fldKqsFNLd` |  |
| 82 | 高阶四已进课室人数 | `formula` | `fldrIarGll` |  |
| 83 | 信念系统日期  (A,B,C,D) | `text` | `fld48s0YpN` |  |
| 84 | 基础2Call | `select` | `fld3PR7LZl` | Yes; No |
| 85 | 基础 - 全款/订金 | `formula` | `fldMsWJGBD` |  |
| 86 | 高阶三已进课室人数 | `formula` | `fldG1VmmI3` |  |
| 87 | 高阶二2Call  (A,B,C,D) | `lookup` | `fldpTEoMrj` |  |
| 88 | 基础确认当班 | `select` | `fld8MIqSZ5` | 确认; 待确认; 不当班; 健康待审核; 健康不通过; 未接电话 |
| 89 | 高阶一教练 | `text` | `fldjVaU8zJ` |  |
| 90 | 客户等级 | `select` | `fldqjJ9DuE` | A+; A; B; C |
| 91 | 补款 | `number` | `fldAQqQ8io` |  |
| 92 | 【基础】Tax invoice name | `text` | `fldNQzMd0q` |  |
| 93 | 基础确认期别 | `select` | `fld4FgLMyN` | KLCP131; KLCP132; KLCP133; KLCP135; KLCP136; KLCP137; KLCP138; KLCP139; KLCP140 |
| 94 | 高阶健康面谈 | `select` | `fldUyUboyG` | 已面谈; 面谈不通过 |
| 95 | EMO 联络号码 | `text` | `fld0VFSV0R` |  |
| 96 | 婚姻 | `select` | `fldg5w01QF` | 单身; 已婚; 分居; 离婚; 丧偶; 0125351616; 医助 |
| 97 | 高阶二已进课室人数 | `formula` | `fldRnyJp4h` |  |
| 98 | 紧急联系人（姓名、关系、电话） | `text` | `fldbdsENL8` |  |
| 99 | 高阶一2CalL (A,B,C,D) | `select` | `flde5hBvrW` | 确认; 待确认; 不当班; 健康待审核; 健康不通过; 未接电话; Yes; 高二待定; 住宿钱诗莹，陈培嬿，周美怡3人要一起，如果可以3人一间，浅眠; 顾孩子、老公 ; 书写有压力; 付款会一半Cash，一半transfer<br>住宿钱诗莹，陈培嬿，周美怡3人要一起，如果可以3人一间，浅眠 |
| 100 | 公司名称 | `text` | `fldPt86QXy` |  |
| 101 | 序号—— | `number` | `fldvAP9Tsv` |  |
| 102 | 膳食费用 | `select` | `fldJyjyJaw` | 375; 2300; 2675; 0; 1200 |
| 103 | 文字-2 | `text` | `fldQxS590Q` |  |
| 104 | 高阶总费用 (A,B,C,D) | `formula` | `fldCoHK6zh` |  |
| 105 | 邮箱 | `text` | `fld7uLB2sP` |  |
| 106 | 高阶一C1-3信息  (A,B,C,D) | `select` | `fldbcgHatV` | 已发出; 已回复; Yes |
| 107 | 高阶一问卷(A,B,C,D) | `select` | `fldUPUrzpQ` | Yes; No |
| 108 | 基础C1-3信息 | `select` | `fldyCLPXM7` | 已发出; 已回复 |
| 109 | 高阶二C1-4信息  (A,B,C,D) | `text` | `fld6bJgztP` |  |
| 110 | 年龄 | `number` | `fld4Ozu3jN` |  |
| 111 | 膳食 | `select` | `fldbiUCP8C` | 素食; 荤食; No |
| 112 | 高阶一确认期别 (A,B,C,D) | `select` | `fld9EHqoBh` | KLCP135; KLCP136 |
| 113 | 【报到】高阶二几点到 | `select` | `fldRMzPjjv` | 8pm-10pm; 10pm-12am; 12am后; 开课当天早上 |
| 114 | 高阶二卓越宣言表  (A,B,C,D) | `text` | `fldyY1whEh` |  |
| 115 | 基础健康 | `text` | `fldpbydaeC` |  |
| 116 | 高阶二C1-3信息  (A,B,C,D) | `select` | `fldCgmJDvK` | 已回复; 已发出 |
| 117 | 杂费定金付费方式_高二  (A,B,C,D) | `select` | `fldG29QiQ9` | Cash; Cheque; Online Banking; Boldpay; Credit Card; Deposit Transfer; 支付宝; 中国银行 |
| 118 | 高阶二后离开原因 | `text` | `fldghrGMDe` |  |
| 119 | 高阶一确认当班人数 | `formula` | `fldinQISul` |  |
| 120 | 备注 | `text` | `fldxiJJ1fR` |  |
| 121 | 杂费定金补款  (A,B,C,D) | `number` | `fldJU2FkyQ` |  |
| 122 | 高阶二后离开(A,B,C,D) | `select` | `fldYSq4dt1` | 高级二守则前; 高阶二守则后; 高阶三守则前; 高阶三守则后; 高阶四守则前; 高阶四守则后; 守则后第1天; 守则后第2天; 守则后第3天; 守则后第4天; 守则后第5天 |
| 123 | 个人海星位置 | `number` | `fldw1sPNp8` |  |
| 124 | 市区 | `text` | `fld1DvHlU7` |  |
| 125 | 基础2Call Status<br>来的目的、急需解决的问题 | `text` | `fldtaHRKkE` |  |
| 126 | 高阶SO/Transfer No. (A,B,C,D) | `number` | `fldoGWsYc2` |  |
| 127 | 高阶余款  (A,B,C,D) | `number` | `fld5gM9QQd` |  |
| 128 | SO/Transfer No. | `number` | `fldVfTh8yC` |  |
| 129 | 高阶二酒店费用  (A,B,C,D) | `select` | `fldKLj5OvZ` | 2300 |
| 130 | 基础转名额 | `select` | `fldJ4Ok5wY` | 基础已消耗; 基础已退款 |
| 131 | 年历 | `number` | `fldApjbspo` |  |
| 132 | 高阶一1 Call Status (A,B,C,D) | `text` | `fldXcdUr7c` |  |
| 133 | 全报 | `select` | `fld37lkP7m` | 基础全款; 连报; 连报+全款; 连报+M; 连报+M+全款; 高阶; 高阶+全款; 高阶+M; 高阶+M+全款; 复读基础; 复读高阶; 复读-高阶一+全款; 复读高阶一+M; 复读-高阶一+M+全款; 复读-高阶二; 复读-高阶二+全款; 复读高阶二+M; 复读-高阶二+M+全款; 毕业生-复读基础; 毕业生-复读基础+复读高阶一; 毕业生-复读基础+复读高阶二; 复读基础+高阶 |
| 134 | 高阶一确认当班 (A,B,C,D) | `select` | `fldb4fMdP3` | 确认; 待确认; 不当班; 未接电话; 健康待审核; 健康待不通过; 未接; 高阶一确认当班 (A,B,C,D) |
| 135 | 高阶二总费用  (A,B,C,D) | `formula` | `fldqp668Em` |  |
| 136 | 英文名字 | `text` | `fld7bXtZTW` |  |
| 137 | 高阶一来的目的、急需解决的问题  (A,B,C,D) | `text` | `fldBTFVLKs` |  |
| 138 | 生日日期 | `datetime` | `fldqty2zuN` |  |
| 139 | 高阶二已进课室 (A,B,C,D) | `select` | `fldcZavdOm` | KLCP131; KLCP112; KLCP132; KLCP133; KLCP135; KLCP136; KLCP137; KLCP138; KLCP139; KLCP140 |
| 140 | 基础问卷 | `select` | `fld2eXxUcJ` | Yes; No; YES |
| 141 | 文字-1 | `text` | `fldaqIBk4f` |  |

### 🖊️🖊️136-【基础守则离开】FINAL MASTERLIST.

Category: `Masterlist / final list`  
Fields: `141`  
Views: `1`

| # | Field | Type | Field ID | Options |
|---:|---|---|---|---|
| 1 | 文字-1 | `text` | `fldaqIBk4f` |  |
| 2 | 基础 - 全款/订金 | `formula` | `fldMsWJGBD` |  |
| 3 | 【基础】Tax invoice name | `text` | `fldNQzMd0q` |  |
| 4 | 结果期别 | `select` | `fldUcxqCzB` | JCP; Dcode; KLCP132; KLCP133; KLCP135; KLCP136; KLCP137; KLCP138; KLCP139; KLCP140; 复习; 复读; 复读-高阶二; 毕业生-基础-高阶二 |
| 5 | EMO 英文名字 | `text` | `fldFDwxkst` |  |
| 6 | 高阶二确认当班 (A,B,C,D) | `select` | `fldVLGX5Vu` | 确认; 不当班; 待确认; 未接 |
| 7 | 余款 | `number` | `fldVakFzdK` |  |
| 8 | 高阶一酒店费用  (A,B,C,D) | `select` | `fldV1Ov1oJ` | 2300; 1485 |
| 9 | EMO 华语名字 | `text` | `fldpVM1MAg` |  |
| 10 | 高阶二1call  (A,B,C,D) | `select` | `fldLFSilk8` | Yes; No |
| 11 | 基础学费 | `select` | `fldOGdbu8I` | 5000; 12500; 15800; 16300; 18900; 6800; 5,000; 13,300; 500; 1,580; $5000 |
| 12 | 付费方式 (1) | `select` | `flds6ly10t` | Cash; Cheque; Online Banking; Boldpay; Credit Card; Deposit Transfer; 支付宝; 中国银行; Online Transfer |
| 13 | 英文名字 | `text` | `fld7bXtZTW` |  |
| 14 | 基础确认期别 | `select` | `fld4FgLMyN` | KLCP131; KLCP132; KLCP133; KLCP135; KLCP136; KLCP137; KLCP138; KLCP139; KLCP140 |
| 15 | 生日日期 | `datetime` | `fldqty2zuN` |  |
| 16 | 毕业证 (A,B,C,D) | `text` | `fld8M5DEZF` |  |
| 17 | 文字-5 | `text` | `fld5Xz6qxB` |  |
| 18 | 基础转名额 | `select` | `fldJ4Ok5wY` | 基础已消耗; 基础已退款 |
| 19 | 邮政编号 | `number` | `fldoYxtpJe` |  |
| 20 | 性别 | `select` | `fldHbPLVek` | 男; 女 |
| 21 | SO/Transfer No. | `number` | `fldVfTh8yC` |  |
| 22 | 信念系统当班期别 (A,B,C,D) | `text` | `fldCsXxw3P` |  |
| 23 | 高阶一C1-4信息  (A,B,C,D) | `select` | `fldCBOwgh2` | 已发出; 已回复 |
| 24 | 公司名称 | `text` | `fldPt86QXy` |  |
| 25 | 高阶二C1-4信息  (A,B,C,D) | `text` | `fld6bJgztP` |  |
| 26 | 电话 | `text` | `fld3pODST1` |  |
| 27 | 高阶一问卷(A,B,C,D) | `select` | `fldUPUrzpQ` | Yes; No |
| 28 | 基础健康 | `text` | `fldpbydaeC` |  |
| 29 | 基础酒店人数 | `select` | `fldxAC7Mji` | 3; 4; 5; 6; Landmark |
| 30 | 基础已进课室人数 | `formula` | `fldGYhSADi` |  |
| 31 | 高阶二后离开(A,B,C,D) | `select` | `fldYSq4dt1` | 高级二守则前; 高阶二守则后; 高阶三守则前; 高阶三守则后; 高阶四守则前; 高阶四守则后; 守则后第1天; 守则后第2天; 守则后第3天; 守则后第4天; 守则后第5天 |
| 32 | 学号 | `number` | `fldcAKHYTF` |  |
| 33 | 学员/教练 | `select` | `fldTqu9a5z` | 学员; 教练 |
| 34 | 基础健康面谈 | `select` | `flduv1pk53` | 已面谈; 面谈不通过; yes; Yes |
| 35 | 基础1call | `select` | `fldsppqgFK` | Yes; No; YES |
| 36 | 文字-4 | `text` | `fld9Nh7axi` |  |
| 37 | 高阶二已进课室人数 | `formula` | `fldRnyJp4h` |  |
| 38 | 州 | `select` | `fldDJzKBt7` | Kuala Lumpur; Johor; Kedah; Kelantan; Malacca; Negeri Sembilan; Pahang; Perak; Perlis; Penang; Sabah; Sarawak; Terengganu; Singapore; Selangor |
| 39 | 孩子 | `number` | `fldXA3u8NF` |  |
| 40 | 【报到】高阶一几点到 | `select` | `fldbcbfBgV` | 8pm-10pm; 10pm-12am; 12am后; 开课当天早上 |
| 41 | Mark有约意愿度 | `select` | `fldq89Umtt` | Yes; No |
| 42 | 膳食费用 | `select` | `fldJyjyJaw` | 375; 2300; 2675; 0; 1200 |
| 43 | 高阶二膳食费用  (A,B,C,D) | `select` | `fld7BTqcdC` | 2300 |
| 44 | 高阶一1 Call Status (A,B,C,D) | `text` | `fldXcdUr7c` |  |
| 45 | 华语名字 | `text` | `fldIqZVRsw` |  |
| 46 | 职位 | `text` | `fldiMuQal2` |  |
| 47 | 杂费定金付费方式 (A,B,C,D) | `select` | `fldG89UoDv` | Cash; Cheque; Online Banking; Boldpay; Credit Card; Deposit Transfer; 支付宝; 中国银行 |
| 48 | 高阶二已进课室 (A,B,C,D) | `select` | `fldcZavdOm` | KLCP131; KLCP112; KLCP132; KLCP133; KLCP135; KLCP136; KLCP137; KLCP138; KLCP139; KLCP140 |
| 49 | EMO 联络号码 | `text` | `fld0VFSV0R` |  |
| 50 | 高阶三已进课室人数 | `formula` | `fldG1VmmI3` |  |
| 51 | 基础2Call | `select` | `fld3PR7LZl` | Yes; No |
| 52 | 婚姻 | `select` | `fldg5w01QF` | 单身; 已婚; 分居; 离婚; 丧偶; 0125351616; 医助 |
| 53 | 年收入 | `number` | `fldBv7HKrH` |  |
| 54 | 高阶一C1-3信息  (A,B,C,D) | `select` | `fldbcgHatV` | 已发出; 已回复; Yes |
| 55 | 基础已进课室（KLCP) | `select` | `fldx22KkI9` | KLCP131; KLCP132; KLCP133; KLCP135; KLCP136; KLCP137; KLCP138; KLCP139; KLCP140 |
| 56 | 总费用 | `formula` | `fldH64Rore` |  |
| 57 | 基础问卷 | `select` | `fld2eXxUcJ` | Yes; No; YES |
| 58 | 高阶二确认期别 (A,B,C,D) | `select` | `fldY4T4BzB` | KLCP135 |
| 59 | 报名时间段 | `select` | `fldkVHa7Kp` | 基础开班; 星期五晚上; 星期六早上; 星期六中午; 星期六晚上; 星期日早上; 星期日小休【毕业后】; 星期日【结果1】; 星期日【结果2】; 星期日【结果3-结束】 |
| 60 | 备注 | `text` | `fldxiJJ1fR` |  |
| 61 | 高阶二C1-3信息  (A,B,C,D) | `select` | `fldCgmJDvK` | 已回复; 已发出 |
| 62 | EMO期别 | `select` | `fldtEM7csn` | KLCP131; KLCP132; KLCP133; KLCP135; KLCP136; KLCP137; KLCP138; KLCP139; KLCP140; KLCP108; KLCP115; KLCP35; KLCP101; KLCP96; KLCP26; KLCP91; KLCP65; KLCP69; KLCP40; KLCP129; KLCP109; KLCP107; KLCP123; KLCP125; KLCP105; KLCP 102; KLCP127; KLCP87; KLCP116; KLCP59 |
| 63 | 杂费定金  (A,B,C,D) | `number` | `fld5YHqAUa` |  |
| 64 | IC No | `text` | `fldPi9m6fA` |  |
| 65 | 高阶一已进课室 | `select` | `fldQEOsk5K` | KLCP131; KLCP132; KLCP133; KLCP135; KLCP136; KLCP137; KLCP138; KLCP139; KLCP140 |
| 66 | 年龄 | `number` | `fld4Ozu3jN` |  |
| 67 | 高阶报读日期  (A,B,C,D) | `text` | `fldvKhoqzv` |  |
| 68 | 高阶定金 (A,B,C,D) | `number` | `fld6DwF8on` |  |
| 69 | 基础阶段教练 | `text` | `fldHTH3wZ9` |  |
| 70 | 年历 | `number` | `fldApjbspo` |  |
| 71 | 杂费定金付费方式_高二  (A,B,C,D) | `select` | `fldG29QiQ9` | Cash; Cheque; Online Banking; Boldpay; Credit Card; Deposit Transfer; 支付宝; 中国银行 |
| 72 | 基础已进课室+英文名字 | `formula` | `fldEV3sB63` |  |
| 73 | 基础报读日期 | `datetime` | `fldXqX3bDG` |  |
| 74 | 8%SST | `formula` | `fldKqsFNLd` |  |
| 75 | 高阶一1call(A,B,C,D) | `select` | `fld3LBWyNZ` | Yes; No |
| 76 | 高阶一确认当班人数 | `formula` | `fldinQISul` |  |
| 77 | 高阶一确认当班 (A,B,C,D) | `select` | `fldb4fMdP3` | 确认; 待确认; 不当班; 未接电话; 健康待审核; 健康待不通过; 未接; 高阶一确认当班 (A,B,C,D) |
| 78 | 高阶 - 全款/订金 | `formula` | `fldsWv81U0` |  |
| 79 | 高阶补款 (A,B,C,D) | `number` | `flddyIpxbM` |  |
| 80 | 高阶SO/Transfer No. (A,B,C,D) | `number` | `fldoGWsYc2` |  |
| 81 | 文字-2 | `text` | `fldQxS590Q` |  |
| 82 | 补款 | `number` | `fldAQqQ8io` |  |
| 83 | 高阶一来的目的、急需解决的问题  (A,B,C,D) | `text` | `fldBTFVLKs` |  |
| 84 | 市区 | `text` | `fld1DvHlU7` |  |
| 85 | 高阶二教练 | `text` | `fldWmvMlWV` |  |
| 86 | 基础C1-3信息 | `select` | `fldyCLPXM7` | 已发出; 已回复 |
| 87 | 高阶二2Call  (A,B,C,D) | `lookup` | `fldpTEoMrj` |  |
| 88 | 高阶三已进课室 | `select` | `fldACn4pwe` | KLCP131; KLCP112; KLCP131; KLCP132; KLCP133; KLCP135; KLCP136; KLCP137; KLCP138; KLCP139; KLCP140 |
| 89 | 高阶二总费用  (A,B,C,D) | `formula` | `fldqp668Em` |  |
| 90 | 付费方式 | `select` | `fldktTMWFK` | Cash; Cheque; Online Banking; Boldpay; Credit Card; Deposit Transfer; 支付宝; 中国银行; Online Transfer |
| 91 | 高阶二后离开原因 | `text` | `fldghrGMDe` |  |
| 92 | 高阶健康 | `text` | `fldqC8HLiJ` |  |
| 93 | 基础1 Call Status | `text` | `fldtKneeQO` |  |
| 94 | 高阶一离开 (A,B,C,D) | `select` | `fldhktTdmb` | 高阶一守则前; 高阶一守则后第1天; 高阶一守则后第2天; 高阶一守则后第3天; 高阶一守则后第4天; 高阶一守则后第5天; 高阶四前; 高阶四后 |
| 95 | 公司规模 (多少人) | `number` | `fldcyxlNHg` |  |
| 96 | 备注-转海星/消耗 | `text` | `fldmYPrj9l` |  |
| 97 | 文字-6 | `text` | `flde1ZMLci` |  |
| 98 | 高阶一2CalL (A,B,C,D) | `select` | `flde5hBvrW` | 确认; 待确认; 不当班; 健康待审核; 健康不通过; 未接电话; Yes; 高二待定; 住宿钱诗莹，陈培嬿，周美怡3人要一起，如果可以3人一间，浅眠; 顾孩子、老公 ; 书写有压力; 付款会一半Cash，一半transfer<br>住宿钱诗莹，陈培嬿，周美怡3人要一起，如果可以3人一间，浅眠 |
| 99 | 信念系统当班  (A,B,C,D) | `select` | `fldZ6nnaBQ` | 当班; 不当班; 待确认 |
| 100 | 全报 | `select` | `fld37lkP7m` | 基础全款; 连报; 连报+全款; 连报+M; 连报+M+全款; 高阶; 高阶+全款; 高阶+M; 高阶+M+全款; 复读基础; 复读高阶; 复读-高阶一+全款; 复读高阶一+M; 复读-高阶一+M+全款; 复读-高阶二; 复读-高阶二+全款; 复读高阶二+M; 复读-高阶二+M+全款; 毕业生-复读基础; 毕业生-复读基础+复读高阶一; 毕业生-复读基础+复读高阶二; 复读基础+高阶 |
| 101 | 基础离开 | `select` | `fldUMPJqqk` | 基础守则前; 基础守则后第1天; 基础守则后第2天; 基础守则后第3天; 基础守则后第4天; 基础守则后第5天;  ; 守则后第二天; 守则后第三天 |
| 102 | 基础2Call Status<br>来的目的、急需解决的问题 | `text` | `fldtaHRKkE` |  |
| 103 | 高阶四已进课室人数 | `formula` | `fldrIarGll` |  |
| 104 | 课室内名单 | `text` | `fldDnN0ySS` |  |
| 105 | 高阶-Invoice Name | `text` | `fldcSFwUNA` |  |
| 106 | 行业性质 | `text` | `fldeGX47jN` |  |
| 107 | 高阶余款  (A,B,C,D) | `number` | `fld5gM9QQd` |  |
| 108 | 地址 | `text` | `fldA6GtRTG` |  |
| 109 | 高阶一确认期别 (A,B,C,D) | `select` | `fld9EHqoBh` | KLCP135; KLCP136 |
| 110 | 高阶一教练 | `text` | `fldjVaU8zJ` |  |
| 111 | 高阶四已进课室 | `select` | `fldamK4R39` | KLCP131; KLCP132; KLCP133; KLCP135; KLCP136; KLCP137; KLCP138; KLCP139; KLCP140 |
| 112 | 基础C1-4信息/Account Check | `select` | `fld7rF7lrx` | 已发出; 已回复; Nana 已确认 |
| 113 | 杂费定金余款 (A,B,C,D) | `number` | `fldr8zEiwc` |  |
| 114 | 杂费定金补款  (A,B,C,D) | `number` | `fldJU2FkyQ` |  |
| 115 | 酒店费用 | `select` | `fldGZYvrcS` | 200; 250; 300; 400; 0; 450; 290; 1200; 240; 350 |
| 116 | 高阶二酒店费用  (A,B,C,D) | `select` | `fldKLj5OvZ` | 2300 |
| 117 | 基础确认当班 | `select` | `fld8MIqSZ5` | 确认; 待确认; 不当班; 健康待审核; 健康不通过; 未接电话 |
| 118 | 邮箱 | `text` | `fld7uLB2sP` |  |
| 119 | 信念系统日期  (A,B,C,D) | `text` | `fld48s0YpN` |  |
| 120 | 高阶总费用 (A,B,C,D) | `formula` | `fldCoHK6zh` |  |
| 121 | 高阶一已进课室人数 | `formula` | `fldPcaGbzz` |  |
| 122 | 高阶付费方式_1 | `select` | `fld9pibfS8` | Cash; Cheque; Online Banking; Boldpay; Credit Card; Deposit Transfer; 支付宝; 中国银行 |
| 123 | 高阶付费方式 (A,B,C,D) | `select` | `fldTsnAeEi` | Cash; Cheque; Online Banking; Boldpay; Credit Card; Deposit Transfer; 支付宝; 中国银行 |
| 124 | 高阶五已经课室 | `select` | `fldOL8qfBY` | MP18; MP19; MP20 |
| 125 | 高阶健康面谈 | `select` | `fldUyUboyG` | 已面谈; 面谈不通过 |
| 126 | 高阶一确认期别人数 | `formula` | `fldxCrwTN6` |  |
| 127 | 客户等级 | `select` | `fldqjJ9DuE` | A+; A; B; C |
| 128 | 序号—— | `number` | `fldvAP9Tsv` |  |
| 129 | 父记录 | `link` | `fldCs2Rbnm` |  |
| 130 | 高阶转名额 | `select` | `fldHzSx5He` | 高阶已消耗; 高阶已退款 |
| 131 | 2 Call Status /学员的位置  (A,B,C,D) | `lookup` | `fldjcroYaI` |  |
| 132 | 【报到】高阶二几点到 | `select` | `fldRMzPjjv` | 8pm-10pm; 10pm-12am; 12am后; 开课当天早上 |
| 133 | 高阶学费SST  (A,B,C,D) | `formula` | `fldzpuXMP8` |  |
| 134 | 高阶二1 Call Status (A,B,C,D) | `text` | `fldrkv27ER` |  |
| 135 | 紧急联系人（姓名、关系、电话） | `text` | `fldbdsENL8` |  |
| 136 | 膳食 | `select` | `fldbiUCP8C` | 素食; 荤食; No |
| 137 | 文字-3 | `text` | `fldACg9DB8` |  |
| 138 | 高阶学费  (A,B,C,D) | `select` | `fld68LoHe7` | 5000; 12500; 15800; 16300; 18900; 6800; 14600; 10800; 13900; 1080 |
| 139 | 个人海星位置 | `number` | `fldw1sPNp8` |  |
| 140 | 定金 | `number` | `fldSqTZCPk` |  |
| 141 | 高阶二卓越宣言表  (A,B,C,D) | `text` | `fldyY1whEh` |  |

### 🖊️🖊️136-【基础Backlog】FINAL MASTERLIST.

Category: `Masterlist / final list`  
Fields: `141`  
Views: `1`

| # | Field | Type | Field ID | Options |
|---:|---|---|---|---|
| 1 | 杂费定金付费方式_高二  (A,B,C,D) | `select` | `fldG29QiQ9` | Cash; Cheque; Online Banking; Boldpay; Credit Card; Deposit Transfer; 支付宝; 中国银行 |
| 2 | 基础学费 | `select` | `fldOGdbu8I` | 5000; 12500; 15800; 16300; 18900; 6800; 5,000; 13,300; 500; 1,580; $5000 |
| 3 | 高阶二1call  (A,B,C,D) | `select` | `fldLFSilk8` | Yes; No |
| 4 | 高阶二C1-3信息  (A,B,C,D) | `select` | `fldCgmJDvK` | 已回复; 已发出 |
| 5 | 基础已进课室（KLCP) | `select` | `fldx22KkI9` | KLCP131; KLCP132; KLCP133; KLCP135; KLCP136; KLCP137; KLCP138; KLCP139; KLCP140 |
| 6 | 信念系统当班期别 (A,B,C,D) | `text` | `fldCsXxw3P` |  |
| 7 | 高阶二后离开原因 | `text` | `fldghrGMDe` |  |
| 8 | 高阶总费用 (A,B,C,D) | `formula` | `fldCoHK6zh` |  |
| 9 | 州 | `select` | `fldDJzKBt7` | Kuala Lumpur; Johor; Kedah; Kelantan; Malacca; Negeri Sembilan; Pahang; Perak; Perlis; Penang; Sabah; Sarawak; Terengganu; Singapore; Selangor |
| 10 | 高阶二确认期别 (A,B,C,D) | `select` | `fldY4T4BzB` | KLCP135 |
| 11 | 付费方式 | `select` | `fldktTMWFK` | Cash; Cheque; Online Banking; Boldpay; Credit Card; Deposit Transfer; 支付宝; 中国银行; Online Transfer |
| 12 | 高阶付费方式_1 | `select` | `fld9pibfS8` | Cash; Cheque; Online Banking; Boldpay; Credit Card; Deposit Transfer; 支付宝; 中国银行 |
| 13 | 文字-5 | `text` | `fld5Xz6qxB` |  |
| 14 | 文字-3 | `text` | `fldACg9DB8` |  |
| 15 | 高阶一C1-3信息  (A,B,C,D) | `select` | `fldbcgHatV` | 已发出; 已回复; Yes |
| 16 | 膳食 | `select` | `fldbiUCP8C` | 素食; 荤食; No |
| 17 | 高阶一已进课室 | `select` | `fldQEOsk5K` | KLCP131; KLCP132; KLCP133; KLCP135; KLCP136; KLCP137; KLCP138; KLCP139; KLCP140 |
| 18 | 杂费定金余款 (A,B,C,D) | `number` | `fldr8zEiwc` |  |
| 19 | 基础确认当班 | `select` | `fld8MIqSZ5` | 确认; 待确认; 不当班; 健康待审核; 健康不通过; 未接电话 |
| 20 | 【报到】高阶二几点到 | `select` | `fldRMzPjjv` | 8pm-10pm; 10pm-12am; 12am后; 开课当天早上 |
| 21 | 杂费定金补款  (A,B,C,D) | `number` | `fldJU2FkyQ` |  |
| 22 | Mark有约意愿度 | `select` | `fldq89Umtt` | Yes; No |
| 23 | 高阶健康 | `text` | `fldqC8HLiJ` |  |
| 24 | 文字-6 | `text` | `flde1ZMLci` |  |
| 25 | 高阶一2CalL (A,B,C,D) | `select` | `flde5hBvrW` | 确认; 待确认; 不当班; 健康待审核; 健康不通过; 未接电话; Yes; 高二待定; 住宿钱诗莹，陈培嬿，周美怡3人要一起，如果可以3人一间，浅眠; 顾孩子、老公 ; 书写有压力; 付款会一半Cash，一半transfer<br>住宿钱诗莹，陈培嬿，周美怡3人要一起，如果可以3人一间，浅眠 |
| 26 | 总费用 | `formula` | `fldH64Rore` |  |
| 27 | 全报 | `select` | `fld37lkP7m` | 基础全款; 连报; 连报+全款; 连报+M; 连报+M+全款; 高阶; 高阶+全款; 高阶+M; 高阶+M+全款; 复读基础; 复读高阶; 复读-高阶一+全款; 复读高阶一+M; 复读-高阶一+M+全款; 复读-高阶二; 复读-高阶二+全款; 复读高阶二+M; 复读-高阶二+M+全款; 毕业生-复读基础; 毕业生-复读基础+复读高阶一; 毕业生-复读基础+复读高阶二; 复读基础+高阶 |
| 28 | 高阶学费  (A,B,C,D) | `select` | `fld68LoHe7` | 5000; 12500; 15800; 16300; 18900; 6800; 14600; 10800; 13900; 1080 |
| 29 | 【基础】Tax invoice name | `text` | `fldNQzMd0q` |  |
| 30 | 高阶二已进课室人数 | `formula` | `fldRnyJp4h` |  |
| 31 | 高阶二教练 | `text` | `fldWmvMlWV` |  |
| 32 | 高阶二卓越宣言表  (A,B,C,D) | `text` | `fldyY1whEh` |  |
| 33 | 孩子 | `number` | `fldXA3u8NF` |  |
| 34 | 结果期别 | `select` | `fldUcxqCzB` | JCP; Dcode; KLCP132; KLCP133; KLCP135; KLCP136; KLCP137; KLCP138; KLCP139; KLCP140; 复习; 复读; 复读-高阶二; 毕业生-基础-高阶二 |
| 35 | 基础已进课室+英文名字 | `formula` | `fldEV3sB63` |  |
| 36 | 文字-1 | `text` | `fldaqIBk4f` |  |
| 37 | 信念系统日期  (A,B,C,D) | `text` | `fld48s0YpN` |  |
| 38 | 年龄 | `number` | `fld4Ozu3jN` |  |
| 39 | 紧急联系人（姓名、关系、电话） | `text` | `fldbdsENL8` |  |
| 40 | 基础阶段教练 | `text` | `fldHTH3wZ9` |  |
| 41 | 高阶转名额 | `select` | `fldHzSx5He` | 高阶已消耗; 高阶已退款 |
| 42 | 高阶定金 (A,B,C,D) | `number` | `fld6DwF8on` |  |
| 43 | 毕业证 (A,B,C,D) | `text` | `fld8M5DEZF` |  |
| 44 | 付费方式 (1) | `select` | `flds6ly10t` | Cash; Cheque; Online Banking; Boldpay; Credit Card; Deposit Transfer; 支付宝; 中国银行; Online Transfer |
| 45 | 性别 | `select` | `fldHbPLVek` | 男; 女 |
| 46 | 基础C1-4信息/Account Check | `select` | `fld7rF7lrx` | 已发出; 已回复; Nana 已确认 |
| 47 | 杂费定金付费方式 (A,B,C,D) | `select` | `fldG89UoDv` | Cash; Cheque; Online Banking; Boldpay; Credit Card; Deposit Transfer; 支付宝; 中国银行 |
| 48 | 英文名字 | `text` | `fld7bXtZTW` |  |
| 49 | 高阶二确认当班 (A,B,C,D) | `select` | `fldVLGX5Vu` | 确认; 不当班; 待确认; 未接 |
| 50 | 高阶一确认当班人数 | `formula` | `fldinQISul` |  |
| 51 | 高阶付费方式 (A,B,C,D) | `select` | `fldTsnAeEi` | Cash; Cheque; Online Banking; Boldpay; Credit Card; Deposit Transfer; 支付宝; 中国银行 |
| 52 | 高阶一教练 | `text` | `fldjVaU8zJ` |  |
| 53 | 年历 | `number` | `fldApjbspo` |  |
| 54 | 职位 | `text` | `fldiMuQal2` |  |
| 55 | 高阶一离开 (A,B,C,D) | `select` | `fldhktTdmb` | 高阶一守则前; 高阶一守则后第1天; 高阶一守则后第2天; 高阶一守则后第3天; 高阶一守则后第4天; 高阶一守则后第5天; 高阶四前; 高阶四后 |
| 56 | 电话 | `text` | `fld3pODST1` |  |
| 57 | 邮政编号 | `number` | `fldoYxtpJe` |  |
| 58 | 学号 | `number` | `fldcAKHYTF` |  |
| 59 | 高阶-Invoice Name | `text` | `fldcSFwUNA` |  |
| 60 | 父记录 | `link` | `fldCs2Rbnm` |  |
| 61 | 序号—— | `number` | `fldvAP9Tsv` |  |
| 62 | 高阶二C1-4信息  (A,B,C,D) | `text` | `fld6bJgztP` |  |
| 63 | IC No | `text` | `fldPi9m6fA` |  |
| 64 | 文字-4 | `text` | `fld9Nh7axi` |  |
| 65 | 定金 | `number` | `fldSqTZCPk` |  |
| 66 | SO/Transfer No. | `number` | `fldVfTh8yC` |  |
| 67 | 个人海星位置 | `number` | `fldw1sPNp8` |  |
| 68 | 邮箱 | `text` | `fld7uLB2sP` |  |
| 69 | 基础问卷 | `select` | `fld2eXxUcJ` | Yes; No; YES |
| 70 | 高阶一酒店费用  (A,B,C,D) | `select` | `fldV1Ov1oJ` | 2300; 1485 |
| 71 | 2 Call Status /学员的位置  (A,B,C,D) | `lookup` | `fldjcroYaI` |  |
| 72 | 高阶二已进课室 (A,B,C,D) | `select` | `fldcZavdOm` | KLCP131; KLCP112; KLCP132; KLCP133; KLCP135; KLCP136; KLCP137; KLCP138; KLCP139; KLCP140 |
| 73 | EMO 华语名字 | `text` | `fldpVM1MAg` |  |
| 74 | 备注 | `text` | `fldxiJJ1fR` |  |
| 75 | 基础1call | `select` | `fldsppqgFK` | Yes; No; YES |
| 76 | 高阶二1 Call Status (A,B,C,D) | `text` | `fldrkv27ER` |  |
| 77 | 基础酒店人数 | `select` | `fldxAC7Mji` | 3; 4; 5; 6; Landmark |
| 78 | 高阶二酒店费用  (A,B,C,D) | `select` | `fldKLj5OvZ` | 2300 |
| 79 | 高阶三已进课室 | `select` | `fldACn4pwe` | KLCP131; KLCP112; KLCP131; KLCP132; KLCP133; KLCP135; KLCP136; KLCP137; KLCP138; KLCP139; KLCP140 |
| 80 | 基础 - 全款/订金 | `formula` | `fldMsWJGBD` |  |
| 81 | 补款 | `number` | `fldAQqQ8io` |  |
| 82 | 高阶一已进课室人数 | `formula` | `fldPcaGbzz` |  |
| 83 | 年收入 | `number` | `fldBv7HKrH` |  |
| 84 | 客户等级 | `select` | `fldqjJ9DuE` | A+; A; B; C |
| 85 | 高阶余款  (A,B,C,D) | `number` | `fld5gM9QQd` |  |
| 86 | 高阶健康面谈 | `select` | `fldUyUboyG` | 已面谈; 面谈不通过 |
| 87 | 基础报读日期 | `datetime` | `fldXqX3bDG` |  |
| 88 | 高阶一确认期别 (A,B,C,D) | `select` | `fld9EHqoBh` | KLCP135; KLCP136 |
| 89 | 基础健康面谈 | `select` | `flduv1pk53` | 已面谈; 面谈不通过; yes; Yes |
| 90 | 婚姻 | `select` | `fldg5w01QF` | 单身; 已婚; 分居; 离婚; 丧偶; 0125351616; 医助 |
| 91 | EMO 联络号码 | `text` | `fld0VFSV0R` |  |
| 92 | 基础2Call Status<br>来的目的、急需解决的问题 | `text` | `fldtaHRKkE` |  |
| 93 | 高阶学费SST  (A,B,C,D) | `formula` | `fldzpuXMP8` |  |
| 94 | 基础已进课室人数 | `formula` | `fldGYhSADi` |  |
| 95 | 酒店费用 | `select` | `fldGZYvrcS` | 200; 250; 300; 400; 0; 450; 290; 1200; 240; 350 |
| 96 | 高阶四已进课室人数 | `formula` | `fldrIarGll` |  |
| 97 | 基础健康 | `text` | `fldpbydaeC` |  |
| 98 | 基础C1-3信息 | `select` | `fldyCLPXM7` | 已发出; 已回复 |
| 99 | 公司规模 (多少人) | `number` | `fldcyxlNHg` |  |
| 100 | 地址 | `text` | `fldA6GtRTG` |  |
| 101 | 【报到】高阶一几点到 | `select` | `fldbcbfBgV` | 8pm-10pm; 10pm-12am; 12am后; 开课当天早上 |
| 102 | 信念系统当班  (A,B,C,D) | `select` | `fldZ6nnaBQ` | 当班; 不当班; 待确认 |
| 103 | 高阶一1 Call Status (A,B,C,D) | `text` | `fldXcdUr7c` |  |
| 104 | 高阶二膳食费用  (A,B,C,D) | `select` | `fld7BTqcdC` | 2300 |
| 105 | 报名时间段 | `select` | `fldkVHa7Kp` | 基础开班; 星期五晚上; 星期六早上; 星期六中午; 星期六晚上; 星期日早上; 星期日小休【毕业后】; 星期日【结果1】; 星期日【结果2】; 星期日【结果3-结束】 |
| 106 | 学员/教练 | `select` | `fldTqu9a5z` | 学员; 教练 |
| 107 | 高阶一C1-4信息  (A,B,C,D) | `select` | `fldCBOwgh2` | 已发出; 已回复 |
| 108 | 市区 | `text` | `fld1DvHlU7` |  |
| 109 | 高阶一问卷(A,B,C,D) | `select` | `fldUPUrzpQ` | Yes; No |
| 110 | 高阶报读日期  (A,B,C,D) | `text` | `fldvKhoqzv` |  |
| 111 | 高阶一确认当班 (A,B,C,D) | `select` | `fldb4fMdP3` | 确认; 待确认; 不当班; 未接电话; 健康待审核; 健康待不通过; 未接; 高阶一确认当班 (A,B,C,D) |
| 112 | 杂费定金  (A,B,C,D) | `number` | `fld5YHqAUa` |  |
| 113 | 高阶二总费用  (A,B,C,D) | `formula` | `fldqp668Em` |  |
| 114 | 基础1 Call Status | `text` | `fldtKneeQO` |  |
| 115 | EMO期别 | `select` | `fldtEM7csn` | KLCP131; KLCP132; KLCP133; KLCP135; KLCP136; KLCP137; KLCP138; KLCP139; KLCP140; KLCP108; KLCP115; KLCP35; KLCP101; KLCP96; KLCP26; KLCP91; KLCP65; KLCP69; KLCP40; KLCP129; KLCP109; KLCP107; KLCP123; KLCP125; KLCP105; KLCP 102; KLCP127; KLCP87; KLCP116; KLCP59 |
| 116 | 膳食费用 | `select` | `fldJyjyJaw` | 375; 2300; 2675; 0; 1200 |
| 117 | 生日日期 | `datetime` | `fldqty2zuN` |  |
| 118 | 高阶三已进课室人数 | `formula` | `fldG1VmmI3` |  |
| 119 | 高阶补款 (A,B,C,D) | `number` | `flddyIpxbM` |  |
| 120 | 高阶一确认期别人数 | `formula` | `fldxCrwTN6` |  |
| 121 | 高阶一1call(A,B,C,D) | `select` | `fld3LBWyNZ` | Yes; No |
| 122 | 公司名称 | `text` | `fldPt86QXy` |  |
| 123 | 高阶一来的目的、急需解决的问题  (A,B,C,D) | `text` | `fldBTFVLKs` |  |
| 124 | 行业性质 | `text` | `fldeGX47jN` |  |
| 125 | 基础离开 | `select` | `fldUMPJqqk` | 基础守则前; 基础守则后第1天; 基础守则后第2天; 基础守则后第3天; 基础守则后第4天; 基础守则后第5天;  ; 守则后第二天; 守则后第三天 |
| 126 | 高阶 - 全款/订金 | `formula` | `fldsWv81U0` |  |
| 127 | 基础2Call | `select` | `fld3PR7LZl` | Yes; No |
| 128 | 高阶二后离开(A,B,C,D) | `select` | `fldYSq4dt1` | 高级二守则前; 高阶二守则后; 高阶三守则前; 高阶三守则后; 高阶四守则前; 高阶四守则后; 守则后第1天; 守则后第2天; 守则后第3天; 守则后第4天; 守则后第5天 |
| 129 | 高阶SO/Transfer No. (A,B,C,D) | `number` | `fldoGWsYc2` |  |
| 130 | 备注-转海星/消耗 | `text` | `fldmYPrj9l` |  |
| 131 | 基础确认期别 | `select` | `fld4FgLMyN` | KLCP131; KLCP132; KLCP133; KLCP135; KLCP136; KLCP137; KLCP138; KLCP139; KLCP140 |
| 132 | 基础转名额 | `select` | `fldJ4Ok5wY` | 基础已消耗; 基础已退款 |
| 133 | 高阶五已经课室 | `select` | `fldOL8qfBY` | MP18; MP19; MP20 |
| 134 | 文字-2 | `text` | `fldQxS590Q` |  |
| 135 | 高阶四已进课室 | `select` | `fldamK4R39` | KLCP131; KLCP132; KLCP133; KLCP135; KLCP136; KLCP137; KLCP138; KLCP139; KLCP140 |
| 136 | 余款 | `number` | `fldVakFzdK` |  |
| 137 | 高阶二2Call  (A,B,C,D) | `lookup` | `fldpTEoMrj` |  |
| 138 | 课室内名单 | `text` | `fldDnN0ySS` |  |
| 139 | 8%SST | `formula` | `fldKqsFNLd` |  |
| 140 | EMO 英文名字 | `text` | `fldFDwxkst` |  |
| 141 | 华语名字 | `text` | `fldIqZVRsw` |  |

### 🖊️-136-高阶一-【高阶一Backlog】Final Masterlist.

Category: `Masterlist / final list`  
Fields: `141`  
Views: `1`

| # | Field | Type | Field ID | Options |
|---:|---|---|---|---|
| 1 | EMO期别 | `select` | `fldtEM7csn` | KLCP131; KLCP132; KLCP133; KLCP135; KLCP136; KLCP137; KLCP138; KLCP139; KLCP140; KLCP108; KLCP115; KLCP35; KLCP101; KLCP96; KLCP26; KLCP91; KLCP65; KLCP69; KLCP40; KLCP129; KLCP109; KLCP107; KLCP123; KLCP125; KLCP105; KLCP 102; KLCP127; KLCP87; KLCP116; KLCP59 |
| 2 | 全报 | `select` | `fld37lkP7m` | 基础全款; 连报; 连报+全款; 连报+M; 连报+M+全款; 高阶; 高阶+全款; 高阶+M; 高阶+M+全款; 复读基础; 复读高阶; 复读-高阶一+全款; 复读高阶一+M; 复读-高阶一+M+全款; 复读-高阶二; 复读-高阶二+全款; 复读高阶二+M; 复读-高阶二+M+全款; 毕业生-复读基础; 毕业生-复读基础+复读高阶一; 毕业生-复读基础+复读高阶二; 复读基础+高阶 |
| 3 | 高阶一确认当班人数 | `formula` | `fldinQISul` |  |
| 4 | 高阶五已经课室 | `select` | `fldOL8qfBY` | MP18; MP19; MP20 |
| 5 | 紧急联系人（姓名、关系、电话） | `text` | `fldbdsENL8` |  |
| 6 | 高阶二后离开原因 | `text` | `fldghrGMDe` |  |
| 7 | 年收入 | `number` | `fldBv7HKrH` |  |
| 8 | 膳食 | `select` | `fldbiUCP8C` | 素食; 荤食; No |
| 9 | 电话 | `text` | `fld3pODST1` |  |
| 10 | 膳食费用 | `select` | `fldJyjyJaw` | 375; 2300; 2675; 0; 1200 |
| 11 | 付费方式 (1) | `select` | `flds6ly10t` | Cash; Cheque; Online Banking; Boldpay; Credit Card; Deposit Transfer; 支付宝; 中国银行; Online Transfer |
| 12 | 高阶学费SST  (A,B,C,D) | `formula` | `fldzpuXMP8` |  |
| 13 | 基础2Call | `select` | `fld3PR7LZl` | Yes; No |
| 14 | 杂费定金补款  (A,B,C,D) | `number` | `fldJU2FkyQ` |  |
| 15 | 高阶二确认期别 (A,B,C,D) | `select` | `fldY4T4BzB` | KLCP135 |
| 16 | 职位 | `text` | `fldiMuQal2` |  |
| 17 | 基础阶段教练 | `text` | `fldHTH3wZ9` |  |
| 18 | 高阶转名额 | `select` | `fldHzSx5He` | 高阶已消耗; 高阶已退款 |
| 19 | 高阶一1 Call Status (A,B,C,D) | `text` | `fldXcdUr7c` |  |
| 20 | 【基础】Tax invoice name | `text` | `fldNQzMd0q` |  |
| 21 | 基础转名额 | `select` | `fldJ4Ok5wY` | 基础已消耗; 基础已退款 |
| 22 | 市区 | `text` | `fld1DvHlU7` |  |
| 23 | 基础报读日期 | `datetime` | `fldXqX3bDG` |  |
| 24 | 高阶SO/Transfer No. (A,B,C,D) | `number` | `fldoGWsYc2` |  |
| 25 | 年历 | `number` | `fldApjbspo` |  |
| 26 | 基础酒店人数 | `select` | `fldxAC7Mji` | 3; 4; 5; 6; Landmark |
| 27 | SO/Transfer No. | `number` | `fldVfTh8yC` |  |
| 28 | 高阶一C1-3信息  (A,B,C,D) | `select` | `fldbcgHatV` | 已发出; 已回复; Yes |
| 29 | 孩子 | `number` | `fldXA3u8NF` |  |
| 30 | 【报到】高阶二几点到 | `select` | `fldRMzPjjv` | 8pm-10pm; 10pm-12am; 12am后; 开课当天早上 |
| 31 | 高阶余款  (A,B,C,D) | `number` | `fld5gM9QQd` |  |
| 32 | 基础1 Call Status | `text` | `fldtKneeQO` |  |
| 33 | 基础2Call Status<br>来的目的、急需解决的问题 | `text` | `fldtaHRKkE` |  |
| 34 | 高阶一离开 (A,B,C,D) | `select` | `fldhktTdmb` | 高阶一守则前; 高阶一守则后第1天; 高阶一守则后第2天; 高阶一守则后第3天; 高阶一守则后第4天; 高阶一守则后第5天; 高阶四前; 高阶四后 |
| 35 | 学号 | `number` | `fldcAKHYTF` |  |
| 36 | 基础已进课室（KLCP) | `select` | `fldx22KkI9` | KLCP131; KLCP132; KLCP133; KLCP135; KLCP136; KLCP137; KLCP138; KLCP139; KLCP140 |
| 37 | 基础问卷 | `select` | `fld2eXxUcJ` | Yes; No; YES |
| 38 | 高阶总费用 (A,B,C,D) | `formula` | `fldCoHK6zh` |  |
| 39 | 年龄 | `number` | `fld4Ozu3jN` |  |
| 40 | 基础已进课室+英文名字 | `formula` | `fldEV3sB63` |  |
| 41 | 基础离开 | `select` | `fldUMPJqqk` | 基础守则前; 基础守则后第1天; 基础守则后第2天; 基础守则后第3天; 基础守则后第4天; 基础守则后第5天;  ; 守则后第二天; 守则后第三天 |
| 42 | 余款 | `number` | `fldVakFzdK` |  |
| 43 | 邮箱 | `text` | `fld7uLB2sP` |  |
| 44 | 基础确认期别 | `select` | `fld4FgLMyN` | KLCP131; KLCP132; KLCP133; KLCP135; KLCP136; KLCP137; KLCP138; KLCP139; KLCP140 |
| 45 | EMO 联络号码 | `text` | `fld0VFSV0R` |  |
| 46 | 高阶二1 Call Status (A,B,C,D) | `text` | `fldrkv27ER` |  |
| 47 | 基础学费 | `select` | `fldOGdbu8I` | 5000; 12500; 15800; 16300; 18900; 6800; 5,000; 13,300; 500; 1,580; $5000 |
| 48 | 团队干部 (A,B,C,D) | `text` | `flde1ZMLci` |  |
| 49 | 补款 | `number` | `fldAQqQ8io` |  |
| 50 | IC No | `text` | `fldPi9m6fA` |  |
| 51 | 信念系统当班  (A,B,C,D) | `select` | `fldZ6nnaBQ` | 当班; 不当班; 待确认 |
| 52 | 基础 - 全款/订金 | `formula` | `fldMsWJGBD` |  |
| 53 | 高阶四已进课室 | `select` | `fldamK4R39` | KLCP131; KLCP132; KLCP133; KLCP135; KLCP136; KLCP137; KLCP138; KLCP139; KLCP140 |
| 54 | 伸展（A) | `text` | `fldQxS590Q` |  |
| 55 | 伸展音乐（A) | `text` | `fldACg9DB8` |  |
| 56 | 【报到】高阶一几点到 | `select` | `fldbcbfBgV` | 8pm-10pm; 10pm-12am; 12am后; 开课当天早上 |
| 57 | 英文名字 | `text` | `fld7bXtZTW` |  |
| 58 | 性别 | `select` | `fldHbPLVek` | 男; 女 |
| 59 | 高阶二C1-3信息  (A,B,C,D) | `select` | `fldCgmJDvK` | 已回复; 已发出 |
| 60 | 信念系统当班期别 (A,B,C,D) | `text` | `fldCsXxw3P` |  |
| 61 | 杂费定金余款 (A,B,C,D) | `number` | `fldr8zEiwc` |  |
| 62 | 高阶一确认期别 (A,B,C,D) | `select` | `fld9EHqoBh` | KLCP135; KLCP136 |
| 63 | 杂费定金付费方式 (A,B,C,D) | `select` | `fldG89UoDv` | Cash; Cheque; Online Banking; Boldpay; Credit Card; Deposit Transfer; 支付宝; 中国银行 |
| 64 | 基础C1-4信息/Account Check | `select` | `fld7rF7lrx` | 已发出; 已回复; Nana 已确认 |
| 65 | 高阶三已进课室 | `select` | `fldACn4pwe` | KLCP131; KLCP112; KLCP131; KLCP132; KLCP133; KLCP135; KLCP136; KLCP137; KLCP138; KLCP139; KLCP140 |
| 66 | 高阶四已进课室人数 | `formula` | `fldrIarGll` |  |
| 67 | 高阶一问卷(A,B,C,D) | `select` | `fldUPUrzpQ` | Yes; No |
| 68 | 基础健康面谈 | `select` | `flduv1pk53` | 已面谈; 面谈不通过; yes; Yes |
| 69 | 高阶付费方式 (A,B,C,D) | `select` | `fldTsnAeEi` | Cash; Cheque; Online Banking; Boldpay; Credit Card; Deposit Transfer; 支付宝; 中国银行 |
| 70 | 毕业证 (A,B,C,D) | `text` | `fld8M5DEZF` |  |
| 71 | 课室内名单 | `text` | `fldDnN0ySS` |  |
| 72 | 高阶二确认当班 (A,B,C,D) | `select` | `fldVLGX5Vu` | 确认; 不当班; 待确认; 未接 |
| 73 | 高阶付费方式_1 | `select` | `fld9pibfS8` | Cash; Cheque; Online Banking; Boldpay; Credit Card; Deposit Transfer; 支付宝; 中国银行 |
| 74 | 高阶一已进课室人数 | `formula` | `fldPcaGbzz` |  |
| 75 | 高阶一C1-4信息  (A,B,C,D) | `select` | `fldCBOwgh2` | 已发出; 已回复 |
| 76 | EMO 华语名字 | `text` | `fldpVM1MAg` |  |
| 77 | 高阶三已进课室人数 | `formula` | `fldG1VmmI3` |  |
| 78 | 8%SST | `formula` | `fldKqsFNLd` |  |
| 79 | 华语名字 | `text` | `fldIqZVRsw` |  |
| 80 | 誓约 （A) | `text` | `fldaqIBk4f` |  |
| 81 | 报名时间段 | `select` | `fldkVHa7Kp` | 基础开班; 星期五晚上; 星期六早上; 星期六中午; 星期六晚上; 星期日早上; 星期日小休【毕业后】; 星期日【结果1】; 星期日【结果2】; 星期日【结果3-结束】 |
| 82 | 信念系统日期  (A,B,C,D) | `text` | `fld48s0YpN` |  |
| 83 | 高阶一摇篮曲(A,B,C,D) | `text` | `fld9Nh7axi` |  |
| 84 | 2 Call Status /学员的位置  (A,B,C,D) | `lookup` | `fldjcroYaI` |  |
| 85 | 高阶二已进课室人数 | `formula` | `fldRnyJp4h` |  |
| 86 | 地址 | `text` | `fldA6GtRTG` |  |
| 87 | 高阶二已进课室 (A,B,C,D) | `select` | `fldcZavdOm` | KLCP131; KLCP112; KLCP132; KLCP133; KLCP135; KLCP136; KLCP137; KLCP138; KLCP139; KLCP140 |
| 88 | 高阶一已进课室 | `select` | `fldQEOsk5K` | KLCP131; KLCP132; KLCP133; KLCP135; KLCP136; KLCP137; KLCP138; KLCP139; KLCP140 |
| 89 | 生日日期 | `datetime` | `fldqty2zuN` |  |
| 90 | 高阶二总费用  (A,B,C,D) | `formula` | `fldqp668Em` |  |
| 91 | 杂费定金付费方式_高二  (A,B,C,D) | `select` | `fldG29QiQ9` | Cash; Cheque; Online Banking; Boldpay; Credit Card; Deposit Transfer; 支付宝; 中国银行 |
| 92 | 基础已进课室人数 | `formula` | `fldGYhSADi` |  |
| 93 | 婚姻 | `select` | `fldg5w01QF` | 单身; 已婚; 分居; 离婚; 丧偶; 0125351616; 医助 |
| 94 | 高阶二卓越宣言表  (A,B,C,D) | `text` | `fldyY1whEh` |  |
| 95 | 备注-转海星/消耗 | `text` | `fldmYPrj9l` |  |
| 96 | 高阶一确认当班 (A,B,C,D) | `select` | `fldb4fMdP3` | 确认; 待确认; 不当班; 未接电话; 健康待审核; 健康待不通过; 未接; 高阶一确认当班 (A,B,C,D) |
| 97 | 高阶二C1-4信息  (A,B,C,D) | `text` | `fld6bJgztP` |  |
| 98 | 公司规模 (多少人) | `number` | `fldcyxlNHg` |  |
| 99 | 高阶健康 | `text` | `fldqC8HLiJ` |  |
| 100 | 定金 | `number` | `fldSqTZCPk` |  |
| 101 | 杂费定金  (A,B,C,D) | `number` | `fld5YHqAUa` |  |
| 102 | 州 | `select` | `fldDJzKBt7` | Kuala Lumpur; Johor; Kedah; Kelantan; Malacca; Negeri Sembilan; Pahang; Perak; Perlis; Penang; Sabah; Sarawak; Terengganu; Singapore; Selangor |
| 103 | 高阶一酒店费用  (A,B,C,D) | `select` | `fldV1Ov1oJ` | 2300; 1485 |
| 104 | 基础健康 | `text` | `fldpbydaeC` |  |
| 105 | 邮政编号 | `number` | `fldoYxtpJe` |  |
| 106 | 付费方式 | `select` | `fldktTMWFK` | Cash; Cheque; Online Banking; Boldpay; Credit Card; Deposit Transfer; 支付宝; 中国银行; Online Transfer |
| 107 | 高阶一来的目的、急需解决的问题  (A,B,C,D) | `text` | `fldBTFVLKs` |  |
| 108 | 基础确认当班 | `select` | `fld8MIqSZ5` | 确认; 待确认; 不当班; 健康待审核; 健康不通过; 未接电话 |
| 109 | 高阶定金 (A,B,C,D) | `number` | `fld6DwF8on` |  |
| 110 | 备注 | `text` | `fldxiJJ1fR` |  |
| 111 | 结果期别 | `select` | `fldUcxqCzB` | JCP; Dcode; KLCP132; KLCP133; KLCP135; KLCP136; KLCP137; KLCP138; KLCP139; KLCP140; 复习; 复读; 复读-高阶二; 毕业生-基础-高阶二 |
| 112 | 酒店费用 | `select` | `fldGZYvrcS` | 200; 250; 300; 400; 0; 450; 290; 1200; 240; 350 |
| 113 | EMO 英文名字 | `text` | `fldFDwxkst` |  |
| 114 | 高阶二1call  (A,B,C,D) | `select` | `fldLFSilk8` | Yes; No |
| 115 | 高阶二教练 | `text` | `fldWmvMlWV` |  |
| 116 | 基础1call | `select` | `fldsppqgFK` | Yes; No; YES |
| 117 | 高阶报读日期  (A,B,C,D) | `text` | `fldvKhoqzv` |  |
| 118 | 学员/教练 | `select` | `fldTqu9a5z` | 学员; 教练 |
| 119 | 父记录 | `link` | `fldCs2Rbnm` |  |
| 120 | 高阶二2Call  (A,B,C,D) | `lookup` | `fldpTEoMrj` |  |
| 121 | 高阶学费  (A,B,C,D) | `select` | `fld68LoHe7` | 5000; 12500; 15800; 16300; 18900; 6800; 14600; 10800; 13900; 1080 |
| 122 | 高阶一1call(A,B,C,D) | `select` | `fld3LBWyNZ` | Yes; No |
| 123 | 高阶-Invoice Name | `text` | `fldcSFwUNA` |  |
| 124 | 高阶二后离开(A,B,C,D) | `select` | `fldYSq4dt1` | 高级二守则前; 高阶二守则后; 高阶三守则前; 高阶三守则后; 高阶四守则前; 高阶四守则后; 守则后第1天; 守则后第2天; 守则后第3天; 守则后第4天; 守则后第5天 |
| 125 | 总费用 | `formula` | `fldH64Rore` |  |
| 126 | 高阶二膳食费用  (A,B,C,D) | `select` | `fld7BTqcdC` | 2300 |
| 127 | 高阶一确认期别人数 | `formula` | `fldxCrwTN6` |  |
| 128 | 高阶健康面谈 | `select` | `fldUyUboyG` | 已面谈; 面谈不通过 |
| 129 | 四摇篮曲 (A,B,C,D) | `text` | `fld5Xz6qxB` |  |
| 130 | 序号—— | `number` | `fldvAP9Tsv` |  |
| 131 | 高阶二酒店费用  (A,B,C,D) | `select` | `fldKLj5OvZ` | 2300 |
| 132 | Mark有约意愿度 | `select` | `fldq89Umtt` | Yes; No |
| 133 | 高阶一教练 | `text` | `fldjVaU8zJ` |  |
| 134 | 基础C1-3信息 | `select` | `fldyCLPXM7` | 已发出; 已回复 |
| 135 | 行业性质 | `text` | `fldeGX47jN` |  |
| 136 | 个人海星位置 | `number` | `fldw1sPNp8` |  |
| 137 | 高阶 - 全款/订金 | `formula` | `fldsWv81U0` |  |
| 138 | 客户等级 | `select` | `fldqjJ9DuE` | A+; A; B; C |
| 139 | 高阶补款 (A,B,C,D) | `number` | `flddyIpxbM` |  |
| 140 | 公司名称 | `text` | `fldPt86QXy` |  |
| 141 | 高阶一2CalL (A,B,C,D) | `select` | `flde5hBvrW` | 确认; 待确认; 不当班; 健康待审核; 健康不通过; 未接电话; Yes; 高二待定; 住宿钱诗莹，陈培嬿，周美怡3人要一起，如果可以3人一间，浅眠; 顾孩子、老公 ; 书写有压力; 付款会一半Cash，一半transfer<br>住宿钱诗莹，陈培嬿，周美怡3人要一起，如果可以3人一间，浅眠 |

### 🖊️-136-高阶一-FINAL MASTERLIST

Category: `Masterlist / final list`  
Fields: `141`  
Views: `1`

| # | Field | Type | Field ID | Options |
|---:|---|---|---|---|
| 1 | 高阶二总费用  (A,B,C,D) | `formula` | `fldqp668Em` |  |
| 2 | 四摇篮曲 (A,B,C,D) | `text` | `fld5Xz6qxB` |  |
| 3 | 基础阶段教练 | `text` | `fldHTH3wZ9` |  |
| 4 | SO/Transfer No. | `number` | `fldVfTh8yC` |  |
| 5 | 高阶一教练 | `text` | `fldjVaU8zJ` |  |
| 6 | 高阶二后离开原因 | `text` | `fldghrGMDe` |  |
| 7 | 高阶二确认当班 (A,B,C,D) | `select` | `fldVLGX5Vu` | 确认; 不当班; 待确认; 未接 |
| 8 | 基础健康 | `text` | `fldpbydaeC` |  |
| 9 | 高阶三已进课室 | `select` | `fldACn4pwe` | KLCP131; KLCP112; KLCP131; KLCP132; KLCP133; KLCP135; KLCP136; KLCP137; KLCP138; KLCP139; KLCP140 |
| 10 | EMO 英文名字 | `text` | `fldFDwxkst` |  |
| 11 | 基础转名额 | `select` | `fldJ4Ok5wY` | 基础已消耗; 基础已退款 |
| 12 | 高阶一C1-4信息  (A,B,C,D) | `select` | `fldCBOwgh2` | 已发出; 已回复 |
| 13 | 基础离开 | `select` | `fldUMPJqqk` | 基础守则前; 基础守则后第1天; 基础守则后第2天; 基础守则后第3天; 基础守则后第4天; 基础守则后第5天;  ; 守则后第二天; 守则后第三天 |
| 14 | 高阶二教练 | `text` | `fldWmvMlWV` |  |
| 15 | 职位 | `text` | `fldiMuQal2` |  |
| 16 | 高阶健康面谈 | `select` | `fldUyUboyG` | 已面谈; 面谈不通过 |
| 17 | 高阶 - 全款/订金 | `formula` | `fldsWv81U0` |  |
| 18 | 基础问卷 | `select` | `fld2eXxUcJ` | Yes; No; YES |
| 19 | 课室内名单 | `text` | `fldDnN0ySS` |  |
| 20 | 高阶一1 Call Status (A,B,C,D) | `select` | `fldXcdUr7c` | Yes; No; 5/3 确认136高阶一二当班，高阶三有2场重要的婚礼<br>不当班; 14/3 确认136高阶当班; 1/4 确认136高阶二，高阶一在场外 |
| 21 | 8%SST | `formula` | `fldKqsFNLd` |  |
| 22 | 基础1 Call Status | `text` | `fldtKneeQO` |  |
| 23 | 基础确认当班 | `select` | `fld8MIqSZ5` | 确认; 待确认; 不当班; 健康待审核; 健康不通过; 未接电话 |
| 24 | 高阶五已经课室 | `select` | `fldOL8qfBY` | MP18; MP19; MP20 |
| 25 | 高阶二2Call  (A,B,C,D) | `lookup` | `fldpTEoMrj` |  |
| 26 | 高阶SO/Transfer No. (A,B,C,D) | `number` | `fldoGWsYc2` |  |
| 27 | 杂费定金补款  (A,B,C,D) | `number` | `fldJU2FkyQ` |  |
| 28 | 高阶学费SST  (A,B,C,D) | `formula` | `fldzpuXMP8` |  |
| 29 | 高阶二1 Call Status (A,B,C,D) | `select` | `fldrkv27ER` | Yes; No |
| 30 | 高阶二已进课室人数 | `formula` | `fldRnyJp4h` |  |
| 31 | 高阶二后离开(A,B,C,D) | `select` | `fldYSq4dt1` | 高级二守则前; 高阶二守则后; 高阶三守则前; 高阶三守则后; 高阶四守则前; 高阶四守则后; 守则后第1天; 守则后第2天; 守则后第3天; 守则后第4天; 守则后第5天 |
| 32 | 高阶一已进课室 | `select` | `fldQEOsk5K` | KLCP131; KLCP132; KLCP133; KLCP135; KLCP136; KLCP137; KLCP138; KLCP139; KLCP140 |
| 33 | 高阶一2CalL (A,B,C,D) | `select` | `flde5hBvrW` | 确认; 待确认; 不当班; 健康待审核; 健康不通过; 未接电话; Yes; 高二待定; 住宿钱诗莹，陈培嬿，周美怡3人要一起，如果可以3人一间，浅眠; 顾孩子、老公 ; 书写有压力; 付款会一半Cash，一半transfer<br>住宿钱诗莹，陈培嬿，周美怡3人要一起，如果可以3人一间，浅眠; 1; 0 |
| 34 | 高阶-Invoice Name | `formula` | `fldcSFwUNA` |  |
| 35 | 高阶一确认期别 (A,B,C,D) | `select` | `fld9EHqoBh` | KLCP135; KLCP136; 1; 0 |
| 36 | 邮政编号 | `number` | `fldoYxtpJe` |  |
| 37 | 高阶一确认当班 (A,B,C,D) | `select` | `fldb4fMdP3` | 确认; 待确认; 不当班; 未接电话; 健康待审核; 健康待不通过; 未接; 高阶一确认当班 (A,B,C,D); 30/3/26 6.05pm - 确认136高一，高二待定<br>30/3/26 4.20pm - 未接; 30/3/26 3.30pm - 确认136高一高二; 1/4 确认当班<br>31/3 家里有事，经济卡，周三2pm后确认，需要Instalments<br>30/3/26 4.20pm - 未接; 30/3/26 5.10pm - 确认136高一高二; 30/3/26 3.45pm - 待确认，需等玉萍安排看如何，一起上。本身有卡如果要住在中心，本身有顾孩子，要问如果老公一起过来入住中心带孩子照顾可以吗; 31/3 确认当班<br>30/3/26 5.30pm - 目前卡请假，最快明天给确定; 30/3/26 6.30pm - 确认136高一高二; 30/3/26 4.20pm - 确认136高一，高二待定; 1/4 确认当班，周四会处理payment; 31/3 确认当班，高二待定<br>30/3/26 5.45pm - 未接; 31/3 确认当班; 1/4 不方便联系，周四12pm<br>30/3/26 5.50pm - 需要5天的时间安排，再给答复; 30/3/26 5pm - 确认136高一高二; 30/3/26 4pm - 确认136高一高二; 1/4 136高阶一确认，高二待定<br>31/3 未接<br>30/3/26 5.55pm - 未通; 30/3/26 5.55pm - 决定不继续高阶; 30/3/26 4.20pm - 目前还在考虑是否会继续高阶中，尽量在这星期给回应; 30/3/26 4.45pm - 确认136高一高二; 30/3/26 6.05pm - 明天回去sarawak才可看安排是否能136; 31/3 确认当班<br>30/3/26 6.55pm - 未接<br>30/3/26 4.20pm - 待确认中心确定学员是否可参与高一 |
| 38 | 备注 | `text` | `fldxiJJ1fR` |  |
| 39 | 年收入 | `number` | `fldBv7HKrH` |  |
| 40 | 高阶一已进课室人数 | `formula` | `fldPcaGbzz` |  |
| 41 | 2 Call Status /学员的位置  (A,B,C,D) | `lookup` | `fldjcroYaI` |  |
| 42 | 基础C1-4信息/Account Check | `select` | `fld7rF7lrx` | 已发出; 已回复; Nana 已确认 |
| 43 | 基础 - 全款/订金 | `formula` | `fldMsWJGBD` |  |
| 44 | 基础已进课室+英文名字 | `formula` | `fldEV3sB63` |  |
| 45 | 基础学费 | `select` | `fldOGdbu8I` | 5000; 12500; 15800; 16300; 18900; 6800; 5,000; 13,300; 500; 1,580; $5000; $16,300 |
| 46 | 膳食费用 | `select` | `fldJyjyJaw` | 375; 2300; 2675; 0; 1200 |
| 47 | 高阶余款  (A,B,C,D) | `number` | `fld5gM9QQd` |  |
| 48 | 杂费定金  (A,B,C,D) | `number` | `fld5YHqAUa` |  |
| 49 | 高阶二卓越宣言表  (A,B,C,D) | `text` | `fldyY1whEh` |  |
| 50 | 学员/教练 | `select` | `fldTqu9a5z` | 学员; 教练 |
| 51 | 付费方式 | `select` | `fldktTMWFK` | Cash; Cheque; Online Banking; Boldpay; Credit Card; Deposit Transfer; 支付宝; 中国银行; Online Transfer |
| 52 | 高阶学费  (A,B,C,D) | `select` | `fld68LoHe7` | 5000; 12500; 15800; 16300; 18900; 6800; 14600; 10800; 13900; 1080; 24574; 19987; 24552; 2377324359; 19964; 19980; 24569; 24573; 22446; 24558; 24580; 22444; 24559; 24578; 24577; 24572; 24570; 24347; 2430924575; 24584; 24581; 24565; 24315; 24561; 24564; 24701; 19983; 24593; 19998; 24702 |
| 53 | 高阶四已进课室人数 | `formula` | `fldrIarGll` |  |
| 54 | 公司名称 | `text` | `fldPt86QXy` |  |
| 55 | 高阶一问卷(A,B,C,D) | `select` | `fldUPUrzpQ` | Yes; No |
| 56 | 基础2Call | `select` | `fld3PR7LZl` | Yes; No |
| 57 | 高阶二确认期别 (A,B,C,D) | `select` | `fldY4T4BzB` | KLCP135 |
| 58 | 高阶补款 (A,B,C,D) | `number` | `flddyIpxbM` |  |
| 59 | 高阶总费用 (A,B,C,D) | `formula` | `fldCoHK6zh` |  |
| 60 | 高阶二1call  (A,B,C,D) | `select` | `fldLFSilk8` | Yes; No |
| 61 | 生日日期 | `datetime` | `fldqty2zuN` |  |
| 62 | 基础报读日期 | `datetime` | `fldXqX3bDG` |  |
| 63 | EMO 联络号码 | `text` | `fld0VFSV0R` |  |
| 64 | 杂费定金余款 (A,B,C,D) | `number` | `fldr8zEiwc` |  |
| 65 | 性别 | `select` | `fldHbPLVek` | 男; 女 |
| 66 | 信念系统日期  (A,B,C,D) | `number` | `fld48s0YpN` |  |
| 67 | 婚姻 | `select` | `fldg5w01QF` | 单身; 已婚; 分居; 离婚; 丧偶; 0125351616; 医助; 已婚 Married |
| 68 | 高阶一离开 (A,B,C,D) | `select` | `fldhktTdmb` | 高阶一守则前; 高阶一守则后第1天; 高阶一守则后第2天; 高阶一守则后第3天; 高阶一守则后第4天; 高阶一守则后第5天; 高阶四前; 高阶四后 |
| 69 | 高阶三已进课室人数 | `formula` | `fldG1VmmI3` |  |
| 70 | 余款 | `number` | `fldVakFzdK` |  |
| 71 | 高阶付费方式 (A,B,C,D) | `select` | `fldTsnAeEi` | Cash; Cheque; Online Banking; Boldpay; Credit Card; Deposit Transfer; 支付宝; 中国银行; 3000; 18068; 2000; 19904; 17312; 15800; 6000; 965; 5800 |
| 72 | EMO期别 | `select` | `fldtEM7csn` | KLCP131; KLCP132; KLCP133; KLCP135; KLCP136; KLCP137; KLCP138; KLCP139; KLCP140; KLCP108; KLCP115; KLCP35; KLCP101; KLCP96; KLCP26; KLCP91; KLCP65; KLCP69; KLCP40; KLCP129; KLCP109; KLCP107; KLCP123; KLCP125; KLCP105; KLCP 102; KLCP127; KLCP87; KLCP116; KLCP59; KLCP119; KLCP128 |
| 73 | 基础2Call Status<br>来的目的、急需解决的问题 | `text` | `fldtaHRKkE` |  |
| 74 | 基础已进课室（KLCP) | `select` | `fldx22KkI9` | KLCP131; KLCP132; KLCP133; KLCP135; KLCP136; KLCP137; KLCP138; KLCP139; KLCP140; KLCP121; KLCP130 |
| 75 | 序号—— | `number` | `fldvAP9Tsv` |  |
| 76 | 孩子 | `number` | `fldXA3u8NF` |  |
| 77 | 华语名字 | `text` | `fldIqZVRsw` |  |
| 78 | 总费用 | `formula` | `fldH64Rore` |  |
| 79 | 基础酒店人数 | `select` | `fldxAC7Mji` | 3; 4; 5; 6; Landmark |
| 80 | 市区 | `text` | `fld1DvHlU7` |  |
| 81 | 膳食 | `select` | `fldbiUCP8C` | 素食; 荤食; No |
| 82 | 高阶二膳食费用  (A,B,C,D) | `select` | `fld7BTqcdC` | 2300 |
| 83 | 高阶付费方式_1 | `select` | `fld9pibfS8` | Cash; Cheque; Online Banking; Boldpay; Credit Card; Deposit Transfer; 支付宝; 中国银行; 16904; 11964; 50; 13800; 12800; 13904; 10964; 16954; 10000; 10694 |
| 84 | 【基础】Tax invoice name | `formula` | `fldNQzMd0q` |  |
| 85 | 团队干部 (A,B,C,D) | `text` | `flde1ZMLci` |  |
| 86 | 高阶四已进课室 | `select` | `fldamK4R39` | KLCP131; KLCP132; KLCP133; KLCP135; KLCP136; KLCP137; KLCP138; KLCP139; KLCP140 |
| 87 | 全报 | `select` | `fld37lkP7m` | 基础全款; 连报; 连报+全款; 连报+M; 连报+M+全款; 高阶; 高阶+全款; 高阶+M; 高阶+M+全款; 复读基础; 复读高阶; 复读-高阶一+全款; 复读高阶一+M; 复读-高阶一+M+全款; 复读-高阶二; 复读-高阶二+全款; 复读高阶二+M; 复读-高阶二+M+全款; 毕业生-复读基础; 毕业生-复读基础+复读高阶一; 毕业生-复读基础+复读高阶二; 复读基础+高阶; 复读高阶二 |
| 88 | 备注-转海星/消耗 | `select` | `fldmYPrj9l` | 高阶已消耗; 高阶已退款; 27/10- 275mbb<br>19/10- 5000mbb<br>21/10- Evonne Chong Kar Yan500转给Lim Chun Kit<br>9/10- Shirlyn Lai500转给Evonne Chong Kar Yan |
| 89 | 高阶二C1-4信息  (A,B,C,D) | `select` | `fld6bJgztP` | 已回复; 已发出 |
| 90 | 个人海星位置 | `number` | `fldw1sPNp8` |  |
| 91 | 高阶健康 | `text` | `fldqC8HLiJ` |  |
| 92 | 高阶一来的目的、急需解决的问题  (A,B,C,D) | `select` | `fldBTFVLKs` | 确认; 待确认; 不当班; 健康待审核; 健康不通过; 未接电话; Yes; 高二待定; 住宿钱诗莹，陈培嬿，周美怡3人要一起，如果可以3人一间，浅眠; 顾孩子、老公 ; 书写有压力; 付款会一半Cash，一半transfer<br>住宿钱诗莹，陈培嬿，周美怡3人要一起，如果可以3人一间，浅眠; 想再更深入地运用，继续把高阶上完。要锻炼影响力，帮助自己、身边人看结果。之前看目标会有借口，结果才是答案。要有更多的可能性可以帮助自己、团队100+人完成目标。; 130年尾工作忙。在Emo公司工作，工作要提升业绩，开始在学习带团队。目前没有要Mark有约。; 肉骨茶已经找到新的工人，想要做人、交流可以更好。没有聆听，两夫妻2个都爱答不理。没有安全感，不信任人，要增进人的关系。 |
| 93 | 毕业证 (A,B,C,D) | `text` | `fld8M5DEZF` |  |
| 94 | 高阶一酒店费用  (A,B,C,D) | `select` | `fldV1Ov1oJ` | 2300; 1485; 1304; 1168; 864; 1112; 1000; 0 |
| 95 | 【报到】高阶一几点到 | `select` | `fldbcbfBgV` | 8pm-10pm; 10pm-12am; 12am后; 开课当天早上 |
| 96 | 行业性质 | `text` | `fldeGX47jN` |  |
| 97 | 州 | `select` | `fldDJzKBt7` | Kuala Lumpur; Johor; Kedah; Kelantan; Malacca; Negeri Sembilan; Pahang; Perak; Perlis; Penang; Sabah; Sarawak; Terengganu; Singapore; Selangor |
| 98 | 信念系统当班  (A,B,C,D) | `select` | `fldZ6nnaBQ` | 当班; 不当班; 待确认 |
| 99 | EMO 华语名字 | `text` | `fldpVM1MAg` |  |
| 100 | 高阶二已进课室 (A,B,C,D) | `select` | `fldcZavdOm` | KLCP131; KLCP112; KLCP132; KLCP133; KLCP135; KLCP136; KLCP137; KLCP138; KLCP139; KLCP140 |
| 101 | 客户等级 | `select` | `fldqjJ9DuE` | A+; A; B; C |
| 102 | 信念系统当班期别 (A,B,C,D) | `select` | `fldCsXxw3P` | 当班; 不当班; 待确认 |
| 103 | 基础确认期别 | `select` | `fld4FgLMyN` | KLCP131; KLCP132; KLCP133; KLCP135; KLCP136; KLCP137; KLCP138; KLCP139; KLCP140; KLCP121; KLCP130 |
| 104 | 高阶一摇篮曲(A,B,C,D) | `text` | `fld9Nh7axi` |  |
| 105 | 邮箱 | `text` | `fld7uLB2sP` |  |
| 106 | 基础已进课室人数 | `formula` | `fldGYhSADi` |  |
| 107 | 英文名字 | `text` | `fld7bXtZTW` |  |
| 108 | 基础1call | `select` | `fldsppqgFK` | Yes; No; YES |
| 109 | 地址 | `text` | `fldA6GtRTG` |  |
| 110 | 高阶定金 (A,B,C,D) | `number` | `fld6DwF8on` |  |
| 111 | 报名时间段 | `select` | `fldkVHa7Kp` | 基础开班; 星期五晚上; 星期六早上; 星期六中午; 星期六晚上; 星期日早上; 星期日小休【毕业后】; 星期日【结果1】; 星期日【结果2】; 星期日【结果3-结束】 |
| 112 | 基础C1-3信息 | `select` | `fldyCLPXM7` | 已发出; 已回复 |
| 113 | 电话 | `text` | `fld3pODST1` |  |
| 114 | 伸展音乐（A) | `text` | `fldACg9DB8` |  |
| 115 | 【报到】高阶二几点到 | `select` | `fldRMzPjjv` | 8pm-10pm; 10pm-12am; 12am后; 开课当天早上 |
| 116 | 付费方式 (1) | `select` | `flds6ly10t` | Cash; Cheque; Online Banking; Boldpay; Credit Card; Deposit Transfer; 支付宝; 中国银行; Online Transfer |
| 117 | 年历 | `number` | `fldApjbspo` |  |
| 118 | 紧急联系人（姓名、关系、电话） | `text` | `fldbdsENL8` |  |
| 119 | 伸展（A) | `text` | `fldQxS590Q` |  |
| 120 | Mark有约意愿度 | `select` | `fldq89Umtt` | Yes; No; 16/3- 250mbb; 再确定<br>23/3- 5275amb; 2/3- 250mbb<br>14/1- 5275mbb<br>14/1- 詹达恩500转给张玉莲; 2/3- 250mbb<br>14/1- 5275mbb; 再确定; Zero Healthcare; 28/2- 5275mbb; 放公司名<br>12/3- 5275mbb; 21/3- total27575amb; 放公司名; CP16毕业生<br>不要膳食 |
| 121 | 结果期别 | `select` | `fldUcxqCzB` | JCP; Dcode; KLCP132; KLCP133; KLCP135; KLCP136; KLCP137; KLCP138; KLCP139; KLCP140; 复习; 复读; 复读-高阶二; 毕业生-基础-高阶二 |
| 122 | 高阶二C1-3信息  (A,B,C,D) | `select` | `fldCgmJDvK` | 已回复; 已发出 |
| 123 | 杂费定金付费方式_高二  (A,B,C,D) | `select` | `fldG29QiQ9` | Cash; Cheque; Online Banking; Boldpay; Credit Card; Deposit Transfer; 支付宝; 中国银行 |
| 124 | 高阶转名额 | `select` | `fldHzSx5He` | 高阶已消耗; 高阶已退款 |
| 125 | 定金 | `number` | `fldSqTZCPk` |  |
| 126 | 高阶一确认当班人数 | `formula` | `fldinQISul` |  |
| 127 | 杂费定金付费方式 (A,B,C,D) | `select` | `fldG89UoDv` | Cash; Cheque; Online Banking; Boldpay; Credit Card; Deposit Transfer; 支付宝; 中国银行 |
| 128 | 酒店费用 | `select` | `fldGZYvrcS` | 200; 250; 300; 400; 0; 450; 290; 1200; 240; 350; 2,600 |
| 129 | 高阶二酒店费用  (A,B,C,D) | `select` | `fldKLj5OvZ` | 2300 |
| 130 | 高阶一1call(A,B,C,D) | `select` | `fld3LBWyNZ` | Yes; No; YES |
| 131 | 公司规模 (多少人) | `number` | `fldcyxlNHg` |  |
| 132 | 誓约 （A) | `text` | `fldaqIBk4f` |  |
| 133 | 高阶一确认期别人数 | `formula` | `fldxCrwTN6` |  |
| 134 | 父记录 | `link` | `fldCs2Rbnm` |  |
| 135 | 年龄 | `number` | `fld4Ozu3jN` |  |
| 136 | 高阶一C1-3信息  (A,B,C,D) | `select` | `fldbcgHatV` | 已发出; 已回复; Yes; Emo是男朋友。想要做团队，带团队的leader commission比较高，要进步沟通能力，增进人际关系。想要进步，想要让公司看到学员、自己的Team。曾经有5-6个人，现在完全没有团队了。红黑游戏看到自己之前都没有团队意识，觉得要教人累，所以只顾自己，对团队不负责任，把团队丢给leader负责，容易放弃，抗拒近距离跟人相处，团队离开了就负面，双输。; 新加坡工厂上班，回来大马10年<br>1. 多认识人，扩充自己的视野，可以跟多人讲话，平常只有姐姐，但姐姐强势，选择性讲话<br>2. 跟人的沟通可以更好，紧张听不到别人讲话，会猜<br>3. 要赚到50k花红来装修屋子; 寻找更多的可能性，赚钱、跟孩子的关系。副业Bank Agency，有commission。5个孩子，最大17岁，最小7岁。大女儿17岁融洽，但有小姐的情绪。大儿子沟通有阻碍，13岁，看弟弟们都不顺眼，觉得妈妈偏心。大儿子跟二儿子11岁的关系非常糟糕。大儿子跟同学、师长关系好。更小还有2个弟弟，粘妈妈。大女儿、大儿子、二儿子看着父母婚姻破碎，小的2个脱离了。前夫会跟大女儿吃饭，小的2个弟弟很喜欢找爸爸。; 想要让自己更好。懂自己做的选择，做选择之前会想做了过后的甜头、代价。事业想要突破团队，带着10多个人，要突破自己的个人业绩。要突破父母的关系，不在同个城市，很少回去，基本上新年才回，之前都不联系父母，现在可以开始主动联系，但没设什么时候要做这件事。; 跟Kelly借钱。要事业进步，创业不懂怎么经营，只会自己做，要学习经营公司，让公司5年、10年目标达标，创业2年多，现在每月营业额17-20k左右，想要增加人手，但担心接单不够，要给薪水，要扩大来做。跟弟弟工作上的沟通，之前都没有结果、自己发脾气，现在每天都很积极地工作上的事情。; 想要学习，找方法，要在事业、家庭创造共赢。之前以为自己没得选择，被形势所逼，选择工作而忽略家庭，之前完全没有共赢的心态。红黑也是要赢，一直选红票，最多两败俱伤，没有要共赢。; 把以前的热情找回来，对工作、家庭。没有检测工作进度，处理事情麻木，有... |
| 137 | 高阶报读日期  (A,B,C,D) | `select` | `fldvKhoqzv` | 已发出; 已回复; 3-May-2026; 14/3; 5/3/26 |
| 138 | 学号 | `number` | `fldcAKHYTF` |  |
| 139 | 补款 | `number` | `fldAQqQ8io` |  |
| 140 | 基础健康面谈 | `select` | `flduv1pk53` | 已面谈; 面谈不通过; yes; Yes |
| 141 | IC No | `text` | `fldPi9m6fA` |  |

### 🖊️-136-高阶一-【守则后离开】Final Masterlist.

Category: `Masterlist / final list`  
Fields: `141`  
Views: `1`

| # | Field | Type | Field ID | Options |
|---:|---|---|---|---|
| 1 | 电话 | `text` | `fld3pODST1` |  |
| 2 | 团队干部 (A,B,C,D) | `text` | `flde1ZMLci` |  |
| 3 | 客户等级 | `select` | `fldqjJ9DuE` | A+; A; B; C |
| 4 | Mark有约意愿度 | `select` | `fldq89Umtt` | Yes; No |
| 5 | 基础2Call | `select` | `fld3PR7LZl` | Yes; No |
| 6 | 高阶报读日期  (A,B,C,D) | `text` | `fldvKhoqzv` |  |
| 7 | 高阶二2Call  (A,B,C,D) | `lookup` | `fldpTEoMrj` |  |
| 8 | 基础离开 | `select` | `fldUMPJqqk` | 基础守则前; 基础守则后第1天; 基础守则后第2天; 基础守则后第3天; 基础守则后第4天; 基础守则后第5天;  ; 守则后第二天; 守则后第三天 |
| 9 | 高阶转名额 | `select` | `fldHzSx5He` | 高阶已消耗; 高阶已退款 |
| 10 | 高阶二教练 | `text` | `fldWmvMlWV` |  |
| 11 | 高阶一来的目的、急需解决的问题  (A,B,C,D) | `text` | `fldBTFVLKs` |  |
| 12 | 信念系统日期  (A,B,C,D) | `text` | `fld48s0YpN` |  |
| 13 | 杂费定金付费方式 (A,B,C,D) | `select` | `fldG89UoDv` | Cash; Cheque; Online Banking; Boldpay; Credit Card; Deposit Transfer; 支付宝; 中国银行 |
| 14 | 信念系统当班期别 (A,B,C,D) | `text` | `fldCsXxw3P` |  |
| 15 | 基础1 Call Status | `text` | `fldtKneeQO` |  |
| 16 | 孩子 | `number` | `fldXA3u8NF` |  |
| 17 | 学员/教练 | `select` | `fldTqu9a5z` | 学员; 教练 |
| 18 | 高阶二1call  (A,B,C,D) | `select` | `fldLFSilk8` | Yes; No |
| 19 | 杂费定金  (A,B,C,D) | `number` | `fld5YHqAUa` |  |
| 20 | 高阶二酒店费用  (A,B,C,D) | `select` | `fldKLj5OvZ` | 2300 |
| 21 | 个人海星位置 | `number` | `fldw1sPNp8` |  |
| 22 | EMO 英文名字 | `text` | `fldFDwxkst` |  |
| 23 | 高阶补款 (A,B,C,D) | `number` | `flddyIpxbM` |  |
| 24 | 誓约 （A) | `text` | `fldaqIBk4f` |  |
| 25 | 基础已进课室+英文名字 | `formula` | `fldEV3sB63` |  |
| 26 | 高阶总费用 (A,B,C,D) | `formula` | `fldCoHK6zh` |  |
| 27 | 高阶二确认期别 (A,B,C,D) | `select` | `fldY4T4BzB` | KLCP135 |
| 28 | 公司名称 | `text` | `fldPt86QXy` |  |
| 29 | 杂费定金补款  (A,B,C,D) | `number` | `fldJU2FkyQ` |  |
| 30 | 高阶二1 Call Status (A,B,C,D) | `text` | `fldrkv27ER` |  |
| 31 | 结果期别 | `select` | `fldUcxqCzB` | JCP; Dcode; KLCP132; KLCP133; KLCP135; KLCP136; KLCP137; KLCP138; KLCP139; KLCP140; 复习; 复读; 复读-高阶二; 毕业生-基础-高阶二 |
| 32 | 备注 | `text` | `fldxiJJ1fR` |  |
| 33 | 邮箱 | `text` | `fld7uLB2sP` |  |
| 34 | 高阶一确认期别 (A,B,C,D) | `select` | `fld9EHqoBh` | KLCP135; KLCP136 |
| 35 | 高阶一1call(A,B,C,D) | `select` | `fld3LBWyNZ` | Yes; No |
| 36 | EMO 联络号码 | `text` | `fld0VFSV0R` |  |
| 37 | 高阶一离开 (A,B,C,D) | `select` | `fldhktTdmb` | 高阶一守则前; 高阶一守则后第1天; 高阶一守则后第2天; 高阶一守则后第3天; 高阶一守则后第4天; 高阶一守则后第5天; 高阶四前; 高阶四后 |
| 38 | 高阶一2CalL (A,B,C,D) | `select` | `flde5hBvrW` | 确认; 待确认; 不当班; 健康待审核; 健康不通过; 未接电话; Yes; 高二待定; 住宿钱诗莹，陈培嬿，周美怡3人要一起，如果可以3人一间，浅眠; 顾孩子、老公 ; 书写有压力; 付款会一半Cash，一半transfer<br>住宿钱诗莹，陈培嬿，周美怡3人要一起，如果可以3人一间，浅眠 |
| 39 | 高阶二已进课室 (A,B,C,D) | `select` | `fldcZavdOm` | KLCP131; KLCP112; KLCP132; KLCP133; KLCP135; KLCP136; KLCP137; KLCP138; KLCP139; KLCP140 |
| 40 | 性别 | `select` | `fldHbPLVek` | 男; 女 |
| 41 | 8%SST | `formula` | `fldKqsFNLd` |  |
| 42 | 年历 | `number` | `fldApjbspo` |  |
| 43 | 基础已进课室（KLCP) | `select` | `fldx22KkI9` | KLCP131; KLCP132; KLCP133; KLCP135; KLCP136; KLCP137; KLCP138; KLCP139; KLCP140 |
| 44 | 高阶定金 (A,B,C,D) | `number` | `fld6DwF8on` |  |
| 45 | 全报 | `select` | `fld37lkP7m` | 基础全款; 连报; 连报+全款; 连报+M; 连报+M+全款; 高阶; 高阶+全款; 高阶+M; 高阶+M+全款; 复读基础; 复读高阶; 复读-高阶一+全款; 复读高阶一+M; 复读-高阶一+M+全款; 复读-高阶二; 复读-高阶二+全款; 复读高阶二+M; 复读-高阶二+M+全款; 毕业生-复读基础; 毕业生-复读基础+复读高阶一; 毕业生-复读基础+复读高阶二; 复读基础+高阶 |
| 46 | 高阶二已进课室人数 | `formula` | `fldRnyJp4h` |  |
| 47 | 【报到】高阶一几点到 | `select` | `fldbcbfBgV` | 8pm-10pm; 10pm-12am; 12am后; 开课当天早上 |
| 48 | 高阶一C1-4信息  (A,B,C,D) | `select` | `fldCBOwgh2` | 已发出; 已回复 |
| 49 | 四摇篮曲 (A,B,C,D) | `text` | `fld5Xz6qxB` |  |
| 50 | 高阶一问卷(A,B,C,D) | `select` | `fldUPUrzpQ` | Yes; No |
| 51 | 高阶二膳食费用  (A,B,C,D) | `select` | `fld7BTqcdC` | 2300 |
| 52 | 高阶付费方式 (A,B,C,D) | `select` | `fldTsnAeEi` | Cash; Cheque; Online Banking; Boldpay; Credit Card; Deposit Transfer; 支付宝; 中国银行 |
| 53 | 基础已进课室人数 | `formula` | `fldGYhSADi` |  |
| 54 | 高阶一教练 | `text` | `fldjVaU8zJ` |  |
| 55 | 伸展音乐（A) | `text` | `fldACg9DB8` |  |
| 56 | 基础报读日期 | `datetime` | `fldXqX3bDG` |  |
| 57 | 高阶一摇篮曲(A,B,C,D) | `text` | `fld9Nh7axi` |  |
| 58 | 公司规模 (多少人) | `number` | `fldcyxlNHg` |  |
| 59 | 学号 | `number` | `fldcAKHYTF` |  |
| 60 | 高阶一确认当班 (A,B,C,D) | `select` | `fldb4fMdP3` | 确认; 待确认; 不当班; 未接电话; 健康待审核; 健康待不通过; 未接; 高阶一确认当班 (A,B,C,D) |
| 61 | 定金 | `number` | `fldSqTZCPk` |  |
| 62 | EMO 华语名字 | `text` | `fldpVM1MAg` |  |
| 63 | 婚姻 | `select` | `fldg5w01QF` | 单身; 已婚; 分居; 离婚; 丧偶; 0125351616; 医助 |
| 64 | 基础2Call Status<br>来的目的、急需解决的问题 | `text` | `fldtaHRKkE` |  |
| 65 | 基础C1-3信息 | `select` | `fldyCLPXM7` | 已发出; 已回复 |
| 66 | 高阶三已进课室人数 | `formula` | `fldG1VmmI3` |  |
| 67 | 高阶二C1-4信息  (A,B,C,D) | `text` | `fld6bJgztP` |  |
| 68 | 基础转名额 | `select` | `fldJ4Ok5wY` | 基础已消耗; 基础已退款 |
| 69 | 地址 | `text` | `fldA6GtRTG` |  |
| 70 | 基础 - 全款/订金 | `formula` | `fldMsWJGBD` |  |
| 71 | SO/Transfer No. | `number` | `fldVfTh8yC` |  |
| 72 | 高阶学费  (A,B,C,D) | `select` | `fld68LoHe7` | 5000; 12500; 15800; 16300; 18900; 6800; 14600; 10800; 13900; 1080 |
| 73 | 基础确认当班 | `select` | `fld8MIqSZ5` | 确认; 待确认; 不当班; 健康待审核; 健康不通过; 未接电话 |
| 74 | 高阶学费SST  (A,B,C,D) | `formula` | `fldzpuXMP8` |  |
| 75 | 酒店费用 | `select` | `fldGZYvrcS` | 200; 250; 300; 400; 0; 450; 290; 1200; 240; 350 |
| 76 | 基础1call | `select` | `fldsppqgFK` | Yes; No; YES |
| 77 | 高阶二后离开原因 | `text` | `fldghrGMDe` |  |
| 78 | 父记录 | `link` | `fldCs2Rbnm` |  |
| 79 | 高阶二后离开(A,B,C,D) | `select` | `fldYSq4dt1` | 高级二守则前; 高阶二守则后; 高阶三守则前; 高阶三守则后; 高阶四守则前; 高阶四守则后; 守则后第1天; 守则后第2天; 守则后第3天; 守则后第4天; 守则后第5天 |
| 80 | 英文名字 | `text` | `fld7bXtZTW` |  |
| 81 | 高阶一已进课室 | `select` | `fldQEOsk5K` | KLCP131; KLCP132; KLCP133; KLCP135; KLCP136; KLCP137; KLCP138; KLCP139; KLCP140 |
| 82 | 余款 | `number` | `fldVakFzdK` |  |
| 83 | 毕业证 (A,B,C,D) | `text` | `fld8M5DEZF` |  |
| 84 | 序号—— | `number` | `fldvAP9Tsv` |  |
| 85 | 高阶一酒店费用  (A,B,C,D) | `select` | `fldV1Ov1oJ` | 2300; 1485 |
| 86 | 高阶二确认当班 (A,B,C,D) | `select` | `fldVLGX5Vu` | 确认; 不当班; 待确认; 未接 |
| 87 | 高阶SO/Transfer No. (A,B,C,D) | `number` | `fldoGWsYc2` |  |
| 88 | 高阶四已进课室 | `select` | `fldamK4R39` | KLCP131; KLCP132; KLCP133; KLCP135; KLCP136; KLCP137; KLCP138; KLCP139; KLCP140 |
| 89 | 信念系统当班  (A,B,C,D) | `select` | `fldZ6nnaBQ` | 当班; 不当班; 待确认 |
| 90 | 伸展（A) | `text` | `fldQxS590Q` |  |
| 91 | 高阶二卓越宣言表  (A,B,C,D) | `text` | `fldyY1whEh` |  |
| 92 | 基础确认期别 | `select` | `fld4FgLMyN` | KLCP131; KLCP132; KLCP133; KLCP135; KLCP136; KLCP137; KLCP138; KLCP139; KLCP140 |
| 93 | 高阶四已进课室人数 | `formula` | `fldrIarGll` |  |
| 94 | 杂费定金付费方式_高二  (A,B,C,D) | `select` | `fldG29QiQ9` | Cash; Cheque; Online Banking; Boldpay; Credit Card; Deposit Transfer; 支付宝; 中国银行 |
| 95 | 报名时间段 | `select` | `fldkVHa7Kp` | 基础开班; 星期五晚上; 星期六早上; 星期六中午; 星期六晚上; 星期日早上; 星期日小休【毕业后】; 星期日【结果1】; 星期日【结果2】; 星期日【结果3-结束】 |
| 96 | 高阶一确认当班人数 | `formula` | `fldinQISul` |  |
| 97 | 膳食费用 | `select` | `fldJyjyJaw` | 375; 2300; 2675; 0; 1200 |
| 98 | 高阶二总费用  (A,B,C,D) | `formula` | `fldqp668Em` |  |
| 99 | 年龄 | `number` | `fld4Ozu3jN` |  |
| 100 | 基础健康面谈 | `select` | `flduv1pk53` | 已面谈; 面谈不通过; yes; Yes |
| 101 | 基础健康 | `text` | `fldpbydaeC` |  |
| 102 | 紧急联系人（姓名、关系、电话） | `text` | `fldbdsENL8` |  |
| 103 | 高阶一C1-3信息  (A,B,C,D) | `select` | `fldbcgHatV` | 已发出; 已回复; Yes |
| 104 | 高阶付费方式_1 | `select` | `fld9pibfS8` | Cash; Cheque; Online Banking; Boldpay; Credit Card; Deposit Transfer; 支付宝; 中国银行 |
| 105 | 高阶健康面谈 | `select` | `fldUyUboyG` | 已面谈; 面谈不通过 |
| 106 | 高阶 - 全款/订金 | `formula` | `fldsWv81U0` |  |
| 107 | 邮政编号 | `number` | `fldoYxtpJe` |  |
| 108 | 高阶一确认期别人数 | `formula` | `fldxCrwTN6` |  |
| 109 | 杂费定金余款 (A,B,C,D) | `number` | `fldr8zEiwc` |  |
| 110 | 备注-转海星/消耗 | `text` | `fldmYPrj9l` |  |
| 111 | 市区 | `text` | `fld1DvHlU7` |  |
| 112 | 付费方式 (1) | `select` | `flds6ly10t` | Cash; Cheque; Online Banking; Boldpay; Credit Card; Deposit Transfer; 支付宝; 中国银行; Online Transfer |
| 113 | 生日日期 | `datetime` | `fldqty2zuN` |  |
| 114 | 2 Call Status /学员的位置  (A,B,C,D) | `lookup` | `fldjcroYaI` |  |
| 115 | 高阶健康 | `text` | `fldqC8HLiJ` |  |
| 116 | 职位 | `text` | `fldiMuQal2` |  |
| 117 | 膳食 | `select` | `fldbiUCP8C` | 素食; 荤食; No |
| 118 | 基础阶段教练 | `text` | `fldHTH3wZ9` |  |
| 119 | 高阶-Invoice Name | `text` | `fldcSFwUNA` |  |
| 120 | 补款 | `number` | `fldAQqQ8io` |  |
| 121 | 总费用 | `formula` | `fldH64Rore` |  |
| 122 | 高阶余款  (A,B,C,D) | `number` | `fld5gM9QQd` |  |
| 123 | 课室内名单 | `text` | `fldDnN0ySS` |  |
| 124 | 高阶一1 Call Status (A,B,C,D) | `text` | `fldXcdUr7c` |  |
| 125 | 基础问卷 | `select` | `fld2eXxUcJ` | Yes; No; YES |
| 126 | 高阶五已经课室 | `select` | `fldOL8qfBY` | MP18; MP19; MP20 |
| 127 | 高阶三已进课室 | `select` | `fldACn4pwe` | KLCP131; KLCP112; KLCP131; KLCP132; KLCP133; KLCP135; KLCP136; KLCP137; KLCP138; KLCP139; KLCP140 |
| 128 | 高阶一已进课室人数 | `formula` | `fldPcaGbzz` |  |
| 129 | 基础学费 | `select` | `fldOGdbu8I` | 5000; 12500; 15800; 16300; 18900; 6800; 5,000; 13,300; 500; 1,580; $5000 |
| 130 | 付费方式 | `select` | `fldktTMWFK` | Cash; Cheque; Online Banking; Boldpay; Credit Card; Deposit Transfer; 支付宝; 中国银行; Online Transfer |
| 131 | 高阶二C1-3信息  (A,B,C,D) | `select` | `fldCgmJDvK` | 已回复; 已发出 |
| 132 | IC No | `text` | `fldPi9m6fA` |  |
| 133 | 基础酒店人数 | `select` | `fldxAC7Mji` | 3; 4; 5; 6; Landmark |
| 134 | 华语名字 | `text` | `fldIqZVRsw` |  |
| 135 | 【报到】高阶二几点到 | `select` | `fldRMzPjjv` | 8pm-10pm; 10pm-12am; 12am后; 开课当天早上 |
| 136 | 行业性质 | `text` | `fldeGX47jN` |  |
| 137 | 州 | `select` | `fldDJzKBt7` | Kuala Lumpur; Johor; Kedah; Kelantan; Malacca; Negeri Sembilan; Pahang; Perak; Perlis; Penang; Sabah; Sarawak; Terengganu; Singapore; Selangor |
| 138 | 【基础】Tax invoice name | `text` | `fldNQzMd0q` |  |
| 139 | 基础C1-4信息/Account Check | `select` | `fld7rF7lrx` | 已发出; 已回复; Nana 已确认 |
| 140 | EMO期别 | `select` | `fldtEM7csn` | KLCP131; KLCP132; KLCP133; KLCP135; KLCP136; KLCP137; KLCP138; KLCP139; KLCP140; KLCP108; KLCP115; KLCP35; KLCP101; KLCP96; KLCP26; KLCP91; KLCP65; KLCP69; KLCP40; KLCP129; KLCP109; KLCP107; KLCP123; KLCP125; KLCP105; KLCP 102; KLCP127; KLCP87; KLCP116; KLCP59 |
| 141 | 年收入 | `number` | `fldBv7HKrH` |  |

### ✅A0-136_高一-10天宣告

Category: `DOE / declaration`  
Fields: `13`  
Views: `1`

| # | Field | Type | Field ID | Options |
|---:|---|---|---|---|
| 1 | 什么原因是小目标？： | `text` | `fldo90Ss9e` |  |
| 2 | 事业性质 | `text` | `fldfVtshze` |  |
| 3 | 事业给与什么价值： | `text` | `fldvG45Opx` |  |
| 4 | 中心Call时间 （星期几 + 几点am/pm) | `text` | `flda3F9UgJ` |  |
| 5 | 事业定义（赢的标准） | `text` | `fld1KcNUYX` |  |
| 6 | 什么原因是这个对象？： | `text` | `fldwsWro9X` |  |
| 7 | 教练 | `select` | `fldmJxUiYu` | 健成; 君霖; 重理; 勇鉎; 芷莹; 显元; 川喜; 恺翔; 凯哲; 艳琪 |
| 8 | 学员名字（还没有链接） | `text` | `fldiucf2f0` |  |
| 9 | 家庭对象1： | `text` | `fldyf6O7pI` |  |
| 10 | SourceID | `text` | `flds59wpZ0` |  |
| 11 | 学员 | `select` | `fldgK3RKpp` | 林咏仪; 徐思佳; 陈嘉乐; 许玮显; 曹雪莉; 黄慧清; 张玉莲; 陳鏟戎; 洪以轩; 曾俊铵; 周美怡; 钱诗莹; 张玉萍; 克李斯; 何志鸿; 刘彩婷; 梁敬雄; 余明康; 刘运将; 李绍综; 林珮颐; 倪俊凱; 潘俊铨; 徐诗佳; 陈培嬿; 陈祈佑; 黄招兴; 枼淑红; 张雪莉; 余书忠; 陈旺隆; 郭明俊 |
| 12 | 指引负责人_ | `text` | `fldyUfAk5B` |  |
| 13 | 事业总宣告 | `text` | `fld1n796iD` |  |

### ✅A0-136高一-10天宣告

Category: `DOE / declaration`  
Fields: `15`  
Views: `1`

| # | Field | Type | Field ID | Options |
|---:|---|---|---|---|
| 1 | 学员名字（还没有链接） | `text` | `fldiucf2f0` |  |
| 2 | 家庭对象1： | `text` | `fldyf6O7pI` |  |
| 3 | 总教验收 | `checkbox` | `fldyQ6SFpY` |  |
| 4 | 教练 | `select` | `fldmJxUiYu` |  |
| 5 | 事业定义（赢的标准） | `text` | `fld1KcNUYX` |  |
| 6 | 总教备注 | `text` | `fld7Yuqcn6` |  |
| 7 | 华语名字 | `select` | `fldgK3RKpp` |  |
| 8 | 事业总宣告 | `number` | `fld1n796iD` |  |
| 9 | 事业性质 | `text` | `fldfVtshze` |  |
| 10 | 什么原因是小目标？： | `text` | `fldo90Ss9e` |  |
| 11 | 什么原因是这个对象？： | `text` | `fldwsWro9X` |  |
| 12 | 中心Call时间 （星期几 + 几点am/pm) | `text` | `flda3F9UgJ` |  |
| 13 | 指引负责人_ | `text` | `fldyUfAk5B` |  |
| 14 | SourceID | `text` | `fldef2ZBHW` |  |
| 15 | 事业给与什么价值： | `text` | `fldvG45Opx` |  |

### 高阶二2Call

Category: `Other`  
Fields: `141`  
Views: `1`

| # | Field | Type | Field ID | Options |
|---:|---|---|---|---|
| 1 | 名字 | `text` | `fldrUwjEJk` |  |
| 2 | 字段 6 | `text` | `fldAwV8uez` |  |
| 3 | 字段 45 | `text` | `fldqVZP7yR` |  |
| 4 | 字段 40 | `text` | `fldMLr2QWk` |  |
| 5 | 字段 113 | `text` | `fldcuE9B1Q` |  |
| 6 | 字段 72 | `text` | `fldY2KxePg` |  |
| 7 | 字段 103 | `text` | `fldDPRG5r0` |  |
| 8 | 字段 61 | `text` | `fld3XJXPKY` |  |
| 9 | 字段 99 | `text` | `fldmIp3qtU` |  |
| 10 | 字段 7 | `number` | `fldojgSSNE` |  |
| 11 | 状况 | `select` | `fldOkgkJ73` | Yes; 未上线; Yes,事业有要留意; Yes,这个需要再了解，虽然是帮老婆做的; 状况; Yes<br>整理家庭; Yes,<br>工作坊-在探讨; Yes，事业有要留意; Yes,<br>工作坊-在探讨<br>事业有要留意; Yes 事业有要留意，有可能有可能焦点在内，需要当面问; No,事业&家庭整理在确定不明确 |
| 12 | 电话号码 | `text` | `fldm7BVTHb` |  |
| 13 | 字段 23 | `text` | `fldzmD03C7` |  |
| 14 | 字段 51 | `text` | `fldGCVV480` |  |
| 15 | 字段 32 | `text` | `fldpdwTB6v` |  |
| 16 | 字段 56 | `text` | `fldiEE7iYZ` |  |
| 17 | 字段 22 | `text` | `fld1b4HFJB` |  |
| 18 | 字段 85 | `text` | `fldDJkgH9e` |  |
| 19 | 字段 70 | `text` | `fldgEuNJNn` |  |
| 20 | 字段 68 | `text` | `fldOMIpTi3` |  |
| 21 | 高阶二确认当班 | `text` | `fldbnUE1b1` |  |
| 22 | 字段 122 | `text` | `fldZxSWzgw` |  |
| 23 | 字段 13 | `text` | `flddvOuJ9F` |  |
| 24 | 字段 127 | `text` | `fldY2YEoVj` |  |
| 25 | 字段 44 | `text` | `fldd1XSmd7` |  |
| 26 | 字段 9 | `text` | `fldJRiO6ur` |  |
| 27 | 字段 73 | `text` | `fldIYK1Prk` |  |
| 28 | 字段 67 | `text` | `fldIQXNaeS` |  |
| 29 | 字段 27 | `text` | `fldRkzfUEl` |  |
| 30 | 字段 64 | `text` | `fldC1ydkUS` |  |
| 31 | 字段 117 | `text` | `fldQYe7PFy` |  |
| 32 | 字段 63 | `text` | `fldN4QAfvW` |  |
| 33 | 字段 119 | `text` | `fldg4XeIqy` |  |
| 34 | 字段 49 | `text` | `fldXf1ra3f` |  |
| 35 | 字段 28 | `text` | `fldg9Xut1e` |  |
| 36 | 字段 35 | `text` | `fldRwKI6Oj` |  |
| 37 | 字段 125 | `text` | `fldYpn3OmP` |  |
| 38 | 字段 3 | `text` | `fldkOhUMoq` |  |
| 39 | 字段 55 | `text` | `fldlqsFnUa` |  |
| 40 | 3 Massage | `text` | `fldrjOn1ge` |  |
| 41 | 字段 46 | `text` | `fld0DDtGJK` |  |
| 42 | 字段 11 | `number` | `fld4tF80Nx` |  |
| 43 | 字段 36 | `text` | `fldKZtDzFV` |  |
| 44 | 字段 86 | `text` | `fldXCduBpU` |  |
| 45 | 字段 98 | `text` | `fld2ilTcDV` |  |
| 46 | 字段 20 | `text` | `fldFYjhKxJ` |  |
| 47 | 字段 77 | `text` | `fldYArigEM` |  |
| 48 | 字段 53 | `text` | `fldXtdueki` |  |
| 49 | 字段 123 | `text` | `fldGJ76gVm` |  |
| 50 | 字段 2 | `number` | `fldjlIWqiv` |  |
| 51 | 字段 90 | `text` | `fldbn18dUw` |  |
| 52 | 字段 79 | `text` | `fldPMG5C4r` |  |
| 53 | 字段 126 | `text` | `fldqGaFAKm` |  |
| 54 | 字段 39 | `text` | `fldwj4FanC` |  |
| 55 | 字段 130 | `text` | `fldMaWuq1J` |  |
| 56 | 字段 71 | `text` | `fldzx9gWLo` |  |
| 57 | 字段 108 | `text` | `fldIQO9stD` |  |
| 58 | 字段 75 | `text` | `fldN1r40J1` |  |
| 59 | 字段 62 | `text` | `fldJhWUeOu` |  |
| 60 | 字段 24 | `text` | `fldUD5A9je` |  |
| 61 | 字段 95 | `text` | `fldZfPZxi7` |  |
| 62 | 字段 29 | `text` | `fldtEhALTz` |  |
| 63 | 字段 120 | `text` | `fldXLPGccG` |  |
| 64 | 字段 58 | `text` | `fld9g5cw70` |  |
| 65 | 字段 91 | `text` | `fldnaf0oZB` |  |
| 66 | 字段 17 | `text` | `fldOtjK6xv` |  |
| 67 | 字段 129 | `text` | `fldGtuIvuC` |  |
| 68 | 字段 102 | `text` | `fldetfvwch` |  |
| 69 | 字段 94 | `text` | `fldE1mN11e` |  |
| 70 | 字段 1 | `text` | `fld2xdEMVH` |  |
| 71 | 字段 65 | `text` | `fldACZtQvk` |  |
| 72 | 字段 50 | `text` | `fldMldDeXT` |  |
| 73 | 字段 10 | `number` | `flduTo7Eud` |  |
| 74 | 字段 107 | `text` | `fldtUBYSlz` |  |
| 75 | 字段 43 | `text` | `fld0toNmCs` |  |
| 76 | 字段 15 | `text` | `fld3YFOf96` |  |
| 77 | 字段 124 | `text` | `fldEuAesDZ` |  |
| 78 | 字段 115 | `text` | `fld0CDqKmq` |  |
| 79 | 字段 80 | `text` | `fldeAaIFvE` |  |
| 80 | 字段 66 | `text` | `fldkWfsGkN` |  |
| 81 | 高阶二确认期别 | `text` | `fldscwqm9n` |  |
| 82 | 字段 121 | `text` | `fld1gEGDPB` |  |
| 83 | 字段 54 | `text` | `fldQAGXZ2A` |  |
| 84 | 字段 104 | `text` | `fldk96EEbP` |  |
| 85 | DOE | `text` | `fldcsjQpEP` |  |
| 86 | 字段 87 | `text` | `fldJc4zTQy` |  |
| 87 | 家庭状态 | `text` | `fldb7Ehu6r` |  |
| 88 | 字段 25 | `text` | `fldaTdPuzi` |  |
| 89 | 字段 96 | `text` | `fldbPVxzDU` |  |
| 90 | 字段 30 | `text` | `fldJhFq1Pi` |  |
| 91 | 字段 59 | `text` | `fldfPKiwVK` |  |
| 92 | 字段 111 | `text` | `fldxBTzIY5` |  |
| 93 | 字段 41 | `text` | `fldDV2gkxn` |  |
| 94 | 字段 42 | `text` | `fldNaHcHVB` |  |
| 95 | 字段 8 | `number` | `fldAv1BmrT` |  |
| 96 | 字段 37 | `text` | `fldDy1Q4Sy` |  |
| 97 | 字段 106 | `text` | `fld2gC79iE` |  |
| 98 | 字段 38 | `text` | `fldwTXKEFE` |  |
| 99 | 字段 47 | `text` | `fldKLd1GrG` |  |
| 100 | 事业状态 | `text` | `fldq6g0TGl` |  |
| 101 | 字段 19 | `text` | `fldwrLtdKP` |  |
| 102 | 字段 93 | `text` | `fld1YJvM4W` |  |
| 103 | 字段 26 | `text` | `fldF2qC9u5` |  |
| 104 | 字段 101 | `text` | `fldbKDqIIJ` |  |
| 105 | 字段 118 | `text` | `fldFGcbCZh` |  |
| 106 | 字段 105 | `text` | `fldjaFjzO1` |  |
| 107 | 字段 74 | `text` | `fldaP3CB8Q` |  |
| 108 | 字段 14 | `text` | `fld6a57JxI` |  |
| 109 | 字段 5 | `text` | `fldnwfWcGV` |  |
| 110 | 字段 18 | `text` | `fld0J60xrc` |  |
| 111 | 字段 100 | `text` | `fldA5vAxXK` |  |
| 112 | 字段 112 | `text` | `flddqSFGK5` |  |
| 113 | 字段 116 | `text` | `fldNrFzErr` |  |
| 114 | 字段 69 | `text` | `fldY1fuWGJ` |  |
| 115 | 字段 76 | `text` | `fldgbFmVEY` |  |
| 116 | 字段 110 | `text` | `fldVtsx4FV` |  |
| 117 | 字段 92 | `text` | `fldu5SoSmo` |  |
| 118 | 字段 31 | `text` | `fldbHVhmFN` |  |
| 119 | 字段 34 | `text` | `fldtXjKXK3` |  |
| 120 | 字段 81 | `text` | `fld2gsyuD9` |  |
| 121 | 字段 128 | `text` | `fldVMadr7W` |  |
| 122 | 高阶二1call  (A,B,C,D) | `text` | `fld0lwjNsK` |  |
| 123 | 字段 4 | `text` | `fldz186yl1` |  |
| 124 | 字段 89 | `text` | `fld1wZpq2x` |  |
| 125 | 字段 48 | `text` | `fldWH0dVJ3` |  |
| 126 | Emo 名字 | `text` | `fldP72sWYc` |  |
| 127 | 字段 33 | `text` | `fldvcwsOXZ` |  |
| 128 | 字段 21 | `text` | `fldla6585d` |  |
| 129 | 字段 97 | `text` | `fldFbEKWBe` |  |
| 130 | 字段 57 | `text` | `fldTeX8M5j` |  |
| 131 | 字段 88 | `text` | `fld38DWxuu` |  |
| 132 | 字段 82 | `text` | `fldUhr4HSb` |  |
| 133 | 字段 16 | `text` | `fldt6wKWHg` |  |
| 134 | 字段 109 | `text` | `fldM8JgJwG` |  |
| 135 | 字段 60 | `text` | `fld6LoXQgD` |  |
| 136 | 字段 12 | `number` | `fldHvpew6L` |  |
| 137 | 字段 83 | `text` | `fldEt9m3qf` |  |
| 138 | 字段 52 | `text` | `fldlbUtJF0` |  |
| 139 | 字段 78 | `text` | `fldBUBR4NA` |  |
| 140 | 字段 114 | `text` | `fld9KyBLc0` |  |
| 141 | 字段 84 | `text` | `fld6HCEQUK` |  |

### 【高二】事业成就表

Category: `DOE / declaration`  
Fields: `28`  
Views: `3`

| # | Field | Type | Field ID | Options |
|---:|---|---|---|---|
| 1 | 年历 | `lookup` | `fldgeB3SSN` |  |
| 2 | 职位 | `lookup` | `fldxkba37E` |  |
| 3 | 行业性质 | `lookup` | `fld2go2S4v` |  |
| 4 | 英文名字 | `lookup` | `fldhNK8SgU` |  |
| 5 | 【事业2】宣告 | `lookup` | `fldtcnQfCb` |  |
| 6 | 孩子 | `number` | `fldg8iXxNx` |  |
| 7 | 【事业1】-定义 | `lookup` | `fldX1R0f4z` |  |
| 8 | 基础已进课室+英文名字 | `formula` | `fldmdfUqbL` |  |
| 9 | 序号—— | `lookup` | `fldZGaU8Pa` |  |
| 10 | 基础阶段教练 | `text` | `fldZAJ9x2X` |  |
| 11 | Emo期别 | `lookup` | `fld4xQmqpB` |  |
| 12 | 高阶二进课室 | `lookup` | `fldzcH3725` |  |
| 13 | Lark【新收入】 | `lookup` | `fldYEiXuLw` |  |
| 14 | 公司名称 | `lookup` | `fldiFyYPfz` |  |
| 15 | 【家庭1对象】 | `lookup` | `fldUpR8VCp` |  |
| 16 | 高阶二教练 | `text` | `fldryodCic` |  |
| 17 | 年收入 | `lookup` | `fld5ZlnWjl` |  |
| 18 | 结果期别 | `lookup` | `fldhrO7xdH` |  |
| 19 | 公司规模 (多少人) | `lookup` | `fld0cCb63c` |  |
| 20 | 性别 | `lookup` | `flddEU479y` |  |
| 21 | 年龄 | `lookup` | `fldRTZktBK` |  |
| 22 | 华语名字 | `text` | `fldqsHDMwJ` |  |
| 23 | Emo华语名字 | `lookup` | `fld9BWMEEf` |  |
| 24 | 婚姻 | `lookup` | `flduv8AGdc` |  |
| 25 | 学号 | `lookup` | `fldtuZTOBX` |  |
| 26 | 【事业1】宣告 | `lookup` | `fldyBUkH5P` |  |
| 27 | 【事业2】定义 | `lookup` | `fld08GEMWQ` |  |
| 28 | 高阶一教练 | `lookup` | `fldjJ5VQVq` |  |

### ✅高二工作坊DOE宣告（开班前）

Category: `DOE / declaration`  
Fields: `29`  
Views: `1`

| # | Field | Type | Field ID | Options |
|---:|---|---|---|---|
| 1 | 事业3 百分比 | `number` | `fldBZxej0o` |  |
| 2 | 事业2 百分比 | `number` | `fldzpoHWk4` |  |
| 3 | 电子邮件 Email Address | `text` | `fldpGrFGQz` |  |
| 4 | 父记录 | `text` | `fldx1Wb6Gr` |  |
| 5 | 事业2 - 宣告目标 （数字） | `number` | `fld3NsfS1P` |  |
| 6 | 职位Position | `text` | `flddZZPcUb` |  |
| 7 | 年资历 (年) Work experience (Years) | `text` | `fld4kqY681` |  |
| 8 | SourceID | `text` | `fldmnrJqQz` |  |
| 9 | 事业性质（行业）Career Type | `text` | `fldbOT2M7f` |  |
| 10 | 复选框 | `checkbox` | `fld3Nfh5Eh` |  |
| 11 | 什么原因想在的关系是这个分数 | `text` | `fld2rluynm` |  |
| 12 | 家庭新反应对象1 Family Member （关系/ 华语名字     Relationship And Name  ）举例：妈妈/林美铃 | `text` | `fld6uaZxak` |  |
| 13 | 事业1 - 愿景 Career Vision(承诺创造什么价值对于事业，为什么重要？） | `text` | `fldjXTxyL3` |  |
| 14 | 学员 | `select` | `fld3pRoFHQ` | 林咏仪; 徐思佳; 陈嘉乐; 许玮显; 曹雪莉; 黄慧清; 张玉莲; 陳鏟戎; 洪以轩; 曾俊铵; 周美怡; 钱诗莹; 张玉萍; 克李斯; 何志鸿; 刘彩婷; 梁敬雄; 余明康; 刘运将; 李绍综; 林珮颐; 倪俊凱; 潘俊铨; 徐诗佳; 陈培嬿; 陈祈佑; 黄招兴; 枼淑红; 张雪莉; 余书忠; 陈旺隆; 郭明俊; 陳鏟戎/昌荣 |
| 15 | 家庭愿景 Family Vision | `text` | `fldn7M2REa` |  |
| 16 | 家庭关系从0-10分_ | `number` | `fldnx86DMT` |  |
| 17 | 日期 | `text` | `fld8PbTqQS` |  |
| 18 | 事业3-宣告 | `text` | `fld1qeYAuc` |  |
| 19 | 公司名字 Company name | `text` | `fld5ZUdqqX` |  |
| 20 | 海星宣告 | `number` | `fld4zMijwt` |  |
| 21 | 事业2-宣告定义(赢得标准） | `text` | `fld8dLnlOD` |  |
| 22 | 每周监测点 Weekly Check Point | `text` | `fld5R4LDiB` |  |
| 23 | 教练 | `select` | `fldmXP5xoP` | 健成; 君霖; 重理; 勇鉎; 芷莹; 显元; 川喜; 恺翔; 凯哲; 艳琪 |
| 24 | 事业1 百分比 | `number` | `fldsNMLe5q` |  |
| 25 | 事业3-宣告目标 | `number` | `fld8orrxtf` |  |
| 26 | 赢的时间 Winning Time（136提早赢 Win-early） | `datetime` | `fldzpUibbZ` |  |
| 27 | 事业1-宣告定义(赢得标准） | `text` | `fldqwKBmmF` |  |
| 28 | 收入 Income | `text` | `fldkuqbCtQ` |  |
| 29 | 事业1 - 宣告目标  （数字） | `number` | `fld4mxq01O` |  |

### ✅135-高二工作坊DOE宣告（开班前）

Category: `DOE / declaration`  
Fields: `29`  
Views: `1`

| # | Field | Type | Field ID | Options |
|---:|---|---|---|---|
| 1 | SourceID | `text` | `fldyCih2UN` |  |
| 2 | 华语名字 | `select` | `fld3pRoFHQ` | 李美郿; 何嘉励; 张秋香; 罗佩珊; 罗耀瀚; 林汶为; 许向圣; 刘国靖; 谢其平; 邱德权; 许伟胜; 曾芷玲; 李汶翔; 温俊荣; 林傢保; 梁莉仪; 詹镇安; 林贤隆; 苏启业; 黄开阳; 陈弘晋; 许雪芳; 王玮玉; 林佑亮; 沈美诗; 魏龙; 鄧顺喆; 施伟弟; 纪光祖; 黎泓毅; 周祤胜; 曾逸文; 王金炎 |
| 3 | 日期 | `datetime` | `fld8PbTqQS` |  |
| 4 | 海星宣告 | `number` | `fld4zMijwt` |  |
| 5 | 家庭关系从0-10分_ | `number` | `fldnx86DMT` |  |
| 6 | 赢的时间 Winning Time（130提早赢 Win-early） | `datetime` | `fldzpUibbZ` |  |
| 7 | 复选框 | `checkbox` | `fld3Nfh5Eh` |  |
| 8 | 事业3-宣告目标 | `number` | `fld8orrxtf` |  |
| 9 | 电子邮件 Email Address | `text` | `fldpGrFGQz` |  |
| 10 | 收入 Income | `text` | `fldkuqbCtQ` |  |
| 11 | 什么原因想在的关系是这个分数 | `text` | `fld2rluynm` |  |
| 12 | 家庭愿景 Family Vision | `text` | `fldn7M2REa` |  |
| 13 | 职位Position | `text` | `flddZZPcUb` |  |
| 14 | 事业3-宣告 | `text` | `fld1qeYAuc` |  |
| 15 | 事业2 百分比 | `number` | `fldzpoHWk4` |  |
| 16 | 公司名字 Company name | `text` | `fld5ZUdqqX` |  |
| 17 | 事业1-宣告定义(赢得标准） | `text` | `fldqwKBmmF` |  |
| 18 | 父记录 | `text` | `fldx1Wb6Gr` |  |
| 19 | 事业性质（行业）Career Type | `text` | `fldbOT2M7f` |  |
| 20 | 事业2 - 宣告目标 （数字） | `number` | `fld3NsfS1P` |  |
| 21 | 年资历 (年) Work experience (Years) | `number` | `fld4kqY681` |  |
| 22 | 事业1 - 愿景 Career Vision(承诺创造什么价值对于事业，为什么重要？） | `text` | `fldjXTxyL3` |  |
| 23 | 事业1 百分比 | `number` | `fldsNMLe5q` |  |
| 24 | 教练 | `select` | `fldmXP5xoP` | 安琪; 黎君; 美仪; 佩琪; 庆辉; 绍培; 伟杰; 勇胜; 妤芯; 智豪; 智伟; 致良 |
| 25 | 事业2-宣告定义(赢得标准） | `text` | `fld8dLnlOD` |  |
| 26 | 家庭新反应对象1 Family Member （关系/ 华语名字     Relationship And Name  ）举例：妈妈/林美铃 | `text` | `fld6uaZxak` |  |
| 27 | 事业1 - 宣告目标  （数字） | `number` | `fld4mxq01O` |  |
| 28 | 事业3 百分比 | `number` | `fldBZxej0o` |  |
| 29 | 每周监测点 Weekly Check Point | `text` | `fld5R4LDiB` |  |

### 🖊️-136-高阶二-Final Masterlist.

Category: `Masterlist / final list`  
Fields: `141`  
Views: `1`

| # | Field | Type | Field ID | Options |
|---:|---|---|---|---|
| 1 | 高阶一1call(A,B,C,D) | `select` | `fld3LBWyNZ` | Yes; No; Emo是男朋友。想要做团队，带团队的leader commission比较高，要进步沟通能力，增进人际关系。想要进步，想要让公司看到学员、自己的Team。曾经有5-6个人，现在完全没有团队了。红黑游戏看到自己之前都没有团队意识，觉得要教人累，所以只顾自己，对团队不负责任，把团队丢给leader负责，容易放弃，抗拒近距离跟人相处，团队离开了就负面，双输。; 亲人的关系，kulai 做工，居銮-<br><br><br>新加坡工厂上班，回来大马10年<br>1. 多认识人，扩充自己的视野，可以跟多人讲话，平常只有姐姐，但姐姐强势，选择性讲话<br>2. 跟人的沟通可以更好，紧张听不到别人讲话，会猜<br>3. 要赚到50k花红来装修屋子; 寻找更多的可能性，赚钱、跟孩子的关系。副业Bank Agency，有commission。5个孩子，最大17岁，最小7岁。大女儿17岁融洽，但有小姐的情绪。大儿子沟通有阻碍，13岁，看弟弟们都不顺眼，觉得妈妈偏心。大儿子跟二儿子11岁的关系非常糟糕。大儿子跟同学、师长关系好。更小还有2个弟弟，粘妈妈。大女儿、大儿子、二儿子看着父母婚姻破碎，小的2个脱离了。前夫会跟大女儿吃饭，小的2个弟弟很喜欢找爸爸。; 想要学习，找方法，要在事业、家庭创造共赢。之前以为自己没得选择，被形势所逼，选择工作而忽略家庭，之前完全没有共赢的心态。红黑也是要赢，一直选红票，最多两败俱伤，没有要共赢。; 7.30pm+-; 把以前的热情找回来，对工作、家庭。没有检测工作进度，处理事情麻木，有一群人陪伴找回自己。以前遇到事情会先放一边、自己消化，现在开始会去面对，解决不到再请教人。; 7.30pm+-<br>高阶一落实在生活上-誓约，可以用能力做到，如何转换 ; 以前对待家人没有温暖，1年回家1/2次看父母。对员工有温暖，以前员工做错事会直接骂，现在试着好好讲话。要突破事业，跟同事的人际关系可以更好。; 以前浑浑噩噩，高阶二到四事业是在Dcode工作。现在做保险，要锻炼聆听。周六晚上被P导回应，有想过放弃离开，印痕有想摧毁，妈妈很凶，常常被打骂。要放下... |
| 2 | 高阶总费用 (A,B,C,D) | `formula` | `fldCoHK6zh` |  |
| 3 | 基础离开 | `select` | `fldUMPJqqk` | 基础守则前; 基础守则后第1天; 基础守则后第2天; 基础守则后第3天; 基础守则后第4天; 基础守则后第5天;  ; 守则后第二天; 守则后第三天 |
| 4 | 基础 - 全款/订金 | `formula` | `fldMsWJGBD` |  |
| 5 | 紧急联系人（姓名、关系、电话） | `text` | `fldbdsENL8` |  |
| 6 | 基础2Call Status<br>来的目的、急需解决的问题 | `text` | `fldtaHRKkE` |  |
| 7 | 婚姻 | `select` | `fldg5w01QF` | 单身; 已婚; 分居; 离婚; 丧偶; 0125351616; 医助; 已婚 Married |
| 8 | IC No | `text` | `fldPi9m6fA` |  |
| 9 | 高阶二1call  (A,B,C,D) | `select` | `fldLFSilk8` | Yes; No |
| 10 | 基础确认期别 | `select` | `fld4FgLMyN` | KLCP131; KLCP132; KLCP133; KLCP135; KLCP136; KLCP137; KLCP138; KLCP139; KLCP140; KLCP121; KLCP130 |
| 11 | 酒店费用 | `select` | `fldGZYvrcS` | 200; 250; 300; 400; 0; 450; 290; 1200; 240; 350; 2,600 |
| 12 | 信念系统当班期别 (A,B,C,D) | `select` | `fldCsXxw3P` | 当班; 不当班; 待确认 |
| 13 | 高阶一已进课室人数 | `formula` | `fldPcaGbzz` |  |
| 14 | 高阶二1 Call Status (A,B,C,D) | `select` | `fldrkv27ER` | Yes; No |
| 15 | 基础2Call | `select` | `fld3PR7LZl` | Yes; No |
| 16 | 行业性质 | `text` | `fldeGX47jN` |  |
| 17 | 高阶定金 (A,B,C,D) | `number` | `fld6DwF8on` |  |
| 18 | 付费方式 (1) | `select` | `flds6ly10t` | Cash; Cheque; Online Banking; Boldpay; Credit Card; Deposit Transfer; 支付宝; 中国银行; Online Transfer |
| 19 | 高阶二确认当班 (A,B,C,D) | `select` | `fldVLGX5Vu` | 确认; 不当班; 待确认; 未接; 星期一 11am<br>-高阶二可以勇敢的发表; 星期一 6pm 过后; .星期一12pm-7pm; 今天随时都可以，只是5:05pm - 7:05pm 在飞机上; 星期二10pm; 星期一/二-1-3pm daily ; 星期一 1.30pm; 星期一 9pm; 星期二2pm ; .星期一2pm-3pm; 星期二 10pm; 星期一/二2-3pm; 星期一早上11点后都可以; 星期一8-9pm （下午不要Call） ; 星期一 12pm; 星期一 2pm; 星期二 11am（除了星期一到五6am-10am之前不行，其他时间都可以）; 星期二2-4点; 星期一 7pm过后; 星期一 3pm-7pm 间 星期几都行; .星期一12pm-12am |
| 20 | 基础确认当班 | `select` | `fld8MIqSZ5` | 确认; 待确认; 不当班; 健康待审核; 健康不通过; 未接电话 |
| 21 | 文字-5 | `text` | `fld5Xz6qxB` |  |
| 22 | 公司规模 (多少人) | `number` | `fldcyxlNHg` |  |
| 23 | 8%SST | `formula` | `fldKqsFNLd` |  |
| 24 | 【基础】Tax invoice name | `formula` | `fldNQzMd0q` |  |
| 25 | 性别 | `select` | `fldHbPLVek` | 男; 女 |
| 26 | 课室内名单 | `text` | `fldDnN0ySS` |  |
| 27 | 邮政编号 | `number` | `fldoYxtpJe` |  |
| 28 | 杂费定金付费方式 (A,B,C,D) | `select` | `fldG89UoDv` | Cash; Cheque; Online Banking; Boldpay; Credit Card; Deposit Transfer; 支付宝; 中国银行 |
| 29 | 杂费定金付费方式_高二  (A,B,C,D) | `select` | `fldG29QiQ9` | Cash; Cheque; Online Banking; Boldpay; Credit Card; Deposit Transfer; 支付宝; 中国银行 |
| 30 | 高阶转名额 | `select` | `fldHzSx5He` | 高阶已消耗; 高阶已退款 |
| 31 | 文字-1 | `lookup` | `fldaqIBk4f` |  |
| 32 | 基础转名额 | `select` | `fldJ4Ok5wY` | 基础已消耗; 基础已退款 |
| 33 | 高阶二已进课室 (A,B,C,D) | `select` | `fldcZavdOm` | KLCP131; KLCP112; KLCP132; KLCP133; KLCP135; KLCP136; KLCP137; KLCP138; KLCP139; KLCP140 |
| 34 | 基础C1-3信息 | `select` | `fldyCLPXM7` | 已发出; 已回复 |
| 35 | 基础阶段教练 | `text` | `fldHTH3wZ9` |  |
| 36 | 补款 | `number` | `fldAQqQ8io` |  |
| 37 | 市区 | `text` | `fld1DvHlU7` |  |
| 38 | 高阶二C1-4信息  (A,B,C,D) | `select` | `fld6bJgztP` | 已回复; 已发出 |
| 39 | 基础报读日期 | `datetime` | `fldXqX3bDG` |  |
| 40 | 【报到】高阶一几点到 | `select` | `fldbcbfBgV` | 8pm-10pm; 10pm-12am; 12am后; 开课当天早上 |
| 41 | 基础已进课室+英文名字 | `formula` | `fldEV3sB63` |  |
| 42 | 杂费定金余款 (A,B,C,D) | `number` | `fldr8zEiwc` |  |
| 43 | 高阶二酒店费用  (A,B,C,D) | `select` | `fldKLj5OvZ` | 2300 |
| 44 | 高阶四已进课室 | `select` | `fldamK4R39` | KLCP131; KLCP132; KLCP133; KLCP135; KLCP136; KLCP137; KLCP138; KLCP139; KLCP140 |
| 45 | 基础1 Call Status | `text` | `fldtKneeQO` |  |
| 46 | 基础健康面谈 | `select` | `flduv1pk53` | 已面谈; 面谈不通过; yes; Yes |
| 47 | 高阶二后离开(A,B,C,D) | `select` | `fldYSq4dt1` | 高级二守则前; 高阶二守则后; 高阶三守则前; 高阶三守则后; 高阶四守则前; 高阶四守则后; 守则后第1天; 守则后第2天; 守则后第3天; 守则后第4天; 守则后第5天 |
| 48 | 信念系统日期  (A,B,C,D) | `number` | `fld48s0YpN` |  |
| 49 | 基础已进课室人数 | `formula` | `fldGYhSADi` |  |
| 50 | 高阶一确认期别人数 | `formula` | `fldxCrwTN6` |  |
| 51 | 基础酒店人数 | `select` | `fldxAC7Mji` | 3; 4; 5; 6; Landmark |
| 52 | 2 Call Status /学员的位置  (A,B,C,D) | `lookup` | `fldjcroYaI` |  |
| 53 | 膳食 | `select` | `fldbiUCP8C` | 素食; 荤食; No |
| 54 | 高阶二确认期别 (A,B,C,D) | `select` | `fldY4T4BzB` | KLCP135; 确认 |
| 55 | 高阶SO/Transfer No. (A,B,C,D) | `number` | `fldoGWsYc2` |  |
| 56 | 文字-3 | `lookup` | `fldACg9DB8` |  |
| 57 | 高阶二已进课室人数 | `formula` | `fldRnyJp4h` |  |
| 58 | 高阶二C1-3信息  (A,B,C,D) | `select` | `fldCgmJDvK` | 已回复; 已发出; 陈昌荣（铲戎）便利店<br>事业：RM260,000 (定义：收到钱）<br>家庭：老婆 （妈妈，妹妹，弟弟）; 洪以轩- 陶瓷艺术家<br>事业1：130作品（70%）  事业2：业绩-RM20,000（30%）<br>家庭：妈妈 6分  （妹妹，爸爸）; 陈嘉乐-房地产销售<br>事业1：RM 1,000,000 (定义：收到Booking)<br>家庭：妈妈 （爸爸，两个弟弟，妹妹）; 曾俊铵-banker<br>事业：业绩 RM330，000  （开单）<br>家庭：弟弟; 周美怡-行政/单据处理<br>事业：<br>家庭：妈妈 （2哥哥 ， 2弟弟）; 钱诗莹-美容院 Facial<br>事业：30顾客 （收钱为准）<br>家庭：老公 （爸爸，妈妈，姐姐，妹妹，弟弟）; 张玉连-水果的生意-------------家庭主妇（家庭目标）<br>事业：业绩 RM10,000 (定义：收钱）<br>家庭：老公 （3个儿子）; 张玉萍-工程/建筑项目 Claim<br>事业： Claim amount 3,600,000.00 <br>家庭：二哥 （爸爸，姐姐，两个哥哥）; 克里斯-MINI MART<br>事业：业绩 RM260,000 (定义：收到钱）<br>家庭：妈妈 （哥哥，妹妹）; 何志鸿-Mini Market <br>事业：业绩 RM234,000 （6间店）（定义：收到钱）<br>家庭：妈妈 （爸爸妈妈 姐姐妹妹）; 刘彩婷-Account finance / Bank laon<br>事业：9份 Agreement <br>家庭：女儿-17 （老公 ，女儿， 儿子）; 许玮显- 汽车模型销售（之前）现在 morgage Banking<br>事业1：Sales RM2,400 (定义：收到钱） 30%<br>事业2:  2个agent合作 （对方合作拿到applicantion）70%<br>家庭：老婆 （爸爸妈妈弟弟妹妹 女儿）; 刘运将-便利店<br>事业：业绩 RM184,000 （5间单面）（定义：收到钱）<br>家庭：大... |
| 59 | 高阶一2CalL (A,B,C,D) | `select` | `flde5hBvrW` | 确认; 待确认; 不当班; 健康待审核; 健康不通过; 未接电话; Yes; 高二待定; 住宿钱诗莹，陈培嬿，周美怡3人要一起，如果可以3人一间，浅眠; 顾孩子、老公 ; 书写有压力; 付款会一半Cash，一半transfer<br>住宿钱诗莹，陈培嬿，周美怡3人要一起，如果可以3人一间，浅眠; KLCP136; 1 |
| 60 | 职位 | `text` | `fldiMuQal2` |  |
| 61 | 父记录 | `link` | `fldCs2Rbnm` |  |
| 62 | SO/Transfer No. | `number` | `fldVfTh8yC` |  |
| 63 | 高阶二总费用  (A,B,C,D) | `formula` | `fldqp668Em` |  |
| 64 | 高阶一1 Call Status (A,B,C,D) | `select` | `fldXcdUr7c` | Yes; No; YES |
| 65 | 高阶二膳食费用  (A,B,C,D) | `select` | `fld7BTqcdC` | 2300 |
| 66 | 备注 | `text` | `fldxiJJ1fR` |  |
| 67 | 高阶学费  (A,B,C,D) | `select` | `fld68LoHe7` | 5000; 12500; 15800; 16300; 18900; 6800; 14600; 10800; 13900; 1080; 24574; 19987; 24552; 2377324359; 19964; 19980; 24569; 24573; 22446; 24558; 24580; 22444; 24577; 24572; 24570; 24347; 2430924575; 24584; 24565; 24315; 24561; 24564; 24701; 19983; 24593; 19998; 24702; 24581 |
| 68 | 报名时间段 | `select` | `fldkVHa7Kp` | 基础开班; 星期五晚上; 星期六早上; 星期六中午; 星期六晚上; 星期日早上; 星期日小休【毕业后】; 星期日【结果1】; 星期日【结果2】; 星期日【结果3-结束】 |
| 69 | 高阶一教练 | `text` | `fldjVaU8zJ` |  |
| 70 | 个人海星位置 | `number` | `fldw1sPNp8` |  |
| 71 | 高阶一酒店费用  (A,B,C,D) | `select` | `fldV1Ov1oJ` | 2300; 1485; 1304; 1168; 864; 1112; 1000; 0 |
| 72 | 高阶一C1-3信息  (A,B,C,D) | `select` | `fldbcgHatV` | 已发出; 已回复; Yes; 高二待定; 住宿钱诗莹，陈培嬿，周美怡3人要一起，如果可以3人一间，浅眠; 顾孩子、老公 ; 书写有压力; 付款会一半Cash，一半transfer<br>住宿钱诗莹，陈培嬿，周美怡3人要一起，如果可以3人一间，浅眠; 想再更深入地运用，继续把高阶上完。要锻炼影响力，帮助自己、身边人看结果。之前看目标会有借口，结果才是答案。要有更多的可能性可以帮助自己、团队100+人完成目标。; 130年尾工作忙。在Emo公司工作，工作要提升业绩，开始在学习带团队。目前没有要Mark有约。; 肉骨茶已经找到新的工人，想要做人、交流可以更好。没有聆听，两夫妻2个都爱答不理。没有安全感，不信任人，要增进人的关系。 |
| 73 | 高阶三已进课室人数 | `formula` | `fldG1VmmI3` |  |
| 74 | 高阶一问卷(A,B,C,D) | `select` | `fldUPUrzpQ` | Yes; No |
| 75 | 高阶报读日期  (A,B,C,D) | `select` | `fldvKhoqzv` | 已发出; 已回复; 3-May-2026; 14/3; 5/3/26 |
| 76 | EMO 英文名字 | `text` | `fldFDwxkst` |  |
| 77 | 地址 | `text` | `fldA6GtRTG` |  |
| 78 | 电话 | `text` | `fld3pODST1` |  |
| 79 | 序号—— | `number` | `fldvAP9Tsv` |  |
| 80 | 州 | `select` | `fldDJzKBt7` | Kuala Lumpur; Johor; Kedah; Kelantan; Malacca; Negeri Sembilan; Pahang; Perak; Perlis; Penang; Sabah; Sarawak; Terengganu; Singapore; Selangor |
| 81 | 学号 | `number` | `fldcAKHYTF` |  |
| 82 | 邮箱 | `text` | `fld7uLB2sP` |  |
| 83 | 结果期别 | `select` | `fldUcxqCzB` | JCP; Dcode; KLCP132; KLCP133; KLCP135; KLCP136; KLCP137; KLCP138; KLCP139; KLCP140; 复习; 复读; 复读-高阶二; 毕业生-基础-高阶二 |
| 84 | 年龄 | `number` | `fld4Ozu3jN` |  |
| 85 | 付费方式 | `select` | `fldktTMWFK` | Cash; Cheque; Online Banking; Boldpay; Credit Card; Deposit Transfer; 支付宝; 中国银行; Online Transfer |
| 86 | 信念系统当班  (A,B,C,D) | `select` | `fldZ6nnaBQ` | 当班; 不当班; 待确认 |
| 87 | 杂费定金补款  (A,B,C,D) | `number` | `fldJU2FkyQ` |  |
| 88 | Mark有约意愿度 | `select` | `fldq89Umtt` | Yes; No; 16/3- 250mbb; 再确定<br>23/3- 5275amb; 2/3- 250mbb<br>14/1- 5275mbb<br>14/1- 詹达恩500转给张玉莲; 2/3- 250mbb<br>14/1- 5275mbb; 再确定; Zero Healthcare; 28/2- 5275mbb; 放公司名<br>12/3- 5275mbb; 21/3- total27575amb; 放公司名; CP16毕业生<br>不要膳食 |
| 89 | 高阶一确认当班 (A,B,C,D) | `select` | `fldb4fMdP3` | 确认; 待确认; 不当班; 未接电话; 健康待审核; 健康待不通过; 未接; 高阶一确认当班 (A,B,C,D); Yes; 5/3 确认136高阶一二当班，高阶三有2场重要的婚礼<br>不当班; 14/3 确认136高阶当班; 1/4 确认136高阶二，高阶一在场外 |
| 90 | 文字-4 | `lookup` | `fld9Nh7axi` |  |
| 91 | 基础学费 | `select` | `fldOGdbu8I` | 5000; 12500; 15800; 16300; 18900; 6800; 5,000; 13,300; 500; 1,580; $5000; $16,300 |
| 92 | 余款 | `number` | `fldVakFzdK` |  |
| 93 | 年收入 | `number` | `fldBv7HKrH` |  |
| 94 | 英文名字 | `text` | `fld7bXtZTW` |  |
| 95 | 高阶一来的目的、急需解决的问题  (A,B,C,D) | `formula` | `fldBTFVLKs` |  |
| 96 | 基础健康 | `text` | `fldpbydaeC` |  |
| 97 | 高阶二教练 | `text` | `fldWmvMlWV` |  |
| 98 | 【报到】高阶二几点到 | `select` | `fldRMzPjjv` | 8pm-10pm; 10pm-12am; 12am后; 开课当天早上 |
| 99 | 基础1call | `select` | `fldsppqgFK` | Yes; No; YES |
| 100 | 高阶学费SST  (A,B,C,D) | `formula` | `fldzpuXMP8` |  |
| 101 | 高阶健康 | `text` | `fldqC8HLiJ` |  |
| 102 | 高阶二卓越宣言表  (A,B,C,D) | `text` | `fldyY1whEh` |  |
| 103 | 年历 | `number` | `fldApjbspo` |  |
| 104 | 毕业证 (A,B,C,D) | `text` | `fld8M5DEZF` |  |
| 105 | 备注-转海星/消耗 | `select` | `fldmYPrj9l` | 高阶已消耗; 高阶已退款; 27/10- 275mbb<br>19/10- 5000mbb<br>21/10- Evonne Chong Kar Yan500转给Lim Chun Kit<br>9/10- Shirlyn Lai500转给Evonne Chong Kar Yan |
| 106 | 公司名称 | `text` | `fldPt86QXy` |  |
| 107 | 高阶一离开 (A,B,C,D) | `select` | `fldhktTdmb` | 高阶一守则前; 高阶一守则后第1天; 高阶一守则后第2天; 高阶一守则后第3天; 高阶一守则后第4天; 高阶一守则后第5天; 高阶四前; 高阶四后 |
| 108 | 高阶一确认当班人数 | `formula` | `fldinQISul` |  |
| 109 | 总费用 | `formula` | `fldH64Rore` |  |
| 110 | 孩子 | `number` | `fldXA3u8NF` |  |
| 111 | 高阶补款 (A,B,C,D) | `number` | `flddyIpxbM` |  |
| 112 | 基础C1-4信息/Account Check | `select` | `fld7rF7lrx` | 已发出; 已回复; Nana 已确认 |
| 113 | EMO 华语名字 | `text` | `fldpVM1MAg` |  |
| 114 | 高阶一已进课室 | `select` | `fldQEOsk5K` | KLCP131; KLCP132; KLCP133; KLCP135; KLCP136; KLCP137; KLCP138; KLCP139; KLCP140 |
| 115 | 高阶付费方式 (A,B,C,D) | `select` | `fldTsnAeEi` | Cash; Cheque; Online Banking; Boldpay; Credit Card; Deposit Transfer; 支付宝; 中国银行; 3000; 18068; 2000; 19904; 17312; 15800; 6000; 965; 5800 |
| 116 | 高阶付费方式_1 | `select` | `fld9pibfS8` | Cash; Cheque; Online Banking; Boldpay; Credit Card; Deposit Transfer; 支付宝; 中国银行; 16904; 11964; 50; 13800; 12800; 13904; 10964; 16954; 10000; 10694 |
| 117 | 基础问卷 | `select` | `fld2eXxUcJ` | Yes; No; YES |
| 118 | 学员/教练 | `select` | `fldTqu9a5z` | 学员; 教练 |
| 119 | 高阶五已经课室 | `select` | `fldOL8qfBY` | MP18; MP19; MP20 |
| 120 | 全报 | `select` | `fld37lkP7m` | 基础全款; 连报; 连报+全款; 连报+M; 连报+M+全款; 高阶; 高阶+全款; 高阶+M; 高阶+M+全款; 复读基础; 复读高阶; 复读-高阶一+全款; 复读高阶一+M; 复读-高阶一+M+全款; 复读-高阶二; 复读-高阶二+全款; 复读高阶二+M; 复读-高阶二+M+全款; 毕业生-复读基础; 毕业生-复读基础+复读高阶一; 毕业生-复读基础+复读高阶二; 复读基础+高阶; 复读高阶二 |
| 121 | 生日日期 | `datetime` | `fldqty2zuN` |  |
| 122 | 华语名字 | `text` | `fldIqZVRsw` |  |
| 123 | 文字-2 | `lookup` | `fldQxS590Q` |  |
| 124 | EMO期别 | `select` | `fldtEM7csn` | KLCP131; KLCP132; KLCP133; KLCP135; KLCP136; KLCP137; KLCP138; KLCP139; KLCP140; KLCP108; KLCP115; KLCP35; KLCP101; KLCP96; KLCP26; KLCP91; KLCP65; KLCP69; KLCP40; KLCP129; KLCP109; KLCP107; KLCP123; KLCP125; KLCP105; KLCP 102; KLCP127; KLCP87; KLCP116; KLCP59; KLCP119; KLCP128 |
| 125 | 定金 | `number` | `fldSqTZCPk` |  |
| 126 | 高阶三已进课室 | `select` | `fldACn4pwe` | KLCP131; KLCP112; KLCP131; KLCP132; KLCP133; KLCP135; KLCP136; KLCP137; KLCP138; KLCP139; KLCP140 |
| 127 | 膳食费用 | `select` | `fldJyjyJaw` | 375; 2300; 2675; 0; 1200 |
| 128 | 高阶-Invoice Name | `formula` | `fldcSFwUNA` |  |
| 129 | 杂费定金  (A,B,C,D) | `number` | `fld5YHqAUa` |  |
| 130 | 高阶四已进课室人数 | `formula` | `fldrIarGll` |  |
| 131 | 高阶一确认期别 (A,B,C,D) | `select` | `fld9EHqoBh` | KLCP135; KLCP136; 确认; 不当班; 1 |
| 132 | 文字-6 | `text` | `flde1ZMLci` |  |
| 133 | 高阶余款  (A,B,C,D) | `number` | `fld5gM9QQd` |  |
| 134 | 基础已进课室（KLCP) | `select` | `fldx22KkI9` | KLCP131; KLCP132; KLCP133; KLCP135; KLCP136; KLCP137; KLCP138; KLCP139; KLCP140; KLCP121; KLCP130 |
| 135 | 高阶二2Call  (A,B,C,D) | `lookup` | `fldpTEoMrj` |  |
| 136 | 高阶二后离开原因 | `text` | `fldghrGMDe` |  |
| 137 | 高阶 - 全款/订金 | `formula` | `fldsWv81U0` |  |
| 138 | 高阶一C1-4信息  (A,B,C,D) | `select` | `fldCBOwgh2` | 已发出; 已回复 |
| 139 | EMO 联络号码 | `text` | `fld0VFSV0R` |  |
| 140 | 客户等级 | `select` | `fldqjJ9DuE` | A+; A; B; C |
| 141 | 高阶健康面谈 | `select` | `fldUyUboyG` | 已面谈; 面谈不通过 |

### 🖊️-136-高阶二-【高阶二Backlog】Bible

Category: `Bible core`  
Fields: `141`  
Views: `1`

| # | Field | Type | Field ID | Options |
|---:|---|---|---|---|
| 1 | 父记录 | `link` | `fldCs2Rbnm` |  |
| 2 | 高阶二确认当班 (A,B,C,D) | `select` | `fldVLGX5Vu` | 确认; 不当班; 待确认; 未接 |
| 3 | 地址 | `text` | `fldA6GtRTG` |  |
| 4 | 职位 | `text` | `fldiMuQal2` |  |
| 5 | 高阶二2Call  (A,B,C,D) | `lookup` | `fldpTEoMrj` |  |
| 6 | 高阶一1call(A,B,C,D) | `select` | `fld3LBWyNZ` | Yes; No |
| 7 | 基础2Call | `select` | `fld3PR7LZl` | Yes; No |
| 8 | 高阶付费方式_1 | `select` | `fld9pibfS8` | Cash; Cheque; Online Banking; Boldpay; Credit Card; Deposit Transfer; 支付宝; 中国银行 |
| 9 | 高阶五已经课室 | `select` | `fldOL8qfBY` | MP18; MP19; MP20 |
| 10 | 总费用 | `formula` | `fldH64Rore` |  |
| 11 | 基础1 Call Status | `text` | `fldtKneeQO` |  |
| 12 | 课室内名单 | `text` | `fldDnN0ySS` |  |
| 13 | EMO 英文名字 | `text` | `fldFDwxkst` |  |
| 14 | 高阶一问卷(A,B,C,D) | `select` | `fldUPUrzpQ` | Yes; No |
| 15 | 高阶二后离开(A,B,C,D) | `select` | `fldYSq4dt1` | 高级二守则前; 高阶二守则后; 高阶三守则前; 高阶三守则后; 高阶四守则前; 高阶四守则后; 守则后第1天; 守则后第2天; 守则后第3天; 守则后第4天; 守则后第5天 |
| 16 | 孩子 | `number` | `fldXA3u8NF` |  |
| 17 | 高阶学费SST  (A,B,C,D) | `formula` | `fldzpuXMP8` |  |
| 18 | 高阶二已进课室 (A,B,C,D) | `select` | `fldcZavdOm` | KLCP131; KLCP112; KLCP132; KLCP133; KLCP135; KLCP136; KLCP137; KLCP138; KLCP139; KLCP140 |
| 19 | 全报 | `select` | `fld37lkP7m` | 基础全款; 连报; 连报+全款; 连报+M; 连报+M+全款; 高阶; 高阶+全款; 高阶+M; 高阶+M+全款; 复读基础; 复读高阶; 复读-高阶一+全款; 复读高阶一+M; 复读-高阶一+M+全款; 复读-高阶二; 复读-高阶二+全款; 复读高阶二+M; 复读-高阶二+M+全款; 毕业生-复读基础; 毕业生-复读基础+复读高阶一; 毕业生-复读基础+复读高阶二; 复读基础+高阶 |
| 20 | 高阶二后离开原因 | `text` | `fldghrGMDe` |  |
| 21 | 【基础】Tax invoice name | `text` | `fldNQzMd0q` |  |
| 22 | 高阶二总费用  (A,B,C,D) | `formula` | `fldqp668Em` |  |
| 23 | 高阶四已进课室人数 | `formula` | `fldrIarGll` |  |
| 24 | 基础健康面谈 | `select` | `flduv1pk53` | 已面谈; 面谈不通过; yes; Yes |
| 25 | 文字-4 | `text` | `fld9Nh7axi` |  |
| 26 | 高阶余款  (A,B,C,D) | `number` | `fld5gM9QQd` |  |
| 27 | 2 Call Status /学员的位置  (A,B,C,D) | `lookup` | `fldjcroYaI` |  |
| 28 | 杂费定金补款  (A,B,C,D) | `number` | `fldJU2FkyQ` |  |
| 29 | IC No | `text` | `fldPi9m6fA` |  |
| 30 | 高阶报读日期  (A,B,C,D) | `text` | `fldvKhoqzv` |  |
| 31 | 信念系统日期  (A,B,C,D) | `text` | `fld48s0YpN` |  |
| 32 | 付费方式 | `select` | `fldktTMWFK` | Cash; Cheque; Online Banking; Boldpay; Credit Card; Deposit Transfer; 支付宝; 中国银行; Online Transfer |
| 33 | 信念系统当班期别 (A,B,C,D) | `text` | `fldCsXxw3P` |  |
| 34 | 婚姻 | `select` | `fldg5w01QF` | 单身; 已婚; 分居; 离婚; 丧偶; 0125351616; 医助 |
| 35 | 高阶补款 (A,B,C,D) | `number` | `flddyIpxbM` |  |
| 36 | 基础 - 全款/订金 | `formula` | `fldMsWJGBD` |  |
| 37 | 行业性质 | `text` | `fldeGX47jN` |  |
| 38 | 文字-6 | `text` | `flde1ZMLci` |  |
| 39 | 客户等级 | `select` | `fldqjJ9DuE` | A+; A; B; C |
| 40 | 高阶付费方式 (A,B,C,D) | `select` | `fldTsnAeEi` | Cash; Cheque; Online Banking; Boldpay; Credit Card; Deposit Transfer; 支付宝; 中国银行 |
| 41 | 文字-1 | `text` | `fldaqIBk4f` |  |
| 42 | 英文名字 | `text` | `fld7bXtZTW` |  |
| 43 | 补款 | `number` | `fldAQqQ8io` |  |
| 44 | EMO 联络号码 | `text` | `fld0VFSV0R` |  |
| 45 | 杂费定金付费方式 (A,B,C,D) | `select` | `fldG89UoDv` | Cash; Cheque; Online Banking; Boldpay; Credit Card; Deposit Transfer; 支付宝; 中国银行 |
| 46 | 市区 | `text` | `fld1DvHlU7` |  |
| 47 | 学员/教练 | `select` | `fldTqu9a5z` | 学员; 教练 |
| 48 | 基础离开 | `select` | `fldUMPJqqk` | 基础守则前; 基础守则后第1天; 基础守则后第2天; 基础守则后第3天; 基础守则后第4天; 基础守则后第5天;  ; 守则后第二天; 守则后第三天 |
| 49 | 年龄 | `number` | `fld4Ozu3jN` |  |
| 50 | 高阶二C1-4信息  (A,B,C,D) | `text` | `fld6bJgztP` |  |
| 51 | 高阶一来的目的、急需解决的问题  (A,B,C,D) | `text` | `fldBTFVLKs` |  |
| 52 | 高阶一2CalL (A,B,C,D) | `select` | `flde5hBvrW` | 确认; 待确认; 不当班; 健康待审核; 健康不通过; 未接电话; Yes; 高二待定; 住宿钱诗莹，陈培嬿，周美怡3人要一起，如果可以3人一间，浅眠; 顾孩子、老公 ; 书写有压力; 付款会一半Cash，一半transfer<br>住宿钱诗莹，陈培嬿，周美怡3人要一起，如果可以3人一间，浅眠 |
| 53 | 毕业证 (A,B,C,D) | `text` | `fld8M5DEZF` |  |
| 54 | 高阶二1call  (A,B,C,D) | `select` | `fldLFSilk8` | Yes; No |
| 55 | 高阶二卓越宣言表  (A,B,C,D) | `text` | `fldyY1whEh` |  |
| 56 | 高阶 - 全款/订金 | `formula` | `fldsWv81U0` |  |
| 57 | 高阶一确认当班人数 | `formula` | `fldinQISul` |  |
| 58 | 基础酒店人数 | `select` | `fldxAC7Mji` | 3; 4; 5; 6; Landmark |
| 59 | 公司名称 | `text` | `fldPt86QXy` |  |
| 60 | Mark有约意愿度 | `select` | `fldq89Umtt` | Yes; No |
| 61 | 结果期别 | `select` | `fldUcxqCzB` | JCP; Dcode; KLCP132; KLCP133; KLCP135; KLCP136; KLCP137; KLCP138; KLCP139; KLCP140; 复习; 复读; 复读-高阶二; 毕业生-基础-高阶二 |
| 62 | 个人海星位置 | `number` | `fldw1sPNp8` |  |
| 63 | 基础1call | `select` | `fldsppqgFK` | Yes; No; YES |
| 64 | 高阶二膳食费用  (A,B,C,D) | `select` | `fld7BTqcdC` | 2300 |
| 65 | 高阶二确认期别 (A,B,C,D) | `select` | `fldY4T4BzB` | KLCP135 |
| 66 | 定金 | `number` | `fldSqTZCPk` |  |
| 67 | 膳食费用 | `select` | `fldJyjyJaw` | 375; 2300; 2675; 0; 1200 |
| 68 | 高阶三已进课室人数 | `formula` | `fldG1VmmI3` |  |
| 69 | 高阶二C1-3信息  (A,B,C,D) | `select` | `fldCgmJDvK` | 已回复; 已发出 |
| 70 | 生日日期 | `datetime` | `fldqty2zuN` |  |
| 71 | 高阶-Invoice Name | `text` | `fldcSFwUNA` |  |
| 72 | 高阶定金 (A,B,C,D) | `number` | `fld6DwF8on` |  |
| 73 | 文字-3 | `text` | `fldACg9DB8` |  |
| 74 | 文字-2 | `text` | `fldQxS590Q` |  |
| 75 | 付费方式 (1) | `select` | `flds6ly10t` | Cash; Cheque; Online Banking; Boldpay; Credit Card; Deposit Transfer; 支付宝; 中国银行; Online Transfer |
| 76 | 【报到】高阶二几点到 | `select` | `fldRMzPjjv` | 8pm-10pm; 10pm-12am; 12am后; 开课当天早上 |
| 77 | 年收入 | `number` | `fldBv7HKrH` |  |
| 78 | 高阶学费  (A,B,C,D) | `select` | `fld68LoHe7` | 5000; 12500; 15800; 16300; 18900; 6800; 14600; 10800; 13900; 1080 |
| 79 | 文字-5 | `text` | `fld5Xz6qxB` |  |
| 80 | 电话 | `text` | `fld3pODST1` |  |
| 81 | 邮政编号 | `number` | `fldoYxtpJe` |  |
| 82 | EMO 华语名字 | `text` | `fldpVM1MAg` |  |
| 83 | 高阶四已进课室 | `select` | `fldamK4R39` | KLCP131; KLCP132; KLCP133; KLCP135; KLCP136; KLCP137; KLCP138; KLCP139; KLCP140 |
| 84 | 杂费定金余款 (A,B,C,D) | `number` | `fldr8zEiwc` |  |
| 85 | 高阶总费用 (A,B,C,D) | `formula` | `fldCoHK6zh` |  |
| 86 | 基础健康 | `text` | `fldpbydaeC` |  |
| 87 | 报名时间段 | `select` | `fldkVHa7Kp` | 基础开班; 星期五晚上; 星期六早上; 星期六中午; 星期六晚上; 星期日早上; 星期日小休【毕业后】; 星期日【结果1】; 星期日【结果2】; 星期日【结果3-结束】 |
| 88 | 基础C1-4信息/Account Check | `select` | `fld7rF7lrx` | 已发出; 已回复; Nana 已确认 |
| 89 | 基础已进课室（KLCP) | `select` | `fldx22KkI9` | KLCP131; KLCP132; KLCP133; KLCP135; KLCP136; KLCP137; KLCP138; KLCP139; KLCP140 |
| 90 | 杂费定金付费方式_高二  (A,B,C,D) | `select` | `fldG29QiQ9` | Cash; Cheque; Online Banking; Boldpay; Credit Card; Deposit Transfer; 支付宝; 中国银行 |
| 91 | 高阶健康面谈 | `select` | `fldUyUboyG` | 已面谈; 面谈不通过 |
| 92 | 基础问卷 | `select` | `fld2eXxUcJ` | Yes; No; YES |
| 93 | 备注 | `text` | `fldxiJJ1fR` |  |
| 94 | 杂费定金  (A,B,C,D) | `number` | `fld5YHqAUa` |  |
| 95 | 性别 | `select` | `fldHbPLVek` | 男; 女 |
| 96 | 高阶一C1-4信息  (A,B,C,D) | `select` | `fldCBOwgh2` | 已发出; 已回复 |
| 97 | 基础已进课室人数 | `formula` | `fldGYhSADi` |  |
| 98 | 序号—— | `number` | `fldvAP9Tsv` |  |
| 99 | 膳食 | `select` | `fldbiUCP8C` | 素食; 荤食; No |
| 100 | 酒店费用 | `select` | `fldGZYvrcS` | 200; 250; 300; 400; 0; 450; 290; 1200; 240; 350 |
| 101 | 信念系统当班  (A,B,C,D) | `select` | `fldZ6nnaBQ` | 当班; 不当班; 待确认 |
| 102 | 高阶一教练 | `text` | `fldjVaU8zJ` |  |
| 103 | SO/Transfer No. | `number` | `fldVfTh8yC` |  |
| 104 | 紧急联系人（姓名、关系、电话） | `text` | `fldbdsENL8` |  |
| 105 | 基础C1-3信息 | `select` | `fldyCLPXM7` | 已发出; 已回复 |
| 106 | 高阶一已进课室人数 | `formula` | `fldPcaGbzz` |  |
| 107 | 高阶一酒店费用  (A,B,C,D) | `select` | `fldV1Ov1oJ` | 2300; 1485 |
| 108 | 基础确认当班 | `select` | `fld8MIqSZ5` | 确认; 待确认; 不当班; 健康待审核; 健康不通过; 未接电话 |
| 109 | 基础阶段教练 | `text` | `fldHTH3wZ9` |  |
| 110 | 年历 | `number` | `fldApjbspo` |  |
| 111 | 基础确认期别 | `select` | `fld4FgLMyN` | KLCP131; KLCP132; KLCP133; KLCP135; KLCP136; KLCP137; KLCP138; KLCP139; KLCP140 |
| 112 | 高阶一确认期别 (A,B,C,D) | `select` | `fld9EHqoBh` | KLCP135; KLCP136 |
| 113 | 学号 | `number` | `fldcAKHYTF` |  |
| 114 | 高阶一确认期别人数 | `formula` | `fldxCrwTN6` |  |
| 115 | 高阶健康 | `text` | `fldqC8HLiJ` |  |
| 116 | 高阶一离开 (A,B,C,D) | `select` | `fldhktTdmb` | 高阶一守则前; 高阶一守则后第1天; 高阶一守则后第2天; 高阶一守则后第3天; 高阶一守则后第4天; 高阶一守则后第5天; 高阶四前; 高阶四后 |
| 117 | 【报到】高阶一几点到 | `select` | `fldbcbfBgV` | 8pm-10pm; 10pm-12am; 12am后; 开课当天早上 |
| 118 | 高阶SO/Transfer No. (A,B,C,D) | `number` | `fldoGWsYc2` |  |
| 119 | 高阶二教练 | `text` | `fldWmvMlWV` |  |
| 120 | 州 | `select` | `fldDJzKBt7` | Kuala Lumpur; Johor; Kedah; Kelantan; Malacca; Negeri Sembilan; Pahang; Perak; Perlis; Penang; Sabah; Sarawak; Terengganu; Singapore; Selangor |
| 121 | 高阶一1 Call Status (A,B,C,D) | `text` | `fldXcdUr7c` |  |
| 122 | 基础已进课室+英文名字 | `formula` | `fldEV3sB63` |  |
| 123 | 高阶二酒店费用  (A,B,C,D) | `select` | `fldKLj5OvZ` | 2300 |
| 124 | 公司规模 (多少人) | `number` | `fldcyxlNHg` |  |
| 125 | 基础2Call Status<br>来的目的、急需解决的问题 | `text` | `fldtaHRKkE` |  |
| 126 | 高阶二1 Call Status (A,B,C,D) | `text` | `fldrkv27ER` |  |
| 127 | 高阶三已进课室 | `select` | `fldACn4pwe` | KLCP131; KLCP112; KLCP131; KLCP132; KLCP133; KLCP135; KLCP136; KLCP137; KLCP138; KLCP139; KLCP140 |
| 128 | 高阶一确认当班 (A,B,C,D) | `select` | `fldb4fMdP3` | 确认; 待确认; 不当班; 未接电话; 健康待审核; 健康待不通过; 未接; 高阶一确认当班 (A,B,C,D) |
| 129 | EMO期别 | `select` | `fldtEM7csn` | KLCP131; KLCP132; KLCP133; KLCP135; KLCP136; KLCP137; KLCP138; KLCP139; KLCP140; KLCP108; KLCP115; KLCP35; KLCP101; KLCP96; KLCP26; KLCP91; KLCP65; KLCP69; KLCP40; KLCP129; KLCP109; KLCP107; KLCP123; KLCP125; KLCP105; KLCP 102; KLCP127; KLCP87; KLCP116; KLCP59 |
| 130 | 基础转名额 | `select` | `fldJ4Ok5wY` | 基础已消耗; 基础已退款 |
| 131 | 高阶一C1-3信息  (A,B,C,D) | `select` | `fldbcgHatV` | 已发出; 已回复; Yes |
| 132 | 备注-转海星/消耗 | `text` | `fldmYPrj9l` |  |
| 133 | 高阶一已进课室 | `select` | `fldQEOsk5K` | KLCP131; KLCP132; KLCP133; KLCP135; KLCP136; KLCP137; KLCP138; KLCP139; KLCP140 |
| 134 | 基础学费 | `select` | `fldOGdbu8I` | 5000; 12500; 15800; 16300; 18900; 6800; 5,000; 13,300; 500; 1,580; $5000 |
| 135 | 基础报读日期 | `datetime` | `fldXqX3bDG` |  |
| 136 | 华语名字 | `text` | `fldIqZVRsw` |  |
| 137 | 高阶二已进课室人数 | `formula` | `fldRnyJp4h` |  |
| 138 | 高阶转名额 | `select` | `fldHzSx5He` | 高阶已消耗; 高阶已退款 |
| 139 | 余款 | `number` | `fldVakFzdK` |  |
| 140 | 邮箱 | `text` | `fld7uLB2sP` |  |
| 141 | 8%SST | `formula` | `fldKqsFNLd` |  |

### 🔥-学员海星个人结果

Category: `Result / outcome`  
Fields: `5`  
Views: `1`

| # | Field | Type | Field ID | Options |
|---:|---|---|---|---|
| 1 | 教练 | `select` | `fldFf3g7aW` | 安琪; 黎君; 美仪; 佩琪; 庆辉; 绍培; 伟杰; 勇胜; 妤芯; 智豪; 智伟; 致良; 教练 |
| 2 | 学员 | `text` | `fldRAFkMM9` |  |
| 3 | 查找引用 | `number` | `fldEjcJw3V` |  |
| 4 | 文本 | `text` | `fldiQjGHfl` |  |
| 5 | 行动 | `select` | `fldSEguTFc` | A; B;  C |

## Related Analysis

- [D.136 Field Duplication Analysis](D136-Field-Duplication-Analysis.md)
- [Duplicate field groups CSV](../data/d136-class-bible/dcode_aga_d136_class_bible_duplicate_field_groups_2026-05-29.csv)
