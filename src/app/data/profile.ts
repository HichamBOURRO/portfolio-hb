// src/app/data/profile.ts
export interface Bullet {
  text: string;
  children?: string[];
}

export interface StackGroup {
  label: string;
  items: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  client?: string;
  period: string;
  current?: boolean;
  bullets: Bullet[];
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
  education: {
    degree: 'Master 2',
    field: 'Méthodes Informatiques Appliquées à la Gestion des Entreprises',
    school: 'ESG Maroc, Casablanca',
    period: '2007 – 2011',
  },
  methods: ['SCRUM', 'PMP', 'ITIL'],
};

export const TERMINAL: { key: string; value: string }[] = [
  { key: 'rôle', value: 'Référent Technique · Tech Lead' },
  { key: 'stack', value: '[Java, Spring Boot, Angular, Kubernetes]' },
  { key: 'secteurs', value: 'télécoms · transport · banque' },
  { key: 'méthodes', value: 'SCRUM · PMP · ITIL' },
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
    id: 'intelcia-2025',
    role: 'Tech Lead',
    company: 'Intelcia Tech',
    client: 'SFR',
    period: 'Déc. 2025 – Aujourd’hui',
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
    stack: [
      { label: 'Back End', items: ['Java 8/11/21', 'Java EE', 'Spring', 'Spring Boot', 'Hibernate/JPA', 'Apache CXF (SOAP/REST)', 'API REST', 'Camunda'] },
      { label: 'Front End', items: ['JSF', 'RichFaces', 'Seam'] },
      { label: 'Messaging & stockage', items: ['Kafka', 'RabbitMQ', 'MinIO (GED)', 'MongoDB'] },
      { label: 'Infra & déploiement', items: ['Docker', 'Kubernetes', 'Helm', 'GitLab CI'] },
      { label: 'Monitoring', items: ['Prometheus', 'Grafana'] },
      { label: 'Base de données', items: ['Oracle', 'Liquibase'] },
    ],
  },
  {
    id: 'intelcia-2024',
    role: 'Tech Lead',
    company: 'Intelcia Tech',
    client: 'SFR',
    period: 'Août 2024 – Juil. 2025',
    bullets: [
      { text: 'Conduite d’assessments DevOps pour toutes les activités DOOR, en intégrant les bonnes pratiques sur GitLab CI/CD et l’automatisation des déploiements, qualité de code, testing, documentation et supervision.' },
      { text: 'Planification et suivi des actions DevOps définies dans l’assessment.' },
      { text: 'Mise en place et amélioration des méthodologies de travail : garantir une meilleure vision pour les développeurs sur les cadrages et le suivi des features et US mises en place.' },
      { text: 'Évaluation des profils techniques pour le recrutement, avec un accent sur Spring Boot, GitLab CI, Kubernetes et les pratiques Craftsmanship (TDD, Clean Code, SOLID, Design Patterns).' },
      { text: 'Préparation de formations et d’ateliers Craftsmanship, avec démonstration de bonnes pratiques sur Spring Boot, TDD, et sensibilisation sur les impacts d’un mauvais code (dette technique, maintenabilité, performance, évolutivité).' },
      { text: 'Revue et refactorisation des codes Selenium à base de design pattern (POM & DDT), mise en place d’un dashboard de suivi des tests automatisés.' },
    ],
    stack: [
      { label: 'Back End', items: ['Java JEE', 'Spring', 'Hibernate', 'JPA', 'API REST', 'Spring Boot', 'Spring Batch'] },
      { label: 'Front End', items: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Bootstrap'] },
      { label: 'Infra & déploiement', items: ['Kubernetes', 'Docker'] },
      { label: 'Base de données', items: ['MySQL', 'PostgreSQL'] },
      { label: 'Outils', items: ['Maven', 'GitLab CI/CD', 'Git', 'IntelliJ', 'Jira', 'Sonar'] },
    ],
  },
  {
    id: 'sofrecom',
    role: 'Tech Lead & Scrum Master',
    company: 'SOFRECOM',
    client: 'Orange',
    period: 'Mai 2023 – Août 2024',
    bullets: [
      { text: 'Gérer une équipe de 5 développeurs, suivre les avancements de chacun, accompagner les devs sur les points de blocage et animer les différentes réunions et cérémonies SCRUM.' },
      { text: 'Garantir une bonne qualité du code, faire les revues de code et le suivi des remontées Sonar.' },
      { text: 'Préparation des mises en production.' },
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
    role: 'Lead Software Engineer',
    company: 'Capgemini',
    client: 'SNCF / Europcar',
    period: 'Mai 2019 – Mai 2023',
    bullets: [
      { text: 'Conceptions techniques et propositions de solutions pour le client.' },
      { text: 'Accompagnement de l’équipe sur les développements des solutions.' },
      { text: 'Réalisation de macro-chiffrages et estimation des dates de livraison.' },
      { text: 'Développement d’applications et revue de code.' },
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
    id: 'freelance',
    role: 'Analyste développeur Java',
    company: 'Freelance',
    period: 'Août 2016 – Juin 2017',
    bullets: [
      { text: 'Développement d’intranets et d’applications web.' },
      { text: 'Spécification des technologies et estimation des charges.' },
      { text: 'Participation aux tests fonctionnels et techniques et aux implémentations.' },
    ],
    stack: [
      { label: 'Back End', items: ['J2EE', 'Struts 2', 'Spring', 'iBatis'] },
      { label: 'Front End', items: ['JSP', 'Thymeleaf', 'JavaScript', 'HTML', 'CSS', 'Bootstrap'] },
      { label: 'Base de données', items: ['MySQL'] },
      { label: 'Outils', items: ['Maven', 'Eclipse', 'Sonar'] },
    ],
  },
  {
    id: 'bestcallshop',
    role: 'Consultant SI',
    company: 'BestCallShop',
    period: 'Juin 2014 – Juin 2016',
    bullets: [
      { text: 'Développement de nouveaux modules sur un intranet développé en J2EE.' },
      { text: 'Résolution des problèmes de dysfonctionnement côté serveur.' },
      { text: 'Mise en œuvre de nouvelles solutions pour améliorer la qualité logicielle.' },
      { text: 'Participation à la migration d’applications vers des technologies Java.' },
    ],
    stack: [
      { label: 'Back End', items: ['J2EE', 'iBatis', 'SQL Server'] },
      { label: 'Front End', items: ['JSP', 'Thymeleaf', 'JavaScript', 'HTML5', 'CSS'] },
      { label: 'Base de données', items: ['MySQL'] },
      { label: 'Outils', items: ['Maven', 'Eclipse', 'Sonar'] },
    ],
  },
];

export const SKILLS: SkillCategory[] = [
  { id: 'lang', label: 'Langages', items: ['Java', 'Kotlin', 'Python', 'SQL / NoSQL', 'T-SQL', 'PL/SQL'] },
  {
    id: 'jee',
    label: 'Java / JEE',
    items: ['Spring MVC', 'Spring Boot', 'Spring Security', 'Spring Batch', 'Hibernate', 'JPA', 'JDBC', 'Web Services', 'Struts', 'JSP', 'JavaFX', 'JUnit'],
  },
  { id: 'web', label: 'Web', items: ['Angular', 'ReactJS', 'HTML', 'CSS', 'JavaScript', 'jQuery', 'ASP.NET'] },
  { id: 'db', label: 'Bases de données', items: ['Oracle', 'MySQL', 'SQL Server', 'PostgreSQL', 'MongoDB'] },
  { id: 'devops', label: 'DevOps & outils', items: ['Git', 'GitLab CI/CD', 'Jenkins', 'Maven', 'SVN', 'Jira', 'Sonar', 'Docker', 'Kubernetes', 'Helm'] },
  { id: 'srv', label: 'Serveurs', items: ['JBoss', 'Tomcat'] },
  { id: 'design', label: 'Conception', items: ['UML / UP', 'Merise'] },
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
  builtWith: string;
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
    builtWith: 'Conçu avec Angular',
  },
};
