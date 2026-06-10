module.exports = async function handler(request, response) {
  const { handleCheckinRequest } = await import('./_checkin-core.mjs');
  return handleCheckinRequest(request, response);
};
