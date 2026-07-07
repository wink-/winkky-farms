---
type: Notes
title: Notes
description: Decisions and context for Winkky Farms.
resource: winkky-farms
tags: [notes, hugo]
timestamp: 2026-07-06T00:00:00Z
---

# Notes

- Existing `CLAUDE.md` says the site deploys on Netlify and uses CMS/admin files under `static/admin/`.
- `hugo.toml` uses the custom `winkky-farm` theme, while `themes/ananke/` is also present.
- `SITE-SUMMARY.md` describes a completed redesign and recommends adding photos, forms, newsletter signup, social links, analytics, and local SEO.
- `postcss.config.js` references autoprefixer, but no package metadata was present in the initial inspection.
- The repo includes `public/`, `resources/`, and theme files, so avoid assuming generated artifacts can be deleted without explicit confirmation.
