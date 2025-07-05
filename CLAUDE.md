# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Site Overview

Winkky Farms is a Hugo-based family farm blog built with the Ananke theme. It's a personal blog documenting three generations of farming tradition, covering crops, livestock, seasonal activities, and family history. The site is deployed on Netlify with CMS integration for content management.

## Common Commands

### Development
```bash
# Start development server with drafts
hugo server -D

# Start development server (published content only)
hugo server

# Build site for production
hugo --gc --minify

# Create new post
hugo new posts/post-title.md

# Create new content with specific archetype
hugo new content/posts/my-post.md
```

### Content Management
```bash
# Build and serve with git info (matches Netlify production)
hugo --gc --minify --enableGitInfo

# Build for deploy preview (with future posts)
hugo --gc --minify --buildFuture
```

## Site Architecture

### Hugo Configuration
- **Site Config**: `hugo.toml` - Base URL, theme, navigation menu, and site parameters
- **Theme**: Uses Ananke theme (configured in hugo.toml)
- **Deployment**: Netlify with `netlify.toml` defining build contexts and Hugo version (0.147.9)

### Content Structure
- **Posts**: `content/posts/` - Farm blog posts with categories and tags
- **Pages**: `content/about.md` - Static pages like About
- **Projects**: `content/projects/` - Farm project documentation
- **Categories**: crops, livestock, seasons, farm-life, history, sustainability
- **Archetypes**: `archetypes/default.md` - Template for new content with TOML front matter

### Netlify CMS Integration
- **Admin Interface**: `static/admin/` - Netlify CMS configuration
- **CMS Config**: `static/admin/config.yml` - Defines content types and fields
- **Media**: Images uploaded to `static/images/uploads/`
- **Collections**: Posts and Pages with predefined categories and fields

### Front Matter Structure
Posts use TOML format with these fields:
- `date` - Publication date
- `draft` - Boolean draft status
- `title` - Post title
- `categories` - Array of predefined categories
- `tags` - Array of custom tags
- `featured_image` - Optional featured image path

### Navigation & Theming
- **Menu**: Defined in `hugo.toml` with farm-themed sections (The Fields, The Animals, Seasons, etc.)
- **Theme Settings**: Background color, author info, and site description in `[params]`
- **Generated Assets**: Hugo processes theme assets to `resources/_gen/`

## Development Notes

### Content Creation Workflow
1. Use `hugo new posts/title.md` for new blog posts
2. Posts default to `draft = true` - set to `false` to publish
3. Use Netlify CMS at `/admin/` for web-based content editing
4. Categories should match the predefined menu structure

### Deployment Context
- **Production**: `hugo --gc --minify` with git info enabled
- **Preview**: Includes future-dated posts with `--buildFuture`
- **Branch Deploy**: Uses deploy URL for proper asset linking

### Theme Customization
The Ananke theme is configured but files aren't locally overridden. Customizations are done through:
- `hugo.toml` parameters
- Custom CSS (if needed, add to `static/css/`)
- Layout overrides (if needed, add to `layouts/`)