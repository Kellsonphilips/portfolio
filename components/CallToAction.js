'use client';

import Button from './Button';
import useScrollReveal from './useScrollReveal';
import ErrorBoundary from './ErrorBoundary';

const CTA_TITLE = "Ready to Transform Your Ideas into Reality?";
const CTA_SUBTITLE = "Let's build something amazing together. Reach out and let's discuss your next project Idea(s)!";
const CTA_BUTTON = "Get A Free Consultation";

export default function CallToAction() {
  const headerRef = useScrollReveal('left', 0);
  const paraRef = useScrollReveal('right', 0.15);
  const buttonRef = useScrollReveal('left', 0.3);

  return (
    <ErrorBoundary>
      <section className="py-16 bg-primary-color text-text-light dark:text-text-dark px-8 md:pl-10 lg:pl-15 text-center">
        <div className="container mx-auto px-8">
          <h2 ref={headerRef} className="text-3xl font-bold mb-4">
            {CTA_TITLE}
          </h2>
          <p ref={paraRef} className="text-xl mb-8">
            {CTA_SUBTITLE}
          </p>
          <div ref={buttonRef} className="inline-block">
            <Button
              href="/contact"
              variant="primary"
              className="card-3d-glow"
              showArrow
            >
              {CTA_BUTTON}
            </Button>
          </div>
        </div>
      </section>
    </ErrorBoundary>
  );
} 