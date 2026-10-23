---
type: Architecture
title: Architecture
description: Runtime shape and key files for Winkky Farms.
resource: winkky-farms
tags: [architecture, astro, hugo, static-site]
generated:
  by: Astro rebuild agent (OpenCode)
  at: 2026-10-23T16:24:48Z
---

# Architecture

Winkky Farms is a farm-content static site. The repo is mid-migration: the
original Hugo stack remains intact on the default branch layout, and a modern
Astro 7 rebuild lives additively alongside it on the `feature/astro-rebuild`
branch.

## Astro Runtime Shape (feature branch)

- `astro.config.mjs` - site `https://winkkyfarms.com/`, dedicated `publicDir`
  (`public-assets/`), and an inline PostCSS config (see Notes).
- `package.json` - Astro 7 only dependency; `dev`/`build`/`preview` scripts.
- `src/content.config.ts` - two content collections via `glob` loaders:
  - `posts` from `src/content/posts/`
  - `projects` from `src/content/projects/`
  - shared schema: `title`, optional `description`, `pubDate` (coerced date),
    `tags` (default `[]`), `draft` (default `false`).
- `src/content/` - migrated Markdown (YAML frontmatter, bodies preserved,
  Hugo shortcodes replaced with HTML/Markdown).
- `src/layouts/` - `BaseLayout.astro` (head, header, footer) and
  `ProseLayout.astro` (used by the `about`/`tools` Markdown pages).
- `src/components/` - `SiteHeader`, `SiteFooter`, `StoryCard`.
- `src/lib/utils.ts` - date formatting, newest-first sorting, excerpts, tag counts.
- `src/pages/` - `/`, `/stories/` + `/stories/[slug]`, `/projects/` +
  `/projects/[slug]`, `/tags/` + `/tags/[tag]`, `/about/`, `/tools/`, 404.
- `src/styles/global.css` - single plain-CSS theme (soil brown / harvest gold /
  leaf green; slab-serif headings, rounded sans body, CSS-textured sections).
- `public-assets/` - Astro static copy dir (currently just `favicon.svg`).

Generated output goes to `dist/` (gitignored; not committed).

## Hugo Stack (unchanged)

- `hugo.toml` - site configuration, custom `winkky-farm` theme, params, menu.
- `content/` - original Hugo content (TOML frontmatter) kept in place.
- `themes/winkky-farm/`, `themes/ananke/` - Hugo themes.
- `static/admin/` - Sveltia CMS files for the Hugo workflow.
- `archetypes/`, `resources/`, `postcss.config.js` - Hugo tooling.
- `public/` - stale Hugo build output; tracked historically but excluded from
  the Astro build via the dedicated `publicDir`.

## Strategy Docs

- `MISSION.md` - mission, phases, classes, growing kits, and business strategy.
- `SITE-SUMMARY.md` - redesign summary and technical/content inventory.
- `AFFILIATE-STRATEGY.md`, `MICROGREEN-BUSINESS-PLAN.md`, `TAX-STRATEGY.md`,
  `WEBSITE-SECTIONS-GUIDE.md` - supporting plans (internal; never published).
- `CLAUDE.md` - existing Claude Code guidance.

## Data Flow

Markdown in `src/content/` is loaded by the two Astro content collections,
validated against the shared schema, and rendered with `render(entry)` into
the `[slug]` routes. Listing pages (`/stories/`, `/projects/`, `/tags/`, home)
sort by `pubDate` and exclude drafts. The header navigation mirrors the Hugo
menu in `hugo.toml`, repointed at the Astro routes; every internal link in the
build resolves (verified against `dist/`).
