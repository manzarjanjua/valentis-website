import type { IndustriesContent } from './types';

/**
 * Verbatim Industries page content, pulled from the live
 * https://valentis.co.uk/industries/.
 *
 * HARD RULE: sector names, descriptions and the "Why Industry Specialism
 * Matters" copy are reproduced verbatim. The only additions are CTA wiring and
 * the per-sector image references (design aids, not new copy). Images live in
 * src/assets/industries and are referenced by base filename (extension-agnostic).
 *
 * The sector detail pages don't exist yet (this phase is the index only), so
 * each `href` points at the future /industries/<slug> route.
 *
 * Shape mirrors a future Sanity `industriesPage` singleton so a later GROQ
 * fetch is a drop-in, exactly like `homeContent`.
 */
export const industriesContent: IndustriesContent = {
  seo: {
    title: 'Industries | Valentis — Specialist Accounting for Your Sector',
    description:
      "We've built deep expertise in specific industries — freight forwarding, ecommerce, construction, franchise and startups — for faster onboarding, relevant insights and advice that fits how your business works.",
  },

  hero: {
    eyebrow: 'INDUSTRY EXPERTISE',
    heading: 'Specialist Accounting for Your Sector',
    subheading:
      "We've built deep expertise in specific industries. This means faster onboarding, relevant insights, and advice that actually fits how your business works.",
    primaryCta: { label: 'Book a Discovery Call', href: '#contact' },
  },

  industries: [
    {
      name: 'Freight Forwarders',
      description: 'Specialist accounting for logistics and customs clearance',
      image: 'freight-forwarders',
      imageAlt: 'Stacked shipping containers at a freight port',
      href: '/industries/freight-forwarders',
    },
    {
      name: 'Ecommerce Businesses',
      description: 'Financial control for online sellers and digital retailers',
      image: 'ecommerce',
      imageAlt: 'Racks of clothing in a modern retail store',
      href: '/industries/ecommerce',
    },
    {
      name: 'Construction Accounting',
      description: 'Project-based accounting for builders and contractors',
      image: 'construction',
      imageAlt: 'Construction site with scaffolding against the sky',
      href: '/industries/construction',
    },
    {
      name: 'Franchise',
      description: 'Accounting expertise for franchise owners and operators',
      image: 'franchise',
      imageAlt: 'Business owners reviewing plans together',
      href: '/industries/franchise',
    },
    {
      name: 'Startups',
      description: 'Financial foundations for high-growth ventures',
      image: 'startups',
      imageAlt: 'Founder working on a laptop showing business analytics',
      href: '/industries/startups',
    },
  ],

  why: {
    heading: 'Why Industry Specialism Matters',
    subheading: 'Generic accountants give generic advice. We go deeper.',
    reasons: [
      {
        title: 'Faster Onboarding',
        description:
          'We already understand your business model, terminology, and common challenges.',
      },
      {
        title: 'Relevant KPIs',
        description:
          'We track the metrics that actually matter in your industry, not generic ratios.',
      },
      {
        title: 'Proactive Advice',
        description:
          "We anticipate issues before they arise because we've seen them before.",
      },
    ],
  },

  fallbackCta: {
    heading: "Don't see your industry?",
    body: "We work with businesses across many sectors. If you're looking for clarity and control over your finances, let's talk.",
    cta: { label: 'Book a Discovery Call', href: '#contact' },
  },
};
