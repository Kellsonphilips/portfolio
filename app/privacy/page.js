'use client';
import useScrollReveal from '@/components/useScrollReveal';

const PRIVACY_TITLE = "Privacy Policy";
const PRIVACY_INTRO_TITLE = "Introduction";
const PRIVACY_INTRO = "This Privacy Policy describes how we collect, use, and handle your personal information when you use our website and services. We are committed to protecting your privacy and ensuring the security of your personal data.";
const PRIVACY_INFO_WE_COLLECT_TITLE = "Information We Collect";
const PRIVACY_INFO_WE_COLLECT = "We collect several types of information for various purposes:";
const PRIVACY_INFO_WE_COLLECT_LIST = [
  "Personal Information: Name, email address, phone number, and any other information you provide through our contact form",
  "Usage Data: Information about how you use our website, including pages visited, time spent, and browser type",
  "Cookies and Tracking Technologies: We use cookies to enhance your browsing experience and analyze website traffic",
  "Communication Data: Information you provide when you contact us or subscribe to our newsletter",
];
const PRIVACY_HOW_WE_USE_TITLE = "How We Use Your Information";
const PRIVACY_HOW_WE_USE = "We use the collected information for the following purposes:";
const PRIVACY_HOW_WE_USE_LIST = [
  "To provide and maintain our services",
  "To respond to your inquiries and provide customer support",
  "To send you updates, marketing communications, and promotional materials (with your consent)",
  "To improve our website and services",
  "To detect and prevent technical issues",
  "To comply with legal obligations",
];
const PRIVACY_DATA_SECURITY_TITLE = "Data Security";
const PRIVACY_DATA_SECURITY = "We implement appropriate technical and organizational measures to protect your personal information, including:";
const PRIVACY_DATA_SECURITY_LIST = [
  "Encryption of data in transit and at rest",
  "Regular security assessments and updates",
  "Access controls and authentication procedures",
  "Secure data storage and backup systems",
];
const PRIVACY_RIGHTS_TITLE = "Your Rights";
const PRIVACY_RIGHTS = "You have the following rights regarding your personal data:";
const PRIVACY_RIGHTS_LIST = [
  "Right to access your personal data",
  "Right to correct inaccurate data",
  "Right to request deletion of your data",
  "Right to object to processing of your data",
  "Right to data portability",
  "Right to withdraw consent",
];
const PRIVACY_THIRD_PARTY_TITLE = "Third-Party Services";
const PRIVACY_THIRD_PARTY = "We may use third-party services that collect, monitor, and analyze website usage. These services have their own privacy policies and may collect information such as your IP address, browser type, and pages visited.";
const PRIVACY_CHANGES_TITLE = "Changes to This Policy";
const PRIVACY_CHANGES = "We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the 'Last Updated' date. We encourage you to review this Privacy Policy periodically.";
const PRIVACY_CONTACT_TITLE = "Contact Us";
const PRIVACY_CONTACT = "If you have any questions about this Privacy Policy or our data practices, please contact us:";
const PRIVACY_CONTACT_LIST = [
  "Through the contact form on our website",
  "By email at [Your Email Address]",
  "By mail at [Your Physical Address]",
];
const PRIVACY_LAST_UPDATED = "Last Updated:";

export default function Privacy() {
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
          {PRIVACY_TITLE}
        </h1>

        <div className="max-w-3xl mx-auto prose">
          <section ref={introRef} className="text-text-light dark:text-text-dark mb-8">
            <h2 className="text-2xl font-semibold mb-4">{PRIVACY_INTRO_TITLE}</h2>
            <p className="mb-4">{PRIVACY_INTRO}</p>
          </section>

          <section ref={collectRef} className="text-text-light dark:text-text-dark mb-8">
            <h2 className="text-2xl font-semibold mb-4">{PRIVACY_INFO_WE_COLLECT_TITLE}</h2>
            <p className="mb-4">{PRIVACY_INFO_WE_COLLECT}</p>
            <ul className="list-disc pl-6 mb-4">
              {PRIVACY_INFO_WE_COLLECT_LIST.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>

          <section ref={useRef} className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{PRIVACY_HOW_WE_USE_TITLE}</h2>
            <p className="mb-4">{PRIVACY_HOW_WE_USE}</p>
            <ul className="list-disc pl-6 mb-4">
              {PRIVACY_HOW_WE_USE_LIST.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>

          <section ref={securityRef} className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{PRIVACY_DATA_SECURITY_TITLE}</h2>
            <p className="mb-4">{PRIVACY_DATA_SECURITY}</p>
            <ul className="list-disc pl-6 mb-4">
              {PRIVACY_DATA_SECURITY_LIST.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>

          <section ref={rightsRef} className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{PRIVACY_RIGHTS_TITLE}</h2>
            <p className="mb-4">{PRIVACY_RIGHTS}</p>
            <ul className="list-disc pl-6 mb-4">
              {PRIVACY_RIGHTS_LIST.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>

          <section ref={thirdPartyRef} className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{PRIVACY_THIRD_PARTY_TITLE}</h2>
            <p className="mb-4">{PRIVACY_THIRD_PARTY}</p>
          </section>

          <section ref={changesRef} className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{PRIVACY_CHANGES_TITLE}</h2>
            <p className="mb-4">{PRIVACY_CHANGES}</p>
          </section>

          <section ref={contactRef} className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{PRIVACY_CONTACT_TITLE}</h2>
            <p className="mb-4">{PRIVACY_CONTACT}</p>
            <ul className="list-disc pl-6">
              {PRIVACY_CONTACT_LIST.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>

          <section ref={lastUpdatedRef} className="mb-8">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {PRIVACY_LAST_UPDATED} {new Date().toLocaleDateString("en-GB", {
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
