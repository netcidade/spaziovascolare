# Roadmap

## Milestone 1: Version Control & Backend Verification

### Phase 1: Version Control (Git Push)
- **Goal:** Safely connect and push the existing codebase to GitHub.
- **Why:** Secures all work completed so far and allows tracking of changes before conducting any deep modifications to backend integrations.
- **Requirements:**
  - Remote repository connected (`https://github.com/netcidade/spaziovascolare.git`).
  - Master/main branch securely pushed.

### Phase 2: Appwrite Integration Verification
- **Goal:** Ensure all backend interactions via Appwrite are solid, secure, and fully operational.
- **Why:** The application depends heavily on Appwrite for dynamic content. We must confirm no errors exist in the existing setup.
- **Requirements:**
  - Verify environmental variables (`.env`).
  - Verify queries in `src/lib/appwrite.ts`.
  - Validate the admin dashboard (`src/pages/admin/dashboard.astro`).
### Phase 3: Cloudflare Deployment & Hosting
- **Goal:** Deploy the application to Cloudflare and verify production functionality.
- **Why:** To make the site public and ensure that the Appwrite integration works in a serverless environment.
- **Requirements:**
  - Configure Cloudflare Pages/Workers.
  - Set up build environment and secrets on Cloudflare.
  - Verify public access and admin panel on the production URL.
