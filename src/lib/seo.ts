import type { SiteSettings } from './types';

export const SITE_NAME = 'Valentis';
export const LEGAL_NAME = 'Valentis UK Limited';

/** Sensible defaults derived from the brief (CLAUDE.md §1). CMS can override. */
export const DEFAULT_TITLE = 'Valentis | Bespoke. Intelligent. Accountancy.';
export const DEFAULT_DESCRIPTION =
  'Valentis is a boutique virtual CFO and accountancy firm. We work alongside founders, directors and operators as a financial partner — bringing CFO-level thinking without CFO-level cost.';
export const DEFAULT_OG_IMAGE = '/og-default.svg';

/** Only absolute http(s) URLs are valid for schema.org `sameAs`. */
function absoluteUrls(settings: SiteSettings): string[] {
  return settings.social
    .map((s) => s.href)
    .filter((href) => /^https?:\/\//i.test(href));
}

/**
 * Combined JSON-LD graph: Organization + AccountingService/LocalBusiness
 * (name, logo, address, phone, email, social sameAs).
 */
export function buildJsonLd(settings: SiteSettings, siteUrl: string, logoUrl: string) {
  const sameAs = absoluteUrls(settings);
  const orgId = `${siteUrl}/#organization`;

  const postalAddress = {
    '@type': 'PostalAddress',
    streetAddress: settings.address.street,
    addressLocality: settings.address.city,
    ...(settings.address.region ? { addressRegion: settings.address.region } : {}),
    postalCode: settings.address.postalCode,
    addressCountry: settings.address.countryCode,
  };

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': orgId,
        name: SITE_NAME,
        legalName: LEGAL_NAME,
        url: siteUrl,
        logo: logoUrl,
        email: settings.email,
        telephone: settings.phone,
        address: postalAddress,
        ...(sameAs.length ? { sameAs } : {}),
      },
      {
        '@type': ['AccountingService', 'LocalBusiness'],
        '@id': `${siteUrl}/#localbusiness`,
        name: SITE_NAME,
        image: logoUrl,
        url: siteUrl,
        email: settings.email,
        telephone: settings.phone,
        address: postalAddress,
        parentOrganization: { '@id': orgId },
        priceRange: '££££',
        areaServed: 'GB',
        ...(sameAs.length ? { sameAs } : {}),
      },
    ],
  };
}
