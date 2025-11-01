"use client";

import Image from "next/image";

const TestimonialCard = ({ testimonial }) => (
  <div className="card p-8 rounded-2xl text-center group">
    {/* Avatar with Flag */}
    <div className="flex flex-col items-center mb-4 relative">
      <div className="relative">
        {testimonial.avatar && (
          <div className="relative w-20 h-20 rounded-full overflow-hidden ring-4 ring-primary/20 dark:ring-primary/40 group-hover:ring-primary/60 transition-all duration-300 transform group-hover:scale-110">
            <Image
              src={testimonial.avatar}
              alt={testimonial.name}
              fill
              className="object-cover"
              sizes="80px"
            />
          </div>
        )}
        {testimonial.flag && (
          <div className="absolute -bottom-2 -right-2 text-3xl bg-white dark:bg-gray-800 rounded-full p-1 shadow-lg">
            {testimonial.flag}
          </div>
        )}
      </div>

      <div className="mt-4 space-y-1">
        <div className="font-bold text-lg text-text-light dark:text-text-dark">
          {testimonial.name}
        </div>
        <div className="text-sm text-secondary-color font-medium">
          {testimonial.position}
        </div>
        {testimonial.location && (
          <div className="text-xs text-gray-500 dark:text-gray-400 flex items-center justify-center gap-1">
            <span>📍</span>
            {testimonial.location}
          </div>
        )}
      </div>
    </div>

    {/* Rating */}
    <div className="mb-4 text-yellow-400 text-xl flex items-center justify-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className="transition-transform duration-300 transform hover:scale-125"
        >
          {i < testimonial.rating ? "★" : "☆"}
        </span>
      ))}
    </div>

    {/* Testimonial */}
    <div className="relative mb-6">
      <div className="text-5xl text-primary/20 dark:text-primary/30 absolute -top-2 -left-2">
        &ldquo;
      </div>
      <p className="italic text-text-light dark:text-text-dark leading-relaxed relative z-10 text-base">
        {testimonial.testimonial}
      </p>
      <div className="text-5xl text-primary/20 dark:text-primary/30 absolute -bottom-4 -right-2">
        &rdquo;
      </div>
    </div>

    {/* Project Outcome */}
    <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
      <div className="inline-flex items-center gap-2 bg-primary/10 dark:bg-primary/20 px-4 py-2 rounded-full">
        <span className="text-sm font-semibold text-primary dark:text-primary/90">
          ✨ {testimonial.projectOutcome}
        </span>
      </div>
      <div className="mt-3">
        <span className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-700 text-xs font-medium rounded-full text-secondary-color">
          {testimonial.service}
        </span>
      </div>
    </div>
  </div>
);

export default TestimonialCard;

