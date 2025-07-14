/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#DC8923',
        secondary: '#372207',
        background: {
          light: '#ffffff',
          dark: '#1a1a1a',
        },
        text: {
          light: '#000000',
          dark: '#ffffff',
        },
        'text-secondary': {
          light: '#4a5568',
          dark: '#a0aec0',
        },
        navbar: {
          light: '#ffffff',
          dark: '#1a1a1a',
        },
        'navbar-hover': {
          light: '#f7fafc',
          dark: '#2d3748',
        },
      },
      fontFamily: {
        hero: [
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      animation: {
        'fadeIn': 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
