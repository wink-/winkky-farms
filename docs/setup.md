---
type: Setup
title: Setup
description: Local setup and validation notes for Winkky Farms.
resource: winkky-farms
tags: [setup, hugo, validation]
timestamp: 2026-07-06T00:00:00Z
---

# Setup

## Requirements

- Hugo available on PATH.
- Theme submodules initialized if theme directories are missing or incomplete.
- Node/PostCSS tooling only if changing the CSS pipeline; do not install dependencies unless requested.

## Common Commands

```bash
hugo server -D
hugo server
hugo --gc --minify
hugo --gc --minify --enableGitInfo
hugo --gc --minify --buildFuture
```

## Lightweight Checks

```bash
git diff --check
python3 -c 'import pathlib,tomllib; tomllib.loads(pathlib.Path("hugo.toml").read_text())'
```

## Validation

Lightweight validation used for documentation bootstrap:

```bash
hugo --printPathWarnings --panicOnWarning
```

If Hugo is unavailable, fall back to repository state and Markdown/config review.
