// Les cinq offres, dans l'ordre du parcours. Textes validés en phase 2 (19/09/2026).
// Une seule source : cartes de l'accueil, page /offres/ et pages détaillées.

export interface Bloc { titre: string; texte?: string; puces?: string[] }
export interface Offre {
  slug: string;
  nom: string;
  seoTitle: string;
  description: string;
  surTitre: string;
  titre: string;
  chapo: string;
  faits: string[];
  carte: { prix: string; duree?: string; resume: string; cta: string; badge?: string };
  pourQui: { titre: string; items: { fort?: string; texte: string }[] };
  vecu?: { titre: string; citations: string[]; chute: string };
  apports?: { titre: string; blocs: Bloc[] };
  fond?: { titre: string; intro?: string; blocs: Bloc[]; outro?: string };
  deroule: { titre: string; etapes: Bloc[]; format?: string };
  livrables?: { titre: string; groupes: { titre?: string; items: string[] }[] };
  cas?: { titre: string; intro?: string; chiffres?: { valeur: string; label: string }[]; texte: string };
  role?: { titre: string; texte: string };
  tarif: { montant: string; detail: string };
  faq: { question: string; answer: string }[];
}

export const offres: Offre[] = [
  {
    slug: 'journee-decision-ia',
    nom: 'Journée Décision IA',
    seoTitle: 'Journée Décision IA : aligner votre direction avant de choisir | Aurélien Mizeret',
    description: "En une journée, vos directeurs posent des critères communs et des règles claires pour décider de vos projets IA. Livrable complet sous 72 heures.",
    surTitre: "Offre d'entrée, direction générale et Codir",
    titre: 'Avant de choisir une IA, décidez comment vous décidez.',
    chapo: "Vos directeurs parlent tous d'IA. Chacun y met une attente, une crainte et un critère différents. En une journée, je fais émerger ce qui les sépare, puis je construis avec eux une grille commune et des règles de décision que chacun accepte de porter.",
    faits: ['1 journée sur site', '2 500 € HT', 'Livrable sous 72 h'],
    carte: { prix: '2 500 € HT', duree: '1 jour d\u2019intervention', resume: "Alignez votre direction sur une vision, des critères et des règles de décision communes, en une journée.", cta: 'Découvrir la journée', badge: 'Pour commencer' },
    pourQui: {
      titre: 'Cette journée est faite pour vous si',
      items: [
        { fort: 'Un projet IA se prépare.', texte: "Votre direction générale ou votre Codir s'apprête à lancer un projet, à choisir un outil ou à poser une doctrine d'usage." },
        { fort: "L'alignement reste à construire.", texte: 'En tant que DRH, vous sentez que le projet avance sans que la direction soit réellement alignée.' },
        { fort: 'Une décision attend.', texte: "Un choix lié à l'IA est en suspens depuis des mois, sans que personne ne sache vraiment pourquoi." },
      ],
    },
    vecu: {
      titre: 'Ce que vous vivez',
      citations: [
        "Chaque directeur a sa propre idée de ce que l'IA doit nous apporter.",
        'On a vu trois démonstrations, et on n\u2019arrive toujours pas à trancher.',
        'Tout le monde est d\u2019accord en réunion, et rien n\u2019avance après.',
        'Personne ne sait vraiment qui aura le dernier mot.',
      ],
      chute: "La machine fonctionne. C'est la décision qui manque.",
    },
    deroule: {
      titre: 'Déroulé',
      etapes: [
        { titre: 'Avant la journée', puces: ['Un brief écrit de la direction générale : orientations, contraintes et question précise à trancher.', 'Un court questionnaire à chaque directeur, avec une pondération individuelle des critères.'] },
        { titre: 'Le matin : écouter', texte: "Des entretiens individuels et confidentiels de 30 à 40 minutes avec chaque directeur concerné : direction générale, RH, systèmes d'information, finance, commercial, données ou juridique selon votre contexte. Au-delà de leurs besoins, j'observe ce qui les pousse à décider ou à différer." },
        { titre: "Début d'après-midi : analyser", texte: 'Une heure de travail seul pour dégager les convergences, les écarts et les dynamiques de décision à l\u2019œuvre.' },
        { titre: "L'après-midi : aligner", texte: 'Une séance collective, en présence de la direction générale. Je restitue les tendances, jamais les propos d\u2019une personne. Nous confrontons les pondérations, construisons la grille commune, posons les règles de décision et consignons les désaccords.' },
        { titre: 'En clôture', texte: 'Les décisions sont actées et les prochaines étapes fixées.' },
      ],
    },
    livrables: {
      titre: 'Ce que vous obtenez',
      groupes: [
        { titre: 'En fin de journée', items: ['Une grille de critères pondérés, discutée et acceptée par la direction.', 'Des règles de décision explicites : qui décide, qui est consulté, qui peut s\u2019opposer, et comment un désaccord se tranche.', 'Les désaccords nommés et consignés, plutôt que tus.'] },
        { titre: 'Sous 72 heures', items: ['Un document de synthèse : vision partagée, grille pondérée, règles de décision, points de désaccord, options à explorer.', 'Un plan d\u2019action daté, avec les prochaines décisions à prendre et leurs responsables.'] },
        { titre: 'À 30 jours', items: ['Un point de suivi d\u2019une heure pour vérifier que la grille sert réellement vos décisions.'] },
      ],
    },
    cas: {
      titre: "D'où vient cette méthode",
      texte: "Elle est issue d'une mission de choix de plateforme pour un organisme de formation. En faisant pondérer les critères par chaque décideur avant les démonstrations, puis en les confrontant, le classement final des finalistes s'est inversé après les soutenances. Cette journée en reprend le cœur : faire apparaître les vrais critères avant que les préférences ne s'installent.",
    },
    role: {
      titre: 'Le périmètre de la journée',
      texte: "La journée aligne votre direction sur la vision et sur la façon de décider. Le choix d'un fournisseur s'appuie ensuite sur cette grille, dans le cadre du Cadrage de Décision IA. Chaque minute sert une décision réelle.",
    },
    tarif: { montant: '2 500 € HT', detail: 'Forfait tout compris : préparation, journée sur place, livrable sous 72 heures et point de suivi à 30 jours. Frais de déplacement en sus hors Paris, Nord, Bruxelles et Luxembourg.' },
    faq: [
      { question: 'Combien de directeurs peuvent participer ?', answer: "Jusqu'à six en entretien individuel sur une journée. Au-delà, nous prévoyons une demi-journée d'entretiens supplémentaire." },
      { question: 'La direction générale doit-elle être présente ?', answer: "Oui, au minimum pour la séance de l'après-midi. Sa présence donne à la grille validée toute sa portée." },
      { question: 'Les entretiens sont-ils confidentiels ?', answer: 'Oui. La restitution porte sur des tendances et des dynamiques, jamais sur des propos attribués.' },
      { question: 'Faut-il déjà avoir un projet IA en cours ?', answer: "Il suffit d'une question à trancher : choisir un outil, lancer un premier cas d'usage, ou poser les règles d'usage de l'organisation." },
      { question: 'Que se passe-t-il après la journée ?', answer: "Si la décision porte sur un outil, le Cadrage de Décision IA prend le relais. Si les entretiens révèlent un enjeu plus large, l'Audit de Transition IA permet de le traiter. Vous choisissez la suite librement." },
    ],
  },
  {
    slug: 'cadrage-decision-ia',
    nom: 'Cadrage de Décision IA',
    seoTitle: 'Cadrage de Décision IA : choisir votre solution IA sur vos propres critères | Aurélien Mizeret',
    description: 'Critères pondérés posés en amont, mise en concurrence structurée, soutenances pilotées, décision documentée. Trois jours pour choisir votre solution IA avec clarté et la défendre avec assurance.',
    surTitre: "Offre phare, choix d'une solution IA",
    titre: 'Choisissez votre IA sur vos critères, et décidez avec assurance.',
    chapo: 'Le Cadrage de Décision IA installe vos critères au centre du choix, du premier contact avec le marché jusqu\u2019à la signature. Vos décideurs s\u2019accordent sur ce qui compte, les fournisseurs répondent à la même question, les finalistes sont évalués sur la même grille. Vous obtenez une décision claire, partagée et documentée, que votre Comex, vos équipes et vos financeurs comprennent immédiatement.',
    faits: ['3 jours', '3 600 € HT', 'Livrable : note de décision'],
    carte: { prix: '3 600 € HT', duree: '3 jours d\u2019intervention', resume: 'Choisissez votre solution IA sur vos propres critères, avec une décision documentée et défendable.', cta: 'Découvrir le cadrage' },
    pourQui: {
      titre: 'Cette offre est faite pour vous si',
      items: [
        { fort: 'Vous préparez le choix d\u2019une solution IA', texte: 'ou d\u2019une plateforme qui en intègre : outil métier, SIRH, plateforme de formation, assistant interne, outil d\u2019analyse.' },
        { fort: 'Plusieurs directions sont concernées', texte: 'et vous voulez un choix porté collectivement, par la direction générale, les RH, les systèmes d\u2019information et les métiers.' },
        { fort: 'Vous avez déjà rencontré des fournisseurs', texte: 'et souhaitez comparer leurs propositions sur une base commune et objective.' },
        { fort: 'Vous voulez une décision traçable,', texte: 'dont les motifs restent lisibles dans un an, lors du bilan comme lors du prochain renouvellement.' },
      ],
    },
    apports: {
      titre: 'Ce que le cadrage change',
      blocs: [
        { titre: 'Vos critères guident le marché.', texte: 'Les fournisseurs répondent à votre question, formulée dans vos termes. Leurs propositions deviennent comparables point par point.' },
        { titre: 'Vos décideurs parlent d\u2019une seule voix.', texte: 'Chaque décideur pondère d\u2019abord les critères seul, puis les écarts sont confrontés et arbitrés en commun. La grille finale reflète une vision partagée, et chacun sait pourquoi elle est construite ainsi.' },
        { titre: 'Les soutenances révèlent la réalité d\u2019usage.', texte: 'Chaque finaliste traite le même scénario, tiré de votre quotidien. Vous évaluez ce que l\u2019outil apporte à vos équipes dans leurs situations réelles.' },
        { titre: 'La décision reste humaine et assumée.', texte: 'La grille éclaire le choix ; la direction le prend et en répond. Vous gardez la main sur ce qui compte le plus : le jugement.' },
      ],
    },
    fond: {
      titre: 'Une grille construite sur six familles de critères',
      blocs: [
        { titre: 'La valeur métier', texte: 'Les usages couverts, le gain attendu, l\u2019adéquation à vos processus.' },
        { titre: 'L\u2019adoption', texte: 'La simplicité d\u2019usage, l\u2019effort d\u2019apprentissage, l\u2019accueil probable par les équipes et les managers.' },
        { titre: 'L\u2019impact humain', texte: 'Ce que l\u2019outil renforce dans le travail, les compétences à préserver, la place laissée au jugement.' },
        { titre: 'Les données et la sécurité', texte: 'L\u2019hébergement, la confidentialité, la maîtrise des informations sensibles.' },
        { titre: 'Le coût complet', texte: 'Licences, intégration, accompagnement et évolution sur trois ans.' },
        { titre: 'La solidité du partenaire', texte: 'La feuille de route, la réversibilité, la qualité de l\u2019accompagnement.' },
      ],
      outro: 'Chaque famille est déclinée et pondérée selon votre contexte. Une grille type compte une dizaine de critères.',
    },
    deroule: {
      titre: 'Déroulé en quatre temps',
      etapes: [
        { titre: 'Aligner les décideurs', texte: 'Entretiens avec les décideurs, pondération individuelle, confrontation des écarts et validation d\u2019une grille commune. Si votre direction a suivi la Journée Décision IA, ce temps est déjà acquis et le cadrage démarre directement sur le marché.' },
        { titre: 'Consulter le marché', texte: 'Identification des fournisseurs pertinents, présélection argumentée, puis consultation sur une question unique construite à partir de vos critères. Les réponses sont analysées sur une grille de lecture commune.' },
        { titre: 'Piloter les soutenances', texte: 'Conception d\u2019un scénario d\u2019usage tiré de votre réalité, briefing des finalistes, animation des séances et notation en direct par vos décideurs sur la grille validée.' },
        { titre: 'Documenter la décision', texte: 'Rédaction d\u2019une note de décision : scénarios comparés, écarts de prix sur la durée, points de vigilance, conditions de réussite du déploiement et motifs du choix. Ce document sert d\u2019appui pour le Comex, les financeurs et les représentants du personnel.' },
      ],
      format: 'Trois jours d\u2019intervention, répartis au rythme de votre consultation.',
    },
    livrables: {
      titre: 'Ce que vous recevez',
      groupes: [{ items: ['La grille de critères pondérés, validée par la direction.', 'La cartographie des fournisseurs identifiés et la justification de la présélection.', 'La question de consultation et la grille de lecture des réponses.', 'Le scénario de soutenance et les grilles de notation.', 'La note de décision, prête à être présentée.'] }],
    },
    cas: {
      titre: 'Un cas réel',
      intro: 'Pour le choix d\u2019une plateforme dans un organisme de formation multisite :',
      chiffres: [
        { valeur: '14 → 8 → 2', label: 'fournisseurs identifiés, consultés, finalistes' },
        { valeur: '10', label: 'critères pondérés, validés avant la première démonstration' },
        { valeur: '29 %', label: 'd\u2019écart de prix mis en évidence entre les finalistes' },
        { valeur: '+6 / −9', label: 'points : le classement s\u2019est inversé après les soutenances' },
      ],
      texte: 'La direction a choisi la solution la mieux adaptée à ses usages réels, sur des critères qu\u2019elle avait elle-même posés, et dispose d\u2019une décision documentée pour chaque étape.',
    },
    role: { titre: 'Mon rôle', texte: 'Un regard indépendant, au service de votre seule décision : je travaille pour vous, sans lien commercial avec les éditeurs. L\u2019intégration technique est ensuite conduite par le fournisseur retenu ou par votre intégrateur, sur une base claire et partagée.' },
    tarif: { montant: '3 600 € HT', detail: 'Pour trois jours d\u2019intervention.' },
    faq: [
      { question: 'Faut-il avoir suivi la Journée Décision IA avant ?', answer: 'Elle accélère le premier temps du cadrage. Le cadrage peut aussi démarrer directement : l\u2019alignement des décideurs est alors intégré aux trois jours.' },
      { question: 'Qui rédige le cahier des charges ?', answer: 'Je construis la question posée aux fournisseurs et la grille de lecture de leurs réponses. Votre direction des systèmes d\u2019information apporte les exigences techniques détaillées, qui s\u2019intègrent naturellement à la grille.' },
      { question: 'Combien de temps dure l\u2019ensemble ?', answer: 'Trois jours d\u2019intervention de ma part. Le calendrier global suit le rythme de réponse des fournisseurs et la disponibilité de vos décideurs pour les soutenances.' },
      { question: 'La note de décision désigne-t-elle un fournisseur ?', answer: 'Elle classe les options selon vos critères et met en lumière les conditions de réussite de chacune. La direction décide en pleine connaissance de cause, ce qui rend son choix solide et défendable.' },
      { question: 'Que se passe-t-il après le choix ?', answer: 'Pour réussir l\u2019adoption dans la durée, le Programme de gouvernance humaine accompagne le déploiement auprès des équipes et des managers.' },
    ],
  },
  {
    slug: 'audit-transition-ia',
    nom: 'Audit de Transition IA',
    seoTitle: 'Audit de Transition IA : lire l\u2019impact humain de l\u2019IA sur votre organisation | Aurélien Mizeret',
    description: 'Décision, responsabilité, engagement, compétences, gouvernance : une lecture complète de ce que l\u2019IA transforme dans votre organisation, et une feuille de route priorisée pour en faire un levier durable.',
    surTitre: 'Offre cœur, direction générale, Comex et DRH',
    titre: 'Voyez clairement ce que l\u2019IA transforme chez vous, et agissez là où tout se joue.',
    chapo: 'L\u2019IA change la façon dont vos équipes décident, travaillent ensemble, apprennent et s\u2019engagent, bien au-delà des outils eux-mêmes. L\u2019Audit de Transition IA vous donne une lecture complète de ces transformations, du Comex jusqu\u2019au terrain. Vous repartez avec une cartographie précise de vos forces et de vos leviers, et une feuille de route priorisée pour conduire votre transition avec lucidité.',
    faits: ['4 à 6 semaines', '8 000 à 12 000 € HT', 'Livrable : feuille de route à 12 mois'],
    carte: { prix: 'de 8 000 à 12 000 € HT', resume: 'Voyez clairement ce que l\u2019IA transforme dans votre organisation, et où agir en priorité.', cta: 'Découvrir l\u2019audit' },
    pourQui: {
      titre: 'Cette offre est faite pour vous si',
      items: [
        { fort: 'L\u2019IA est déjà présente dans votre organisation,', texte: 'par des outils déployés ou par des usages spontanés, et vous voulez en mesurer les effets réels.' },
        { fort: 'Vous préparez une étape structurante :', texte: 'un déploiement à grande échelle, une doctrine d\u2019usage, une évolution des métiers ou de l\u2019organisation.' },
        { fort: 'Vous voulez une vision d\u2019ensemble', texte: 'partagée par la direction générale, les RH, les systèmes d\u2019information et les managers.' },
        { fort: 'Vous souhaitez une base solide', texte: 'pour décider de vos priorités et dialoguer avec vos équipes et leurs représentants.' },
      ],
    },
    apports: {
      titre: 'Ce que l\u2019audit vous apporte',
      blocs: [
        { titre: 'Une vision claire de la place réelle de l\u2019IA.', texte: 'Vous savez où elle intervient dans les décisions, dans quels métiers, avec quels usages, et ce qu\u2019elle y apporte concrètement.' },
        { titre: 'Une lecture fine de l\u2019humain.', texte: 'Vous comprenez comment vos équipes vivent la transition : leurs attentes, leurs inquiétudes, leur niveau d\u2019adhésion. Vous disposez d\u2019éléments tangibles là où les tableaux de bord restent silencieux.' },
        { titre: 'Des responsabilités explicites.', texte: 'Chaque décision appuyée par l\u2019IA a un responsable identifié, et chacun sait où s\u2019arrête l\u2019outil et où commence le jugement humain.' },
        { titre: 'Une feuille de route actionnable.', texte: 'Vos priorités sont hiérarchisées, datées et reliées à des responsables, pour avancer vite sur ce qui compte le plus.' },
      ],
    },
    fond: {
      titre: 'Cinq axes de lecture',
      blocs: [
        { titre: 'La décision', texte: 'Où l\u2019IA intervient-elle dans vos décisions, et que devient le jugement de vos équipes ? L\u2019audit repère ce qui est délégué, ce qui est assumé et les décisions en attente, pour renforcer le discernement là où il crée le plus de valeur.' },
        { titre: 'La responsabilité', texte: 'Qui répond d\u2019une décision prise avec l\u2019aide de l\u2019IA ? L\u2019audit clarifie les chaînes de validation et les règles d\u2019arbitrage, pour que chacun décide avec assurance.' },
        { titre: 'L\u2019engagement et les émotions', texte: 'L\u2019arrivée de l\u2019IA touche au sentiment d\u2019utilité, à l\u2019identité professionnelle et à la sécurité de chacun. L\u2019audit rend visibles ces ressentis et identifie les leviers d\u2019adhésion propres à votre culture.' },
        { titre: 'Les compétences et la transmission', texte: 'Quels savoir-faire fondent votre valeur, et comment se transmettent-ils quand l\u2019IA prend en charge une partie des tâches ? L\u2019audit cartographie les compétences à préserver et les parcours d\u2019apprentissage à consolider, en particulier pour les plus jeunes.' },
        { titre: 'La gouvernance', texte: 'Cadre d\u2019usage, instances de pilotage, dialogue social, obligations réglementaires : l\u2019audit évalue la solidité de votre cadre et sa connaissance réelle par les équipes, pour qu\u2019il guide effectivement les pratiques.' },
      ],
    },
    deroule: {
      titre: 'Méthode',
      etapes: [
        { titre: 'Écouter à tous les niveaux', texte: 'Entretiens individuels avec la direction générale et les directeurs concernés, entretiens de groupe avec des managers et des collaborateurs de différents métiers.' },
        { titre: 'Mesurer à grande échelle', texte: 'Un questionnaire organisationnel diffusé largement, centré sur la décision, l\u2019usage de l\u2019IA, l\u2019engagement et les compétences. Il donne une photographie chiffrée de votre organisation.' },
        { titre: 'Analyser l\u2019existant', texte: 'Lecture de vos documents : cadre d\u2019usage, projets en cours, politique de formation, comptes rendus d\u2019instances.' },
        { titre: 'Restituer et prioriser', texte: 'Restitution au Comex, puis construction de la feuille de route avec la direction.' },
      ],
    },
    livrables: {
      titre: 'Ce que vous recevez',
      groupes: [{ items: ['Le rapport d\u2019audit : lecture détaillée des cinq axes, forces, fragilités et leviers.', 'La carte des décisions : où l\u2019IA intervient, qui décide, qui répond.', 'La photographie chiffrée issue du questionnaire organisationnel, par métier et par niveau hiérarchique.', 'La feuille de route à douze mois : actions priorisées, responsables et jalons.', 'Une synthèse de restitution conçue pour le Comex, et une version adaptée aux représentants du personnel.'] }],
    },
    cas: {
      titre: 'Ce que révèlent les dirigeants que j\u2019interroge',
      texte: 'Les entretiens que je mène auprès de DRH et de dirigeants font ressortir des constats récurrents : des gains individuels réels qui peinent à devenir des gains d\u2019organisation, des cadres d\u2019usage rédigés mais encore peu connus des équipes, une adhésion qui se construit par les preuves concrètes davantage que par les présentations. L\u2019audit transforme ces constats généraux en lecture précise de votre propre organisation.',
    },
    tarif: { montant: 'De 8 000 à 12 000 € HT', detail: 'Selon la taille de l\u2019organisation, le nombre de sites et le périmètre retenu. Le montant exact est fixé après un premier échange.' },
    faq: [
      { question: 'Combien de temps dure l\u2019audit ?', answer: 'En général quatre à six semaines, de la première réunion à la restitution. Le calendrier s\u2019adapte à la disponibilité de vos équipes.' },
      { question: 'Qui est interrogé ?', answer: 'La direction générale, les directeurs concernés, un panel de managers et de collaborateurs représentatif de vos métiers. Le questionnaire organisationnel permet ensuite d\u2019élargir l\u2019écoute à l\u2019ensemble des équipes.' },
      { question: 'Les réponses sont-elles confidentielles ?', answer: 'Oui. Les résultats sont restitués par tendances, par métier et par niveau, sans jamais attribuer un propos à une personne.' },
      { question: 'Faut-il déjà avoir déployé des outils IA ?', answer: 'L\u2019audit est utile à tout stade. Dans une organisation déjà équipée, il mesure les effets réels ; dans une organisation en préparation, il éclaire les choix à venir, y compris les usages spontanés déjà présents.' },
      { question: 'Que se passe-t-il après l\u2019audit ?', answer: 'La feuille de route vous appartient et peut être conduite en interne. Pour l\u2019accompagnement du déploiement, le Programme de gouvernance humaine en reprend directement les priorités.' },
    ],
  },
  {
    slug: 'programme-gouvernance-humaine',
    nom: 'Programme de gouvernance humaine',
    seoTitle: 'Programme de gouvernance humaine de l\u2019IA : réussir l\u2019adoption dans la durée | Aurélien Mizeret',
    description: 'Instance de décision, managers garants du jugement, équipes formées aux usages et aux comportements, transmission des savoir-faire : un programme sur mesure pour ancrer l\u2019IA durablement dans votre organisation.',
    surTitre: 'Offre de déploiement, organisations en transition',
    titre: 'Faites de l\u2019IA un projet que vos équipes s\u2019approprient et que votre organisation pilote avec clarté.',
    chapo: 'Un outil se déploie en quelques semaines. Une organisation qui décide, travaille et apprend avec l\u2019IA se construit dans la durée. Le Programme de gouvernance humaine installe les instances, les pratiques managériales et les réflexes collectifs qui rendent votre transition solide : chacun sait comment utiliser l\u2019IA, où s\u2019exerce le jugement humain et comment les décisions se prennent. Votre organisation gagne en autonomie, en cohésion et en confiance.',
    faits: ['3 à 9 mois', 'Sur devis', 'Programme sur mesure'],
    carte: { prix: 'Sur devis', duree: 'Sur 3 à 9 mois', resume: 'Installez les instances, les pratiques managériales et les réflexes qui ancrent l\u2019IA dans la durée.', cta: 'Découvrir le programme' },
    pourQui: {
      titre: 'Cette offre est faite pour vous si',
      items: [
        { fort: 'Vous avez choisi ou déployé des outils IA', texte: 'et voulez en faire un levier réel pour vos équipes, au-delà des premiers usages individuels.' },
        { fort: 'Vos managers attendent des repères', texte: 'pour accompagner des collaborateurs qui travaillent désormais avec l\u2019IA.' },
        { fort: 'Vous voulez une instance de pilotage crédible,', texte: 'en interne comme vis-à-vis de vos clients, partenaires et régulateurs.' },
        { fort: 'Vous avez réalisé un audit ou un cadrage', texte: 'et souhaitez passer à l\u2019action de façon structurée.' },
      ],
    },
    apports: {
      titre: 'Ce que le programme construit',
      blocs: [
        { titre: 'Une organisation qui décide avec clarté.', texte: 'Une instance dédiée tranche les arbitrages, une doctrine partagée guide les usages, et chaque décision appuyée par l\u2019IA a un responsable identifié.' },
        { titre: 'Des managers garants du jugement humain.', texte: 'Vos managers savent lire les dynamiques de leurs équipes face à l\u2019IA, soutenir l\u2019engagement et faire vivre le discernement au quotidien.' },
        { titre: 'Des équipes qui gagnent en maîtrise.', texte: 'Vos collaborateurs utilisent l\u2019IA dans leurs situations métier réelles, avec esprit critique, en sachant ce qu\u2019ils délèguent et ce qu\u2019ils assument.' },
        { titre: 'Un savoir-faire qui se transmet.', texte: 'Les compétences qui fondent votre valeur sont identifiées, entretenues et transmises aux nouvelles générations.' },
      ],
    },
    fond: {
      titre: 'Quatre piliers, combinés selon vos priorités',
      blocs: [
        { titre: 'L\u2019instance de décision', puces: ['Création ou structuration d\u2019un comité IA : périmètre, composition, rôles et responsabilités.', 'Élaboration de votre doctrine IA : principes directeurs, usages encouragés, arbitrages types.', 'Carte des décisions à fort impact, avec leurs niveaux de validation.', 'Rituels de pilotage et indicateurs de suivi.'] },
        { titre: 'La ligne managériale', puces: ['Ateliers de lecture des dynamiques humaines face à l\u2019IA : attentes, inquiétudes, résistances, engagement.', 'Évolution de la posture managériale vers le rôle de garant du jugement humain.', 'Adaptation de l\u2019évaluation de la performance à des équipes qui produisent avec l\u2019IA : qualité du jugement, pertinence des choix, complexité des sujets traités.', 'Repères pour détecter tôt la surcharge cognitive et le désengagement.'] },
        { titre: 'Les équipes', puces: ['Formation centrée sur les usages métier et les comportements : décider avec l\u2019IA, vérifier, assumer, coopérer.', 'Réseau d\u2019ambassadeurs aux profils variés, qui diffusent les bonnes pratiques par l\u2019exemple.', 'Mentorat entre pairs volontaires, pour faire circuler les usages qui fonctionnent.', 'Cartographie des décisions et des non-décisions liées à l\u2019IA, pour débloquer ce qui attend.'] },
        { titre: 'La transmission et le cadre', puces: ['Cartographie des savoir-faire critiques à préserver.', 'Parcours d\u2019apprentissage où les plus jeunes maîtrisent les fondamentaux de leur métier et apprennent à challenger l\u2019IA.', 'Cadre d\u2019usage connu et appliqué par tous, au-delà du document de référence.', 'Information et consultation des représentants du personnel en amont des projets structurants, et traduction des obligations réglementaires en pratiques concrètes.'] },
      ],
    },
    deroule: {
      titre: 'Déroulé',
      etapes: [
        { titre: 'Cadrage', texte: 'Un ou deux échanges approfondis avec la direction pour comprendre votre contexte, vos priorités et les résultats attendus.' },
        { titre: 'Proposition sur mesure', texte: 'Un programme adapté : combinaison des piliers, séquencement, formats (ateliers, sessions individuelles, documents de travail), jalons et livrables.' },
        { titre: 'Déploiement progressif', texte: 'Des interventions à votre rythme : ateliers Comex, sessions avec la ligne managériale, formations des équipes, animation du réseau d\u2019ambassadeurs, restitutions intermédiaires. La progression est mesurée à chaque étape.' },
        { titre: 'Ancrage et autonomie', texte: 'Transfert des outils, des méthodes et des réflexes, pour que votre organisation pilote sa gouvernance par elle-même.' },
      ],
    },
    livrables: {
      titre: 'Ce que vous obtenez',
      groupes: [{ items: ['Un comité IA opérationnel, avec des rôles clairs, des rituels établis et une doctrine formalisée.', 'Une ligne managériale équipée, qui comprend les enjeux humains et sait agir.', 'Des équipes autonomes et responsables dans leurs usages.', 'Des savoir-faire préservés et transmis.', 'Une organisation autonome, qui dispose des outils pour piloter sa gouvernance IA dans la durée.'] }],
    },
    cas: {
      titre: 'Un modèle qui fait ses preuves sur le terrain',
      texte: 'Parmi les dirigeants que j\u2019interroge, les organisations les plus avancées ont souvent réuni deux dispositifs : un comité stratégique IA associant direction générale, systèmes d\u2019information, données, finance et RH, et un club d\u2019ambassadeurs issus de métiers très différents. Leur constat converge : l\u2019adhésion se construit par des cas d\u2019usage simples, visibles et utiles. Le programme s\u2019appuie sur ces enseignements et les adapte à votre culture.',
    },
    tarif: { montant: 'Sur devis', detail: 'Construit après l\u2019échange de cadrage. Il dépend des piliers retenus, de la taille de l\u2019organisation, du nombre de participants et de la durée souhaitée.' },
    faq: [
      { question: 'Faut-il avoir réalisé l\u2019Audit de Transition IA avant ?', answer: 'L\u2019audit permet de cibler précisément les priorités. Le programme peut aussi démarrer directement : le cadrage initial en tient alors lieu.' },
      { question: 'Combien de temps dure un programme ?', answer: 'Généralement de trois à neuf mois, selon les piliers retenus et le rythme de votre organisation.' },
      { question: 'Qui est impliqué dans l\u2019organisation ?', answer: 'La direction générale pour le comité IA, la ligne managériale, un panel de collaborateurs et d\u2019ambassadeurs, et les représentants du personnel pour les projets structurants.' },
      { question: 'Peut-on combiner le programme avec l\u2019Executive Confidant ?', answer: 'Oui. Le programme structure l\u2019organisation ; l\u2019Executive Confidant accompagne le dirigeant dans ses décisions sensibles pendant et après le déploiement.' },
      { question: 'Qu\u2019est-ce qui distingue votre approche ?', answer: 'Une entrée par l\u2019humain et par la décision : je pars de la façon dont vos équipes perçoivent, vivent et s\u2019approprient la transition, puis je construis avec vous un cadre qui tient sur le terrain.' },
    ],
  },
  {
    slug: 'executive-confidant',
    nom: 'Executive Confidant',
    seoTitle: 'Executive Confidant : un pair stratégique pour vos décisions IA | Aurélien Mizeret',
    description: 'Un interlocuteur indépendant et confidentiel, disponible quand une décision l\u2019exige. Pour les dirigeants qui veulent penser à voix haute, éprouver leurs choix et décider avec lucidité.',
    surTitre: 'Accompagnement du dirigeant, prolongement d\u2019une mission',
    titre: 'Un pair à vos côtés, au moment précis où la décision vous appartient.',
    chapo: 'Certaines décisions se prennent seul, et gagnent pourtant à être pensées à deux. L\u2019Executive Confidant offre au dirigeant un espace confidentiel pour éprouver son raisonnement, lire les dynamiques humaines en jeu et trancher avec clarté. Un interlocuteur qui connaît votre organisation, comprend les enjeux humains, technologiques et réglementaires de l\u2019IA, et vous parle avec franchise, d\u2019égal à égal.',
    faits: ['À la demande', 'Sur devis confidentiel', 'Réponse sous 24 h'],
    carte: { prix: 'Sur devis', duree: 'À la demande', resume: 'Un pair stratégique pour le dirigeant, dans le prolongement d\u2019une mission.', cta: 'Découvrir l\u2019accompagnement' },
    pourQui: {
      titre: 'Cet accompagnement est fait pour vous si',
      items: [
        { fort: 'Vous portez les choix stratégiques', texte: 'liés à l\u2019IA dans votre organisation, comme dirigeant, fondateur ou membre du Comex.' },
        { fort: 'Vous voulez un interlocuteur unique', texte: 'qui relie la dimension humaine, technologique et réglementaire de vos décisions.' },
        { fort: 'Vous appréciez un regard indépendant,', texte: 'entièrement au service de votre décision.' },
        { fort: 'Vous voulez tester une idée, un arbitrage ou une prise de parole', texte: 'avant de l\u2019engager devant votre Comex ou vos équipes.' },
      ],
    },
    apports: {
      titre: 'Ce que vous y trouvez',
      blocs: [
        { titre: 'Un espace pour penser à voix haute.', texte: 'Les sujets qui ne peuvent pas encore être mis à l\u2019ordre du jour d\u2019un Comex trouvent ici un lieu pour mûrir : doutes stratégiques, arbitrages délicats, enjeux éthiques.' },
        { titre: 'Une lecture de vos mécanismes de décision.', texte: 'Chaque décision engage des émotions, des biais et des habitudes. Je vous aide à les voir clairement, pour décider en pleine conscience de ce qui vous guide.' },
        { titre: 'Un décryptage de l\u2019impact humain de vos choix.', texte: 'Avant de trancher, vous anticipez comment vos équipes vont recevoir la décision, ce qui la fera adopter et ce qu\u2019il faudra accompagner.' },
        { titre: 'Un regard indépendant sur vos investissements technologiques.', texte: 'Choix d\u2019outils, de fournisseurs ou de déploiements : vous disposez d\u2019un avis libre de tout lien commercial.' },
        { titre: 'Une préparation de vos moments décisifs.', texte: 'Annonce d\u2019un projet, prise de parole devant le Comex ou les équipes, négociation sensible : vous structurez votre message, anticipez les objections et affinez votre posture.' },
        { titre: 'Une boussole réglementaire claire.', texte: 'Vous identifiez ce qui s\u2019applique réellement à votre situation et priorisez vos actions avec sérénité.' },
      ],
    },
    fond: {
      titre: 'Comment ça fonctionne',
      intro: 'L\u2019Executive Confidant est proposé aux dirigeants que j\u2019ai déjà accompagnés lors d\u2019une Journée Décision IA, d\u2019un Cadrage, d\u2019un Audit ou d\u2019un Programme. La relation repose sur une connaissance fine de votre organisation, construite pendant la mission : chaque échange démarre ainsi au cœur du sujet.',
      blocs: [
        { titre: 'À la demande', texte: 'Vous me sollicitez quand un sujet se présente. La relation suit votre rythme et vos priorités du moment.' },
        { titre: 'Sur site ou en visioconférence sécurisée', texte: 'Dans vos locaux pour les sujets qui méritent une présence, en visioconférence pour les échanges rapides.' },
        { titre: 'Confidentialité totale', texte: 'Tout ce qui se dit reste entre nous. Aucun rapport partagé, aucune référence citée sans votre accord explicite.' },
        { titre: 'Réactivité', texte: 'Une réponse dans les 24 heures, un créneau dans les 48 à 72 heures selon l\u2019urgence.' },
      ],
    },
    deroule: {
      titre: 'Ce que le dirigeant en retire',
      etapes: [],
    },
    livrables: {
      titre: 'Ce que le dirigeant en retire',
      groupes: [{ items: ['Des décisions mûries, argumentées et assumées.', 'Une vision plus nette des dynamiques humaines de son organisation.', 'Une posture plus assurée dans les moments qui comptent.', 'Un interlocuteur de confiance, disponible dans la durée.'] }],
    },
    tarif: { montant: 'Sur devis confidentiel', detail: 'Défini selon la nature et la fréquence des interventions, sous la forme d\u2019une disponibilité réservée sur une période donnée.' },
    faq: [
      { question: 'Peut-on démarrer directement par l\u2019Executive Confidant ?', answer: 'La relation se construit après une première mission, qui me donne une connaissance réelle de votre organisation. Pour faire connaissance, la Journée Décision IA est le point de départ le plus direct.' },
      { question: 'Quelle est la différence avec un coaching ?', answer: 'L\u2019Executive Confidant porte sur vos décisions stratégiques et leurs effets sur l\u2019organisation. Il mobilise la lecture des comportements et des émotions au service de la décision.' },
      { question: 'Combien d\u2019échanges par mois ?', answer: 'Selon vos besoins. La formule est calibrée ensemble lors de la mise en place, puis ajustée au fil de la relation.' },
      { question: 'Peut-on combiner cet accompagnement avec le Programme de gouvernance humaine ?', answer: 'Oui. Le programme structure l\u2019organisation, l\u2019Executive Confidant accompagne le dirigeant dans ses décisions personnelles pendant et après le déploiement.' },
    ],
  },
];

export const offreParSlug = (slug: string) => offres.find((o) => o.slug === slug);
export const urlOffre = (slug: string) => `/offres/${slug}/`;
