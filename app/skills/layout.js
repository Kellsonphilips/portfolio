export const metadata = {
  title: 'Skills & Expertise | Philip Kelechukwu Orji - Technical Skills Portfolio',
  description: 'Comprehensive technical skills and expertise of Philip Kelechukwu Orji including Frontend Development (React, Next.js, TypeScript), Backend Development (Node.js, Python, Java), Network Engineering (Firewalls, Routing/Switching, VPN), and DevOps & Tools (Git, Docker, Kubernetes, AWS, CI/CD, Linux).',
  keywords: 'skills, technical skills, expertise, frontend development, backend development, network engineering, DevOps, React, Next.js, Node.js, Python, TypeScript, Docker, Kubernetes, AWS, CI/CD, Linux, Git, Java, MongoDB, SQL, firewalls, routing, switching, VPN, security auditing, Philip Kelechukwu Orji, software engineer skills, ICT skills, cloud skills',
  alternates: {
    canonical: 'https://philipkelechiorji.vercel.app/skills',
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
    title: 'Skills & Expertise | Philip Kelechukwu Orji',
    description: 'Comprehensive technical skills including Frontend Development, Backend Development, Network Engineering, and DevOps & Tools.',
    url: 'https://philipkelechiorji.vercel.app/skills',
    siteName: 'Philip Kelechukwu Orji Portfolio',
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary',
    site: '@JoinPhotonPhill',
    creator: '@JoinPhotonPhill',
    title: 'Skills & Expertise | Philip Kelechukwu Orji',
    description: 'Comprehensive technical skills and expertise.',
  },
};

export default function SkillsLayout({ children }) {
  return children;
}

