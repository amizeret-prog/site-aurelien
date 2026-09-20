// Collections de contenu : entretiens « Ceux qui décident » et analyses (articles piliers).
// Un fichier Markdown par article. « draft: true » = visible en préproduction, absent au lancement.
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const entretiens = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/entretiens' }),
  schema: ({ image }) => z.object({
    title: z.string(),                 // H1 : la citation
    seoTitle: z.string(),              // balise title : la question recherchée
    description: z.string(),
    nom: z.string(),
    fonction: z.string(),
    organisation: z.string().optional(),
    secteur: z.string().optional(),
    pays: z.string().optional(),
    effectif: z.string().optional(),
    linkedin: z.string().url().optional(),
    portrait: image().optional(),
    date: z.coerce.date().optional(),
    lecture: z.number().optional(),    // minutes
    extrait: z.string().optional(),    // phrase clé des cartes
    barometre: z.object({
      maturite: z.string(), usage: z.string(), frein: z.string(), cadre: z.string(),
      portage: z.string(), budget: z.string(), projetArrete: z.string(), emploi: z.string(),
    }).optional(),
    enseignements: z.array(z.string()).optional(),
    offre: z.string().optional(),      // slug de l'offre la plus proche du sujet
    pont: z.string().optional(),       // phrase qui relie l'entretien à l'offre
    draft: z.boolean().default(false),
  }),
});

const analyses = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/analyses' }),
  schema: z.object({
    title: z.string(),                 // la question recherchée
    seoTitle: z.string().optional(),
    description: z.string(),
    chapo: z.string(),                 // réponse courte, reprise par Google et les assistants IA
    date: z.coerce.date(),
    miseAJour: z.coerce.date().optional(),
    lecture: z.number().optional(),
    theme: z.string().default('Décision'),
    essentiel: z.array(z.string()).length(3),
    faq: z.array(z.object({ question: z.string(), answer: z.string() })).default([]),
    sources: z.array(z.object({ label: z.string(), url: z.string().url().optional() })).default([]),
    offre: z.string().optional(),
    pont: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { entretiens, analyses };
