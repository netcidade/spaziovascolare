# LEARNINGS: Milestone 1 - Foundation & Deployment

## Key Decisions
- **Git Integration:** Chose to push all existing code to GitHub first to secure the baseline before making changes.
- **Cloudflare Strategy:** Transitioned from Cloudflare Pages to **Cloudflare Workers** (Unified platform) to resolve SSR binding conflicts (`ASSETS` reserved name) introduced in Astro 6.
- **Project Structure:** Decided to move all static images from the root `img/` folder to `public/img/` to ensure they are correctly bundled and served by Astro.

## Lessons Learned
- **Astro 6 Adapter Changes:** The new `@astrojs/cloudflare` adapter in Astro 6 uses a "Workers Assets" feature by default, which conflicts with classic "Pages" projects if they have certain internal configurations.
- **Build Output Structure:** Astro 6 produces a split `dist/client` and `dist/server` structure. Cloudflare Workers need to point to `dist/server/entry.mjs` (via `wrangler.json`) to run SSR correctly.
- **Public Directory:** Astro only serves files from the `public/` directory at the root. Any other folders in the root (like `img/`) will be ignored during the build process.

## Patterns Discovered
- **Unified Deployment:** Cloudflare's new "Workers e Pages" dashboard handles both types similarly, but for Astro 6 SSR, the "Worker" deployment path is more robust against reserved name errors.
- **Wrangler Redirection:** Astro 6 generates its own `dist/server/wrangler.json`. Trying to provide a root `wrangler.json` can cause vite-plugin conflicts if the paths aren't precisely aligned with the build-time environment.

## Surprises
- **Reserved Name Conflict:** The `ASSETS` binding error was unexpected and is a specific side-effect of the new Astro 6 adapter design on the Pages platform.
- **Missing Public Folder:** The project was running locally despite images being outside the `public/` folder, likely due to a dev-server specific fallback or non-standard local vite config that didn't translate to production builds.
