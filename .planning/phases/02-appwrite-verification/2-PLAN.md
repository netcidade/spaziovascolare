---
wave: 1
depends_on: ["01-version-control"]
files_modified: ["src/lib/appwrite.ts", "src/pages/admin/dashboard.astro"]
autonomous: true
---

# Phase 2: Appwrite Integration Verification

## Goal
Validate that the Appwrite backend integration is fully operational, secure, and correctly handling data for both public pages and the admin dashboard.

## Must Haves
- Successful connection to Appwrite endpoint.
- Verification of all major collection IDs.
- Admin dashboard CRUD operations verified (at least Read).

## Tasks

<task>
<id>1</id>
<type>execute</type>
<title>Verify Appwrite Connection & Reachability</title>
<description>Check if the Appwrite endpoint is reachable and returns the expected project information.</description>
<read_first>
- src/lib/appwrite.ts
</read_first>
<action>
Use a curl command or a small script to verify that `https://appwrite.netcidade.com/v1` is reachable and the project `spazio-vascolare` exists.
</action>
<acceptance_criteria>
- Connection to Appwrite endpoint succeeds with a 200 or 401 (Unauthorized) but not 404 or 500.
</acceptance_criteria>
</task>

<task>
<id>2</id>
<type>execute</type>
<title>Validate Collection Queries</title>
<description>Test the `getTreatments` and `getSiteSettings` functions to ensure they return data from Appwrite.</description>
<read_first>
- src/lib/appwrite.ts
- src/pages/index.astro
</read_first>
<action>
Create a temporary test script or use the existing `npm run dev` server to verify that data is being fetched and displayed on the local development site.
</action>
<acceptance_criteria>
- Data from Appwrite collections is successfully retrieved and rendered in the browser.
</acceptance_criteria>
</task>

<task>
<id>3</id>
<type>execute</type>
<title>Review Admin Dashboard Logic</title>
<description>Analyze `src/pages/admin/dashboard.astro` to ensure it uses the Appwrite helpers correctly and handles errors.</description>
<read_first>
- src/pages/admin/dashboard.astro
</read_first>
<action>
Examine the dashboard code for correct usage of `upsertPost`, `deletePost`, and other CRUD helpers. Check for any hardcoded IDs that might differ from `appwrite.ts`.
</action>
<acceptance_criteria>
- Admin dashboard logic is verified to be consistent with the `src/lib/appwrite.ts` configuration.
</acceptance_criteria>
</task>

## Verification
- Development server shows dynamic content from Appwrite.
- No console errors related to Appwrite connection in the terminal or browser.
