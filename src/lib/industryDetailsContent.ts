import type { IndustryDetail } from './types';

/**
 * Verbatim industry detail-page content, pulled from the live sector pages:
 *   /industries/freight-forwarders, /industries/ecommerce-businesses,
 *   /industries/construction-accounting, /industries/franchise,
 *   /startup-accountants.
 *
 * HARD RULE: headings, body copy, bullet lists, testimonials and FAQ answers
 * are reproduced verbatim. The only additions are short section eyebrows and
 * CTA wiring (booking links resolve to the global #contact block); these are
 * design devices, not new body copy. Slugs match the links used on the
 * /industries index (see industriesContent.ts).
 *
 * Shape mirrors a future Sanity `industryPage` document so a later GROQ fetch
 * is a drop-in.
 */

const BOOK: { label: string; href: string } = {
  label: 'Book a Discovery Call',
  href: '#contact',
};

export const industryDetails: IndustryDetail[] = [
  /* ───────────────────────── Freight Forwarders ───────────────────────── */
  {
    slug: 'freight-forwarders',
    name: 'Freight Forwarders',
    image: 'freight-forwarders',
    seo: {
      title: 'Freight Forwarder Accountants | Valentis',
      description:
        'Specialist accounting for logistics and customs clearance — import VAT, multi-currency bookkeeping and cash flow forecasting for freight forwarding businesses.',
    },
    hero: {
      eyebrow: 'FREIGHT & LOGISTICS',
      heading: 'Freight Forwarders',
      subheading: 'Specialist accounting for logistics and customs clearance',
      lead: [
        'We understand the complexities of freight forwarding – from import VAT to customs compliance. Our team helps logistics businesses maintain financial clarity across borders.',
      ],
      primaryCta: BOOK,
    },
    blocks: [
      {
        type: 'prose',
        heading: 'Common Challenges',
        tone: 'problem',
        variant: 'surface',
        bullets: [
          'Complex import VAT and duty calculations',
          'Multi-currency transactions and exchange rate management',
          'Cash flow pressures from payment terms',
          'Customs compliance and documentation',
        ],
      },
      {
        type: 'prose',
        heading: 'How We Help',
        tone: 'check',
        columns: 2,
        variant: 'surface-2',
        bullets: [
          'Import VAT compliance & deferment schemes',
          'Customs clearance accounting',
          'Multi-currency bookkeeping',
          'Cash flow forecasting for freight cycles',
          'ETSF and bonded warehouse compliance',
          'Management accounts with logistics KPIs',
        ],
      },
      {
        type: 'testimonial',
        quote:
          "I don't have a typical accountant/client relationship with Valentis. They're one of my business partners. In a nutshell, I get business and they nurture the business.",
        name: 'Hamed Barik',
        company: 'Mercium Ltd',
      },
      {
        type: 'cta',
        heading: 'Ready to get specialist support?',
        body: "Let's discuss how we can help your business achieve clarity and control.",
        cta: BOOK,
      },
    ],
  },

  /* ───────────────────────── Ecommerce Businesses ─────────────────────── */
  {
    slug: 'ecommerce',
    name: 'Ecommerce Businesses',
    image: 'ecommerce',
    seo: {
      title: 'Ecommerce Accountants | Valentis',
      description:
        'Financial control for online sellers and digital retailers — multi-channel reconciliation, VAT for online selling, margin visibility and Shopify, Amazon & eBay integrations.',
    },
    hero: {
      eyebrow: 'ECOMMERCE & RETAIL',
      heading: 'Ecommerce Businesses',
      subheading: 'Financial control for online sellers and digital retailers',
      lead: [
        'From marketplace sellers to D2C brands, we provide the accounting infrastructure ecommerce businesses need to scale confidently.',
      ],
      primaryCta: BOOK,
    },
    blocks: [
      {
        type: 'prose',
        heading: 'Common Challenges',
        tone: 'problem',
        variant: 'surface',
        bullets: [
          'Multi-channel sales reconciliation complexity',
          'VAT obligations across different territories',
          'Understanding true product margins after fees',
          'Inventory valuation and cost tracking',
        ],
      },
      {
        type: 'prose',
        heading: 'How We Help',
        tone: 'check',
        columns: 2,
        variant: 'surface-2',
        bullets: [
          'Multi-channel sales reconciliation',
          'VAT for online selling (UK, EU & Global)',
          'Inventory & cost of goods tracking',
          'Platform fee analysis & margin visibility',
          'Shopify, Amazon & eBay integrations',
          'Real-time profitability dashboards',
        ],
      },
      {
        type: 'testimonial',
        quote:
          'Valentis made business easy for me. They discovered that I had paid £25,000 of VAT in error. By correctly applying the VAT rules they were able to fully recover this from HMRC.',
        name: 'Karwin Lam',
        company: 'LMDN Ltd',
      },
      {
        type: 'cta',
        heading: 'Ready to get specialist support?',
        body: "Let's discuss how we can help your business achieve clarity and control.",
        cta: BOOK,
      },
    ],
  },

  /* ──────────────────────── Construction Accounting ───────────────────── */
  {
    slug: 'construction',
    name: 'Construction Accounting',
    image: 'construction',
    seo: {
      title: 'Construction Accountants | Valentis',
      description:
        'Construction finance, elevated. CIS, reverse-charge VAT, job costing, forecasting and Virtual CFO support for contractors, developers and construction-led groups.',
    },
    hero: {
      eyebrow: 'CONSTRUCTION & PROPERTY',
      heading: 'Construction finance, elevated.',
      subheading:
        'We help construction businesses move beyond firefighting cash flow, CIS headaches, and reactive accounting — replacing uncertainty with clarity, control, and confident decision-making.',
      lead: [
        'From CIS and reverse-charge VAT to forecasting, margin control, and director remuneration, we act as your outsourced Finance Director, not just your accountant.',
      ],
      tagline:
        'Built for contractors, developers, and construction-led groups ready to scale.',
      primaryCta: {
        label: 'Book a Construction Finance Strategy Call',
        href: '#contact',
      },
    },
    blocks: [
      {
        type: 'prose',
        heading: 'Construction accounting is different — and we treat it that way',
        intro:
          'Construction businesses operate in one of the most complex financial environments in the UK:',
        tone: 'problem',
        variant: 'surface',
        bullets: [
          'Irregular cash flow and retention delays',
          'CIS deductions and verification risk',
          'Reverse-charge VAT disrupting liquidity',
          'Project-based profitability with thin margins',
          'HMRC scrutiny and compliance exposure',
        ],
        closing:
          'Generic accounting fails here. At Valentis, we specialise in construction-led businesses and apply CFO-level thinking to ensure your finance function supports growth — not just compliance.',
      },
      {
        type: 'prose',
        heading: 'Our construction advisory services',
        intro:
          'We deliver end-to-end financial leadership, combining statutory compliance with strategic insight.',
        tone: 'check',
        variant: 'surface-2',
        groups: [
          {
            title: 'Core Services',
            items: [
              'CIS registration, verification, deductions & monthly returns',
              'Reverse-charge VAT planning, reporting & cash-flow impact modelling',
              'Cloud bookkeeping built around jobs, projects, and cost centres',
              'Management accounts with project-level margin visibility',
            ],
          },
          {
            title: 'CFO & Advisory Services',
            items: [
              'Cash-flow forecasting and funding gap analysis',
              'Job costing, margin protection & pricing strategy',
              'Director remuneration planning (salary, dividends, tax efficiency)',
              'Group structuring for contractors, developers & SPVs',
              'HMRC enquiry support, reviews & dispute defence',
            ],
          },
        ],
        closing: 'This is not reactive accounting. This is financial leadership.',
      },
      {
        type: 'prose',
        heading: 'Who we work best with',
        intro: 'We typically support:',
        tone: 'dot',
        variant: 'surface',
        bullets: [
          'Main contractors operating under CIS',
          'Growing subcontractors moving from survival to scale',
          'Property developers and refurbishment businesses',
          'Construction-led groups with multiple entities or SPVs',
        ],
        closing:
          "If you are looking for the cheapest accountant, we won't be the right fit. If you want control, insight, and confidence, we will be.",
      },
      {
        type: 'highlight',
        eyebrow: 'THE DIFFERENCE',
        heading: 'What makes Valentis different',
        lead:
          "Most construction accountants focus on what's already happened. We focus on what happens next.",
        points: [
          { title: 'Proactive, not reactive' },
          { title: 'Strategic, not transactional' },
          { title: 'Advisory-led, not compliance-only' },
          { title: 'CFO thinking without the full-time cost' },
        ],
        closing:
          'Each client works with a senior advisor who understands construction finance — not a junior processing transactions.',
      },
      {
        type: 'cards',
        eyebrow: 'FREE RESOURCES',
        heading: 'Free Construction Resources',
        intro: 'Practical tools to improve your construction finance today',
        columns: 3,
        variant: 'surface-2',
        items: [
          {
            title: 'Construction Cash-Flow Survival Guide',
            description:
              'How contractors protect liquidity despite CIS, VAT reverse charge, and retentions.',
            linkLabel: 'Download Free Guide',
            href: '#contact',
          },
          {
            title: 'CIS & VAT Health Check',
            description: 'A focused review identifying:',
            bullets: [
              'Over-deducted CIS tax',
              'Reverse-charge VAT cash-flow leakage',
              'HMRC risk points',
            ],
            linkLabel: 'Request a Health Check',
            href: '#contact',
          },
          {
            title: 'Job Profitability Diagnostic',
            description:
              'Understand which projects actually make money — and which silently drain cash.',
            linkLabel: 'Book Diagnostic Call',
            href: '#contact',
          },
        ],
      },
      {
        type: 'prose',
        eyebrow: 'FOR GROWING FIRMS',
        heading: 'Virtual CFO for Construction',
        intro:
          'For established and scaling construction businesses, we provide a Virtual CFO service — giving you board-level financial insight without hiring in-house.',
        tone: 'check',
        variant: 'surface',
        bullets: [
          'Monthly strategic reviews',
          'Forecasting and scenario planning',
          'Profit improvement strategies',
          'Director-level reporting',
        ],
        closing:
          'Designed for owners who want to run their business with intent, not instinct.',
      },
      {
        type: 'cta',
        heading: 'Next Steps',
        intro: 'If you want:',
        bullets: [
          'Predictable cash flow',
          'Fewer HMRC surprises',
          'Clear visibility on profit',
          'A finance partner who thinks like a director',
        ],
        closing: "Then let's talk.",
        cta: {
          label: 'Book a Construction Finance Strategy Call',
          href: '#contact',
        },
      },
    ],
  },

  /* ─────────────────────────────── Franchise ──────────────────────────── */
  {
    slug: 'franchise',
    name: 'Franchise',
    image: 'franchise',
    seo: {
      title: 'Franchise Accountants UK | Valentis',
      description:
        'Specialist franchise accounting services for single and multi-unit operators across the UK — royalty reconciliation, site-by-site reporting, VAT and compliance.',
    },
    hero: {
      eyebrow: 'FRANCHISE',
      heading: 'Specialist Franchise Accounting Services',
      subheading: 'Looking for a specialist franchise accountant in the UK?',
      lead: [
        'Valentis provides structured, reliable franchise accounting services for single and multi-unit franchise operators across the UK. From first location to multi-site expansion, our franchise accountants ensure your financial systems remain compliant, organised and scalable.',
      ],
      primaryCta: BOOK,
    },
    blocks: [
      {
        type: 'prose',
        heading: 'Specialist Franchise Accountants for UK Operators',
        intro:
          'Franchise businesses operate within structured commercial models that require specialist accounting support. Unlike independent businesses, franchisees must manage:',
        tone: 'dot',
        variant: 'surface',
        bullets: [
          'Royalty calculations and reconciliation',
          'Head office reporting obligations',
          'Site-by-site profitability tracking',
          'Labour cost percentage monitoring',
          'VAT across multiple trading locations',
          'Cashflow pressure during expansion',
        ],
        closing:
          'A general accountant may not understand franchise agreements, royalty models or multi-unit structures. As experienced franchise accountants in the UK, we ensure your accounting reflects the realities of operating within a franchise system.',
      },
      {
        type: 'cta',
        heading: 'Ready to write your success story?',
        body: 'Join businesses across the UK that have transformed their financial clarity with Valentis.',
        cta: BOOK,
      },
      {
        type: 'prose',
        heading: 'Franchise Accounting for Franchisors',
        intro: 'We also support UK franchisors who require consistency across their network.',
        tone: 'check',
        variant: 'surface-2',
        bullets: [
          'Consolidated financial reporting',
          'Standardised accounting frameworks',
          'Franchisee financial compliance monitoring',
          'Reporting templates for franchise networks',
        ],
        closing:
          'Maintaining financial discipline across a franchise system strengthens long-term stability and brand reputation.',
      },
      {
        type: 'prose',
        heading: 'Our Franchise Accounting Services',
        intro:
          'We provide comprehensive franchise accounting services designed for growth-focused operators.',
        variant: 'surface',
      },
      {
        type: 'prose',
        heading: 'Franchise Compliance & Tax',
        intro: 'As your franchise tax accountant, we handle:',
        tone: 'check',
        columns: 2,
        variant: 'surface-2',
        bullets: [
          'Annual statutory accounts',
          'Corporation tax returns',
          'VAT registration and quarterly VAT submissions',
          'Franchise VAT advice',
          'Payroll and pension compliance',
          'Director remuneration planning',
          'Confirmation statements',
        ],
        closing:
          'We ensure full HMRC compliance while maintaining clarity in your financial reporting.',
      },
      {
        type: 'prose',
        heading: 'Multi-Unit Franchise Accounting',
        intro:
          'If you operate more than one franchise location, structured reporting becomes essential.',
        tone: 'check',
        columns: 2,
        variant: 'surface',
        bullets: [
          'Site-by-site profit and loss reporting',
          'Gross margin and cost analysis',
          'Labour percentage monitoring',
          'Royalty expense tracking',
          'Consolidated group reporting',
          'Monthly management accounts',
        ],
        subIntro: 'This allows you to clearly assess:',
        subBullets: [
          'Which units are performing strongest',
          'Where costs are increasing',
          'Whether expansion is financially viable',
        ],
        closing: 'Accurate reporting is critical when scaling a franchise business.',
      },
      {
        type: 'prose',
        heading: 'Cloud Accounting for Franchise Businesses',
        intro: 'We implement and manage cloud-based systems tailored for franchise operators.',
        tone: 'check',
        columns: 2,
        variant: 'surface-2',
        bullets: [
          'Xero and QuickBooks setup',
          'POS system integration',
          'Automated sales data capture',
          'Digital expense management',
          'Real-time reporting dashboards',
        ],
        closing:
          'As a modern franchise accountant UK firm, we ensure you can access accurate financial data at any time.',
      },
      {
        type: 'prose',
        heading: 'Accounting Support for Growing Franchise Businesses',
        intro: 'Growth requires financial structure. If you are:',
        tone: 'dot',
        variant: 'surface',
        bullets: [
          'Opening an additional franchise location',
          'Expanding into new territories',
          'Seeking funding from banks or lenders',
          'Reviewing your group company structure',
        ],
        subIntro: 'We provide:',
        subBullets: [
          'Cashflow forecasting',
          'Break-even analysis',
          'Financial projections for funding applications',
          'Advice on structuring multiple franchise companies',
        ],
        closing: 'Our franchise accounting services are built to support sustainable expansion.',
      },
      {
        type: 'highlight',
        eyebrow: 'WHY VALENTIS',
        heading: 'Why Choose Valentis as Your Franchise Accountant UK?',
        points: [
          { title: 'UK-qualified accountants' },
          { title: 'Experience supporting retail, QSR and service franchises' },
          { title: 'Expertise in multi-unit franchise accounting' },
          { title: 'Cloud-based, technology-driven systems' },
          { title: 'Clear, responsive communication' },
        ],
        closing:
          'We understand the operational pressures, royalty structures and reporting requirements unique to franchise businesses.',
      },
      {
        type: 'faq',
        heading: 'Frequently Asked Questions',
        items: [
          {
            question: 'Do I need a specialist franchise accountant?',
            answer:
              'Yes. Franchise businesses operate under structured agreements that impact royalties, reporting and tax treatment. A specialist franchise accountant ensures compliance and clarity.',
          },
          {
            question: 'Can you act as accountant for multiple franchise units?',
            answer:
              'Yes. We provide structured multi-unit franchise accounting with site-level reporting and consolidated group oversight.',
          },
          {
            question: 'How are franchise royalties treated for tax purposes?',
            answer:
              'Royalty payments are generally treated as operating expenses calculated as a percentage of turnover. We ensure accurate accounting and VAT treatment.',
          },
          {
            question: 'Can you help with VAT for franchise businesses?',
            answer:
              'Yes. We provide specialist franchise VAT advice, including support for multiple locations and group VAT registration where appropriate.',
          },
        ],
      },
      {
        type: 'cta',
        heading: 'Speak to a Specialist Franchise Accountant in the UK',
        body:
          'If you are searching for a franchise accountant UK firm that understands multi-unit operations and structured growth, we would be pleased to assist.',
        cta: { label: 'Book Your Consultation Today', href: '#contact' },
      },
    ],
  },

  /* ─────────────────────────────── Startups ───────────────────────────── */
  {
    slug: 'startups',
    name: 'Startups',
    image: 'startups',
    seo: {
      title: 'Startup Accountants UK | Valentis',
      description:
        'Investor-ready finance for high-growth founders — company formation, SEIS/EIS advance assurance, R&D tax credits, financial modelling and Virtual CFO services.',
    },
    hero: {
      eyebrow: 'STARTUP ACCOUNTING SERVICES (UK)',
      heading: 'Startup Accountants UK',
      subheading: 'Investor-Ready Finance for High-Growth Founders',
      lead: [
        'Investor-ready finance for founders scaling from incorporation to funding.',
      ],
      primaryCta: { label: 'Book a Founder Strategy Call', href: '#contact' },
      secondaryCta: { label: 'Startup Finance Checklist', href: '#contact' },
    },
    blocks: [
      {
        type: 'cards',
        heading: 'Startup Accounting Services',
        intro:
          'Comprehensive financial support designed for high-growth founders at every stage.',
        columns: 3,
        variant: 'surface',
        items: [
          {
            title: 'Company Formation & Founder Structuring',
            description:
              'Get your entity set up correctly from day one with tax-efficient founder structures.',
            bullets: [
              'UK company incorporation',
              'Share structure & founder agreements',
              'EMI option scheme setup',
              'Director responsibilities guidance',
            ],
          },
          {
            title: 'SEIS & EIS Advance Assurance',
            description:
              'Increase investor confidence with advance assurance before your funding round.',
            bullets: [
              'Eligibility assessment',
              'HMRC advance assurance applications',
              'Compliance certificates (EIS3/SEIS3)',
              'Ongoing compliance monitoring',
            ],
          },
          {
            title: 'R&D Tax Credits for Startups',
            description: 'Recover costs on qualifying R&D activities to extend your runway.',
            bullets: [
              'Eligibility review',
              'Technical narrative preparation',
              'Claim submission & HMRC liaison',
              'Enquiry defence support',
            ],
          },
          {
            title: 'Financial Modelling, Forecasting & Runway Planning',
            description: 'Know your numbers before investors ask. Plan for sustainable growth.',
            bullets: [
              '3-year financial models',
              'Monthly cash runway forecasts',
              'Scenario planning',
              'Investor deck support',
            ],
          },
          {
            title: 'Virtual CFO Services for Startups',
            description: 'Board-level financial leadership without the full-time cost.',
            bullets: [
              'Monthly strategic reviews',
              'Board meeting support',
              'Investor relations',
              'KPI dashboards & reporting',
            ],
          },
          {
            title: 'Xero Setup, Automation & Reporting',
            description: 'Scalable cloud accounting systems that grow with your business.',
            bullets: [
              'Xero implementation & migration',
              'Bank feed automation',
              'Receipt capture & expense management',
              'Real-time reporting dashboards',
            ],
          },
        ],
      },
      {
        type: 'cards',
        eyebrow: 'WHO WE WORK WITH',
        heading: 'We support ambitious founders at every stage of their journey.',
        columns: 2,
        variant: 'surface-2',
        items: [
          {
            title: 'Pre-seed & Seed Founders',
            description:
              'Getting investor-ready with clean financials and SEIS/EIS compliance',
          },
          {
            title: 'Series A+ Companies',
            description: 'Scaling with robust reporting and CFO-level strategic support',
          },
          {
            title: 'International Founders',
            description: 'Non-UK residents with UK entities needing compliant structures',
          },
          {
            title: 'Tech & Innovation Companies',
            description: 'SaaS, fintech, eCommerce and deep-tech startups with R&D activities',
          },
        ],
      },
      {
        type: 'highlight',
        eyebrow: 'WHY VALENTIS',
        lead:
          "We're not compliance accountants who happen to work with startups. We're startup specialists who understand what founders actually need.",
        points: [
          {
            title: 'Founder-First Mindset',
            description: 'We think like founders, not just accountants',
          },
          {
            title: 'Investor-Grade Reporting',
            description: 'Financials that pass due diligence scrutiny',
          },
          {
            title: 'SEIS/EIS Expertise',
            description: 'Deep knowledge of tax-advantaged investment schemes',
          },
          {
            title: 'R&D Tax Specialists',
            description: 'Maximise your claims with technical expertise',
          },
          {
            title: 'Proactive Advisory',
            description: 'Strategic guidance, not just year-end compliance',
          },
          {
            title: 'Named Senior Advisor',
            description: 'Direct access to experienced professionals',
          },
        ],
      },
      {
        type: 'steps',
        eyebrow: 'HOW IT WORKS',
        heading: '3-Step Founder Engagement Model',
        intro: 'A structured approach to getting your finances investor-ready.',
        variant: 'surface',
        steps: [
          {
            title: 'Discovery Call',
            description:
              '15-minute readiness check to understand your stage, goals and immediate needs.',
          },
          {
            title: 'Finance Audit',
            description:
              'We review your current setup and identify gaps in compliance, reporting and structure.',
          },
          {
            title: 'Tailored Engagement',
            description:
              'We propose a scope of work aligned to your stage — from compliance to full Virtual CFO.',
          },
        ],
      },
      {
        type: 'faq',
        heading: 'Frequently Asked Questions',
        items: [
          {
            question:
              'What is the difference between a standard accountant and a startup accountant?',
            answer:
              'Startup accountants specialise in high-growth businesses, fundraising readiness, SEIS/EIS structuring, R&D tax credits and investor-grade reporting. Traditional accountants are typically compliance-led.',
          },
          {
            question: 'Do I need SEIS or EIS approval before raising investment?',
            answer:
              'Advance assurance can increase investor confidence and reduce friction during fundraising. Many startups apply before formally raising investment.',
          },
          {
            question: 'Can early-stage startups claim R&D tax credits?',
            answer:
              'Many startups qualify if they are developing novel technology, software or innovative processes. Eligibility depends on the nature of the work and how costs are incurred.',
          },
          {
            question: 'Do you support non-UK resident founders?',
            answer:
              'Yes. We advise international founders with UK entities, ensuring compliant structuring, tax efficiency and clear reporting.',
          },
        ],
      },
      {
        type: 'cta',
        heading: 'Book a Founder Strategy Call',
        body:
          "Whether you're pre-revenue or scaling fast, let's discuss how we can support your growth with investor-ready finance.",
        note: 'Reply within 1 business day. No obligation.',
        cta: { label: 'Schedule Your Call', href: '#contact' },
      },
    ],
  },
];

export function getIndustryDetail(slug: string): IndustryDetail | undefined {
  return industryDetails.find((d) => d.slug === slug);
}
