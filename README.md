# Philip Kelechukwu Orji – Portfolio

[![Vercel Deploy](https://vercelbadge.vercel.app/api/philipkelechiorji/portfolio)](https://vercel.com/philipkelechiorji/portfolio)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-14.2.3-blue?logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4.1-38BDF8?logo=tailwindcss)](https://tailwindcss.com/)
[![i18n](https://img.shields.io/badge/i18n-5%20languages-brightgreen)](locales/)

A modern, multilingual, and responsive portfolio website built with [Next.js](https://nextjs.org), [React](https://react.dev/), and [Tailwind CSS](https://tailwindcss.com). This site showcases my projects, skills, blog posts, and professional capabilities, and is optimized for SEO, accessibility, and performance.

---

## 🚀 Features

- **Animated Landing Page:** Eye-catching hero section, featured projects, and call-to-action.
- **Projects:** Tabbed interface for ICT, Web Apps, and Data Analytics projects, with internationalized project data.
- **Blog:** SEO-optimized blog with individual post pages, Open Graph, Twitter Card, and JSON-LD structured data.
- **Skills:** Categorized technical skills with visual icons and responsive cards.
- **Capabilities:** Overview of professional services and expertise.
- **Contact:** Responsive contact form with backend email integration (Nodemailer).
- **FAQ & Privacy:** Informational pages for visitors, fully translatable.
- **Internationalization (i18n):** Language switcher with support for English, French, Spanish, German, and Chinese. All UI and project content is translatable.
- **Theme Toggle:** Light/dark mode with persistent user preference.
- **Accessibility:** Keyboard navigation, color contrast, semantic HTML, and ARIA labels.
- **Performance:** Optimized images, static generation, and fast load times.
- **SEO:** Sitemap, robots.txt, canonical URLs, meta tags, and structured data.
- **Responsive Design:** Mobile-friendly and accessible on all devices.

---

## 🛠️ Tech Stack

- [Next.js](https://nextjs.org/) (App Router)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)
- [Nodemailer](https://nodemailer.com/) (for contact form)
- [next-intl](https://github.com/amannn/next-intl) (for i18n)
- [ESLint](https://eslint.org/) & [Prettier](https://prettier.io/)
- [Vercel](https://vercel.com/) (deployment)

---

## 📦 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables:**
   - Copy `.env.example` to `.env.local` and fill in your email credentials for Nodemailer and any other secrets.

4. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser:**
   Visit [http://localhost:3000](http://localhost:3000) to view the site.

---

## 🗂️ Project Structure

```
.
├── app/                # Next.js app directory (routing, pages, layouts)
│   ├── blog/           # Blog listing, dynamic post pages, and blog data
│   ├── capabilities/   # Capabilities page
│   ├── contact/        # Contact form page & API route
│   ├── faq/            # FAQ page and data
│   ├── privacy/        # Privacy policy page
│   ├── projects/       # Projects listing and data
│   ├── skills/         # Skills page
│   ├── layout.js       # Root layout
│   ├── page.js         # Home page
│   └── globals.css     # Global styles
├── components/         # Reusable React components (Navbar, Footer, Hero, etc.)
├── locales/            # JSON translation files for i18n (en, fr, es, de, zh)
├── public/             # Static assets (images, favicon, etc.)
│   └── Images/         # Project and blog images
├── styles/             # Additional CSS (if any)
├── utils/              # Utility functions (e.g., GitHub API helpers)
├── tailwind.config.js  # Tailwind CSS configuration
├── postcss.config.js   # PostCSS configuration
├── package.json        # Project metadata and scripts
└── README.md           # Project documentation
```

---

## ⚙️ Customization

- **Projects:**  
  - Edit [`app/projects/projects.js`](app/projects/projects.js) for project data.
  - Add translations for project titles/descriptions in [`locales/`](locales/).
- **Blog Posts:**  
  - Edit [`app/blog/blogs.js`](app/blog/blogs.js) and individual blog files in [`app/blog/blogs/`](app/blog/blogs/).
- **Skills & Capabilities:**  
  - Edit [`app/skills/page.js`](app/skills/page.js) and [`app/capabilities/page.js`](app/capabilities/page.js).
- **Profile Info:**  
  - Edit [`components/Hero.js`](components/Hero.js) and [`components/About.js`](components/About.js).
- **Images:**  
  - Replace images in [`public/Images/`](public/Images/) and update imports in components as needed.
- **Translations:**  
  - Update translation files in [`/locales/`](locales/) for i18n. Supported: `en`, `fr`, `es`, `de`, `zh`.
- **Contact Form:**  
  - Configure email settings in `.env.local` for Nodemailer integration.
- **API:**  
  - Contact form backend: [`app/api/contact/route.js`](app/api/contact/route.js).

---

## 🧩 Components

- **Navbar, Footer, Hero, About, FeaturedProjects, ProjectCard, CallToAction, LanguageSwitcher, ThemeToggle, ToggleButtons, Button, useScrollReveal, LanguageContext, ThemeProvider, socialIcons**  
  - All components are reusable and internationalized.
  - See [`components/`](components/) for details and customization.

---

## 🧪 Scripts

- `npm run dev` — Start the development server
- `npm run build` — Build for production
- `npm run start` — Start the production server
- `npm run lint` — Run ESLint

---

## 🌐 Deployment

The site can be easily deployed on [Vercel](https://vercel.com/) or any platform supporting Next.js.

1. Push your code to GitHub.
2. Connect your repository to Vercel.
3. Set environment variables in the Vercel dashboard.
4. Deploy!

For more details, see the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

---

## 🔒 Security & Best Practices

- **Environment Variables:** Never commit secrets. Use `.env.local` for sensitive data.
- **SEO:** Meta tags, Open Graph, Twitter Card, JSON-LD, and sitemap are all set up.
- **Accessibility:** Follows best practices for color contrast, keyboard navigation, and semantic HTML.
- **Performance:** Uses static generation, image optimization, and code splitting.

---

## 🌍 Internationalization (i18n)

- Fully translatable UI and content.
- Language switcher supports English, French, Spanish, German, and Chinese.
- Add or update translations in [`locales/`](locales/).

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. **Fork the repository** and create your branch from `main`.
2. **Clone your fork** and install dependencies:
   ```bash
   git clone https://github.com/your-username/portfolio.git
   cd portfolio
   npm install
   ```
3. **Create a new branch** for your feature or bugfix:
   ```bash
   git checkout -b my-feature
   ```
4. **Make your changes** and add tests if applicable.
5. **Run lint and tests** to ensure code quality:
   ```bash
   npm run lint
   ```
6. **Commit your changes** with a clear message:
   ```bash
   git commit -m "Add feature: ..."
   ```
7. **Push to your fork** and submit a pull request to the `main` branch.
8. **Describe your changes** in the PR and reference any related issues.

**Code Style:**
- Use Prettier and ESLint for formatting and linting.
- Follow the existing code style and structure.
- Write clear, descriptive commit messages.

**Issues:**
- If you find a bug or have a feature request, please [open an issue](https://github.com/your-username/portfolio/issues) with details and steps to reproduce.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Author:** Philip Kelechukwu Orji  
**Contact:** See the [Contact page](app/contact/page.js) or connect via social links in the footer.

---

If you have any questions, suggestions, or want to contribute, feel free to open an issue or pull request!
