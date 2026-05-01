# STACK
Date: 2026-05-01

## Core Technologies
- **Framework:** Astro 6.1.8
- **Runtime:** Node.js (Development), Cloudflare Workers/Pages (Production)
- **Language:** TypeScript / JavaScript (ESM)
- **CSS Framework:** Likely standard CSS/SCSS or Tailwind (no explicit Tailwind dependency in package.json, might be using inline styles or vanilla CSS).
- **Backend as a Service:** Appwrite (appwrite ^17.0.2)

## Configuration
- `astro.config.mjs`: Configured for SSR (`output: 'server'`) using `@astrojs/cloudflare` adapter.
- `package.json`: Defines `dev`, `build`, `preview`, and `astro` scripts.

## Dependencies
- `@astrojs/cloudflare`: For deploying Astro SSR to Cloudflare.
- `astro`: The core site builder.
- `appwrite`: SDK for interacting with the Appwrite backend.
