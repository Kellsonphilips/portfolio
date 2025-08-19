import BlogPostClient from '../BlogPostClient';
import { getBlogPosts } from '../blogs';
import en from '../../../locales/en.json';

export async function generateMetadata({ params }) {
  const { slug } = params;
  const siteUrl = 'https://philipkelechiorji.vercel.app';

  const posts = getBlogPosts('en');
  const post = posts.find(p => p.slug === slug);

  const defaultTitle = 'Blog Post | Philip Kelechukwu Orji Portfolio';
  const defaultDescription = 'Read insightful articles on ICT, web development, data analytics, and more by Philip Kelechukwu Orji.';
  const defaultImage = `${siteUrl}/Images/profile.jpg`;
  const url = `${siteUrl}/blog/${slug}`;

  if (!post) {
    return {
      title: defaultTitle,
      description: defaultDescription,
      alternates: { canonical: url },
      openGraph: {
        title: defaultTitle,
        description: defaultDescription,
        url,
        siteName: 'Philip Kelechukwu Orji Portfolio',
        images: [
          { url: defaultImage, width: 1200, height: 630, alt: defaultTitle }
        ],
        type: 'article',
        locale: 'en_GB',
      },
      twitter: {
        card: 'summary_large_image',
        site: '@JoinPhotonPhill',
        creator: '@JoinPhotonPhill',
        title: defaultTitle,
        description: defaultDescription,
        images: [ { url: defaultImage, alt: defaultTitle } ],
      },
    };
  }

  const t = (key) => en[key] || key;
  const title = t(post.titleKey);
  const description = t(post.excerptKey);
  const imageUrl = post.image && post.image.startsWith('http') ? post.image : `${siteUrl}${post.image}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: 'Philip Kelechukwu Orji Portfolio',
      images: [
        { url: imageUrl, width: 1200, height: 630, alt: title }
      ],
      type: 'article',
      publishedTime: post.date,
      authors: ['Philip Kelechukwu Orji'],
      locale: 'en_GB',
    },
    twitter: {
      card: 'summary_large_image',
      site: '@JoinPhotonPhill',
      creator: '@JoinPhotonPhill',
      title,
      description,
      images: [ { url: imageUrl, alt: title } ],
    },
  };
}

export default function BlogPostPage({ params }) {
  return <BlogPostClient slug={params.slug} />;
}
