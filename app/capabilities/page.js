'use client';

import Image from 'next/image';
import { useLanguage } from '@/components/LanguageContext';
import useScrollReveal from '@/components/useScrollReveal';
import { capabilities } from './capabilities';

export default function Capabilities() {
  const { t } = useLanguage();
  const headerRef = useScrollReveal('left', 0);
  const paraRef = useScrollReveal('right', 0.15);

  // Create refs for capability cards with staggered delays
  const card1Ref = useScrollReveal('left', 0.3);
  const card2Ref = useScrollReveal('right', 0.45);
  const card3Ref = useScrollReveal('left', 0.6);
  const card4Ref = useScrollReveal('right', 0.75);

  return (
    <div className="pt-24">
      <div className="container mx-auto px-4 py-12 sm:py-8 mt-20">
        <h1 ref={headerRef} className="text-3xl text-center font-bold mb-8">
          {t('capabilities.title')}
        </h1>
        <p ref={paraRef} className="text-lg text-center text-text-light dark:text-text-dark mb-8 text-wrap">
          {t('capabilities.subtitle')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {capabilities.map((capability, idx) => {
            // Assign refs based on index
            const cardRef = idx === 0 ? card1Ref : idx === 1 ? card2Ref : idx === 2 ? card3Ref : card4Ref;
            
            return (
              <div
                key={capability.titleKey}
                ref={cardRef}
                className="card-3d-glow bg-background-light/10 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 border border-background-light/20 dark:border-background-dark/30"
              >
                <div className="h-48 w-full relative">
                  <Image
                    src={capability.image}
                    alt={t(capability.titleKey)}
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6">
                  <div className="text-4xl mb-4">{capability.icon}</div>
                  <h2 className="text-xl text-primary font-semibold mb-2">
                    {t(capability.titleKey)}
                  </h2>
                  <p className="text-text-secondary-light dark:text-text-secondary-dark">
                    {t(capability.descKey)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
} 