import { defineType, defineField } from 'sanity';

export const socialLink = defineType({
  name: 'socialLink',
  title: 'Social link',
  type: 'object',
  fields: [
    defineField({
      name: 'platform',
      title: 'Platform',
      type: 'string',
      options: {
        list: [
          { title: 'LinkedIn', value: 'LinkedIn' },
          { title: 'X (Twitter)', value: 'X' },
          { title: 'Facebook', value: 'Facebook' },
          { title: 'Instagram', value: 'Instagram' },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'href',
      title: 'URL',
      type: 'string',
      description: 'Full profile URL. Used for JSON-LD sameAs when an absolute http(s) URL.',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: { select: { title: 'platform', subtitle: 'href' } },
});
