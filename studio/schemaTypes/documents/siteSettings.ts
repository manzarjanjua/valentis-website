import { defineType, defineField } from 'sanity';

/**
 * siteSettings — global content for the Header and Footer (singleton).
 * Field shape mirrors src/lib/types.ts on the frontend and the seed payload in
 * src/lib/siteSettings.data.json.
 */
export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  groups: [
    { name: 'brand', title: 'Brand', default: true },
    { name: 'nav', title: 'Navigation' },
    { name: 'contact', title: 'Contact' },
    { name: 'footer', title: 'Footer' },
  ],
  fields: [
    defineField({
      name: 'logoText',
      title: 'Logo text',
      type: 'string',
      description: 'Wordmark text. A brand-orange period is appended automatically.',
      group: 'brand',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      group: 'brand',
      validation: (r) => r.required(),
    }),

    defineField({
      name: 'nav',
      title: 'Header navigation',
      type: 'array',
      of: [{ type: 'navItem' }],
      group: 'nav',
      validation: (r) => r.min(1),
    }),
    defineField({
      name: 'headerCta',
      title: 'Header CTA',
      type: 'cta',
      group: 'nav',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'quickLinks',
      title: 'Footer quick links',
      type: 'array',
      of: [{ type: 'navItem' }],
      group: 'footer',
      validation: (r) => r.min(1),
    }),
    defineField({
      name: 'social',
      title: 'Social links',
      type: 'array',
      of: [{ type: 'socialLink' }],
      group: 'footer',
    }),

    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
      group: 'contact',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      group: 'contact',
      validation: (r) => r.required().email(),
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'address',
      group: 'contact',
      validation: (r) => r.required(),
    }),

    defineField({
      name: 'copyright',
      title: 'Copyright line',
      type: 'string',
      group: 'footer',
      validation: (r) => r.required(),
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Site Settings' }),
  },
});
