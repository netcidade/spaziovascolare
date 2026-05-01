# CONCERNS
Date: 2026-05-01

## Technical Debt & Architecture
- **Admin Dashboard Size:** `src/pages/admin/dashboard.astro` is quite large (~60KB). Complex state management or large inline scripts inside Astro components can become difficult to maintain. Consider refactoring this into smaller, reusable admin components or moving logic into client-side framework islands (e.g., React/Vue) if it gets more interactive.
- **Testing:** Lack of automated tests means breaking changes in `appwrite.ts` or component props could go unnoticed until manual testing.
- **Security:** Ensure that `.env` files are used for Appwrite credentials and that client-side exposed Appwrite keys only have the minimum required permissions (Role-Based Access Control).

## Fragile Areas
- **Data Migration:** Recent conversations indicate there was a migration from a unified "Blog" collection to specialized collections ("Tratamentos", "Cirurgias"). Keeping data schemas synchronized between Appwrite and frontend TypeScript interfaces (`appwrite.ts`) is a potential point of failure.
