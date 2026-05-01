# INTEGRATIONS
Date: 2026-05-01

## Appwrite
The project heavily relies on Appwrite as a Backend-as-a-Service (BaaS).
- **Location:** `src/lib/appwrite.ts` handles the Appwrite client initialization and data fetching logic.
- **Usage:** Serves dynamic content (like blog posts, treatments, surgeries, and FAQs) to the frontend, and manages administrative data through the custom dashboard.

## Cloudflare
- **Usage:** Production hosting and SSR execution environment.
- **Integration:** Powered by the `@astrojs/cloudflare` adapter, allowing Astro pages to be rendered dynamically on Cloudflare's edge network.
