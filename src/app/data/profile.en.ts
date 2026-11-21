// src/app/data/profile.en.ts
import { Bullet, Content, EXPERIENCES, PROFILE, SKILLS, SubPhase } from './profile';

interface ExperienceEn {
  role: string;
  period: string;
  bullets: Bullet[];
  subs?: SubPhase[];
}

const STACK_LABELS: Record<string, string> = {
  'Messaging & stockage': 'Messaging & storage',
  'Infra & déploiement': 'Infra & deployment',
  'Base de données': 'Database',
  Outils: 'Tools',
  'IA & agents': 'AI & agents',
  'Plateforme IA': 'AI platform',
};

const SKILL_LABELS: Record<string, string> = {
  lang: 'Languages',
  jee: 'Java / JEE',
  ai: 'AI',
  web: 'Web',
  db: 'Databases',
  devops: 'DevOps & tooling',
  srv: 'Servers',
  design: 'Design & modelling',
  sys: 'Systems & IDEs',
};

const EXPERIENCES_EN: Record<string, ExperienceEn> = {
  intelcia: {
    role: 'Tech Lead',
    period: 'Aug 2024 – Present',
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
    subs: [
      {
        title: 'Cross-team Tech Lead',
        client: 'SFR',
        bullets: [
          { text: 'Led DevOps assessments across all DOOR activities, covering GitLab CI/CD best practices, deployment automation, code quality, testing, documentation and monitoring.' },
          { text: 'Planned and tracked the DevOps actions defined in the assessment.' },
          { text: 'Set up and improved working methods, giving developers clearer visibility on scoping and on the follow-up of features and user stories.' },
          { text: 'Assessed technical candidates for recruitment, with a focus on Spring Boot, GitLab CI, Kubernetes and Craftsmanship practices (TDD, Clean Code, SOLID, Design Patterns).' },
          { text: 'Prepared Craftsmanship training sessions and workshops, demonstrating best practices on Spring Boot and TDD, and raising awareness of the impact of poor code (technical debt, maintainability, performance, scalability).' },
          { text: 'Reviewed and refactored Selenium code using design patterns (POM & DDT), and set up a dashboard to track automated tests.' },
        ],
      },
      {
        title: 'Tech Lead',
        scope: 'Intelcia Tech internal projects',
        bullets: [
          {
            text: 'Multi-agent AI POCs for internal projects:',
            children: [
              'LLMs integrated into a business workflow driven by a YAML state machine, with human approval at decision points (human-in-the-loop)',
              'Multi-model routing to keep costs under control, with the right model for each step',
              'Prompt engineering and a tooled, step-by-step method',
              'Traceable AI output: every fact sourced with a reliability level, automatic audit of deliverables',
              'Security: access tokens kept in memory only, detection of secrets and personal data, append-only audit log',
            ],
          },
          {
            text: 'Designed and led the architecture of an internal microservices-based solution, as part of the redesign of a critical business process:',
            children: [
              'Built the IT master plan: business domain mapping, bounded contexts (DDD), prioritisation of workstreams and a phased migration roadmap',
              'Documented architecture decisions (service boundaries, reference data consistency, per-domain data model) and presented them to the steering committee',
              'Microservices split by business domain, each service owning its data schema, with shared reference data and no duplication',
              'Contract-first approach: versioned OpenAPI contracts as the source of truth, with server-side interfaces generated from them',
              'Asynchronous event-driven communication (Kafka, outbox pattern) to decouple services and keep exchanges consistent',
              'Change governance: versioned schema migrations (Liquibase), demo datasets and secure purge procedures',
              'Delivery managed in functional increments: backward planning, documented decision points, business rules defined with business teams and validated through business test cases',
              'Scope-based permissions and service-level access control',
              'Architecture and operations documentation for handover to the teams',
            ],
          },
        ],
      },
    ],
  },
  sofrecom: {
    role: 'Tech Lead & Scrum Master',
    period: 'May 2023 – Aug 2024',
    bullets: [
      { text: 'Managed a team of 5 developers: tracked progress, helped unblock issues and ran the Scrum ceremonies.' },
      { text: 'Technical leadership: scoping topics, distributing tasks and growing the team’s skills.' },
      { text: 'Set up a structured documentation tree (technical, functional, operations) to support knowledge sharing and handover.' },
      { text: 'Accountable for code quality: systematic code reviews and follow-up of Sonar findings.' },
      { text: 'Analysed and resolved application performance issues.' },
      { text: 'Production monitoring: tracking indicators, analysing incidents and driving corrective actions.' },
      { text: 'Managed production releases: planning, preparing deliverables, coordinating with operations and post-release follow-up.' },
    ],
  },
  capgemini: {
    role: 'Tech Lead',
    period: 'May 2019 – May 2023',
    bullets: [
      { text: 'Technical leadership of the development team, accountable for technical choices and the quality of deliverables.' },
      { text: 'Designed complex features and proposed technical solutions to the client.' },
      { text: 'Produced high-level estimates, workload and delivery date forecasts.' },
      { text: 'Coached developers and ran systematic code reviews to spread best practices.' },
      { text: 'Unblocked the teams on critical technical issues to secure deliveries.' },
    ],
    subs: [
      {
        title: 'Lead Full Stack Developer',
        client: 'Europcar',
        bullets: [
          { text: 'Full stack development (Java / Spring Boot, Angular), working autonomously on complex features from design to delivery.' },
          { text: 'Onboarded newcomers onto the functional and technical scope.' },
          { text: 'Ran peer programming sessions and technical workshops within the team.' },
          { text: 'Documented technical and functional topics to support knowledge sharing and handover.' },
        ],
      },
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
  bestcallshop: {
    role: 'IS Consultant · Java Analyst Developer',
    period: 'Jun 2014 – Jun 2017',
    bullets: [
      { text: 'Developed J2EE intranets and web applications, including new modules for an existing intranet.' },
      { text: 'Technology selection and workload estimation, and took part in functional and technical testing and in deployments.' },
      { text: 'Resolved server-side malfunctions and implemented solutions to improve software quality.' },
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
    { key: 'methods', value: 'SCRUM · SAFe · PMP' },
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
    journeyTabsAria: 'Experiences',
    journeyHint: '← → to switch branch',
    journeyPrev: 'Previous experience',
    journeyNext: 'Next experience',
    phasePrev: 'Previous phase',
    phaseNext: 'Next phase',
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
  },
};
