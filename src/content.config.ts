import { defineCollection, reference, z } from 'astro:content';
import { glob } from 'astro/loaders';

const games = defineCollection({
  loader: glob({ pattern: '**/index.md', base: './src/content/games' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      tagline: z.string(),
      coverImage: image().optional(),
      screenshots: z.array(image()).default([]),
      youtubeId: z.string().optional(),
      playStoreUrl: z.string().url().optional(),
      featured: z.boolean().default(false),
      order: z.number().default(0),
    }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/index.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      tagline: z.string(),
      status: z.enum(['In Development', 'Launched', 'Concept']),
      coverImage: image().optional(),
      youtubeId: z.string().optional(),
      techNotes: z.string().optional(),
      externalUrl: z.string().url().optional(),
      isTool: z.boolean().default(false),
      date: z.coerce.date(),
      order: z.number().default(0),
    }),
});

const videos = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/videos' }),
  schema: z.object({
    title: z.string(),
    youtubeId: z.string(),
    date: z.coerce.date(),
    relatedGame: reference('games').optional(),
    relatedProject: reference('projects').optional(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { games, projects, videos };
