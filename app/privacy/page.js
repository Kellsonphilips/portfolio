export default function Privacy() {
  return (
    <div className="pt-24">
      <div className="container text-text-light dark:text-text-dark mx-auto">
        <h1 className="text-3xl flex justify-center font-bold mb-8">
          Privacy Policy
        </h1>

        <div className="max-w-3xl mx-auto prose">
          <section className="text-text-light dark:text-text-dark mb-8">
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p className="mb-4">
              This Privacy Policy describes how we collect, use, and handle your
              personal information when you use our website and services. We are
              committed to protecting your privacy and ensuring the security of
              your personal data.
            </p>
          </section>

          <section className="text-text-light dark:text-text-dark mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              Information We Collect
            </h2>
            <p className="mb-4">
              We collect several types of information for various purposes:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>
                Personal Information: Name, email address, phone number, and any
                other information you provide through our contact form
              </li>
              <li>
                Usage Data: Information about how you use our website, including
                pages visited, time spent, and browser type
              </li>
              <li>
                Cookies and Tracking Technologies: We use cookies to enhance
                your browsing experience and analyze website traffic
              </li>
              <li>
                Communication Data: Information you provide when you contact us
                or subscribe to our newsletter
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              How We Use Your Information
            </h2>
            <p className="mb-4">
              We use the collected information for the following purposes:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>To provide and maintain our services</li>
              <li>To respond to your inquiries and provide customer support</li>
              <li>
                To send you updates, marketing communications, and promotional
                materials (with your consent)
              </li>
              <li>To improve our website and services</li>
              <li>To detect and prevent technical issues</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
            <p className="mb-4">
              We implement appropriate technical and organizational measures to
              protect your personal information, including:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security assessments and updates</li>
              <li>Access controls and authentication procedures</li>
              <li>Secure data storage and backup systems</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
            <p className="mb-4">
              You have the following rights regarding your personal data:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Right to access your personal data</li>
              <li>Right to correct inaccurate data</li>
              <li>Right to request deletion of your data</li>
              <li>Right to object to processing of your data</li>
              <li>Right to data portability</li>
              <li>Right to withdraw consent</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              Third-Party Services
            </h2>
            <p className="mb-4">
              We may use third-party services that collect, monitor, and analyze
              website usage. These services have their own privacy policies and
              may collect information such as your IP address, browser type, and
              pages visited.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              Changes to This Policy
            </h2>
            <p className="mb-4">
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the new Privacy Policy on
              this page and updating the &rdquo;Last Updated&rdquo; date. We
              encourage you to review this Privacy Policy periodically.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy or our data
              practices, please contact us:
            </p>
            <ul className="list-disc pl-6">
              <li>Through the contact form on our website</li>
              <li>By email at [Your Email Address]</li>
              <li>By mail at [Your Physical Address]</li>
            </ul>
          </section>

          <section className="mb-8">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Last Updated:{" "}
              {new Date().toLocaleDateString("en-GB", {
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