// Diagnostic organisationnel : 16 questions, 5 axes, réponses notées de 1 à 4.
// PROPOSITION du 19/09/2026 (étape 2.4), à valider. Les textes de lecture sont aussi des propositions.
// La première réponse reste toujours légitime, pour qu'un répondant honnête ne se sente pas jugé.

export type AxeId = 'decision' | 'responsabilite' | 'engagement' | 'competences' | 'gouvernance';

export const axes: { id: AxeId; nom: string; force: string; levier: string }[] = [
  {
    id: 'decision', nom: 'La décision',
    force: "Vos décisions liées à l'IA reposent sur des repères partagés : chacun sait ce qu'il vérifie et qui tranche. Tout le reste peut s'appuyer sur cette base.",
    levier: "Vos choix liés à l'IA se font encore au fil des opportunités. Des critères communs et une règle claire pour trancher donneront un cap à chaque projet.",
  },
  {
    id: 'responsabilite', nom: 'La responsabilité',
    force: "Chez vous, une décision appuyée par l'IA a un responsable, et contredire l'outil est légitime. Le jugement humain garde toute sa place.",
    levier: "Qui répond d'une décision prise avec l'aide de l'IA reste à préciser. Clarifier qui valide, qui signe et qui corrige rendra vos équipes plus sûres d'elles.",
  },
  {
    id: 'engagement', nom: "L'engagement",
    force: "Vos équipes sont écoutées et le rôle de l'IA leur est expliqué. Cette confiance est votre meilleur accélérateur d'adoption.",
    levier: "Le vécu de vos équipes face à l'IA reste peu visible. L'écouter, et dire clairement ce que l'IA change et ce qu'elle préserve, transformera l'inquiétude en adhésion.",
  },
  {
    id: 'competences', nom: 'Les compétences',
    force: "Vous entretenez l'esprit critique et savez quels savoir-faire préserver. Votre expertise humaine reste solide à mesure que les outils progressent.",
    levier: "La transmission des savoir-faire mérite votre attention, en particulier pour les plus jeunes. Identifier les compétences à préserver protège ce qui fonde votre valeur.",
  },
  {
    id: 'gouvernance', nom: 'La gouvernance',
    force: "Le sujet IA est porté au bon niveau, avec un cadre connu des équipes. Votre organisation dispose d'un vrai pilote.",
    levier: "Le portage et le cadre d'usage de l'IA restent à consolider. Une instance claire et un cadre connu de tous donneront de la cohérence à vos initiatives.",
  },
];

