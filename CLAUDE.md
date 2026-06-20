# Valentis Website Revamp — Build Specification

> **Project:** Rebuild the Valentis (valentis.co.uk) marketing website — **HOME PAGE ONLY** for this phase.
> **Stack:** Astro (frontend) + Sanity (headless CMS/backend).
> **Goal:** A more professional, corporate, trustworthy design using the **same content** and **same fonts**, optimised for **maximum Core Web Vitals** and **SEO best practices**.
> **Hard rule:** DO NOT change copy/content or remove/reorder sections. Improve only design, structure, performance, and SEO.

---

## 1. Business Context

- **Company:** Valentis UK Limited — a boutique virtual CFO / accountancy firm.
- **Tagline:** "Bespoke. Intelligent. Accountancy."
- **Positioning:** "CFO-level thinking without CFO-level cost." Works alongside founders, directors and operators as a financial partner.
- **Audience:** SME founders, directors, operators, scaling businesses.
- **Tone:** Confident, clear, premium, consultative, corporate but human. Avoid gimmicks.
- **Location:** 6-8 Great Eastern Street, London, EC2A 3NT, United Kingdom.

---

## 2. Design Direction

Aim for a **premium corporate financial-services** aesthetic — think the polish of a top-tier advisory firm: generous whitespace, strong typographic hierarchy, restrained color, subtle motion, and grids that feel engineered.

### 2.1 Typography (KEEP EXACTLY)
- **Headings:** `Montserrat` (sans-serif). Use weights 600/700 for headings, 500 for sub-heads.
- **Body:** `Poppins` (sans-serif). Use 400 for body, 500 for emphasis.
- Self-host both via `@fontsource` (Astro) with `font-display: swap`, preload the two most-used weights, and subset to `latin`. Avoid render-blocking Google Fonts CSS for better LCP.
- Establish a modular type scale (e.g. 1.250 major-third): H1 ~3.5–3.75rem desktop / fluid `clamp()`, scaling down gracefully on mobile.

### 2.2 Color Palette (derived from current brand)
| Token | Value | Use |
|---|---|---|
| `--brand-orange` | `#F15A29` | Primary CTA, accents, underlines |
| `--brand-orange-soft` | `#FEF4F0` | Tinted section backgrounds |
| `--ink` | `#011013` | Primary text |
| `--ink-2` | `#111827` | Dark sections / footer |
| `--muted` | `#4B5563` | Secondary text |
| `--surface` | `#FFFFFF` | Base background |
| `--surface-2` | `#F9FAFB` | Alternating sections |
| `--border` | `#E5E7EB` | Hairlines, cards |

Use orange sparingly as an accent for trust/premium feel. Dark navy (`--ink-2`) for high-contrast sections (hero overlay, footer, CTA band).

### 2.3 Layout & System
- 12-column responsive grid, max content width ~1200–1280px, consistent vertical rhythm (section padding tokens).
- Card-based components with soft shadows, 12–16px radii, 1px hairline borders.
- Subtle, performant micro-interactions only (CSS transforms/opacity; no layout-shifting animations). Respect `prefers-reduced-motion`.
- Sticky, slim header with clear CTA. Mobile: accessible hamburger nav.
- Consistent iconography (lightweight inline SVG, not an icon font).

---

## 3. Home Page Sections (PRESERVE ALL — same content, same order)

> Reproduce the copy verbatim. Improve only structure/visual treatment.

### 3.1 Header / Navigation
- Logo: **VALENTIS.** (the period in `--brand-orange`).
- Nav items: **Industries, Stories, About, Resources**.
- Primary CTA button: **Book a Discovery Call**.

### 3.2 Hero — "How We Work"
- Heading: **How We Work**
- Sub-heading: **Clarity first. Control second. Growth always.**
- Body:
  - "Most firms talk about what they do."
  - "We start with how your business actually runs — and how money moves through it."
  - "At Valentis, we work alongside founders, directors, and operators as a financial partner — bringing CFO-level thinking without CFO-level cost."
- CTAs: **Book a Discovery Call** (primary), **Virtual CFO Services** (secondary).
- Background: keep the business-handshake imagery with a dark navy overlay for contrast/readability. Serve as optimised `AVIF/WebP`, responsive `srcset`, explicit width/height to avoid CLS. This is the **LCP element** — prioritise it.

### 3.3 Our Process — "The Valentis Method"
Eyebrow: **OUR PROCESS** · Title: **The Valentis Method**. Render as a clean 5-step timeline/stepper.

