import type { CaseStudy } from './types';

/**
 * Verbatim case-study content, pulled from the live
 * https://valentis.co.uk/case-study/<slug> pages. Body copy, quotes, names and
 * figures are reproduced verbatim. Section headings are the interview
 * questions as they appear on the source pages. Metrics are figures stated in
 * the copy, surfaced as highlights (not new claims).
 */
export const caseStudies: CaseStudy[] = [
  {
    slug: 'telev-ltd',
    seoTitle: 'Telev Ltd — Client Story | Valentis',
    seoDescription:
      'How Valentis supports Ammer Siddique and Telev Ltd, a Vodafone franchise across Central London — client care, dashboards, and monthly management accounts.',
    title: 'A Phone Call with Ammer Siddique',
    company: 'Telev Ltd',
    trade: 'Vodafone Franchise (Richmond, Hammersmith, Islington, Kensington)',
    logo: 'l14',
    logoAlt: 'Vodafone',
    sections: [
      {
        heading: 'Where did it all start?',
        paragraphs: [
          'My background is in IT, but prior to working with Vodafone as a Partner Agent, I ran a successful EE franchise for 5 years. I believe if you have a good team behind you, becoming a partner agent is quite simple. With the right people, tasks such as planning, presenting, and talking numbers becomes very easy. I applied for the partner agent programme at the end of 2020, fast forward to now and by the grace of God, I have 4 stores in Central London.',
        ],
      },
      {
        heading: 'What does a day in a life of a Vodafone partner agent look like?',
        paragraphs: [
          'A lot of dossing around and shisha! Just Kidding!',
          "If you direct the business properly it can very much run without you. Ideally, all directors want to be in a position where they can work on the business rather than in the business. You shouldn't be in a position where you have to sell phones/contracts as a director.",
          'I spend my time going from store to store making sure things are running smoothly. Ensuring targets are met, audits are successful and customer service is impeccable. I ensure the team are engaged, enthusiastic, compliant, and "hungry". The numbers are very important, you have several monthly reporting responsibilities to Vodafone as well as quarterly reviews. It\'s an excellent business to be in, you just need to invest time into procedures, your team and to understanding the numbers.',
        ],
      },
      {
        heading: 'How has Valentis helped?',
        paragraphs: [
          "\"I've been working with Valentis for the last 7 years. I think what's impressed me the most is the client care that I have received over the years.\" There's a genuine care for my business and my tax affairs which I've come to appreciate greatly.",
          '"I see the team at Valentis as an extension to my business." To make a telecommunication franchise work and give you that desired dividends you need a team that has industry knowledge.',
          'Their dashboard and sales tracker is a must have for this business. They help with business targets, bonus structuring/calculations and their monthly management accounts is a necessary tool to understand the figures and plan ahead.',
          '"They take care of all the reporting requirements that come with a Vodafone franchise so I can focus on store 5 and beyond!"',
        ],
      },
    ],
    testimonial: {
      quote:
        "I've been working with Valentis for the last 7 years. I think what's impressed me the most is the client care that I have received over the years. I see the team at Valentis as an extension to my business. They take care of all the reporting requirements that come with a Vodafone franchise so I can focus on store 5 and beyond!",
      name: 'Ammer Siddique',
      role: 'Telev Ltd – Vodafone Franchise Owner',
    },
    metrics: [
      { value: '7 years', label: 'Working with Valentis' },
      { value: '4', label: 'Stores in Central London' },
    ],
  },

  {
    slug: 'mercium-ltd',
    seoTitle: 'Mercium Ltd — Client Story | Valentis',
    seoDescription:
      'How Valentis acts as a financial controller for Hamed Barik and Mercium Ltd — customs clearance, logistics and VAT compliance, with £4m turnover across 5 countries.',
    title: 'A Drive with Hamed Barik',
    company: 'Mercium Ltd',
    trade: 'Customs Clearance, Logistics and VAT Compliance',
    logo: 'l143',
    logoAlt: 'Mercium',
    sections: [
      {
        heading: 'Where did it all start?',
        paragraphs: [
          'The aim of Mercium was to offer custom clearance, freight management, logistics and VAT compliance all under one roof. A one-stop shop for overseas traders or exporters.',
          "Mercium was an idea on a piece paper for long time before it became a business. The first piece of advice that I give to anybody who asks is to stop talking about it and make a start! We now turnover over £4m, have established a presence in 5 countries and we're only in year 2!",
          'I think the business was born when I started to forge and cement certain business relationships. With the right business partners, the journey can be a lot faster and smoother.',
        ],
      },
      {
        heading: 'How does Valentis fit in?',
        paragraphs: [
          "\"I don't have a typical accountant/client relationship with Valentis. They're one of my business partners.\"",
          "\"Valentis play the role of a financial controller and they're driving the business forward.\"",
          '"They get trade licences, obtain work permits for our international staff and recently had our warehouse ETSF approved."',
          '"In a nutshell, I get business and they nurture the business. They have put systems and procedures in place that have significantly streamlined our business and increased our business value."',
          'In addition to this, they have been key to negotiating trade deals with Chinese investors and exporters.',
        ],
      },
      {
        heading: 'What are your plans for the future?',
        paragraphs: [
          "We've got some huge plans for 2023 and beyond. Increase the number of containers that we deal with per month, expand to India & Dubai and grow the VAT compliance side of our business.",
          'I have numerous Amazon sellers ask me about their VAT responsibilities and with Valentis by my side I can now offer our Amazon sellers logistics from seller to warehouse and assurance of UK VAT compliance.',
        ],
      },
    ],
    testimonial: {
      quote:
        "I don't have a typical accountant/client relationship with Valentis. They're one of my business partners.",
      name: 'Hamed Barik',
      role: 'Mercium Ltd',
    },
    metrics: [
      { value: '£4m+', label: 'Annual turnover' },
      { value: '5', label: 'Countries' },
      { value: 'Year 2', label: 'In business' },
    ],
  },

  {
    slug: 'lmdn-ltd',
    seoTitle: 'LMDN Ltd — Client Story | Valentis',
    seoDescription:
      'How Valentis helped Karwin Lam and LMDN Ltd master VAT on online selling — recovering £25,000 paid in error from HMRC for an e-commerce fashion brand.',
    title: 'A Chat with Karwin Lam',
    company: 'LMDN Ltd',
    trade: 'E-Commerce, Fashion & Second-hand goods',
    logo: 'l1',
    logoAlt: 'LMDN',
    sections: [
      {
        heading: 'Tell us a little about yourself and how it all started.',
        paragraphs: [
          "I'm Karwin, a young entrepreneur. It all started in 2014! (Time flies!) I was always passionate about fashion and as a 19-year-old, I just wanted to do business. LMDN is an amazing, well-established brand. We do business all around the world, selling hoodies, bottoms, and other clothing. It's crazy that this all started with a loan from my Mum and in my garage! – So don't be afraid to do business!",
        ],
      },
      {
        heading: 'Any memorable moments?',
        paragraphs: [
          "I can't tell you how… but Justin Bieber and Jonathan Cheban have worn my products! In that month, my turnover increased by 6 figures!",
        ],
      },
      {
        heading: 'What were the challenges you faced?',
        paragraphs: [
          "There were so many. Setting up the business, annual accounts, taxes, just to start off with. I found VAT very complicated. In fact, my previous accountants didn't even inform me about the various rules on online selling, selling to the EU and around the world.",
        ],
      },
      {
        heading: 'Why Valentis?',
        paragraphs: [
          'Valentis made business easy for me. They genuinely took care of everything. Setting up my Xero, Bank & PayPal feeds, linking Shopify – everything! They organised my business for me and helped me to understand my responsibilities to Companies House and HMRC.',
          'At the beginning, I hated VAT. I found it overwhelming, and the liability would always be a shock. Valentis trained me to understand VAT along with the rules on selling to the EU & outside the EU. They discovered that I had paid £25,000 of VAT in error. By correctly applying the VAT rules they were able to fully recover this from HMRC.',
          'I now have two other businesses, the team at Valentis are really great to work with and they give me a lot of confidence.',
        ],
      },
    ],
    testimonial: {
      quote:
        'Valentis made business easy for me. They discovered that I had paid £25,000 of VAT in error. By correctly applying the VAT rules they were able to fully recover this from HMRC. I now have two other businesses, the team at Valentis are really great to work with and they give me a lot of confidence.',
      name: 'Karwin Lam',
      role: 'LMDN Ltd',
    },
    metrics: [
      { value: '£25,000', label: 'VAT recovered from HMRC' },
      { value: '6 figures', label: 'Turnover increase in a month' },
    ],
    links: [
      { label: 'lmdn.co.uk', href: 'https://lmdn.co.uk/' },
      { label: 'Instagram', href: 'https://www.instagram.com/lmdnuk/?hl=en' },
    ],
  },

  {
    slug: 'arm-group-ltd',
    seoTitle: 'ARM Group Ltd — Client Story | Valentis',
    seoDescription:
      'How Valentis acted as Financial Controller for Mo Qadar and ARM Group Ltd (Sahara Grill) — managing fit-out costs, cash flow projections and tax liabilities.',
    title: 'Steaks with Mo Qadar',
    company: 'ARM Group Ltd',
    trade: 'Steak House – Franchise',
    logo: 'l123',
    logoAlt: 'Sahara Grill',
    sections: [
      {
        heading: 'Proudest moment?',
        paragraphs: [
          'Running a restaurant has its highs and lows. I would say out of all the events that have happened, my proudest moment was cutting the ribbon on the opening day of our restaurant and seeing a long queue of customers lining up at our door!',
        ],
      },
      {
        heading: 'Challenges along the way?',
        paragraphs: [
          'I think for me it was the cash flow and the fitout. Dealing with the fitout was stressful and seemed like we were constantly encountering issues. Setting aside money for VAT, upcoming liabilities, Corporation Tax etc. was something that also worried me.',
        ],
      },
      {
        heading: 'How did Valentis help?',
        paragraphs: [
          'To be honest more than being an accountant and just doing our accounts, Valentis played the key role of a Financial Controller very well. They had the difficult conversations for us with project managers, builders, and the landlord. They scrutinised the numbers and each invoice we received. £100K into the project and I realised how important it was to have someone on your team to have these conversations about budgets, costs, and timing.',
          'They also helped immensely with organising our cash flow. They did this by drawing up cash flow projections and giving simple advice such as opening sub-accounts to store our VAT/Corporation tax funds to better manage our liabilities.',
          "I believe it's imperative that you speak to an accountant if you're thinking about franchising, initial agreements, leases, fit-out costs, accounting systems, ROI and an exit strategy are just some of key things that you would need advice on. A specialist in the field saves you so much money and time along the way.",
        ],
      },
    ],
    testimonial: {
      quote:
        'Valentis played the key role of a Financial Controller very well. They had the difficult conversations for us with project managers, builders, and the landlord. They scrutinized the numbers and each invoice we received. £100K into the project and I realised how important it was to have someone on your team to have these conversations about budgets, costs, and timing.',
      name: 'Mo Qadar',
      role: 'ARM Group Ltd – Sahara Grill (Hounslow)',
    },
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
