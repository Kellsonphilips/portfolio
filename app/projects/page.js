import ProjectsPageClient from '../../components/ProjectsPageClient';

export const metadata = {
  title: "Projects | Philip Kelechukwu Orji - ICT Solutions & Web Applications Portfolio",
  description: "Explore a comprehensive portfolio of ICT solutions, web applications, cloud computing projects, and network engineering implementations by Philip Kelechukwu Orji. View live demos, GitHub repositories, and detailed project information showcasing expertise in React, Next.js, AWS, Docker, Kubernetes, and more.",
  keywords: "projects, portfolio, ICT solutions, web applications, cloud computing projects, network engineering, React projects, Next.js projects, AWS projects, Docker projects, Kubernetes projects, enterprise network infrastructure, cloud migration, cybersecurity, e-commerce platform, data analytics dashboard, Philip Kelechukwu Orji, software engineering projects, full stack projects, DevOps projects",
  alternates: {
    canonical: "https://philipkelechiorji.vercel.app/projects",
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
    title: "Projects | Philip Kelechukwu Orji Portfolio",
    description: "Explore ICT solutions, web applications, cloud computing projects, and network engineering implementations. View live demos and GitHub repositories.",
    url: "https://philipkelechiorji.vercel.app/projects",
    siteName: "Philip Kelechukwu Orji Portfolio",
    images: [
      {
        url: "https://philipkelechiorji.vercel.app/Images/profile/profilelogoNobg.png",
        width: 1200,
        height: 630,
        alt: "Philip Kelechukwu Orji Projects Portfolio"
      }
    ],
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    site: "@JoinPhotonPhill",
    creator: "@JoinPhotonPhill",
    title: "Projects | Philip Kelechukwu Orji Portfolio",
    description: "Explore ICT solutions, web applications, cloud computing projects, and network engineering implementations.",
    images: [
      {
        url: "https://philipkelechiorji.vercel.app/Images/profile/profilelogoNobg.png",
        alt: "Philip Kelechukwu Orji Projects Portfolio"
      }
    ],
  },
};

export default function Projects() {
  return <ProjectsPageClient />;
}
