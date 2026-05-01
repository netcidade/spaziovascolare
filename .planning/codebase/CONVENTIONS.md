# CONVENTIONS
Date: 2026-05-01

## Code Style
- Follows standard Astro component structure: `---` frontmatter for Server-Side TypeScript/JavaScript, followed by HTML templating and `<style>`/`<script>` blocks.
- Uses ES Modules (`import`/`export`).

## Error Handling
- Appwrite requests likely include basic `try/catch` blocks inside server-side logic in `.astro` files or within `src/lib/appwrite.ts`.

## UI Patterns
- Uses component-based composition (Hero, Header, Treatments, etc.) to build complex pages like `src/pages/index.astro`.
