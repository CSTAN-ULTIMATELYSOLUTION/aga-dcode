export const ATTENDEE_FIELDS = [
  'id',
  'cohortCode',
  'phone',
  'normalizedPhone',
  'fullName',
  'englishName',
  'chineseName',
  'email',
  'icOrPassport',
  'dateOfBirth',
  'gender',
  'eInvoiceName',
  'eInvoiceTin',
  'eInvoiceIdType',
  'eInvoiceIdNo',
  'eInvoiceAddress',
  'eInvoiceEmail',
  'paymentStatus',
  'paymentAmount',
  'paymentReference',
  'paymentNote',
  'infoCompletedAt',
  'checkedInAt',
];

const attendeeToColumn = {
  cohortCode: 'cohort_code',
  phone: 'phone',
  normalizedPhone: 'normalized_phone',
  fullName: 'full_name',
  englishName: 'english_name',
  chineseName: 'chinese_name',
  email: 'email',
  icOrPassport: 'ic_or_passport',
  dateOfBirth: 'date_of_birth',
  gender: 'gender',
  eInvoiceName: 'e_invoice_name',
  eInvoiceTin: 'e_invoice_tin',
  eInvoiceIdType: 'e_invoice_id_type',
  eInvoiceIdNo: 'e_invoice_id_no',
  eInvoiceAddress: 'e_invoice_address',
  eInvoiceEmail: 'e_invoice_email',
  paymentStatus: 'payment_status',
  paymentAmount: 'payment_amount',
  paymentReference: 'payment_reference',
  paymentNote: 'payment_note',
  infoCompletedAt: 'info_completed_at',
  checkedInAt: 'checked_in_at',
};

const editableColumns = {
  cohortCode: 'cohort_code',
  phone: 'phone',
  normalizedPhone: 'normalized_phone',
  fullName: 'full_name',
  englishName: 'english_name',
  chineseName: 'chinese_name',
  email: 'email',
  icOrPassport: 'ic_or_passport',
  dateOfBirth: 'date_of_birth',
  gender: 'gender',
  eInvoiceName: 'e_invoice_name',
  eInvoiceTin: 'e_invoice_tin',
  eInvoiceIdType: 'e_invoice_id_type',
  eInvoiceIdNo: 'e_invoice_id_no',
  eInvoiceAddress: 'e_invoice_address',
  eInvoiceEmail: 'e_invoice_email',
};

const requiredFields = [
  ['cohortCode', 'Cohort code is required.'],
  ['phone', 'Phone number is required.'],
  ['fullName', 'Full name is required.'],
  ['icOrPassport', 'IC or passport is required.'],
  ['eInvoiceName', 'E-invoice name is required.'],
  ['eInvoiceTin', 'E-invoice TIN is required.'],
  ['eInvoiceIdType', 'E-invoice ID type is required.'],
  ['eInvoiceIdNo', 'E-invoice ID number is required.'],
  ['eInvoiceAddress', 'E-invoice address is required.'],
  ['eInvoiceEmail', 'E-invoice email is required.'],
];

function clean(value) {
  return String(value ?? '').trim();
}

function hasSupabaseEnv() {
  return Boolean(clean(process.env.SUPABASE_URL) && clean(process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SERVICE_KEY));
}

function isLocalHost(host = '') {
  return /^(localhost|127\.0\.0\.1|\[::1\])(?::\d+)?$/i.test(clean(host));
}

function requireEnv() {
  const supabaseUrl = clean(process.env.SUPABASE_URL).replace(/\/+$/, '');
  const serviceRoleKey = clean(process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SERVICE_KEY);
  if (!supabaseUrl || !serviceRoleKey) {
    const error = new Error('Supabase is not configured. Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in Vercel.');
    error.statusCode = 503;
    throw error;
  }
  return { supabaseUrl, serviceRoleKey };
}

const localDemoRows = new Map();

