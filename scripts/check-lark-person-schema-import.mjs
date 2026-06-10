import { db, getAppState } from '../server/database.mjs';

function assert(condition, message) {
  if (!condition) {
    console.error(`FAIL: ${message}`);
    process.exit(1);
  }
}

const latestRun = db.prepare('select * from lark_import_runs order by imported_at desc limit 1').get();
assert(latestRun, 'Expected a Lark CSV import run.');
assert(latestRun.table_count === 26, `Expected 26 tables, got ${latestRun.table_count}.`);
assert(latestRun.field_count === 2409, `Expected 2409 fields, got ${latestRun.field_count}.`);
assert(latestRun.person_candidate_count > 0, 'Expected person field candidates.');

const learnerName = db.prepare(`
  select *
  from lark_person_field_candidates
  where field_name = 'EMO 华语名字'
    and table_name like '%学员-NEWBIBLE%'
    and person_attribute = 'name'
`).get();
assert(learnerName, 'Expected learner Chinese name candidate from D.136 learner table.');

const learnerPhone = db.prepare(`
  select *
  from lark_person_field_candidates
  where field_name = 'EMO 联络号码'
    and table_name like '%学员-NEWBIBLE%'
    and person_attribute = 'phone'
`).get();
assert(learnerPhone, 'Expected learner phone candidate from D.136 learner table.');

const state = getAppState();
assert(state.relationships?.larkPersonSchema?.latestRun, 'Expected larkPersonSchema in API state.');
assert(state.pageRows?.['AGA-only Lark Mapping']?.length > 0, 'Expected AGA-only Lark Mapping rows.');

console.log('Lark person schema import check passed.');
console.log(`${latestRun.table_count} tables, ${latestRun.field_count} fields, ${latestRun.person_candidate_count} person-field candidates.`);
