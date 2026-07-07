---
type: Architecture
title: Architecture
description: Runtime shape and key files for Winkky Farms.
resource: winkky-farms
tags: [architecture, hugo, static-site]
timestamp: 2026-07-06T00:00:00Z
---

# Architecture

Winkky Farms is a Hugo static site for farm stories, projects, tools, and business/education plans.

## Runtime Shape

- `hugo.toml` - site configuration, custom `winkky-farm` theme selection, params, and menu.
- `content/posts/` - farm blog posts.
- `content/projects/` - farm project case studies.
- `content/about.md` and `content/tools.md` - static pages.
- `themes/winkky-farm/` - custom theme files.
- `themes/ananke/` - additional theme dependency/reference.
- `static/admin/` - Netlify CMS/admin files.
- `static/images/` - static image assets.
- `archetypes/` - Hugo content templates.
- `postcss.config.js` - PostCSS/autoprefixer configuration used by theme styling if the toolchain is active.

## Strategy Docs

- `MISSION.md` - mission, phases, classes, growing kits, and business strategy.
- `SITE-SUMMARY.md` - redesign summary and technical/content inventory.
- `AFFILIATE-STRATEGY.md`, `MICROGREEN-BUSINESS-PLAN.md`, `TAX-STRATEGY.md`, `WEBSITE-SECTIONS-GUIDE.md` - supporting plans.
- `CLAUDE.md` - existing Claude Code guidance.

## Build

Hugo renders the site using the custom theme and content files.

## Data Flow

Markdown content and front matter in `content/` feed Hugo templates from the `winkky-farm` theme. Hugo combines those inputs with `hugo.toml` menu/params, copies files from `static/`, uses generated/cached resources from `resources/` when applicable, and writes the generated static site to `public/` when built.
