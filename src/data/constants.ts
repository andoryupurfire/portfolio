export enum SkillNames {
  JS = "js",
  TS = "ts",
  HTML = "html",
  CSS = "css",
  REACT = "react",
  VUE = "vue",
  NEXTJS = "nextjs",
  TAILWIND = "tailwind",
  NODEJS = "nodejs",
  EXPRESS = "express",
  POSTGRES = "postgres",
  MONGODB = "mongodb",
  GIT = "git",
  GITHUB = "github",
  PRETTIER = "prettier",
  NPM = "npm",
  FIREBASE = "firebase",
  WORDPRESS = "wordpress",
  LINUX = "linux",
  DOCKER = "docker",
  NGINX = "nginx",
  AWS = "aws",
  GCP = "gcp",
  VIM = "vim",
  VERCEL = "vercel",
}

export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.JS]: {
    id: 1,
    name: "js",
    label: "JavaScript",
    shortDescription: "Frontend de apoyo para interacciones y consumo de APIs.",
    color: "#f0db4f",
    icon: `${DEVICON}/javascript/javascript-original.svg`,
  },
  [SkillNames.TS]: {
    id: 2,
    name: "ts",
    label: "Java",
    shortDescription: "Lenguaje principal para construir servicios backend.",
    color: "#f89820",
    icon: `${DEVICON}/java/java-original.svg`,
  },
  [SkillNames.HTML]: {
    id: 3,
    name: "html",
    label: "HTML",
    shortDescription: "Estructura base para interfaces y documentacion web.",
    color: "#e34c26",
    icon: `${DEVICON}/html5/html5-original.svg`,
  },
  [SkillNames.CSS]: {
    id: 4,
    name: "css",
    label: "CSS",
    shortDescription: "Estilos de apoyo para interfaces claras y responsivas.",
    color: "#1572b6",
    icon: `${DEVICON}/css3/css3-original.svg`,
  },
  [SkillNames.REACT]: {
    id: 5,
    name: "react",
    label: "Spring Boot",
    shortDescription: "Framework principal para APIs REST y servicios backend.",
    color: "#6db33f",
    icon: `${DEVICON}/spring/spring-original.svg`,
  },
  [SkillNames.VUE]: {
    id: 6,
    name: "vue",
    label: "Spring Security",
    shortDescription: "Autenticacion, autorizacion y proteccion de endpoints.",
    color: "#6db33f",
    icon: `${DEVICON}/spring/spring-original.svg`,
  },
  [SkillNames.NEXTJS]: {
    id: 7,
    name: "nextjs",
    label: "REST APIs",
    shortDescription: "Diseno de endpoints orientados a recursos y contratos claros.",
    color: "#ffffff",
    icon: `${DEVICON}/openapi/openapi-original.svg`,
  },
  [SkillNames.TAILWIND]: {
    id: 8,
    name: "tailwind",
    label: "Tailwind CSS",
    shortDescription: "Frontend de apoyo con utilidades rapidas y consistentes.",
    color: "#38bdf8",
    icon: `${DEVICON}/tailwindcss/tailwindcss-original.svg`,
  },
  [SkillNames.NODEJS]: {
    id: 9,
    name: "nodejs",
    label: "Spring Data JPA",
    shortDescription: "Repositorios y consultas para persistencia relacional.",
    color: "#6db33f",
    icon: `${DEVICON}/spring/spring-original.svg`,
  },
  [SkillNames.EXPRESS]: {
    id: 10,
    name: "express",
    label: "Hibernate",
    shortDescription: "ORM para mapear entidades, relaciones y transacciones.",
    color: "#bcae79",
    icon: `${DEVICON}/hibernate/hibernate-original.svg`,
  },
  [SkillNames.POSTGRES]: {
    id: 11,
    name: "postgres",
    label: "PostgreSQL",
    shortDescription: "Base de datos relacional usada en despliegues y desarrollo.",
    color: "#336791",
    icon: `${DEVICON}/postgresql/postgresql-original.svg`,
  },
  [SkillNames.MONGODB]: {
    id: 12,
    name: "mongodb",
    label: "MySQL",
    shortDescription: "Base de datos relacional para modelado y consultas SQL.",
    color: "#4479a1",
    icon: `${DEVICON}/mysql/mysql-original.svg`,
  },
  [SkillNames.GIT]: {
    id: 13,
    name: "git",
    label: "Git",
    shortDescription: "Control de versiones para trabajar con cambios trazables.",
    color: "#f1502f",
    icon: `${DEVICON}/git/git-original.svg`,
  },
  [SkillNames.GITHUB]: {
    id: 14,
    name: "github",
    label: "GitHub",
    shortDescription: "Repositorio publico para evidenciar proyectos y progreso.",
    color: "#ffffff",
    icon: `${DEVICON}/github/github-original.svg`,
  },
  [SkillNames.PRETTIER]: {
    id: 15,
    name: "prettier",
    label: "Swagger / OpenAPI",
    shortDescription: "Documentacion tecnica verificable para APIs REST.",
    color: "#85ea2d",
    icon: `${DEVICON}/swagger/swagger-original.svg`,
  },
  [SkillNames.NPM]: {
    id: 16,
    name: "npm",
    label: "Postman",
    shortDescription: "Validacion manual de endpoints, flujos y casos de error.",
    color: "#ff6c37",
    icon: `${DEVICON}/postman/postman-original.svg`,
  },
  [SkillNames.FIREBASE]: {
    id: 17,
    name: "firebase",
    label: "JWT",
    shortDescription: "Tokens para autenticacion stateless en APIs protegidas.",
    color: "#d63aff",
    icon: `${DEVICON}/json/json-original.svg`,
  },
  [SkillNames.WORDPRESS]: {
    id: 18,
    name: "wordpress",
    label: "Astro",
    shortDescription: "Frontend de apoyo para sitios estaticos y contenido.",
    color: "#ff5d01",
    icon: `${DEVICON}/astro/astro-original.svg`,
  },
  [SkillNames.LINUX]: {
    id: 19,
    name: "linux",
    label: "JUnit",
    shortDescription: "Pruebas automatizadas como siguiente foco de fortalecimiento.",
    color: "#25a162",
    icon: `${DEVICON}/junit/junit-original.svg`,
  },
  [SkillNames.DOCKER]: {
    id: 20,
    name: "docker",
    label: "Docker",
    shortDescription: "Contenedores para desarrollo local y despliegue reproducible.",
    color: "#2496ed",
    icon: `${DEVICON}/docker/docker-original.svg`,
  },
  [SkillNames.NGINX]: {
    id: 21,
    name: "nginx",
    label: "Mockito",
    shortDescription: "Mocks para probar servicios y aislar comportamiento.",
    color: "#78a641",
    icon: `${DEVICON}/junit/junit-original.svg`,
  },
  [SkillNames.AWS]: {
    id: 22,
    name: "aws",
    label: "Render",
    shortDescription: "Despliegue de servicios backend containerizados.",
    color: "#46e3b7",
    icon: `${DEVICON}/railway/railway-original.svg`,
  },
  [SkillNames.GCP]: {
    id: 23,
    name: "gcp",
    label: "Supabase",
    shortDescription: "PostgreSQL gestionado para entornos desplegados.",
    color: "#3ecf8e",
    icon: `${DEVICON}/supabase/supabase-original.svg`,
  },
  [SkillNames.VIM]: {
    id: 24,
    name: "vim",
    label: "DTOs",
    shortDescription: "Contratos de API desacoplados del modelo de persistencia.",
    color: "#7c3aed",
    icon: `${DEVICON}/java/java-original.svg`,
  },
  [SkillNames.VERCEL]: {
    id: 25,
    name: "vercel",
    label: "Buenas practicas",
    shortDescription: "Capas, errores centralizados y decisiones tecnicas justificadas.",
    color: "#ffffff",
    icon: `${DEVICON}/thealgorithms/thealgorithms-original.svg`,
  },
};

