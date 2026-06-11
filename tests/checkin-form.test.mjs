import test from 'node:test';
import assert from 'node:assert/strict';

import {
  applyMockPayment,
  getMissingCheckinFields,
  isAlreadyCheckedIn,
  isCheckinFormReady,
  shouldShowMockPayButton,
} from '../src/checkin-form.mjs';

const completeForm = {
  phone: '012-333 8888',
  fullName: 'Demo Student One',
  icOrPassport: 'B8888888',
  eInvoiceName: 'Demo Student One',
  eInvoiceTin: 'C8888888888',
  eInvoiceIdType: 'NRIC',
  eInvoiceIdNo: 'B8888888',
  eInvoiceAddress: 'Petaling Jaya, Selangor',
  eInvoiceEmail: 'student.one@example.com',
};

test('isCheckinFormReady blocks check-in when e-invoice information is incomplete', () => {
  assert.equal(isCheckinFormReady({ ...completeForm, eInvoiceTin: '' }), false);
  assert.deepEqual(getMissingCheckinFields({ ...completeForm, eInvoiceTin: '' }), ['TIN']);
});

test('isCheckinFormReady allows check-in when all required fields are complete', () => {
  assert.equal(isCheckinFormReady(completeForm), true);
  assert.deepEqual(getMissingCheckinFields(completeForm), []);
});

test('shouldShowMockPayButton shows for unpaid or pending payment statuses', () => {
  assert.equal(shouldShowMockPayButton({ paymentStatus: 'Pending Finance Review' }), true);
  assert.equal(shouldShowMockPayButton({ paymentStatus: 'unknown' }), true);
  assert.equal(shouldShowMockPayButton({ paymentStatus: 'Approved Full Payment' }), false);
});

test('applyMockPayment updates only the attendee-facing payment state', () => {
  const paid = applyMockPayment({
    paymentStatus: 'Pending Finance Review',
    paymentAmount: 'RM 500',
    paymentReference: 'BANKIN-DEMO-001',
  });

  assert.equal(paid.paymentStatus, 'Mock Payment Completed');
  assert.equal(paid.paymentReference, 'MOCK-PAYMENT');
  assert.equal(paid.paymentNote, 'Mock payment only. Finance approval still needs admin verification.');
});

test('isAlreadyCheckedIn detects completed check-in records without locking edits', () => {
  assert.equal(isAlreadyCheckedIn({ checkedInAt: '2026-06-11T00:18:25.396Z' }), true);
  assert.equal(isAlreadyCheckedIn({ checkedInAt: '' }), false);
  assert.equal(isAlreadyCheckedIn({}), false);
});
