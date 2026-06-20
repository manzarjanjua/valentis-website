// Copies the exact self-hosted font files we use from the installed
// @fontsource packages into /public/fonts, so we can preload them with stable
// paths and write our own @font-face (see src/styles/global.css).
//
// Runs automatically on `postinstall`. Safe to re-run.
import { mkdir, copyFile, access } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const outDir = join(root, 'public', 'fonts');

// [package, file-within-package/files, output name]
const FONTS = [
  [
    '@fontsource-variable/montserrat',
    'montserrat-latin-wght-normal.woff2',
    'montserrat-latin-wght-normal.woff2',
  ],
  [
    '@fontsource/poppins',
    'poppins-latin-400-normal.woff2',
    'poppins-latin-400-normal.woff2',
  ],
  [
    '@fontsource/poppins',
    'poppins-latin-500-normal.woff2',
    'poppins-latin-500-normal.woff2',
  ],
];

async function exists(p) {
  try {
    await access(p);
    return true;
  } catch {
    return false;
  }
}

async function main() {
  await mkdir(outDir, { recursive: true });
  let copied = 0;
  for (const [pkg, file, outName] of FONTS) {
    const src = join(root, 'node_modules', pkg, 'files', file);
    const dest = join(outDir, outName);
    if (!(await exists(src))) {
      console.warn(`[copy-fonts] missing source: ${src} (skipped)`);
      continue;
    }
    await copyFile(src, dest);
    copied += 1;
  }
  console.log(`[copy-fonts] copied ${copied}/${FONTS.length} font file(s) -> public/fonts`);
}

main().catch((err) => {
  console.error('[copy-fonts] failed:', err);
  // Don't fail the whole install over fonts; build will surface missing files.
  process.exitCode = 0;
});
