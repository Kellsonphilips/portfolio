'use client';

const blogPosts = [
  {
    title: 'Getting Started with Next.js',
    excerpt: 'Learn how to build modern web applications with Next.js...',
    date: '2024-03-15',
    readTime: '5 min read',
    category: 'Web Development'
  },
  {
    title: 'Data Analysis Best Practices',
    excerpt: 'Essential tips and techniques for effective data analysis...',
    date: '2024-03-10',
    readTime: '8 min read',
    category: 'Data Science'
  }
];

export default function Blog() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Blog</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogPosts.map((post) => (
          <article key={post.title} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm text-gray-500">{post.date}</span>
                <span className="text-gray-300">•</span>
                <span className="text-sm text-gray-500">{post.readTime}</span>
              </div>
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                {post.category}
              </span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
} 