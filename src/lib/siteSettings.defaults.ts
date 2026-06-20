import type { SiteSettings } from './types';
import data from './siteSettings.data.json';

/**
 * Verbatim Valentis site settings (CLAUDE.md §1, §3.1, §3.10).
 *
 * The data lives in siteSettings.data.json so it can be consumed both here
 * (typed, by the frontend) and by scripts/seed.mjs (raw, by Node) without any
 * risk of divergence. This single source of truth serves two roles:
 *  1. Build-time fallback so the site renders correct, verbatim content even
 *     before a live Sanity project is connected.
 *  2. The seed payload written into the Sanity `siteSettings` singleton by
 *     `npm run seed` — so the CMS starts with exactly these values.
 *
 * Note on social URLs: only the platform names are specified verbatim by the
 * brief. The hrefs are placeholders ("#") until the real profile URLs are
 * supplied; non-absolute hrefs are filtered out of JSON-LD `sameAs`.
 */
export const defaultSiteSettings: SiteSettings = data as SiteSettings;
