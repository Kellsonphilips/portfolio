'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageContext';
import { getBlogPosts } from './blogs';
import useScrollReveal from '@/components/useScrollReveal';
import Image from 'next/image';

export default function BlogIndexClient() {
  const { t, language } = useLanguage();
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState(t('blog.all'));

  // Get blog posts for current language
  const blogPosts = getBlogPosts(language);

  // Scroll reveal refs for main elements
  const headerRef = useScrollReveal('left', 0);
  const paraRef = useScrollReveal('right', 0.15);
  const searchRef = useScrollReveal('left', 0.3);
  const filterRef = useScrollReveal('right', 0.45);

  // Create refs for blog cards with staggered delays
  const card1Ref = useScrollReveal('left', 0.6);
  const card2Ref = useScrollReveal('right', 0.7);
  const card3Ref = useScrollReveal('left', 0.8);
  const card4Ref = useScrollReveal('right', 0.9);

  // Handle search
  const handleSearchChange = (e) => {
    const searchTerm = e.target.value;
    setSearch(searchTerm);
  };

  // Filtered posts (search and filter using translated values)
  const filteredPosts = blogPosts.filter(post => {
    const translatedTitle = t(post.titleKey);
    const translatedExcerpt = t(post.excerptKey);
    const translatedCategory = t(post.categoryKey);
    const matchesSearch =
      translatedTitle.toLowerCase().includes(search.toLowerCase()) ||
      translatedExcerpt.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === t('blog.all') || translatedCategory === category;
    return matchesSearch && matchesCategory;
  });

  // Update category state when language changes
  useEffect(() => {
    setCategory(t('blog.all'));
  }, [t]);

  const categories = [
    t('blog.all'),
    t('blog.category.webDevelopment'),
    t('blog.category.cloudTechnologies'),
    t('blog.category.dataScience'),
    t('blog.category.artificialIntelligence'),
    t('blog.category.ictSolutions')
  ];

  return (
    <div className="pt-24 px-8 md:pl-10 lg:pl-15">
      <div className="container mx-auto px-4 py-8 mt-20">
        <h1
          ref={headerRef}
          className="text-3xl text-primary text-center font-bold mb-8"
        >
          {t("blog.title")}
        </h1>
        <p
          ref={paraRef}
          className="text-lg text-center text-secondary-color mb-8 text-wrap"
        >
          {t("blog.subtitle")}
        </p>

        <div className="flex flex-row gap-2 sm:gap-4 mb-8 justify-center items-center flex-wrap">
          <div ref={searchRef} className="w-32 sm:w-48 md:w-64">
            <input
              type="text"
              placeholder={t("blog.searchPlaceholder")}
              value={search}
              onChange={handleSearchChange}
              className="w-full p-2 sm:p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark text-sm sm:text-base"
            />
          </div>
          <div ref={filterRef} className="w-24 sm:w-36 md:w-48">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-2 sm:p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark text-sm sm:text-base"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post, idx) => {
            // Assign refs based on index
            const cardRef =
              idx === 0
                ? card1Ref
                : idx === 1
                ? card2Ref
                : idx === 2
                ? card3Ref
                : card4Ref;

            return (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block no-underline my-6"
              >
                <div
                  ref={cardRef}
                  className="card-3d-glow dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer h-full"
                >
                  <div className="h-48 w-full relative">
                    <Image
                      src={post.image}
                      alt={t(post.titleKey)}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-sm text-[#DC8923] font-semibold">
                      {t(post.categoryKey)}
                    </span>
                    <h3 className="text-xl font-bold text-text-light dark:text-text-dark mt-2 mb-3">
                      {t(post.titleKey)}
                    </h3>
                    <p className="text-text-light dark:text-text-dark mb-4">
                      {t(post.excerptKey)}
                    </p>
                    <span className="inline-flex items-center text-[#DC8923] hover:text-[#372207] dark:hover:text-[#DC8923] transition-colors">
                      {t("about.readMore")} →
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

