# Philip Kelechukwu Orji – Portfolio

A modern, responsive portfolio website built with [Next.js](https://nextjs.org), [React](https://react.dev/), and [Tailwind CSS](https://tailwindcss.com). This site showcases my projects, skills, blog posts, and professional capabilities, and is optimized for SEO, accessibility, and performance.

---

## 🚀 Features

- **Landing Page:** Animated hero, featured projects, and call-to-action.
- **Projects:** Tabbed interface for ICT, Web Apps, and Data Analytics projects.
- **Blog:** SEO-optimized blog with individual post pages, Open Graph, Twitter Card, and JSON-LD structured data.
- **Skills:** Categorized technical skills with visual icons.
- **Capabilities:** Overview of professional services and expertise.
- **Contact:** Responsive contact form with email integration (Nodemailer).
- **FAQ & Privacy:** Informational pages for visitors.
- **Internationalization:** Language toggle and Google Translate integration.
- **Theme Toggle:** Light/dark mode with persistent user preference.
- **Accessibility:** Keyboard navigation, color contrast, and semantic HTML.
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
│   ├── blog/           # Blog listing and post pages
│   ├── capabilities/   # Capabilities page
│   ├── contact/        # Contact form page & API route
│   ├── faq/            # FAQ page
│   ├── privacy/        # Privacy policy page
│   ├── projects/       # Projects listing and data
│   ├── skills/         # Skills page
│   ├── layout.js       # Root layout
│   ├── page.js         # Home page
│   └── globals.css     # Global styles
├── components/         # Reusable React components (Navbar, Footer, Hero, etc.)
├── public/             # Static assets (images, favicon, etc.)
├── styles/             # Additional CSS (if any)
├── utils/              # Utility functions (e.g., GitHub API helpers)
├── tailwind.config.js  # Tailwind CSS configuration
├── postcss.config.js   # PostCSS configuration
├── package.json        # Project metadata and scripts
└── README.md           # Project documentation
```

---

## ⚙️ Customization

- **Update Content:**  
  - Projects: Edit [`app/projects/projects.js`](app/projects/projects.js)
  - Blog Posts: Edit [`app/blog/blogs.js`](app/blog/blogs.js) and individual blog files
  - Skills & Capabilities: Edit [`app/skills/page.js`](app/skills/page.js) and [`app/capabilities/page.js`](app/capabilities/page.js)
- **Profile Info:**  
  - Hero/About sections: Edit [`components/Hero.js`](components/Hero.js) and [`components/About.js`](components/About.js)
- **Images:**  
  - Replace images in [`public/`](public/) and update imports in components as needed.
- **Translations:**  
  - Update translation files in `/messages/` for i18n.

---

## 🧪 Scripts

- `npm run dev` — Start the development server
- `npm run build` — Build for production
- `npm run start` — Start the production server
- `npm run lint` — Run ESLint
- `npm run postbuild` — Generate sitemap and robots.txt (if using next-sitemap)

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

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Author:** Philip Kelechukwu Orji  
**Contact:** See the [Contact page](app/contact/page.js) or connect via social links in the footer.

---
