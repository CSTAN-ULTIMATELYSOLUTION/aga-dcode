import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import QRCode from 'qrcode';
import { getAdminCredentials, validateAdminLogin } from './auth.mjs';
import {
  applyMockPayment,
  getMissingCheckinFields,
  isAlreadyCheckedIn,
  isCheckinFormReady,
  shouldShowMockPayButton,
} from './checkin-form.mjs';
import {
  AlertCircle,
  ArrowRight,
  BadgeCheck,
  Bell,
  BookOpenCheck,
  Building2,
  CalendarDays,
  ChevronDown,
  ClipboardCheck,
  Clock3,
  DatabaseZap,
  FileBarChart,
  FileText,
  GraduationCap,
  LayoutDashboard,
  Lock,
  Menu,
  PanelLeftClose,
  Receipt,
  RefreshCw,
  Search,
  Settings2,
  ShieldCheck,
  Smartphone,
  Users,
  WalletCards,
} from 'lucide-react';
import './styles.css';

const storageKey = 'dcode-demo-state-v6';
const authStorageKey = 'dcode-admin-auth-v1';

const navItems = [
  { label: 'Dashboard', icon: LayoutDashboard, active: true },
  { label: 'CRM', page: 'CRM', icon: Users, children: [{ label: 'Person', page: 'Person' }, { label: 'Students', page: 'Students' }, { label: 'Coaches', page: 'Coaches' }, { label: 'Backlog', page: 'Backlog' }] },
  { label: 'Registrations', icon: FileText },
  { label: 'Classes & Cohorts', icon: GraduationCap, children: ['DOE', 'Hall Utilization'] },
  { label: 'Finance', icon: WalletCards, children: ['Payments', 'Transfers', 'Adjustments'] },
  { label: 'Reports', icon: FileBarChart },
  {
    label: 'Governance',
    icon: Settings2,
    expanded: true,
    children: ['Lifecycle Events', 'Schema Requests', 'Permissions', 'Audit Log', 'AGA-only Lark Mapping'],
  },
];

const initialColumns = [
  {
    key: 'registered',
    label: 'Registered',
    tone: 'slate',
    students: [
      { id: 'S2505128', name: 'Aisyah Binti Rahman', status: '19 May 2026' },
      { id: 'S2505142', name: 'Muhammad Hariz', status: '19 May 2026' },
      { id: 'S2505150', name: 'Lim Jia Wen', status: '18 May 2026' },
      { id: 'S2505156', name: 'Nurul Izzati', status: '18 May 2026' },
      { id: 'S2505162', name: 'Daniel Wong', status: '17 May 2026' },
    ],
    hidden: 20,
  },
  {
    key: 'paid',
    label: 'Fully Paid',
    tone: 'green',
    students: [
      { id: 'S2505031', name: 'Luqman Hakim', status: '18 May 2026' },
      { id: 'S2505044', name: 'Tham Yu Xuan', status: '18 May 2026' },
      { id: 'S2505078', name: 'Farah Nadia', status: '17 May 2026' },
      { id: 'S2505089', name: 'Rajesh Kumar', status: '16 May 2026' },
      { id: 'S2505095', name: 'Lee Chen Jie', status: '16 May 2026' },
    ],
    hidden: 13,
  },
  {
    key: 'basic',
    label: 'Basic Class',
    tone: 'blue',
    students: [
      { id: 'S2505003', name: 'Wong Zi Le', status: 'Started 12 May 2026' },
      { id: 'S2505007', name: 'Ng Kai Sheng', status: 'Started 12 May 2026' },
      { id: 'S2505012', name: 'Aiman Hakimi', status: 'Started 12 May 2026' },
      { id: 'S2505016', name: 'Chan Wei Xian', status: 'Started 12 May 2026' },
      { id: 'S2505023', name: 'Tan Jie Rou', status: 'Started 12 May 2026' },
    ],
    hidden: 27,
  },
  {
    key: 'advanced1',
    label: 'Advanced Phase 1',
    tone: 'indigo',
    students: [
      { id: 'S2504987', name: 'Cheah Jun Yi', status: 'Started 5 May 2026' },
      { id: 'S2504991', name: 'Yap Li Wen', status: 'Started 5 May 2026' },
      { id: 'S2504998', name: 'Dev Sharma', status: 'Started 5 May 2026' },
      { id: 'S2505000', name: 'Nur Syazwani', status: 'Started 5 May 2026' },
      { id: 'S2505008', name: 'Ong Zhi Qiang', status: 'Started 5 May 2026' },
    ],
    hidden: 22,
  },
  {
    key: 'advanced2',
    label: 'Advanced Phase 2 / DOE',
    tone: 'purple',
    students: [
      { id: 'S2504956', name: 'Alia Natasha', status: 'DOE Pending' },
      { id: 'S2504961', name: 'Muhammad Danish', status: 'DOE Pending' },
      { id: 'S2504988', name: 'Khoo Ying Xuan', status: 'DOE Pending' },
      { id: 'S2504972', name: 'Ho Kar Ming', status: 'DOE Pending' },
      { id: 'S2504979', name: 'Siti Amani', status: 'DOE Pending' },
    ],
    hidden: 11,
  },
  {
    key: 'backlog',
    label: 'Backlog',
    tone: 'orange',
    students: [
      { id: 'S2504877', name: 'Jared Lim', status: 'Overdue 12 May' },
      { id: 'S2504884', name: 'Nurul Huda', status: 'Overdue 10 May' },
      { id: 'S2504891', name: 'Karthik Raman', status: 'Overdue 9 May' },
      { id: 'S2504897', name: 'Wong Ee Lin', status: 'Overdue 7 May' },
      { id: 'S2504903', name: 'Tan Wei Sheng', status: 'Overdue 6 May' },
    ],
    hidden: 7,
  },
];

const initialHalls = [
  { name: 'Hall A', cap: 40, usage: 90, schedule: '7 / 8 slots' },
  { name: 'Hall B', cap: 30, usage: 67, schedule: '4 / 6 slots' },
  { name: 'Lab 1', cap: 24, usage: 83, schedule: '5 / 6 slots' },
  { name: 'Lab 2', cap: 24, usage: 71, schedule: '5 / 7 slots' },
  { name: 'Training Room 1', cap: 12, usage: 58, schedule: '7 / 12 slots' },
  { name: 'Training Room 2', cap: 12, usage: 33, schedule: '4 / 12 slots' },
  { name: 'Discussion Room', cap: 8, usage: 50, schedule: '3 / 6 slots' },
  { name: 'Auditorium', cap: 80, usage: 75, schedule: '3 / 4 slots' },
];

const teachers = [
  ['Dr. Ivan Tan', 'CP138 - Basic Class', 'In Progress', 'green'],
  ['Puan Nurul Izzati', 'CP138 - Adv Phase 1', 'In Progress', 'green'],
  ['Mr. Viknesh Kumar', 'CP138 - Adv Phase 2', 'DOE Pending', 'amber'],
  ['Ms. Lee Mei Wen', 'CP137 - Basic Class', 'In Progress', 'green'],
  ['Mr. Daniel Lim', 'CP139 - Basic Class', 'No Class', 'gray'],
];

const initialActivities = [
  ['Invoice INV-2505-1024 paid by Aisyah Binti Rahman', '20 May 2026, 09:58 AM'],
  ['DOE received for S2504987 - Cheah Jun Yi', '20 May 2026, 09:31 AM'],
  ['New registration S2505168 - Ahmad Danish', '20 May 2026, 09:15 AM'],
  ['Class CP138 - Advanced Phase 1 session updated', '20 May 2026, 08:47 AM'],
  ['Payment reminder sent to 12 students', '20 May 2026, 08:30 AM'],
];

const initialTasks = [
  ['Verify payments for 38 invoices', '20 May 2026'],
  ['Follow up DOE for 24 students', '21 May 2026'],
  ['Resolve 16 backlog cases', '22 May 2026'],
  ['Update hall schedule for next week', '23 May 2026'],
];

const initialObjectLogs = [
  {
    id: 'LOG-001',
    objectId: 'S2505128',
    objectType: 'Student',
    action: 'Registered',
    actor: 'Call Center',
    at: '20 May 2026, 09:15 AM',
    detail: 'Registration received and attached to CP138.',
  },
  {
    id: 'LOG-002',
    objectId: 'INV-2505-1024',
    objectType: 'Payment',
    action: 'Verified',
    actor: 'Finance Staff',
    at: '20 May 2026, 09:58 AM',
    detail: 'Payment evidence matched bank-in reference.',
  },
  {
    id: 'LOG-003',
    objectId: 'CP138',
    objectType: 'Cohort',
    action: 'Class session updated',
    actor: 'Dcode Admin',
    at: '20 May 2026, 08:47 AM',
    detail: 'Advanced Phase 1 class timing confirmed.',
  },
  {
    id: 'LOG-004',
    objectId: 'S2504987',
    objectType: 'DOE',
    action: 'DOE received',
    actor: 'Student Portal',
    at: '20 May 2026, 09:31 AM',
    detail: 'DOE submission synced into cohort record.',
  },
];

const newClassSeed = {
  cohort: 'CP138',
  program: 'Certificate in Data Analytics',
  venue: 'Dcode KL Center',
  hall: 'Hall A',
  capacity: 40,
  teacher: 'Dr. Ivan Tan',
  coaches: ['Luqman Hakim', 'Farah Nadia', 'Rajesh Kumar', 'Lee Chen Jie'],
  registrationLink: 'lark.form/dcode-cp138',
  doeStart: 'Advanced Phase 2',
};

const pageDefinitions = {
  Dashboard: {
    title: 'Dashboard',
    description: 'Live operating board for cohort movement, finance gate, DOE, backlog, and halls.',
  },
  Persons: {
    title: 'CRM',
    description: 'Person identity with student, coach, and backlog roles linked together.',
  },
  CRM: {
    title: 'CRM',
    description: 'Person identity with student, coach, and backlog roles linked together.',
  },
  Person: {
    title: 'Person',
    description: 'Basic identity records before student, coach, and backlog roles.',
  },
  Students: {
    title: 'Students',
    description: 'Canonical student records, current status, cohort, payment, DOE, and backlog signal.',
  },
  Coaches: {
    title: 'Coaches',
    description: 'Coach role records under Persons, linked to graduate eligibility and assignments.',
  },
  Backlog: {
    title: 'Backlog',
    description: 'Backlog as person/student lifecycle cases, not separated spreadsheet truth.',
  },
  Registrations: {
    title: 'Registrations',
    description: 'Student intake records linked to cohort, payment plan, and verification.',
  },
  'Classes & Cohorts': {
    title: 'Classes & Cohorts',
    description: 'Class batches, phases, coach assignment, DOE, halls, and class sessions.',
  },
  DOE: {
    title: 'DOE',
    description: 'DOE records inside cohorts and phases, linked back to student participation.',
  },
  'Hall Utilization': {
    title: 'Hall Utilization',
    description: 'Venue and hall usage across scheduled class sessions.',
  },
  'Lifecycle Events': {
    title: 'Lifecycle Events',
    description: 'Every status change from registration to graduation, backlog, transfer, and coach eligibility.',
  },
  Finance: {
    title: 'Finance',
    description: 'Finance-owned payment truth, verification queue, transfers, and adjustments.',
  },
  Payments: {
    title: 'Payments',
    description: 'Payment evidence and verification records controlling class-entry eligibility.',
  },
  Transfers: {
    title: 'Transfers',
    description: 'Transfer payment and transfer seat cases.',
  },
  Adjustments: {
    title: 'Adjustments',
    description: 'Refunds, discounts, corrections, and approved manual finance changes.',
  },
  Reports: {
    title: 'Reports',
    description: 'Approved report definitions and inclusion rules, replacing uncontrolled final masterlists.',
  },
  Governance: {
    title: 'Governance',
    description: 'Schema requests, permissions, audit log, and AGA-only migration controls.',
  },
  'Schema Requests': {
    title: 'Schema Requests',
    description: 'AGA-controlled requests for new fields, statuses, reports, and source changes.',
  },
  Permissions: {
    title: 'Permissions',
    description: 'Who can view, edit, approve, or audit each canonical object.',
  },
  'Audit Log': {
    title: 'Audit Log',
    description: 'Trace important operational and schema changes.',
  },
  'AGA-only Lark Mapping': {
    title: 'AGA-only Lark Mapping',
    description: 'Hidden migration layer for raw Lark Bases, tables, fields, records, and mappings.',
  },
};

const studentRelationshipSeed = {
  S2505128: {
    doe: 'Not started',
    liveCohort: 'Registered for CP138',
    enrollments: ['CP136 Basic - Completed', 'CP137 Advanced Phase 1 - Dropped', 'CP138 Registered - Live'],
    finance: ['INV-2505-1024 - RM 3,600 - Verified'],
    coach: 'Not eligible yet',
  },
  S2505031: {
    doe: 'Not required yet',
    liveCohort: 'CP138 Fully Paid',
    enrollments: ['CP135 Basic - Completed', 'CP136 Advanced - Graduated', 'CP138 Coach Assignment - Live'],
    finance: ['INV-2505-1003 - RM 3,600 - Verified'],
    coach: 'Coach C-001, linked from graduated student S2505031',
  },
  S2504987: {
    doe: 'Submitted',
    liveCohort: 'CP138 Advanced Phase 1',
    enrollments: ['CP136 Basic - Completed', 'CP137 Advanced Phase 1 - Completed', 'CP138 Advanced Phase 1 - Live'],
    finance: ['INV-2505-0987 - RM 3,600 - Verified'],
    coach: 'Future coach candidate after graduation',
  },
  S2504956: {
    doe: 'DOE Pending',
    liveCohort: 'CP138 Advanced Phase 2 / DOE',
    enrollments: ['CP136 Basic - Completed', 'CP137 Advanced Phase 1 - Completed', 'CP138 Advanced Phase 2 - Live'],
    finance: ['INV-2505-0956 - RM 3,600 - Verified'],
    coach: 'Not eligible until DOE and graduation complete',
  },
  S2504884: {
    doe: 'Not active',
    liveCohort: 'Backlog / Re-entry pending',
    enrollments: ['CP136 Basic - Completed', 'CP137 Advanced Phase 1 - Dropped'],
    finance: ['TRF-001 - RM 500 - Pending approval'],
    coach: 'Not eligible',
  },
};

const coachRelationshipSeed = {
  'C-001': { studentId: 'S2505031', name: 'Luqman Hakim', graduateFrom: 'CP136 Advanced', currentAssignment: 'CP138 Basic Class' },
  'C-002': { studentId: 'S2505078', name: 'Farah Nadia', graduateFrom: 'CP136 Advanced', currentAssignment: 'CP138 Advanced Phase 1' },
  'C-003': { studentId: 'S2505089', name: 'Rajesh Kumar', graduateFrom: 'CP136 Advanced', currentAssignment: 'CP138 Advanced Phase 2' },
  'C-004': { studentId: 'S2505095', name: 'Lee Chen Jie', graduateFrom: 'CP136 Advanced', currentAssignment: 'CP138 Backlog Follow-up' },
};

const financeRelationshipSeed = {
  'INV-2505-1024': { studentId: 'S2505128', registrationId: 'REG-S2505128', cohort: 'CP138', approval: 'Verified by Finance Staff', nextGate: 'Can enter Basic once full payment confirmed' },
  'INV-2505-1025': { studentId: 'S2505142', registrationId: 'REG-S2505142', cohort: 'CP138', approval: 'Pending finance verification', nextGate: 'Cannot enter Basic yet' },
  'INV-2505-1026': { studentId: 'S2505150', registrationId: 'REG-S2505150', cohort: 'CP138', approval: 'Pending finance verification', nextGate: 'Cannot enter Basic yet' },
  'PAY-001': { studentId: 'S2505128', registrationId: 'REG-S2505128', cohort: 'CP138', approval: 'Verified payment evidence', nextGate: 'Student is finance-cleared' },
  'PAY-002': { studentId: 'S2505142', registrationId: 'REG-S2505142', cohort: 'CP138', approval: 'Pending bank-in match', nextGate: 'Finance follow-up needed' },
  'TRF-001': { studentId: 'S2504884', registrationId: 'REG-S2504884', cohort: 'CP137', approval: 'Transfer approval pending', nextGate: 'Backlog double verification needed' },
  'TRF-2505-002': { studentId: 'S2504884', registrationId: 'REG-S2504884', cohort: 'CP137', approval: 'Transfer review', nextGate: 'Manager approval required' },
};

const approvalFlows = {
  verifyPayment: {
    label: 'Verify Payment',
    icon: Receipt,
    fromStage: 'registered',
    toStage: 'paid',
    status: 'Payment verified / Finance approved',
    requestedBy: 'Student Portal',
    approvedBy: 'Finance Staff',
    evidenceNote: 'Bank-in proof matched to registration invoice.',
    reason: 'finance clears class-entry gate',
  },
  startBasicClass: {
    label: 'Enter Basic',
    icon: BadgeCheck,
    fromStage: 'paid',
    toStage: 'basic',
    status: 'Basic Class entry approved',
    requestedBy: 'Call Center',
    approvedBy: 'Dcode Admin',
    evidenceNote: 'Finance clearance and student intention confirmed.',
    reason: 'admin pre-registers student into class',
  },
  moveToAdvanced: {
    label: 'Move Advanced',
    icon: ArrowRight,
    fromStage: 'basic',
    toStage: 'advanced1',
    status: 'Advanced Phase 1 approved by teacher',
    requestedBy: 'Teacher',
    approvedBy: 'Class Manager',
    evidenceNote: 'Basic class completion reviewed.',
    reason: 'teacher requests phase progression',
  },
  startDoe: {
    label: 'Start DOE',
    icon: BookOpenCheck,
    fromStage: 'advanced1',
    toStage: 'advanced2',
    status: 'DOE Pending',
    doeStatus: 'DOE Pending',
    requestedBy: 'Teacher',
    approvedBy: 'DOE Coordinator',
    evidenceNote: 'Advanced Phase 1 completion accepted for DOE phase.',
    reason: 'DOE owner opens submission queue',
  },
  submitDoe: {
    label: 'Submit DOE',
    icon: ClipboardCheck,
    fromStage: 'advanced2',
    toStage: 'advanced2',
    status: 'DOE Submitted',
    doeStatus: 'Submitted',
    requestedBy: 'Student Portal',
    approvedBy: 'Teacher',
    evidenceNote: 'DOE submission received and checked.',
    reason: 'teacher confirms DOE evidence',
  },
  resolveBacklog: {
    label: 'Backlog Re-entry',
    icon: Clock3,
    fromStage: 'backlog',
    toStage: 'registered',
    status: 'Backlog re-entry approved after double verification',
    requestedBy: 'Call Center',
    approvedBy: 'Manager',
    evidenceNote: 'Student contacted and re-entry reason verified.',
    reason: 'manager approves return to intake',
  },
};

