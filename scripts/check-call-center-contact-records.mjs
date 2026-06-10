import assert from 'node:assert/strict';
import {
  addCallCenterContactLog,
  approvePayment,
  createRegistration,
  db,
  enrollApprovedRegistration,
  getAppState,
  submitPaymentSlip,
} from '../server/database.mjs';

createRegistration();

const registration = db.prepare(`
  select r.registration_id, r.student_id
  from registrations r
  left join payment_submissions ps on ps.registration_id = r.registration_id
  where ps.payment_submission_id is null
  order by r.registration_id desc
  limit 1
`).get();

assert.ok(registration, 'new registration should exist for call center queue');

const queue = getAppState().callCenterDashboard;
assert.ok(queue, 'app state should expose a call center dashboard');
assert.ok(queue.stats.needFirstCall >= 1, 'new submitted registration should be counted as need first call');

addCallCenterContactLog({
  registrationId: registration.registration_id,
  method: 'Call',
  direction: 'Outbound',
  result: 'No Answer',
  note: 'First call attempt; phone rang but no pickup.',
  nextFollowUpAt: '30 May 2026, 10:00 AM',
  handledBy: 'Call Center A',
});

addCallCenterContactLog({
  registrationId: registration.registration_id,
  method: 'WhatsApp',
  direction: 'Outbound',
  result: 'Waiting Reply',
  note: 'Sent CP138 class details and asked student to confirm.',
  nextFollowUpAt: '30 May 2026, 03:00 PM',
  handledBy: 'Call Center A',
});

let logs = db.prepare('select * from call_center_contact_logs where registration_id = ? order by created_at').all(registration.registration_id);
assert.equal(logs.length, 2, 'registration should keep multiple contact history rows');
assert.equal(logs.at(-1).contact_result, 'Waiting Reply', 'latest contact result should be saved');

submitPaymentSlip();
approvePayment();
let blocked = enrollApprovedRegistration();
assert.match(blocked, /No approved registration/i, 'waiting reply should block class enrollment even after finance approval');

addCallCenterContactLog({
  registrationId: registration.registration_id,
  method: 'Call',
  direction: 'Outbound',
  result: 'Confirmed',
  note: 'Student confirmed CP138 intention and first-day attendance plan.',
  nextFollowUpAt: '',
  handledBy: 'Call Center A',
});

const confirmation = db.prepare('select * from call_center_confirmations where registration_id = ?').get(registration.registration_id);
assert.equal(confirmation.status, 'Call Center Confirmed', 'confirmed contact log should update latest call center status');

enrollApprovedRegistration();
const membership = db.prepare('select * from class_memberships where registration_id = ?').get(registration.registration_id);
assert.equal(membership.status, 'Pre-Registered', 'confirmed call center status plus finance approval should unlock pre-registration');

const state = getAppState();
const detail = state.relationships.registrations[registration.registration_id];
assert.equal(detail.callCenterLogs.length, 3, 'registration relationship should expose contact timeline');
assert.match(JSON.stringify(state.callCenterDashboard), /Call Center A/, 'call center dashboard should show staff handling');

console.log('Call center contact records contract passed');
