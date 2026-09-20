// Registre des images d'aperçu (LinkedIn, X, WhatsApp) : une image 1200 × 627 par page.
// Chaque entrée associe l'adresse d'une page au texte affiché sur son image.
import { getCollection } from 'astro:content';
import { estPublie } from './publies';
import { offres } from '../data/offres';

export interface ApercuOg {
  route: string;      // adresse de la page, avec barre finale
  surtitre: string;   // petite ligne en capitales, en or
  titre: string;      // grand texte
  signature?: string; // ligne du bas (par défaut : Aurélien Mizeret)
}

// Pages fixes. Pour modifier le texte d'une image, c'est ici.
const fixes: ApercuOg[] = [
  { route: '/', surtitre: 'Décision, humain et IA en entreprise', titre: "La machine fonctionne. C'est la décision qui manque." },
  { route: '/a-propos/', surtitre: 'À propos', titre: 'Comprendre ce qui fait décider les humains, pour que l’IA les renforce.' },
  { route: '/offres/', surtitre: 'Offres', titre: 'Du diagnostic au programme : un parcours pour chaque étape de votre transition IA.' },
  { route: '/diagnostic/', surtitre: 'Diagnostic en 5 minutes', titre: 'Où en est la décision dans votre organisation ?' },
  { route: '/entretiens/', surtitre: 'Ceux qui décident', titre: 'Des DRH et des dirigeants racontent comment ils conduisent l’IA.' },
  { route: '/analyses/', surtitre: 'Analyses', titre: 'Ce que l’IA transforme dans la décision, la responsabilité et l’engagement.' },
  { route: '/livre/', surtitre: 'Le livre', titre: 'Ce que l’IA fait de nous', signature: 'Aurélien Mizeret, juillet 2026' },
  { route: '/contact/', surtitre: 'Contact', titre: 'Réserver un échange de 30 minutes.' },
];

export async function apercus(): Promise<ApercuOg[]> {
  const entretiens = (await getCollection('entretiens', estPublie)).map((e) => ({
    route: `/entretiens/${e.id}/`,
    surtitre: 'Ceux qui décident',
    titre: `«\u00A0${e.data.title}\u00A0»`,
    signature: [e.data.nom, e.data.fonction, e.data.organisation].filter(Boolean).join(', '),
  }));
  const analyses = (await getCollection('analyses', estPublie)).map((a) => ({
    route: `/analyses/${a.id}/`,
    surtitre: `Analyse, ${a.data.theme}`,
    titre: a.data.title,
  }));
  const pagesOffres = offres.map((o) => ({
    route: `/offres/${o.slug}/`,
    surtitre: o.nom,
    titre: o.titre,
  }));
  return [...fixes, ...entretiens, ...analyses, ...pagesOffres];
}

// Nom du fichier image d'une page : /og/accueil.png, /og/offres/journee-decision-ia.png…
export const fichierOg = (route: string) =>
  route === '/' ? 'accueil' : route.replace(/^\/|\/$/g, '');

// Adresse de l'image à utiliser pour une page ; image de l'accueil si la page n'a pas la sienne.
export async function imageOg(route: string): Promise<string> {
  const liste = await apercus();
  const trouve = liste.find((p) => p.route === route);
  return `/og/${fichierOg(trouve ? trouve.route : '/')}.png`;
}
