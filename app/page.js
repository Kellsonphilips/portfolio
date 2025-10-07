import '@/app/globals.css';
import Hero from '@/components/Hero';
import About from '@/components/About';
import FeaturedProjects from '@/components/FeaturedProjects';
import CallToAction from '@/components/CallToAction';
import Skills from '../app/skills/page';
import Capabilities from '../app/capabilities/page';
import JsonLdHome from '../components/JsonLdHome';

export const metadata = {
  title:
    "Philip Kelechukwu Orji - Network Engr | Software Engr | Project Manager",
  description:
    "ICT Solution Provider, Software Engineer & Project Manager. Explore my portfolio, projects, skills, and blog.",
  keywords:
    "portfolio, IT Support, Network Engineer, Network Engineering, Network Administration, Network Security, Technical Support, IT Support Specialist, Network Design, Network Implementation, Network Optimization, Network Monitoring, Network Troubleshooting, Network Configuration, Network Performance, Network Documentation, Network Reporting, Network Training, Network Consulting, Cloud Computing, Network, Software Engineer, Project Manager, web development, data analysis, ICT, Philip Orji, Next.js, React, Node.js, Python, Tailwind CSS, software engineer, IT support, cloud computing, data analytics, frontend, backend, full stack, developer, technology, consulting, digital solutions, UI/UX, SaaS, web apps, business intelligence, machine learning, personal website, resume, CV, projects, blog, skills, capabilities, contact, privacy, FAQ, Philip Kelechukwu Orji, Philip Orji, Kellsonphilips, joinphotonphill",
  alternates: {
    canonical: "https://philipkelechiorji.vercel.app/",
  },
  openGraph: {
    title:
      "Philip Kelechukwu Orji - Network Engr | Software Engr | Project Manager",
    description:
      "ICT Solution Provider, Software Engineer & Project Manager. Explore my portfolio, projects, skills, and blog.",
    url: "https://philipkelechiorji.vercel.app/",
    siteName: "Philip Kelechukwu Orji Portfolio",
    images: [
      {
        url: "/Images/profile.jpg",
        width: 800,
        height: 800,
        alt: "Philip Kelechukwu Orji Profile Picture",
      },
    ],
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    site: "@JoinPhotonPhill",
    creator: "@JoinPhotonPhill",
    title:
      "Philip Kelechukwu Orji - Network Engr| Software Engr | Project Manager",
    description:
      "ICT Solution Provider, Software Engineer & Project Manager. Explore my portfolio, projects, skills, and blog.",
    images: [
      {
        url: "/Images/profile.jpg",
        alt: "Philip Kelechukwu Orji Profile Picture",
      },
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
