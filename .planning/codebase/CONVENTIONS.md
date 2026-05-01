# CONVENTIONS
Date: 2026-05-01

## Code Style
- Follows standard Astro component structure: `---` frontmatter for Server-Side TypeScript/JavaScript, followed by HTML templating and `<style>`/`<script>` blocks.
- Uses ES Modules (`import`/`export`).

## Error Handling
- Appwrite requests likely include basic `try/catch` blocks inside server-side logic in `.astro` files or within `src/lib/appwrite.ts`.

## UI Patterns
- Uses component-based composition (Hero, Header, Treatments, etc.) to build complex pages like `src/pages/index.astro`.
## Project Structure
- **Static Assets:** All images and static files MUST be placed in the `public/` directory (e.g., `public/img/`) to be correctly served and bundled by Astro.
- **Backend Configuration:** Centralized in `src/lib/appwrite.ts`. Use environment variables in production instead of hardcoded strings for security.

## Cloudflare Deployment (Astro 6)
- **Adapter:** Use `@astrojs/cloudflare` with `output: 'server'`.
- **Platform:** Prefer **Cloudflare Workers** (unified) over classic "Pages" projects for SSR to avoid reserved binding conflicts (like `ASSETS`).
- **Configuration:** Use `wrangler.toml` in the root with `compatibility_flags = ["nodejs_compat"]` to support modern APIs.
- **Build Output:** Astro 6 generates a `dist/client` and `dist/server` structure. Cloudflare Workers should point to `dist/server/entry.mjs` as the main entry point via `wrangler.json/toml`.
