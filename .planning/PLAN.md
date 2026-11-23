# PLAN: Portfolio Optimization, Redesign & Hardening
**Repository:** `Jash275/Portfolio-Site`  
**Target:** `C:\Users\jashj\OneDrive\Desktop\Portfolio-Site`  
**Framework:** Next.js 16 (Turbopack) + React 19 + Tailwind CSS

---

## Workstream 1: UI/UX Redesign (`hallmark` + `unslop`)
- [ ] **Task 1.1: Design System & Token Normalization**
  - Modernize `tailwind.config.js` and `styles/globals.css` with clean CSS variables.
  - Purge fragile `html:not(.dark)` CSS rules with `!important` hacks.
  - Configure Hallmark floor rules: `overflow-x: clip`, `:focus-visible` styling, reduced-motion fallbacks.
- [ ] **Task 1.2: Hero Section Redesign**
  - Replace the generic wireframe cubes (`HeroSvg.tsx`) and typewriter carousel (`TypingRole.tsx`) with an authoritative, high-craft editorial hero.
  - Highlight key credentials: DJSCE IT (Honors in DevOps, GPA: 8.99), ISICVA 2026 Research Paper, IT Audit Analytics & Generative AI.
  - Retain profile image with responsive high-density rendering.
- [ ] **Task 1.3: Projects & Case Study Showcase**
  - Elevate project cards on `/projects` with clear domain taxonomy (Audit & Risk, Generative AI, Industrial Analytics, Data Engineering).
  - Add clear impact metrics and direct repository badges.
  - Refine project detail page (`/projects/[project]`) layout, reading typography, and gallery grids.
- [ ] **Task 1.4: Experience, Education & Skills Refinement**
  - Polish Experience and Education timeline components with aligned cards, clean typography, and quiet corporate logo badges.
  - Group and categorize Skills on `/skills` with structured proficiency cards and modern pill tags.
- [ ] **Task 1.5: Navigation, Footer & Responsive Polish**
  - Ensure mobile menu opens smoothly with ARIA compliance and no backdrop scroll lock issues.
  - Refine Header and Footer with unified links, copyright, and seamless theme toggle.

---

## Workstream 2: Performance Optimization
- [ ] **Task 2.1: Image Optimization Pipeline**
  - Enable Next.js native Image Optimization in `next.config.js` (remove `unoptimized: true`).
  - Update `next/image` usage across `app/page.tsx`, `Job.tsx`, `Education.tsx`, and project gallery with appropriate `sizes`, `priority`, and modern formats (AVIF/WebP).
- [ ] **Task 2.2: CSS & Font Optimization**
  - Remove redundant font face weights pointing to duplicate files in `styles/fonts/font.ts`.
  - Isolate Prism styles so `styles/prism.css` is only loaded where code blocks exist.
  - Remove unused or heavy global CSS rules and background noise asset request if obsolete.
- [ ] **Task 2.3: Asset Caching & Bundle Optimization**
  - Configure `next.config.js` with optimal asset cache headers for static assets (`/fonts/`, `/images/`, `/icons/`).
  - Verify static pre-rendering (SSG) across all static routes (`/`, `/projects`, `/skills`, `/resume`, `/projects/[project]`).

---

## Workstream 3: Security Hardening (`gsd-secure-phase`)
- [ ] **Task 3.1: Upgrade Vulnerable Dependencies**
  - Upgrade `next` from 16.4.3 to 16.4.6 and `eslint-config-next` to 16.4.6 to resolve known Next.js advisory.
  - Run `npm audit fix` / resolve transitive `minimatch` and `glob` issues.
- [ ] **Task 3.2: Comprehensive Security Headers**
  - Configure strict headers in `next.config.js` `headers()` and `proxy.ts`:
    - Content-Security-Policy (CSP) tailored for Next.js App Router (strict default-src, script-src, style-src, frame-ancestors).
    - Strict-Transport-Security (HSTS) with 2-year max-age, includeSubDomains, preload.
    - X-Frame-Options: DENY (except SAMEORIGIN on `/resume/jash-jivani-resume.pdf`).
    - X-Content-Type-Options: nosniff.
    - Referrer-Policy: strict-origin-when-cross-origin.
    - Permissions-Policy: strict device capability disablement.
    - Cross-Origin-Opener-Policy: same-origin.
- [ ] **Task 3.3: Link & Static Asset Validation**
  - Enforce `rel="noreferrer noopener"` across all external links.
  - Validate PDF embedding iframe sandbox permissions and fallback mechanism for mobile devices.
  - Verify zero secrets or API tokens committed.

---

## Workstream 4: Verification & Local Launch
- [ ] **Task 4.1: Production Build Verification**
  - Run `npm run lint` and `npm run build` with zero errors or warnings.
- [ ] **Task 4.2: Local Development Server**
  - Launch `npm run dev` and confirm server responds on `http://localhost:3000`.
- [ ] **Task 4.3: Live DOM & Runtime Audit**
  - Inspect console logs, network payloads, desktop and mobile responsive layout.
