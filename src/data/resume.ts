import { withBasePath } from "@/lib/paths";

export const siteConfig = {
  name: "Prajyoth Thungathurthi",
  title: "Senior Software Engineer",
  location: "Dublin, CA",
  email: "prajyoth2211@gmail.com",
  phone: "+1 (415) 997-7971",
  linkedin: "https://linkedin.com/in/prajyoth-t",
  github: "https://github.com/prajyoth2211",
  resumePdfPath: withBasePath("/resume.pdf"),
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://prajyoth2211.github.io/resume-portfolio",
};

export const hero = {
  summary:
    "Senior Software Engineer with 7 years building enterprise Angular, Spring Boot, and TypeScript platforms across healthcare, pharmaceutical research, and supply chain. I ship full-stack features—from authentication and real-time collaboration to search dashboards and regulated document workflows—working closely with business users and cross-functional teams.",
};

export const about = {
  paragraphs: [
    "I build software where reliability, compliance, and user experience all matter. My recent work at Genentech centers on vivarium and IACUC protocol platforms used in pharmaceutical research—PDF generation for regulated documents, OpenSearch dashboards, JWT and OAuth SSO, and real-time collaboration for concurrent editing.",
    "Before that, I led front-end development for Apple supply chain applications and delivered patient-facing experiences at Kaiser Permanente. Across roles, I focus on scalable architecture, clear ownership, and shipping features that hold up in production.",
    "I enjoy owning problems end to end: scoping with stakeholders, designing APIs and UI flows, hardening auth and observability, and mentoring through code review and test coverage. I am currently pursuing a Ph.D. in Information Technology while continuing to deliver production-grade enterprise software.",
  ],
  strengths: [
    "Full-stack platform engineering",
    "Enterprise authentication & SSO",
    "Regulated document workflows",
    "Search & data-heavy dashboards",
    "Cross-functional delivery",
  ],
};

export type Experience = {
  company: string;
  role: string;
  location: string;
  start: string;
  end: string;
  bullets: string[];
  technologies: string[];
};

export const experience: Experience[] = [
  {
    company: "Genentech",
    role: "Senior Software Engineer",
    location: "South San Francisco, CA",
    start: "Feb 2025",
    end: "Present",
    bullets: [
      "Architected a PDF generation pipeline for regulated IACUC protocol documents using jsPDF, covering 14 protocol form types, version comparison, and bulk exports.",
      "Built end-to-end animal ordering workflows across Angular 19 and Spring Boot, supporting multiple order types and lifecycle states for vivarium operations.",
      "Designed OpenSearch-powered dashboards with advanced filtering, sorting, wildcard search, date ranges, and saved user views.",
      "Owned JWT authentication infrastructure—HTTP interceptors, automatic token refresh, Janus OAuth SSO, and role-based route guards across enterprise apps.",
      "Led Keycloak-to-Janus OAuth2 migration for legacy APG applications, resolving redirect loops and configuring multi-environment auth flows.",
      "Implemented WebSocket-based real-time collaboration for concurrent protocol editing with authenticated presence tracking.",
      "Integrated AI-assisted protocol authoring via contextual side-panel plugins and cross-application communication patterns.",
      "Delivered protocol audit trails and side-by-side version comparison for compliance review workflows.",
      "Authored 179 unit tests to support Angular upgrade readiness across critical infrastructure components.",
      "Integrated Datadog RUM and improved production build stability for fonts, icons, and asset pipelines.",
    ],
    technologies: [
      "Angular 19",
      "Spring Boot 3",
      "TypeScript",
      "OpenSearch",
      "PostgreSQL",
      "jsPDF",
      "WebSockets",
      "JWT",
      "OAuth2",
      "Datadog",
    ],
  },
  {
    company: "Apple Inc.",
    role: "Senior Front-End Engineer",
    location: "Sunnyvale, CA",
    start: "Jul 2022",
    end: "Feb 2025",
    bullets: [
      "Led front-end development for supply chain applications on Angular 15 and 13, delivering scalable single-page experiences.",
      "Built enterprise dashboards visualizing Apple product supply chain operations for internal stakeholders.",
      "Implemented data-heavy grids and charts with AG-Grid and Highcharts for operational reporting.",
      "Created reusable Angular modules and components to improve maintainability and future framework upgrades.",
      "Partnered with offshore and cross-functional teams to deliver milestones on schedule.",
    ],
    technologies: [
      "Angular 15",
      "TypeScript",
      "AG-Grid",
      "Highcharts",
      "RxJS",
      "SCSS",
    ],
  },
  {
    company: "Kaiser Permanente",
    role: "Front-End Developer",
    location: "Pleasanton, CA",
    start: "Jan 2021",
    end: "Jun 2022",
    bullets: [
      "Developed Angular and React components for patient–doctor interaction platforms.",
      "Built reusable TypeScript components and integrated REST APIs within Angular architecture.",
      "Improved navigation flows, wireframes, and responsive UI for clinical user experiences.",
      "Debugged and deployed applications via JIRA and WebSphere with cross-browser compatibility.",
    ],
    technologies: ["Angular", "React", "TypeScript", "REST APIs", "HTML5", "CSS3"],
  },
  {
    company: "CooperVision",
    role: "Web Developer",
    location: "West Henrietta, NY",
    start: "May 2020",
    end: "Oct 2020",
    bullets: [
      "Built responsive admin portals with Angular 9, Bootstrap, and PrimeNG.",
      "Developed Express.js and Node.js APIs for faster, more reliable data retrieval.",
      "Implemented server-side scripting and asynchronous operations in Node.js.",
    ],
    technologies: ["Angular 9", "Bootstrap", "PrimeNG", "Node.js", "Express.js"],
  },
  {
    company: "American Express",
    role: "UI/Web Developer",
    location: "Phoenix, AZ",
    start: "May 2019",
    end: "May 2020",
    bullets: [
      "Migrated enterprise applications from Polymer 1 to Polymer 3 using TypeScript and Lit Elements.",
      "Developed searchable employee hierarchy components and analytics dashboards.",
      "Collaborated with API and data science teams on high-quality enterprise deliverables.",
    ],
    technologies: ["Polymer 3", "TypeScript", "Lit Elements", "JavaScript"],
  },
];

