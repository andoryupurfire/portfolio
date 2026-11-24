/**
 * Todo el contenido del portafolio vive aquí.
 * Para actualizar textos, proyectos o stack, edita solo este archivo.
 */

export const site = {
  url: "https://andoryupurfire.github.io",
  name: "Andres Rodriguez",
  fullName: "Andres Felipe Rodriguez Rodriguez",
  role: "Backend Developer",
  focus: "Java y Spring Boot",
  title: "Andres Rodriguez — Backend Developer (Java, Spring Boot)",
  description:
    "Ingeniero Informático y Backend Developer. Construyo APIs REST seguras y documentadas con Java, Spring Boot, Spring Security, JPA y PostgreSQL.",
  availability: "Disponible para roles backend junior / trainee",
  pitch:
    "Ingeniero Informático. Construyo APIs REST seguras, documentadas y desplegadas: autenticación con Spring Security y JWT, persistencia con JPA y PostgreSQL, y despliegue con Docker.",
  email: "anferoro2004@gmail.com",
  github: "https://github.com/andoryupurfire",
  linkedin: "https://www.linkedin.com/in/andres-rodriguez-0134601aa/",
  keywords: [
    "Andres Rodriguez",
    "Backend Developer",
    "Java",
    "Spring Boot",
    "Spring Security",
    "JWT",
    "APIs REST",
    "JPA",
    "Hibernate",
    "PostgreSQL",
    "Docker",
    "Backend Junior",
  ],
};

export const cvMailto = `mailto:${site.email}?subject=${encodeURIComponent(
  "Solicitud de CV - Andres Rodriguez",
)}`;

export type Project = {
  title: string;
  kind: string;
  role: string;
  status?: string;
  summary: string;
  highlights: string[];
  stack: string[];
  links: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    title: "Agro+",
    kind: "API REST",
    role: "Proyecto personal · Backend completo",
    status: "Desplegada",
    summary:
      "Backend de gestión agrícola para productores comerciales colombianos: fincas, lotes y ciclos de cultivo con seguridad por propietario.",
    highlights: [
      "Autenticación con Spring Security y JWT, contraseñas con BCrypt y autorización por propiedad del recurso.",
      "Reglas de negocio: el avance de etapas del cultivo es estrictamente secuencial, sin saltos ni retrocesos.",
      "Errores centralizados con códigos HTTP coherentes (403, 404, 409) y datos semilla idempotentes.",
      "PostgreSQL en Supabase, imagen Docker multi-stage y despliegue en Render.",
    ],
    stack: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "Spring Data JPA",
      "PostgreSQL",
      "Docker",
      "Render",
    ],
    links: [
      { label: "API en vivo", href: "https://agroplusbackend-64gb.onrender.com" },
      { label: "Código", href: "https://github.com/andoryupurfire/agroPlusBackend" },
    ],
  },
  {
    title: "Propiedades BCA",
    kind: "Aplicación web",
    role: "Trabajo en equipo · Frontend y UI/UX",
    summary:
      "Plataforma para estimar el valor de viviendas en Barrancabermeja a partir de un modelo de regresión con Machine Learning.",
    highlights: [
      "Responsable del frontend y del diseño de la interfaz dentro del equipo.",
      "Landing y flujo principal de valoración de una propiedad.",
      "Sin registro: la estimación se genera solo con los datos del inmueble.",
    ],
    stack: ["React", "Tailwind CSS", "JavaScript"],
    links: [{ label: "Ver sitio", href: "https://casas.bryan.lat/" }],
  },
];

export const stack: { group: string; items: string[] }[] = [
  { group: "Lenguajes", items: ["Java", "SQL", "JavaScript"] },
  {
    group: "Backend",
    items: [
      "Spring Boot",
      "Spring Security",
      "JWT",
      "Spring Data JPA",
      "Hibernate",
      "APIs REST",
      "DTOs",
    ],
  },
  { group: "Bases de datos", items: ["PostgreSQL", "MySQL", "Supabase"] },
  {
    group: "Herramientas",
    items: ["Docker", "Render", "Git", "GitHub", "Postman", "Swagger / OpenAPI"],
  },
  { group: "Aprendiendo ahora", items: ["JUnit", "Mockito"] },
];

export const principles: string[] = [
  "Arquitectura por capas (Controller → Service → Repository) y DTOs para separar el contrato de la API del modelo de datos.",
  "Seguridad desde el diseño: JWT, BCrypt y autorización por recurso, sin filtrar información en los errores.",
  "APIs documentadas con Swagger / OpenAPI y verificadas con Postman: casos de éxito, error y reglas de negocio.",
  "Decisiones técnicas explicadas desde el problema que resuelven.",
];
