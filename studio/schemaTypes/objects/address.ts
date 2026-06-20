import { defineType, defineField } from 'sanity';

export const address = defineType({
  name: 'address',
  title: 'Address',
  type: 'object',
  options: { columns: 2 },
  fields: [
    defineField({ name: 'street', title: 'Street', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'city', title: 'City', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'region', title: 'Region / County', type: 'string' }),
    defineField({
      name: 'postalCode',
      title: 'Postal code',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'country',
      title: 'Country',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'countryCode',
      title: 'Country code (ISO 3166-1 alpha-2)',
      type: 'string',
      description: 'e.g. GB — used for schema.org structured data.',
      validation: (r) => r.required().uppercase().length(2),
    }),
  ],
});
