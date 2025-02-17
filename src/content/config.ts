import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

const Technologies = defineCollection({
    loader: file("src/content/technologies.json"),
    schema: z.object({
        id : z.string(),
        tittle: z.string()
    })
});
const Experience = defineCollection({
    loader: glob({ pattern: '{[^_]*.json,**/[^_]*.json}'
        , base: "./src/content/experience" }),
    schema: z.object({
        lang: z.string(),
        experience: z.array( z.object({
            id : z.number(),
            company: z.string(),
            img: z.string(),
            experience: z.array( z.object({
                id : z.number(),
                title : z.string(),
                duration: z.string(),
                description: z.string(),
                tags: z.array(z.string())
            }))
            })
        )
    })
});
const About = defineCollection({
    loader: glob({ pattern: '{[^_]*.md,**/[^_]*.md}'
        , base: "./src/content/about" }),
    schema: z.object({
      title: z.string(),
      lang: z.string(),
    })
  });

  const Personal = defineCollection({
    loader: glob({ pattern: '{[^_]*.md,**/[^_]*.md}'
        , base: "./src/content/personal" }),
    schema: z.object({
      name: z.string(),
      lang: z.string(),
      career: z.string(),
      knowledge: z.string(),
      technologis: z.string(),
    })
  });

export const collections = {Technologies, Experience, About, Personal}