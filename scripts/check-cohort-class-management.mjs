import assert from 'node:assert/strict';
import { createCohort, createCohortClass, getAppState } from '../server/database.mjs';

const suffix = Date.now();
const cohortCode = `CPX${String(suffix).slice(-4)}`;

createCohort({
  cohortCode,
  program: 'Workflow Demo Program',
  venueHall: 'Dcode KL Center / Hall A',
  status: 'Planned',
  sizeLabel: '0 students',
});

createCohortClass({
  cohortCode,
  className: 'Basic Class',
  classType: 'Core class',
  sequenceNo: 1,
  teacherName: 'Demo Teacher',
  coachCount: 0,
  status: 'Planned',
});

const state = getAppState();
const cohort = state.cohortTree.find((item) => item.code === cohortCode);

assert.ok(cohort, 'created cohort should appear in cohort tree');
assert.equal(cohort.program, 'Workflow Demo Program');
assert.ok(cohort.classes.some((item) => item.name === 'Basic Class'), 'created class should appear under cohort');

console.log('Cohort/class management contract passed');
