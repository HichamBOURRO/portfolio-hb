// src/app/data/profile.en.ts
import { Bullet, Content, EXPERIENCES, PROFILE, SKILLS } from './profile';

interface ExperienceEn {
  role: string;
  period: string;
  bullets: Bullet[];
}

const STACK_LABELS: Record<string, string> = {
  'Messaging & stockage': 'Messaging & storage',
  'Infra & déploiement': 'Infra & deployment',
  'Base de données': 'Database',
  Outils: 'Tools',
};

const SKILL_LABELS: Record<string, string> = {
  lang: 'Languages',
  jee: 'Java / JEE',
  web: 'Web',
  db: 'Databases',
  devops: 'DevOps & tooling',
  srv: 'Servers',
  design: 'Design & modelling',
  sys: 'Systems & IDEs',
};

const EXPERIENCES_EN: Record<string, ExperienceEn> = {
  'intelcia-2025': {
    role: 'Tech Lead',
    period: 'Dec 2025 – Present',
    bullets: [
      { text: 'Corrective and evolutionary maintenance of a critical FTTH information system made up of several applications.' },
      { text: 'Design and development of bulk document extraction, with ZIP generation, export tracking, download and a monitoring UI.' },
      {
        text: 'Enhancements to inter-operator flows:',
        children: [
          'Flow generation and integration, with failure (KO) detection',
          'Switchover of AXIONE flows and support for EXTU flows',
          'Support for the upgraded flow version',
        ],
      },
      { text: 'Enhancements to the web services exchanged with partner SSAs.' },
      { text: 'Analysis and resolution of production incidents.' },
      { text: 'Configuration hardening: removal of production secrets from non-production environments.' },
      { text: 'Application portability study.' },
      { text: 'Code review, richer logging and observability, versioning of hotfixes.' },
    ],
  },
  'intelcia-2024': {
    role: 'Tech Lead',
    period: 'Aug 2024 – Jul 2025',
    bullets: [
      { text: 'Led DevOps assessments across all DOOR activities, covering GitLab CI/CD best practices, deployment automation, code quality, testing, documentation and monitoring.' },
      { text: 'Planned and tracked the DevOps actions defined in the assessment.' },
      { text: 'Set up and improved working methods, giving developers clearer visibility on scoping and on the follow-up of features and user stories.' },
      { text: 'Assessed technical candidates for recruitment, with a focus on Spring Boot, GitLab CI, Kubernetes and Craftsmanship practices (TDD, Clean Code, SOLID, Design Patterns).' },
      { text: 'Prepared Craftsmanship training sessions and workshops, demonstrating best practices on Spring Boot and TDD, and raising awareness of the impact of poor code (technical debt, maintainability, performance, scalability).' },
      { text: 'Reviewed and refactored Selenium code using design patterns (POM & DDT), and set up a dashboard to track automated tests.' },
    ],
  },
  sofrecom: {
    role: 'Tech Lead & Scrum Master',
    period: 'May 2023 – Aug 2024',
    bullets: [
      { text: 'Managed a team of 5 developers: tracked each person’s progress, helped unblock issues, and ran the SCRUM meetings and ceremonies.' },
      { text: 'Ensured code quality through code reviews and follow-up of Sonar findings.' },
      { text: 'Prepared production releases.' },
    ],
  },
  capgemini: {
    role: 'Lead Software Engineer',
    period: 'May 2019 – May 2023',
    bullets: [
      { text: 'Technical design and solution proposals for the client.' },
      { text: 'Supported the team in developing the solutions.' },
      { text: 'Produced high-level estimates and delivery date forecasts.' },
      { text: 'Application development and code review.' },
    ],
  },
  sitel: {
    role: 'Software Engineer · Analyst Developer',
    period: 'Jul 2017 – Apr 2019',
    bullets: [
      { text: 'Application development and planning of technical and functional tests.' },
      { text: 'Wrote specifications and estimated workloads.' },
      { text: 'Contributed to the specification of functional requirements.' },
      { text: 'Handled technical incidents.' },
    ],
  },
  freelance: {
    role: 'Java Analyst Developer',
    period: 'Aug 2016 – Jun 2017',
    bullets: [
      { text: 'Development of intranets and web applications.' },
      { text: 'Technology selection and workload estimation.' },
      { text: 'Took part in functional and technical testing and in deployments.' },
    ],
  },
  bestcallshop: {
    role: 'IS Consultant',
    period: 'Jun 2014 – Jun 2016',
    bullets: [
      { text: 'Developed new modules for a J2EE intranet.' },
      { text: 'Resolved server-side malfunctions.' },
      { text: 'Implemented new solutions to improve software quality.' },
      { text: 'Took part in migrating applications to Java technologies.' },
    ],
  },
};

