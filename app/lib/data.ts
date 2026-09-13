export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export const skills = [
  // Frontend
  { name: "HTML5", category: "Frontend" },
  { name: "CSS3", category: "Frontend" },
  { name: "JavaScript", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Redux", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Bootstrap", category: "Frontend" },
  { name: "SASS / SCSS", category: "Frontend" },
  { name: "Framer Motion", category: "Frontend" },
  { name: "GSAP", category: "Frontend" },
  { name: "Three.js", category: "Frontend" },
  { name: "React Query", category: "Frontend" },
  { name: "Zustand", category: "Frontend" },
  { name: "Vite", category: "Frontend" },
  { name: "Webpack", category: "Frontend" },
  { name: "Responsive Design", category: "Frontend" },
  // Backend
  { name: "Node.js", category: "Backend" },
  { name: "Express.js", category: "Backend" },
  { name: "NestJS", category: "Backend" },
  { name: "REST APIs", category: "Backend" },
  { name: "GraphQL", category: "Backend" },
  { name: "Socket.IO", category: "Backend" },
  { name: "JWT Auth", category: "Backend" },
  { name: "OAuth 2.0", category: "Backend" },
  { name: "Prisma ORM", category: "Backend" },
  { name: "Mongoose", category: "Backend" },
  { name: "Python", category: "Backend" },
  { name: "FastAPI", category: "Backend" },
  { name: "WebSockets", category: "Backend" },
  { name: "Microservices", category: "Backend" },
  { name: "Serverless", category: "Backend" },
  // Database
  { name: "MongoDB", category: "Database" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MySQL", category: "Database" },
  { name: "SQLite", category: "Database" },
  { name: "Oracle DB", category: "Database" },
  { name: "Redis", category: "Database" },
  { name: "Neon", category: "Database" },
  { name: "Pinecone", category: "Database" },
  { name: "Supabase", category: "Database" },
  { name: "Firebase", category: "Database" },
  { name: "PlanetScale", category: "Database" },
  // DevOps & Cloud
  { name: "Linux", category: "DevOps" },
  { name: "Docker", category: "DevOps" },
  { name: "Kubernetes", category: "DevOps" },
  { name: "Jenkins", category: "DevOps" },
  { name: "GitHub Actions", category: "DevOps" },
  { name: "Terraform", category: "DevOps" },
  { name: "Ansible", category: "DevOps" },
  { name: "AWS EC2", category: "DevOps" },
  { name: "AWS S3", category: "DevOps" },
  { name: "AWS Lambda", category: "DevOps" },
  { name: "AWS RDS", category: "DevOps" },
  { name: "Azure", category: "DevOps" },
  { name: "Nginx", category: "DevOps" },
  { name: "CI/CD Pipelines", category: "DevOps" },
  { name: "Prometheus", category: "DevOps" },
  { name: "Grafana", category: "DevOps" },
  { name: "Git", category: "DevOps" },
  { name: "Vercel", category: "DevOps" },
  { name: "Railway", category: "DevOps" },
  { name: "Render", category: "DevOps" },
];

export const skillCategories = ["Frontend", "Backend", "Database", "DevOps"] as const;

export type SkillCategory = (typeof skillCategories)[number];


export interface Project {
  id: number;
  name: string;
  description: string;
  longDescription: string;
  category: "Full Stack" | "Frontend";
  technologies: string[];
  github: string;
  live: string;
  featured: boolean;
  gradient: string;
}

export const projects: Project[] = [
  {
    id: 1,
    name: "Pingly",
    description: "Real-time chat application with WebSocket architecture, authentication, and live messaging.",
    longDescription:
      "Pingly is a full-stack real-time messaging platform built with Next.js, Node.js, MongoDB, and Socket.IO. It features user authentication, live message delivery, online presence indicators, and a clean chat interface. Deployed on AWS EC2 with a scalable backend architecture.",
    category: "Full Stack",
    technologies: ["Next.js", "Node.js", "MongoDB", "Socket.IO"],
    github: "https://github.com/NaveedLatiff/Pingly",
    live: "",
    featured: true,
    gradient: "from-emerald-500/20 to-cyan-500/20",
  },
  {
    id: 2,
    name: "Jobify",
    description: "Full-stack job tracking platform for managing applications, statuses, and career pipelines.",
    longDescription:
      "Jobify is a productivity-focused full-stack web application built with Next.js, Node.js, and PostgreSQL. It helps users track job applications through a visual pipeline, manage statuses, add notes, and monitor application progress. Deployed on AWS.",
    category: "Full Stack",
    technologies: ["Next.js", "Node.js", "PostgreSQL"],
    github: "https://github.com/NaveedLatiff/Jobify",
    live: "",
    featured: false,
    gradient: "from-violet-500/20 to-purple-500/20",
  },
  {
    id: 3,
    name: "Works.Studio",
    description: "High-fidelity creative agency landing page with cinematic GSAP scroll animations.",
    longDescription:
      "Works.Studio is a visually striking creative agency website built with pure HTML, CSS, JavaScript, and GSAP. It features cinematic scroll-triggered animations, smooth transitions, custom cursor behavior, and a premium editorial layout. Demonstrates mastery of advanced CSS and animation techniques.",
    category: "Frontend",
    technologies: ["HTML", "CSS", "JavaScript", "GSAP"],
    github: "https://github.com/NaveedLatiff/Works.Studio",
    live: "https://workstudionaveed.netlify.app/",
    featured: false,
    gradient: "from-amber-500/20 to-orange-500/20",
  },
  {
    id: 4,
    name: "K27.Ca",
    description: "Modern business website with fluid GSAP animations and Next.js performance optimization.",
    longDescription:
      "K27.Ca is a professional business website built using Next.js, Tailwind CSS, and GSAP. It demonstrates modern web design sensibilities with smooth scroll animations, optimized performance, and a polished responsive layout.",
    category: "Frontend",
    technologies: ["Next.js", "Tailwind CSS", "GSAP"],
    github: "https://github.com/NaveedLatiff/K27.ca",
    live: "https://k72ca.netlify.app/",
    featured: false,
    gradient: "from-blue-500/20 to-indigo-500/20",
  },
  {
    id: 5,
    name: "GTA VI Website",
    description: "Immersive React recreation of the GTA VI promotional site with cinematic GSAP sequences.",
    longDescription:
      "A meticulously crafted React recreation of the GTA VI promotional website featuring cinematic scroll sequences, GSAP-powered animations, and a visually immersive experience. Built with React, Tailwind CSS, and GSAP.",
    category: "Frontend",
    technologies: ["React", "Tailwind CSS", "GSAP"],
    github: "https://github.com/NaveedLatiff/GTA-VI-Website",
    live: "https://naveed-gta.netlify.app/",
    featured: false,
    gradient: "from-red-500/20 to-pink-500/20",
  },
  {
    id: 6,
    name: "ShopWise",
    description: "E-commerce storefront with Redux state management, cart system, and product filtering.",
    longDescription:
      "ShopWise is a feature-complete e-commerce React application with Redux for global state management, a functional shopping cart, product filtering, and a polished UI built with Tailwind CSS.",
    category: "Frontend",
    technologies: ["React", "Tailwind CSS", "Redux"],
    github: "https://github.com/NaveedLatiff/ShopWise",
    live: "https://shopwise-naveed.netlify.app/",
    featured: false,
    gradient: "from-teal-500/20 to-green-500/20",
  },
  {
    id: 7,
    name: "3D Model Viewer",
    description: "Interactive 3D model viewer powered by Three.js with real-time lighting and camera controls.",
    longDescription:
      "An interactive browser-based 3D model viewer built with vanilla JavaScript and Three.js. It features real-time lighting controls, camera orbit controls, and a sleek dark UI. Demonstrates low-level WebGL and Three.js mastery.",
    category: "Frontend",
    technologies: ["HTML", "CSS", "JavaScript", "Three.js"],
    github: "https://github.com/NaveedLatiff/Project-Using-Three.js",
    live: "https://naveed-three.netlify.app/",
    featured: false,
    gradient: "from-sky-500/20 to-cyan-500/20",
  },
];

export const services = [
  {
    number: "01",
    title: "Website Development",
    description:
      "Engineering modern, responsive, and high-performance websites and full-stack web applications with clean architecture, fluid interactions, and rock-solid code quality.",
  },
  {
    number: "02",
    title: "Database Architecture",
    description:
      "Designing scalable data models, relational and NoSQL database schemas, high-throughput query optimization, caching layers, and performant data pipelines.",
  },
  {
    number: "03",
    title: "DevOps & Cloud Deployment",
    description:
      "Constructing resilient CI/CD pipelines, container orchestration with Docker and Kubernetes, automated cloud infrastructure on AWS, and zero-downtime production deployments.",
  },
  {
    number: "04",
    title: "Agentic AI",
    description:
      "Architecting autonomous AI agents, multi-agent collaboration workflows, intelligent LLM tool integrations, and customized automation systems to solve complex business problems.",
  },
];

export const journeyItems = [
  {
    year: "2021",
    title: "The Spark",
    description:
      "Started my journey into software development with HTML, CSS, and JavaScript. Built my first web pages and fell in love with the craft of making things on the web.",
    type: "milestone",
  },
  {
    year: "2022",
    title: "Going Deeper",
    description:
      "Progressed into React, Node.js, and the MERN stack. Started building full-stack applications and exploring database design with MongoDB and MySQL.",
    type: "milestone",
  },
  {
    year: "2023",
    title: "Expanding Horizons",
    description:
      "Mastered interactive animation libraries including GSAP, Framer Motion, and Three.js, crafting visually engaging interfaces and high-performance interactive experiences.",
    type: "milestone",
  },
  {
    year: "2024",
    title: "Production & Scale",
    description:
      "Adopted DevOps engineering with Docker, Kubernetes, AWS, and CI/CD pipelines, deploying full-stack web applications like Pingly and Jobify to live production.",
    type: "milestone",
  },
  {
    year: "2025",
    title: "Mastering the Stack",
    description:
      "Deepened expertise in Next.js, TypeScript, NestJS, and PostgreSQL. Focused on system architecture, scalability patterns, and building production-grade applications.",
    type: "milestone",
  },
  {
    year: "2026",
    title: "Today",
    description:
      "Full-Stack Engineer specializing in MERN stack, DevOps, and creative frontend development. Building modern web applications and always exploring what comes next.",
    type: "current",
  },
];
