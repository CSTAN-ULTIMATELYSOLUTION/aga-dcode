import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const source = readFileSync(new URL('../src/main.jsx', import.meta.url), 'utf8');
const hierarchy = source.slice(source.indexOf('function CohortHierarchy'), source.indexOf('function HallManagement'));

assert.ok(hierarchy.includes('View Details'), 'CohortHierarchy should expose a View Details action');
assert.ok(hierarchy.includes('cohort-live-status'), 'CohortHierarchy should render compact live status cards');
assert.ok(!hierarchy.includes('session-list'), 'CohortHierarchy should not render full session details inline');
assert.ok(source.includes('function CohortDetailModal'), 'Cohort detail modal should hold the full details');

console.log('Cohort live summary contract passed');
