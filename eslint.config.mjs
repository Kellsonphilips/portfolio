import coreWebVitals from "eslint-config-next/core-web-vitals";

/** @type {import("eslint").Linter.Config[]} */
const eslintConfig = [
  ...coreWebVitals,
  {
    rules: {
      // Intentional patterns (theme hydration, typing animations, staggered UI)
      "react-hooks/set-state-in-effect": "off",
      "import/no-anonymous-default-export": "off",
    },
  },
];

export default eslintConfig;
