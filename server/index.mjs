import http from 'node:http';
import {
  approveSchema,
  addCallCenterContactLog,
  approvePayment,
  callCenterConfirmRegistration,
  confirmFirstDayAttendance,
  createCohort,
  createCohortClass,
  createHall,
  createClassSession,
  createRegistration,
  disableHall,
  enrollApprovedRegistration,
  generateClassReport,
  generateCohortManagerReport,
  generateReport,
  getAppState,
  markNoShow,
  moveFirst,
  rejectPayment,
  requestPaymentCorrection,
  requestStudentReply,
  resolveBacklog,
  scheduleClass,
  submitPaymentSlip,
  submitDoe,
  updateStudentStatus,
  updateHall,
  writeObjectLog,
} from './database.mjs';
import { handleCheckinRequest } from '../api/_checkin-core.mjs';

const port = Number(process.env.API_PORT || 5174);

function sendJson(response, status, payload) {
  response.writeHead(status, {
    'content-type': 'application/json',
    'access-control-allow-origin': '*',
    'access-control-allow-methods': 'GET,POST,PATCH,OPTIONS',
    'access-control-allow-headers': 'content-type',
  });
  response.end(JSON.stringify(payload));
}

function readBody(request) {
  return new Promise((resolve, reject) => {
    let body = '';
    request.on('data', (chunk) => {
      body += chunk;
    });
    request.on('end', () => {
      if (!body) resolve({});
      else {
        try {
          resolve(JSON.parse(body));
        } catch (error) {
          reject(error);
        }
      }
    });
  });
}

const actionHandlers = {
  createRegistration,
  submitPaymentSlip,
  approvePayment,
  rejectPayment,
  requestPaymentCorrection,
  callCenterConfirmRegistration,
  requestStudentReply,
  enrollApprovedRegistration,
  confirmFirstDayAttendance,
  markNoShow,
  verifyPayment: () => moveFirst('registered', 'paid', 'Payment verified just now', 'No registered students waiting for payment.'),
  startBasicClass: () => moveFirst('paid', 'basic', 'Entered basic class just now', 'No fully paid students ready for class entry.'),
  moveToAdvanced: () => moveFirst('basic', 'advanced1', 'Advanced Phase 1 started', 'No basic class students ready to advance.'),
  startDoe: () => moveFirst('advanced1', 'advanced2', 'DOE Pending', 'No Advanced Phase 1 students ready for DOE.'),
  submitDoe,
  updateStudentStatus,
  resolveBacklog,
  scheduleClass,
  generateReport,
  generateClassReport,
  generateCohortManagerReport,
  approveSchema,
  addCallCenterContactLog,
};

const server = http.createServer(async (request, response) => {
  if (request.method === 'OPTIONS') {
    sendJson(response, 200, { ok: true });
    return;
  }

  try {
    const url = new URL(request.url, `http://${request.headers.host}`);

    if (url.pathname === '/api/checkin') {
      await handleCheckinRequest(request, response);
      return;
    }

    if (request.method === 'GET' && url.pathname === '/api/app-state') {
      sendJson(response, 200, getAppState());
      return;
    }

    if (request.method === 'POST' && url.pathname === '/api/actions') {
      const body = await readBody(request);
      const handler = actionHandlers[body.action];
      if (!handler) {
        sendJson(response, 404, { error: `Unknown action: ${body.action}` });
        return;
      }
      const notice = handler(body.payload || {});
      sendJson(response, 200, { notice, state: getAppState() });
      return;
    }

    if (request.method === 'POST' && url.pathname === '/api/halls') {
      const body = await readBody(request);
      const notice = createHall(body);
      sendJson(response, 200, { notice, state: getAppState() });
      return;
    }

    if (request.method === 'POST' && url.pathname === '/api/cohorts') {
      const body = await readBody(request);
      const notice = createCohort(body);
      sendJson(response, 200, { notice, state: getAppState() });
      return;
    }

    if (request.method === 'POST' && url.pathname === '/api/cohort-classes') {
      const body = await readBody(request);
      const notice = createCohortClass(body);
      sendJson(response, 200, { notice, state: getAppState() });
      return;
    }

    if (request.method === 'PATCH' && url.pathname === '/api/halls') {
      const body = await readBody(request);
      const notice = updateHall(body);
      sendJson(response, 200, { notice, state: getAppState() });
      return;
    }

    if (request.method === 'POST' && url.pathname === '/api/halls/disable') {
      const body = await readBody(request);
      const notice = disableHall(body);
      sendJson(response, 200, { notice, state: getAppState() });
      return;
    }

    if (request.method === 'POST' && url.pathname === '/api/class-sessions') {
      const body = await readBody(request);
      const notice = createClassSession(body);
      sendJson(response, 200, { notice, state: getAppState() });
      return;
    }

    if (request.method === 'POST' && url.pathname === '/api/view-record') {
      const body = await readBody(request);
      writeObjectLog(body.objectId, body.objectType, 'Viewed record', `Opened ${body.objectType} detail for ${body.objectId}.`);
      sendJson(response, 200, { state: getAppState() });
      return;
    }

    sendJson(response, 404, { error: 'Not found' });
  } catch (error) {
    sendJson(response, 500, { error: error.message });
  }
});

server.listen(port, '127.0.0.1', () => {
  console.log(`Dcode local SQL API listening on http://127.0.0.1:${port}`);
});
