import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

/**
 * Bio copy lives in `src/content/bio/*.md` — use `[text](url)`, blank lines for paragraphs.
 * `intro.md`: frontmatter (title, description, imageSrc, imageAlt) + intro body.
 * `aside.md`: right column (optional frontmatter); use `## Year` for section titles.
 */
const bio = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/bio" }),
  schema: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    imageSrc: z.string().optional(),
    imageAlt: z.string().optional(),
  }),
});

export const collections = { bio };
