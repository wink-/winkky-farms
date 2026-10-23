---
type: Notes
title: Notes
description: Decisions and context for Winkky Farms.
resource: winkky-farms
tags: [notes, astro, hugo]
generated:
  by: Astro rebuild agent (OpenCode)
  at: 2026-10-23T16:24:48Z
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