export const questions: { axe: AxeId; texte: string; reponses: [string, string, string, string] }[] = [
  { axe: 'decision', texte: "Quand une décision importante s'appuie sur un résultat produit par l'IA, comment se prend-elle ?", reponses: ["Le cas ne s'est pas encore présenté, ou nous ne l'avons pas observé.", 'Le résultat est souvent repris tel quel, faute de temps pour le discuter.', 'Le résultat est discuté, chacun à sa manière.', 'Les équipes savent ce qu\u2019elles vérifient, ce qu\u2019elles complètent et qui tranche.'] },
  { axe: 'decision', texte: "Vos choix liés à l'IA (outils, usages, priorités) reposent-ils sur des critères partagés ?", reponses: ['Pas encore : les choix se font au fil des opportunités.', 'Chaque direction applique ses propres critères.', 'Des critères sont posés au cas par cas pour les projets importants.', 'Une grille commune, validée par la direction, guide chaque choix.'] },
  { axe: 'decision', texte: 'Comment votre organisation choisit-elle une solution IA ?', reponses: ["Nous n'avons pas encore eu ce choix à faire.", 'À partir des démonstrations des fournisseurs.', 'Avec un cahier des charges rédigé principalement par la DSI.', 'Les directions concernées fixent leurs critères avant de rencontrer le marché.'] },
  { axe: 'decision', texte: 'Quand deux directions divergent sur un sujet IA, comment la question se règle-t-elle ?', reponses: ["La situation ne s'est pas encore présentée.", 'Le sujet reste en suspens ou se règle par défaut.', 'La direction générale arbitre au cas par cas.', 'Un lieu et une règle de décision sont prévus pour trancher.'] },
  { axe: 'responsabilite', texte: "Quand un travail réalisé avec l'IA s'avère erroné, qui en répond ?", reponses: ["La question ne s'est pas encore posée.", "Personne clairement : l'erreur est attribuée à l'outil.", "La personne qui l'a utilisé, sans règle écrite.", 'Les rôles sont définis : qui valide, qui signe, qui corrige.'] },
  { axe: 'responsabilite', texte: "Vos collaborateurs se sentent-ils légitimes pour contredire ou écarter un résultat produit par l'IA ?", reponses: ['Nous ne le savons pas encore.', "Rarement : l'outil fait autorité.", 'Oui, surtout les plus expérimentés.', "Oui, à tous les niveaux : c'est attendu et valorisé."] },
  { axe: 'responsabilite', texte: "Sur les décisions humaines sensibles (recrutement, évaluation, rémunération, disciplinaire), quelle place laissez-vous à l'IA ?", reponses: ["Nous n'avons pas encore posé la question.", 'Des usages existent, sans règle précise.', 'La décision reste humaine, sans que la règle soit écrite.', 'Une ligne claire, écrite et connue, fixe ce qui reste humain.'] },
  { axe: 'engagement', texte: "Comment vos équipes vivent-elles l'arrivée de l'IA ?", reponses: ["Nous ne l'avons pas encore mesuré.", 'Des inquiétudes circulent, peu exprimées.', "Les ressentis sont écoutés au fil de l'eau.", 'Ils sont mesurés régulièrement et nourrissent nos décisions.'] },
  { axe: 'engagement', texte: "La direction a-t-elle dit ce que l'IA change, et ce qu'elle ne change pas, pour les métiers ?", reponses: ['Pas encore.', 'Le message existe, formulé surtout en termes de productivité.', "Il explique le rôle de l'IA et la place de chacun.", "Il affirme la valeur humaine de chaque métier, et la direction l'incarne."] },
  { axe: 'engagement', texte: "Comment les usages de l'IA se diffusent-ils ?", reponses: ['Ils restent marginaux ou spontanés.', 'Quelques pionniers avancent seuls.', 'Des référents partagent leurs pratiques.', "Un réseau d'ambassadeurs aux profils variés anime des cas d'usage visibles."] },
  { axe: 'competences', texte: "Votre organisation entretient-elle l'esprit critique face à des outils rapides et convaincants ?", reponses: ["Ce n'est pas encore un sujet de réflexion.", 'Nous encourageons la vérification, sans dispositif concret.', 'Les erreurs repérées sont partagées et analysées.', "Des pratiques entretiennent l'expertise humaine indépendamment de l'IA."] },
  { axe: 'competences', texte: "Comment les nouveaux apprennent-ils le métier, alors que l'IA absorbe une partie des tâches qui les formaient ?", reponses: ["La question n'est pas encore identifiée.", 'Le risque est perçu, sans être traité.', 'Les fondamentaux sont acquis avant tout usage intensif.', "L'apprentissage est repensé : les juniors apprennent à challenger l'IA."] },
  { axe: 'competences', texte: "Savez-vous quelles compétences préserver, quelle que soit l'évolution de l'IA ?", reponses: ['Pas encore.', 'Nous en avons une idée intuitive, non formalisée.', 'Elles sont identifiées et orientent formation et recrutement.', 'Elles forment une cartographie vivante, intégrée à la GPEC.'] },
  { axe: 'gouvernance', texte: 'Qui porte le sujet IA au plus haut niveau ?', reponses: ["Personne n'est encore désigné.", 'Une direction seule, souvent la DSI.', 'La direction générale.', 'Une instance dédiée réunissant plusieurs directions.'] },
  { axe: 'gouvernance', texte: "Existe-t-il un cadre d'usage de l'IA ?", reponses: ['Pas encore.', 'Il est en cours de rédaction.', 'Il est écrit, encore peu connu.', 'Il est diffusé, connu et revu régulièrement.'] },
  { axe: 'gouvernance', texte: "Que deviennent les gains de temps obtenus grâce à l'IA ?", reponses: ['Ils ne sont pas encore mesurés.', 'Ils restent individuels, chacun en dispose.', 'Ils sont mesurés dans certaines équipes.', "Leur réinvestissement relève d'un choix de direction."] },
];

export const profils = [
  { min: 16, max: 27, nom: "L'organisation qui découvre", texte: "L'IA arrive chez vous par petites touches. C'est le meilleur moment pour poser la façon de décider, avant que les habitudes ne s'installent." },
  { min: 28, max: 39, nom: "L'organisation qui expérimente", texte: 'Les usages se multiplient, portés par des pionniers. Le prochain pas consiste à transformer ces initiatives en décisions partagées.' },
  { min: 40, max: 51, nom: "L'organisation qui structure", texte: 'Vos repères se mettent en place. Il reste à les rendre vivants, connus et appliqués à tous les niveaux.' },
  { min: 52, max: 64, nom: "L'organisation qui décide", texte: "Votre organisation décide avec l'IA en connaissance de cause. L'enjeu devient la continuité : garder ce niveau quand les outils et les équipes changent." },
];

export const pourquoiOffre: Record<string, string> = {
  'journee-decision-ia': 'Aligner votre direction sur des critères et des règles de décision communes est le levier le plus direct pour votre profil.',
  'cadrage-decision-ia': 'Un choix de solution est en cours : poser vos critères avant les démonstrations sécurise la décision.',
  'audit-transition-ia': 'Plusieurs axes méritent votre attention en même temps : une lecture d\u2019ensemble vous permettra de prioriser.',
  'programme-gouvernance-humaine': 'Vos usages sont lancés : une instance claire, des managers équipés et une transmission organisée les rendront durables.',
  'executive-confidant': 'Votre organisation décide avec maturité. Un pair stratégique peut accompagner le dirigeant dans ses décisions sensibles, dans le prolongement d\u2019une mission.',
};