function moveFirst(columns, fromKey, toKey, status, fallbackMessage) {
  const fromColumn = columns.find((column) => column.key === fromKey);
  if (!fromColumn || fromColumn.students.length === 0) {
    return { columns, message: fallbackMessage };
  }

  const [student, ...remaining] = fromColumn.students;
  const movedStudent = { ...student, status };

  return {
    columns: columns.map((column) => {
      if (column.key === fromKey) {
        return { ...column, students: remaining };
      }
      if (column.key === toKey) {
        return { ...column, students: [movedStudent, ...column.students] };
      }
      return column;
    }),
    message: `${student.id} ${student.name} moved to ${status}`,
  };
}

function readStoredDemoState() {
  if (typeof window === 'undefined') return {};
  try {
    return JSON.parse(window.localStorage.getItem(storageKey)) || {};
  } catch {
    return {};
  }
}

function readAdminSession() {
  if (typeof window === 'undefined') return false;
  return window.localStorage.getItem(authStorageKey) === 'signed-in';
}

async function fetchJson(url, options) {
  const response = await fetch(url, {
    headers: { 'content-type': 'application/json' },
    ...options,
  });
  if (!response.ok) throw new Error(await response.text());
  return response.json();
}

function getPublicRoute() {
  if (typeof window === 'undefined') return null;
  const [type, cohortCode] = window.location.pathname.split('/').filter(Boolean);
  if (type === 'checkin' || type === 'qr') {
    return {
      type,
      cohortCode: decodeURIComponent(cohortCode || 'CP138').trim().toUpperCase(),
    };
  }
  return null;
}

function emptyCheckinForm(cohortCode, phone = '') {
  return {
    cohortCode,
    phone,
    fullName: '',
    englishName: '',
    chineseName: '',
    email: '',
    icOrPassport: '',
    dateOfBirth: '',
    gender: '',
    jobTitle: '',
    companyName: '',
    industry: '',
    employmentStatus: '',
    workExperience: '',
    companyAddress: '',
    eInvoiceName: '',
    eInvoiceTin: '',
    eInvoiceIdType: 'NRIC',
    eInvoiceIdNo: '',
    eInvoiceAddress: '',
    eInvoiceEmail: '',
    paymentStatus: 'unknown',
    paymentAmount: '',
    paymentReference: '',
    paymentNote: '',
    checkedInAt: '',
  };
}

function personToCheckinForm(cohortCode, phone, person = {}) {
  return {
    ...emptyCheckinForm(cohortCode, phone),
    ...person,
    cohortCode: person.cohortCode || cohortCode,
    phone: person.phone || phone,
    dateOfBirth: person.dateOfBirth || '',
    gender: person.gender || '',
    eInvoiceIdType: person.eInvoiceIdType || 'NRIC',
  };
}

function formatCheckinTime(value) {
  if (!value) return '';
  try {
    return new Intl.DateTimeFormat('en-MY', {
      dateStyle: 'medium',
      timeStyle: 'short',
    }).format(new Date(value));
  } catch {
    return value;
  }
}

function fieldError(errors, field) {
  return errors?.[field] ? <small className="field-error">{errors[field]}</small> : null;
}

function CheckinPage({ cohortCode }) {
  const [phone, setPhone] = useState('');
  const [form, setForm] = useState(emptyCheckinForm(cohortCode));
  const [errors, setErrors] = useState({});
  const [notice, setNotice] = useState('Scan check-in ready. Enter your phone number to continue.');
  const [lookupState, setLookupState] = useState('idle');
  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState(null);

  async function findPerson(event) {
    event.preventDefault();
    setLookupState('loading');
    setErrors({});
    setSuccess(null);
    try {
      const result = await fetchJson(`/api/checkin?cohortCode=${encodeURIComponent(cohortCode)}&phone=${encodeURIComponent(phone)}`);
      const nextForm = personToCheckinForm(cohortCode, phone, result.person);
      setForm(nextForm);
      setLookupState(result.found ? 'found' : 'missing');
      if (result.found && isAlreadyCheckedIn(nextForm)) {
        setNotice(`Already checked in at ${formatCheckinTime(nextForm.checkedInAt)}. You can still edit the information below if needed.`);
      } else {
        setNotice(result.found ? 'Please check your information before check-in.' : 'We could not find complete info. Fill this before check-in.');
      }
    } catch (error) {
      setLookupState('error');
      setNotice(`Lookup failed: ${error.message}`);
    }
  }

  function updateForm(field, value) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  async function submitCheckin(event) {
    event.preventDefault();
    setSaving(true);
    setErrors({});
    setSuccess(null);
    try {
      const result = await fetchJson('/api/checkin', {
        method: 'POST',
        body: JSON.stringify(form),
      });
      setForm(personToCheckinForm(cohortCode, form.phone, result.person));
      setSuccess(result.person);
      setNotice('Check-in confirmed.');
    } catch (error) {
      try {
        const payload = JSON.parse(error.message);
        setErrors(payload.errors || {});
        setNotice(payload.error || 'Please complete required information before check-in.');
      } catch {
        setNotice(`Check-in failed: ${error.message}`);
      }
    } finally {
      setSaving(false);
    }
  }

  const alreadyCheckedIn = isAlreadyCheckedIn(form);
  const showSuccess = Boolean(success);
  const showForm = !showSuccess && (lookupState === 'found' || lookupState === 'missing');
  const missingCheckinFields = getMissingCheckinFields(form);
  const canConfirmCheckin = isCheckinFormReady(form);
  const showMockPayButton = shouldShowMockPayButton(form);
  const paymentMeta = [
    form.paymentAmount,
    form.paymentReference,
    form.paymentNote,
  ].filter(Boolean).join(' / ');

  return (
    <main className="public-shell">
      <section className="checkin-panel">
        <div className="public-brand">
          <div>
            <span>DCODE</span>
            <strong>{cohortCode} Check-In</strong>
          </div>
          <Smartphone size={28} />
        </div>

        <div className="checkin-hero">
          <h1>Person Check-In</h1>
          <p>Enter your phone number, check your basic and e-invoice information, then confirm your arrival.</p>
        </div>

        <form className="phone-lookup" onSubmit={findPerson}>
          <label>
            Phone number
            <input
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              placeholder="012-555 0138"
              autoComplete="tel"
              required
            />
          </label>
          <button className="primary" type="submit" disabled={lookupState === 'loading'}>
            <Search size={16} />
            {lookupState === 'loading' ? 'Checking' : 'Find My Info'}
          </button>
        </form>

        <div className={`checkin-notice ${lookupState}`}>
          <BadgeCheck size={16} />
          <span>{notice}</span>
        </div>

        {showForm && (
          <form className="checkin-form" onSubmit={submitCheckin}>
            {alreadyCheckedIn && (
              <section className="already-checkin-card">
                <BadgeCheck size={22} />
                <div>
                  <h2>Already Checked In</h2>
                  <p>{form.fullName || 'This person'} checked in at {formatCheckinTime(form.checkedInAt)}.</p>
                  <p>You can edit the information below and confirm again to save the latest details.</p>
                </div>
              </section>
            )}

            <section>
              <h2>Basic Information</h2>
              <div className="form-grid">
                <label>
                  Full name
                  <input value={form.fullName || ''} onChange={(event) => updateForm('fullName', event.target.value)} required />
                  {fieldError(errors, 'fullName')}
                </label>
                <label>
                  English name
                  <input value={form.englishName || ''} onChange={(event) => updateForm('englishName', event.target.value)} />
                </label>
                <label>
                  Chinese name
                  <input value={form.chineseName || ''} onChange={(event) => updateForm('chineseName', event.target.value)} />
                </label>
                <label>
                  Email
                  <input type="email" value={form.email || ''} onChange={(event) => updateForm('email', event.target.value)} />
                  {fieldError(errors, 'email')}
                </label>
                <label>
                  IC / Passport
                  <input value={form.icOrPassport || ''} onChange={(event) => updateForm('icOrPassport', event.target.value)} required />
                  {fieldError(errors, 'icOrPassport')}
                </label>
                <label>
                  Date of birth
                  <input type="date" value={form.dateOfBirth || ''} onChange={(event) => updateForm('dateOfBirth', event.target.value)} />
                </label>
                <label>
                  Gender
                  <select value={form.gender || ''} onChange={(event) => updateForm('gender', event.target.value)}>
                    <option value="">Choose</option>
                    <option>Female</option>
                    <option>Male</option>
                    <option>Prefer not to say</option>
                  </select>
                </label>
              </div>
            </section>

            <section>
              <h2>Personal Job Information</h2>
              <div className="form-grid">
                <label>
                  Job title
                  <input value={form.jobTitle || ''} onChange={(event) => updateForm('jobTitle', event.target.value)} placeholder="Data analyst, founder, student..." />
                </label>
                <label>
                  Company name
                  <input value={form.companyName || ''} onChange={(event) => updateForm('companyName', event.target.value)} placeholder="Company or business name" />
                </label>
                <label>
                  Industry
                  <input value={form.industry || ''} onChange={(event) => updateForm('industry', event.target.value)} placeholder="Education, finance, retail..." />
                </label>
                <label>
                  Employment status
                  <select value={form.employmentStatus || ''} onChange={(event) => updateForm('employmentStatus', event.target.value)}>
                    <option value="">Choose</option>
                    <option>Full-time</option>
                    <option>Part-time</option>
                    <option>Self-employed</option>
                    <option>Business owner</option>
                    <option>Student</option>
                    <option>Not working</option>
                  </select>
                </label>
                <label>
                  Work experience
                  <input value={form.workExperience || ''} onChange={(event) => updateForm('workExperience', event.target.value)} placeholder="3 years" />
                </label>
                <label className="wide">
                  Company address
                  <textarea value={form.companyAddress || ''} onChange={(event) => updateForm('companyAddress', event.target.value)} placeholder="Office or business address" />
                </label>
              </div>
            </section>

            <section>
              <h2>E-Invoice Information</h2>
              <div className="form-grid">
                <label>
                  E-invoice name
                  <input value={form.eInvoiceName || ''} onChange={(event) => updateForm('eInvoiceName', event.target.value)} required />
                  {fieldError(errors, 'eInvoiceName')}
                </label>
                <label>
                  TIN
                  <input value={form.eInvoiceTin || ''} onChange={(event) => updateForm('eInvoiceTin', event.target.value)} required />
                  {fieldError(errors, 'eInvoiceTin')}
                </label>
                <label>
                  ID type
                  <select value={form.eInvoiceIdType || 'NRIC'} onChange={(event) => updateForm('eInvoiceIdType', event.target.value)} required>
                    <option>NRIC</option>
                    <option>Passport</option>
                    <option>Business Registration</option>
                  </select>
                  {fieldError(errors, 'eInvoiceIdType')}
                </label>
                <label>
                  ID number
                  <input value={form.eInvoiceIdNo || ''} onChange={(event) => updateForm('eInvoiceIdNo', event.target.value)} required />
                  {fieldError(errors, 'eInvoiceIdNo')}
                </label>
                <label className="wide">
                  Address
                  <textarea value={form.eInvoiceAddress || ''} onChange={(event) => updateForm('eInvoiceAddress', event.target.value)} required />
                  {fieldError(errors, 'eInvoiceAddress')}
                </label>
                <label>
                  E-invoice email
                  <input type="email" value={form.eInvoiceEmail || ''} onChange={(event) => updateForm('eInvoiceEmail', event.target.value)} required />
                  {fieldError(errors, 'eInvoiceEmail')}
                </label>
              </div>
            </section>

            <section className="payment-readonly">
              <h2>Payment Status</h2>
              <div className="payment-status-box">
                <div>
                  <strong>{form.paymentStatus || 'unknown'}</strong>
                  <span>{paymentMeta || 'Finance will update payment details separately.'}</span>
                </div>
                {showMockPayButton && (
                  <button
                    className="mock-pay-button"
                    type="button"
                    onClick={() => {
                      setForm((current) => applyMockPayment(current));
                      setNotice('Mock payment completed. Finance approval still needs admin verification.');
                    }}
                  >
                    <WalletCards size={16} />
                    Mock Pay Now
                  </button>
                )}
              </div>
            </section>

            {!canConfirmCheckin && (
              <div className="checkin-blocker">
                Complete before check-in: {missingCheckinFields.join(', ')}.
              </div>
            )}

            <button className="confirm-checkin" type="submit" disabled={saving || !canConfirmCheckin}>
              <ClipboardCheck size={18} />
              {saving ? 'Confirming' : 'Confirm & Check In'}
            </button>
          </form>
        )}

        {showSuccess && (
          <section className="success-card success-page">
            <div className="success-icon">
              <BadgeCheck size={36} />
            </div>
            <div className="success-content">
              <span>Check-in complete</span>
              <h2>Check-In Successful</h2>
              <p>{success.fullName || 'Attendee'} is checked in for {success.cohortCode || cohortCode}.</p>
              <dl>
                <div>
                  <dt>Name</dt>
                  <dd>{success.fullName || '-'}</dd>
                </div>
                <div>
                  <dt>Phone</dt>
                  <dd>{success.phone || '-'}</dd>
                </div>
                <div>
                  <dt>Check-in time</dt>
                  <dd>{formatCheckinTime(success.checkedInAt) || '-'}</dd>
                </div>
                <div>
                  <dt>Payment</dt>
                  <dd>{success.paymentStatus || 'unknown'}</dd>
                </div>
              </dl>
              <button className="edit-checkin-button" type="button" onClick={() => setSuccess(null)}>
                Edit Information
              </button>
            </div>
          </section>
        )}
      </section>
    </main>
  );
}

function QrPage({ cohortCode }) {
  const [qrDataUrl, setQrDataUrl] = useState('');
  const checkinUrl = useMemo(() => {
    if (typeof window === 'undefined') return `/checkin/${cohortCode}`;
    return `${window.location.origin}/checkin/${encodeURIComponent(cohortCode)}`;
  }, [cohortCode]);

  useEffect(() => {
    QRCode.toDataURL(checkinUrl, {
      width: 360,
      margin: 2,
      color: {
        dark: '#111827',
        light: '#ffffff',
      },
    }).then(setQrDataUrl);
  }, [checkinUrl]);

  return (
    <main className="public-shell qr-shell">
      <section className="qr-panel">
        <div className="public-brand">
          <div>
            <span>DCODE</span>
            <strong>{cohortCode} QR</strong>
          </div>
          <QrCodeIcon />
        </div>
        <h1>Scan To Check In</h1>
        <p>Manual cohort URL for this class. Print or display this QR at the registration counter.</p>
        <div className="qr-frame">
          {qrDataUrl ? <img src={qrDataUrl} alt={`${cohortCode} check-in QR code`} /> : <span>Generating QR</span>}
        </div>
        <a className="qr-url" href={checkinUrl}>{checkinUrl}</a>
        {qrDataUrl && (
          <a className="primary qr-download" href={qrDataUrl} download={`${cohortCode}-checkin-qr.png`}>
            Download QR
          </a>
        )}
      </section>
    </main>
  );
}

function QrCodeIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden="true">
      <path d="M4 4h8v8H4V4Zm3 3v2h2V7H7Zm11-3h8v8h-8V4Zm3 3v2h2V7h-2ZM4 18h8v8H4v-8Zm3 3v2h2v-2H7Zm13-3h2v3h4v2h-6v-5Zm-4 0h2v2h-2v-2Zm0 4h2v4h-2v-4Zm8 3h2v2h-2v-2Zm-4 0h2v2h-2v-2Z" fill="currentColor" />
    </svg>
  );
}

function AdminLoginPage({ onLogin }) {
  const [username, setUsername] = useState(getAdminCredentials(import.meta.env).username);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function submitLogin(event) {
    event.preventDefault();
    if (!validateAdminLogin({ username, password }, import.meta.env)) {
      setError('Login failed. Check username and password.');
      return;
    }
    window.localStorage.setItem(authStorageKey, 'signed-in');
    onLogin();
  }

  return (
    <main className="public-shell login-shell">
      <section className="login-panel">
        <div className="public-brand">
          <div>
            <span>DCODE</span>
            <strong>Local Admin Login</strong>
          </div>
          <ShieldCheck size={30} />
        </div>
        <div className="checkin-hero">
          <h1>Admin Portal Login</h1>
          <p>Sign in to open the localhost admin dashboard. QR check-in pages remain public for attendees.</p>
        </div>
        <form className="login-form" onSubmit={submitLogin}>
          <label>
            Username
            <input value={username} onChange={(event) => setUsername(event.target.value)} autoComplete="username" />
          </label>
          <label>
            Password
            <input value={password} onChange={(event) => setPassword(event.target.value)} type="password" autoComplete="current-password" autoFocus />
          </label>
          {error && <div className="login-error">{error}</div>}
          <button className="confirm-checkin" type="submit">
            <Lock size={18} />
            Login
          </button>
        </form>
        <div className="login-hint">
          Default localhost login: <strong>admin</strong> / <strong>dcode2026</strong>
        </div>
      </section>
    </main>
  );
}

