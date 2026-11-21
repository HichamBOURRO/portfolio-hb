// src/app/data/profile.ts
export interface Bullet {
  text: string;
  children?: string[];
}

export interface StackGroup {
  label: string;
  items: string[];
}

export interface SubPhase {
  /** Role held during this phase. */
  title: string;
  client?: string;
  /** Context shown instead of a client, e.g. internal projects. */
  scope?: string;
  bullets: Bullet[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  client?: string;
  period: string;
  current?: boolean;
  bullets: Bullet[];
  /** Optional sub-phases shown under the main bullets (e.g. a past phase, internal projects). */
  subs?: SubPhase[];
  stack: StackGroup[];
}

export interface SkillCategory {
  id: string;
  label: string;
  items: string[];
}

export interface Principle {
  title: string;
  text: string;
  tags: string[];
}

export interface Stat {
  value: string;
  label: string;
  detail: string;
}

export const PROFILE: Profile = {
  firstName: 'Hicham',
  lastName: 'BOURRO',
  title: 'Référent Technique · Software Engineer Lead',
  status: 'Tech Lead · Intelcia Tech — client SFR',
  pitch:
    'Tech Lead Java / Spring avec plus de 10 ans d’expérience dans la conception, le développement et la maintenance d’applications critiques (télécoms, transport, banque). Encadrement d’équipes, revue de code, bonnes pratiques Craftsmanship et DevOps.',
  location: 'Casablanca Ain Sebaa – 20250 – Maroc',
  city: 'Casablanca, Maroc',
  email: 'hicham.bourro@gmail.com',
  phone: '+212 600-591-701',
  phoneHref: '+212600591701',
  cv: 'cv-hicham-bourro.pdf',
  linkedin: 'https://www.linkedin.com/in/hicham-bourro/',
  github: 'https://github.com/HichamBOURRO/',
  education: {
    degree: 'Master 2',
    field: 'Méthodes Informatiques Appliquées à la Gestion des Entreprises',
    school: 'ESG Maroc, Casablanca',
    period: '2007 – 2011',
  },
  methods: ['SCRUM', 'SAFe', 'PMP'],
};

export const TERMINAL: { key: string; value: string }[] = [
  { key: 'rôle', value: 'Référent Technique · Tech Lead' },
  { key: 'stack', value: '[Java, Spring Boot, Angular, Kubernetes]' },
  { key: 'secteurs', value: 'télécoms · transport · banque' },
  { key: 'méthodes', value: 'SCRUM · SAFe · PMP' },
  { key: 'base', value: 'Casablanca, Maroc' },
];

export const STATS: Stat[] = [
  { value: '10+', label: 'ans d’expérience', detail: 'Applications critiques Java / Spring' },
  { value: '4', label: 'grands comptes', detail: 'SFR · Orange · SNCF · Europcar' },
  { value: '3', label: 'secteurs', detail: 'Télécoms · Transport · Banque' },
  { value: '5', label: 'développeurs encadrés', detail: 'Tech Lead & Scrum Master' },
];

export const PRINCIPLES: Principle[] = [
  {
    title: 'Leadership technique & encadrement',
    text: 'Pilotage d’équipes de développement, animation des cérémonies Scrum, accompagnement sur les points de blocage et évaluation des profils techniques pour le recrutement.',
    tags: ['Tech Lead', 'Scrum Master', 'Recrutement'],
  },
  {
    title: 'Revue de code & Craftsmanship',
    text: 'Revues de code systématiques, formations et ateliers Craftsmanship, sensibilisation à la dette technique, à la maintenabilité et à l’évolutivité.',
    tags: ['TDD', 'Clean Code', 'SOLID', 'Design Patterns'],
  },
  {
    title: 'Assessments DevOps & qualité logicielle',
    text: 'Conduite d’assessments DevOps, bonnes pratiques GitLab CI/CD, automatisation des déploiements, qualité de code, testing, documentation et supervision.',
    tags: ['GitLab CI/CD', 'Kubernetes', 'Sonar', 'Observabilité'],
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'intelcia',
    role: 'Tech Lead',
    company: 'Intelcia Tech',
    client: 'SFR',
    period: 'Août 2024 – Aujourd’hui',
    current: true,
    bullets: [
      { text: 'Maintenance évolutive et corrective d’un système d’information FTTH critique, composé de plusieurs applications.' },
      { text: 'Conception et développement de l’extraction en masse de documents, avec génération de ZIP, suivi des exports, téléchargement et IHM de suivi.' },
      {
        text: 'Évolutions sur les flux inter-opérateurs :',
        children: [
          'Génération et intégration de flux, avec détection des KO',
          'Bascule des flux AXIONE et prise en compte des flux EXTU',
          'Support de la version des flux upgraded',
        ],
      },
      { text: 'Évolutions des web services d’échange avec des SSA partenaires.' },
      { text: 'Analyse et résolution d’incidents de production.' },
      { text: 'Sécurisation des configurations : retrait des secrets de production des environnements hors production.' },
      { text: 'Étude de portabilité applicative.' },
      { text: 'Revue de code, enrichissement des logs et de l’observabilité, versionnement des correctifs à chaud.' },
    ],
    subs: [
      {
        title: 'Tech Lead transverse',
        client: 'SFR',
        bullets: [
          { text: 'Conduite d’assessments DevOps pour toutes les activités DOOR, en intégrant les bonnes pratiques sur GitLab CI/CD et l’automatisation des déploiements, qualité de code, testing, documentation et supervision.' },
          { text: 'Planification et suivi des actions DevOps définies dans l’assessment.' },
          { text: 'Mise en place et amélioration des méthodologies de travail : garantir une meilleure vision pour les développeurs sur les cadrages et le suivi des features et US mises en place.' },
          { text: 'Évaluation des profils techniques pour le recrutement, avec un accent sur Spring Boot, GitLab CI, Kubernetes et les pratiques Craftsmanship (TDD, Clean Code, SOLID, Design Patterns).' },
          { text: 'Préparation de formations et d’ateliers Craftsmanship, avec démonstration de bonnes pratiques sur Spring Boot, TDD, et sensibilisation sur les impacts d’un mauvais code (dette technique, maintenabilité, performance, évolutivité).' },
          { text: 'Revue et refactorisation des codes Selenium à base de design pattern (POM & DDT), mise en place d’un dashboard de suivi des tests automatisés.' },
        ],
      },
      {
        title: 'Tech Lead',
        scope: 'Projets internes Intelcia Tech',
        bullets: [
          {
            text: 'POC multi-agents IA sur des projets internes :',
            children: [
              'Intégration de LLM dans un workflow métier piloté par une machine à états YAML, avec validations humaines aux points de décision (human-in-the-loop)',
              'Routage multi-modèles pour maîtriser les coûts, avec un modèle adapté à chaque étape',
              'Ingénierie de prompts et méthode outillée par étape',
              'Traçabilité des sorties IA : chaque information sourcée avec un niveau de fiabilité, audit automatique des livrables',
              'Sécurité : jetons d’accès en mémoire uniquement, repérage des secrets et données personnelles, journal d’audit en ajout seul',
            ],
          },
          {
            text: 'Conception et pilotage de l’architecture d’une solution interne à base de microservices, dans le cadre de la refonte d’un processus métier critique :',
            children: [
              'Élaboration du schéma directeur : cartographie des domaines métier, découpage en contextes bornés (DDD), priorisation des chantiers et trajectoire de migration par lots',
              'Arbitrages d’architecture formalisés (découpage, cohérence des référentiels, modèle de données par domaine) et présentés en comité de pilotage',
              'Architecture microservices découpée par domaine métier, chaque service avec son propre schéma de données et un référentiel partagé sans duplication',
              'Approche contract-first : contrats d’API OpenAPI versionnés comme source de vérité, génération des interfaces côté serveur',
              'Communication asynchrone par événements (Kafka, patron outbox) pour découpler les services et garantir la cohérence des échanges',
              'Gouvernance des évolutions : migrations de schéma versionnées (Liquibase), jeux de données de démonstration et procédures de purge sécurisées',
              'Pilotage du delivery par lots fonctionnels : rétro-planning, points de décision documentés, règles de gestion cadrées avec les métiers et validées par des jeux de tests métier',
              'Habilitations par périmètre et contrôle d’accès au niveau des services',
              'Documentation d’architecture et d’exploitation pour la reprise par les équipes',
            ],
          },
        ],
      },
    ],
    stack: [
      { label: 'Back End', items: ['Java 8/11/21', 'Java EE', 'Spring', 'Spring Boot', 'Spring Batch', 'Hibernate/JPA', 'Apache CXF (SOAP/REST)', 'API REST', 'Camunda'] },
      { label: 'Front End', items: ['Angular', 'TypeScript', 'JSF', 'RichFaces', 'Seam', 'HTML', 'CSS', 'Bootstrap'] },
      { label: 'Messaging & stockage', items: ['Kafka', 'RabbitMQ', 'MinIO (GED)', 'MongoDB'] },
      { label: 'Infra & déploiement', items: ['Docker', 'Kubernetes', 'Helm', 'GitLab CI/CD'] },
      { label: 'Monitoring', items: ['Prometheus', 'Grafana'] },
      { label: 'Base de données', items: ['Oracle', 'MySQL', 'PostgreSQL', 'Liquibase'] },
      { label: 'Outils', items: ['Maven', 'Git', 'IntelliJ', 'Jira', 'Sonar', 'Selenium'] },
      { label: 'Architecture', items: ['Microservices', 'DDD', 'OpenAPI (contract-first)', 'Event-driven', 'Kafka', 'Outbox pattern', 'Liquibase'] },
      { label: 'IA & agents', items: ['LLM', 'Multi-agents', 'RAG', 'Prompt engineering', 'Multi-model routing', 'Human-in-the-loop'] },
      { label: 'Plateforme IA', items: ['Node.js', 'JavaScript', 'SSE', 'YAML', 'API GitLab', 'API Confluence', 'Mermaid', 'Chromium headless'] },
    ],
  },
  {
    id: 'sofrecom',
    role: 'Tech Lead & Scrum Master',
    company: 'SOFRECOM',
    client: 'Orange',
    period: 'Mai 2023 – Août 2024',
    bullets: [
      { text: 'Management d’une équipe de 5 développeurs : suivi des avancements, accompagnement sur les points de blocage et animation des cérémonies Scrum.' },
      { text: 'Leadership technique : cadrage des sujets, répartition des tâches et montée en compétences de l’équipe.' },
      { text: 'Mise en place d’une arborescence de documentation structurée (technique, fonctionnelle, exploitation) pour faciliter le partage et la reprise.' },
      { text: 'Garant de la qualité du code : revues de code systématiques et suivi des remontées Sonar.' },
      { text: 'Analyse et résolution de problématiques de performance applicative.' },
      { text: 'Monitoring de la production : suivi des indicateurs, analyse des incidents et actions correctives.' },
      { text: 'Gestion des mises en production : planification, préparation des livrables, coordination avec l’exploitation et suivi post-MEP.' },
    ],
    stack: [
      { label: 'Back End', items: ['Java JEE', 'Spring', 'Hibernate', 'JPA', 'API REST', 'Spring Boot', 'Spring Batch'] },
      { label: 'Front End', items: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Bootstrap'] },
      { label: 'Base de données', items: ['MySQL', 'PostgreSQL'] },
      { label: 'Outils', items: ['Maven', 'GitLab CI/CD', 'Git', 'CloudFoundry', 'IntelliJ', 'Jira', 'Sonar'] },
    ],
  },
  {
    id: 'capgemini',
    role: 'Tech Lead',
    company: 'Capgemini',
    client: 'SNCF',
    period: 'Mai 2019 – Mai 2023',
    bullets: [
      { text: 'Leadership technique de l’équipe de développement : garant des choix techniques et de la qualité des livrables.' },
      { text: 'Conception des sujets complexes et propositions de solutions techniques auprès du client.' },
      { text: 'Réalisation de macro-chiffrages, estimation des charges et des dates de livraison.' },
      { text: 'Accompagnement des développeurs et revues de code systématiques pour diffuser les bonnes pratiques.' },
      { text: 'Déblocage des équipes sur les points techniques critiques pour sécuriser les livraisons.' },
    ],
    subs: [
      {
        title: 'Lead Développeur Full Stack',
        client: 'Europcar',
        bullets: [
          { text: 'Développement full stack (Java / Spring Boot, Angular) en autonomie sur les sujets complexes, de la conception à la livraison.' },
          { text: 'Accueil et intégration des nouveaux arrivants : prise en main du périmètre fonctionnel et technique.' },
          { text: 'Animation de sessions de peer programming et d’ateliers techniques au sein de l’équipe.' },
          { text: 'Documentation des sujets techniques et fonctionnels pour faciliter le partage de connaissances et la reprise.' },
        ],
      },
    ],
    stack: [
      { label: 'Back End', items: ['Java JEE', 'Spring', 'Hibernate', 'JPA', 'API REST', 'Spring Boot', 'Spring Batch'] },
      { label: 'Front End', items: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Bootstrap'] },
      { label: 'Base de données', items: ['Oracle', 'MySQL', 'PostgreSQL'] },
      { label: 'Outils', items: ['Maven', 'GitLab CI/CD', 'Git', 'SVN', 'CloudFoundry', 'IntelliJ', 'Jira', 'Sonar'] },
    ],
  },
  {
    id: 'sitel',
    role: 'Ingénieur-Analyste développeur',
    company: 'Sitel Africa',
    period: 'Juil. 2017 – Avr. 2019',
    bullets: [
      { text: 'Développement d’applications et planification des tests techniques et fonctionnels.' },
      { text: 'Rédaction des cahiers des charges et estimation des charges de travail.' },
      { text: 'Participation à la spécification des besoins fonctionnels.' },
      { text: 'Traitement des incidents techniques.' },
    ],
    stack: [
      { label: 'Back End', items: ['J2EE', 'Struts 2', 'Spring', 'Hibernate', 'Vocalcom V5'] },
      { label: 'Front End', items: ['JSP', 'Thymeleaf', 'JavaScript', 'HTML', 'CSS', 'Bootstrap'] },
      { label: 'Base de données', items: ['Oracle', 'SQL Server'] },
      { label: 'Outils', items: ['Maven', 'Git', 'CloudFoundry', 'IntelliJ', 'Jira', 'Sonar'] },
    ],
  },
  {
    id: 'bestcallshop',
    role: 'Consultant SI · Analyste développeur Java',
    company: 'BestCallShop',
    period: 'Juin 2014 – Juin 2017',
    bullets: [
      { text: 'Développement d’intranets et d’applications web en J2EE, dont de nouveaux modules sur un intranet existant.' },
      { text: 'Spécification des technologies et estimation des charges, participation aux tests fonctionnels et techniques et aux mises en production.' },
      { text: 'Résolution des dysfonctionnements côté serveur et mise en œuvre de solutions pour améliorer la qualité logicielle.' },
      { text: 'Participation à la migration d’applications vers des technologies Java.' },
    ],
    stack: [
      { label: 'Back End', items: ['J2EE', 'Struts 2', 'Spring', 'iBatis'] },
      { label: 'Front End', items: ['JSP', 'Thymeleaf', 'JavaScript', 'HTML5', 'CSS', 'Bootstrap'] },
      { label: 'Base de données', items: ['MySQL', 'SQL Server'] },
      { label: 'Outils', items: ['Maven', 'Eclipse', 'Sonar'] },
    ],
  },
];

export const SKILLS: SkillCategory[] = [
  { id: 'lang', label: 'Langages', items: ['Java', 'Kotlin', 'Python', 'SQL / NoSQL', 'T-SQL', 'PL/SQL'] },
  {
    id: 'jee',
    label: 'Java / JEE',
    items: ['Spring MVC', 'Spring Boot', 'Spring Security', 'Spring Batch', 'Camunda', 'Hibernate', 'JPA', 'JDBC', 'Web Services', 'Struts', 'JSP', 'JavaFX', 'JUnit'],
  },
  { id: 'ai', label: 'IA', items: ['LLM', 'Multi-agents', 'RAG', 'Prompt engineering', 'Human-in-the-loop'] },
  { id: 'web', label: 'Web', items: ['Node.js', 'Angular', 'ReactJS', 'HTML', 'CSS', 'JavaScript', 'jQuery', 'ASP.NET'] },
  { id: 'db', label: 'Bases de données', items: ['Oracle', 'MySQL', 'SQL Server', 'PostgreSQL', 'MongoDB'] },
  { id: 'devops', label: 'DevOps & outils', items: ['Git', 'GitLab CI/CD', 'Jenkins', 'Maven', 'SVN', 'Jira', 'Sonar', 'Docker', 'Kubernetes', 'Helm'] },
  { id: 'srv', label: 'Serveurs', items: ['JBoss', 'Tomcat'] },
  { id: 'design', label: 'Conception', items: ['Microservices', 'DDD', 'Event-driven', 'OpenAPI', 'UML / UP', 'Merise'] },
  { id: 'sys', label: 'Systèmes & IDE', items: ['Linux', 'Windows', 'IntelliJ', 'Eclipse', 'NetBeans', 'Visual Studio'] },
];

export interface Profile {
  firstName: string;
  lastName: string;
  title: string;
  status: string;
  pitch: string;
  location: string;
  city: string;
  email: string;
  phone: string;
  phoneHref: string;
  cv: string;
  linkedin: string;
  github: string;
  education: { degree: string; field: string; school: string; period: string };
  methods: string[];
}

export interface UiStrings {
  nav: { id: string; label: string }[];
  themeLight: string;
  themeDark: string;
  switchLang: string;
  langLabel: string;
  menu: string;
  logoAlt: string;
  ctaJourney: string;
  ctaContact: string;
  ctaCv: string;
  terminalAria: string;
  expertiseEyebrow: string;
  expertiseTitle: string;
  expertiseLead: string;
  education: string;
  methods: string;
  journeyEyebrow: string;
  journeyTitle: string;
  journeyLead: string;
  current: string;
  client: string;
  techEnv: string;
  journeyTabsAria: string;
  journeyHint: string;
  journeyPrev: string;
  journeyNext: string;
  phasePrev: string;
  phaseNext: string;
  stackEyebrow: string;
  stackTitle: string;
  stackLead: (technologies: number, families: number) => string;
  filterAll: string;
  filterAria: string;
  contactEyebrow: string;
  contactTitle: string;
  contactLead: string;
  sendEmail: string;
  copyEmail: string;
  copied: string;
  emailLabel: string;
  phoneLabel: string;
  locationLabel: string;
}

export interface Content {
  profile: Profile;
  terminal: { key: string; value: string }[];
  stats: Stat[];
  principles: Principle[];
  experiences: Experience[];
  skills: SkillCategory[];
  ui: UiStrings;
}

export const FR: Content = {
  profile: PROFILE,
  terminal: TERMINAL,
  stats: STATS,
  principles: PRINCIPLES,
  experiences: EXPERIENCES,
  skills: SKILLS,
  ui: {
    nav: [
      { id: 'profil', label: 'Profil' },
      { id: 'expertise', label: 'Expertise' },
      { id: 'parcours', label: 'Parcours' },
      { id: 'stack', label: 'Stack' },
      { id: 'contact', label: 'Contact' },
    ],
    themeLight: 'Passer en thème clair',
    themeDark: 'Passer en thème sombre',
    switchLang: 'Switch to English',
    langLabel: 'EN',
    menu: 'Menu',
    logoAlt: 'Logo Hicham',
    ctaJourney: 'Voir le parcours',
    ctaContact: 'Me contacter',
    ctaCv: 'Télécharger le CV ↓',
    terminalAria: 'Carte d’identité professionnelle au format terminal',
    expertiseEyebrow: '02 / SAVOIR-FAIRE',
    expertiseTitle: 'Diriger sans quitter le code.',
    expertiseLead: 'Trois axes qui structurent mon rôle de référent technique sur des systèmes critiques.',
    education: 'FORMATION',
    methods: 'MÉTHODES & CERTIFICATIONS',
    journeyEyebrow: '03 / PARCOURS',
    journeyTitle: 'Plus de dix ans sur des applications critiques.',
    journeyLead: 'Du développement J2EE au pilotage technique pour SFR, Orange, SNCF et Europcar.',
    current: 'en cours',
    client: 'Client',
    techEnv: 'Environnement technique',
    journeyTabsAria: 'Expériences',
    journeyHint: '← → pour changer de branche',
    journeyPrev: 'Expérience précédente',
    journeyNext: 'Expérience suivante',
    phasePrev: 'Phase précédente',
    phaseNext: 'Phase suivante',
    stackEyebrow: '04 / STACK',
    stackTitle: 'Une stack éprouvée en production.',
    stackLead: (t, f) => `${t} technologies, ${f} familles — du langage à l’orchestration.`,
    filterAll: 'Tout',
    filterAria: 'Filtrer les compétences',
    contactEyebrow: '05 / CONTACT',
    contactTitle: 'Parlons de votre prochain système critique.',
    contactLead: 'Tech lead, référent technique, audit Craftsmanship ou DevOps : écrivez-moi.',
    sendEmail: 'Envoyer un e-mail',
    copyEmail: 'Copier l’adresse',
    copied: 'Adresse copiée ✓',
    emailLabel: 'E-MAIL',
    phoneLabel: 'TÉLÉPHONE',
    locationLabel: 'LOCALISATION',
  },
};
