import assert from 'node:assert/strict';
import {
  approvePayment,
  callCenterConfirmRegistration,
  confirmFirstDayAttendance,
  createRegistration,
  db,
  enrollApprovedRegistration,
  generateClassReport,
  generateCohortManagerReport,
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

assert.ok(registration, 'new registration should exist without payment slip');
assert.ok(db.prepare('select person_id from persons where student_id = ?').get(registration.student_id), 'registration should create a person');
assert.ok(db.prepare('select student_profile_id from student_profiles where student_id = ?').get(registration.student_id), 'registration should create a student profile');
assert.ok(db.prepare("select event_id from lifecycle_events where student_id = ? and event_type = 'Registration Submitted'").get(registration.student_id), 'registration should create lifecycle event');

submitPaymentSlip();
let payment = db.prepare('select * from payment_submissions where registration_id = ?').get(registration.registration_id);
assert.equal(payment.status, 'Pending Finance Approval', 'payment slip should start pending finance approval');

let blocked = enrollApprovedRegistration();
assert.match(blocked, /No approved registration/i, 'enrollment should be blocked before finance and call center approval');

approvePayment();
payment = db.prepare('select * from payment_submissions where registration_id = ?').get(registration.registration_id);
assert.match(payment.status, /Approved/, 'finance approval should approve payment');

callCenterConfirmRegistration();
const confirmation = db.prepare('select * from call_center_confirmations where registration_id = ?').get(registration.registration_id);
assert.equal(confirmation.status, 'Call Center Confirmed', 'call center should confirm registration');

enrollApprovedRegistration();
let membership = db.prepare('select * from class_memberships where registration_id = ?').get(registration.registration_id);
assert.equal(membership.status, 'Pre-Registered', 'approved registration should enroll as pre-registered');

confirmFirstDayAttendance();
membership = db.prepare('select * from class_memberships where registration_id = ?').get(registration.registration_id);
assert.equal(membership.status, 'Confirmed', 'first-day admin confirmation should confirm class member');

generateClassReport();
generateCohortManagerReport();
const reports = getAppState().pageRows.Reports.flat().join(' ');
assert.match(reports, /Teacher Class Report/, 'teacher class report should be visible');
assert.match(reports, /Manager Cohort Report/, 'manager cohort report should be visible');

console.log('Enrollment workflow contract passed');
