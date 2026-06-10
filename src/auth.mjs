const defaultAdminUser = 'admin';
const defaultAdminPassword = 'dcode2026';

export function getAdminCredentials(env = {}) {
  return {
    username: String(env.VITE_ADMIN_USERNAME || defaultAdminUser).trim(),
    password: String(env.VITE_ADMIN_PASSWORD || defaultAdminPassword).trim(),
  };
}

export function validateAdminLogin({ username, password } = {}, env = {}) {
  const credentials = getAdminCredentials(env);
  return (
    String(username || '').trim() === credentials.username &&
    String(password || '').trim() === credentials.password
  );
}
