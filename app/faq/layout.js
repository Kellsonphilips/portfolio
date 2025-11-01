import JsonLdFAQ from '@/components/JsonLdFAQ';

export const metadata = {
  title: 'FAQ - Frequently Asked Questions | Philip Kelechukwu Orji Portfolio',
  description: 'Frequently asked questions about Philip Kelechukwu Orji\'s services, expertise, technologies, project management approach, pricing, and more. Get answers about web development, cloud computing, network engineering, and ICT solutions.',
  keywords: 'FAQ, frequently asked questions, Philip Kelechukwu Orji, services, expertise, web development, cloud computing, network engineering, project management, pricing, technologies, consulting, ICT solutions, software engineering, DevOps, data analytics',
  alternates: {
    canonical: 'https://philipkelechiorji.vercel.app/faq',
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
    title: 'FAQ - Frequently Asked Questions | Philip Kelechukwu Orji',
    description: 'Frequently asked questions about services, expertise, technologies, and project management approach. Get answers about web development, cloud computing, and ICT solutions.',
    url: 'https://philipkelechiorji.vercel.app/faq',
    siteName: 'Philip Kelechukwu Orji Portfolio',
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary',
    site: '@JoinPhotonPhill',
    creator: '@JoinPhotonPhill',
    title: 'FAQ - Frequently Asked Questions | Philip Kelechukwu Orji',
    description: 'Frequently asked questions about services, expertise, and technologies.',
  },
};

export default function FAQLayout({ children }) {
  return (
    <>
      <JsonLdFAQ />
      {children}
    </>
  );
}

