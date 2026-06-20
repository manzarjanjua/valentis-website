/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  /** Sanity project id (safe to expose). */
  readonly PUBLIC_SANITY_PROJECT_ID?: string;
  /** Sanity dataset, e.g. "production". */
  readonly PUBLIC_SANITY_DATASET?: string;
  /** Sanity API version (date string), e.g. "2024-10-01". */
  readonly PUBLIC_SANITY_API_VERSION?: string;
  /** Canonical site origin, e.g. "https://valentis.co.uk". */
  readonly PUBLIC_SITE_URL?: string;
  /** Server-only write token used by scripts/seed.mjs (never exposed to the client). */
  readonly SANITY_WRITE_TOKEN?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
