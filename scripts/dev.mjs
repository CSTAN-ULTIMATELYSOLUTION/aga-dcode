import { spawn } from 'node:child_process';
import { loadEnvFiles } from './env-loader.mjs';

loadEnvFiles();

const loadedSupabaseEnv = Boolean(process.env.SUPABASE_URL && (process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SERVICE_KEY));
console.log(
  loadedSupabaseEnv
    ? 'Local Supabase env loaded for check-in API.'
    : 'No local Supabase env found. Check-in API will use localhost demo fallback.'
);

const children = [
  spawn(process.execPath, ['server/index.mjs'], { stdio: 'inherit' }),
  spawn(process.execPath, ['node_modules/vite/bin/vite.js', '--host', '0.0.0.0'], { stdio: 'inherit' }),
];

function shutdown() {
  for (const child of children) child.kill('SIGTERM');
}

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);

for (const child of children) {
  child.on('exit', (code) => {
    if (code && code !== 143) {
      shutdown();
      process.exit(code);
    }
  });
}
