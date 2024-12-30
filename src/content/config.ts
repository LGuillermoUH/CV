import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

const Technologies = defineCollection({
    loader: file("src/content/technologies.json"),
    schema: z.object({
        id : z.string(),
        tittle: z.string()
    })
});

export const collections = {Technologies}