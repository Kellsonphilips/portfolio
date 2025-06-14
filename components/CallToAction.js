'use client';

import Button from './Button';

export default function CallToAction() {
  return (
    <section className="py-16 bg-primary-color text-white text-center animate-fade-in">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Ideas into Reality?</h2>
        <p className="text-xl mb-8">Let&apos;s build something amazing together. Reach out and let&apos;s discuss your next project!</p>
        <Button 
          href="/contact"
          variant="primary"
        >
          Get Your Free Consultation
        </Button>
      </div>
    </section>
  );
} 