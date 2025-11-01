import '@/app/globals.css';
import Hero from '@/components/Hero';
import About from '@/components/About';
import FeaturedProjects from '@/components/FeaturedProjects';
import CallToAction from '@/components/CallToAction';
import Skills from '../app/skills/page';
import Capabilities from '../app/capabilities/page';
import Testimonials from '@/components/Testimonials';
import JsonLdHome from '../components/JsonLdHome';

export const metadata = {
  title: "Philip Kelechukwu Orji - ICT Solution Provider | Software Engineer | Project Manager | Network Engineer",
  description: "Professional ICT Solution Provider, Software Engineer, and Project Manager specializing in web development, cloud computing, network engineering, and data analytics. Explore my portfolio, projects, technical skills, capabilities, and technology blog. Expert in React, Next.js, Node.js, AWS, Docker, Kubernetes, and DevOps.",
  keywords: "Philip Kelechukwu Orji, Philip Orji, ICT Solution Provider, Software Engineer, Project Manager, Network Engineer, web development, cloud computing, AWS, Docker, Kubernetes, DevOps, React, Next.js, Node.js, Python, TypeScript, network security, cloud migration, data analytics, machine learning, full stack developer, backend developer, frontend developer, cloud engineer, DevOps engineer, IT consultant, software development, ICT solutions, network engineering, system administration, cloud infrastructure, CI/CD, microservices, portfolio, professional services, freelance developer, Kellsonphilips, JoinPhotonPhill, technology blog, career guide, technical expertise, business solutions, digital transformation",
  authors: [{ name: "Philip Kelechukwu Orji" }],
  creator: "Philip Kelechukwu Orji",
  publisher: "Philip Kelechukwu Orji Portfolio",
  alternates: {
    canonical: "https://philipkelechiorji.vercel.app/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Philip Kelechukwu Orji - ICT Solution Provider | Software Engineer | Project Manager",
    description: "Professional ICT Solution Provider, Software Engineer, and Project Manager specializing in web development, cloud computing, network engineering, and data analytics. Expert in React, Next.js, AWS, Docker, and Kubernetes.",
    url: "https://philipkelechiorji.vercel.app/",
    siteName: "Philip Kelechukwu Orji Portfolio",
    images: [
      {
        url: "https://philipkelechiorji.vercel.app/Images/profile/profilelogoNobg.png",
        width: 1200,
        height: 1200,
        alt: "Philip Kelechukwu Orji - ICT Solution Provider, Software Engineer & Project Manager",
      },
    ],
    type: "website",
    locale: "en_GB",
    localeAlternate: ["fr_FR", "es_ES", "de_DE", "zh_CN"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@JoinPhotonPhill",
    creator: "@JoinPhotonPhill",
    title: "Philip Kelechukwu Orji - ICT Solution Provider | Software Engineer | Project Manager",
    description: "Professional ICT Solution Provider, Software Engineer, and Project Manager. Expert in web development, cloud computing, network engineering, and data analytics.",
    images: [
      {
        url: "https://philipkelechiorji.vercel.app/Images/profile/profilelogoNobg.png",
        alt: "Philip Kelechukwu Orji - ICT Solution Provider, Software Engineer & Project Manager",
      },
    ],
  },
  other: {
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'apple-mobile-web-app-title': 'Philip Orji Portfolio',
    'mobile-web-app-capable': 'yes',
    'theme-color': '#DC8923',
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
        <Testimonials />
        <CallToAction />
      </div>
    </>
  );
}
