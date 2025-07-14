
import BlogPostClient from '../BlogPostClient';

export const metadata = {
  title: "Blog Post | Philip Kelechukwu Orji Portfolio",
  description: "Read insightful articles on ICT, web development, data analytics, and more by Philip Kelechukwu Orji.",
  alternates: {
    canonical: "https://philipkelechiorji.vercel.app/blog/[slug]",
  },
  openGraph: {
    title: "Blog Post | Philip Kelechukwu Orji Portfolio",
    description: "Read insightful articles on ICT, web development, data analytics, and more by Philip Kelechukwu Orji.",
    url: "https://philipkelechiorji.vercel.app/blog/[slug]",
    siteName: "Philip Kelechukwu Orji Portfolio",
    images: [
      {
        url: "/Images/profile.jpg",
        width: 800,
        height: 800,
        alt: "Philip Kelechukwu Orji Profile Picture"
      }
    ],
    type: "article",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    site: "@JoinPhotonPhill",
    creator: "@JoinPhotonPhill",
    title: "Blog Post | Philip Kelechukwu Orji Portfolio",
    description: "Read insightful articles on ICT, web development, data analytics, and more by Philip Kelechukwu Orji.",
    images: [
      {
        url: "/Images/profile.jpg",
        alt: "Philip Kelechukwu Orji Profile Picture"
      }
    ],
  },
};

export default function BlogPostPage({ params }) {
  return <BlogPostClient slug={params.slug} />;
} 
