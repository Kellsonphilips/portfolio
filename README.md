# Portfolio Website

This is a modern, responsive portfolio website built with [Next.js](https://nextjs.org), showcasing projects, skills, blog posts, and professional capabilities. The site is styled with [Tailwind CSS](https://tailwindcss.com) and features a clean, animated UI for an engaging user experience.

## Features

- **Landing Page:** Animated hero section, featured projects, and call-to-action.
- **Projects:** Tabbed interface to browse ICT, Web Apps, and Data Analytics projects.
- **Blog:** List of blog posts with individual post pages.
- **Skills:** Categorized technical skills display.
- **Capabilities:** Overview of professional services and expertise.
- **Contact:** Responsive contact form.
- **FAQ & Privacy:** Informational pages for visitors.
- **Responsive Design:** Mobile-friendly and accessible.
- **Dark Mode Ready:** Uses CSS variables for easy theming.

## Getting Started

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

3. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser:**
   Visit [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
.
├── app/                # Next.js app directory (routing, pages, layouts)
│   ├── blog/           # Blog listing and post pages
│   ├── capabilities/   # Capabilities page
│   ├── contact/        # Contact form page
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

## Customization

- **Update Content:**  
  - Projects: Edit [`app/projects/projects.js`](app/projects/projects.js)
  - Blog Posts: Edit [`app/blog/blogs.js`](app/blog/blogs.js)
  - Skills & Capabilities: Edit [`app/skills/page.js`](app/skills/page.js) and [`app/capabilities/page.js`](app/capabilities/page.js)
- **Profile Info:**  
  - Hero/About sections: Edit [`components/Hero.js`](components/Hero.js) and [`components/About.js`](components/About.js)
- **Images:**  
  - Replace images in [`public/`](public/) and update imports in components as needed.

## Scripts

- `npm run dev` — Start the development server
- `npm run build` — Build for production
- `npm run start` — Start the production server
- `npm run lint` — Run ESLint

## Technologies Used

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)
- [PostCSS](https://postcss.org/)
- [ESLint](https://eslint.org/)

## Deployment

The site can be easily deployed on [Vercel](https://vercel.com/) or any platform supporting Next.js.

1. Push your code to GitHub.
2. Connect your repository to Vercel.
3. Follow the deployment instructions.

For more details, see the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## License

This project is open source and available under the [MIT License](LICENSE).

---

**Author:** Philip Kelechukwu Orji  
**Contact:** See the [Contact page](app/contact/page.js) or connect via social links in the footer.

---
