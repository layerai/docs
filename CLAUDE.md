# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Layer API documentation site built with Mintlify. Pages are MDX files with YAML frontmatter. Site configuration is in `docs.json`.

## Commands

- `mint dev` — local preview at http://localhost:3000 (requires Node.js 19+)
- `mint dev --port <port>` — run on a custom port
- `mint broken-links` — validate all links in docs
- `mint update` — update CLI to latest version
- Install CLI: `npm i -g mint`

## Architecture

- `docs.json` — central config: navigation structure, theme, branding, navbar, footer
- `index.mdx` — landing page with high-level concept overview
- `quickstart.mdx` — end-to-end generation walkthrough
- `api-reference/` — API reference intro and OpenAPI spec (`openapi.json`); endpoint pages are auto-generated
- `images/`, `logo/` — static assets

## Navigation

Navigation is defined in `docs.json` under `navigation.tabs[].groups[].pages`. Page paths are relative to root without the `.mdx` extension. When adding a new page, it must be added to `docs.json` navigation to appear on the site.

API reference endpoint pages are auto-generated from the OpenAPI spec — no individual MDX files needed. Endpoints are listed in `docs.json` as `"METHOD /path"` strings.

## Updating the OpenAPI spec

The spec is fetched from the Layer app running locally:

```bash
curl -s http://localhost:3000/backend/rest/openapi.json | python3 -m json.tool > api-reference/openapi.json
```

## Writing Style

- Active voice, second person ("you")
- Sentence case for headings
- Bold for UI elements: Click **Settings**
- Code formatting for file names, commands, paths, and code references
- One idea per sentence
- All code examples use the production API base URL: `https://api.app.layer.ai/api`
