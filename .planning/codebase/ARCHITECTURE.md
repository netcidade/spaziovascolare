# ARCHITECTURE
Date: 2026-05-01

## High-Level Architecture
- **Frontend/SSR:** Astro framework using server-side rendering (`output: 'server'`) deployed to Cloudflare.
- **Backend:** Appwrite BaaS providing Database and Auth services.
- **Admin Panel:** A custom-built administrative dashboard (`src/pages/admin/dashboard.astro`) within the same Astro app, used for managing content directly on the Appwrite backend.

## Data Flow
1. **Public Pages (`src/pages/index.astro`, `src/pages/tratamentos.astro`, etc.):** Astro components fetch data from Appwrite via `src/lib/appwrite.ts` during server-side rendering and render static HTML sent to the client.
2. **Admin Pages (`src/pages/admin/`):** 
   - `index.astro`: Login/Authentication interface.
   - `dashboard.astro`: Complex dashboard interface that handles CRUD operations (Create, Read, Update, Delete) against the Appwrite database using client-side or server-side scripts.

## Abstractions
- `src/lib/appwrite.ts`: Centralizes the Appwrite SDK initialization, abstracting the API keys, endpoint URLs, and project IDs from the UI components.
- `src/components/`: Reusable UI pieces (Header, Footer, Hero, Treatments) to keep pages clean and consistent.