function seedLocalDemoRows() {
  if (localDemoRows.size) return;
  const row = {
    id: 'local-demo-cp138-tan-mei-xin',
    cohort_code: 'CP138',
    phone: '012-555 0138',
    normalized_phone: '60125550138',
    full_name: 'Tan Mei Xin',
    english_name: 'Mei Xin Tan',
    chinese_name: 'Chen Mei Xin',
    email: 'mei@example.com',
    ic_or_passport: 'A1234567',
    date_of_birth: '1999-02-03',
    gender: 'Female',
    e_invoice_name: 'Tan Mei Xin',
    e_invoice_tin: 'C1234567890',
    e_invoice_id_type: 'NRIC',
    e_invoice_id_no: 'A1234567',
    e_invoice_address: 'Dcode KL Center, Kuala Lumpur',
    e_invoice_email: 'einvoice@example.com',
    payment_status: 'Approved Full Payment',
    payment_amount: 'RM 3,600',
    payment_reference: 'BANKIN-S2599000',
    payment_note: 'Demo local record. Finance fields are read-only.',
    info_completed_at: null,
    checked_in_at: null,
  };
  localDemoRows.set(`${row.cohort_code}:${row.normalized_phone}`, row);
}

export function normalizePhone(phone) {
  const digits = clean(phone).replace(/\D/g, '');
  if (!digits) return '';
  if (digits.startsWith('0')) return `60${digits.slice(1)}`;
  if (digits.startsWith('60')) return digits;
  return digits;
}

export function validateCheckinPayload(payload = {}) {
  const errors = {};
  for (const [field, message] of requiredFields) {
    if (!clean(payload[field])) errors[field] = message;
  }
  if (clean(payload.phone) && !normalizePhone(payload.phone)) {
    errors.phone = 'Please enter a valid phone number.';
  }
  if (clean(payload.email) && !clean(payload.email).includes('@')) {
    errors.email = 'Please enter a valid email address.';
  }
  if (clean(payload.eInvoiceEmail) && !clean(payload.eInvoiceEmail).includes('@')) {
    errors.eInvoiceEmail = 'Please enter a valid e-invoice email address.';
  }
  return { valid: Object.keys(errors).length === 0, errors };
}

export function buildCheckinUpsert(payload = {}, now = new Date().toISOString()) {
  const row = {};
  const normalizedPhone = normalizePhone(payload.phone);
  for (const [field, column] of Object.entries(editableColumns)) {
    const value = field === 'normalizedPhone' ? normalizedPhone : clean(payload[field]);
    row[column] = value || null;
  }
  row.cohort_code = clean(payload.cohortCode).toUpperCase();
  row.phone = clean(payload.phone);
  row.normalized_phone = normalizedPhone;
  row.info_completed_at = now;
  row.checked_in_at = now;
  row.updated_at = now;
  return row;
}

export function buildAttendeeResponse(row = null) {
  const response = {};
  for (const field of ATTENDEE_FIELDS) {
    if (field === 'id') {
      response[field] = row?.id ?? null;
    } else {
      response[field] = row?.[attendeeToColumn[field]] ?? null;
    }
  }
  return response;
}

export async function getLocalDemoCheckinRecord({ cohortCode, phone }) {
  seedLocalDemoRows();
  const key = `${clean(cohortCode).toUpperCase()}:${normalizePhone(phone)}`;
  return localDemoRows.get(key) || null;
}

export async function saveLocalDemoCheckinRecord(payload = {}) {
  seedLocalDemoRows();
  const validation = validateCheckinPayload(payload);
  if (!validation.valid) {
    const error = new Error('Please complete required information before check-in.');
    error.statusCode = 422;
    error.errors = validation.errors;
    throw error;
  }
  const key = `${clean(payload.cohortCode).toUpperCase()}:${normalizePhone(payload.phone)}`;
  const existing = localDemoRows.get(key) || {};
  const saved = {
    ...existing,
    ...buildCheckinUpsert(payload),
    id: existing.id || `local-demo-${Date.now()}`,
    payment_status: existing.payment_status || 'unknown',
    payment_amount: existing.payment_amount || null,
    payment_reference: existing.payment_reference || null,
    payment_note: existing.payment_note || 'Local demo record. Finance will update payment details separately.',
    created_at: existing.created_at || new Date().toISOString(),
  };
  localDemoRows.set(key, saved);
  return saved;
}

function sendJson(response, status, payload) {
  if (typeof response.status === 'function' && typeof response.json === 'function') {
    response.status(status).json(payload);
    return;
  }
  response.writeHead(status, {
    'content-type': 'application/json',
    'access-control-allow-origin': '*',
    'access-control-allow-methods': 'GET,POST,OPTIONS',
    'access-control-allow-headers': 'content-type',
  });
  response.end(JSON.stringify(payload));
}

