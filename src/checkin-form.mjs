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
