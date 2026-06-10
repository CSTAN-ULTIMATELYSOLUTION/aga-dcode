import test from 'node:test';
import assert from 'node:assert/strict';

import { getAdminCredentials, validateAdminLogin } from '../src/auth.mjs';

test('validateAdminLogin accepts the default localhost admin credentials', () => {
  assert.equal(validateAdminLogin({ username: 'admin', password: 'dcode2026' }), true);
});

test('validateAdminLogin rejects wrong credentials and supports env overrides', () => {
  const env = {
    VITE_ADMIN_USERNAME: 'manager',
    VITE_ADMIN_PASSWORD: 'secret',
  };

  assert.deepEqual(getAdminCredentials(env), { username: 'manager', password: 'secret' });
  assert.equal(validateAdminLogin({ username: 'admin', password: 'dcode2026' }, env), false);
  assert.equal(validateAdminLogin({ username: 'manager', password: 'secret' }, env), true);
});
