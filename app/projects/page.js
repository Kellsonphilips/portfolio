import ProjectsPageClient from '../../components/ProjectsPageClient';

export const metadata = {
  title: "Projects | Philip Kelechukwu Orji Portfolio",
  description:
    "Explore a curated selection of ICT, Web App, and Data Analytics projects by Philip Kelechukwu Orji. See technologies, live demos, and GitHub links.",
  alternates: {
    canonical: "https://philipkelechiorji.vercel.app/projects",
  },
  openGraph: {
    title: "Projects | Philip Kelechukwu Orji Portfolio",
    description:
      "Explore a curated selection of ICT, Web App, and Data Analytics projects by Philip Kelechukwu Orji. See technologies, live demos, and GitHub links.",
    url: "https://philipkelechiorji.vercel.app/projects",
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
    title: "Projects | Philip Kelechukwu Orji Portfolio",
    description:
      "Explore a curated selection of ICT, Web App, and Data Analytics projects by Philip Kelechukwu Orji. See technologies, live demos, and GitHub links.",
    images: [
      {
        url: "/Images/profile.jpg",
        alt: "Philip Kelechukwu Orji Profile Picture"
      }
    ],
  },
};

export default function Projects() {
  return <ProjectsPageClient />;
}
