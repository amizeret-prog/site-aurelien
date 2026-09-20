// robots.txt généré au build. Avant le lancement, il laisse tout lire : les moteurs doivent
// pouvoir voir la balise noindex, sinon une adresse bloquée peut quand même être indexée.
import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const lance = import.meta.env.PUBLIC_INDEXABLE === 'true';
  // Pas de Disallow : les pages à cacher portent une balise noindex, que les moteurs doivent pouvoir lire.
  const lignes = ['User-agent: *', 'Allow: /'];
  if (lance) lignes.push('', `Sitemap: ${new URL('sitemap-index.xml', site)}`);
  return new Response(lignes.join('\n') + '\n', { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