export type Experience = {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  description: string[];
  skills: SkillNames[];
};

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    startDate: "Actual",
    endDate: "En progreso",
    title: "Backend Developer Junior / Trainee",
    company: "Perfil profesional",
    description: [
      "Ingeniero Informatico enfocado en desarrollo backend con Java, Spring Boot y APIs REST.",
      "Construyo APIs claras, mantenibles y documentadas, con decisiones tecnicas explicadas desde el problema que resuelven.",
      "Me enfoco en persistencia, seguridad, documentacion tecnica, pruebas y buenas practicas de desarrollo.",
      "Estoy organizando proyectos para convertirlos en evidencia profesional verificable para oportunidades backend junior o trainee.",
    ],
    skills: [
      SkillNames.TS,
      SkillNames.REACT,
      SkillNames.NEXTJS,
      SkillNames.NODEJS,
      SkillNames.EXPRESS,
      SkillNames.POSTGRES,
      SkillNames.VUE,
    ],
  },
  {
    id: 2,
    startDate: "Proyectos",
    endDate: "Practica",
    title: "Desarrollador backend",
    company: "Proyectos academicos, personales y pasantia",
    description: [
      "Diseno APIs REST orientadas a recursos con arquitectura por capas: Controller, Service, Repository y Entity.",
      "Uso DTOs para desacoplar contratos de API del modelo de persistencia y mantener respuestas controladas.",
      "Trabajo con autenticacion JWT, Spring Security, BCrypt y autorizacion por propiedad de recurso.",
      "Valido flujos con Postman y estoy fortaleciendo pruebas automatizadas con JUnit y Mockito.",
    ],
    skills: [
      SkillNames.GIT,
      SkillNames.GITHUB,
      SkillNames.DOCKER,
      SkillNames.PRETTIER,
      SkillNames.NPM,
      SkillNames.LINUX,
      SkillNames.NGINX,
      SkillNames.GCP,
    ],
  },
];

export const themeDisclaimers = {
  light: [
    "Modo claro activado: perfecto para revisar endpoints con cafe.",
    "Luz encendida. Que tambien se vean los errores 404.",
    "Modo claro listo: documentacion, contratos y pruebas a la vista.",
  ],
  dark: [
    "Modo oscuro activado: ideal para depurar con calma.",
    "Volvemos al lado comodo para leer logs y stack traces.",
    "Modo oscuro listo: menos brillo, mas foco.",
  ],
};
