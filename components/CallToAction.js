'use client';

import Button from './Button';
import useScrollReveal from './useScrollReveal';

export default function CallToAction() {
  const headerRef = useScrollReveal('left', 0);
  const paraRef = useScrollReveal('right', 0.15);
  const buttonRef = useScrollReveal('left', 0.3);

  return (
    <section className="py-16 bg-primary-color text-text-light dark:text-text-dark text-center">
      <div className="container mx-auto px-6">
        <h2 ref={headerRef} className="text-3xl font-bold mb-4">
          Ready to Transform Your Ideas into Reality?
        </h2>
        <p ref={paraRef} className="text-xl mb-8">
          Let&apos;s build something amazing together. Reach out and let&apos;s
          discuss your next project Idea(s)!
        </p>
        <div ref={buttonRef} className="inline-block">
          <Button
            href="/contact"
            variant="primary"
            className="card-3d-glow"
            showArrow
          >
            Get A Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
} 