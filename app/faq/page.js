'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'What services do you offer?',
    answer: 'I offer a range of services including web development, data analysis, and ICT solutions. Each service is tailored to meet your specific needs and requirements.'
  },
  {
    question: 'How can I get started with a project?',
    answer: 'You can get started by reaching out through the contact form or email. We\'ll schedule a consultation to discuss your project requirements and create a plan.'
  },
  {
    question: 'What technologies do you work with?',
    answer: 'I work with a variety of modern technologies including React, Next.js, Node.js, Python, and various data analysis tools. Check the Skills page for a complete list.'
  },
  {
    question: 'Do you offer ongoing support?',
    answer: 'Yes, I provide ongoing support and maintenance for all projects. We can discuss the level of support you need during our initial consultation.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Frequently Asked Questions</h1>
      
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-6 py-4 text-left flex justify-between items-center"
            >
              <span className="font-semibold">{faq.question}</span>
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4">
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
} 