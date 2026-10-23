# Winkky Farms Agent Instructions

## Overview

This is a Hugo static site for Winkky Farms with farm content, custom theme files, and supporting strategy documents.

## Commands

- Preview drafts locally with `hugo server -D`.
- Preview production-like content with `hugo server`.
- Build production output with `hugo --gc --minify`.
- Run lightweight docs/config checks with `git diff --check` and `python3 -c 'import pathlib,tomllib; tomllib.loads(pathlib.Path("hugo.toml").read_text())'` when Python 3.11+ is available.
- Run Hugo validation with `hugo --printPathWarnings --panicOnWarning` when Hugo is installed.

## Guardrails

- Preserve Hugo conventions in `hugo.toml`, `content/`, `themes/`, `static/`, `archetypes/`, and `resources/`.
- Treat `CLAUDE.md` as existing Claude-specific guidance; keep this `AGENTS.md` focused on repo-wide agent rules.
- Do not overwrite strategy/reference documents such as `MISSION.md`, `SITE-SUMMARY.md`, `AFFILIATE-STRATEGY.md`, or business plan files.
- Update `docs/` when runtime structure, content workflow, deployment assumptions, or project status changes.
- Do not install dependencies unless explicitly requested.

## Docs Pointers

- Start with `docs/index.md` for progressive disclosure.
- Runtime shape, content model, and strategy files are documented in `docs/architecture.md`.
- Setup and validation commands are documented in `docs/setup.md`.
- Current phase and next tasks are tracked in `docs/status.md`.
