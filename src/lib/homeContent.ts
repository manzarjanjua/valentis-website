import type { HomeContent } from './types';

/**
 * Verbatim home page content (CLAUDE.md §3.2–3.9).
 *
 * This is the single source of truth for the home page copy until the Sanity
 * `homePage` singleton is wired up. The shape mirrors the planned schema
 * (§4.2), so a later `getHomePage()` can fetch from GROQ and fall back to this
 * exactly as `getSiteSettings()` does today.
 *
 * HARD RULE (CLAUDE.md §intro): copy is reproduced verbatim — do not edit,
 * add, remove or reorder. The only fields not specified by the brief are the
 * per-service `details` reveal strings, left empty intentionally.
 */
export const homeContent: HomeContent = {
  hero: {
    heading: 'How We Work',
    subheading: 'Clarity first. Control second. Growth always.',
    bodyLines: [
      'Most firms talk about what they do.',
      'We start with how your business actually runs — and how money moves through it.',
      'At Valentis, we work alongside founders, directors, and operators as a financial partner — bringing CFO-level thinking without CFO-level cost.',
    ],
    primaryCta: { label: 'Book a Discovery Call', href: '#contact' },
    secondaryCta: { label: 'Virtual CFO Services', href: '#services' },
    imageAlt: 'Two business professionals shaking hands',
  },

  process: {
    eyebrow: 'OUR PROCESS',
    title: 'The Valentis Method',
    steps: [
      {
        stepLabel: 'Step 1',
        title: 'Understand the Business',
        description: 'We start with how your business actually works — not just the numbers.',
        bullets: ['Revenue streams', 'Cost pressure points', 'Key risks', 'Decision bottlenecks'],
        outcome: 'Clear commercial picture',
      },
      {
        stepLabel: 'Step 2',
        title: 'Build Financial Control',
        description: 'We put structure and clarity around your finances.',
        bullets: ['Reliable numbers', 'Cash vs profit clarity', 'Margin visibility', 'Strong systems'],
        outcome: 'Confidence and control',
      },
      {
        stepLabel: 'Step 3',
        title: 'Turn Data into Decisions',
        description: 'We focus on insight, not reports.',
        bullets: ['What changed', 'Why it matters', 'What needs action', 'What can wait'],
        outcome: 'Better decisions',
      },
      {
        stepLabel: 'Step 4',
        title: 'Act Like Your CFO',
        description: 'We guide and challenge like an in-house CFO.',
        bullets: ['Pricing & margins', 'Cashflow planning', 'Tax strategy', 'Growth decisions'],
        outcome: 'Strategic support',
      },
      {
        stepLabel: 'Step 5',
        title: 'Stay Close as You Scale',
        description: 'As your business grows, so does our involvement.',
        bullets: ['Evolving KPIs', 'Improved forecasts', 'Stronger controls', 'Ongoing support'],
        outcome: 'Scalable finance function',
      },
    ],
  },

  whatYouGet: {
    title: 'What You Get',
    subtitle: '(In Plain English)',
    items: [
      'Monthly performance summary (what changed & why)',
      'Cashflow forecasts you can rely on',
      'Margin & pricing insight',
      'KPIs tailored to your business',
      'Decision support for growth, hires & funding',
      'Clean systems and reduced admin',
    ],
  },

  bestFor: {
    title: 'This Works Best For Businesses That…',
    items: [
      {
        title: 'Want clarity and control over finances',
        description: "You're tired of guessing and want to see the full picture clearly.",
      },
      {
        title: 'Are scaling and making bigger decisions',
        description: 'Growth brings complexity — you need financial insight that keeps pace.',
      },
      {
        title: 'Need CFO-level thinking without full-time cost',
        description: "Get strategic financial leadership when you need it, not when you don't.",
      },
    ],
    midCtaBand: {
      heading: 'Ready for clarity and control?',
      body: 'If your numbers feel unclear, your decisions will be too. We fix that.',
      cta: { label: 'Book a Discovery Call', href: '#contact' },
    },
  },

  services: {
    eyebrow: 'OUR SERVICES',
    title: 'How Can We Help You?',
    intro:
      'From launching your business to securing your legacy, we provide comprehensive financial services tailored to every stage of your journey.',
    categories: [
      {
        title: 'Start my business',
        icon: 'M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z',
        tagline: 'Launch your venture with confidence',
        groups: [
          {
            items: [
              { label: 'SEIS & EIS Applications' },
              { label: 'Business Plans' },
              { label: 'Financial Forecasts' },
              { label: 'New Acquisition Due Diligence' },
            ],
          },
        ],
        learnMore: {
          label: 'Learn more about startup services',
          href: 'https://valentis.co.uk/start-my-business/',
        },
      },
      {
        title: 'Secure your Business',
        icon: 'M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z',
        tagline: "Protect what you've built",
        groups: [
          {
            heading: 'Tax Services',
            items: [
              { label: 'Corporate Tax Compliance' },
              { label: 'Personal Tax Compliance' },
              { label: 'Payroll' },
              { label: 'CIS Compliance' },
              { label: 'Capital Gains Tax' },
            ],
          },
          {
            heading: 'Accounting Services',
            items: [{ label: 'Bookkeeping' }, { label: 'Annual Statutory Filing' }],
          },
          {
            heading: 'Business Services',
            items: [{ label: 'Company Secretarial' }],
          },
        ],
        learnMore: {
          label: 'Learn more about compliance services',
          href: 'https://valentis.co.uk/secure-your-business/',
        },
      },
      {
        title: 'Build Your Business',
        icon: 'M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941',
        tagline: 'Scale with strategic financial leadership',
        groups: [
          {
            items: [
              { label: 'Financial Director', description: 'Management Accounts' },
              { label: 'Virtual CFO', description: 'Budgets and Forecasts' },
              {
                label: 'Accounting Back Office',
                description: 'Full virtual accounts department implementation',
              },
            ],
          },
        ],
        learnMore: {
          label: 'Learn more about CFO services',
          href: 'https://valentis.co.uk/build-your-business/',
        },
      },
      {
        title: 'Ensure your legacy continues',
        icon: 'M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z',
        tagline: 'Plan for generations to come',
        groups: [
          {
            items: [
              { label: 'Inheritance Tax Planning' },
              { label: 'Property Tax & Planning' },
            ],
          },
        ],
        learnMore: {
          label: 'Learn more about legacy planning',
          href: 'https://valentis.co.uk/legacy-planning/',
        },
      },
      {
        title: 'When you hit a bump',
        icon: 'M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z',
        tagline: 'Expert support when you need it most',
        groups: [
          {
            items: [
              {
                label: 'Tax Investigations',
                description: 'Responses to tax investigation and advice',
              },
              { label: 'VAT Compliance', description: 'Import VAT Compliance' },
            ],
          },
        ],
        learnMore: {
          label: 'Learn more about investigation support',
          href: 'https://valentis.co.uk/problem-solving/',
        },
      },
    ],
    helperText: 'Hover over a service category to see details',
    subCta: {
      text: 'Not sure which service you need?',
      cta: { label: 'Book a Free Consultation', href: '#contact' },
    },
  },

  team: {
    eyebrow: 'OUR TEAM',
    title: 'Meet the Team',
    members: [
      { name: 'Nurul Ali', role: 'Partner at Valentis', photo: '1.png' },
      { name: 'Muneer Ali', role: 'Partner at Valentis', photo: '2.png' },
      { name: 'Yousuf', role: 'Junior Partner', photo: '3.png' },
    ],
  },

  contact: {
    eyebrow: "LET'S GET STARTED",
    heading: 'Need a Smarter Finance Setup?',
    subheading: 'Arrange your discovery meeting today and unlock the potential of your business.',
    phone: '+44 20 3371 8844',
    email: 'info@valentis.co.uk',
    location: '6-8 Great Eastern Street, London, EC2A 3NT',
  },

  finalCta: {
    heading: 'Ready to Stop Guessing With Your Finances?',
    body: "Let's talk about how we can help you achieve clarity.",
    cta: { label: 'Book a Discovery Call', href: '#contact' },
  },
};
