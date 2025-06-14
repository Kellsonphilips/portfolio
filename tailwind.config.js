/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        text: "var(--text)",
        "text-secondary": "var(--text-secondary)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
        "card-bg": "var(--card-bg)",
        "card-tag-bg": "var(--card-tag-bg)",
        border: "var(--border)",
        navbar: "var(--navbar)",
        "navbar-hover": "var(--navbar-hover)",
        "blog-title-hover": "var(--blog-title-hover)",
        "social-link-hover": "var(--social-link-hover)",
      },
    },
  },
  plugins: [],
};
