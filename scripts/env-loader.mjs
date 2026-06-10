import { existsSync, readFileSync } from 'node:fs';

export function parseEnvFile(contents) {
  const values = {};
  for (const rawLine of String(contents).split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith('#')) continue;
    const match = line.match(/^([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)$/);
    if (!match) continue;
    const [, key, rawValue] = match;
    values[key] = stripQuotes(rawValue.trim());
  }
  return values;
}

export function applyEnvFiles(env, files) {
  for (const [, contents] of files) {
    const parsed = parseEnvFile(contents);
    for (const [key, value] of Object.entries(parsed)) {
      if (env[key] === undefined) env[key] = value;
    }
  }
  return env;
}

export function loadEnvFiles(env = process.env, paths = ['.env.local', '.env']) {
  const files = paths
    .filter((path) => existsSync(path))
    .map((path) => [path, readFileSync(path, 'utf8')]);
  return applyEnvFiles(env, files);
}

function stripQuotes(value) {
  if (
    (value.startsWith('"') && value.endsWith('"')) ||
    (value.startsWith("'") && value.endsWith("'"))
  ) {
    return value.slice(1, -1);
  }
  return value;
}
