# STRUCTURE
Date: 2026-05-01

## Directory Layout
- `src/` - Application source code.
  - `components/` - Reusable Astro components (`Header.astro`, `Hero.astro`, `Footer.astro`, etc.).
  - `layouts/` - Page layout wrappers (`Layout.astro`).
  - `lib/` - Shared utility scripts and API clients (`appwrite.ts`, `staticData.ts`).
  - `pages/` - Astro file-based routing.
    - `index.astro` - Main landing page.
    - `admin/` - Administrative panel pages (`index.astro` for login, `dashboard.astro` for CMS).
    - `blog/`, `cirurgias/`, `tratamentos/` - Dynamic or static routes for specific content types.

## Naming Conventions
- Components and Layouts use PascalCase (`Header.astro`, `Layout.astro`).
- Pages generally use lowercase (`index.astro`, `dashboard.astro`) matching the desired URL path.
- TypeScript utility files use camelCase (`appwrite.ts`, `staticData.ts`).
