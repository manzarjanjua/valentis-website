import { createClient, type SanityClient } from '@sanity/client';

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID;
const dataset = import.meta.env.PUBLIC_SANITY_DATASET ?? 'production';
const apiVersion = import.meta.env.PUBLIC_SANITY_API_VERSION ?? '2024-10-01';

/** True when a Sanity project id is configured (see .env.example). */
export const isSanityConfigured = Boolean(projectId);

/**
 * Read-only Sanity client used for GROQ at build time. `null` when no project
 * id is configured, in which case callers fall back to local defaults so the
 * build never fails on a missing CMS connection.
 */
export const sanityClient: SanityClient | null = isSanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true, // published content only; fine for SSG builds
    })
  : null;
