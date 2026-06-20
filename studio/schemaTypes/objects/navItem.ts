import { defineType, defineField } from 'sanity';

export const navItem = defineType({
  name: 'navItem',
  title: 'Navigation item',
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
      description: 'Internal path (/industries) or anchor (#services).',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: { select: { title: 'label', subtitle: 'href' } },
});
