// Identité publique : une seule source pour les données structurées, le pied de page et l'À propos.
// Pour changer un lien, c'est ici et nulle part ailleurs.

export const SITE = 'https://aurelienmizeret.com';

export const liens = {
  linkedin: 'https://www.linkedin.com/in/aur%C3%A9lien-mizeret/',
  youtube: 'https://www.youtube.com/@Le_dirigeant_augment%C3%A9',
  siteLivre: 'https://cequeliafaitdenous.com/',
  amazonBroche: 'https://www.amazon.fr/dp/B0HBZ4JY2M',
  amazonKindle: 'https://www.amazon.fr/dp/B0HBQHBDFP',
};

export const livre = {
  titre: "Ce que l'IA fait de nous",
  isbn13: '9798189612664',
  isbnAffiche: '979-8189612664',
  pages: 218,
  parution: '2026-07-28',
};

// Identifiants uniques des entités : chaque page y fait référence au lieu de les redéfinir.
export const ids = {
  site: `${SITE}/#site`,
  personne: `${SITE}/a-propos/#aurelien-mizeret`,
  cabinet: `${SITE}/#cabinet`,
  livre: `${SITE}/livre/#livre`,
};

export const personne = {
  '@type': 'Person',
  '@id': ids.personne,
  name: 'Aurélien Mizeret',
  url: `${SITE}/a-propos/`,
  email: 'mailto:hello@aurelienmizeret.com',
  jobTitle: 'Conseil en décision, humain et IA en entreprise',
  description: "Consultant et formateur. Accompagne les DRH et les directions générales pour que l'IA renforce le jugement, l'engagement et la cohésion de leurs équipes.",
  knowsAbout: [
    'Décision en entreprise',
    'Intelligence artificielle en entreprise',
    'Gouvernance humaine de l’IA',
    'Conduite du changement',
    'Psychologie des organisations',
    'Ressources humaines',
  ],
  sameAs: [liens.linkedin, liens.youtube, liens.siteLivre],
};

export const cabinet = {
  '@type': 'ProfessionalService',
  '@id': ids.cabinet,
  name: 'Aurélien Mizeret, conseil en décision, humain et IA',
  url: `${SITE}/`,
  email: 'hello@aurelienmizeret.com',
  description: "Diagnostic, Journée Décision IA, cadrage, audit de transition et programmes de gouvernance humaine pour les DRH et les directions générales.",
  founder: { '@id': ids.personne },
  areaServed: [
    { '@type': 'Country', name: 'France' },
    { '@type': 'Country', name: 'Belgique' },
    { '@type': 'Country', name: 'Luxembourg' },
  ],
  knowsLanguage: 'fr',
};

export const siteWeb = {
  '@type': 'WebSite',
  '@id': ids.site,
  url: `${SITE}/`,
  name: 'Aurélien Mizeret',
  inLanguage: 'fr-FR',
  publisher: { '@id': ids.personne },
};

export const entiteLivre = {
  '@type': 'Book',
  '@id': ids.livre,
  name: livre.titre,
  url: `${SITE}/livre/`,
  sameAs: [liens.siteLivre, liens.amazonBroche],
  author: { '@id': ids.personne },
  publisher: { '@id': ids.personne },
  inLanguage: 'fr',
  datePublished: livre.parution,
  workExample: [
    {
      '@type': 'Book',
      bookFormat: 'https://schema.org/Paperback',
      isbn: livre.isbn13,
      numberOfPages: livre.pages,
      url: liens.amazonBroche,
      offers: { '@type': 'Offer', price: '18.90', priceCurrency: 'EUR', url: liens.amazonBroche },
    },
    {
      '@type': 'Book',
      bookFormat: 'https://schema.org/EBook',
      url: liens.amazonKindle,
      offers: { '@type': 'Offer', price: '7.99', priceCurrency: 'EUR', url: liens.amazonKindle },
    },
  ],
};
