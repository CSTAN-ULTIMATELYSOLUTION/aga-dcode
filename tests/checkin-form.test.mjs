import test from 'node:test';
import assert from 'node:assert/strict';

import { getMissingCheckinFields, isCheckinFormReady } from '../src/checkin-form.mjs';

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
