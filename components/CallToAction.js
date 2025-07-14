'use client';

import Button from './Button';
import useScrollReveal from './useScrollReveal';
import { useLanguage } from './LanguageContext';
import ErrorBoundary from './ErrorBoundary';

export default function CallToAction() {
  const headerRef = useScrollReveal('left', 0);
  const paraRef = useScrollReveal('right', 0.15);
  const buttonRef = useScrollReveal('left', 0.3);
  const { t } = useLanguage();

  return (
    <ErrorBoundary>
      <section className="py-16 bg-primary-color text-text-light dark:text-text-dark px-8 md:pl-10 lg:pl-15 text-center">
        <div className="container mx-auto px-8">
          <h2 ref={headerRef} className="text-3xl font-bold mb-4">
            {t("cta.title")}
          </h2>
          <p ref={paraRef} className="text-xl mb-8">
            {t("cta.subtitle")}
          </p>
          <div ref={buttonRef} className="inline-block">
            <Button
              href="/contact"
              variant="primary"
              className="card-3d-glow"
              showArrow
            >
              {t("cta.button")}
            </Button>
          </div>
        </div>
      </section>
    </ErrorBoundary>
  );
} 