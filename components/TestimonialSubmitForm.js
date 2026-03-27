'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';
import { SERVICE_TYPES } from './testimonialsData';

export default function TestimonialSubmitForm() {
  const [formData, setFormData] = useState({
    name: '',
    position: '',
    location: '',
    service: '',
    rating: 5,
    testimonial: '',
    projectOutcome: '',
    email: '',
  });
  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);
    try {
      const res = await fetch('/api/testimonial', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) {
        setStatus({ type: 'error', message: data.error || 'Something went wrong.' });
        return;
      }
      setStatus({ type: 'success', message: data.message });
      setFormData({
        name: '',
        position: '',
        location: '',
        service: '',
        rating: 5,
        testimonial: '',
        projectOutcome: '',
        email: '',
      });
    } catch {
      setStatus({ type: 'error', message: 'Failed to submit. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mt-16 pt-12 border-t border-gray-200 dark:border-gray-700">
      <h3 className="text-2xl font-bold text-center mb-2 text-text-light dark:text-text-dark">
        Submit a Testimonial
      </h3>
      <p className="text-center text-secondary-color mb-8 max-w-xl mx-auto">
        Had a great experience? Your testimonial will be reviewed and may be published on this page after approval.
      </p>
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto space-y-4 p-6 rounded-2xl bg-background-light/10 dark:bg-gray-800 border border-background-light/20 dark:border-gray-700"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-text-light dark:text-text-dark mb-1">
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-text-light dark:text-text-dark mb-1">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="position" className="block text-sm font-medium text-text-light dark:text-text-dark mb-1">
              Position / Company *
            </label>
            <input
              type="text"
              id="position"
              name="position"
              value={formData.position}
              onChange={handleChange}
              required
              placeholder="e.g. CTO, Acme Inc."
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark"
            />
          </div>
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-text-light dark:text-text-dark mb-1">
              Location *
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              placeholder="e.g. London, UK"
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="service" className="block text-sm font-medium text-text-light dark:text-text-dark mb-1">
              Service type *
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark"
            >
              <option value="">Select service</option>
              {SERVICE_TYPES.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="rating" className="block text-sm font-medium text-text-light dark:text-text-dark mb-1">
              Rating (1–5) *
            </label>
            <select
              id="rating"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark"
            >
              {[5, 4, 3, 2, 1].map((n) => (
                <option key={n} value={n}>{n} star{n !== 1 ? 's' : ''}</option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <label htmlFor="testimonial" className="block text-sm font-medium text-text-light dark:text-text-dark mb-1">
            Your testimonial * (min 20 characters)
          </label>
          <textarea
            id="testimonial"
            name="testimonial"
            value={formData.testimonial}
            onChange={handleChange}
            required
            minLength={20}
            rows={4}
            placeholder="Share your experience working with Philip..."
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark resize-y"
          />
        </div>
        <div>
          <label htmlFor="projectOutcome" className="block text-sm font-medium text-text-light dark:text-text-dark mb-1">
            Project outcome (optional)
          </label>
          <input
            type="text"
            id="projectOutcome"
            name="projectOutcome"
            value={formData.projectOutcome}
            onChange={handleChange}
            placeholder="e.g. 40% cost reduction, faster delivery"
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark"
          />
        </div>
        {status && (
          <div
            className={`p-3 rounded-lg text-sm ${
              status.type === 'success'
                ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200'
                : 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200'
            }`}
          >
            {status.message}
          </div>
        )}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {isSubmitting ? (
            <>
              <span className="loading w-5 h-4" />
              Submitting...
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              Submit testimonial
            </>
          )}
        </button>
      </form>
    </div>
  );
}