function readBody(request) {
  if (request.body && typeof request.body === 'object') return Promise.resolve(request.body);
  return new Promise((resolve, reject) => {
    let body = '';
    request.on('data', (chunk) => {
      body += chunk;
    });
    request.on('end', () => {
      if (!body) {
        resolve({});
        return;
      }
      try {
        resolve(JSON.parse(body));
      } catch (error) {
        reject(error);
      }
    });
  });
}

function supabaseHeaders(serviceRoleKey, extra = {}) {
  return {
    apikey: serviceRoleKey,
    authorization: `Bearer ${serviceRoleKey}`,
    'content-type': 'application/json',
    ...extra,
  };
}

async function supabaseRequest(path, options = {}) {
  const { supabaseUrl, serviceRoleKey } = requireEnv();
  const response = await fetch(`${supabaseUrl}/rest/v1/${path}`, {
    ...options,
    headers: supabaseHeaders(serviceRoleKey, options.headers),
  });
  const text = await response.text();
  const payload = text ? JSON.parse(text) : null;
  if (!response.ok) {
    const error = new Error(payload?.message || 'Supabase request failed.');
    error.statusCode = response.status;
    error.details = payload;
    throw error;
  }
  return payload;
}

export async function getCheckinRecord({ cohortCode, phone }) {
  const normalizedPhone = normalizePhone(phone);
  if (!clean(cohortCode) || !normalizedPhone) {
    const error = new Error('Cohort code and phone number are required.');
    error.statusCode = 400;
    throw error;
  }
  const query = new URLSearchParams({
    select: 'id,cohort_code,phone,normalized_phone,full_name,english_name,chinese_name,email,ic_or_passport,date_of_birth,gender,e_invoice_name,e_invoice_tin,e_invoice_id_type,e_invoice_id_no,e_invoice_address,e_invoice_email,payment_status,payment_amount,payment_reference,payment_note,info_completed_at,checked_in_at',
    cohort_code: `eq.${clean(cohortCode).toUpperCase()}`,
    normalized_phone: `eq.${normalizedPhone}`,
    limit: '1',
  });
  const rows = await supabaseRequest(`person_checkins?${query}`);
  return rows?.[0] || null;
}

export async function saveCheckinRecord(payload = {}) {
  const validation = validateCheckinPayload(payload);
  if (!validation.valid) {
    const error = new Error('Please complete required information before check-in.');
    error.statusCode = 422;
    error.errors = validation.errors;
    throw error;
  }
  const query = new URLSearchParams({
    on_conflict: 'normalized_phone',
    select: 'id,cohort_code,phone,normalized_phone,full_name,english_name,chinese_name,email,ic_or_passport,date_of_birth,gender,e_invoice_name,e_invoice_tin,e_invoice_id_type,e_invoice_id_no,e_invoice_address,e_invoice_email,payment_status,payment_amount,payment_reference,payment_note,info_completed_at,checked_in_at',
  });
  const rows = await supabaseRequest(`person_checkins?${query}`, {
    method: 'POST',
    headers: { prefer: 'resolution=merge-duplicates,return=representation' },
    body: JSON.stringify(buildCheckinUpsert(payload)),
  });
  return rows?.[0] || null;
}

export async function handleCheckinRequest(request, response) {
  if (request.method === 'OPTIONS') {
    sendJson(response, 200, { ok: true });
    return;
  }
  try {
    const url = new URL(request.url, `http://${request.headers.host || 'localhost'}`);
    const useLocalDemo = !hasSupabaseEnv() && isLocalHost(request.headers.host);
    if (request.method === 'GET') {
      const lookup = {
        cohortCode: url.searchParams.get('cohortCode'),
        phone: url.searchParams.get('phone'),
      };
      const row = useLocalDemo ? await getLocalDemoCheckinRecord(lookup) : await getCheckinRecord(lookup);
      sendJson(response, 200, { found: Boolean(row), person: buildAttendeeResponse(row) });
      return;
    }
    if (request.method === 'POST') {
      const body = await readBody(request);
      const row = useLocalDemo ? await saveLocalDemoCheckinRecord(body) : await saveCheckinRecord(body);
      sendJson(response, 200, { ok: true, person: buildAttendeeResponse(row) });
      return;
    }
    sendJson(response, 405, { error: 'Method not allowed.' });
  } catch (error) {
    sendJson(response, error.statusCode || 500, {
      error: error.message,
      errors: error.errors,
      details: error.details,
    });
  }
}
