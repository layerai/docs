# Layer API Documentation

Documentation site for the [Layer](https://layer.ai) REST API, built with [Mintlify](https://mintlify.com).

## Development

Install the Mintlify CLI and start the local preview:

```bash
npm i -g mint
mint dev
```

View at `http://localhost:3000`.

## Structure

- `docs.json` — site configuration and navigation
- `index.mdx` — landing page
- `quickstart.mdx` — getting started guide
- `authentication.mdx` — auth setup
- `guides/` — concept guides (workspaces, models, inferences, workflows, files, etc.)
- `api-reference/` — API reference with OpenAPI spec
- `logo/`, `images/` — static assets

## Adding pages

1. Create an `.mdx` file with YAML frontmatter
2. Add the page path (without `.mdx`) to `docs.json` navigation
3. Pages not listed in navigation won't appear on the site

## Updating the API reference

The OpenAPI spec at `api-reference/openapi.json` is sourced from the Layer app. To update:

```bash
curl -s http://localhost:3000/backend/rest/openapi.json | python3 -m json.tool > api-reference/openapi.json
```
