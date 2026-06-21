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

/** Heading copy for the global "Need a Smarter Finance Setup?" contact block,
 *  which renders site-wide just above the footer. The phone/email/location are
 *  composed from the settings above so there is a single source of truth. */
export interface ContactCopy {
  eyebrow: string;
  heading: string;
  subheading: string;
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
  /** Copy for the global pre-footer contact block. */
  contact: ContactCopy;
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
  finalCta: CtaBandContent;
}

/* ---------------------------------------------------------------------------
 * About page content. Verbatim copy from the live /about-us page, shaped for a
 * future Sanity `aboutPage` singleton (same drop-in pattern as the home page).
 * ------------------------------------------------------------------------- */

export interface AboutHero {
  eyebrow: string;
  heading: string;
  /** Intro paragraph. */
  lead: string;
  primaryCta: Cta;
  secondaryCta: Cta;
}

/** The "We are not … / Valentis exists for …" positioning statement, given its
 *  own section so the hero stays focused. */
export interface AboutPositioning {
  eyebrow: string;
  /** "We are not …" disqualifier lines, rendered with an x-marker. */
  notItems: string[];
  /** The positioning climax statement. */
  statement: string;
}

/** A heading + intro + labelled checklist + supporting lines — the recurring
 *  shape across the About body sections. */
export interface AboutSection {
  eyebrow: string;
  heading: string;
  /** Optional opening paragraph. */
  intro?: string;
  /** Optional label above the checklist (e.g. "We support our clients with:"). */
  listTitle?: string;
  /** Checklist items. */
  items?: string[];
  /** Optional supporting paragraphs shown after the list. */
  notes?: string[];
}

export interface AboutBelief {
  /** Emphasised word, e.g. "Proactive". */
  strong: string;
  /** Muted contrast, e.g. "not reactive". */
  rest: string;
}

export interface AboutContent {
  seo: { title: string; description: string };
  hero: AboutHero;
  /** "We are not … / Valentis exists for …" positioning statement. */
  positioning: AboutPositioning;
  /** "More than compliance. Your accountancy partner." */
  partner: AboutSection & { emphasis: string };
  /** "Who we work with" — includes a not-a-fit / a-fit contrast pair. */
  clients: AboutSection & { notFit: string; fit: string };
  /** "Our approach" — belief pills + an "approach combines" checklist. */
  approach: AboutSection & { beliefs: AboutBelief[] };
  /** "Why Valentis" — reasons grid + pull-quote. */
  why: AboutSection & { quoteLead: string; quote: string };
  /** "Regulated, experienced, and trusted". */
  trust: AboutSection;
  /** "Let's talk" closing CTA band. */
  cta: AboutSection & { primaryCta: Cta; ctaNote: string };
}

/* ---------------------------------------------------------------------------
 * Stories (client case-studies) page content. Verbatim from the live /stories.
 * ------------------------------------------------------------------------- */

export interface StoryResult {
  /** Headline figure, e.g. "£25,000". */
  value: string;
  /** Supporting label, e.g. "VAT error recovered from HMRC". */
  label: string;
}

export interface Story {
  /** Editorial story title, e.g. "A Phone Call with Ammer Siddique". */
  label: string;
  /** Client person. */
  name: string;
  /** Company line incl. industry, e.g. "Telev Ltd – Vodafone Franchise". */
  company: string;
  /** Short industry tag derived from the company line. */
  industry: string;
  /** Base filename (no extension) of the client logo in src/assets/stories. */
  logo: string;
  /** Accessible name for the logo, e.g. "Vodafone". */
  logoAlt: string;
  /** Link to the full case-study page. */
  href: string;
  /** Testimonial quote (stories 1–3). */
  quote?: string;
  /** Headline result, used in place of a quote (story 4). */
  result?: StoryResult;
}

export interface StoriesContent {
  seo: { title: string; description: string };
  hero: { eyebrow: string; heading: string; subheading: string; primaryCta: Cta };
  stories: Story[];
  finalCta: CtaBandContent;
}

/* ---------------------------------------------------------------------------
 * Industries page. Verbatim from the live https://valentis.co.uk/industries/.
 * ------------------------------------------------------------------------- */

export interface Industry {
  /** Sector name, e.g. "Freight Forwarders". */
  name: string;
  /** One-line description of the specialism. */
  description: string;
  /** Base filename (no extension) of the image in src/assets/industries. */
  image: string;
  /** Descriptive alt text for the image. */
  imageAlt: string;
  /** Link to the (future) sector detail page. */
  href: string;
}

export interface IndustryReason {
  title: string;
  description: string;
}

export interface IndustriesContent {
  seo: { title: string; description: string };
  hero: { eyebrow: string; heading: string; subheading: string; primaryCta: Cta };
  industries: Industry[];
  why: {
    heading: string;
    subheading: string;
    reasons: IndustryReason[];
  };
  fallbackCta: CtaBandContent;
}

