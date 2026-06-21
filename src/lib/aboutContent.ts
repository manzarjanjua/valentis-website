import type { AboutContent } from './types';

/**
 * Verbatim About page content, pulled from the live https://valentis.co.uk/about-us.
 *
 * HARD RULE (CLAUDE.md §intro): body copy is reproduced verbatim — do not edit,
 * add, remove or reorder. The only additions are short section eyebrows used as
 * a design device (labels, not body copy) and CTA wiring; these don't alter,
 * remove or reword any of the page's content.
 *
 * Shape mirrors a future Sanity `aboutPage` singleton so a later GROQ fetch is
 * a drop-in, exactly like `homeContent`.
 */
export const aboutContent: AboutContent = {
  seo: {
    title: 'About | Valentis — Strategic Accountancy & Advisory',
    description:
      'Valentis is a UK-based accountancy and advisory practice for owner-led and director-managed businesses — decision-ready insight, Virtual CFO support and commercially grounded advice, not low-cost compliance.',
  },

  hero: {
    eyebrow: 'ABOUT VALENTIS',
    heading:
      'Strategic accountancy for businesses that want clarity, control, and confidence',
    lead: 'Valentis is a UK-based accountancy and advisory practice working with owner-led and director-managed businesses who have outgrown basic accounting and now require clear, decision-ready insight to support better decisions.',
    primaryCta: { label: 'Book a Strategic Call', href: '#booking' },
    secondaryCta: { label: 'Explore Our Services', href: '/#services' },
  },

  positioning: {
    eyebrow: 'WHAT WE STAND FOR',
    notItems: ['We are not a volume practice.', 'We are not a low-cost compliance provider.'],
    statement:
      'Valentis exists for directors who want clarity over their numbers, control over their cash, and confidence in their next move.',
  },

  partner: {
    eyebrow: 'OUR PURPOSE',
    heading: 'More than compliance. Your accountancy partner.',
    intro:
      "Most businesses don't struggle because they lack ambition or effort — they struggle because decisions are made without clear, reliable accounting information.",
    emphasis: 'Our role is to close that gap.',
    listTitle: 'We support our clients with:',
    items: [
      'Decision-ready management accounts',
      'Cashflow visibility and forward-looking forecasts',
      'Commercial insight aligned to how the business actually operates',
      'Ongoing advisory support, not just year-end compliance',
    ],
    notes: [
      'Whether acting as your Virtual CFO or as a strategic extension of your accountancy function, we focus on helping you understand what the numbers mean — and how to use them.',
    ],
  },

  clients: {
    eyebrow: 'OUR CLIENTS',
    heading: 'Who we work with',
    intro:
      'Valentis works with directors who are serious about structure, control, and long-term value.',
    listTitle: 'Our clients typically:',
    items: [
      'Are growing in scale or complexity',
      'Need clearer accounting visibility to support decision-making',
      'Have outgrown basic bookkeeping and compliance services',
      'Want a trusted accountancy partner, not just a service provider',
    ],
    notes: [
      'They value clarity, accountability, and commercially grounded advice — and are willing to invest in getting their accounting function right.',
    ],
    notFit: 'If you are looking purely for low-cost compliance, we are unlikely to be the right fit.',
    fit: 'If you want strategic accountancy support that enables better decisions, we are.',
  },

  approach: {
    eyebrow: 'OUR APPROACH',
    heading: 'Our approach',
    intro: 'We believe accountancy should be:',
    beliefs: [
      { strong: 'Proactive', rest: 'not reactive' },
      { strong: 'Commercial', rest: 'not theoretical' },
      { strong: 'Clear', rest: 'not overcomplicated' },
    ],
    listTitle: 'Our approach combines:',
    items: [
      'Robust compliance and governance',
      'Cloud-based accounting systems and real-time reporting',
      'Practical advisory rooted in operational reality',
    ],
    notes: [
      'We take the time to understand how your business actually works — not just how it looks on paper — so our advice is relevant, timely, and commercially grounded.',
    ],
  },

  why: {
    eyebrow: 'THE DIFFERENCE',
    heading: 'Why Valentis',
    intro: 'Clients choose Valentis because we:',
    items: [
      'Think like business owners, not just accountants',
      'Provide CFO-level insight without the cost of a full-time hire',
      'Speak plainly and challenge assumptions when needed',
      'Build long-term relationships based on trust and outcomes',
    ],
    quoteLead: "We don't just prepare accounts.",
    quote: 'We help directors use their numbers to make better decisions.',
  },

  trust: {
    eyebrow: 'REGULATED & TRUSTED',
    heading: 'Regulated, experienced, and trusted',
    intro:
      'Valentis operates under strict professional and ethical standards, ensuring your accounting and tax affairs are handled with care, discretion, and technical competence.',
    listTitle: 'Our work is underpinned by:',
    items: [
      'Professional regulation and compliance',
      'Strong internal controls and governance',
      'Modern systems designed for accuracy and transparency',
    ],
    notes: [
      'You receive the reassurance of a regulated accountancy firm, combined with commercially focused advice designed to support real-world decision-making.',
    ],
  },

  cta: {
    eyebrow: "LET'S TALK",
    heading: "Let's talk",
    intro: 'If you are looking for:',
    items: [
      'Better accounting visibility',
      'Stronger decision-making support',
      'An accountancy partner who grows with your business',
    ],
    notes: ['We would welcome a conversation.'],
    primaryCta: { label: 'Book a Strategic Call', href: '#booking' },
    ctaNote: 'See whether Valentis is the right fit for your business',
  },
};
