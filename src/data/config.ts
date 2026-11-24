import type { TechIconName } from "@/components/tech-icon";

/**
 * All site content lives here.
 * Sources of truth: CVs/CV_Andres_Rodriguez_EN.pdf (wins over the Spanish one) and this file.
 */

export const site = {
  url: "https://afrodriguez.dev",
  name: "Andres Rodriguez",
  fullName: "Andres Felipe Rodriguez Rodriguez",
  role: "Full-Stack Software Developer",
  subtitle: "Java · Spring Boot · React",
  location: "Barrancabermeja, Colombia",
  title: "Andres Rodriguez — Full-Stack Software Developer",
  description:
    "Full-stack software developer building REST APIs with Java and Spring Boot and user interfaces with React.",
  intro:
    "I build REST APIs with Java and Spring Boot and user interfaces with React. I've worked across the full cycle of an enterprise Java system for heavy-machinery management, and I currently deliver freelance web projects for business clients.",
  email: "anferoro2004@gmail.com",
  phone: "+57 301 314 8570",
  github: "https://github.com/andoryupurfire",
  linkedin: "https://www.linkedin.com/in/andres-rodriguez-0134601aa/",
  // `page` is the in-browser viewer route; `pdf` is the file in public/cv/ (copied from CVs/).
  resume: {
    en: { page: "/cv/", pdf: "/cv/Andres_Rodriguez_Software_Developer_EN.pdf" },
    es: { page: "/es/cv/", pdf: "/cv/Andres_Rodriguez_Software_Developer_ES.pdf" },
  },
  keywords: [
    "Andres Rodriguez",
    "Full-Stack Software Developer",
    "Java",
    "Spring Boot",
    "React",
    "REST APIs",
    "Spring Security",
    "JWT",
    "PostgreSQL",
    "Docker",
  ],
};

export type Project = {
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  stack: string[];
  /** Background for the initial-letter icon (used when there is no logo). */
  color: string;
  /** Optional logo path, e.g. "/projects/agroplus.svg". */
  logo?: string;
  demo?: string;
  source?: string;
};

export const projects: Project[] = [
  {
    name: "Agro+",
    tagline: "REST API for an agricultural recommendation platform.",
    description:
      "Agro+ manages crops and their lifecycle for commercial growers in Colombia: farms, plots and crop cycles. I built the backend REST API with JWT authentication and ownership-based access control, so each grower can only reach their own resources. Crop stages advance strictly in sequence, with no skipping or rolling back.",
    highlights: [
      "Spring Security with JWT and BCrypt-hashed passwords.",
      "Centralized error handling with consistent HTTP status codes (403, 404, 409).",
      "PostgreSQL on Supabase, multi-stage Docker build, deployed on Render.",
    ],
    stack: ["Java", "Spring Boot", "Spring Security", "Spring Data JPA", "PostgreSQL", "Docker"],
    color: "#2f6b4f",
    source: "https://github.com/andoryupurfire/agroPlusBackend",
  },
  {
    name: "CasasBCA",
    tagline: "Housing price estimates for Barrancabermeja.",
    description:
      "CasasBCA estimates what a home in Barrancabermeja is worth using a predictive regression model. I built the frontend and UI/UX as part of the team, including the landing page and the property valuation flow. Estimates are generated from the property's details alone, with no sign-up required.",
    highlights: [
      "Frontend and UI/UX of the full application.",
      "Valuation flow that works without an account.",
    ],
    stack: ["React", "Vite", "Tailwind CSS"],
    color: "#a0522d",
    demo: "https://casas.bryan.lat/",
  },
];

export type Experience = {
  role: string;
  company: string;
  type?: string;
  start: string;
  end: string;
  achievements: string[];
};

export const experience: Experience[] = [
  {
    role: "Web Developer",
    company: "SEITEL",
    type: "Freelance",
    start: "Oct 2026",
    end: "Present",
    achievements: [
      "Leading the redesign of the company's WordPress website to showcase its project portfolio and services, with service-based SEO.",
      "Launching and managing the Precios Bajo online store (WooCommerce), with SEO-optimized product descriptions and automated bulk product uploads and updates from Excel.",
    ],
  },
  {
    role: "Software Developer",
    company: "Suministro y Servicios JF SAS",
    start: "Mar 2025",
    end: "Feb 2026",
    achievements: [
      "Built the spare-parts module from scratch for a heavy-machinery management system in Java (MVC), tracking the spare parts associated with each machine.",
      "Developed reporting modules and adjusted the database schema to support new business rules on top of production code.",
    ],
  },
];

/** `icon` is a logo key from src/components/tech-icon.tsx; items without one render as text. */
export type StackItem = { name: string; icon?: TechIconName };

export const stack: { group: string; items: StackItem[] }[] = [
  {
    group: "Languages",
    items: [
      { name: "Java", icon: "java" },
      { name: "JavaScript", icon: "javascript" },
      { name: "SQL" },
      { name: "HTML/CSS", icon: "html" },
    ],
  },
  {
    group: "Backend",
    items: [
      { name: "Spring Boot", icon: "springboot" },
      { name: "Spring Security", icon: "springsecurity" },
      { name: "Spring Data JPA", icon: "spring" },
      { name: "Hibernate", icon: "hibernate" },
      { name: "REST APIs" },
      { name: "JWT", icon: "jwt" },
      { name: "BCrypt" },
      { name: "MVC" },
    ],
  },
  {
    group: "Frontend",
    items: [
      { name: "React", icon: "react" },
      { name: "Vite", icon: "vite" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "Astro", icon: "astro" },
    ],
  },
  {
    group: "Databases",
    items: [
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "Supabase", icon: "supabase" },
    ],
  },
  {
    group: "DevOps & Tools",
    items: [
      { name: "Docker", icon: "docker" },
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "Render", icon: "render" },
      { name: "Netlify", icon: "netlify" },
      { name: "Postman", icon: "postman" },
      { name: "Swagger/OpenAPI", icon: "swagger" },
    ],
  },
  {
    group: "Testing",
    items: [{ name: "JUnit", icon: "junit" }, { name: "Mockito" }, { name: "Functional testing" }],
  },
  {
    group: "CMS",
    items: [
      { name: "WordPress", icon: "wordpress" },
      { name: "WooCommerce" },
    ],
  },
];