function App() {
  const publicRoute = getPublicRoute();
  if (publicRoute?.type === 'checkin') {
    return <CheckinPage cohortCode={publicRoute.cohortCode} />;
  }
  if (publicRoute?.type === 'qr') {
    return <QrPage cohortCode={publicRoute.cohortCode} />;
  }

  const [isAdminSignedIn, setIsAdminSignedIn] = useState(readAdminSession);
  const storedDemoState = useMemo(() => readStoredDemoState(), []);
  const [selectedCohort, setSelectedCohort] = useState('CP138 - Certificate in Data Analytics');
  const [showSetup, setShowSetup] = useState(false);
  const [query, setQuery] = useState('');
  const [columns, setColumns] = useState(storedDemoState.columns || initialColumns);
  const [halls, setHalls] = useState(storedDemoState.halls || initialHalls);
  const [activities, setActivities] = useState(storedDemoState.activities || initialActivities);
  const [tasks, setTasks] = useState(storedDemoState.tasks || initialTasks);
  const [objectLogs, setObjectLogs] = useState(storedDemoState.objectLogs || initialObjectLogs);
  const [pageRows, setPageRows] = useState(storedDemoState.pageRows || {});
  const [cohortTree, setCohortTree] = useState(storedDemoState.cohortTree || []);
  const [hallSessions, setHallSessions] = useState(storedDemoState.hallSessions || []);
  const [classCalendar, setClassCalendar] = useState(storedDemoState.classCalendar || []);
  const [doeDashboard, setDoeDashboard] = useState(storedDemoState.doeDashboard || []);
  const [callCenterDashboard, setCallCenterDashboard] = useState(storedDemoState.callCenterDashboard || null);
  const [demoCycle, setDemoCycle] = useState(storedDemoState.demoCycle || null);
  const [relationships, setRelationships] = useState(storedDemoState.relationships || {
    students: studentRelationshipSeed,
    coaches: coachRelationshipSeed,
    finance: financeRelationshipSeed,
  });
  const [notice, setNotice] = useState('Demo is ready. Use shortcuts to move seeded records.');
  const [registrationSeq, setRegistrationSeq] = useState(storedDemoState.registrationSeq || 5169);
  const [activePage, setActivePage] = useState('Dashboard');
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [selectedHall, setSelectedHall] = useState(null);
  const [selectedSchedule, setSelectedSchedule] = useState(null);
  const [selectedDoePhase, setSelectedDoePhase] = useState(null);
  const [selectedRegistrationForm, setSelectedRegistrationForm] = useState(null);
  const [selectedApprovalFlow, setSelectedApprovalFlow] = useState(null);
  const [selectedCohortForm, setSelectedCohortForm] = useState(null);
  const [selectedClassForm, setSelectedClassForm] = useState(null);
  const [selectedCohortDetail, setSelectedCohortDetail] = useState(null);

  useEffect(() => {
    window.localStorage.setItem(
      storageKey,
      JSON.stringify({ columns, halls, activities, tasks, objectLogs, pageRows, cohortTree, hallSessions, classCalendar, doeDashboard, callCenterDashboard, demoCycle, relationships, registrationSeq })
    );
  }, [columns, halls, activities, tasks, objectLogs, pageRows, cohortTree, hallSessions, classCalendar, doeDashboard, callCenterDashboard, demoCycle, relationships, registrationSeq]);

  useEffect(() => {
    if (isAdminSignedIn) refreshFromDatabase();
  }, [isAdminSignedIn]);

  function applyServerState(state) {
    setColumns(state.columns);
    setHalls(state.halls);
    setActivities(state.activities);
    setTasks(state.tasks);
    setObjectLogs(state.objectLogs);
    setPageRows(state.pageRows || {});
    setCohortTree(state.cohortTree || []);
    setHallSessions(state.hallSessions || []);
    setClassCalendar(state.classCalendar || []);
    setDoeDashboard(state.doeDashboard || []);
    setCallCenterDashboard(state.callCenterDashboard || null);
    setDemoCycle(state.demoCycle || null);
    setRelationships(state.relationships || relationships);
    setRegistrationSeq(state.registrationSeq || registrationSeq);
  }

  async function refreshFromDatabase() {
    try {
      applyServerState(await fetchJson('/api/app-state'));
      setNotice('Local SQL database connected. Data is loaded from data/dcode.sqlite.');
    } catch (error) {
      setNotice(`Local SQL API not connected yet: ${error.message}`);
    }
  }

  async function runAction(action, payload = {}) {
    try {
      const result = await fetchJson('/api/actions', {
        method: 'POST',
        body: JSON.stringify({ action, payload }),
      });
      applyServerState(result.state);
      setNotice(result.notice);
    } catch (error) {
      setNotice(`Action failed: ${error.message}`);
    }
  }

  async function saveHall(hall) {
    const isNew = hall.mode === 'new';
    try {
      const result = await fetchJson('/api/halls', {
        method: isNew ? 'POST' : 'PATCH',
        body: JSON.stringify(hall),
      });
      applyServerState(result.state);
      setNotice(result.notice);
      setSelectedHall(null);
    } catch (error) {
      setNotice(`Hall save failed: ${error.message}`);
    }
  }

  async function disableHall(name) {
    try {
      const result = await fetchJson('/api/halls/disable', {
        method: 'POST',
        body: JSON.stringify({ name }),
      });
      applyServerState(result.state);
      setNotice(result.notice);
    } catch (error) {
      setNotice(`Disable hall failed: ${error.message}`);
    }
  }

  async function saveClassSession(session) {
    try {
      const result = await fetchJson('/api/class-sessions', {
        method: 'POST',
        body: JSON.stringify(session),
      });
      applyServerState(result.state);
      setNotice(result.notice);
      setSelectedSchedule(null);
    } catch (error) {
      setNotice(`Schedule class failed: ${error.message}`);
    }
  }

  async function saveCohort(cohort) {
    try {
      const result = await fetchJson('/api/cohorts', {
        method: 'POST',
        body: JSON.stringify(cohort),
      });
      applyServerState(result.state);
      setNotice(result.notice);
      setSelectedCohortForm(null);
    } catch (error) {
      setNotice(`Create cohort failed: ${error.message}`);
    }
  }

  async function saveCohortClass(classForm) {
    try {
      const result = await fetchJson('/api/cohort-classes', {
        method: 'POST',
        body: JSON.stringify(classForm),
      });
      applyServerState(result.state);
      setNotice(result.notice);
      setSelectedClassForm(null);
    } catch (error) {
      setNotice(`Create class failed: ${error.message}`);
    }
  }

  const totals = useMemo(() => {
    const visible = columns.reduce((sum, col) => sum + col.students.length, 0);
    const utilization = Math.round(halls.reduce((sum, hall) => sum + hall.usage, 0) / halls.length);
    const registered = columns.find((col) => col.key === 'registered');
    const advanced2 = columns.find((col) => col.key === 'advanced2');
    const backlog = columns.find((col) => col.key === 'backlog');
    const doeMissing = advanced2.students.filter((student) => student.status.includes('Pending')).length;
    const backlogCount = backlog.students.length;
    return {
      students: visible,
      utilization,
      pendingPayments: registered.students.length,
      doeMissing,
      backlogCount,
    };
  }, [columns, halls]);

  const kpis = [
    { label: 'Active students', value: totals.students.toLocaleString(), meta: `${columns[2].students.length + columns[3].students.length + columns[4].students.length} visible on board`, icon: Users, tone: 'teal' },
    { label: 'Pending payments', value: totals.pendingPayments.toString(), meta: 'finance queue', icon: Receipt, tone: 'amber' },
    { label: 'DOE missing', value: totals.doeMissing.toString(), meta: 'Advanced Phase 2', icon: BookOpenCheck, tone: 'red' },
    { label: 'Backlog cases', value: totals.backlogCount.toString(), meta: 'open person cases', icon: DatabaseZap, tone: 'blue' },
    { label: 'Hall utilization', value: `${totals.utilization}%`, meta: `${halls.filter((hall) => hall.usage >= 70).length} busy halls`, icon: Building2, tone: 'green' },
  ];

  const visibleColumns = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return columns;
    return columns.map((column) => ({
      ...column,
      students: column.students.filter((student) =>
        `${student.id} ${student.name} ${student.status}`.toLowerCase().includes(needle)
      ),
      hidden: 0,
    }));
  }, [columns, query]);

  function pushActivity(label) {
    setActivities((current) => [[label, 'Just now'], ...current].slice(0, 7));
  }

  function writeObjectLog(objectId, objectType, action, detail, actor = 'Admin A.') {
    setObjectLogs((current) => [
      {
        id: `LOG-${String(current.length + 1).padStart(3, '0')}`,
        objectId,
        objectType,
        action,
        actor,
        at: 'Just now',
        detail,
      },
      ...current,
    ]);
  }

  function addTask(label) {
    setTasks((current) => [[label, 'Today'], ...current].slice(0, 6));
  }

  function applyMove(fromKey, toKey, status, emptyMessage) {
    setColumns((current) => {
      const result = moveFirst(current, fromKey, toKey, status, emptyMessage);
      setNotice(result.message);
      pushActivity(result.message);
      const moved = current.find((column) => column.key === fromKey)?.students[0];
      if (moved) {
        writeObjectLog(moved.id, 'Student', `Moved to ${toKey}`, result.message);
      }
      return result.columns;
    });
  }

  function openRegistrationForm() {
    setSelectedRegistrationForm({
      studentId: '',
      name: '',
      phone: '',
      cohortCode: 'CP138',
      paymentStatus: 'Pending Finance Approval',
    });
  }

  async function saveRegistration(registration) {
    await runAction('createRegistration', registration);
    setSelectedRegistrationForm(null);
  }

  function createRegistration() {
    openRegistrationForm();
  }

  async function updateStudentStatus(payload) {
    await runAction('updateStudentStatus', payload);
    setSelectedRecord(null);
  }

  async function saveApprovalFlow(flowDraft) {
    await runAction('updateStudentStatus', {
      studentId: flowDraft.studentId,
      stageKey: flowDraft.toStage,
      status: flowDraft.status,
      doeStatus: flowDraft.doeStatus,
      requestedBy: flowDraft.requestedBy,
      approvedBy: flowDraft.approvedBy,
      evidenceNote: flowDraft.evidenceNote,
    });
    setSelectedApprovalFlow(null);
  }

  function openApprovalFlow(flowKey) {
    const flow = approvalFlows[flowKey];
    const defaultStudent = columns.find((column) => column.key === flow.fromStage)?.students[0];
    setSelectedApprovalFlow({
      ...flow,
      flowKey,
      studentId: defaultStudent?.id || '',
    });
  }

  function verifyPayment() {
    openApprovalFlow('verifyPayment');
  }

  function submitPaymentSlipAction() {
    runAction('submitPaymentSlip');
  }

  function callCenterConfirmAction() {
    runAction('callCenterConfirmRegistration');
  }

  function requestStudentReplyAction() {
    runAction('requestStudentReply');
  }

  function addCallCenterContactLogAction(payload) {
    runAction('addCallCenterContactLog', payload);
  }

  function requestPaymentCorrectionAction() {
    runAction('requestPaymentCorrection');
  }

  function enrollApprovedRegistrationAction() {
    runAction('enrollApprovedRegistration');
  }

  function confirmFirstDayAttendanceAction() {
    runAction('confirmFirstDayAttendance');
  }

  function markNoShowAction() {
    runAction('markNoShow');
  }

  function generateClassReportAction() {
    runAction('generateClassReport');
  }

  function generateCohortManagerReportAction() {
    runAction('generateCohortManagerReport');
  }

  function startBasicClass() {
    openApprovalFlow('startBasicClass');
  }

  function moveToAdvanced() {
    openApprovalFlow('moveToAdvanced');
  }

  function startDoe() {
    openApprovalFlow('startDoe');
  }

  function submitDoe() {
    openApprovalFlow('submitDoe');
  }

  function resolveBacklog() {
    openApprovalFlow('resolveBacklog');
  }

  function scheduleClass() {
    setShowSetup(true);
    const firstClass = cohortTree?.[0]?.classes?.[0];
    const firstHall = halls.find((hall) => hall.status !== 'disabled') || halls[0];
    setSelectedSchedule({
      classId: firstClass?.id || '',
      hallName: firstHall?.name || '',
      sessionDate: '2026-06-01',
      sessionTime: '10:00-13:00',
      expectedStudents: firstHall?.cap || 30,
    });
  }

  function generateReport() {
    runAction('generateReport');
  }

  function approveSchema() {
    runAction('approveSchema');
  }

  async function viewRecord(page, headers, row) {
    const objectId = row[0];
    const objectType = pageDefinitions[page]?.title || page;
    const fields = headers.map((header, index) => [header, row[index]]);
    setSelectedRecord({ page, objectId, objectType, fields, row });
    try {
      const result = await fetchJson('/api/view-record', {
        method: 'POST',
        body: JSON.stringify({ objectId, objectType }),
      });
      applyServerState(result.state);
    } catch {
      writeObjectLog(objectId, objectType, 'Viewed record', `Opened ${objectType} detail for ${objectId}.`);
    }
  }

  if (!isAdminSignedIn) {
    return <AdminLoginPage onLogin={() => setIsAdminSignedIn(true)} />;
  }

  return (
    <div className="app-shell">
      <Sidebar activePage={activePage} onNavigate={setActivePage} />
      <main className="main">
        <Topbar
          query={query}
          onQuery={setQuery}
          onLogout={() => {
            window.localStorage.removeItem(authStorageKey);
            setIsAdminSignedIn(false);
          }}
        />
        {activePage === 'Dashboard' && (
          <div className="alert-strip">
            <AlertPill tone="red" label={`DOE missing: ${totals.doeMissing}`} />
            <AlertPill tone="amber" label={`Pending payments: ${totals.pendingPayments}`} />
            <AlertPill tone="blue" label={`Backlog cases: ${totals.backlogCount}`} />
            <AlertPill tone="green" label={`Hall utilization: ${totals.utilization}%`} />
            <span className="data-stamp">Data as of 29 May 2026, 17:20 MYT</span>
            <RefreshCw size={16} />
          </div>
        )}

        {activePage === 'Dashboard' && (
          <section className="kpi-grid" aria-label="KPI summary">
            {kpis.map((item) => (
              <KpiCard key={item.label} {...item} />
            ))}
          </section>
        )}

        <div className="notice-bar">
          <BadgeCheck size={16} />
          <span>{notice}</span>
        </div>

        {activePage === 'Dashboard' ? (
          <>
        <FullCycleShowcase demoCycle={demoCycle} onNavigate={setActivePage} />

        <div className="content-grid">
          <section className="board-panel">
            <div className="panel-header">
              <div>
                <h2>Class / Cohort Operations Board</h2>
                <p>{newClassSeed.cohort} setup links students, coaches, finance gate, phases, and DOE.</p>
              </div>
              <div className="header-actions">
                <select value={selectedCohort} onChange={(e) => setSelectedCohort(e.target.value)}>
                  <option>CP138 - Certificate in Data Analytics</option>
                  <option>CP137 - Advanced Business System</option>
                  <option>CP136 - Class Bible Migration</option>
                </select>
                <button className="primary" onClick={scheduleClass}>
                  <CalendarDays size={16} />
                  New Class
                </button>
              </div>
            </div>

            {showSetup && <NewClassSetup />}

            <WorkflowActions
              onRegister={createRegistration}
              onVerifyPayment={verifyPayment}
              onStartBasic={startBasicClass}
              onAdvanced={moveToAdvanced}
              onStartDoe={startDoe}
              onSubmitDoe={submitDoe}
              onBacklog={resolveBacklog}
            />

            <div className="stage-board">
              {visibleColumns.map((column) => (
                <StageColumn key={column.key} column={column} />
              ))}
            </div>

            <div className="board-footer">
              <strong>Total students in {newClassSeed.cohort}: {totals.students}</strong>
              <button className="text-button" onClick={generateReport}>
                View Cohort Details <ArrowRight size={15} />
              </button>
              <button className="text-button" onClick={generateReport}>
                Export Board <FileBarChart size={15} />
              </button>
            </div>
          </section>

          <aside className="side-stack">
            <HallUtilization halls={halls} total={totals.utilization} />
            <TeacherStatus />
          </aside>
        </div>

        <section className="lower-grid">
          <ActivityPanel activities={activities} />
          <TaskPanel tasks={tasks} />
          <ShortcutsPanel
            onRegister={createRegistration}
            onPayment={verifyPayment}
            onSubmitPaymentSlip={submitPaymentSlipAction}
            onCallCenterConfirm={callCenterConfirmAction}
            onRequestStudentReply={requestStudentReplyAction}
            onRequestPaymentCorrection={requestPaymentCorrectionAction}
            onEnrollApprovedRegistration={enrollApprovedRegistrationAction}
            onConfirmFirstDay={confirmFirstDayAttendanceAction}
            onMarkNoShow={markNoShowAction}
            onGenerateClassReport={generateClassReportAction}
            onGenerateCohortManagerReport={generateCohortManagerReportAction}
            onSchedule={scheduleClass}
            onReport={generateReport}
            onSchema={approveSchema}
          />
        </section>
          </>
        ) : (
          <RecordsPage
            page={activePage}
            columns={columns}
            halls={halls}
            activities={activities}
            tasks={tasks}
            objectLogs={objectLogs}
            pageRows={pageRows}
            relationships={relationships}
            cohortTree={cohortTree}
            hallSessions={hallSessions}
            classCalendar={classCalendar}
            doeDashboard={doeDashboard}
            callCenterDashboard={callCenterDashboard}
            onNavigate={setActivePage}
            onRegister={createRegistration}
            onPayment={verifyPayment}
            onSubmitPaymentSlip={submitPaymentSlipAction}
            onCallCenterConfirm={callCenterConfirmAction}
            onRequestStudentReply={requestStudentReplyAction}
            onRequestPaymentCorrection={requestPaymentCorrectionAction}
            onEnrollApprovedRegistration={enrollApprovedRegistrationAction}
            onConfirmFirstDay={confirmFirstDayAttendanceAction}
            onMarkNoShow={markNoShowAction}
            onGenerateClassReport={generateClassReportAction}
            onGenerateCohortManagerReport={generateCohortManagerReportAction}
            onSchedule={scheduleClass}
            onReport={generateReport}
            onSchema={approveSchema}
            onSubmitDoe={submitDoe}
            onBacklog={resolveBacklog}
            onViewRecord={viewRecord}
            onViewDoePhase={setSelectedDoePhase}
            onViewCohortDetail={setSelectedCohortDetail}
            onNewCohort={() => setSelectedCohortForm({ cohortCode: '', program: '', venueHall: 'Dcode KL Center / Hall A', status: 'Planned', sizeLabel: '0 students' })}
            onNewCohortClass={() => setSelectedClassForm({ cohortCode: cohortTree[0]?.code || 'CP138', className: 'Basic Class', classType: 'Core class', sequenceNo: 1, teacherName: '', coachCount: 0, status: 'Planned' })}
            onNewHall={() => setSelectedHall({ mode: 'new', name: '', capacity: 20, usage: 0, schedule: '0 / 0 slots', status: 'active' })}
            onEditHall={(hall) => setSelectedHall({ mode: 'edit', originalName: hall.name, name: hall.name, capacity: hall.capacity, usage: hall.usage, schedule: hall.schedule, status: hall.status })}
            onDisableHall={disableHall}
          />
        )}
        {selectedRecord && (
          <RecordDetailModal
            record={selectedRecord}
            logs={objectLogs}
            relationships={relationships}
            onAddCallCenterContact={addCallCenterContactLogAction}
            onUpdateStudentStatus={updateStudentStatus}
            onClose={() => setSelectedRecord(null)}
          />
        )}
        {selectedRegistrationForm && (
          <RegistrationEditorModal
            registration={selectedRegistrationForm}
            cohortTree={cohortTree}
            onSave={saveRegistration}
            onClose={() => setSelectedRegistrationForm(null)}
          />
        )}
        {selectedApprovalFlow && (
          <ApprovalFlowModal
            flow={selectedApprovalFlow}
            columns={columns}
            onSave={saveApprovalFlow}
            onClose={() => setSelectedApprovalFlow(null)}
          />
        )}
        {selectedHall && (
          <HallEditorModal
            hall={selectedHall}
            onSave={saveHall}
            onClose={() => setSelectedHall(null)}
          />
        )}
        {selectedSchedule && (
          <ClassScheduleModal
            schedule={selectedSchedule}
            cohortTree={cohortTree}
            halls={halls}
            onSave={saveClassSession}
            onClose={() => setSelectedSchedule(null)}
          />
        )}
        {selectedDoePhase && (
          <DoePhaseModal
            phase={selectedDoePhase}
            logs={objectLogs}
            onClose={() => setSelectedDoePhase(null)}
          />
        )}
        {selectedCohortForm && (
          <CohortEditorModal
            cohort={selectedCohortForm}
            onSave={saveCohort}
            onClose={() => setSelectedCohortForm(null)}
          />
        )}
        {selectedClassForm && (
          <CohortClassEditorModal
            classForm={selectedClassForm}
            cohortTree={cohortTree}
            onSave={saveCohortClass}
            onClose={() => setSelectedClassForm(null)}
          />
        )}
        {selectedCohortDetail && (
          <CohortDetailModal
            cohort={selectedCohortDetail}
            logs={objectLogs}
            onClose={() => setSelectedCohortDetail(null)}
          />
        )}
      </main>
    </div>
  );
}

