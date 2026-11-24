import nextVitals from "eslint-config-next/core-web-vitals";

const config = [
  ...nextVitals,
  { ignores: [".next/**", "out/**", "soyteo.co/**", "references/**"] },
];

export default config;
