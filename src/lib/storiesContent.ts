import type { StoriesContent } from './types';

/**
 * Verbatim Stories page content, pulled from the live
 * https://valentis.co.uk/stories/.
 *
 * HARD RULE: testimonial quotes, names, companies and the result figure are
 * reproduced verbatim. `industry` tags are short labels drawn from each
 * company line (design aid, not new copy). Logos live in src/assets/stories
 * and are referenced by base filename (extension-agnostic).
 */
export const storiesContent: StoriesContent = {
  seo: {
    title: 'Client Stories | Valentis',
    description:
      "Discover how we've helped businesses across different industries achieve clarity, control, and growth.",
  },

  hero: {
    eyebrow: 'CLIENT STORIES',
    heading: 'Real Stories from Real Businesses',
    subheading:
      "Discover how we've helped businesses across different industries achieve clarity, control, and growth.",
    primaryCta: { label: 'Book a Discovery Call', href: '#contact' },
  },

  stories: [
    {
      label: 'A Phone Call with Ammer Siddique',
      name: 'Ammer Siddique',
      company: 'Telev Ltd – Vodafone Franchise',
      industry: 'Vodafone Franchise',
      logo: 'l14',
      logoAlt: 'Vodafone',
      href: '/case-study/telev-ltd/',
      quote:
        "I've been working with Valentis for the last 7 years. I see the team at Valentis as an extension to my business.",
    },
    {
      label: 'Steaks with Mo Qadar',
      name: 'Mo Qadar',
      company: 'ARM Group Ltd – Restaurant Sahara Grill',
      industry: 'Restaurant',
      logo: 'l123',
      logoAlt: 'Sahara Grill',
      href: '/case-study/arm-group-ltd/',
      quote: 'Valentis played the key role of a Financial Controller very well.',
    },
    {
      label: 'A Drive with Hamed Barik',
      name: 'Hamed Barik',
      company: 'Mercium Ltd – Customs Clearance & Logistics',
      industry: 'Logistics',
      logo: 'l143',
      logoAlt: 'Mercium',
      href: '/case-study/mercium-ltd/',
      quote: "I don't have a typical accountant/client relationship with Valentis.",
    },
    {
      label: 'A Chat with Karwin Lam',
      name: 'Karwin Lam',
      company: 'LMDN Ltd – E-Commerce & Fashion',
      industry: 'E-Commerce & Fashion',
      logo: 'l1',
      logoAlt: 'LMDN',
      href: '/case-study/lmdn-ltd/',
      result: { value: '£25,000', label: 'VAT error recovered from HMRC' },
    },
  ],

  finalCta: {
    heading: 'Ready to write your success story?',
    body: 'Join businesses across the UK that have transformed their financial clarity with Valentis.',
    cta: { label: 'Book a Discovery Call', href: '#contact' },
  },
};
