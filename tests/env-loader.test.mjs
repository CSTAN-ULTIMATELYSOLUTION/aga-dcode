import test from 'node:test';
import assert from 'node:assert/strict';

import { applyEnvFiles, parseEnvFile } from '../scripts/env-loader.mjs';

test('parseEnvFile reads simple quoted and unquoted values', () => {
  assert.deepEqual(parseEnvFile(`
SUPABASE_URL=https://example.supabase.co
SUPABASE_SERVICE_ROLE_KEY="secret value"
EMPTY=
# comment
  `), {
    SUPABASE_URL: 'https://example.supabase.co',
    SUPABASE_SERVICE_ROLE_KEY: 'secret value',
    EMPTY: '',
  });
});

test('applyEnvFiles gives existing shell environment priority', () => {
  const env = { SUPABASE_URL: 'from-shell' };
  applyEnvFiles(env, [
    ['.env.local', 'SUPABASE_URL=from-file\nSUPABASE_SERVICE_ROLE_KEY=from-local\n'],
    ['.env', 'SUPABASE_SERVICE_ROLE_KEY=from-env\n'],
  ]);

  assert.equal(env.SUPABASE_URL, 'from-shell');
  assert.equal(env.SUPABASE_SERVICE_ROLE_KEY, 'from-local');
});
