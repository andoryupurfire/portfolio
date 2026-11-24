import {
  siAstro,
  siDocker,
  siGit,
  siGithub,
  siHibernate,
  siHtml5,
  siJavascript,
  siJsonwebtokens,
  siJunit5,
  siNetlify,
  siOpenjdk,
  siPostgresql,
  siPostman,
  siReact,
  siRender,
  siSpring,
  siSpringboot,
  siSpringsecurity,
  siSupabase,
  siSwagger,
  siTailwindcss,
  siVite,
  siWordpress,
} from "simple-icons";

/**
 * Official brand logos from Simple Icons (CC0). Rendered on the server as
 * inline SVG — no icon code ships to the browser.
 */
const ICONS = {
  java: siOpenjdk,
  javascript: siJavascript,
  html: siHtml5,
  springboot: siSpringboot,
  springsecurity: siSpringsecurity,
  spring: siSpring,
  hibernate: siHibernate,
  jwt: siJsonwebtokens,
  react: siReact,
  vite: siVite,
  tailwind: siTailwindcss,
  astro: siAstro,
  postgresql: siPostgresql,
  supabase: siSupabase,
  docker: siDocker,
  git: siGit,
  github: siGithub,
  render: siRender,
  netlify: siNetlify,
  postman: siPostman,
  swagger: siSwagger,
  junit: siJunit5,
  wordpress: siWordpress,
} as const;

export type TechIconName = keyof typeof ICONS;

/**
 * Hover color for a logo. Near-black brands (GitHub, Render, JWT…) fall back
 * to the text color so they stay visible in dark mode.
 */
export function brandColor(name: TechIconName): string {
  const hex = ICONS[name].hex;
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255);
  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return luminance < 0.12 ? "rgb(var(--ink))" : `#${hex}`;
}

export function TechIcon({ name, size = 28 }: { name: TechIconName; size?: number }) {
  return (
    <svg aria-hidden width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d={ICONS[name].path} />
    </svg>
  );
}
