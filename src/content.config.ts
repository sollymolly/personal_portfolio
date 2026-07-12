import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Each Markdown file in src/content/projects/ becomes a project:
// a card on the Projects page (and Home, if `featured`) plus its
// own detail page at /projects/<filename>.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(), // shown on the card and under the detail-page title
    tech: z.array(z.string()),
    date: z.coerce.date(),
    featured: z.boolean().default(false), // featured projects appear on the home page
    order: z.number().default(0), // lower numbers sort first
    github: z.string().url().optional(),
    demo: z.string().url().optional(),
    slides: z.string().url().optional(), // slide deck explaining the project
    background: z.string().optional(), // full-page photo behind the detail page

  }),
});

export const collections = { projects };
