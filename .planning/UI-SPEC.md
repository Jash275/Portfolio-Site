# UI-SPEC: Jash Jivani Portfolio Redesign
**System:** Hallmark v2.0 + Unslop Redline Standards  
**Target Audience:** Engineering managers, audit analytics leads, AI research recruiters, technical collaborators  
**Persona:** Jash Jivani — Information Technology (Honors in DevOps) at DJSCE Mumbai; IT Audit Analytics, RAG / GenAI, Full-Stack

---

## 1. Direction & Character

- **Product:** Professional portfolio presenting real audit analytics systems, data engineering pipelines, GenAI research (ISICVA 2026), and technical experience.
- **Character:** `analytical, exact, editorial-technical`. Clean, authoritative, credible. No gimmicks, no neon glows.
- **World:** Financial control ledgers, data engineering pipelines, high-trust technical instruments. Tinted graphite/ink neutrals with a single deep emerald/teal accent (`#059669` / `#10b981`).
- **Moments:**
  1. **Executive Profile & Verification Matrix:** Hero leading with real achievements (acceptance at ISICVA 2026, 44.4% exception detection in 2,398-account audit, 541k ETL pipeline) rather than rotating clichés.
  2. **Refined Case Study Grid:** High-legibility project cards with category taxonomy, key metrics, and direct link to GitHub/demo.
- **Signature:** Technical verification badge with `tabular-nums` data chips and clean hairline borders.

---

## 2. Typography & Color Tokens

### Typography Pairing
- **Display / Headings:** `Incognito` / `Inter` (sans-serif, bold/semibold, tight tracking, sentence case). No italic single words, no all-caps tracking.
- **Body:** `Inter` (16px base, 1.6 line height, relaxed readability).
- **Meta / Data / Code:** `GitLab Mono` (for numbers, metrics, tags, code snippets, `tabular-nums`).

### Color Tokens
- **Dark Mode:**
  - Background: `#121214` (deep neutral zinc)
  - Surface: `#18181b` (zinc-900)
  - Surface Highlight: `#27272a` (zinc-800)
  - Border: `rgba(255, 255, 255, 0.08)` (hairline)
  - Text Primary: `#fafafa`
  - Text Secondary: `#a1a1aa`
  - Accent: `#10b981` (emerald-500)
- **Light Mode:**
  - Background: `#ffffff`
  - Surface: `#f8fafc`
  - Surface Highlight: `#f1f5f9`
  - Border: `rgba(0, 0, 0, 0.08)`
  - Text Primary: `#0f172a`
  - Text Secondary: `#475569`
  - Accent: `#047857` (emerald-700, WCAG AAA 7:1+ contrast)

---

## 3. Unslopping & Hallmark Redlines

| Element | Current Slop / Antipattern | Hallmark / Unslop Replacement |
| :--- | :--- | :--- |
| **Hero Graphic** | Generic animated wireframe cubes (`HeroSvg.tsx`) with 100s infinite animation | Cohesive profile layout with Systems & Research Focus card, real credentials, and clean visual geometry |
| **Hero Title** | Blinking typewriter effect (`TypingRole.tsx`) rotating 3 titles | Static, authoritative subhead: "IT Audit Analytics · Generative AI & RAG · DevOps & Full-Stack" with zero layout jitter |
| **Background** | 200px repeating raw PNG noise overlay | Clean modern CSS surface ramp with subtle radial background ambient or pure quiet neutral surfaces |
| **Project Cards** | Generic box with loose spacing and unstyled hover states | Structured cards featuring domain category badge, summary, tech pills, and auditable metrics |
| **Light Theme** | 60+ lines of `!important` CSS overrides in `globals.css` | Native Tailwind CSS variables / class mapping that scales cleanly |
| **Motion** | Infinite stroke dash animation | Purposeful entrance fade/slide respect `prefers-reduced-motion` |
| **Code Highlighting**| Entire 622-line Prism stylesheet loaded globally on all pages | Scoped loading for code viewer pages only |
