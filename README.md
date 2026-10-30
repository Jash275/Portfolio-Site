# Jash Jivani Portfolio

Portfolio of Jash Jivani, built with Next.js 16, React, TypeScript, and Tailwind CSS. The site is available at [jashjivani.dev](https://jashjivani.dev).

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000 (or the port printed by Next.js). To lint and create a production build, run `npm run build`. Start a production build with `npm run start`. The site uses local content and requires no environment variables; `.env.example` is an empty configuration template.

## Project structure

- `app/`: Next.js routes, metadata, robots, and sitemap
- `components/layout/`: navbar, mobile navigation, theme controls, providers, and footer
- `components/sections/`: education and work experience sections
- `components/shared/`: reusable page, project, animation, and social components
- `components/ui/icons/`: local interface icons
- `data/`: typed education, experience, project, skill, and social content
- `styles/`: global and syntax-highlight styles, plus local fonts
- `public/images/`, `public/icons/`, `public/resume/`: served images, icons, and the resume PDF

## Edit content

- Education: `data/education.ts`
- Work experience: `data/experience.ts`
- Projects and project detail copy: `data/projects.ts`
- Skills: `data/skills.ts`
- Social links: `data/social.ts`
- Typing roles and timing: `components/shared/TypingRole.tsx`

Keep the root `LICENSE` and `THIRD_PARTY_ICONS.md` notices with distributions.
