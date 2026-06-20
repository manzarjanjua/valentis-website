import { defineType, defineField } from 'sanity';

export const cta = defineType({
  name: 'cta',
  title: 'Call to action',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'href',
      title: 'Link',
      type: 'string',
      description: 'Internal path (/about), anchor (#contact) or full URL.',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: { select: { title: 'label', subtitle: 'href' } },
});