- **Step 1 — Understand the Business** — "We start with how your business actually works — not just the numbers." · Items: Revenue streams, Cost pressure points, Key risks, Decision bottlenecks · **Outcome: Clear commercial picture**
- **Step 2 — Build Financial Control** — "We put structure and clarity around your finances." · Items: Reliable numbers, Cash vs profit clarity, Margin visibility, Strong systems · **Outcome: Confidence and control**
- **Step 3 — Turn Data into Decisions** — "We focus on insight, not reports." · Items: What changed, Why it matters, What needs action, What can wait · **Outcome: Better decisions**
- **Step 4 — Act Like Your CFO** — "We guide and challenge like an in-house CFO." · Items: Pricing & margins, Cashflow planning, Tax strategy, Growth decisions · **Outcome: Strategic support**
- **Step 5 — Stay Close as You Scale** — "As your business grows, so does our involvement." · Items: Evolving KPIs, Improved forecasts, Stronger controls, Ongoing support · **Outcome: Scalable finance function**

### 3.4 What You Get — "(In Plain English)"
Checklist with check icons:
- Monthly performance summary (what changed & why)
- Cashflow forecasts you can rely on
- Margin & pricing insight
- KPIs tailored to your business
- Decision support for growth, hires & funding
- Clean systems and reduced admin

### 3.5 "This Works Best For Businesses That…"
Three value cards:
- **Want clarity and control over finances** — "You're tired of guessing and want to see the full picture clearly."
- **Are scaling and making bigger decisions** — "Growth brings complexity — you need financial insight that keeps pace."
- **Need CFO-level thinking without full-time cost** — "Get strategic financial leadership when you need it, not when you don't."

Mid-page CTA band: **Ready for clarity and control?** — "If your numbers feel unclear, your decisions will be too. We fix that." · CTA: **Book a Discovery Call**

### 3.6 Our Services — "How Can We Help You?"
Eyebrow: **OUR SERVICES**. Intro: "From launching your business to securing your legacy, we provide comprehensive financial services tailored to every stage of your journey."
Service categories (keep the hover-to-reveal interaction, made keyboard/touch-accessible):
- Start my business
- Secure your Business
- Build Your Business
- Ensure your legacy continues
- When you hit a bump

Helper text: "Hover over a service category to see details" (provide an accessible click/focus fallback for touch + keyboard).
Sub-CTA: **Not sure which service you need?** → **Book a Free Consultation**

### 3.7 Our Team — "Meet the Team"
Eyebrow: **OUR TEAM**. Member cards:
- **Nurul Ali** — Partner at Valentis
- **Muneer Ali** — Partner at Valentis
- **Yousuf** — Junior Partner

### 3.8 Get Started / Contact — "Need a Smarter Finance Setup?"
Eyebrow: **LET'S GET STARTED**. Sub: "Arrange your discovery meeting today and unlock the potential of your business."
- **Phone:** +44 20 3371 8844
- **Email:** info@valentis.co.uk
- **Location:** 6-8 Great Eastern Street, London, EC2A 3NT

### 3.9 Final CTA Band
**Ready to Stop Guessing With Your Finances?** — "Let's talk about how we can help you achieve clarity." · CTA: **Book a Discovery Call**

### 3.10 Footer
- Logo **VALENTIS.** + tagline "Bespoke. Intelligent. Accountancy."
- Social: LinkedIn, X (Twitter), Facebook, Instagram
- **Quick Links:** Services, Why Us, Team, Contact, Industries, News
- **Sitemap**
- **Contact:** info@valentis.co.uk · +44 20 3371 8844 · 6-8 Great Eastern Street, London, United Kingdom, EC2A 3NT
- "© Copyrights 2025 Valentis UK Limited. All rights reserved."

---

## 4. Technical Architecture

### 4.1 Frontend — Astro
- Latest Astro, **Islands Architecture** — ship near-zero JS by default; hydrate only interactive bits (mobile nav, services hover/accordion) with `client:visible` / `client:idle`.
- TypeScript throughout. Component structure under `src/components/` (Header, Hero, ProcessTimeline, WhatYouGet, BestForCards, ServicesAccordion, TeamGrid, ContactSection, CtaBand, Footer).
- Styling: scoped Astro styles or Tailwind CSS (utility-first, purge unused). Pick one and stay consistent. Design tokens in CSS custom properties.
- Self-host fonts via `@fontsource-variable/montserrat` and `@fontsource/poppins`.
- Use Astro `<Image />` / `astro:assets` for all imagery (AVIF/WebP, responsive, lazy except LCP hero which is eager + `fetchpriority="high"`).
- Static output (SSG) for the home page; deploy to an edge/CDN host (Netlify/Vercel/Cloudflare Pages).

