// Shared content types for the Valentis frontend.
// These mirror the Sanity `siteSettings` singleton (studio/schemaTypes).

export interface NavItem {
  label: string;
  href: string;
}

export interface Cta {
  label: string;
  href: string;
}

export interface SocialLink {
  /** Display/platform name, e.g. "LinkedIn". */
  platform: string;
  /** Absolute URL. Entries that aren't absolute URLs are ignored in JSON-LD `sameAs`. */
  href: string;
}

export interface Address {
  street: string;
  city: string;
  region?: string;
  postalCode: string;
  country: string;
  /** ISO 3166-1 alpha-2 for structured data (e.g. "GB"). */
  countryCode: string;
}

export interface SiteSettings {
  /** Rendered as the wordmark; the trailing period is coloured in brand orange. */
  logoText: string;
  tagline: string;
  nav: NavItem[];
  headerCta: Cta;
  social: SocialLink[];
  quickLinks: NavItem[];
  phone: string;
  email: string;
  address: Address;
  copyright: string;
}

/* ---------------------------------------------------------------------------
 * Home page content. Shapes mirror the planned Sanity `homePage` singleton
 * (CLAUDE.md §4.2) so swapping the local source for a GROQ fetch is a drop-in.
 * ------------------------------------------------------------------------- */

export interface HeroContent {
  heading: string;
  subheading: string;
  bodyLines: string[];
  primaryCta: Cta;
  secondaryCta: Cta;
  /** Alt text for the hero background image (when one is supplied). */
  imageAlt: string;
}

export interface ProcessStep {
  stepLabel: string;
  title: string;
  description: string;
  bullets: string[];
  outcome: string;
}

export interface ProcessContent {
  eyebrow: string;
  title: string;
  steps: ProcessStep[];
}

export interface WhatYouGetContent {
  title: string;
  subtitle: string;
  items: string[];
}

export interface BestForItem {
  title: string;
  description: string;
}

export interface CtaBandContent {
  heading: string;
  body: string;
  cta: Cta;
}

export interface BestForContent {
  title: string;
  items: BestForItem[];
  midCtaBand: CtaBandContent;
}

export interface ServiceDetailItem {
  label: string;
  /** Optional supporting line; when present the item renders as a card. */
  description?: string;
}

export interface ServiceDetailGroup {
  /** Optional sub-heading; when present the group renders as a titled column. */
  heading?: string;
  items: ServiceDetailItem[];
}

export interface ServiceCategory {
  title: string;
  /** Inline SVG path `d` for the tile icon (stroke icon, 24×24 viewBox). */
  icon: string;
  /** Short supporting line shown under the title in the details panel. */
  tagline: string;
  groups: ServiceDetailGroup[];
  learnMore: Cta;
}

export interface ServicesContent {
  eyebrow: string;
  title: string;
  intro: string;
  categories: ServiceCategory[];
  /** Default prompt shown in the details panel before a tile is chosen. */
  helperText: string;
  subCta: { text: string; cta: Cta };
}

export interface TeamMember {
  name: string;
  role: string;
  /** Local asset filename in src/assets/team (e.g. "1.png"); optimized at
   *  build time. Falls back to initials when omitted/unresolved. */
  photo?: string;
}

export interface TeamContent {
  eyebrow: string;
  title: string;
  members: TeamMember[];
}

export interface ContactContent {
  eyebrow: string;
  heading: string;
  subheading: string;
  phone: string;
  email: string;
  location: string;
}

export interface HomeContent {
  hero: HeroContent;
  process: ProcessContent;
  whatYouGet: WhatYouGetContent;
  bestFor: BestForContent;
  services: ServicesContent;
  team: TeamContent;
  contact: ContactContent;
  finalCta: CtaBandContent;
}
