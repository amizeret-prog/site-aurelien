// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Pages qui ne doivent jamais figurer dans le sitemap.
const exclues = ['/composants/', '/contact/merci/', '/404/'];

export default defineConfig({
  // Adresse officielle : sert aux balises canoniques, aux aperçus LinkedIn et au sitemap,
  // y compris quand le site tourne sur l'adresse provisoire .netlify.app.
  site: 'https://aurelienmizeret.com',
  // Barre finale partout (/diagnostic/), comme sur l'ancien WordPress.
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) => {
        const chemin = new URL(page).pathname;
        return !exclues.includes(chemin) && !chemin.includes('/exemple-') && !chemin.startsWith('/og/');
      },
    }),
  ],
});
