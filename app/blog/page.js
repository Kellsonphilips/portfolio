'use client';

import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from './blogs';

export default function Blog() {
  return (
    <div className="pt-24">
      <div className="container mx-auto px-4 py-8 pt-24">
        <h1 className="text-4xl font-bold mb-8 text-text-light dark:text-text-dark text-center">
          Blog Posts
        </h1>
        <p className="text-xl flex justify-center text-center mb-8">
          Read some of  my blog posts and if you my expertise in technical writing, Get in Touch!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.slug} className="block">
              <div className="card rounded-lg shadow-lg hover-lift h-full flex flex-col overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 text-text-light dark:text-text-dark">
                  <h2 className="text-xl font-semibold mb-2 text-primary hover:text-primary/50 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm mb-4">
                    {new Date(post.date).toLocaleDateString()}
                  </p>
                  <p className="text-text flex-grow">{post.excerpt}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 