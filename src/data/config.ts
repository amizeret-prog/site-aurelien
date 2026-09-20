// Reglages du site. Fichier volontairement sans accents : il peut etre modifie depuis PowerShell sans risque.

// Lien Cal.com de l'echange de 30 min, sous la forme "identifiant/evenement"
// (c'est la fin de l'adresse https://cal.com/identifiant/evenement).
export const calLink = 'aurelien-mizeret/30min';

export const calConfigure = !calLink.startsWith('identifiant/');