function Sidebar({ activePage, onNavigate }) {
  const itemPage = (item) => item.page || item.label;
  const childPage = (child) => typeof child === 'string' ? child : child.page;
  const childLabel = (child) => typeof child === 'string' ? child : child.label;
  const activeGroup = navItems.find((item) => itemPage(item) === activePage || item.children?.some((child) => childPage(child) === activePage))?.label || 'Dashboard';
  const [openGroups, setOpenGroups] = useState(() => new Set(activeGroup === 'Dashboard' ? [] : [activeGroup]));

  function handleGroupClick(item) {
    if (!item.children) {
      onNavigate(itemPage(item));
      return;
    }
    setOpenGroups((current) => {
      if (current.has(item.label)) return new Set();
      return new Set([item.label]);
    });
    onNavigate(itemPage(item));
  }

  return (
    <aside className="sidebar">
      <div className="brand-row">
        <div>
          <div className="brand">DCODE</div>
          <div className="brand-sub">SDN BHD ERP</div>
        </div>
        <Menu size={20} />
      </div>
      <nav>
        {navItems.map((item) => {
          const isActiveGroup = activePage === itemPage(item) || item.children?.some((child) => childPage(child) === activePage);
          const isOpen = item.children && openGroups.has(item.label);
          return (
          <div key={item.label} className={`nav-group ${isOpen ? 'open' : ''} ${isActiveGroup ? 'active-group' : ''}`}>
            <button
              className={`nav-item ${isActiveGroup ? 'active' : ''}`}
              onClick={() => handleGroupClick(item)}
              aria-expanded={Boolean(isOpen)}
            >
              <item.icon size={19} />
              <span>{item.label}</span>
              {item.children && <ChevronDown size={15} className="chev-open" />}
            </button>
            {item.children && isOpen && (
              <div className="module-subnav" aria-label={`${item.label} pages`}>
                <div className="module-subnav-head">
                  <span>{item.label}</span>
                  <small>{item.children.length} views</small>
                </div>
                {item.children.map((child) => (
                  <button
                    key={childPage(child)}
                    className={`${childLabel(child).includes('AGA') ? 'locked' : ''} ${activePage === childPage(child) ? 'active-sub' : ''}`}
                    onClick={() => {
                      setOpenGroups(new Set([item.label]));
                      onNavigate(childPage(child));
                    }}
                  >
                    <span>{childLabel(child)}</span>
                    {childLabel(child).includes('AGA') && <Lock size={13} />}
                  </button>
                ))}
              </div>
            )}
          </div>
        )})}
      </nav>
      <div className="sidebar-footer">
        <span>Dcode ERP</span>
        <span>v0.2 functional demo</span>
      </div>
      <button className="collapse-btn">
        <PanelLeftClose size={17} />
        Collapse
      </button>
    </aside>
  );
}

function Topbar({ query, onQuery, onLogout }) {
  return (
    <header className="topbar">
      <h1>Dcode Admin Portal</h1>
      <div className="search-box">
        <Search size={18} />
        <input
          value={query}
          onChange={(event) => onQuery(event.target.value)}
          placeholder="Search students, invoices, classes, persons..."
        />
        <kbd>⌘ K</kbd>
      </div>
      <div className="top-actions">
        <button className="icon-button has-badge" aria-label="Notifications">
          <Bell size={18} />
          <span>12</span>
        </button>
        <button className="icon-button" aria-label="Help">
          <AlertCircle size={18} />
        </button>
        <div className="user-chip">
          <span>AA</span>
          <div>
            <strong>Admin A.</strong>
            <small>Super Admin</small>
          </div>
        </div>
        <button className="logout-button" onClick={onLogout} type="button">
          <Lock size={15} />
          Logout
        </button>
      </div>
    </header>
  );
}

function AlertPill({ tone, label }) {
  return (
    <button className={`alert-pill ${tone}`}>
      <AlertCircle size={15} />
      <span>{label}</span>
      <ArrowRight size={14} />
    </button>
  );
}

function KpiCard({ label, value, meta, icon: Icon, tone }) {
  return (
    <article className="kpi-card">
      <div className={`kpi-icon ${tone}`}>
        <Icon size={26} />
      </div>
      <div>
        <p>{label}</p>
        <strong>{value}</strong>
        <small>{meta}</small>
      </div>
    </article>
  );
}

function FullCycleShowcase({ demoCycle, onNavigate }) {
  if (!demoCycle) return null;
  const current = demoCycle.currentStep;
  const visibleSteps = demoCycle.steps.slice(0, 8);
  const remaining = Math.max(demoCycle.steps.length - visibleSteps.length, 0);

  return (
    <section className="full-cycle-panel">
      <div className="full-cycle-main">
        <div className="panel-header compact">
          <div>
            <span className="section-kicker">SQL-backed full cycle proof</span>
            <h2>{demoCycle.name}</h2>
            <p>{demoCycle.proofGoal}</p>
          </div>
          <div className="proof-score">
            <strong>{demoCycle.progress.current}/{demoCycle.progress.total}</strong>
            <span>current step</span>
          </div>
        </div>

        <div className="cycle-student-row">
          <div>
            <span>Student</span>
            <strong>{demoCycle.student.id} / {demoCycle.student.name}</strong>
            <small>{demoCycle.student.cohort} · {demoCycle.student.stage}</small>
          </div>
          <div>
            <span>Status</span>
            <strong>{demoCycle.student.status}</strong>
            <small>DOE: {demoCycle.student.doeStatus}</small>
          </div>
          <div>
            <span>Now proving</span>
            <strong>{current.workflow_id} · {current.workflow_name}</strong>
            <small>{current.object_type} changes from {current.status_from} to {current.status_to}</small>
          </div>
        </div>

        <div className="cycle-step-rail">
          {visibleSteps.map((step) => (
            <button
              key={`${step.scenario_id}-${step.step_no}`}
              className={`cycle-step ${step.step_no < demoCycle.progress.current ? 'done' : ''} ${step.step_no === demoCycle.progress.current ? 'current' : ''}`}
              onClick={() => onNavigate(step.screen_name)}
            >
              <span>{step.step_no}</span>
              <strong>{step.workflow_id}</strong>
              <small>{step.object_type}</small>
            </button>
          ))}
          {remaining > 0 && <div className="cycle-step more">+{remaining}</div>}
        </div>
      </div>

      <aside className="full-cycle-proof">
        <h3>Proof Trail</h3>
        <div className="proof-list">
          {demoCycle.events.slice(-4).map((event) => (
            <div key={event.workflow_event_id} className="proof-item">
              <strong>{event.workflow_id} · {event.status_to}</strong>
              <span>{event.object_type} / {event.object_id}</span>
              <small>{event.evidence_note}</small>
            </div>
          ))}
        </div>
        <div className="proof-actions">
          <button onClick={() => onNavigate('Lifecycle Events')}>Lifecycle</button>
          <button onClick={() => onNavigate('DOE')}>DOE Chain</button>
          <button onClick={() => onNavigate('Reports')}>Reports</button>
          <button onClick={() => onNavigate('AGA-only Lark Mapping')}>Source Map</button>
        </div>
      </aside>
    </section>
  );
}

function NewClassSetup() {
  return (
    <div className="setup-panel">
      <div className="setup-step">
        <span>1</span>
        <strong>{newClassSeed.cohort}</strong>
        <small>{newClassSeed.program}</small>
      </div>
      <div className="setup-step">
        <span>2</span>
        <strong>{newClassSeed.venue}</strong>
        <small>{newClassSeed.hall}, capacity {newClassSeed.capacity}</small>
      </div>
      <div className="setup-step">
        <span>3</span>
        <strong>{newClassSeed.teacher}</strong>
        <small>{newClassSeed.coaches.length} coaches assigned</small>
      </div>
      <div className="setup-step">
        <span>4</span>
        <strong>{newClassSeed.registrationLink}</strong>
        <small>DOE starts: {newClassSeed.doeStart}</small>
      </div>
    </div>
  );
}

function WorkflowActions({ onRegister, onVerifyPayment, onStartBasic, onAdvanced, onStartDoe, onSubmitDoe, onBacklog }) {
  return (
    <div className="workflow-actions">
      <button onClick={onRegister}><FileText size={15} /> New Registration</button>
      <button onClick={onVerifyPayment}><Receipt size={15} /> Verify Payment</button>
      <button onClick={onStartBasic}><BadgeCheck size={15} /> Enter Basic</button>
      <button onClick={onAdvanced}><ArrowRight size={15} /> Move Advanced</button>
      <button onClick={onStartDoe}><BookOpenCheck size={15} /> Start DOE</button>
      <button onClick={onSubmitDoe}><ClipboardCheck size={15} /> Submit DOE</button>
      <button onClick={onBacklog}><Clock3 size={15} /> Backlog Re-entry</button>
    </div>
  );
}

function StageColumn({ column }) {
  const Icon = column.key === 'backlog' ? Clock3 : column.key === 'paid' ? BadgeCheck : ArrowRight;
  const total = column.students.length + column.hidden;
  return (
    <div className={`stage-column ${column.tone}`}>
      <div className="stage-head">
        <span>{column.label}</span>
        <strong>{total}</strong>
      </div>
      <div className="student-stack">
        {column.students.length === 0 && <div className="empty-state">No visible records</div>}
        {column.students.map((student) => (
          <article key={student.id} className="student-card">
            <div>
              <strong>{student.id}</strong>
              <span>{student.name}</span>
              <small>{student.status}</small>
            </div>
            <Icon size={16} />
          </article>
        ))}
      </div>
      <button className="more-button">+ {column.hidden} more</button>
    </div>
  );
}

