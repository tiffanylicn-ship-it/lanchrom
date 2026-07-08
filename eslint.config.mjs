import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    rules: {
      // Long-form guide pages include marketing copy with apostrophes/quotes; keep copy readable in JSX.
      "react/no-unescaped-entities": "off",
      // React Hook Form is intentionally used in client-side forms.
      "react-hooks/incompatible-library": "off",
      // RevealOnScroll synchronizes visibility with browser APIs after mount.
      "react-hooks/set-state-in-effect": "off",
      "@next/next/no-page-custom-font": "off",
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