### 4.2 Backend — Sanity
- Sanity Studio in `/studio` (or separate). Frontend pulls content at build time via GROQ + `@sanity/client`; use webhooks to trigger rebuilds on publish.
- Make ALL home-page copy editable via schemas so content stays identical but CMS-managed.

#### Suggested Sanity Schemas
- `siteSettings` — logo, nav items, social links, phone, email, address, copyright.
- `homePage` (singleton) with fields/objects:
  - `hero` { heading, subheading, bodyLines[], primaryCta{label,href}, secondaryCta{label,href}, image }
  - `process` { eyebrow, title, steps[] → { stepLabel, title, description, bullets[], outcome } }
  - `whatYouGet` { title, items[] }
  - `bestFor` { items[] → { title, description } }, `midCtaBand` { heading, body, cta }
  - `services` { eyebrow, title, intro, categories[] → { title, details }, helperText, subCta }
  - `team` { eyebrow, title, members[] → { name, role, photo } }
  - `contact` { eyebrow, heading, subheading, phone, email, location }
  - `finalCta` { heading, body, cta }
- Reusable `cta` object type { label, href }.
- Add validation + sensible defaults pre-filled with the verbatim copy above.

---

## 5. Web Vitals — Performance Targets (must hit)
- **LCP < 2.0s**, **CLS < 0.05**, **INP < 200ms**, Lighthouse Performance ≥ 95 (mobile).
- Preload hero image + critical font weights; `font-display: swap`; subset fonts.
- All images: explicit `width`/`height`, modern formats, responsive `srcset`, lazy-load below the fold.
- Inline critical CSS; defer/avoid non-critical JS; no render-blocking third-party scripts (load chat widget lazily/on-interaction).
- Minimal/no layout shift: reserve space for images, embeds, and fonts.
- Cache-friendly headers, HTTP/2-3, Brotli compression, CDN delivery.
- Run Lighthouse + WebPageTest as part of the acceptance check.

---

## 6. SEO Best Practices
- Semantic HTML5 landmarks: one `<h1>` (hero), logical `<h2>`/`<h3>` hierarchy per section.
- Per-page `<title>` and meta description (CMS-driven, with sensible defaults from current site).
- Open Graph + Twitter Card tags; social share image.
- Canonical URL, `lang="en-GB"`, robots meta, generated `sitemap.xml` (Astro sitemap integration) and `robots.txt`.
- **Structured data (JSON-LD):** `Organization` / `AccountingService` / `LocalBusiness` (name, logo, address, phone, email, social `sameAs`), plus `BreadcrumbList`. Consider `FAQPage` only if FAQ content exists (do not invent content).
- Descriptive `alt` text on all imagery; meaningful link text on CTAs.
- Accessibility (supports SEO + UX): WCAG 2.1 AA contrast, focus states, keyboard nav, ARIA on interactive components, `prefers-reduced-motion`.
- Clean, human-readable URLs; fast TTFB via static hosting.

---

## 7. Deliverables (this phase)
1. Astro project scaffolded with the home page fully built (all sections in §3, verbatim copy).
2. Sanity Studio with schemas in §4.2, seeded with the exact current content.
3. Frontend wired to Sanity via GROQ at build time, with rebuild webhook.
4. Self-hosted Montserrat + Poppins; design tokens; responsive across breakpoints.
5. Lighthouse report demonstrating the §5 targets; SEO/meta/JSON-LD/sitemap in place.

## 8. Acceptance Criteria
- ✅ Content is identical to current site (no copy changes, no missing/added sections).
- ✅ Same fonts (Montserrat headings, Poppins body).
- ✅ Noticeably more professional, corporate, premium visual design.
- ✅ Fully responsive + accessible (WCAG 2.1 AA).
- ✅ Web Vitals targets met (§5).
- ✅ SEO essentials present (§6).
- ✅ All content editable in Sanity.

## 9. Out of Scope (this phase)
- Inner pages (Industries, Stories, About, Resources, service detail pages) — home page only for now.
- Copywriting changes, new sections, or rebranding.