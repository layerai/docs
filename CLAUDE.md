# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Mintlify documentation site. Pages are MDX files with YAML frontmatter. Site configuration is in `docs.json`.

## Commands

- `mint dev` — local preview at http://localhost:3000 (requires Node.js 19+)
- `mint dev --port <port>` — run on a custom port
- `mint broken-links` — validate all links in docs
- `mint update` — update CLI to latest version
- Install CLI: `npm i -g mint`

## Architecture

- `docs.json` — central config: navigation structure, theme, branding, navbar, footer
- `index.mdx` — landing page
- `essentials/` — core docs about Mintlify features (markdown, code, images, navigation, settings)
- `api-reference/` — API docs with OpenAPI spec (`openapi.json`) and endpoint examples
- `ai-tools/` — guides for AI tool integrations (Cursor, Claude Code, Windsurf)
- `snippets/` — reusable MDX snippets (imported via `<Snippet>` component)
- `images/`, `logo/` — static assets

## Navigation

Navigation is defined in `docs.json` under `navigation.tabs[].groups[].pages`. Page paths are relative to root without the `.mdx` extension. When adding a new page, it must be added to `docs.json` navigation to appear on the site.

## Writing Style

- Active voice, second person ("you")
- Sentence case for headings
- Bold for UI elements: Click **Settings**
- Code formatting for file names, commands, paths, and code references
- One idea per sentence
