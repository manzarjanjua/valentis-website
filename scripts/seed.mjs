// Seeds the Sanity `siteSettings` singleton with the verbatim Valentis content.
//
// Usage:
//   1. Fill PUBLIC_SANITY_PROJECT_ID, PUBLIC_SANITY_DATASET and a write-enabled
//      SANITY_WRITE_TOKEN in .env (see .env.example).
//   2. Run:  npm run seed
//
// Idempotent: uses a fixed document id ("siteSettings") + createOrReplace, so
// re-running simply re-applies the canonical values.
import { readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createClient } from '@sanity/client';

// Load .env (zero-dep parser; avoids adding dotenv).
const root = join(dirname(fileURLToPath(import.meta.url)), '..');
await loadEnv(join(root, '.env'));

const projectId = process.env.PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.PUBLIC_SANITY_DATASET || 'production';
const apiVersion = process.env.PUBLIC_SANITY_API_VERSION || '2024-10-01';
const token = process.env.SANITY_WRITE_TOKEN;

if (!projectId || !token) {
  console.error(
    '[seed] Missing config. Set PUBLIC_SANITY_PROJECT_ID and SANITY_WRITE_TOKEN in .env.'
  );
  process.exit(1);
}

const data = JSON.parse(
  await readFile(join(root, 'src', 'lib', 'siteSettings.data.json'), 'utf8')
);

const client = createClient({ projectId, dataset, apiVersion, token, useCdn: false });

const doc = { _id: 'siteSettings', _type: 'siteSettings', ...data };

try {
  const res = await client.createOrReplace(doc);
  console.log(`[seed] siteSettings written -> ${res._id} (${dataset})`);
} catch (err) {
  console.error('[seed] failed:', err.message ?? err);
  process.exit(1);
}

/** Minimal .env loader: KEY=VALUE lines, ignores comments/blank lines. */
async function loadEnv(path) {
  let raw;
  try {
    raw = await readFile(path, 'utf8');
  } catch {
    return; // no .env file — rely on the ambient environment
  }
  for (const line of raw.split(/\r?\n/)) {
    const m = line.match(/^\s*([\w.-]+)\s*=\s*(.*)\s*$/);
    if (!m || line.trimStart().startsWith('#')) continue;
    const key = m[1];
    let val = m[2].trim();
    if (
      (val.startsWith('"') && val.endsWith('"')) ||
      (val.startsWith("'") && val.endsWith("'"))
    ) {
      val = val.slice(1, -1);
    }
    if (!(key in process.env)) process.env[key] = val;
  }
}
