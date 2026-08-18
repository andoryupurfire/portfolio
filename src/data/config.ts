const config = {
  title: "Andres Felipe Rodriguez Rodriguez | Backend Developer",
  description: {
    long: "Portafolio de Andres Felipe Rodriguez Rodriguez, Ingeniero Informatico y Backend Developer enfocado en Java, Spring Boot, APIs REST, persistencia, seguridad y documentacion tecnica.",
    short:
      "Backend Developer enfocado en Java, Spring Boot, APIs REST, persistencia y seguridad.",
  },
  keywords: [
    "Andres Felipe Rodriguez Rodriguez",
    "Andres Rodriguez",
    "portfolio",
    "backend developer",
    "Java",
    "Spring Boot",
    "APIs REST",
    "Spring Security",
    "JWT",
    "JPA",
    "Hibernate",
    "PostgreSQL",
    "MySQL",
    "Docker",
    "Swagger",
    "OpenAPI",
    "Postman",
    "Backend Junior",
  ],
  author: "Andres Felipe Rodriguez Rodriguez",
  email: "anferoro2004@gmail.com",
  site: "https://andoryupurfire.github.io",

  // for github stars button
  githubUsername: "andoryupurfire",
  githubRepo: "agroPlusBackend",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "",
    linkedin: "https://www.linkedin.com/in/andres-rodriguez-0134601aa/",
    instagram: "",
    facebook: "",
    github: "https://github.com/andoryupurfire",
  },
};
export { config };
