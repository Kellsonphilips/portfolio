"use client";

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import TestimonialCard from "./TestimonialCard";
import useScrollReveal from "./useScrollReveal";

const getLocale = () =>
  typeof window !== "undefined"
    ? window.localStorage.getItem("locale") || "en"
    : "en";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [filter, setFilter] = useState("All");
  const headerRef = useScrollReveal("bottom", 0);
  const contentRef = useScrollReveal("bottom", 0.2);

  useEffect(() => {
    const locale = getLocale();
    import(`../locales/${locale}/testimonials.json`)
      .then((mod) => setTestimonials(mod.default || mod))
      .catch(() => setTestimonials([]));
  }, []);

  const serviceTypes = [
    "All",
    ...Array.from(new Set(testimonials.map((t) => t.service))),
  ];

  const filteredTestimonials = testimonials.filter((t) => {
    return filter === "All" || t.service === filter;
  });

  return (
    <section
      id="testimonials"
      className="py-20 text-text-light dark:text-text-dark transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        <div ref={headerRef}>
          <h2 className="text-4xl text-nowrap text-center font-bold mb-8">
            Client Testimonials
          </h2>
          <p className="text-center text-lg text-secondary-color mb-8 max-w-2xl mx-auto">
            Trusted by clients across Africa, Europe, and America
          </p>
        </div>

        <div ref={contentRef} className="space-y-6">
          {/* Service Filter */}
          <div className="flex justify-center gap-2 mb-8 flex-wrap">
            {serviceTypes.map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`testimonial-filter-btn ${
                  filter === type
                    ? "testimonial-filter-btn-active"
                    : "testimonial-filter-btn-inactive"
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Swiper Carousel */}
          <div
            className={`max-w-4xl mx-auto px-8 ${
              filteredTestimonials.length === 1 ? "flex justify-center" : ""
            }`}
          >
            {filteredTestimonials.length === 0 ? (
              <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700">
                <p className="text-lg text-secondary-color">
                  No testimonials found for the selected filters.
                </p>
              </div>
            ) : filteredTestimonials.length === 1 ? (
              <div className="w-full max-w-xl mx-auto">
                <TestimonialCard testimonial={filteredTestimonials[0]} />
              </div>
            ) : (
              <>
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  spaceBetween={30}
                  slidesPerView={1}
                  loop={filteredTestimonials.length > 2}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }}
                  navigation={true}
                  pagination={{
                    clickable: true,
                    dynamicBullets: true,
                  }}
                  className="testimonial-swiper"
                  breakpoints={{
                    640: {
                      slidesPerView: 2,
                      spaceBetween: 30,
                    },
                    1024: {
                      slidesPerView: 2,
                      spaceBetween: 40,
                    },
                  }}
                >
                  {filteredTestimonials.map((t, idx) => (
                    <SwiperSlide key={idx}>
                      <TestimonialCard testimonial={t} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
