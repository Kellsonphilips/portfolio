'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { faqKeys } from './faqs';
import useScrollReveal from '@/components/useScrollReveal';
import { useLanguage } from '@/components/LanguageContext';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const headerRef = useScrollReveal('left', 0);
  const cardRefs = useRef([]);
  const animationInitialized = useRef(false);
  const { t } = useLanguage();

  // Initialize animations only once
  useEffect(() => {
    if (typeof window === 'undefined' || animationInitialized.current) return;
    
    const initializeAnimations = () => {
      cardRefs.current.forEach((ref, idx) => {
        if (!ref) return;
        
        // Set initial state
        ref.style.opacity = 0;
        const direction = Math.random() < 0.5 ? 'left' : 'right';
        ref.style.transform = direction === 'left' ? 'translateX(-60px)' : 'translateX(60px)';
        ref.style.transition = `opacity 0.8s cubic-bezier(0.23, 1, 0.32, 1) ${0.1 * idx}s, transform 0.8s cubic-bezier(0.23, 1, 0.32, 1) ${0.1 * idx}s`;
        
        // Create intersection observer
        const handleReveal = (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              ref.style.opacity = 1;
              ref.style.transform = 'translateX(0)';
            }
          });
        };
        
        const observer = new window.IntersectionObserver(handleReveal, {
          threshold: 0.1,
          rootMargin: '50px'
        });
        
        observer.observe(ref);
        
        // Store observer for cleanup
        ref._observer = observer;
      });
    };

    // Small delay to ensure DOM is ready
    const timer = setTimeout(initializeAnimations, 100);
    animationInitialized.current = true;

    // Capture refs for cleanup
    const currentRefs = cardRefs.current;

    return () => {
      clearTimeout(timer);
      // Cleanup observers using captured refs
      currentRefs.forEach(ref => {
        if (ref && ref._observer) {
          ref._observer.disconnect();
        }
      });
    };
  }, []); // Only run once on mount

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = faqKeys.map(faq => ({
    question: t(faq.question),
    answer: t(faq.answer)
  }));

  return (
    <div className="pt-24">
      <div className="container h-full text-text-light dark:text-text-dark mx-auto px-4 py-8">
        <h1 ref={headerRef} className="text-3xl flex justify-center font-bold mb-8">
          {t('faq.title')}
        </h1>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              ref={el => cardRefs.current[index] = el}
              className="dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="card-3d-glow w-full px-6 py-4 text-left flex justify-between items-center"
              >
                <h3 className="font-semibold m-0">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </button>
              {openIndex === index && (
                <div className="card-3d-glow px-6 pb-4">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 