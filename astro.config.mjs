// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// `site` is required for canonical URLs, the sitemap and absolute OG image URLs.
// Override per environment via PUBLIC_SITE_URL (see .env.example).
const SITE_URL = process.env.PUBLIC_SITE_URL ?? 'https://valentis.co.uk';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  output: 'static',
  trailingSlash: 'ignore',
  build: {
    inlineStylesheets: 'auto',
  },
  integrations: [
    sitemap({
      // Inner pages are out of scope this phase; only the home page exists.
      filter: (page) => !page.includes('/studio'),
    }),
  ],
  // Tailwind v4 is wired via PostCSS (postcss.config.mjs) rather than the Vite
  // plugin, which is incompatible with Astro 6's rolldown-vite bundler.
});
