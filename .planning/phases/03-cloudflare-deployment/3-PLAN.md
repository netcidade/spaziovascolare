---
wave: 1
depends_on: ["02-appwrite-verification"]
files_modified: ["astro.config.mjs", "package.json"]
autonomous: true
---

# Phase 3: Cloudflare Deployment & Hosting

## Goal
Deploy the application to Cloudflare Pages and ensure that the server-side rendering (SSR) and Appwrite integration work correctly in the production environment.

## Must Haves
- Successful build on Cloudflare Pages.
- Application accessible via a `.pages.dev` or custom domain.
- Admin dashboard and dynamic content working in production.

## Tasks

<task>
<id>1</id>
<type>execute</type>
<title>Prepare Environment Variables</title>
<description>Identify all configuration values that should be environment variables in production.</description>
<read_first>
- src/lib/appwrite.ts
</read_first>
<action>
List the APPWRITE_ENDPOINT, APPWRITE_PROJECT, and DATABASE_ID to be added to the Cloudflare Pages dashboard.
</action>
<acceptance_criteria>
- A list of required environment variables is ready for the user.
</acceptance_criteria>
</task>

<task>
<id>2</id>
<type>execute</type>
<title>Configure Cloudflare Adapter</title>
<description>Ensure `astro.config.mjs` is optimized for Cloudflare and handles potential missing bindings gracefully.</description>
<read_first>
- astro.config.mjs
</read_first>
<action>
Verify if any additional configuration is needed for the `@astrojs/cloudflare` adapter, especially regarding the KV bindings mentioned in logs.
</action>
<acceptance_criteria>
- `astro.config.mjs` is reviewed and confirmed to be correct.
</acceptance_criteria>
</task>

<task>
<id>3</id>
<type>execute</type>
<title>Deployment Instructions</title>
<description>Provide the user with the steps to connect the GitHub repository to Cloudflare Pages.</description>
<read_first>
- .planning/ROADMAP.md
</read_first>
<action>
Document the exact settings needed in the Cloudflare Dashboard: Build command (`npm run build`), Output directory (`dist`), and Node.js version.
</action>
<acceptance_criteria>
- Clear deployment instructions are provided in the phase summary.
</acceptance_criteria>
</task>

## Verification
- Production URL loads the homepage.
- Dynamic data from Appwrite appears on the production site.
- Admin login works on the production URL.
