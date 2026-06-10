import { readFileSync } from 'node:fs';
import { basename, join } from 'node:path';
import { db, pushActivity, writeObjectLog } from '../server/database.mjs';

const root = new URL('..', import.meta.url).pathname;
const fieldInventoryPath = join(root, 'data/d136-class-bible/dcode_aga_d136_class_bible_field_inventory_2026-05-29.csv');
const tableInventoryPath = join(root, 'data/d136-class-bible/dcode_aga_d136_class_bible_deep_tables_2026-05-28.csv');

function parseCsv(text) {
  const rows = [];
  let row = [];
  let value = '';
  let quoted = false;

  for (let index = 0; index < text.length; index += 1) {
    const char = text[index];
    const next = text[index + 1];

    if (quoted) {
      if (char === '"' && next === '"') {
        value += '"';
        index += 1;
      } else if (char === '"') {
        quoted = false;
      } else {
        value += char;
      }
      continue;
    }

    if (char === '"') quoted = true;
    else if (char === ',') {
      row.push(value);
      value = '';
    } else if (char === '\n') {
      row.push(value);
      rows.push(row);
      row = [];
      value = '';
    } else if (char !== '\r') {
      value += char;
    }
  }

  if (value || row.length) {
    row.push(value);
    rows.push(row);
  }

  const [headers, ...dataRows] = rows;
  return dataRows
    .filter((dataRow) => dataRow.some((cell) => cell !== ''))
    .map((dataRow) => Object.fromEntries(headers.map((header, index) => [header, dataRow[index] || ''])));
}

function sourceRole(tableName, category) {
  if (/学员-NEWBIBLE/.test(tableName)) return 'Learner Source';
  if (/教练-NEWBIBLE|教练名单/.test(tableName)) return 'Coach Source';
  if (/课程报名/.test(tableName)) return 'Registration Source';
  if (/Backlog|离开|下车/i.test(tableName)) return 'Backlog / Exit';
  if (/DOE|宣告|事业/.test(tableName)) return 'DOE / Declaration';
  if (/MASTERLIST|FINAL/i.test(tableName)) return 'Derived Masterlist';
  return category || 'Other';
}

function personAttribute(fieldName) {
  const tests = [
    ['emergency_contact', /紧急联系人|最亲密家庭|家庭成员|关系.*号码/i],
    ['name', /姓名|名字|华语名字|英文名字|Name/i],
    ['phone', /联络号码|联系号码|电话|手机|WhatsApp|Phone/i],
    ['student_id', /学号|Student ID|student_id|序号/i],
    ['email', /Email|电子邮件|邮件/i],
    ['coach_assignment', /教练/i],
    ['class_status', /进课室|确认当班|Call Status|1call|2call|期别|基础|高阶|位置/i],
    ['finance', /费用|付费|定金|余款|全款|订金|付款|学费|SO\/Transfer|Transfer|酒店|膳食/i],
    ['personal_profile', /年龄|性别|婚姻|孩子|职位|公司|行业|年收入|州|市区|生日|身份证|IC/i],
  ];
  return tests.find(([, pattern]) => pattern.test(fieldName))?.[0] || null;
}

function confidenceFor(attribute, role) {
  if (['Learner Source', 'Coach Source', 'Registration Source'].includes(role)) return 'high';
  if (['name', 'phone', 'student_id', 'emergency_contact'].includes(attribute) && role === 'Derived Masterlist') return 'medium';
  return 'review';
}

const tables = parseCsv(readFileSync(tableInventoryPath, 'utf8'));
const fields = parseCsv(readFileSync(fieldInventoryPath, 'utf8'));
const importId = `LARK-PERSON-${Date.now()}`;

db.exec(`
  delete from lark_person_field_candidates;
  delete from lark_source_fields;
  delete from lark_source_tables;
`);

const insertTable = db.prepare(`
  insert or replace into lark_source_tables
    (table_id, table_name, category, field_count, view_count, form_count, role_guess, source_path, imported_at)
  values (?, ?, ?, ?, ?, ?, ?, ?, current_timestamp)
`);
for (const table of tables) {
  insertTable.run(
    table.table_id,
    table.table_name,
    table.category,
    Number(table.field_count || 0),
    Number(table.view_count || 0),
    Number(table.form_count || 0),
    sourceRole(table.table_name, table.category),
    tableInventoryPath
  );
}

const insertField = db.prepare(`
  insert or replace into lark_source_fields
    (field_id, table_id, table_name, category, field_order, field_name, field_type, option_count, options_preview, imported_at)
  values (?, ?, ?, ?, ?, ?, ?, ?, ?, current_timestamp)
`);
const insertCandidate = db.prepare(`
  insert or replace into lark_person_field_candidates
    (candidate_id, table_id, table_name, field_id, field_name, field_order, field_type, person_attribute, source_role, confidence, import_note, imported_at)
  values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, current_timestamp)
`);

let personCandidateCount = 0;
for (const field of fields) {
  const fieldOrder = Number(field.field_order || 0);
  insertField.run(
    field.field_id,
    field.table_id,
    field.table_name,
    field.table_category,
    fieldOrder,
    field.field_name,
    field.field_type,
    Number(field.option_count || 0),
    field.options_preview || ''
  );

  const attribute = personAttribute(field.field_name);
  if (!attribute) continue;
  const role = sourceRole(field.table_name, field.table_category);
  personCandidateCount += 1;
  insertCandidate.run(
    `${field.table_id}-${fieldOrder}-${attribute}`,
    field.table_id,
    field.table_name,
    field.field_id,
    field.field_name,
    fieldOrder,
    field.field_type,
    attribute,
    role,
    confidenceFor(attribute, role),
    `Imported from ${basename(fieldInventoryPath)}; schema only, no row-level Lark records in project CSV.`
  );
}

db.prepare(`
  insert or replace into lark_import_runs
    (import_id, source_name, source_path, table_count, field_count, person_candidate_count, status)
  values (?, ?, ?, ?, ?, ?, 'Imported schema inventory')
`).run(importId, 'D.136 Class Bible person schema inventory', fieldInventoryPath, tables.length, fields.length, personCandidateCount);

pushActivity(`Imported D.136 Lark person schema: ${personCandidateCount} person-field candidates`);
writeObjectLog('GGPiba6WEaG1hCsrpJIlJO3bgDb', 'Lark Base', 'Imported person schema CSV', `${tables.length} tables, ${fields.length} fields, ${personCandidateCount} person candidates`, 'AGA Import');

console.log(`Imported ${tables.length} Lark tables, ${fields.length} fields, ${personCandidateCount} person-field candidates.`);
