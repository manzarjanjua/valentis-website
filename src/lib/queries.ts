// GROQ queries. Kept in one place so the studio schema and the frontend stay
// in sync.

/** The siteSettings singleton (Header + Footer content). */
export const SITE_SETTINGS_QUERY = /* groq */ `
  *[_type == "siteSettings"][0]{
    logoText,
    tagline,
    nav[]{ label, href },
    headerCta{ label, href },
    social[]{ platform, href },
    quickLinks[]{ label, href },
    phone,
    email,
    address{ street, city, region, postalCode, country, countryCode },
    copyright
  }
`;
