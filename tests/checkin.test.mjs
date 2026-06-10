import test from 'node:test';
import assert from 'node:assert/strict';

import {
  ATTENDEE_FIELDS,
  buildAttendeeResponse,
  buildCheckinUpsert,
  normalizePhone,
  validateCheckinPayload,
} from '../api/_checkin-core.mjs';

test('normalizePhone keeps Malaysian local phone numbers searchable', () => {
  assert.equal(normalizePhone('012-555 0138'), '60125550138');
  assert.equal(normalizePhone('+60 12 555 0138'), '60125550138');
});

test('validateCheckinPayload requires basic and e-invoice fields before check-in', () => {
  const result = validateCheckinPayload({
    cohortCode: 'CP138',
    phone: '012-555 0138',
    fullName: 'Tan Mei Xin',
    icOrPassport: 'A1234567',
    eInvoiceName: 'Tan Mei Xin',
    eInvoiceTin: '',
    eInvoiceIdType: 'NRIC',
    eInvoiceIdNo: 'A1234567',
    eInvoiceAddress: 'Kuala Lumpur',
    eInvoiceEmail: 'mei@example.com',
  });

  assert.equal(result.valid, false);
  assert.deepEqual(result.errors, {
    eInvoiceTin: 'E-invoice TIN is required.',
  });
});

test('buildCheckinUpsert writes attendee fields and preserves admin-only payment fields', () => {
  const now = '2026-06-10T12:00:00.000Z';
  const row = buildCheckinUpsert(
    {
      cohortCode: 'CP138',
      phone: '012-555 0138',
      fullName: 'Tan Mei Xin',
      englishName: 'Mei Xin Tan',
      chineseName: '陈美欣',
      email: 'mei@example.com',
      icOrPassport: 'A1234567',
      dateOfBirth: '1999-02-03',
      gender: 'Female',
      eInvoiceName: 'Tan Mei Xin',
      eInvoiceTin: 'C1234567890',
      eInvoiceIdType: 'NRIC',
      eInvoiceIdNo: 'A1234567',
      eInvoiceAddress: 'Kuala Lumpur',
      eInvoiceEmail: 'einvoice@example.com',
      paymentStatus: 'Approved Full Payment',
      paymentAmount: 'RM 9999',
    },
    now
  );

  assert.equal(row.normalized_phone, '60125550138');
  assert.equal(row.full_name, 'Tan Mei Xin');
  assert.equal(row.checked_in_at, now);
  assert.equal(row.info_completed_at, now);
  assert.equal(Object.hasOwn(row, 'payment_status'), false);
  assert.equal(Object.hasOwn(row, 'payment_amount'), false);
});

test('buildAttendeeResponse exposes only attendee-safe fields', () => {
  const response = buildAttendeeResponse({
    id: 'abc',
    cohort_code: 'CP138',
    phone: '012-555 0138',
    full_name: 'Tan Mei Xin',
    payment_status: 'Approved Deposit',
    service_role_secret: 'never',
    internal_note: 'admin only',
  });

  assert.deepEqual(Object.keys(response).sort(), [...ATTENDEE_FIELDS].sort());
  assert.equal(response.paymentStatus, 'Approved Deposit');
  assert.equal(response.service_role_secret, undefined);
  assert.equal(response.internal_note, undefined);
});
