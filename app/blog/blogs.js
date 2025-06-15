import CloudComputingBlog from "./blogs/understanding-cloud-computing";
import GettingStartedWithNext from "./blogs/nextjs-getting-started";
import DataAnalysisBestPractices from "./blogs/data-analysis-best-practices";
import MachineLearningDeepDive from "./blogs/machine-learning-deep-dive";

export const blogPosts = [
  {
    slug: 'getting-started-with-nextjs',
    title: 'Getting Started with Next.js',
    excerpt: 'Learn how to build modern web applications with Next.js...',
    date: '2024-03-15',
    readTime: '5 min read',
    category: 'Web Development',
    content: GettingStartedWithNext,
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000'
  },
  {
    slug: 'data-analysis-best-practices',
    title: 'Data Analysis Best Practices',
    excerpt: 'Essential tips and techniques for effective data analysis...',
    date: '2024-03-10',
    readTime: '8 min read',
    category: 'Data Science',
    content: DataAnalysisBestPractices,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000'
  },
  {
    slug: 'a-deep-dive-into-machine-learning',
    title: 'A Deep Dive into Machine Learning',
    excerpt: 'Understand the core concepts and applications of ML...',
    date: '2024-04-01',
    readTime: '10 min read',
    category: 'Artificial Intelligence',
    content: MachineLearningDeepDive,
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000'
  },
  {
    slug: 'understanding-cloud-computing',
    title: 'Understanding Cloud Computing',
    excerpt: 'An introduction to the benefits and types of cloud services...',
    date: '2024-04-05',
    readTime: '7 min read',
    category: 'Cloud Technologies',
    content: CloudComputingBlog,
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1000'
  }
]; 