export type Project = {
  title: string;
  problem: string;
  solution: string;
  impact: string;
  technologies: string[];
  links?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    title: "Regulated IACUC Protocol PDF Pipeline",
    problem:
      "Research teams needed compliant PDF exports across many protocol form types, with version comparison for audits.",
    solution:
      "Designed a jsPDF-based generation pipeline supporting 14 form types, bulk exports, and side-by-side version comparison integrated with Angular workflows.",
    impact:
      "Streamlined compliance review and reduced manual document assembly for vivarium and protocol stakeholders.",
    technologies: ["Angular 19", "jsPDF", "Spring Boot", "TypeScript"],
  },
  {
    title: "OpenSearch Enterprise Dashboards",
    problem:
      "Operations users needed fast, flexible search over large protocol and ordering datasets with saved views.",
    solution:
      "Built dashboard experiences with wildcard search, advanced filters, sorting, date ranges, and custom user views on OpenSearch.",
    impact:
      "Improved discoverability and decision speed for research and operations teams managing high-volume data.",
    technologies: ["OpenSearch", "Angular", "TypeScript", "PostgreSQL"],
  },
  {
    title: "Enterprise Auth & SSO Platform",
    problem:
      "Multiple Angular apps required consistent JWT handling, token refresh, and migration from legacy Keycloak flows.",
    solution:
      "Owned interceptors, route guards, Janus OAuth SSO integration, and led Keycloak-to-Janus migration across environments.",
    impact:
      "Resolved redirect loops, stabilized logins, and standardized authentication across enterprise applications.",
    technologies: ["JWT", "OAuth2", "Janus", "Angular", "HTTP Interceptors"],
  },
  {
    title: "Real-Time Protocol Collaboration",
    problem:
      "Teams editing protocols concurrently needed live presence and conflict-aware collaboration.",
    solution:
      "Implemented WebSocket-based real-time editing with authenticated user presence and host-app integration patterns.",
    impact:
      "Enabled safer concurrent editing and faster turnaround on protocol reviews.",
    technologies: ["WebSockets", "Angular", "Spring Boot", "Authentication"],
  },
  {
    title: "Apple Supply Chain Dashboards",
    problem:
      "Internal teams needed clear visibility into product supply chain operations at scale.",
    solution:
      "Delivered Angular dashboards with AG-Grid and Highcharts, reusable modules, and scalable SPA architecture.",
    impact:
      "Supported operational reporting and cross-team coordination for supply chain stakeholders.",
    technologies: ["Angular 15", "AG-Grid", "Highcharts", "TypeScript"],
  },
  {
    title: "AI-Assisted Protocol Authoring",
    problem:
      "Authors needed contextual AI suggestions without leaving regulated protocol workflows.",
    solution:
      "Integrated AI-assisted authoring plugins with Angular host apps via localStorage context passing and side-panel UX.",
    impact:
      "Accelerated drafting while keeping users inside compliant, auditable application flows.",
    technologies: ["Angular", "TypeScript", "Plugin Integration", "AI Workflows"],
  },
];

export const skills = {
  frontend: [
    "Angular 19+",
    "TypeScript",
    "RxJS",
    "Reactive Forms",
    "React.js",
    "Next.js 14",
    "HTML5",
    "CSS3/SCSS",
    "Angular CDK",
    "D3.js",
    "AG-Grid",
  ],
  backend: [
    "Java 21",
    "Spring Boot 3",
    "Node.js",
    "Express.js",
    "REST APIs",
    "OpenAPI",
    "Flyway",
  ],
  cloudDevOps: [
    "GitLab CI/CD",
    "Docker",
    "Kubernetes",
    "Datadog RUM",
    "Feature Flags",
    "WebSockets",
  ],
  databases: ["PostgreSQL", "OpenSearch", "MongoDB"],
  tools: ["Git", "JIRA", "Jest", "Playwright", "Agile", "Microservices"],
  aiAutomation: [
    "AI Plugin Integration",
    "PDF Generation",
    "Enterprise Dashboard Architecture",
  ],
};

export const education = [
  {
    degree: "Ph.D. in Information Technology (In Progress)",
    school: "University of the Cumberlands",
    period: "Present",
  },
  {
    degree: "M.S. in Computer Science",
    school: "Northwestern Polytechnic University",
    period: "2015 – 2016",
  },
  {
    degree: "B.S. in Computer Science Engineering",
    school: "Guru Nanak Institutions, JNTUH",
    period: "2011 – 2015",
  },
];

export const highlights = [
  "628+ commits across Angular, Spring Boot, OpenSearch, PostgreSQL, and CI/CD repositories.",
  "Enterprise PDF rendering and protocol comparison for compliance-sensitive workflows.",
  "Authentication migrations and SSO integrations across multiple Angular applications.",
  "Modernization of vivarium and protocol management platforms for pharmaceutical research.",
  "Scoped strategy for migrating legacy Oracle and Java Swing systems to Angular + Spring Boot.",
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
