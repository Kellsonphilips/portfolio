'use client';
import { useLanguage } from '@/components/LanguageContext';
import useScrollReveal from '@/components/useScrollReveal';

export default function Privacy() {
  const { t } = useLanguage();
  
  // Scroll reveal refs
  const headerRef = useScrollReveal('left', 0);
  const introRef = useScrollReveal('right', 0.15);
  const collectRef = useScrollReveal('left', 0.3);
  const useRef = useScrollReveal('right', 0.45);
  const securityRef = useScrollReveal('left', 0.6);
  const rightsRef = useScrollReveal('right', 0.75);
  const thirdPartyRef = useScrollReveal('left', 0.9);
  const changesRef = useScrollReveal('right', 1.05);
  const contactRef = useScrollReveal('left', 1.2);
  const lastUpdatedRef = useScrollReveal('right', 1.35);
  
  return (
    <div className="pt-24">
      <div className="container text-text-light dark:text-text-dark mx-auto">
        <h1 ref={headerRef} className="text-3xl flex justify-center font-bold mb-8">
          {t('privacy.title')}
        </h1>

        <div className="max-w-3xl mx-auto prose">
          <section ref={introRef} className="text-text-light dark:text-text-dark mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t('privacy.intro.title')}</h2>
            <p className="mb-4">{t('privacy.intro')}</p>
          </section>

          <section ref={collectRef} className="text-text-light dark:text-text-dark mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t('privacy.infoWeCollect.title')}</h2>
            <p className="mb-4">{t('privacy.infoWeCollect')}</p>
            <ul className="list-disc pl-6 mb-4">
              <li>{t('privacy.infoWeCollectList.0')}</li>
              <li>{t('privacy.infoWeCollectList.1')}</li>
              <li>{t('privacy.infoWeCollectList.2')}</li>
              <li>{t('privacy.infoWeCollectList.3')}</li>
            </ul>
          </section>

          <section ref={useRef} className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t('privacy.howWeUse.title')}</h2>
            <p className="mb-4">{t('privacy.howWeUse')}</p>
            <ul className="list-disc pl-6 mb-4">
              <li>{t('privacy.howWeUseList.0')}</li>
              <li>{t('privacy.howWeUseList.1')}</li>
              <li>{t('privacy.howWeUseList.2')}</li>
              <li>{t('privacy.howWeUseList.3')}</li>
              <li>{t('privacy.howWeUseList.4')}</li>
              <li>{t('privacy.howWeUseList.5')}</li>
            </ul>
          </section>

          <section ref={securityRef} className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t('privacy.dataSecurity.title')}</h2>
            <p className="mb-4">{t('privacy.dataSecurity')}</p>
            <ul className="list-disc pl-6 mb-4">
              <li>{t('privacy.dataSecurityList.0')}</li>
              <li>{t('privacy.dataSecurityList.1')}</li>
              <li>{t('privacy.dataSecurityList.2')}</li>
              <li>{t('privacy.dataSecurityList.3')}</li>
            </ul>
          </section>

          <section ref={rightsRef} className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t('privacy.rights.title')}</h2>
            <p className="mb-4">{t('privacy.rights')}</p>
            <ul className="list-disc pl-6 mb-4">
              <li>{t('privacy.rightsList.0')}</li>
              <li>{t('privacy.rightsList.1')}</li>
              <li>{t('privacy.rightsList.2')}</li>
              <li>{t('privacy.rightsList.3')}</li>
              <li>{t('privacy.rightsList.4')}</li>
              <li>{t('privacy.rightsList.5')}</li>
            </ul>
          </section>

          <section ref={thirdPartyRef} className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t('privacy.thirdParty.title')}</h2>
            <p className="mb-4">{t('privacy.thirdParty')}</p>
          </section>

          <section ref={changesRef} className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t('privacy.changes.title')}</h2>
            <p className="mb-4">{t('privacy.changes')}</p>
          </section>

          <section ref={contactRef} className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t('privacy.contact.title')}</h2>
            <p className="mb-4">{t('privacy.contact')}</p>
            <ul className="list-disc pl-6">
              <li>{t('privacy.contactList.0')}</li>
              <li>{t('privacy.contactList.1')}</li>
              <li>{t('privacy.contactList.2')}</li>
            </ul>
          </section>

          <section ref={lastUpdatedRef} className="mb-8">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {t('privacy.lastUpdated')} {new Date().toLocaleDateString("en-GB", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
              })}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
} 