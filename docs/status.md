---
type: Status
title: Status
description: Current project phase and next tasks for Winkky Farms.
resource: winkky-farms
tags: [status, roadmap, astro]
generated:
  by: Astro rebuild agent (OpenCode)
  at: 2026-10-24T00:00:00Z
---

# Status: Astro Rebuild on Feature Branch

The Hugo site is being rebuilt in place as a modern Astro 7 site. All Hugo
files remain untouched; the Astro stack is purely additive. Work lives on
`feature/astro-rebuild`.

## Completed

- Hugo configuration, content, themes, CMS files, and strategy documents
  preserved exactly as they were.
- Astro 7 scaffold: `package.json`, `astro.config.mjs`, content collections
  (`posts`, `projects`) with shared schema, and gitignore entries for
  `node_modules/`, `dist/`, `.astro/`.
- All 13 posts/projects migrated TOML to YAML frontmatter (bodies kept, Hugo
  shortcodes replaced); `about` and `tools` migrated as Markdown pages.
- Full page set: home, `/stories/` + detail, `/projects/` + detail, `/tags/`
  + per-tag pages, `/about/`, `/tools/`, 404.
- Header navigation mirrors the `hugo.toml` menu with real, resolving routes.
- Earthy handcrafted theme in plain CSS (soil/gold/leaf palette, slab-serif
  headings, CSS textures; no fabricated imagery).
- `npm run build` passes cleanly: 77 pages, all internal links resolve.
- RSS feed (`dist/rss.xml`, combined posts + projects with "— field note" /
  "— project" title suffixes, drafts excluded), sitemap
  (`dist/sitemap-index.xml`), and canonical URLs in every built page head
  (added 2026-10-23 via `@astrojs/rss` + `@astrojs/sitemap`).

## Next Tasks

- Review the rebuild (content spot-checks, visual pass).
- Merge `feature/astro-rebuild` to the default branch.
- Repoint the host build (Netlify per `CLAUDE.md`) from Hugo to
  `npm run build` with `dist/` as the publish directory.
- After a settling period, remove Hugo directories (`content/`, `themes/`,
  `archetypes/`, `resources/`, `static/admin/`, stale `public/`,
  `postcss.config.js`, `hugo.toml`) in a dedicated cleanup commit.

## Blockers/Risks

- `public/` contains stale Hugo build output; it stays out of the Astro build
  only because `publicDir` points to `public-assets/`. Removing `public/` is
  part of the post-merge cleanup.
- The legacy CommonJS `postcss.config.js` is incompatible with Vite under
  `"type": "module"`; Astro bypasses it via an inline PostCSS config.
- Sveltia CMS (`static/admin/`) is Hugo-oriented and not part of the Astro
  build; content editing workflow needs a decision post-merge.
- RSS/sitemap parity note: the combined feed deliberately merges posts and
  projects into one channel (item titles carry a "— field note" / "—
  project" suffix instead); separate per-collection feeds were not
  requested. If a reader only wants stories, filtering by suffix is the
  current workaround.

## Last Worked On

- 2026-10-23: Full Astro rebuild implemented and building cleanly on
  `feature/astro-rebuild`; docs updated.
- 2026-10-24: Added static design-mockup workflow (`mockups/`: gallery, homepage baseline, `market-stall` variant); no production files changed.

## Suggested First Command

```bash
cd /home/ubuntu/projects/sites/winkky-farms && npm run build
```


## Streetcats platform relationship (2026-10-23)

This standalone build remains the site design reference and fallback. A theme port for
the Streetcats content platform is tracked in `sites/content-platform` branch
`feature/streetcats-themes`, which renders Streetcats-pinned publications through the
publishing contract (fixture builds today). Keep this standalone build until the
platform theme is live and verified.
