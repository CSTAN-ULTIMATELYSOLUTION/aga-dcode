import assert from 'node:assert/strict';
import { getAppState } from '../server/database.mjs';

const state = getAppState();

assert.ok(Array.isArray(state.doeDashboard), 'state.doeDashboard should be an array');

const cp138 = state.doeDashboard.find((cohort) => cohort.cohortCode === 'CP138');
assert.ok(cp138, 'CP138 should be present in DOE dashboard');

const phaseNames = cp138.phases.map((phase) => phase.phaseName);
assert.deepEqual(
  phaseNames,
  ['Advanced Phase 1', 'Advanced Phase 2', 'Advanced Phase 3', 'Advanced Phase 4 / Graduation'],
  'CP138 DOE dashboard should cover Advanced Phase 1 through Phase 4'
);

for (const phase of cp138.phases) {
  assert.ok(phase.classId, `${phase.phaseName} should have a classId`);
  assert.ok(phase.teacher, `${phase.phaseName} should have a teacher`);
  assert.ok(Array.isArray(phase.coaches), `${phase.phaseName} should expose coaches`);
  assert.ok(Array.isArray(phase.students), `${phase.phaseName} should expose students`);
  assert.ok(phase.students.length > 0, `${phase.phaseName} should include visible demo students`);
  assert.ok(phase.stats.totalStudents > 0, `${phase.phaseName} should have student stats`);
  assert.ok('submitted' in phase.stats, `${phase.phaseName} should count submitted DOE`);
  assert.ok('pending' in phase.stats, `${phase.phaseName} should count pending DOE`);
  assert.ok('coachFollowUpPending' in phase.stats, `${phase.phaseName} should count coach follow-up`);

  for (const student of phase.students) {
    assert.ok(student.studentId, 'DOE student should include studentId');
    assert.ok(student.name, 'DOE student should include name');
    assert.ok(student.doeStatus, 'DOE student should include doeStatus');
    assert.ok(student.coachStatus, 'DOE student should include coachStatus');
    assert.ok(student.currentLifecycleStatus, 'DOE student should include currentLifecycleStatus');
  }
}

assert.ok(!phaseNames.includes('Advanced Phase 2 / DOE'), 'DOE should not be part of the phase name');

console.log('DOE dashboard contract passed');
