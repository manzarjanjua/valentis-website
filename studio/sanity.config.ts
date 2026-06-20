import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemaTypes';
import { structure } from './structure';

// Project id/dataset come from env so the repo carries no project-specific
// values. Set SANITY_STUDIO_PROJECT_ID / SANITY_STUDIO_DATASET (see .env.example).
export default defineConfig({
  name: 'default',
  title: 'Valentis',

  projectId: process.env.SANITY_STUDIO_PROJECT_ID || 'missing-project-id',
  dataset: process.env.SANITY_STUDIO_DATASET || 'production',

  plugins: [structureTool({ structure }), visionTool()],

  schema: {
    types: schemaTypes,
  },
});