function HallUtilization({ halls, total }) {
  return (
    <section className="side-panel">
      <div className="panel-header compact">
        <h2>Hall Utilization</h2>
        <button>Today</button>
      </div>
      <div className="date-row">
        <span>29 May 2026</span>
        <span>{total}% overall</span>
      </div>
      <div className="hall-list">
        {halls.map((hall) => (
          <div className="hall-row" key={hall.name}>
            <div>
              <strong>{hall.name}</strong>
              <small>{hall.cap} pax</small>
            </div>
            <div className="bar">
              <span style={{ width: `${hall.usage}%` }} />
            </div>
            <span>{hall.schedule}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function TeacherStatus() {
  return (
    <section className="side-panel">
      <div className="panel-header compact">
        <h2>Teacher Class Status</h2>
      </div>
      <table>
        <thead>
          <tr>
            <th>Teacher</th>
            <th>Class</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {teachers.map(([teacher, klass, status, tone]) => (
            <tr key={teacher}>
              <td>{teacher}</td>
              <td>{klass}</td>
              <td>
                <span className={`status-dot ${tone}`} />
                {status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="text-button full">View All Teachers <ArrowRight size={14} /></button>
    </section>
  );
}

function ActivityPanel({ activities }) {
  return (
    <section className="lower-panel">
      <h2>Recent Activities</h2>
      {activities.map(([label, time], index) => (
        <div className="activity-row" key={`${label}-${time}-${index}`}>
          <FileText size={15} />
          <span>{label}</span>
          <small>{time}</small>
        </div>
      ))}
    </section>
  );
}

function TaskPanel({ tasks }) {
  return (
    <section className="lower-panel">
      <h2>Pending Tasks <span>{tasks.length}</span></h2>
      {tasks.map(([label, due], index) => (
        <div className="task-row" key={`${label}-${due}-${index}`}>
          <ClipboardCheck size={15} />
          <span>{label}</span>
          <strong>{due}</strong>
        </div>
      ))}
    </section>
  );
}

function ShortcutsPanel({ onRegister, onPayment, onSchedule, onReport, onSchema }) {
  const shortcuts = [
    ['New Registration', FileText, onRegister],
    ['Create Invoice', Receipt, onPayment],
    ['Record Payment', WalletCards, onPayment],
    ['Schedule Class', CalendarDays, onSchedule],
    ['Generate Report', FileBarChart, onReport],
    ['Approve Schema', ShieldCheck, onSchema],
  ];
  return (
    <section className="lower-panel shortcuts">
      <h2>Shortcuts</h2>
      {shortcuts.map(([label, Icon, onClick]) => (
        <button key={label} onClick={onClick}>
          <Icon size={16} />
          {label}
        </button>
      ))}
    </section>
  );
}

function RecordsPage({
  page,
  columns,
  halls,
  activities,
  tasks,
  objectLogs,
  pageRows,
  relationships,
  cohortTree,
  hallSessions,
  classCalendar,
  doeDashboard,
  callCenterDashboard,
  onNavigate,
  onRegister,
  onPayment,
  onSubmitPaymentSlip,
  onCallCenterConfirm,
  onRequestStudentReply,
  onRequestPaymentCorrection,
  onEnrollApprovedRegistration,
  onConfirmFirstDay,
  onMarkNoShow,
  onGenerateClassReport,
  onGenerateCohortManagerReport,
  onSchedule,
  onReport,
  onSchema,
  onSubmitDoe,
  onBacklog,
  onViewRecord,
  onViewDoePhase,
  onViewCohortDetail,
  onNewCohort,
  onNewCohortClass,
  onNewHall,
  onEditHall,
  onDisableHall,
}) {
  const definition = pageDefinitions[page] || pageDefinitions.Dashboard;
  const allStudents = columns.flatMap((column) =>
    column.students.map((student) => ({
      id: student.id,
      name: student.name,
      stage: column.label,
      status: student.status,
      cohort: newClassSeed.cohort,
    }))
  );

  const rowsByPage = {
    Persons: [
      ['P-001', 'Aisyah Binti Rahman', 'Student', 'CP138', 'Registered'],
      ['P-002', 'Luqman Hakim', 'Student / Coach Candidate', 'CP138', 'Fully Paid'],
      ['P-003', 'Farah Nadia', 'Coach', 'CP138', 'Active Assignment'],
      ['P-004', 'Nurul Huda', 'Student / Backlog', 'CP137', 'Re-entry Pending'],
      ['P-005', 'Dr. Ivan Tan', 'Teacher', 'CP138', 'Class Owner'],
    ],
    Students: allStudents.slice(0, 14).map((s) => [s.id, s.name, s.cohort, s.stage, s.status]),
    Coaches: [
      ['C-001', 'S2505031', 'Luqman Hakim', 'CP136 Advanced Graduate', 'CP138 Basic Class', 'Assigned'],
      ['C-002', 'S2505078', 'Farah Nadia', 'CP136 Advanced Graduate', 'CP138 Advanced Phase 1', 'Assigned'],
      ['C-003', 'S2505089', 'Rajesh Kumar', 'CP136 Advanced Graduate', 'CP138 Advanced Phase 2', 'Assigned'],
      ['C-004', 'S2505095', 'Lee Chen Jie', 'CP136 Advanced Graduate', 'CP138 Backlog Follow-up', 'Assigned'],
    ],
    Backlog: columns.find((c) => c.key === 'backlog').students.map((s) => [s.id, s.name, 'Dropped / did not complete', s.status, 'Double verification needed']),
    Registrations: [
      ['REG-2505169', 'Ahmad Danish', 'CP138', 'Pending verification', 'No payment'],
      ['REG-2505170', 'Chong Li En', 'CP138', 'Confirmed', 'Deposit paid'],
      ['REG-2505171', 'Maya Tan', 'CP138', 'Registered', 'No payment'],
      ...columns.find((c) => c.key === 'registered').students.slice(0, 5).map((s) => [`REG-${s.id}`, s.name, 'CP138', 'Registered', 'Pending payment']),
    ],
    'Classes & Cohorts': [
      ['CP138', 'Certificate in Data Analytics', 'Dcode KL Center / Hall A', 'Planned', '130 students'],
      ['CP137', 'Advanced Business System', 'Dcode KL Center / Hall B', 'Active', '96 students'],
      ['CP136', 'Class Bible Migration', 'Dcode KL Center / Lab 1', 'Audit', '129 records'],
    ],
    DOE: columns.find((c) => c.key === 'advanced2').students.map((s) => [s.id, s.name, 'CP138', 'Advanced Phase 2', s.status]),
    'Hall Utilization': halls.map((h) => [h.name, `${h.cap} pax`, `${h.usage}%`, h.schedule, h.usage >= 85 ? 'High' : 'Normal']),
    'Lifecycle Events': [
      ['EVT-001', 'S2505128', 'Registered', 'CP138', '19 May 2026'],
      ['EVT-002', 'S2505031', 'Payment verified', 'CP138', '20 May 2026'],
      ['EVT-003', 'S2505003', 'Entered basic class', 'CP138', '12 May 2026'],
      ['EVT-004', 'S2504972', 'DOE started', 'CP138', '20 May 2026'],
      ['EVT-005', 'S2504884', 'Backlog opened', 'CP137', '10 May 2026'],
    ],
    Finance: [
      ['INV-2505-1024', 'S2505128', 'REG-S2505128', 'CP138', 'RM 3,600', 'Verified'],
      ['INV-2505-1025', 'S2505142', 'REG-S2505142', 'CP138', 'RM 500', 'Pending'],
      ['INV-2505-1026', 'S2505150', 'REG-S2505150', 'CP138', 'RM 3,600', 'Pending'],
      ['TRF-2505-002', 'S2504884', 'REG-S2504884', 'CP137', 'RM 500', 'Transfer Review'],
    ],
    Payments: [
      ['PAY-001', 'INV-2505-1024', 'S2505128', 'CP138', 'RM 3,600', 'Verified'],
      ['PAY-002', 'INV-2505-1025', 'S2505142', 'CP138', 'RM 500', 'Pending'],
      ['PAY-003', 'INV-2505-1026', 'S2505150', 'CP138', 'RM 3,600', 'Pending'],
    ],
    Transfers: [
      ['TRF-001', 'S2504884', 'Payment transfer', 'RM 500', 'Pending approval'],
      ['TRF-002', 'S2504903', 'Seat transfer', '-', 'Approved'],
    ],
    Adjustments: [
      ['ADJ-001', 'INV-2505-1008', 'Discount', '-RM 300', 'Approved'],
      ['ADJ-002', 'INV-2505-1011', 'Refund', '-RM 500', 'Pending'],
    ],
    Reports: [
      ['RPT-001', 'CP138 Teacher Status Report', 'Teacher / Manager', 'Approved', 'Includes backlog'],
      ['RPT-002', 'CP138 DOE Report', 'DOE', 'Draft', 'Advanced Phase 2'],
      ['RPT-003', 'Hall Utilization Weekly', 'Operations', 'Approved', 'All halls'],
    ],
    Governance: [
      ['GOV-001', 'Schema request', 'Add lifecycle event type', 'Approved', 'AGA'],
      ['GOV-002', 'Permission update', 'Finance payment verification', 'Pending', 'AGA'],
      ['GOV-003', 'Report definition', 'CP138 teacher report', 'Approved', 'Dcode Manager'],
    ],
    'Schema Requests': [
      ['SCR-001', 'Add field', 'backlog_cases.double_verification_status', 'Approved', 'AGA'],
      ['SCR-002', 'Add status', 'DOE Submitted', 'Approved', 'AGA'],
    ],
    Permissions: [
      ['Finance Staff', 'Finance / Payments', 'Edit verification only', 'Active', 'Dcode'],
      ['Teacher', 'Cohort / DOE', 'View only', 'Active', 'Dcode'],
      ['AGA Admin', 'All modules', 'Full access', 'Active', 'AGA'],
    ],
    'Audit Log': objectLogs.map((log) => [log.id, log.objectId, log.objectType, log.action, log.at]),
    'AGA-only Lark Mapping': [
      ['base', 'D.136 Class Bible', 'D.136 Class Bible', '26 tables', 'Mapped', '2,409 fields', 'Fallback mapping only'],
      ['name', 'EMO 华语名字', '✅✅136学员-NEWBIBLE_（Dcode)', 'Learner Source', 'high', 'text', 'Fallback until CSV import loads'],
      ['phone', 'EMO 联络号码', '✅✅136学员-NEWBIBLE_（Dcode)', 'Learner Source', 'high', 'text', 'Fallback until CSV import loads'],
    ],
  };

  const headersByPage = {
    Persons: ['ID', 'Name', 'Role', 'Cohort', 'Status'],
    CRM: ['ID', 'Name', 'Role', 'Cohort', 'Status'],
    Person: ['ID', 'Name', 'Role', 'Cohort', 'Status'],
    Students: ['Student ID', 'Name', 'Cohort', 'Stage', 'Status'],
    Coaches: ['Coach ID', 'Student ID', 'Name', 'Graduate From', 'Assignment', 'Status'],
    Backlog: ['Student ID', 'Name', 'Reason', 'Status', 'Action'],
    Registrations: ['Registration', 'Name', 'Cohort', 'Registration Status', 'Payment', 'Call Center', 'Next Action'],
    'Classes & Cohorts': ['Cohort', 'Program', 'Classes', 'Sessions', 'Status', 'Size'],
    DOE: ['Student ID', 'Name', 'Cohort', 'Phase', 'DOE Status'],
    'Hall Utilization': ['Hall', 'Capacity', 'Utilization', 'Schedule', 'Status', 'Risk'],
    'Lifecycle Events': ['Event', 'Student', 'Type', 'Cohort', 'Date'],
    Finance: ['Record', 'Student ID', 'Registration', 'Cohort', 'Amount', 'Status'],
    Payments: ['Payment', 'Invoice', 'Student ID', 'Cohort', 'Amount', 'Status'],
    Transfers: ['Transfer', 'Student', 'Type', 'Amount', 'Status'],
    Adjustments: ['Adjustment', 'Invoice', 'Type', 'Amount', 'Status'],
    Reports: ['Report', 'Name', 'Audience', 'Status', 'Rule'],
    Governance: ['ID', 'Type', 'Name', 'Status', 'Owner'],
    'Schema Requests': ['ID', 'Type', 'Object', 'Status', 'Owner'],
    Permissions: ['Role', 'Module', 'Permission', 'Status', 'Owner'],
    'Audit Log': ['Log ID', 'Object ID', 'Object Type', 'Action', 'Time'],
    'AGA-only Lark Mapping': ['Person Attribute', 'Lark Field', 'Source Table', 'Source Role', 'Confidence', 'Field Type', 'Import Note'],
  };

  const rows = pageRows?.[page] || (['CRM', 'Person'].includes(page) ? pageRows?.Persons : null) || rowsByPage[page] || (['CRM', 'Person'].includes(page) ? rowsByPage.Persons : null) || rowsByPage.Persons;
  const headers = headersByPage[page] || headersByPage.Persons;
  const miniStats = getPageMiniStats(page, rows, columns, halls, objectLogs, doeDashboard, relationships);

  const actions = getPageActions(page, {
    onRegister,
    onPayment,
    onSubmitPaymentSlip,
    onCallCenterConfirm,
    onRequestStudentReply,
    onRequestPaymentCorrection,
    onEnrollApprovedRegistration,
    onConfirmFirstDay,
    onMarkNoShow,
    onGenerateClassReport,
    onGenerateCohortManagerReport,
    onSchedule,
    onReport,
    onSchema,
    onSubmitDoe,
    onBacklog,
    onNewHall,
    onNavigate,
  });

  return (
    <div className="route-page">
      <section className="route-hero">
        <div>
          <h2>{definition.title}</h2>
          <p>{definition.description}</p>
        </div>
        <div className="route-actions">
          {actions.map(({ label, reason, action }) => (
            <button key={label} onClick={action}>
              <span>{label}</span>
              <small>{reason}</small>
            </button>
          ))}
        </div>
      </section>
      <PageMiniDashboard stats={miniStats} />
      {page === 'Registrations' && <CallCenterDashboard dashboard={callCenterDashboard} onViewRecord={onViewRecord} />}
      {page === 'DOE' && <DoeDashboard dashboard={doeDashboard} fallbackRows={rows} onOpenPhase={onViewDoePhase} />}
      {page === 'Classes & Cohorts' && <CohortHierarchy cohortTree={cohortTree} onViewDetails={onViewCohortDetail} />}
      {page === 'Hall Utilization' && <ClassCalendar sessions={classCalendar} />}
      {page === 'AGA-only Lark Mapping' && <LarkMappingDashboard schema={relationships?.larkPersonSchema} />}
      {page === 'Hall Utilization' && (
        <HallManagement
          hallSessions={hallSessions}
          onNewHall={onNewHall}
          onEditHall={onEditHall}
          onDisableHall={onDisableHall}
        />
      )}
      {page !== 'DOE' && (
        <section className="records-panel">
          <div className="panel-header compact">
            <h2>{definition.title} Records</h2>
            {page === 'Classes & Cohorts' ? (
              <div className="panel-header-actions">
                <button onClick={onNewCohort}>New Cohort</button>
                <button onClick={onNewCohortClass}>Add Class / Phase</button>
              </div>
            ) : (
              <button onClick={() => onNavigate('Dashboard')}>Back to Dashboard</button>
            )}
          </div>
          <RecordTable headers={headers} rows={rows} page={page} onViewRecord={onViewRecord} />
        </section>
      )}
    </div>
  );
}

function getPageActions(page, handlers) {
  const {
    onRegister,
    onPayment,
    onSubmitPaymentSlip,
    onCallCenterConfirm,
    onRequestStudentReply,
    onRequestPaymentCorrection,
    onEnrollApprovedRegistration,
    onConfirmFirstDay,
    onMarkNoShow,
    onGenerateClassReport,
    onGenerateCohortManagerReport,
    onSchedule,
    onReport,
    onSchema,
    onSubmitDoe,
    onBacklog,
    onNewHall,
    onNavigate,
  } = handlers;

  const action = (label, reason, fn) => ({ label, reason, action: fn });
  const go = (target) => () => onNavigate(target);

  const actionsByPage = {
    Dashboard: [
      action('New Registration', 'start student intake', onRegister),
      action('Verify Payment', 'clear class entry gate', onPayment),
      action('Schedule Class', 'reserve hall and cohort slot', onSchedule),
    ],
    Persons: [
      action('New Registration', 'create person/student identity', onRegister),
      action('Review Backlog', 'check dropped or re-entry cases', go('Backlog')),
      action('Open Lifecycle', 'see status history', go('Lifecycle Events')),
    ],
    Students: [
      action('New Registration', 'add incoming student', onRegister),
      action('Verify Payment', 'move student toward class entry', onPayment),
      action('Open Lifecycle', 'trace every stage change', go('Lifecycle Events')),
    ],
    Coaches: [
      action('Open Students', 'verify coach came from graduate', go('Students')),
      action('Generate Report', 'teacher needs coach list', onReport),
      action('Open Lifecycle', 'prove graduation before coach role', go('Lifecycle Events')),
    ],
    Backlog: [
      action('Backlog Re-entry', 'restart with double verification', onBacklog),
      action('Verify Payment', 'check transfer or deposit status', onPayment),
      action('Open Lifecycle', 'see why student dropped', go('Lifecycle Events')),
    ],
    Registrations: [
      action('New Registration', 'capture new student form', onRegister),
      action('Call Center Confirm', 'confirm student intention', onCallCenterConfirm),
      action('Enroll to Class', 'only after approved gates', onEnrollApprovedRegistration),
    ],
    'Classes & Cohorts': [
      action('Confirm First Day', 'admin confirms real attendance', onConfirmFirstDay),
      action('Mark No Show', 'send absent pre-reg to backlog', onMarkNoShow),
      action('Schedule Class', 'create class session and hall use', onSchedule),
    ],
    DOE: [
      action('Submit DOE', 'mark homework received', onSubmitDoe),
      action('Open Students', 'check student DOE status', go('Students')),
      action('Generate Report', 'teacher DOE follow-up list', onReport),
    ],
    'Hall Utilization': [
      action('Schedule Class', 'reserve a hall slot', onSchedule),
      action('Open Cohorts', 'see which class uses the hall', go('Classes & Cohorts')),
      action('New Hall', 'add venue capacity', onNewHall),
    ],
    'Lifecycle Events': [
      action('Open Audit Log', 'who changed what and when', go('Audit Log')),
      action('Open Students', 'trace student stage history', go('Students')),
      action('Generate Report', 'status-change report for manager', onReport),
    ],
    Finance: [
      action('Approve Payment', 'finance approves slip', onPayment),
      action('Need Correction', 'ask student to reupload', onRequestPaymentCorrection),
      action('Open Payments', 'review invoice/payment detail', go('Payments')),
    ],
    Payments: [
      action('Submit Slip', 'student uploads bank-in proof', onSubmitPaymentSlip),
      action('Approve Payment', 'finance clears payment gate', onPayment),
      action('Open Finance', 'review approval queue', go('Finance')),
    ],
    Transfers: [
      action('Backlog Re-entry', 'transfer often affects backlog', onBacklog),
      action('Verify Payment', 'approve transfer/deposit movement', onPayment),
      action('Open Finance', 'return to finance queue', go('Finance')),
    ],
    Adjustments: [
      action('Open Finance', 'review invoice impact', go('Finance')),
      action('Generate Report', 'manager approval evidence', onReport),
      action('Open Audit Log', 'trace manual correction', go('Audit Log')),
    ],
    Reports: [
      action('Teacher Report', 'class status output', onGenerateClassReport),
      action('Manager Report', 'cohort health output', onGenerateCohortManagerReport),
      action('Open Lifecycle', 'include status history', go('Lifecycle Events')),
    ],
    Governance: [
      action('Approve Schema', 'AGA controls data shape', onSchema),
      action('Schema Requests', 'review requested changes', go('Schema Requests')),
      action('Open Audit Log', 'trace governance changes', go('Audit Log')),
    ],
    'Schema Requests': [
      action('Approve Schema', 'protect single source of truth', onSchema),
      action('Open Mapping', 'check source Lark fields', go('AGA-only Lark Mapping')),
      action('Open Audit Log', 'record approval trail', go('Audit Log')),
    ],
    Permissions: [
      action('Approve Schema', 'permission changes need governance', onSchema),
      action('Open Audit Log', 'check access change trail', go('Audit Log')),
      action('Open Governance', 'return to control center', go('Governance')),
    ],
    'Audit Log': [
      action('Open Lifecycle', 'business event view', go('Lifecycle Events')),
      action('Open Governance', 'schema/control view', go('Governance')),
      action('Generate Report', 'export audit evidence', onReport),
    ],
    'AGA-only Lark Mapping': [
      action('Approve Schema', 'confirm canonical field mapping', onSchema),
      action('Schema Requests', 'turn mapping issue into request', go('Schema Requests')),
      action('Open Governance', 'keep hidden from Dcode view', go('Governance')),
    ],
  };

  return actionsByPage[page] || actionsByPage.Dashboard;
}

function getPageMiniStats(page, rows, columns, halls, objectLogs, doeDashboard = [], relationships = {}) {
  const registered = columns.find((column) => column.key === 'registered');
  const advanced2 = columns.find((column) => column.key === 'advanced2');
  const backlog = columns.find((column) => column.key === 'backlog');
  const liveStudents = columns.reduce((sum, column) => sum + column.students.length, 0);
  const pendingDoe = advanced2.students.filter((student) => student.status.includes('Pending')).length;
  const pendingFinance = rows.filter((row) => row.join(' ').includes('Pending')).length;
  const busyHalls = halls.filter((hall) => hall.usage >= 70).length;

  const statsByPage = {
    Students: [
      ['Live students', liveStudents, 'Across current Dcode cohort board'],
      ['DOE pending', pendingDoe, 'Advanced Phase 2 students need follow-up'],
      ['Backlog link', backlog.students.length, 'Dropped or re-entry records tied back to persons'],
    ],
    Coaches: [
      ['Active coaches', rows.length, 'Every coach is linked to a past student ID'],
      ['Graduate source', 'CP136', 'Current coach seed comes from prior advanced graduation'],
      ['Live assignments', rows.filter((row) => row[5] === 'Assigned').length, 'Assigned to CP138 support work'],
    ],
    Registrations: [
      ['Registrations', rows.length, 'Student form records waiting for gates'],
      ['Call pending', rows.filter((row) => row.join(' ').includes('Pending') || row.join(' ').includes('Need First Call')).length, 'Call center must confirm intention'],
      ['Ready to enroll', rows.filter((row) => row.join(' ').includes('Ready to Enroll')).length, 'Finance plus call center gate passed'],
    ],
    'Classes & Cohorts': [
      ['Cohorts shown', rows.length, 'Dcode can run many batches at once'],
      ['Live student load', liveStudents, 'Students linked through cohort memberships'],
      ['Busy halls', busyHalls, 'Hall schedule pressure for live cohorts'],
    ],
    DOE: getDoeDashboardStats(doeDashboard, rows),
    Finance: [
      ['Finance records', rows.length, 'Invoices, transfer reviews, and approvals'],
      ['Pending approval', pendingFinance, 'Cannot pass class entry gate yet'],
      ['Linked IDs', 'Student + Registration', 'Every approval should point back to both'],
    ],
    Payments: [
      ['Payments', rows.length, 'Payment evidence records'],
      ['Pending match', pendingFinance, 'Need bank-in verification'],
      ['Class gate', 'Finance first', 'Full pay unlocks Basic class entry'],
    ],
    'Audit Log': [
      ['Object logs', objectLogs.length, 'Actions captured across objects'],
      ['Latest object', objectLogs[0]?.objectId || '-', 'Most recent touched object'],
      ['Actors', new Set(objectLogs.map((log) => log.actor)).size, 'People/systems writing changes'],
    ],
    'AGA-only Lark Mapping': [
      ['Lark tables', relationships?.larkPersonSchema?.latestRun?.tableCount || rows.length, 'Imported from project CSV schema'],
      ['Lark fields', relationships?.larkPersonSchema?.latestRun?.fieldCount || '-', 'Field inventory, not person rows'],
      ['Person candidates', relationships?.larkPersonSchema?.latestRun?.personCandidateCount || rows.length, 'Fields that look useful for Person DB mapping'],
    ],
  };

  return statsByPage[page] || [
    ['Records', rows.length, 'Current visible canonical records'],
    ['Live cohort', newClassSeed.cohort, 'Default operating batch in this demo'],
    ['Pending registration', registered.students.length, 'Still before finance clearance'],
  ];
}

function PageMiniDashboard({ stats }) {
  return (
    <section className="page-mini-dashboard">
      {stats.map(([label, value, meta]) => (
        <article key={label}>
          <span>{label}</span>
          <strong>{value}</strong>
          <small>{meta}</small>
        </article>
      ))}
    </section>
  );
}

function LarkMappingDashboard({ schema }) {
  if (!schema?.latestRun) {
    return (
      <section className="lark-mapping-dashboard">
        <div>
          <h2>Lark CSV Person Mapping</h2>
          <p>No imported CSV schema found yet. Run the local CSV importer before using this as the person DB source map.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="lark-mapping-dashboard">
      <div className="lark-mapping-head">
        <div>
          <h2>Lark CSV Person Mapping</h2>
          <p>{schema.note}</p>
        </div>
        <div>
          <strong>{schema.latestRun.status}</strong>
          <span>{schema.latestRun.importedAt}</span>
        </div>
      </div>
      <div className="lark-mapping-grid">
        <article>
          <h3>Candidate Field Groups</h3>
          <div className="lark-pill-grid">
            {schema.attributeCounts.map((item) => (
              <span key={item.attribute}>
                <b>{item.attribute}</b>
                {item.count}
              </span>
            ))}
          </div>
        </article>
        <article>
          <h3>Likely Source Tables</h3>
          <div className="lark-source-list">
            {schema.sourceTables.slice(0, 6).map((table) => (
              <div key={table.tableId}>
                <strong>{table.tableName}</strong>
                <small>{table.role} · {table.fieldCount} fields · {table.viewCount} views</small>
              </div>
            ))}
          </div>
        </article>
      </div>
      <div className="lark-top-fields">
        <h3>Top Person Fields To Review</h3>
        <div>
          {schema.topFields.map((field) => (
            <span key={`${field.tableName}-${field.fieldOrder}-${field.attribute}`}>
              <b>{field.attribute}</b>
              {field.fieldName}
              <small>{field.sourceRole} · {field.confidence}</small>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function CallCenterDashboard({ dashboard, onViewRecord }) {
  if (!dashboard) return null;
  const queueCards = [
    ['Need First Call', dashboard.queue?.needFirstCall || [], 'New registration with no contact attempt'],
    ['Waiting Student Reply', dashboard.queue?.waitingStudentReply || [], 'Contact made, Dcode waits for reply'],
    ['Follow Up Today', dashboard.queue?.followUpToday || [], 'Cases that need action today'],
    ['Confirmed', dashboard.queue?.confirmed || [], 'Can pass call-center gate'],
    ['Failed / Cannot Contact', dashboard.queue?.failed || [], 'Wrong number, rejected, or failed contact'],
  ];
  const registrationHeaders = ['Registration', 'Name', 'Cohort', 'Registration Status', 'Payment', 'Call Center', 'Next Action'];
  const openRegistration = (item) => {
    onViewRecord('Registrations', registrationHeaders, [
      item.registrationId,
      item.name,
      item.cohortCode,
      item.registrationStatus,
      item.paymentStatus,
      item.callStatus,
      item.callStatus === 'Call Center Confirmed' ? 'Ready if finance approved' : 'Call Center Pending',
    ]);
  };

  return (
    <section className="call-center-dashboard">
      <div className="call-center-head">
        <div>
          <h2>Call Center Queue</h2>
          <p>Every contact attempt is saved against the registration before class pre-registration is allowed.</p>
        </div>
        <div className="call-center-kpis">
          <span>{dashboard.stats?.avgAttempts || '0.0'} avg attempts</span>
          <span>{dashboard.stats?.confirmed || 0} confirmed</span>
          <span>{dashboard.stats?.failed || 0} failed</span>
        </div>
      </div>
      <div className="call-center-grid">
        {queueCards.map(([label, items, meta]) => (
          <article key={label} className="call-center-card">
            <div className="call-center-card-head">
              <div>
                <span>{label}</span>
                <strong>{items.length}</strong>
              </div>
              <small>{meta}</small>
            </div>
            <div className="call-center-list">
              {items.slice(0, 4).map((item) => (
                <button key={item.registrationId} onClick={() => openRegistration(item)}>
                  <b>{item.registrationId}</b>
                  <span>{item.name}</span>
                  <small>{item.lastResult} · {item.handledBy}</small>
                </button>
              ))}
              {items.length === 0 && <p>No cases in this queue.</p>}
            </div>
          </article>
        ))}
      </div>
      <div className="call-center-staff">
        <strong>Staff handling</strong>
        {(dashboard.staff || []).length === 0 ? (
          <span>No assigned staff yet.</span>
        ) : (
          dashboard.staff.map((staff) => <span key={staff.name}>{staff.name}: {staff.count} cases</span>)
        )}
      </div>
    </section>
  );
}

function getDoeDashboardStats(dashboard, rows) {
  const phases = dashboard.flatMap((cohort) => cohort.phases || []);
  const students = phases.flatMap((phase) => phase.students || []);
  const pending = phases.reduce((sum, phase) => sum + (phase.stats?.pending || 0), 0);
  const coachPending = phases.reduce((sum, phase) => sum + (phase.stats?.coachFollowUpPending || 0), 0);

  if (phases.length === 0) {
    return [
      ['DOE records', rows.length, 'Fallback student rows until dashboard data loads'],
      ['Pending DOE', rows.filter((row) => row.join(' ').includes('Pending')).length, 'Teacher follow-up queue'],
      ['Current structure', 'Loading', 'DOE dashboard waits for local SQL data'],
    ];
  }

  return [
    ['DOE cohorts', dashboard.length, 'Cohort dashboards with Advanced phases'],
    ['DOE students', students.length, 'Students tracked by cohort and class phase'],
    ['Coach follow-up', coachPending || pending, 'Coach and teacher attention queue'],
  ];
}

function DoeDashboard({ dashboard, fallbackRows, onOpenPhase }) {
  if (!dashboard?.length) {
    return (
      <section className="doe-dashboard">
        <div className="doe-dashboard-head">
          <div>
            <h2>DOE Cohort Dashboard</h2>
            <p>Waiting for cohort-based DOE data. Existing student DOE rows remain available as fallback.</p>
          </div>
        </div>
        <div className="doe-empty">
          <strong>{fallbackRows.length} fallback DOE rows</strong>
          <span>Local SQL data has not exposed cohort phase tracking yet.</span>
        </div>
      </section>
    );
  }

  return (
    <section className="doe-dashboard">
      <div className="doe-dashboard-head">
        <div>
          <h2>DOE Cohort / Class Dashboard</h2>
          <p>DOE is tracked inside each Advanced phase, with student submission and coach follow-up status together.</p>
        </div>
        <div className="doe-head-metrics">
          <strong>{dashboard.length}</strong>
          <span>active DOE cohorts</span>
        </div>
      </div>
      <div className="doe-cohort-grid">
        {dashboard.map((cohort) => (
          <article className="doe-cohort-card" key={cohort.cohortCode}>
            <div className="doe-cohort-head">
              <div>
                <span>Cohort</span>
                <strong>{cohort.cohortCode}</strong>
                <small>{cohort.program}</small>
              </div>
              <b>{cohort.phases.length} phases</b>
            </div>
            <div className="doe-phase-grid">
              {cohort.phases.map((phase) => (
                <DoePhaseCard
                  key={phase.classId}
                  cohort={cohort}
                  phase={phase}
                  onOpenPhase={onOpenPhase}
                />
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function DoePhaseCard({ cohort, phase, onOpenPhase }) {
  const coachNames = phase.coaches.length
    ? phase.coaches.map((coach) => coach.name).join(', ')
    : 'Coach not assigned';

  return (
    <article className="doe-phase-card">
      <div className="doe-phase-head">
        <div>
          <strong>{phase.phaseName}</strong>
          <small>{phase.teacher}</small>
        </div>
        <span>{phase.stats.teacherReviewStatus}</span>
      </div>
      <div className="doe-phase-stats">
        <div>
          <span>Students</span>
          <b>{phase.stats.totalStudents}</b>
        </div>
        <div>
          <span>Submitted</span>
          <b>{phase.stats.submitted}</b>
        </div>
        <div>
          <span>Pending</span>
          <b>{phase.stats.pending}</b>
        </div>
        <div>
          <span>Coach follow-up</span>
          <b>{phase.stats.coachFollowUpPending}</b>
        </div>
      </div>
      <div className="doe-phase-meta">
        <span>Coaches</span>
        <strong>{coachNames}</strong>
      </div>
      <div className="doe-phase-meta">
        <span>Next session</span>
        <strong>{phase.sessions[0] ? `${phase.sessions[0].date} / ${phase.sessions[0].hall}` : 'Not scheduled'}</strong>
      </div>
      <button onClick={() => onOpenPhase({ ...phase, cohortCode: cohort.cohortCode, program: cohort.program })}>
        View Phase Details
        <ArrowRight size={15} />
      </button>
    </article>
  );
}

function CohortHierarchy({ cohortTree, onViewDetails }) {
  if (!cohortTree?.length) return null;

  return (
    <section className="cohort-hierarchy">
      <div className="hierarchy-title">
        <div>
          <h2>Live Cohort / Class Status</h2>
          <p>Quick view only. Open details for sessions, teacher, coach, and membership drill-down.</p>
        </div>
      </div>
      <div className="cohort-tree-grid">
        {cohortTree.map((cohort) => (
          <article className="cohort-card" key={cohort.code}>
            <div className="cohort-card-head">
              <div>
                <span>Cohort</span>
                <strong>{cohort.code}</strong>
                <small>{cohort.program}</small>
              </div>
              <div className="cohort-status">
                <b>{cohort.classes.length}</b>
                <small>classes</small>
              </div>
            </div>
            <div className="cohort-meta">
              <span>{cohort.status}</span>
              <span>{cohort.size}</span>
              <span>{cohort.venueHall}</span>
            </div>
            <div className="cohort-live-status">
              <div>
                <span>Pre-reg</span>
                <b>{sumCohortStat(cohort, 'preRegistered')}</b>
              </div>
              <div>
                <span>Confirmed</span>
                <b>{sumCohortStat(cohort, 'confirmed')}</b>
              </div>
              <div>
                <span>No-show</span>
                <b>{sumCohortStat(cohort, 'noShow')}</b>
              </div>
              <div>
                <span>Pay pending</span>
                <b>{sumCohortStat(cohort, 'paymentPending')}</b>
              </div>
            </div>
            <div className="cohort-class-summary">
              {cohort.classes.slice(0, 4).map((classItem) => (
                <div key={classItem.id}>
                  <strong>{classItem.name}</strong>
                  <span>{classItem.status}</span>
                </div>
              ))}
              {cohort.classes.length > 4 && <small>+ {cohort.classes.length - 4} more classes</small>}
            </div>
            <button className="cohort-detail-button" onClick={() => onViewDetails(cohort)}>
              View Details
              <ArrowRight size={15} />
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}

function sumCohortStat(cohort, key) {
  return cohort.classes.reduce((sum, classItem) => sum + (classItem.membershipStats?.[key] || 0), 0);
}

function HallManagement({ hallSessions, onNewHall, onEditHall, onDisableHall }) {
  if (!hallSessions?.length) return null;

  return (
    <section className="hall-management">
      <div className="hall-management-head">
        <div>
          <h2>Hall Management</h2>
          <p>Create halls, edit capacity/schedule, disable unavailable halls, and see class sessions using each hall.</p>
        </div>
        <button className="primary" onClick={onNewHall}>
          <Building2 size={16} />
          New Hall
        </button>
      </div>
      <div className="hall-management-grid">
        {hallSessions.map((hall) => (
          <article className={`hall-card ${hall.status !== 'active' ? 'disabled' : ''}`} key={hall.name}>
            <div className="hall-card-head">
              <div>
                <span>Hall</span>
                <strong>{hall.name}</strong>
                <small>{hall.capacity} pax / {hall.schedule}</small>
              </div>
              <b>{hall.usage}%</b>
            </div>
            <div className="hall-card-actions">
              <button onClick={() => onEditHall(hall)}>Edit Hall</button>
              <button onClick={() => onDisableHall(hall.name)} disabled={hall.status !== 'active'}>Disable Hall</button>
            </div>
            <div className="linked-sessions">
              <h3>Linked Class Sessions</h3>
              {hall.sessions.length === 0 && <p>No class sessions linked yet.</p>}
              {hall.sessions.map((session) => (
                <div className="linked-session" key={session.id}>
                  <div>
                    <strong>{session.cohort} / {session.className}</strong>
                    <span>{session.date} / {session.time}</span>
                  </div>
                  <small>{session.expectedStudents} pax / {session.status}</small>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ClassCalendar({ sessions }) {
  if (!sessions?.length) return null;
  const months = buildCalendarMonths(sessions);
  const [visibleMonthIndex, setVisibleMonthIndex] = useState(months.length > 1 ? months.length - 2 : 0);
  const safeMonthIndex = Math.min(Math.max(visibleMonthIndex, 0), months.length - 1);
  const month = months[safeMonthIndex];
  const canGoPrevious = safeMonthIndex > 0;
  const canGoNext = safeMonthIndex < months.length - 1;

  return (
    <section className="class-calendar">
      <div className="calendar-head">
        <div>
          <h2>Class Calendar</h2>
          <p>Scheduled class sessions by date, hall, cohort, and class.</p>
        </div>
        <div className="calendar-controls">
          <button
            aria-label="Previous month"
            disabled={!canGoPrevious}
            onClick={() => setVisibleMonthIndex((current) => Math.max(current - 1, 0))}
          >
            Previous
          </button>
          <strong>{month.label}</strong>
          <button
            aria-label="Next month"
            disabled={!canGoNext}
            onClick={() => setVisibleMonthIndex((current) => Math.min(current + 1, months.length - 1))}
          >
            Next
          </button>
        </div>
      </div>
      <div className="calendar-month-stack">
        <article className="calendar-month" key={month.key}>
          <div className="calendar-month-head">
            <strong>{month.label}</strong>
            <span>{month.sessions.length} sessions</span>
          </div>
          <div className="calendar-weekdays">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => <span key={day}>{day}</span>)}
          </div>
          <div className="calendar-grid" role="grid" aria-label={`${month.label} class calendar`}>
            {month.days.map((day) => (
              <div className={`calendar-day ${day.inMonth ? '' : 'muted'}`} key={`${month.key}-${day.key}`}>
                <div className="calendar-day-number">{day.date.getDate()}</div>
                <div className="calendar-events">
                  {day.sessions.map((session) => (
                    <div className="calendar-event" key={session.id}>
                      <span>{session.time}</span>
                      <b>{session.cohort} / {session.className}</b>
                      <small>{session.hall} / {session.expectedStudents} pax / {session.status}</small>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}

function buildCalendarMonths(sessions) {
  const normalized = sessions
    .map((session) => ({ ...session, parsedDate: parseCalendarDate(session.date) }))
    .filter((session) => session.parsedDate);
  const sessionsByDate = normalized.reduce((groups, session) => {
    const key = calendarDateKey(session.parsedDate);
    groups[key] = groups[key] || [];
    groups[key].push(session);
    return groups;
  }, {});
  const monthKeys = [...new Set(normalized.map((session) => calendarMonthKey(session.parsedDate)))]
    .sort((left, right) => left.localeCompare(right));

  return monthKeys.map((monthKey) => {
    const [year, monthIndexText] = monthKey.split('-');
    const monthIndex = Number(monthIndexText) - 1;
    const firstDay = new Date(Number(year), monthIndex, 1);
    const startDate = new Date(firstDay);
    startDate.setDate(1 - firstDay.getDay());
    const days = Array.from({ length: 42 }, (_, index) => {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + index);
      const key = calendarDateKey(date);
      return {
        key,
        date,
        inMonth: date.getMonth() === monthIndex,
        sessions: sessionsByDate[key] || [],
      };
    });

    return {
      key: monthKey,
      label: firstDay.toLocaleDateString('en-GB', { month: 'long', year: 'numeric' }),
      sessions: normalized.filter((session) => calendarMonthKey(session.parsedDate) === monthKey),
      days,
    };
  });
}

function parseCalendarDate(value) {
  if (!value) return null;
  if (/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    const [year, month, day] = value.split('-').map(Number);
    return new Date(year, month - 1, day);
  }
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
}

function calendarMonthKey(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
}

function calendarDateKey(date) {
  return `${calendarMonthKey(date)}-${String(date.getDate()).padStart(2, '0')}`;
}

function ClassScheduleModal({ schedule, cohortTree, halls, onSave, onClose }) {
  const [draft, setDraft] = useState(schedule);
  const classOptions = cohortTree.flatMap((cohort) =>
    cohort.classes.map((classItem) => ({
      id: classItem.id,
      label: `${cohort.code} / ${classItem.name}`,
    }))
  );
  const activeHalls = halls.filter((hall) => hall.status !== 'disabled');

  function updateField(field, value) {
    setDraft((current) => ({ ...current, [field]: value }));
  }

  return (
    <div className="modal-backdrop" role="presentation">
      <section className="record-modal schedule-editor" role="dialog" aria-modal="true" aria-label="Schedule class">
        <div className="modal-header">
          <div>
            <span>Schedule Class</span>
            <h2>Create class session</h2>
          </div>
          <button onClick={onClose}>Close</button>
        </div>
        <div className="hall-form">
          <label>
            <span>Cohort / Class</span>
            <select value={draft.classId} onChange={(event) => updateField('classId', event.target.value)}>
              {classOptions.map((option) => (
                <option key={option.id} value={option.id}>{option.label}</option>
              ))}
            </select>
          </label>
          <label>
            <span>Hall</span>
            <select value={draft.hallName} onChange={(event) => updateField('hallName', event.target.value)}>
              {activeHalls.map((hall) => (
                <option key={hall.name} value={hall.name}>{hall.name} / {hall.cap} pax</option>
              ))}
            </select>
          </label>
          <label>
            <span>Date</span>
            <input type="date" value={draft.sessionDate} onChange={(event) => updateField('sessionDate', event.target.value)} />
          </label>
          <label>
            <span>Time</span>
            <input value={draft.sessionTime} onChange={(event) => updateField('sessionTime', event.target.value)} placeholder="10:00-13:00" />
          </label>
          <label>
            <span>Expected students</span>
            <input type="number" min="0" value={draft.expectedStudents} onChange={(event) => updateField('expectedStudents', event.target.value)} />
          </label>
        </div>
        <div className="modal-footer">
          <button onClick={onClose}>Cancel</button>
          <button className="primary" onClick={() => onSave(draft)}>Schedule Class</button>
        </div>
      </section>
    </div>
  );
}

function HallEditorModal({ hall, onSave, onClose }) {
  const [draft, setDraft] = useState(hall);

  function updateField(field, value) {
    setDraft((current) => ({ ...current, [field]: value }));
  }

  return (
    <div className="modal-backdrop" role="presentation">
      <section className="record-modal hall-editor" role="dialog" aria-modal="true" aria-label="Hall editor">
        <div className="modal-header">
          <div>
            <span>{draft.mode === 'new' ? 'New Hall' : 'Edit Hall'}</span>
            <h2>{draft.name || 'Untitled Hall'}</h2>
          </div>
          <button onClick={onClose}>Close</button>
        </div>
        <div className="hall-form">
          <label>
            <span>Hall name</span>
            <input value={draft.name} onChange={(event) => updateField('name', event.target.value)} />
          </label>
          <label>
            <span>Capacity</span>
            <input type="number" min="1" value={draft.capacity} onChange={(event) => updateField('capacity', event.target.value)} />
          </label>
          <label>
            <span>Usage %</span>
            <input type="number" min="0" max="100" value={draft.usage} onChange={(event) => updateField('usage', event.target.value)} />
          </label>
          <label>
            <span>Schedule</span>
            <input value={draft.schedule} onChange={(event) => updateField('schedule', event.target.value)} />
          </label>
          <label>
            <span>Status</span>
            <select value={draft.status} onChange={(event) => updateField('status', event.target.value)}>
              <option value="active">active</option>
              <option value="disabled">disabled</option>
            </select>
          </label>
        </div>
        <div className="modal-footer">
          <button onClick={onClose}>Cancel</button>
          <button className="primary" onClick={() => onSave(draft)}>Save Hall</button>
        </div>
      </section>
    </div>
  );
}

function RegistrationEditorModal({ registration, cohortTree, onSave, onClose }) {
  const [draft, setDraft] = useState(registration);
  const cohortOptions = cohortTree?.length ? cohortTree.map((cohort) => cohort.code) : ['CP138', 'CP137', 'CP136'];

  function updateField(field, value) {
    setDraft((current) => ({ ...current, [field]: value }));
  }

  return (
    <div className="modal-backdrop" role="presentation">
      <section className="record-modal hall-editor" role="dialog" aria-modal="true" aria-label="New student registration">
        <div className="modal-header">
          <div>
            <span>New Registration</span>
            <h2>{draft.name || 'Student intake'}</h2>
          </div>
          <button onClick={onClose}>Close</button>
        </div>
        <div className="hall-form">
          <label>
            <span>Student ID</span>
            <input value={draft.studentId} onChange={(event) => updateField('studentId', event.target.value)} placeholder="Auto if blank" />
          </label>
          <label>
            <span>Student name</span>
            <input value={draft.name} onChange={(event) => updateField('name', event.target.value)} placeholder="Full name" />
          </label>
          <label>
            <span>Phone</span>
            <input value={draft.phone} onChange={(event) => updateField('phone', event.target.value)} placeholder="+60..." />
          </label>
          <label>
            <span>Cohort</span>
            <select value={draft.cohortCode} onChange={(event) => updateField('cohortCode', event.target.value)}>
              {cohortOptions.map((cohortCode) => <option key={cohortCode}>{cohortCode}</option>)}
            </select>
          </label>
          <label>
            <span>Payment status</span>
            <select value={draft.paymentStatus} onChange={(event) => updateField('paymentStatus', event.target.value)}>
              <option>Pending Finance Approval</option>
              <option>No payment</option>
              <option>Deposit paid</option>
              <option>Approved Deposit</option>
              <option>Approved Full Payment</option>
            </select>
          </label>
        </div>
        <div className="modal-footer">
          <button onClick={onClose}>Cancel</button>
          <button className="primary" onClick={() => onSave(draft)}>Create Registration</button>
        </div>
      </section>
    </div>
  );
}

function ApprovalFlowModal({ flow, columns, onSave, onClose }) {
  const [draft, setDraft] = useState(flow);
  const availableStudents = columns
    .flatMap((column) => column.students.map((student) => ({
      ...student,
      stageKey: column.key,
      stageLabel: column.label,
    })))
    .filter((student) => !flow.fromStage || student.stageKey === flow.fromStage || student.id === draft.studentId);
  const FlowIcon = flow.icon || ClipboardCheck;

  function updateField(field, value) {
    setDraft((current) => ({ ...current, [field]: value }));
  }

  return (
    <div className="modal-backdrop" role="presentation">
      <section className="record-modal hall-editor" role="dialog" aria-modal="true" aria-label={`${flow.label} approval`}>
        <div className="modal-header">
          <div>
            <span>Approval Workflow</span>
            <h2>{flow.label}</h2>
          </div>
          <button onClick={onClose}>Close</button>
        </div>
        <div className="approval-flow-summary">
          <FlowIcon size={22} />
          <div>
            <strong>{flow.reason}</strong>
            <span>{flow.fromStage} to {flow.toStage}</span>
          </div>
        </div>
        <div className="hall-form">
          <label>
            <span>Target student</span>
            <select value={draft.studentId} onChange={(event) => updateField('studentId', event.target.value)}>
              <option value="">Choose student</option>
              {availableStudents.map((student) => (
                <option key={student.id} value={student.id}>
                  {student.id} / {student.name} / {student.stageLabel}
                </option>
              ))}
            </select>
          </label>
          <label>
            <span>Requested by</span>
            <input value={draft.requestedBy} onChange={(event) => updateField('requestedBy', event.target.value)} />
          </label>
          <label>
            <span>Approved by</span>
            <input value={draft.approvedBy} onChange={(event) => updateField('approvedBy', event.target.value)} />
          </label>
          <label>
            <span>New lifecycle stage</span>
            <select value={draft.toStage} onChange={(event) => updateField('toStage', event.target.value)}>
              {[
                ['registered', 'Registered'],
                ['paid', 'Fully Paid'],
                ['basic', 'Basic Class'],
                ['advanced1', 'Advanced Phase 1'],
                ['advanced2', 'Advanced Phase 2'],
                ['advanced3', 'Advanced Phase 3'],
                ['advanced4', 'Advanced Phase 4 / Graduation'],
                ['backlog', 'Backlog'],
              ].map(([value, label]) => <option key={value} value={value}>{label}</option>)}
            </select>
          </label>
          <label>
            <span>Status after approval</span>
            <input value={draft.status} onChange={(event) => updateField('status', event.target.value)} />
          </label>
          <label>
            <span>DOE status</span>
            <select value={draft.doeStatus || ''} onChange={(event) => updateField('doeStatus', event.target.value)}>
              <option value="">Keep current DOE status</option>
              <option>Not started</option>
              <option>Not required yet</option>
              <option>DOE Pending</option>
              <option>Submitted</option>
              <option>Reviewed</option>
              <option>Final review</option>
            </select>
          </label>
          <label className="wide">
            <span>Evidence / approval note</span>
            <textarea value={draft.evidenceNote} onChange={(event) => updateField('evidenceNote', event.target.value)} />
          </label>
        </div>
        <div className="modal-footer">
          <button onClick={onClose}>Cancel</button>
          <button className="primary" onClick={() => onSave(draft)}>Approve Workflow Step</button>
        </div>
      </section>
    </div>
  );
}

function CohortEditorModal({ cohort, onSave, onClose }) {
  const [draft, setDraft] = useState(cohort);

  function updateField(field, value) {
    setDraft((current) => ({ ...current, [field]: value }));
  }

  return (
    <div className="modal-backdrop" role="presentation">
      <section className="record-modal hall-editor" role="dialog" aria-modal="true" aria-label="Create cohort">
        <div className="modal-header">
          <div>
            <span>New Cohort</span>
            <h2>{draft.cohortCode || 'Cohort setup'}</h2>
          </div>
          <button onClick={onClose}>Close</button>
        </div>
        <div className="hall-form">
          <label>
            <span>Cohort code</span>
            <input value={draft.cohortCode} onChange={(event) => updateField('cohortCode', event.target.value)} placeholder="CP140" />
          </label>
          <label>
            <span>Program</span>
            <input value={draft.program} onChange={(event) => updateField('program', event.target.value)} placeholder="Certificate in Data Analytics" />
          </label>
          <label>
            <span>Venue / default hall</span>
            <input value={draft.venueHall} onChange={(event) => updateField('venueHall', event.target.value)} />
          </label>
          <label>
            <span>Status</span>
            <select value={draft.status} onChange={(event) => updateField('status', event.target.value)}>
              <option>Planned</option>
              <option>Active</option>
              <option>Audit</option>
              <option>Completed</option>
            </select>
          </label>
          <label>
            <span>Size label</span>
            <input value={draft.sizeLabel} onChange={(event) => updateField('sizeLabel', event.target.value)} placeholder="0 students" />
          </label>
        </div>
        <div className="modal-footer">
          <button onClick={onClose}>Cancel</button>
          <button className="primary" onClick={() => onSave(draft)}>Create Cohort</button>
        </div>
      </section>
    </div>
  );
}

function CohortClassEditorModal({ classForm, cohortTree, onSave, onClose }) {
  const [draft, setDraft] = useState(classForm);

  function updateField(field, value) {
    setDraft((current) => ({ ...current, [field]: value }));
  }

  return (
    <div className="modal-backdrop" role="presentation">
      <section className="record-modal hall-editor" role="dialog" aria-modal="true" aria-label="Create cohort class">
        <div className="modal-header">
          <div>
            <span>Add Class / Phase</span>
            <h2>{draft.className || 'Class setup'}</h2>
          </div>
          <button onClick={onClose}>Close</button>
        </div>
        <div className="hall-form">
          <label>
            <span>Cohort</span>
            <select value={draft.cohortCode} onChange={(event) => updateField('cohortCode', event.target.value)}>
              {cohortTree.map((cohort) => (
                <option key={cohort.code} value={cohort.code}>{cohort.code} / {cohort.program}</option>
              ))}
            </select>
          </label>
          <label>
            <span>Class / phase name</span>
            <input value={draft.className} onChange={(event) => updateField('className', event.target.value)} placeholder="Advanced Phase 1" />
          </label>
          <label>
            <span>Class type</span>
            <input value={draft.classType} onChange={(event) => updateField('classType', event.target.value)} />
          </label>
          <label>
            <span>Sequence</span>
            <input type="number" min="1" value={draft.sequenceNo} onChange={(event) => updateField('sequenceNo', event.target.value)} />
          </label>
          <label>
            <span>Teacher</span>
            <input value={draft.teacherName} onChange={(event) => updateField('teacherName', event.target.value)} placeholder="Teacher name" />
          </label>
          <label>
            <span>Coach count</span>
            <input type="number" min="0" value={draft.coachCount} onChange={(event) => updateField('coachCount', event.target.value)} />
          </label>
          <label>
            <span>Status</span>
            <select value={draft.status} onChange={(event) => updateField('status', event.target.value)}>
              <option>Planned</option>
              <option>In Progress</option>
              <option>Active</option>
              <option>Completed</option>
              <option>DOE Pending</option>
            </select>
          </label>
        </div>
        <div className="modal-footer">
          <button onClick={onClose}>Cancel</button>
          <button className="primary" onClick={() => onSave(draft)}>Create Class</button>
        </div>
      </section>
    </div>
  );
}

function CohortDetailModal({ cohort, logs, onClose }) {
  const [activeTab, setActiveTab] = useState('Summary');
  const tabs = ['Summary', 'Classes', 'Sessions', 'Logs'];
  const relatedLogs = logs
    .filter((log) => log.objectId === cohort.code || log.detail.includes(cohort.code))
    .slice(0, 10);
  const allSessions = cohort.classes.flatMap((classItem) =>
    classItem.sessions.map((session) => ({
      ...session,
      className: classItem.name,
      teacher: classItem.teacher,
      classStatus: classItem.status,
    }))
  );

  return (
    <div className="modal-backdrop" role="presentation">
      <section className="record-modal" role="dialog" aria-modal="true" aria-label={`${cohort.code} cohort detail`}>
        <div className="modal-header">
          <div>
            <span>Cohort Detail</span>
            <h2>{cohort.code} / {cohort.program}</h2>
          </div>
          <button onClick={onClose}>Close</button>
        </div>
        <div className="modal-tabs">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={tab === activeTab ? 'active' : ''}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        {activeTab === 'Summary' && (
          <div className="detail-grid modal-tab-panel">
            {[
              ['Cohort', cohort.code],
              ['Program', cohort.program],
              ['Status', cohort.status],
              ['Size', cohort.size],
              ['Venue / hall', cohort.venueHall],
              ['Classes', cohort.classes.length],
              ['Pre-registered', sumCohortStat(cohort, 'preRegistered')],
              ['Confirmed', sumCohortStat(cohort, 'confirmed')],
              ['No-show', sumCohortStat(cohort, 'noShow')],
              ['Payment pending', sumCohortStat(cohort, 'paymentPending')],
            ].map(([label, value]) => (
              <div className="detail-field" key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
        )}
        {activeTab === 'Classes' && (
          <DoeModalTable
            headers={['Class', 'Type', 'Teacher', 'Status', 'Pre-reg', 'Confirmed', 'No-show', 'Pay pending']}
            rows={cohort.classes.map((classItem) => [
              classItem.name,
              classItem.type,
              classItem.teacher,
              classItem.status,
              classItem.membershipStats?.preRegistered || 0,
              classItem.membershipStats?.confirmed || 0,
              classItem.membershipStats?.noShow || 0,
              classItem.membershipStats?.paymentPending || 0,
            ])}
          />
        )}
        {activeTab === 'Sessions' && (
          <DoeModalTable
            headers={['Class', 'Date', 'Hall', 'Time', 'Expected', 'Status', 'Teacher']}
            rows={allSessions.length ? allSessions.map((session) => [
              session.className,
              session.date,
              session.hall,
              session.time,
              session.expectedStudents,
              session.status,
              session.teacher,
            ]) : [['-', 'No sessions scheduled yet', '-', '-', '-', '-', '-']]}
          />
        )}
        {activeTab === 'Logs' && (
          <div className="object-log modal-tab-panel">
            <h3>Cohort Object Log</h3>
            {relatedLogs.length === 0 && <p>No cohort log yet.</p>}
            {relatedLogs.map((log) => (
              <article key={log.id}>
                <div>
                  <strong>{log.action}</strong>
                  <span>{log.detail}</span>
                </div>
                <small>{log.at} · {log.actor}</small>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

function DoePhaseModal({ phase, logs, onClose }) {
  const [activeTab, setActiveTab] = useState('Summary');
  const relatedLogs = logs
    .filter((log) =>
      log.objectId === phase.cohortCode ||
      log.objectId === phase.classId ||
      phase.students.some((student) => log.objectId === student.studentId || log.detail.includes(student.studentId))
    )
    .slice(0, 10);
  const tabs = ['Summary', 'Students', 'Coaches', 'DOE Status', 'Logs'];

  return (
    <div className="modal-backdrop" role="presentation">
      <section className="record-modal" role="dialog" aria-modal="true" aria-label={`${phase.phaseName} DOE detail`}>
        <div className="modal-header">
          <div>
            <span>{phase.cohortCode} DOE</span>
            <h2>{phase.phaseName}</h2>
          </div>
          <button onClick={onClose}>Close</button>
        </div>
        <div className="modal-tabs">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={tab === activeTab ? 'active' : ''}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        {activeTab === 'Summary' && (
          <div className="detail-grid modal-tab-panel">
            {[
              ['Cohort', phase.cohortCode],
              ['Program', phase.program],
              ['Class ID', phase.classId],
              ['Teacher', phase.teacher],
              ['Students', phase.stats.totalStudents],
              ['DOE submitted', phase.stats.submitted],
              ['DOE pending', phase.stats.pending],
              ['Coach follow-up', phase.stats.coachFollowUpPending],
              ['Teacher review', phase.stats.teacherReviewStatus],
              ['Next session', phase.sessions[0] ? `${phase.sessions[0].date} / ${phase.sessions[0].time} / ${phase.sessions[0].hall}` : 'Not scheduled'],
            ].map(([label, value]) => (
              <div className="detail-field" key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
        )}
        {activeTab === 'Students' && (
          <DoeModalTable
            headers={['Student ID', 'Name', 'Lifecycle', 'DOE Status', 'Coach Status']}
            rows={phase.students.map((student) => [
              student.studentId,
              student.name,
              student.currentLifecycleStatus,
              student.doeStatus,
              student.coachStatus,
            ])}
          />
        )}
        {activeTab === 'Coaches' && (
          <DoeModalTable
            headers={['Coach ID', 'Name', 'Linked Student', 'Graduate From', 'Assignment', 'Status']}
            rows={phase.coaches.length ? phase.coaches.map((coach) => [
              coach.coachId,
              coach.name,
              coach.studentId,
              coach.graduateFrom,
              coach.assignment,
              coach.status,
            ]) : [['-', 'No coach assigned yet', '-', '-', phase.phaseName, 'Needs assignment']]}
          />
        )}
        {activeTab === 'DOE Status' && (
          <div className="doe-status-board modal-tab-panel">
            {phase.students.map((student) => (
              <article key={student.studentId}>
                <div>
                  <strong>{student.name}</strong>
                  <span>{student.studentId} / {student.currentLifecycleStatus}</span>
                </div>
                <b>{student.doeStatus}</b>
                <small>{student.coachStatus}</small>
              </article>
            ))}
          </div>
        )}
        {activeTab === 'Logs' && (
          <div className="object-log modal-tab-panel">
            <h3>DOE Object Log</h3>
            {relatedLogs.length === 0 && <p>No DOE phase log yet.</p>}
            {relatedLogs.map((log) => (
              <article key={log.id}>
                <div>
                  <strong>{log.action}</strong>
                  <span>{log.detail}</span>
                </div>
                <small>{log.at} · {log.actor}</small>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

function DoeModalTable({ headers, rows }) {
  return (
    <div className="record-table-wrap modal-tab-panel">
      <table className="record-table">
        <thead>
          <tr>{headers.map((header) => <th key={header}>{header}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={`${row[0]}-${rowIndex}`}>
              {row.map((cell, cellIndex) => <td key={`${row[0]}-${cellIndex}`}>{cell}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function RecordTable({ headers, rows, page, onViewRecord }) {
  return (
    <div className="record-table-wrap">
      <table className="record-table">
        <thead>
          <tr>
            {headers.map((header) => <th key={header}>{header}</th>)}
            <th>Open</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={`${row[0]}-${index}`}>
              {row.map((cell, cellIndex) => <td key={`${row[0]}-${index}-${cellIndex}`}>{cell}</td>)}
              <td>
                <button className="mini-link" onClick={() => onViewRecord(page, headers, row)}>
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function RecordDetailModal({ record, logs, relationships, onAddCallCenterContact, onUpdateStudentStatus, onClose }) {
  const [activeTab, setActiveTab] = useState('Summary');
  const [contactDraft, setContactDraft] = useState({
    method: 'Call',
    direction: 'Outbound',
    result: 'Answered',
    note: '',
    nextFollowUpAt: '',
    handledBy: 'Call Center A',
  });
  const personLinkedStudentId = record.objectId.startsWith('PER-S') ? record.objectId.replace('PER-', '') : fieldValue(record, 'Student ID');
  const relatedObjectIds = [record.objectId, personLinkedStudentId, `REG-${personLinkedStudentId}`].filter((value) => value && value !== '-');
  const relatedLogs = logs
    .filter((log) => relatedObjectIds.includes(log.objectId) || relatedObjectIds.some((id) => log.detail.includes(id)))
    .slice(0, 8);
  const tabs = buildRecordTabs(record, relatedLogs, relationships);
  const effectiveActiveTab = tabs.some((tab) => tab.label === activeTab) ? activeTab : tabs[0].label;
  const activeTabRows = tabs.find((tab) => tab.label === effectiveActiveTab)?.rows || tabs[0].rows;
  const registrationProfile = relationships?.registrations?.[record.objectId];
  const studentId = record.objectId.startsWith('S') ? record.objectId : fieldValue(record, 'Student ID') !== '-' ? fieldValue(record, 'Student ID') : registrationProfile?.studentId;

  function saveContactLog(resultOverride) {
    const payload = {
      registrationId: record.objectId,
      ...contactDraft,
      result: resultOverride || contactDraft.result,
      note: contactDraft.note || `${resultOverride || contactDraft.result} saved from registration detail popup.`,
    };
    onAddCallCenterContact?.(payload);
    setContactDraft((current) => ({
      ...current,
      result: 'Answered',
      note: '',
      nextFollowUpAt: '',
    }));
  }

  return (
    <div className="modal-backdrop" role="presentation">
      <section className="record-modal" role="dialog" aria-modal="true" aria-label={`${record.objectType} detail`}>
        <div className="modal-header">
          <div>
            <span>{record.objectType}</span>
            <h2>{record.objectId}</h2>
          </div>
          <button onClick={onClose}>Close</button>
        </div>
        <div className="modal-tabs">
          {tabs.map((tab) => (
            <button
              key={tab.label}
              className={tab.label === effectiveActiveTab ? 'active' : ''}
              onClick={() => setActiveTab(tab.label)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        {effectiveActiveTab === 'Call Center' ? (
          <CallCenterContactPanel
            profile={registrationProfile}
            draft={contactDraft}
            onDraft={setContactDraft}
            onSave={saveContactLog}
          />
        ) : effectiveActiveTab === 'Status' ? (
          <StudentStatusPanel
            record={record}
            studentId={studentId}
            onSave={onUpdateStudentStatus}
          />
        ) : effectiveActiveTab === 'Logs' ? (
          <div className="object-log modal-tab-panel">
            <h3>Object Log</h3>
            {relatedLogs.length === 0 && <p>No object log yet.</p>}
            {relatedLogs.map((log) => (
              <article key={log.id}>
                <div>
                  <strong>{log.action}</strong>
                  <span>{log.detail}</span>
                </div>
                <small>{log.at} · {log.actor}</small>
              </article>
            ))}
          </div>
        ) : (
          <div className="detail-grid modal-tab-panel">
            {activeTabRows.map(([label, value]) => (
              <div className="detail-field" key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

function StudentStatusPanel({ record, studentId, onSave }) {
  const stageOptions = [
    ['registered', 'Registered'],
    ['paid', 'Fully Paid'],
    ['basic', 'Basic Class'],
    ['advanced1', 'Advanced Phase 1'],
    ['advanced2', 'Advanced Phase 2'],
    ['advanced3', 'Advanced Phase 3'],
    ['advanced4', 'Advanced Phase 4 / Graduation'],
    ['backlog', 'Backlog'],
  ];
  const currentStageText = fieldValue(record, 'Stage') || fieldValue(record, 'Phase') || '';
  const currentStage = stageOptions.find(([, label]) => label === currentStageText)?.[0] || 'registered';
  const [draft, setDraft] = useState({
    studentId,
    stageKey: currentStage,
    status: fieldValue(record, 'Status') || fieldValue(record, 'DOE Status') || 'Updated by admin',
    doeStatus: fieldValue(record, 'DOE Status') === '-' ? '' : fieldValue(record, 'DOE Status'),
  });

  function update(field, value) {
    setDraft((current) => ({ ...current, [field]: value }));
  }

  return (
    <div className="student-status-panel modal-tab-panel">
      <section className="call-center-form">
        <label>
          Student ID
          <input value={draft.studentId} onChange={(event) => update('studentId', event.target.value)} />
        </label>
        <label>
          Lifecycle stage
          <select value={draft.stageKey} onChange={(event) => update('stageKey', event.target.value)}>
            {stageOptions.map(([value, label]) => <option key={value} value={value}>{label}</option>)}
          </select>
        </label>
        <label>
          Status text
          <input value={draft.status} onChange={(event) => update('status', event.target.value)} placeholder="e.g. Confirmed Class Member" />
        </label>
        <label>
          DOE status
          <select value={draft.doeStatus} onChange={(event) => update('doeStatus', event.target.value)}>
            <option value="">Keep current DOE status</option>
            <option>Not started</option>
            <option>Not required yet</option>
            <option>DOE Pending</option>
            <option>Submitted</option>
            <option>Reviewed</option>
            <option>Final review</option>
          </select>
        </label>
        <div className="call-center-buttons">
          <button onClick={() => onSave?.(draft)}>Save Student Status</button>
          <button onClick={() => onSave?.({ ...draft, stageKey: 'paid', status: 'Finance cleared / Fully Paid' })}>Mark Fully Paid</button>
          <button onClick={() => onSave?.({ ...draft, stageKey: 'basic', status: 'Entered Basic Class' })}>Enter Basic</button>
          <button onClick={() => onSave?.({ ...draft, stageKey: 'advanced2', status: 'DOE Pending', doeStatus: 'DOE Pending' })}>Move To DOE</button>
          <button onClick={() => onSave?.({ ...draft, stageKey: 'backlog', status: 'Backlog Review Required' })}>Send Backlog</button>
        </div>
      </section>
    </div>
  );
}

function CallCenterContactPanel({ profile, draft, onDraft, onSave }) {
  const logs = profile?.callCenterLogs || [];
  const update = (field, value) => onDraft((current) => ({ ...current, [field]: value }));

  if (!profile) {
    return (
      <div className="call-center-modal modal-tab-panel">
        <p>No call center profile found for this record.</p>
      </div>
    );
  }

  return (
    <div className="call-center-modal modal-tab-panel">
      <section className="call-center-profile">
        <div>
          <span>Student</span>
          <strong>{profile.name}</strong>
          <small>{profile.studentId} · {profile.phone}</small>
        </div>
        <div>
          <span>Current Status</span>
          <strong>{profile.callCenterStatus}</strong>
          <small>{profile.callCenterNote}</small>
        </div>
        <div>
          <span>Payment Gate</span>
          <strong>{profile.paymentStatus}</strong>
          <small>{profile.cohort} · {profile.status}</small>
        </div>
      </section>

      <section className="call-center-form">
        <label>
          Method
          <select value={draft.method} onChange={(event) => update('method', event.target.value)}>
            {['Call', 'WhatsApp', 'SMS', 'Email', 'In Person'].map((value) => <option key={value}>{value}</option>)}
          </select>
        </label>
        <label>
          Direction
          <select value={draft.direction} onChange={(event) => update('direction', event.target.value)}>
            {['Outbound', 'Inbound'].map((value) => <option key={value}>{value}</option>)}
          </select>
        </label>
        <label>
          Result
          <select value={draft.result} onChange={(event) => update('result', event.target.value)}>
            {['Answered', 'No Answer', 'Wrong Number', 'Waiting Reply', 'Confirmed', 'Rejected', 'Need Follow Up'].map((value) => <option key={value}>{value}</option>)}
          </select>
        </label>
        <label>
          Next Follow Up
          <input value={draft.nextFollowUpAt} onChange={(event) => update('nextFollowUpAt', event.target.value)} placeholder="30 May 2026, 10:00 AM" />
        </label>
        <label>
          Handled By
          <input value={draft.handledBy} onChange={(event) => update('handledBy', event.target.value)} />
        </label>
        <label className="wide">
          Contact Note
          <textarea value={draft.note} onChange={(event) => update('note', event.target.value)} placeholder="What did the student say? What must the next staff know?" />
        </label>
        <div className="call-center-buttons">
          <button onClick={() => onSave()}>Save Call Log</button>
          <button onClick={() => onSave('Confirmed')}>Mark Confirmed</button>
          <button onClick={() => onSave('Waiting Reply')}>Waiting Reply</button>
          <button onClick={() => onSave('No Answer')}>No Answer</button>
          <button onClick={() => onSave('Wrong Number')}>Wrong Number</button>
          <button onClick={() => onSave('Rejected')}>Call Failed</button>
        </div>
      </section>

      <section className="call-center-timeline">
        <h3>Contact Timeline</h3>
        {logs.length === 0 && <p>No contact attempt saved yet.</p>}
        {logs.map((log) => (
          <article key={log.id}>
            <div>
              <strong>{log.result}</strong>
              <span>{log.method} · {log.direction} · {log.note}</span>
              {log.nextFollowUpAt && <small>Next follow-up: {log.nextFollowUpAt}</small>}
            </div>
            <small>{log.createdAt} · {log.handledBy}</small>
          </article>
        ))}
      </section>
    </div>
  );
}

function fieldValue(record, label) {
  return record.fields.find(([field]) => field === label)?.[1] || '-';
}

function moneyFromCents(cents = 0) {
  return `RM ${(Number(cents || 0) / 100).toLocaleString('en-MY', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

function buildRecordTabs(record, relatedLogs, relationships) {
  const summaryRows = record.fields;
  const studentId = fieldValue(record, 'Student ID');
  const invoiceId = fieldValue(record, 'Invoice');
  const registrationId = fieldValue(record, 'Registration');
  const financeSeed = relationships?.finance || financeRelationshipSeed;
  const studentSeed = relationships?.students || studentRelationshipSeed;
  const coachSeed = relationships?.coaches || coachRelationshipSeed;
  const registrationSeed = relationships?.registrations || {};
  const financeKey = financeSeed[record.objectId] || financeSeed[invoiceId];
  const registrationProfile = registrationSeed[record.objectId] || registrationSeed[registrationId];
  const registrationByStudent = Object.values(registrationSeed).find((profile) => profile.studentId && (
    profile.studentId === studentId ||
    profile.studentId === record.objectId ||
    `PER-${profile.studentId}` === record.objectId
  ));
  const profileFromRegistration = registrationProfile || registrationByStudent;
  const studentFromPersonId = record.objectId.startsWith('PER-S') ? record.objectId.replace('PER-', '') : '';
  const studentKey = record.objectId.startsWith('S')
    ? record.objectId
    : studentId !== '-'
      ? studentId
      : profileFromRegistration?.studentId || studentFromPersonId || '-';
  const studentProfile = studentSeed[studentKey] || {
    doe: record.page === 'DOE' ? fieldValue(record, 'DOE Status') : 'Unknown',
    liveCohort: fieldValue(record, 'Cohort'),
    enrollments: [`${fieldValue(record, 'Cohort')} - ${fieldValue(record, 'Stage') || fieldValue(record, 'Phase') || 'Linked'}`],
    finance: financeKey ? [`${record.objectId} - ${financeKey.approval}`] : ['No linked finance record in demo seed'],
    coach: 'No coach role linked',
  };
  const coachProfile = coachSeed[record.objectId];
  const coachRoles = Object.values(coachSeed).filter((profile) => profile.studentId === studentKey || profile.name === fieldValue(record, 'Name'));
  const personRoles = relationships?.personRoles?.[record.objectId] || relationships?.personRoles?.[`PER-${studentKey}`] || [];
  const financeAccount = relationships?.personFinanceAccounts?.[record.objectId] || relationships?.personFinanceAccounts?.[`PER-${studentKey}`];
  const isPersonRecord = ['Persons', 'CRM', 'Person'].includes(record.page);

  if (isPersonRecord) {
    const cohortRoleRows = [
      ...personRoles.map((role) => [role.role_type, `${role.role_ref_id}${role.cohort_code ? ` / ${role.cohort_code}` : ''} / ${role.role_status}`]),
      ...(personRoles.length ? [] : studentProfile.enrollments.map((entry) => ['Student path', entry])),
      ...(personRoles.length ? [] : coachRoles.map((profile) => ['Coach role', `${profile.currentAssignment} / graduate source: ${profile.graduateFrom}`])),
    ];
    if (cohortRoleRows.length === 0) {
      cohortRoleRows.push(['Current cohort', `${fieldValue(record, 'Cohort')} / ${fieldValue(record, 'Role')}`]);
    }
    const dcodeStudentId = ['Basic Class', 'Advanced Phase 1', 'Advanced Phase 2', 'Advanced Phase 3', 'Advanced Phase 4 / Graduation'].includes(fieldValue(record, 'Stage'))
      ? studentKey
      : studentKey !== '-' && fieldValue(record, 'Role').includes('Coach')
        ? studentKey
        : 'Pending until Basic Class confirmation';
    const studentRoleId = personRoles.find((role) => role.role_type === 'Student')?.role_ref_id || dcodeStudentId;
    const coachRoleId = personRoles.find((role) => role.role_type === 'Coach')?.role_ref_id || coachRoles[0]?.coachId || 'No coach ID yet';
    const ledgerRows = financeAccount?.entries || [];
    const financeRows = financeAccount ? [
      ['Total paid', moneyFromCents(financeAccount.totalPaidCents)],
      ['Used / consumed', moneyFromCents(financeAccount.totalUsedCents)],
      ['Available balance', moneyFromCents(financeAccount.availableCents)],
      ['Pending money', moneyFromCents(financeAccount.pendingCents)],
      ['Payment count', ledgerRows.filter((entry) => ['Deposit', 'Full Payment', 'Transfer Credit'].includes(entry.transaction_type)).length],
      ...ledgerRows.map((entry) => [
        `${entry.transaction_type} / ${entry.cohort_code || '-'}`,
        `${moneyFromCents(entry.money_direction === 'out' ? Math.abs(entry.amount_cents) : entry.amount_cents)} / ${entry.transaction_status} / ${entry.source_ref}`,
      ]),
    ] : [
      ['Active money status', studentProfile.finance.join(' | ')],
      ['Available credit / transfer', studentProfile.finance.join(' ').includes('TRF') ? 'Transfer credit pending approval' : 'No active transfer credit shown'],
      ['Account note', 'No ledger entries yet for this person'],
    ];

    return [
      {
        label: 'Profile',
        rows: [
          ['Person ID', record.objectId],
          ['Dcode Student ID', studentRoleId],
          ['Dcode Coach ID', coachRoleId],
          ['Name', fieldValue(record, 'Name')],
          ['Phone', profileFromRegistration?.phone || 'Not captured in this row'],
          ['Primary role now', fieldValue(record, 'Role')],
          ['Current cohort', fieldValue(record, 'Cohort')],
          ['Current status', fieldValue(record, 'Status')],
        ],
      },
      {
        label: 'Cohort Roles',
        rows: [
          ...cohortRoleRows,
          ['DOE rule', 'DOE is checked inside the cohort/phase role, not as a standalone person tab'],
          ['Coach rule', 'Coach role is shown by cohort assignment, e.g. student in CP100 and coach in CP120'],
        ],
      },
      {
        label: 'Finance Account',
        rows: [
          ['Account owner', `${record.objectId} / ${fieldValue(record, 'Name')}`],
          ['Personal tax TIN', financeAccount?.taxTin || 'Not captured'],
          ...financeRows,
          ['Class-entry rule', 'Only finance-approved money can unlock class membership'],
        ],
      },
      {
        label: 'Logs',
        rows: relatedLogs.length ? relatedLogs.map((log) => [log.action, `${log.at} - ${log.detail}`]) : [['No logs yet', 'Any action related to this person will be saved here']],
      },
    ];
  }

  const tabs = [
    { label: 'Summary', rows: summaryRows },
  ];

  if (['Students', 'Persons', 'CRM', 'Person', 'Backlog', 'DOE'].includes(record.page) || studentKey !== '-') {
    tabs.push({
      label: 'Cohorts',
      rows: [
        ['Current live cohort', studentProfile.liveCohort],
        ['Enrollment history', studentProfile.enrollments.join(' | ')],
        ['Current stage', fieldValue(record, 'Stage') || fieldValue(record, 'Phase') || fieldValue(record, 'Status')],
      ],
    });
    tabs.push({
      label: 'DOE',
      rows: [
        ['DOE status', studentProfile.doe],
        ['DOE belongs to', 'Cohort phase, not standalone student spreadsheet'],
        ['Teacher visibility', 'Teacher sees DOE with class status and coach follow-up'],
      ],
    });
    tabs.push({
      label: 'Finance',
      rows: [
        ['Finance links', studentProfile.finance.join(' | ')],
        ['Class entry rule', 'Only finance-cleared students can enter Basic class'],
        ['Backlog rule', 'Backlog re-entry requires double verification'],
      ],
    });
    tabs.push({
      label: 'Coach Link',
      rows: [
        ['Coach eligibility', studentProfile.coach],
        ['Rule', 'Coach is a Person who previously completed student lifecycle'],
        ['Canonical link', `person -> student -> graduation -> coach role`],
      ],
    });
    tabs.push({
      label: 'Status',
      rows: [
        ['Student ID', studentKey],
        ['Current stage', fieldValue(record, 'Stage') || fieldValue(record, 'Phase') || fieldValue(record, 'Status')],
        ['Current status', fieldValue(record, 'Status') || fieldValue(record, 'DOE Status')],
      ],
    });
  }

  if (record.page === 'Coaches' || coachProfile) {
    const profile = coachProfile || {
      studentId,
      name: fieldValue(record, 'Name'),
      graduateFrom: fieldValue(record, 'Graduate From'),
      currentAssignment: fieldValue(record, 'Assignment'),
    };
    tabs.push({
      label: 'Student Origin',
      rows: [
        ['Original student ID', profile.studentId],
        ['Coach name', profile.name],
        ['Graduated from', profile.graduateFrom],
        ['Current assignment', profile.currentAssignment],
      ],
    });
  }

  if (['Finance', 'Payments', 'Transfers', 'Adjustments'].includes(record.page) || financeKey) {
    const financeProfile = financeKey || {
      studentId,
      registrationId,
      cohort: fieldValue(record, 'Cohort'),
      approval: fieldValue(record, 'Status'),
      nextGate: 'Pending workflow decision',
    };
    tabs.push({
      label: 'Approval Links',
      rows: [
        ['Student ID', financeProfile.studentId],
        ['Registration', financeProfile.registrationId],
        ['Cohort', financeProfile.cohort],
        ['Approval status', financeProfile.approval],
        ['Next gate', financeProfile.nextGate],
      ],
    });
  }

  if (record.page === 'Registrations' || registrationProfile) {
    const profile = registrationProfile || {
      studentId,
      phone: 'Phone not captured yet',
      callCenterStatus: fieldValue(record, 'Call Center'),
      callCenterLogs: [],
    };
    tabs.push({
      label: 'Call Center',
      rows: [
        ['Student ID', profile.studentId],
        ['Phone', profile.phone],
        ['Current call status', profile.callCenterStatus],
        ['Contact attempts', profile.callCenterLogs.length],
      ],
    });
  }

  tabs.push({
    label: 'Logs',
    rows: relatedLogs.map((log) => [log.action, `${log.at} - ${log.detail}`]),
  });

  return tabs;
}

const rootElement = document.getElementById('root');
const appRoot = window.__dcodeAppRoot || createRoot(rootElement);
window.__dcodeAppRoot = appRoot;
appRoot.render(<App />);
