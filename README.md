# Valentis website.

Marketing site for **Valentis UK Limited** — a boutique virtual CFO / accountancy firm.

- **Frontend:** [Astro](https://astro.build) (SSG, TypeScript, islands architecture) + Tailwind CSS v4.
- **CMS:** [Sanity](https://sanity.io) Studio in [`/studio`](./studio). Content is pulled at build time via GROQ.
- **Fonts:** self-hosted Montserrat (headings) + Poppins (body) via `@fontsource`.

> **Status:** _Foundation phase._ Design system, layout, SEO, Header and Footer
> are built. The home page content sections (CLAUDE.md §3.2–3.9) are stubbed as
> ordered placeholders in `src/pages/index.astro` and land in the next phase.

## Getting started

```bash
npm install            # also copies font files into public/fonts (postinstall)
cp .env.example .env   # fill in Sanity values (optional for local dev)
npm run dev            # http://localhost:4321
```

The site builds and renders correct, **verbatim** Header/Footer content even
without a Sanity connection, using `src/lib/siteSettings.data.json` as a
fallback. Once Sanity is configured and the singleton is published, content
comes from the CMS.

### Build

```bash
npm run build          # static output in dist/ ; generates sitemap-index.xml
npm run preview
```

## Architecture

| Path | Purpose |
|---|---|
| `src/styles/global.css` | Design tokens (palette, fluid type scale, spacing, radius, shadow), `@font-face`, base styles. Tailwind v4 CSS-first config. |
| `src/components/primitives/` | `Container`, `Section`, `Button`, `Eyebrow`. |
| `src/layouts/BaseLayout.astro` | `<head>` SEO (title/description/canonical/OG/Twitter), `Organization` + `AccountingService`/`LocalBusiness` JSON-LD, `lang="en-GB"`, font preloads. |
| `src/components/Header.astro` / `Footer.astro` | Built verbatim; fed by `siteSettings`. |
| `src/lib/` | `sanity.ts` (client), `queries.ts` (GROQ), `content.ts` (`getSiteSettings` with fallback), `seo.ts` (JSON-LD), `types.ts`, `siteSettings.data.json` (source of truth). |
| `studio/` | Sanity Studio: `siteSettings` singleton schema + reusable objects. |
| `scripts/copy-fonts.mjs` | Copies font woff2 from `@fontsource` to `public/fonts` (postinstall). |
| `scripts/seed.mjs` | Writes the verbatim `siteSettings` singleton into Sanity.

## Sanity

```bash
cd studio
npm install
cp .env.example .env    # set SANITY_STUDIO_PROJECT_ID + dataset
npm run dev             # studio at http://localhost:3333
```

### Seed the `siteSettings` singleton

With `PUBLIC_SANITY_PROJECT_ID` and a write-enabled `SANITY_WRITE_TOKEN` set in
the root `.env`:

```bash
npm run seed            # createOrReplace siteSettings from siteSettings.data.json
```

### Rebuild webhook

In Sanity → API → Webhooks, add a webhook on document publish pointing at your
host's build hook (Netlify/Vercel/Cloudflare Pages) so published changes
trigger a static rebuild.

## Performance & SEO targets (CLAUDE.md §5–6)

LCP < 2.0s · CLS < 0.05 · INP < 200ms · Lighthouse mobile ≥ 95 · WCAG 2.1 AA.
Fonts are preloaded + `font-display: swap`; CSS is inlined where small; JS is
limited to the mobile-nav island.