/* ---------------------------------------------------------------------------
 * Industry detail pages (/industries/<slug>). Verbatim from the live sector
 * pages. Built from a small set of reusable content blocks so every sector
 * page shares one template and one design language, and maps cleanly onto a
 * future Sanity `industryPage` document.
 * ------------------------------------------------------------------------- */

export type IndustrySurface = 'surface' | 'surface-2';

/** Tone of a bullet marker: a positive check, a neutral dot, or a problem mark. */
export type IndustryBulletTone = 'check' | 'dot' | 'problem';

export interface IndustryListGroup {
  /** Optional group label, e.g. "Core Services". */
  title?: string;
  items: string[];
}

export interface IndustryFeatureCard {
  title: string;
  description?: string;
  bullets?: string[];
  /** Optional call-to-action rendered at the foot of the card. */
  linkLabel?: string;
  href?: string;
}

export interface IndustryPoint {
  title: string;
  description?: string;
}

/** A text-led section: intro, bullet list(s) and a closing line. */
export interface IndustryProseBlock {
  type: 'prose';
  eyebrow?: string;
  heading?: string;
  intro?: string;
  bullets?: string[];
  /** Lay bullets out in two columns when there are many short items. */
  columns?: 1 | 2;
  tone?: IndustryBulletTone;
  /** Titled bullet groups, used in place of a flat `bullets` list. */
  groups?: IndustryListGroup[];
  /** A secondary list introduced after the main bullets. */
  subIntro?: string;
  subBullets?: string[];
  closing?: string;
  variant?: IndustrySurface;
}

/** A grid of feature/service cards. */
export interface IndustryCardsBlock {
  type: 'cards';
  eyebrow?: string;
  heading: string;
  intro?: string;
  columns?: 2 | 3;
  items: IndustryFeatureCard[];
  variant?: IndustrySurface;
}

/** A numbered process / engagement model. */
export interface IndustryStepsBlock {
  type: 'steps';
  eyebrow?: string;
  heading: string;
  intro?: string;
  steps: IndustryPoint[];
  variant?: IndustrySurface;
}

/** A dark "why us" band: lead statement plus supporting points. */
export interface IndustryHighlightBlock {
  type: 'highlight';
  eyebrow?: string;
  heading?: string;
  lead?: string;
  points?: IndustryPoint[];
  closing?: string;
}

export interface IndustryTestimonialBlock {
  type: 'testimonial';
  quote: string;
  name: string;
  company: string;
}

export interface IndustryFaqBlock {
  type: 'faq';
  heading: string;
  items: { question: string; answer: string }[];
}

/** A closing call-to-action band (dark), with optional supporting list. */
export interface IndustryCtaBlock {
  type: 'cta';
  heading: string;
  intro?: string;
  bullets?: string[];
  body?: string;
  closing?: string;
  note?: string;
  cta: Cta;
}

export type IndustryBlock =
  | IndustryProseBlock
  | IndustryCardsBlock
  | IndustryStepsBlock
  | IndustryHighlightBlock
  | IndustryTestimonialBlock
  | IndustryFaqBlock
  | IndustryCtaBlock;

export interface IndustryDetail {
  /** URL slug under /industries/, e.g. "freight-forwarders". */
  slug: string;
  /** Sector name for breadcrumb/headings, e.g. "Freight Forwarders". */
  name: string;
  /** Base filename (no extension) of the sector image in src/assets/industries. */
  image: string;
  seo: { title: string; description: string };
  hero: {
    eyebrow: string;
    heading: string;
    subheading?: string;
    /** Extra intro paragraph(s) rendered below the hero. */
    lead?: string[];
    /** Emphasised positioning line under the lead. */
    tagline?: string;
    primaryCta: Cta;
    secondaryCta?: Cta;
  };
  blocks: IndustryBlock[];
}

/* ---------------------------------------------------------------------------
 * Case-study (individual story) pages. Verbatim from the live
 * /case-study/<slug> pages.
 * ------------------------------------------------------------------------- */

export interface CaseStudyMetric {
  value: string;
  label: string;
}

export interface CaseStudySection {
  /** The interview question / section heading. */
  heading: string;
  paragraphs: string[];
}

export interface CaseStudy {
  slug: string;
  seoTitle: string;
  seoDescription: string;
  /** Hero H1 / story title. */
  title: string;
  /** Company, e.g. "Telev Ltd". */
  company: string;
  /** Trade / industry line. */
  trade: string;
  /** Base filename (no extension) of the logo in src/assets/stories. */
  logo: string;
  logoAlt: string;
  sections: CaseStudySection[];
  testimonial: { quote: string; name: string; role: string };
  metrics?: CaseStudyMetric[];
  links?: { label: string; href: string }[];
}
