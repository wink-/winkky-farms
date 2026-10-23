---
type: Notes
title: Notes
description: Decisions and context for Winkky Farms.
resource: winkky-farms
tags: [notes, astro, hugo]
generated:
  by: Astro rebuild agent (OpenCode)
  at: 2026-10-24T00:00:00Z
---

# Notes

- Existing `CLAUDE.md` says the site deploys on Netlify and uses CMS/admin
  files under `static/admin/`.
- `hugo.toml` uses the custom `winkky-farm` theme, while `themes/ananke/` is
  also present.
- `SITE-SUMMARY.md` describes a completed redesign and recommends adding
  photos, forms, newsletter signup, social links, analytics, and local SEO.
- The repo includes `public/`, `resources/`, and theme files, so avoid
  assuming generated artifacts can be deleted without explicit confirmation.

## Astro Rebuild Decisions (2026-10-23)

- `publicDir` points at a new `public-assets/` directory instead of the Hugo
  `public/` folder. The tracked `public/` tree is stale Hugo build output
  (old HTML, admin CMS, ananke assets); letting Astro copy it would ship dead
  pages and collide with new routes. Do not repoint `publicDir` back to
  `public/` unless `public/` is emptied of Hugo artifacts first.
- `astro.config.mjs` sets `vite.css.postcss` inline (empty plugins) because
  the legacy CommonJS `postcss.config.js` fails to load under
  `"type": "module"`. Renaming/removing that file is part of post-merge
  cleanup, not done during the additive rebuild.
- Hugo `categories` were folded into `tags` during migration (the Astro
  schema has a single `tags` field), which is why every menu target from
  `hugo.toml` (`/tags/crops/`, `/tags/seasons/`, etc.) resolves.
- Markdown pages (`src/pages/about.md`, `src/pages/tools.md`) bypass content
  collection schemas, so `pubDate` arrives as a string there and is
  normalized with `new Date()` in `ProseLayout.astro`.
- Design uses system font stacks (rounded sans body, slab-serif headings) and
  CSS-only textures/motifs; no webfont or image dependencies, and no
  fabricated photos. Internal financials/pricing from the business-plan
  documents are deliberately not published anywhere on the site.
- Content excerpts fall back to a plain-text slice of the body when a story
  has no `description` (currently `morning-chores` and `welcome-to-the-farm`).
- The RSS feed (`src/pages/rss.xml.js`) is a single merged channel: posts get
  a "— field note" title suffix and projects a "— project" suffix so readers
  can tell entry types apart. Post routes are `/stories/<id>/` while project
  routes are `/projects/<id>/` — keep that asymmetry in mind if the feed or
  sitemap logic ever changes. The 404 page is built (77 pages total) but
  correctly excluded from the sitemap (76 URLs).

## Design Mockup Workflow (2026-10-24)

- `mockups/` holds plain static HTML design previews. They are **not** Astro
  routes and must never move into `public/` (stale Hugo output) or
  `public-assets/` (Astro's public dir) — either would ship them.
- Rules (full version in `mockups/README.md`): one variable per variant;
  dated folders `YYYY-MM-DD-<slug>/`; every mockup links the real
  `../../src/styles/global.css` and may only add `variant.css` overrides
  (never fork the stylesheet, tokens first, ~20–120 lines); markup is
  byte-identical to the baseline; real content only; no JS; no external
  assets.
- `mockups/current/` is the baseline: a faithful static reproduction of the
  homepage (header/footer, hero with SVG barn/hills scene, latest stories,
  featured projects, explore grid) using the real class names and real
  content, with an intentionally empty `variant.css`. Refresh it when the
  real homepage changes.
- `mockups/index.html` is a neutral dark gallery with labeled iframes,
  full-size links, and a legend — deliberately not the farm palette so the
  mockups read on their own terms.
- Promotion path for an approved variant: branch `design/<name>`, apply the
  token/override changes to production styles, open a PR into
  `feature/astro-rebuild`. Mockup files themselves are not promoted.

### Variant intent: 2026-10-24-market-stall

- Single variable: "market-day gold energy".
- Intent: brighter market-day energy — harvest gold pushed forward (via
  brightened `--gold-*` token overrides), chunkier cards with thicker
  stitched borders (dashed outline inset on `.card`), bigger slab-serif
  display scale (`.hero h1`, `.section__head h2`, `.card h3`), and livelier
  paper/texture contrast (denser body grain, stronger hero glow).
- Constraints honored: soil-brown base stays grounded, AA contrast kept
  (gold-700 `#8f5e10` text on gold-100/paper; soil-950 on gold-500),
  identical markup, no JS, no external assets.
- Verdict: awaiting review. Record keep/iterate/discard here when decided.