export const EN: Content = {
  profile: {
    ...PROFILE,
    title: 'Technical Lead · Software Engineer Lead',
    status: 'Tech Lead · Intelcia Tech — client: SFR',
    pitch:
      'Java / Spring Tech Lead with over 10 years of experience designing, building and maintaining critical applications (telecom, transport, banking). Team leadership, code review, Craftsmanship and DevOps best practices.',
    location: 'Casablanca Ain Sebaa – 20250 – Morocco',
    city: 'Casablanca, Morocco',
    education: {
      degree: 'Master’s degree (Master 2)',
      field: 'Computer Science Methods Applied to Business Management',
      school: 'ESG Maroc, Casablanca',
      period: '2007 – 2011',
    },
  },
  terminal: [
    { key: 'role', value: 'Technical Lead · Tech Lead' },
    { key: 'stack', value: '[Java, Spring Boot, Angular, Kubernetes]' },
    { key: 'sectors', value: 'telecom · transport · banking' },
    { key: 'methods', value: 'SCRUM · PMP · ITIL' },
    { key: 'base', value: 'Casablanca, Morocco' },
  ],
  stats: [
    { value: '10+', label: 'years of experience', detail: 'Critical Java / Spring applications' },
    { value: '4', label: 'major accounts', detail: 'SFR · Orange · SNCF · Europcar' },
    { value: '3', label: 'industries', detail: 'Telecom · Transport · Banking' },
    { value: '5', label: 'developers managed', detail: 'Tech Lead & Scrum Master' },
  ],
  principles: [
    {
      title: 'Technical leadership & team management',
      text: 'Leading development teams, running Scrum ceremonies, helping developers through blockers and assessing technical candidates for recruitment.',
      tags: ['Tech Lead', 'Scrum Master', 'Recruitment'],
    },
    {
      title: 'Code review & Craftsmanship',
      text: 'Systematic code reviews, Craftsmanship training and workshops, raising awareness of technical debt, maintainability and scalability.',
      tags: ['TDD', 'Clean Code', 'SOLID', 'Design Patterns'],
    },
    {
      title: 'DevOps assessments & software quality',
      text: 'Running DevOps assessments, GitLab CI/CD best practices, deployment automation, code quality, testing, documentation and monitoring.',
      tags: ['GitLab CI/CD', 'Kubernetes', 'Sonar', 'Observability'],
    },
  ],
  experiences: EXPERIENCES.map((xp) => ({
    ...xp,
    ...EXPERIENCES_EN[xp.id],
    stack: xp.stack.map((group) => ({ ...group, label: STACK_LABELS[group.label] ?? group.label })),
  })),
  skills: SKILLS.map((cat) => ({ ...cat, label: SKILL_LABELS[cat.id] ?? cat.label })),
  ui: {
    nav: [
      { id: 'profil', label: 'Profile' },
      { id: 'expertise', label: 'Expertise' },
      { id: 'parcours', label: 'Experience' },
      { id: 'stack', label: 'Stack' },
      { id: 'contact', label: 'Contact' },
    ],
    themeLight: 'Switch to light theme',
    themeDark: 'Switch to dark theme',
    switchLang: 'Passer en français',
    langLabel: 'FR',
    menu: 'Menu',
    logoAlt: 'Logo Hicham',
    ctaJourney: 'View experience',
    ctaContact: 'Get in touch',
    ctaCv: 'Download résumé (FR) ↓',
    terminalAria: 'Professional identity card in terminal format',
    expertiseEyebrow: '02 / KNOW-HOW',
    expertiseTitle: 'Leading without leaving the code.',
    expertiseLead: 'Three pillars that shape my role as technical lead on critical systems.',
    education: 'EDUCATION',
    methods: 'METHODS & CERTIFICATIONS',
    journeyEyebrow: '03 / EXPERIENCE',
    journeyTitle: 'Over ten years on critical applications.',
    journeyLead: 'From J2EE development to technical leadership for SFR, Orange, SNCF and Europcar.',
    current: 'current',
    client: 'Client',
    techEnv: 'Technical environment',
    stackEyebrow: '04 / STACK',
    stackTitle: 'A production-proven stack.',
    stackLead: (t, f) => `${t} technologies, ${f} families — from language to orchestration.`,
    filterAll: 'All',
    filterAria: 'Filter skills',
    contactEyebrow: '05 / CONTACT',
    contactTitle: 'Let’s talk about your next critical system.',
    contactLead: 'Tech lead, technical authority, Craftsmanship or DevOps audit: drop me a line.',
    sendEmail: 'Send an e-mail',
    copyEmail: 'Copy address',
    copied: 'Address copied ✓',
    emailLabel: 'E-MAIL',
    phoneLabel: 'PHONE',
    locationLabel: 'LOCATION',
    builtWith: 'Built with Angular',
  },
};
