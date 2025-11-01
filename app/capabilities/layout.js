export const metadata = {
  title: 'Capabilities & Services | Philip Kelechukwu Orji - Professional ICT Services',
  description: 'Professional capabilities and services offered by Philip Kelechukwu Orji including Web Development, Cloud Computing, Network Engineering, Data Analytics, Project Management, and ICT Solutions. Expert services in React, Next.js, AWS, Docker, Kubernetes, and more.',
  keywords: 'capabilities, services, web development services, cloud computing services, network engineering services, data analytics services, project management, ICT solutions, professional services, consulting, technical expertise, Philip Kelechukwu Orji, software development services, cloud services, network services',
  alternates: {
    canonical: 'https://philipkelechiorji.vercel.app/capabilities',
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
    title: 'Capabilities & Services | Philip Kelechukwu Orji',
    description: 'Professional capabilities including Web Development, Cloud Computing, Network Engineering, Data Analytics, and Project Management.',
    url: 'https://philipkelechiorji.vercel.app/capabilities',
    siteName: 'Philip Kelechukwu Orji Portfolio',
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary',
    site: '@JoinPhotonPhill',
    creator: '@JoinPhotonPhill',
    title: 'Capabilities & Services | Philip Kelechukwu Orji',
    description: 'Professional ICT capabilities and services.',
  },
};

export default function CapabilitiesLayout({ children }) {
  return children;
}

