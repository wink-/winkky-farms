---
type: Guide
title: Design Mockups
description: Workflow for static design mockups — baseline reproduction, dated single-variable variants, and the promotion path into production.
resource: winkky-farms
tags: [design, mockups, workflow, css]
status: active
---

# Design Mockups

Static HTML previews for exploring design changes to the earthy Winkky Farms
theme without touching production files. Each mockup reproduces the real
homepage markup and loads the **real** `src/styles/global.css`; variants
differ only through a small `variant.css` override file.

## What this folder is (and is not)

- Plain static HTML/CSS. **Not** Astro routes — nothing in `mockups/` is
  built or shipped by `npm run build`.
- Never place mockups in `public/` or `dist/`. `public/` is stale Hugo
  output and `public-assets/` is Astro's public dir; both would ship the
  files to production.
- Safe to delete/regenerate at any time; verdicts live in `docs/notes.md`.

## Rules

1. **One variable at a time.** A variant explores a single design idea
   (e.g. "market stall" = brighter gold energy). If you want to try two
   ideas, make two dated folders.
2. **Dated variant folders.** Name new variants `YYYY-MM-DD-<slug>/`
   (e.g. `2026-10-24-market-stall/`). Never edit an existing variant
   folder's concept; add a new dated folder instead.
3. **Link the real stylesheet, override only.** Every mockup links
   `../../src/styles/global.css` and may only add `variant.css`
   overrides. Never copy, fork, or inline the production stylesheet.
   Tokens first: prefer overriding the `:root` custom properties over
   restating rules.
4. **Identical markup.** The HTML inside a variant must be byte-identical
   to `current/index.html`. No JS, no external assets, no markup edits.
5. **Real content only.** Copy markup, class names, and copy from the real
   rendered pages (`src/pages/index.astro`, components, content
   collections). No lorem ipsum, no invented stories or projects.
6. **Keep the baseline honest.** `current/` is a faithful static
   reproduction of the homepage (hero + barn/hills scene, latest stories,
   featured projects, explore grid, header/footer). Refresh it whenever
   the real homepage changes; its `variant.css` stays an intentional
   no-op.
7. **Size discipline.** A `variant.css` should stay roughly 20–120 lines.
   If it needs more, the idea is probably more than one variable.

## Reviewing

Open `mockups/index.html` in a browser (double-click, or serve the repo
root with any static server). The gallery shows labeled live iframes of
the baseline and each variant, with links to open each full size.

## Promotion path

When a variant earns approval:

1. Create a dedicated branch from the working branch:
   `git checkout -b design/<name>` (e.g. `design/market-stall`).
2. Apply the variant's token/override changes to the production styles
   (`src/styles/global.css` or a properly imported scoped stylesheet) on
   that branch.
3. Open a PR into `feature/astro-rebuild`. Mockup files themselves are not
   promoted; only their effect on production styles is.
4. Record the decision (keep / iterate / discard, and why) in
   `docs/notes.md`, and note the merge or rejection in `docs/log.md`.

## Current variants

| Folder | Date | Variable | Status |
| --- | --- | --- | --- |
| `current/` | — | Baseline (no overrides) | reference |
| `2026-10-24-market-stall/` | 2026-10-24 | Market-day gold energy: brighter harvest gold, chunkier stitched cards, bigger slab display, livelier texture | awaiting verdict |

See `docs/notes.md` for variant intent and verdict history.
