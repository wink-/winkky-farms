---
type: Setup
title: Setup
description: Local setup and validation notes for Winkky Farms.
resource: winkky-farms
tags: [setup, astro, hugo, validation]
generated:
  by: Astro rebuild agent (OpenCode)
  at: 2026-10-23T16:24:48Z
---

# Setup

## Astro Site (feature branch)

Requirements: Node.js (20.3+ / 22+ recommended by Astro 7) and npm.

```bash
npm install --no-audit --no-fund
npm run dev        # dev server
npm run build      # production build to dist/
npm run preview    # serve dist/ locally
```

Build validation used for the rebuild:

- `npm run build` completes cleanly (77 pages as of 2026-10-23).
- Internal link check: scan `dist/**/*.html` for `href`/`src` starting with
  `/` and confirm each resolves to a file under `dist/`.

## Syndication Outputs (2026-10-23)

The build also emits (via `@astrojs/rss` and `@astrojs/sitemap`):

- `dist/rss.xml` — one combined feed of published posts ("— field note"
  suffix) and projects ("— project" suffix), newest first; `draft: true`
  entries are excluded.
- `dist/sitemap-index.xml` + `dist/sitemap-0.xml` — generated from the
  `site` set in `astro.config.mjs`.

Spot-check after a build:

```bash
grep -c "<loc>" dist/sitemap-0.xml
grep -o "<title>[^<]*</title>" dist/rss.xml | head
grep -o '<link rel="canonical"[^>]*>' dist/stories/farm-kids/index.html
```

## Hugo Site (unchanged, default branch)

Requirements:

- Hugo available on PATH.
- Theme submodules initialized if theme directories are missing or incomplete.

```bash
hugo server -D
hugo server
hugo --gc --minify
```

## Lightweight Checks

```bash
git diff --check
python3 -c 'import pathlib,tomllib; tomllib.loads(pathlib.Path("hugo.toml").read_text())'
```

## Validation

- Astro: `npm run build` is the gate; no external dependencies beyond the
  single `astro` package.
- Hugo: `hugo --printPathWarnings --panicOnWarning` when Hugo is installed.
  If Hugo is unavailable, fall back to repository state and Markdown/config
  review.
