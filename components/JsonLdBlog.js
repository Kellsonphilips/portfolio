'use client';

export default function JsonLdBlog({ title, description, url, datePublished, image }) {
  const blogLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    url,
    datePublished,
    author: {
      '@type': 'Person',
      name: 'Philip Kelechukwu Orji',
      url: 'https://philipkelechiorji.vercel.app/'
    },
    image,
    publisher: {
      '@type': 'Organization',
      name: 'Philip Kelechukwu Orji Portfolio',
      logo: {
        '@type': 'ImageObject',
        url: 'https://philipkelechiorji.vercel.app/Images/profile.jpg'
      }
    }
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogLd) }} />
  );
} 