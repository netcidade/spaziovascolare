# [SPZ] Spazio Vascolare V2

## Context
**What this is:** The official website for Dra. Mônica Arena - Cirurgiã Vascular Londrina. It is built using Astro with Server-Side Rendering (SSR) deployed to Cloudflare, and heavily relies on Appwrite as a Backend-as-a-Service for content management and administration via a custom dashboard.
**Why it matters:** The code was developed locally without strict version control mapping. We must secure the codebase on GitHub and verify all Appwrite integrations to ensure reliability before moving forward with new features.

## Core Value
Securing the codebase in version control and validating the integrity of the data layer.

## Requirements

### Validated
- ✓ Astro SSR configuration with `@astrojs/cloudflare` adapter.
- ✓ Initial Appwrite connection and custom admin dashboard structure.
- ✓ Static layout and component structure.
- ✓ Phase 1: Git repository connected and pushed to GitHub.
- ✓ Phase 2: Appwrite integration verified (endpoint status and collection health).
- ✓ Phase 3: Cloudflare Workers deployment successful.

### Active
- [ ] Centralize hardcoded Appwrite IDs in `src/pages/admin/dashboard.astro` to use `src/lib/appwrite.ts`.
- [ ] Optimize admin dashboard by modularizing components.


### Out of Scope
- Feature redesigns or UI changes — This phase focuses strictly on integration verification and version control.
- Moving away from Appwrite — The stack is already decided.

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Priority on Verification and Git | As a brownfield project, ensuring the existing code is safely versioned and backend connected is the top priority before adding new features. | — Pending |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `/gsd-transition`):
1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions
5. "What This Is" still accurate? → Update if drifted

**After each milestone** (via `/gsd-complete-milestone`):
1. Full review of all sections
2. Core Value check — still the right priority?
3. Audit Out of Scope — reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-05-01 after initialization*
