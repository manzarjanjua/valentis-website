import { sanityClient } from './sanity';
import { SITE_SETTINGS_QUERY } from './queries';
import { defaultSiteSettings } from './siteSettings.defaults';
import type { SiteSettings } from './types';

/**
 * Returns the site settings used by the Header and Footer.
 *
 * Resolution order:
 *  1. Sanity `siteSettings` singleton (when a project is configured + published).
 *  2. Local verbatim defaults (siteSettings.defaults.ts).
 *
 * Sanity values are shallow-merged over the defaults so a partially-filled
 * singleton can never blank out required, verbatim content. Build-time fetch
 * failures fall back to defaults rather than breaking the static build.
 */
export async function getSiteSettings(): Promise<SiteSettings> {
  if (!sanityClient) return defaultSiteSettings;

  try {
    const data = await sanityClient.fetch<Partial<SiteSettings> | null>(SITE_SETTINGS_QUERY);
    if (!data) return defaultSiteSettings;

    return {
      ...defaultSiteSettings,
      ...data,
      address: { ...defaultSiteSettings.address, ...(data.address ?? {}) },
      headerCta: { ...defaultSiteSettings.headerCta, ...(data.headerCta ?? {}) },
      contact: { ...defaultSiteSettings.contact, ...(data.contact ?? {}) },
      nav: data.nav?.length ? data.nav : defaultSiteSettings.nav,
      social: data.social?.length ? data.social : defaultSiteSettings.social,
      quickLinks: data.quickLinks?.length ? data.quickLinks : defaultSiteSettings.quickLinks,
    };
  } catch (err) {
    console.warn('[content] Sanity fetch failed, using local defaults:', err);
    return defaultSiteSettings;
  }
}
