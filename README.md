# vicente-espinha.github.io

My personal site: https://vicente-espinha.github.io

Built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com), deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`.

## Editing content

Everything personal lives in `src/data/`:

| File | What it holds |
| --- | --- |
| `profile.ts` | Name, title, tagline, about paragraphs, interests, social links, `BLOG_ENABLED` |
| `experience.ts` | Jobs (grouped by company, with roles) and education |
| `projects.ts` | Featured projects |

The accent color is `--color-accent` in `src/styles/global.css`.

## Blog

Posts go in `src/content/blog/*.md`. The blog shows "Coming soon" until `BLOG_ENABLED` is `true` in `src/data/profile.ts`. Posts with `draft: true` are never published.

## Commands

| Command | Action |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Dev server at http://localhost:4321 |
| `npm run build` | Type-check and build to `./dist/` |
| `npm run preview` | Preview the production build |
