export default function Privacy() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
      
      <div className="max-w-3xl mx-auto prose">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
          <p className="text-gray-600 mb-4">
            We collect information that you provide directly to us, including when you:
          </p>
          <ul className="list-disc pl-6 text-gray-600">
            <li>Fill out our contact form</li>
            <li>Subscribe to our newsletter</li>
            <li>Request a quote or consultation</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
          <p className="text-gray-600 mb-4">
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 text-gray-600">
            <li>Respond to your inquiries and requests</li>
            <li>Provide and improve our services</li>
            <li>Send you updates and marketing communications (with your consent)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
          <p className="text-gray-600">
            We implement appropriate security measures to protect your personal information
            from unauthorized access, alteration, disclosure, or destruction.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-gray-600">
            If you have any questions about this Privacy Policy, please contact us through
            the contact form on our website.
          </p>
        </section>
      </div>
    </div>
  );
} 