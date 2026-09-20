// Tant que le site n'est pas lancé (PUBLIC_INDEXABLE absent), les brouillons restent visibles
// pour relecture. Au lancement, ils disparaissent des pages et des listes.
export const afficherBrouillons = import.meta.env.PUBLIC_INDEXABLE !== 'true';
export const estPublie = (entry: { data: { draft?: boolean } }) => afficherBrouillons || !entry.data.draft;

export const parDateDesc = <T extends { data: { date?: Date } }>(a: T, b: T) =>
  (b.data.date?.getTime() ?? Number.MAX_SAFE_INTEGER) - (a.data.date?.getTime() ?? Number.MAX_SAFE_INTEGER);

export const formatDate = (d?: Date) =>
  d ? d.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }) : '';

// Les fichiers « exemple-… » servent à montrer un gabarit : jamais dans les listes.
export const estListable = (entry: { id: string; data: { draft?: boolean } }) =>
  estPublie(entry) && !entry.id.startsWith('exemple');
