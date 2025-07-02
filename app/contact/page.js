'use client';

import { useState, useEffect } from 'react';
import { Send } from 'lucide-react';
import { useLanguage } from '@/components/LanguageContext';
import useScrollReveal from '@/components/useScrollReveal';

export default function Contact() {
  const { t } = useLanguage();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Scroll reveal refs for main elements
  const headerRef = useScrollReveal('left', 0);
  const subtitleRef = useScrollReveal('right', 0.15);
  const formRef = useScrollReveal('left', 0.3);
  const nameEmailRef = useScrollReveal('right', 0.45);
  const subjectRef = useScrollReveal('left', 0.6);
  const messageRef = useScrollReveal('right', 0.75);
  const buttonRef = useScrollReveal('left', 0.9);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      // Clear form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setSubmitStatus('success');
    } catch (error) {
      console.error('Contact form error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-24 px-8 md:pl-10 lg:pl-15">
      <div className="container mx-auto px-4 py-8 mt-20">
        <h1
          ref={headerRef}
          className="text-3xl text text-primary text-center font-bold mb-8"
        >
          {t("contact.title")}
        </h1>
        <p
          ref={subtitleRef}
          className="text-lg text-center text-text-secondary-light dark:text-text-secondary-dark mb-8 text-wrap"
        >
          {t("contact.subtitle")}
        </p>

        <div ref={formRef} className="max-w-2xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="space-y-6 p-8 rounded-2xl backdrop-blur-md bg-background-light/10 dark:bg-gray-800 border border-background-light/50 dark:border-background-dark/30 shadow-2xl transform hover:scale-[1.01] transition-all duration-500 perspective-1000 card-3d-glow"
          >
            <div
              ref={nameEmailRef}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <div className="transform hover:scale-[1.02] transition-transform duration-300">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-text-light dark:text-text-dark mb-2"
                >
                  {t("contact.name")}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder={t("contact.namePlaceholder")}
                  required
                  className="w-full p-3 border border-primary/40 dark:border-primary/60 rounded-xl bg-background-light/60 dark:bg-background-dark/40 backdrop-blur-sm text-text-light dark:text-text-dark focus:ring-2 focus:ring-primary/70 focus:border-primary/80 dark:focus:border-primary/90 transition-all duration-300 placeholder-text-secondary-light dark:placeholder-text-secondary-dark shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:-translate-y-1"
                />
              </div>
              <div className="transform hover:scale-[1.02] transition-transform duration-300">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-text-light dark:text-text-dark mb-2"
                >
                  {t("contact.email")}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder={t("contact.emailPlaceholder")}
                  required
                  className="w-full p-3 border border-primary/40 dark:border-primary/60 rounded-xl bg-background-light/60 dark:bg-background-dark/40 backdrop-blur-sm text-text-light dark:text-text-dark focus:ring-2 focus:ring-primary/70 focus:border-primary/80 dark:focus:border-primary/90 transition-all duration-300 placeholder-text-secondary-light dark:placeholder-text-secondary-dark shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:-translate-y-1"
                />
              </div>
            </div>
            <div
              ref={subjectRef}
              className="transform hover:scale-[1.02] transition-transform duration-300"
            >
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-text-light dark:text-text-dark mb-2"
              >
                {t("contact.subject")}
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder={t("contact.subjectPlaceholder")}
                required
                className="w-full p-3 border border-primary/40 dark:border-primary/60 rounded-xl bg-background-light/60 dark:bg-background-dark/40 backdrop-blur-sm text-text-light dark:text-text-dark focus:ring-2 focus:ring-primary/70 focus:border-primary/80 dark:focus:border-primary/90 transition-all duration-300 placeholder-text-secondary-light dark:placeholder-text-secondary-dark shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:-translate-y-1"
              />
            </div>
            <div
              ref={messageRef}
              className="transform hover:scale-[1.02] transition-transform duration-300"
            >
              <label
                htmlFor="message"
                className="block text-sm font-medium text-text-light dark:text-text-dark mb-2"
              >
                {t("contact.message")}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder={t("contact.messagePlaceholder")}
                required
                rows={6}
                className="w-full p-3 border border-primary/40 dark:border-primary/60 rounded-xl bg-background-light/60 dark:bg-background-dark/40 backdrop-blur-sm text-text-light dark:text-text-dark focus:ring-2 focus:ring-primary/70 focus:border-primary/80 dark:focus:border-primary/90 transition-all duration-300 placeholder-text-secondary-light dark:placeholder-text-secondary-dark resize-vertical shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:-translate-y-1"
              />
            </div>
            <div
              ref={buttonRef}
              className="transform hover:scale-[1.02] transition-transform duration-300"
            >
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary to-secondary text-white py-4 px-6 rounded-xl hover:from-secondary hover:to-primary transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-2xl hover:shadow-3xl transform hover:scale-[1.02] hover:-translate-y-1 active:scale-[0.98] font-medium"
              >
                {isSubmitting ? (
                  <>
                    <div className="loading w-5 h-4"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    {t("contact.sendButton")}
                  </>
                )}
              </button>
            </div>
          </form>

          {submitStatus === "success" && (
            <div className="mt-6 p-4 bg-green-100/80 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-xl backdrop-blur-sm border border-green-200/50 dark:border-green-700/30 shadow-lg transform hover:scale-[1.02] transition-all duration-300">
              {t("contact.successMessage")}
            </div>
          )}

          {submitStatus === "error" && (
            <div className="mt-6 p-4 bg-red-100/80 dark:bg-red-900/30 text-red-800 dark:text-red-200 rounded-xl backdrop-blur-sm border border-red-200/50 dark:border-red-700/30 shadow-lg transform hover:scale-[1.02] transition-all duration-300">
              {t("contact.errorMessage")}
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 