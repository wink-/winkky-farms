# Log

## 2026-10-23

- Added RSS feed, sitemap, and canonical URLs to the Astro build:
  `@astrojs/rss` + `@astrojs/sitemap` integrations, `src/pages/rss.xml.js`
  (single combined feed of posts + projects, drafts excluded, sorted
  newest-first, with "— field note" / "— project" title suffixes), and
  sitemap/RSS alternate links in the BaseLayout head (canonical link was
  already present).
- `npm run build` passes (77 pages); verified 76 sitemap URLs, 13 feed items
  sorted descending, and canonical/RSS/sitemap tags in built story and
  project HTML. Restores parity with the RSS/sitemap the Hugo stack used to
  generate.
- Updated setup, status, and notes.
- Rebuilt the site additively as an Astro 7 site on `feature/astro-rebuild`:
  content collections, migrated content (13 posts/projects + about/tools
  pages), full page set, and a soil/gold/leaf farm theme in plain CSS.
- `npm run build` passes cleanly (77 pages); all internal links verified.
- Kept every Hugo file untouched; Astro uses dedicated `public-assets/` and an
  inline PostCSS config to coexist with legacy Hugo tooling.
- Updated architecture, setup, status, and notes; next steps are review,
  merge, host build repoint, then Hugo cleanup.

## 2026-07-07

- Added top-level README with a concise overview and marked project-docs block.
- Refined OKF documentation format with `okf_version` index frontmatter.
- Expanded repo-specific agent commands, guardrails, and docs pointers.
- Updated status, architecture, setup, and notes with current validation and resume context.

## 2026-07-06

- Bootstrapped OKF documentation.
- Added repo-specific agent instructions alongside existing `CLAUDE.md`.
- 2026-10-23 — Documented relationship to Streetcats content platform: standalone stays as fallback/design source; platform theme tracked in content-platform feature/streetcats-themes.
