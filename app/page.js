import '@/app/globals.css';
import Hero from '@/components/Hero';
import About from '@/components/About';
import FeaturedProjects from '@/components/FeaturedProjects';
import CallToAction from '@/components/CallToAction';
import Skills from '../app/skills/page';
import Capabilities from '../app/capabilities/page';
import JsonLdHome from '../components/JsonLdHome';

export const metadata = {
  title: "Philip Kelechukwu Orji - IT Support | Web Dev | Data Analyst",
  description: "ICT Solution Provider, Software Engineer & Data Analyst. Explore my portfolio, projects, skills, and blog.",
  keywords: "portfolio, web development, data analysis, ICT, Philip Orji, Next.js, React, Node.js, Python, Tailwind CSS, software engineer, IT support, cloud computing, data analytics, frontend, backend, full stack, developer, technology, consulting, digital solutions, UI/UX, SaaS, web apps, business intelligence, machine learning, personal website, resume, CV, projects, blog, skills, capabilities, contact, privacy, FAQ, Philip Kelechukwu Orji, Philip Orji, Kellsonphilips, joinphotonphill",
  alternates: {
    canonical: "https://philipkelechiorji.vercel.app/",
  },
  openGraph: {
    title: "Philip Kelechukwu Orji - IT Support | Web Dev | Data Analyst",
    description: "ICT Solution Provider, Software Engineer & Data Analyst. Explore my portfolio, projects, skills, and blog.",
    url: "https://philipkelechiorji.vercel.app/",
    siteName: "Philip Kelechukwu Orji Portfolio",
    images: [
      {
        url: "/Images/profile.jpg",
        width: 800,
        height: 800,
        alt: "Philip Kelechukwu Orji Profile Picture"
      }
    ],
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    site: "@JoinPhotonPhill",
    creator: "@JoinPhotonPhill",
    title: "Philip Kelechukwu Orji - IT Support | Web Dev | Data Analyst",
    description: "ICT Solution Provider, Software Engineer & Data Analyst. Explore my portfolio, projects, skills, and blog.",
    images: [
      {
        url: "/Images/profile.jpg",
        alt: "Philip Kelechukwu Orji Profile Picture"
      }
    ],
  },
};

export default function Home() {
  return (
    <>
      <JsonLdHome />
      <div className="min-h-screen bg-background text-text">
        <Hero />
        <About />
        <FeaturedProjects />
        <Skills />
        <Capabilities />
        <CallToAction />
      </div>
    </>
  );
}
