export const metadata = {
  title: 'Contact | Philip Kelechukwu Orji - Get In Touch',
  description: 'Contact Philip Kelechukwu Orji for professional ICT solutions, software engineering, cloud computing, network engineering, and project management services. Reach out via the contact form or email for inquiries about web development, cloud migration, network infrastructure, and technical consulting.',
  keywords: 'contact, get in touch, inquiry, professional services, ICT solutions, software engineering, cloud computing, network engineering, project management, consulting, Philip Kelechukwu Orji, hire developer, technical consultant, contact form',
  alternates: {
    canonical: 'https://philipkelechiorji.vercel.app/contact',
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
    title: 'Contact | Philip Kelechukwu Orji',
    description: 'Contact for professional ICT solutions, software engineering, cloud computing, and network engineering services.',
    url: 'https://philipkelechiorji.vercel.app/contact',
    siteName: 'Philip Kelechukwu Orji Portfolio',
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary',
    site: '@JoinPhotonPhill',
    creator: '@JoinPhotonPhill',
    title: 'Contact | Philip Kelechukwu Orji',
    description: 'Get in touch for professional ICT solutions and technical services.',
  },
};

export default function ContactLayout({ children }) {
  return children;
}

