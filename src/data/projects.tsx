import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live?: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      {live && live !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={live}
        >
          <Button variant={"default"} size={"sm"}>
            Ver proyecto
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
      {repo && repo !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Repositorio
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};

const chip = (title: string, text?: string): Skill => ({
  title,
  bg: "black",
  fg: "white",
  icon: <span className="text-[10px] font-bold">{text ?? title.slice(0, 4)}</span>,
});

const PROJECT_SKILLS = {
  java: chip("Java", "Java"),
  spring: chip("Spring Boot", "SB"),
  security: chip("Spring Security", "Sec"),
  jwt: chip("JWT", "JWT"),
  jpa: chip("Spring Data JPA", "JPA"),
  hibernate: chip("Hibernate", "Hb"),
  postgres: chip("PostgreSQL", "SQL"),
  mysql: chip("MySQL", "SQL"),
  docker: chip("Docker", "Dock"),
  render: chip("Render", "Ren"),
  supabase: chip("Supabase", "Supa"),
  swagger: chip("Swagger / OpenAPI", "API"),
  postman: chip("Postman", "Post"),
  junit: chip("JUnit", "Test"),
  mockito: chip("Mockito", "Mock"),
  html: chip("HTML", "HTML"),
  css: chip("CSS", "CSS"),
  js: chip("JavaScript", "JS"),
  react: chip("React", "React"),
  astro: chip("Astro", "Astro"),
  tailwind: chip("Tailwind CSS", "TW"),
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};

const projects: Project[] = [
  {
    id: "agroplus",
    category: "Backend agricola",
    title: "Agro+",
    src: `${BASE_PATH}/agroplus/landing.svg`,
    screenshots: ["landing.svg"],
    skills: {
      frontend: [],
      backend: [
        PROJECT_SKILLS.java,
        PROJECT_SKILLS.spring,
        PROJECT_SKILLS.security,
        PROJECT_SKILLS.jwt,
        PROJECT_SKILLS.jpa,
        PROJECT_SKILLS.hibernate,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.docker,
        PROJECT_SKILLS.render,
        PROJECT_SKILLS.supabase,
      ],
    },
    live: "https://agroplusbackend-64gb.onrender.com",
    github: "https://github.com/andoryupurfire/agroPlusBackend",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Backend de gestion agricola para productores comerciales colombianos.
          </TypographyP>
          <TypographyP className="font-mono">
            Permite registrar fincas, lotes y ciclos de cultivo con seguridad por
            propietario y un catalogo agronomico controlado. Mi rol fue el
            desarrollo backend: diseno de API REST, seguridad, persistencia,
            reglas de negocio y despliegue.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Funcionalidades principales</TypographyH3>
          <ul className="font-mono list-disc ml-6 mb-4 space-y-2">
            <li>Autenticacion JWT con registro e inicio de sesion.</li>
            <li>Gestion de fincas y lotes con seguridad por propietario.</li>
            <li>Catalogo fijo de tipos de cultivo, variedades y etapas fenologicas.</li>
            <li>Avance de etapas estrictamente secuencial, sin saltos ni retrocesos.</li>
            <li>Manejo centralizado de errores con codigos HTTP como 404, 403 y 409.</li>
            <li>Seed de datos idempotente para evitar duplicados al reiniciar.</li>
          </ul>
          <SlideShow images={[`${BASE_PATH}/agroplus/landing.svg`]} />

          <TypographyH3 className="my-4 mt-8">Arquitectura y persistencia</TypographyH3>
          <p className="font-mono mb-2">
            Arquitectura por capas: Controller, Service, Repository y Entity.
            Uso DTOs para desacoplar el contrato de la API del modelo de
            persistencia. La validacion de propiedad se hace en cascada a traves
            de relaciones anidadas como Lote - Finca - Agricultor.
          </p>
          <p className="font-mono mb-2">
            El entorno desplegado usa PostgreSQL gestionado en Supabase, mientras
            que el desarrollo local trabaja con PostgreSQL 15 en Docker.
            Persistencia con Spring Data JPA / Hibernate, fetch LAZY explicito y
            limites transaccionales con <code>@Transactional</code> para evitar
            <code> LazyInitializationException</code>.
          </p>

          <TypographyH3 className="my-4 mt-8">Seguridad, pruebas y endpoints</TypographyH3>
          <p className="font-mono mb-2">
            Seguridad con Spring Security, JWT, contrasenas con BCrypt,
            autorizacion por propiedad de recurso y excepciones centralizadas
            para evitar fugas de informacion en respuestas de error.
          </p>
          <p className="font-mono mb-2">
            La verificacion manual se realizo con Postman cubriendo casos de
            exito, errores, ownership y reglas de negocio. Las pruebas
            automatizadas con JUnit son una mejora planificada.
          </p>
          <ul className="font-mono list-disc ml-6 space-y-2">
            <li><code>POST /api/auth/register</code> y <code>POST /api/auth/login</code>.</li>
            <li><code>POST /api/fincas</code>, <code>GET /api/fincas</code>.</li>
            <li><code>POST /api/lotes</code>, <code>GET /api/lotes</code>.</li>
            <li><code>POST /api/registroCultivo</code>.</li>
            <li><code>PATCH /api/registroCultivo/{"{id}"}/avanzar-etapa</code>.</li>
            <li><code>GET /api/catalogos/cultivos</code> y endpoints de variedades/etapas.</li>
          </ul>

          <TypographyH3 className="my-4 mt-8">Aprendizajes y mejoras</TypographyH3>
          <p className="font-mono mb-2">
            El proyecto fortalecio arquitectura por capas, relaciones JPA con
            <code> @ManyToOne</code>, manejo de fetch LAZY, excepciones
            centralizadas, Docker multi-stage build en Render y conexion a
            PostgreSQL gestionado en Supabase.
          </p>
          <p className="font-mono mb-2">
            Siguientes mejoras: calculadora de capacidad de siembra, integracion
            de un modulo de IA como microservicio separado y pruebas automatizadas
            con JUnit.
          </p>
        </div>
      );
    },
  },
  {
    id: "propiedades-bca",
    category: "Proyecto React",
    title: "Propiedades BCA",
    src: `${BASE_PATH}/propiedades-bca/preview.png`,
    screenshots: ["preview.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.html,
        PROJECT_SKILLS.css,
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [],
    },
    live: "https://casas.bryan.lat/",
    github: "#",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Plataforma web en React para valorar viviendas en Barrancabermeja.
          </TypographyP>
          <TypographyP className="font-mono">
            Propiedades BCA presenta una experiencia visual para descubrir el
            valor real de una vivienda. La pagina comunica que su IA convierte
            datos de la ciudad en un calculo rapido y confiable para propiedades
            en Barrancabermeja.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow images={[`${BASE_PATH}/propiedades-bca/preview.png`]} />

          <TypographyH3 className="my-4 mt-8">Experiencia y alcance</TypographyH3>
          <ul className="font-mono list-disc ml-6 space-y-2">
            <li>Landing con navegacion a Como funciona, Valorar propiedad, Explora la Ciudad y Team.</li>
            <li>Flujo principal orientado a comenzar una valoracion de propiedad.</li>
            <li>Indicador de datos del mercado local con 1.000 registros y meta de 3.000.</li>
            <li>Seccion de equipo donde mi participacion aparece como Frontend &amp; UI/UX.</li>
            <li>Interfaz construida con React, Tailwind y enfoque de diseno visual.</li>
          </ul>

          <TypographyH3 className="my-4 mt-8">Notas tecnicas verificables</TypographyH3>
          <p className="font-mono mb-2">
            La propia pagina se presenta como un aplicativo web con algoritmos de
            regresion basados en Machine Learning para la prediccion de precios
            de viviendas en Barrancabermeja.
          </p>
          <p className="font-mono mb-2">
            Tambien aclara que la plataforma no solicita nombre, correo,
            telefono ni registro para funcionar, y que los parametros del
            inmueble se usan para generar estimaciones.
          </p>
          <p className="font-mono mb-2">
            En la seccion Team, Andres Rodriguez figura como responsable de
            Frontend &amp; UI/UX, con tags React, Tailwind y Design.
          </p>
        </div>
      );
    },
  },
];

export default projects;
