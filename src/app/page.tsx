import { cvMailto, principles, projects, site, stack, type Project } from "@/data/config";

const nav = [
  { href: "#proyectos", label: "Proyectos" },
  { href: "#stack", label: "Stack" },
  { href: "#contacto", label: "Contacto" },
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-page px-5 sm:px-6">
        <Hero />
        <Section id="proyectos" title="Proyectos">
          <div className="space-y-5">
            {projects.map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </div>
        </Section>
        <Section id="stack" title="Stack">
          <dl className="divide-y divide-line">
            {stack.map(({ group, items }) => (
              <div key={group} className="grid gap-2 py-4 sm:grid-cols-[10rem_1fr] sm:gap-6">
                <dt className="text-sm text-muted">{group}</dt>
                <dd>
                  <ChipList items={items} />
                </dd>
              </div>
            ))}
          </dl>
        </Section>
        <Section id="sobre-mi" title="Cómo trabajo">
          <ul className="space-y-3">
            {principles.map((p) => (
              <li key={p} className="flex gap-3 leading-relaxed">
                <span aria-hidden className="mt-[0.6rem] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
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
        <nav aria-label="Secciones">
          <ul className="flex gap-4 text-sm text-muted sm:gap-5">
            {nav.map((n) => (
              <li key={n.href}>
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
      <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-xs text-muted">
        <span aria-hidden className="h-2 w-2 rounded-full bg-accent" />
        {site.availability}
      </p>
      <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl">{site.name}</h1>
      <p className="mt-3 text-xl font-medium sm:text-2xl">
        {site.role} <span className="text-muted">· {site.focus}</span>
      </p>
      <p className="mt-6 max-w-[38rem] text-lg leading-relaxed text-muted">{site.pitch}</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href={`mailto:${site.email}`}
          className="rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-85"
        >
          Escríbeme
        </a>
        <ButtonLink href={cvMailto}>Solicitar CV</ButtonLink>
        <ButtonLink href={site.github} external>
          GitHub
        </ButtonLink>
        <ButtonLink href={site.linkedin} external>
          LinkedIn
        </ButtonLink>
      </div>
    </section>
  );
}

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="border-t border-line py-14 sm:py-16">
      <h2 className="mb-8 font-mono text-sm uppercase tracking-widest text-muted">{title}</h2>
      {children}
    </section>
  );
}

function ProjectCard({ project: p }: { project: Project }) {
  return (
    <article className="rounded-2xl border border-line bg-surface p-6 sm:p-7">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="text-2xl font-semibold tracking-tight">{p.title}</h3>
        <p className="flex items-center gap-2 font-mono text-xs text-muted">
          {p.kind}
          {p.status && (
            <>
              <span aria-hidden>·</span>
              <span className="text-accent">{p.status}</span>
            </>
          )}
        </p>
      </div>
      <p className="mt-1 text-sm text-muted">{p.role}</p>
      <p className="mt-4 leading-relaxed">{p.summary}</p>
      <ul className="mt-4 space-y-2 text-[0.95rem] leading-relaxed text-muted">
        {p.highlights.map((h) => (
          <li key={h} className="flex gap-3">
            <span aria-hidden className="select-none text-accent">→</span>
            <span>{h}</span>
          </li>
        ))}
      </ul>
      <div className="mt-5">
        <ChipList items={p.stack} />
      </div>
      <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium">
        {p.links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-line decoration-2 underline-offset-4 transition-colors hover:decoration-accent"
          >
            {l.label} <span aria-hidden>↗</span>
          </a>
        ))}
      </div>
    </article>
  );
}

function Contact() {
  return (
    <section id="contacto" className="border-t border-line py-14 sm:py-20">
      <h2 className="mb-8 font-mono text-sm uppercase tracking-widest text-muted">Contacto</h2>
      <p className="text-2xl font-semibold tracking-tight sm:text-3xl">
        ¿Buscas un backend junior con ganas de aportar?
      </p>
      <p className="mt-3 text-muted">Respondo por correo. También puedes encontrarme en GitHub y LinkedIn.</p>
      <a
        href={`mailto:${site.email}`}
        className="mt-6 inline-block break-all text-lg font-medium underline decoration-accent decoration-2 underline-offset-4 sm:text-xl"
      >
        {site.email}
      </a>
      <div className="mt-6 flex flex-wrap gap-3">
        <ButtonLink href={cvMailto}>Solicitar CV</ButtonLink>
        <ButtonLink href={site.github} external>
          GitHub
        </ButtonLink>
        <ButtonLink href={site.linkedin} external>
          LinkedIn
        </ButtonLink>
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

function ButtonLink({ href, external, children }: { href: string; external?: boolean; children: React.ReactNode }) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="rounded-full border border-line bg-surface px-5 py-2.5 text-sm font-medium transition-colors hover:border-ink/40"
    >
      {children}
    </a>
  );
}

function ChipList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((i) => (
        <li key={i} className="rounded-md border border-line bg-bg px-2.5 py-1 font-mono text-xs">
          {i}
        </li>
      ))}
    </ul>
  );
}
