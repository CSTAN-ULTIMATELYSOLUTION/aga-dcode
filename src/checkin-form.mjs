const requiredCheckinFields = [
  ['phone', 'Phone number'],
  ['fullName', 'Full name'],
  ['icOrPassport', 'IC / Passport'],
  ['eInvoiceName', 'E-invoice name'],
  ['eInvoiceTin', 'TIN'],
  ['eInvoiceIdType', 'ID type'],
  ['eInvoiceIdNo', 'ID number'],
  ['eInvoiceAddress', 'Address'],
  ['eInvoiceEmail', 'E-invoice email'],
];

export function getMissingCheckinFields(form = {}) {
  return requiredCheckinFields
    .filter(([field]) => !String(form[field] ?? '').trim())
    .map(([, label]) => label);
}

export function isCheckinFormReady(form = {}) {
  return getMissingCheckinFields(form).length === 0;
}

export function shouldShowMockPayButton(form = {}) {
  const status = String(form.paymentStatus || '').toLowerCase();
  return !status.includes('approved') && !status.includes('completed');
}

export function applyMockPayment(form = {}) {
  return {
    ...form,
    paymentStatus: 'Mock Payment Completed',
    paymentAmount: form.paymentAmount || 'RM 0',
    paymentReference: 'MOCK-PAYMENT',
    paymentNote: 'Mock payment only. Finance approval still needs admin verification.',
  };
}
