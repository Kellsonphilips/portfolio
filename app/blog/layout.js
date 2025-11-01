import { getBlogPosts } from './blogs';
import en from '../../locales/en.json';

export const metadata = {
  title: 'Blog Posts | Philip Kelechukwu Orji - Technology Articles & Insights',
  description: 'Read insightful articles on ICT solutions, web development, cloud computing, data analytics, DevOps, and more by Philip Kelechukwu Orji. Expert insights on technology, career guides, and best practices.',
  keywords: 'blog, technology blog, ICT solutions, web development, cloud computing, data analytics, DevOps, software engineering, career guide, Philip Kelechukwu Orji, Philip Orji, React, Next.js, AWS, Docker, Kubernetes, machine learning, AI, network engineering, project management',
  alternates: {
    canonical: 'https://philipkelechiorji.vercel.app/blog',
  },
  openGraph: {
    title: 'Blog Posts | Philip Kelechukwu Orji',
    description: 'Read insightful articles on ICT solutions, web development, cloud computing, data analytics, DevOps, and more.',
    url: 'https://philipkelechiorji.vercel.app/blog',
    siteName: 'Philip Kelechukwu Orji Portfolio',
    images: [
      {
        url: 'https://philipkelechiorji.vercel.app/Images/profile/profilelogoNobg.png',
        width: 1200,
        height: 630,
        alt: 'Philip Kelechukwu Orji Blog',
      },
    ],
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@JoinPhotonPhill',
    creator: '@JoinPhotonPhill',
    title: 'Blog Posts | Philip Kelechukwu Orji',
    description: 'Read insightful articles on ICT solutions, web development, cloud computing, data analytics, DevOps, and more.',
    images: [
      {
        url: 'https://philipkelechiorji.vercel.app/Images/profile/profilelogoNobg.png',
        alt: 'Philip Kelechukwu Orji Blog',
      },
    ],
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
};

export default function BlogLayout({ children }) {
  const siteUrl = 'https://philipkelechiorji.vercel.app';
  const posts = getBlogPosts('en');
  const t = (key) => en[key] || key;

  // Generate Blog structured data
  const blogLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Philip Kelechukwu Orji Blog',
    description: 'Technology blog covering ICT solutions, web development, cloud computing, data analytics, DevOps, and more.',
    url: `${siteUrl}/blog`,
    author: {
      '@type': 'Person',
      name: 'Philip Kelechukwu Orji',
      url: siteUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Philip Kelechukwu Orji Portfolio',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/Images/profile/profilelogoNobg.png`,
        width: 800,
        height: 800,
      },
    },
    blogPost: posts.map((post) => ({
      '@type': 'BlogPosting',
      headline: t(post.titleKey),
      url: `${siteUrl}/blog/${post.slug}`,
      datePublished: post.date,
      image: post.image 
        ? (post.image.startsWith('http') ? post.image : `${siteUrl}${post.image.startsWith('/') ? '' : '/'}${post.image}`)
        : `${siteUrl}/Images/profile/profilelogoNobg.png`,
      author: {
        '@type': 'Person',
        name: 'Philip Kelechukwu Orji',
      },
    })),
  };

  const collectionPageLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Blog Posts',
    description: 'Collection of technology blog posts by Philip Kelechukwu Orji',
    url: `${siteUrl}/blog`,
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: posts.length,
      itemListElement: posts.map((post, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'BlogPosting',
          headline: t(post.titleKey),
          url: `${siteUrl}/blog/${post.slug}`,
          datePublished: post.date,
        },
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageLd) }}
      />
      {children}
    </>
  );
}

