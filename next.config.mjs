/** @type {import('next').NextConfig} */
const nextConfig = {
  // Sitio 100% estático: `next build` genera /out, listo para GitHub Pages.
  output: "export",
  reactStrictMode: true,
  images: { unoptimized: true },
  trailingSlash: true,
  turbopack: { root: import.meta.dirname },
};

export default nextConfig;
