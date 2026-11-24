import { experience, projects, site, stack, type Experience, type StackItem } from "@/data/config";
import { ProjectCard } from "@/components/project-card";
import { TechIcon, brandColor } from "@/components/tech-icon";

const nav = [
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-page px-5 sm:px-6">
        <Hero />
        <Section id="experience" title="Experience">
          <ol className="space-y-10">
            {experience.map((job) => (
              <ExperienceItem key={`${job.company}-${job.start}`} job={job} />
            ))}
          </ol>
        </Section>
        <Section id="projects" title="Projects">
          <div className="grid gap-4 sm:grid-cols-2">
            {projects.map((p) => (
              <ProjectCard key={p.name} project={p} />
            ))}
          </div>
        </Section>
        <Section id="stack" title="Stack">
          <div className="space-y-10">
            {stack.map(({ group, items }) => (
              <div key={group}>
                <h3 className="mb-3 font-medium">{group}</h3>
                <ul className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5">
                  {items.map((item) => (
                    <StackTile key={item.name} item={item} />
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-line/70 bg-bg/85 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-page items-center justify-between px-5 sm:px-6">
        <a href="#" className="whitespace-nowrap text-sm font-semibold tracking-tight sm:text-base">
          {site.name}
          <span className="text-accent">.</span>
        </a>
        <nav aria-label="Sections">
          <ul className="flex gap-3 text-[13px] text-muted sm:gap-5 sm:text-sm">
            {nav.map((n) => (
              // "Stack" is dropped on small phones so the header fits at 360px
              <li key={n.href} className={n.href === "#stack" ? "hidden sm:block" : undefined}>
                <a href={n.href} className="transition-colors hover:text-ink">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="pb-16 pt-16 sm:pb-20 sm:pt-24">
      <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">{site.name}</h1>
      <p className="mt-3 text-xl font-medium sm:text-2xl">{site.role}</p>
      <p className="mt-1 text-lg text-muted">{site.subtitle}</p>
      <p className="mt-6 max-w-[38rem] text-lg leading-relaxed text-muted">{site.intro}</p>
      <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
        <ViewCV />
        <SocialIcons />
      </div>
    </section>
  );
}

function ViewCV() {
  return (
    <div className="flex flex-col items-start gap-2">
      <a
        href={site.resume.en.page}
        target="_blank"
        rel="noopener"
        className="rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-85"
      >
        View CV
      </a>
      <a
        href={site.resume.es.page}
        target="_blank"
        rel="noopener"
        lang="es"
        className="pl-1 text-xs text-muted underline-offset-4 transition-colors hover:text-ink hover:underline"
      >
        Versión en español
      </a>
    </div>
  );
}

function SocialIcons() {
  const links = [
    { href: site.github, label: "GitHub", icon: <GitHubIcon />, external: true },
    { href: site.linkedin, label: "LinkedIn", icon: <LinkedInIcon />, external: true },
    { href: `mailto:${site.email}`, label: `Email ${site.email}`, icon: <MailIcon />, external: false },
  ];
  return (
    <ul className="-mx-2 flex items-center gap-1 self-start pt-1.5">
      {links.map((l) => (
        <li key={l.label}>
          <a
            href={l.href}
            aria-label={l.label}
            title={l.label}
            {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="block rounded-md p-2 text-muted transition-colors hover:text-ink"
          >
            {l.icon}
          </a>
        </li>
      ))}
    </ul>
  );
}

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="border-t border-line py-14 sm:py-16">
      <h2 className="mb-8 text-2xl font-semibold tracking-tight">{title}</h2>
      {children}
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="border-t border-line py-14 sm:py-20">
      <h2 className="mb-8 text-2xl font-semibold tracking-tight">Contact</h2>
      <p className="text-muted">The best way to reach me is by email.</p>
      <a
        href={`mailto:${site.email}`}
        className="mt-4 inline-block break-all text-lg font-medium underline decoration-accent decoration-2 underline-offset-4 sm:text-xl"
      >
        {site.email}
      </a>
      <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
        <ViewCV />
        <SocialIcons />
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-page px-5 py-8 text-sm text-muted sm:px-6">
        © {new Date().getFullYear()} {site.fullName}
      </div>
    </footer>
  );
}

function ExperienceItem({ job }: { job: Experience }) {
  return (
    <li>
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
        <h3 className="font-semibold">
          {job.role}
          <span className="font-normal text-muted">
            {" at "}
            {job.company}
            {job.type && ` (${job.type})`}
          </span>
        </h3>
        <p className="shrink-0 text-sm text-muted">
          {job.start} – {job.end}
        </p>
      </div>
      <ul className="mt-3 list-disc space-y-1.5 pl-5 leading-relaxed text-muted marker:text-line">
        {job.achievements.map((a) => (
          <li key={a}>{a}</li>
        ))}
      </ul>
    </li>
  );
}

function StackTile({ item }: { item: StackItem }) {
  return (
    <li
      style={item.icon ? ({ "--brand": brandColor(item.icon) } as React.CSSProperties) : undefined}
      className="group flex min-h-[5.5rem] flex-col items-center justify-center gap-2 rounded-xl border border-line bg-surface p-3 text-center"
    >
      {item.icon && (
        <span className="text-muted transition-colors duration-200 group-hover:text-[color:var(--brand)]">
          <TechIcon name={item.icon} />
        </span>
      )}
      <span className="text-xs leading-tight sm:text-sm">
        {/* allow long names like "Swagger/OpenAPI" to wrap after the slash */}
        {item.name.split("/").flatMap((part, i) => (i ? ["/", <wbr key={i} />, part] : [part]))}
      </span>
    </li>
  );
}

/* Inline icons (no icon library). 20px, inherit text color. */

function GitHubIcon() {
  return (
    <svg aria-hidden width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg aria-hidden width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 4.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      aria-hidden
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 6L2 7" />
    </svg>
  );
}
