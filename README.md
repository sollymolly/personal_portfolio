# Personal portfolio

A simple, fast portfolio site built with [Astro](https://astro.build).

## Commands

| Command           | What it does                               |
| ----------------- | ------------------------------------------ |
| `npm install`     | Install dependencies                       |
| `npm run dev`     | Start local dev server at `localhost:4321` |
| `npm run build`   | Build the production site into `dist/`     |
| `npm run preview` | Preview the production build locally       |

## Where to edit things

- **Your name, links, tagline** → `src/config.ts` (every page reads from this one file)
- **Projects** → one Markdown file per project in `src/content/projects/`. The frontmatter controls the card (title, summary, tech, featured); the Markdown body is the project's detail page.
- **About page** (bio, internships, leadership) → `src/pages/about.astro`
- **The entire look** (colors, fonts, spacing) → design tokens at the top of `src/styles/global.css`
- **Resume** → drop a PDF at `public/resume.pdf`
