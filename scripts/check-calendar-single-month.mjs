import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const source = readFileSync(new URL('../src/main.jsx', import.meta.url), 'utf8');
const classCalendar = source.slice(source.indexOf('function ClassCalendar'), source.indexOf('function buildCalendarMonths'));

assert.ok(classCalendar.includes('useState'), 'ClassCalendar should keep one visible month in local state');
assert.ok(classCalendar.includes('Previous month'), 'ClassCalendar should expose a previous-month control');
assert.ok(classCalendar.includes('Next month'), 'ClassCalendar should expose a next-month control');
assert.ok(!classCalendar.includes('months.map'), 'ClassCalendar should not render every month at once');

console.log('Single-month calendar contract passed');
