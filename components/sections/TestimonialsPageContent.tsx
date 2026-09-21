"use client";

import React, { useState } from "react";
import Image from "next/image";
import { DigitalTestimonialsData } from "@/types/templates.types";
import {
  FaStar,
  FaQuoteLeft,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

export const TestimonialsPageContent = ({
  data,
}: {
  data?: DigitalTestimonialsData;
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  if (!data || !data.testimonials) return null;

  const totalPages = Math.ceil(data.testimonials.length / itemsPerPage);

  // Calculate current page items
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentTestimonials = data.testimonials.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      // Optional: scroll to top of section
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-[#020914] py-10 lg:py-200 lg:py-10 lg:py-2000 lg:py-10 lg:py-200 lg:py-10 lg:py-2006">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Content */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-10 h-[1px] bg-gray-600"></span>
            <span className="w-2 h-2 rotate-45 bg-[var(--color-primary)]"></span>
            <p className="text-[var(--color-primary)] font-medium text-sm tracking-widest uppercase">
              {data.subtitle}
            </p>
            <span className="w-10 h-[1px] bg-gray-600"></span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            {data.titlePart1}{" "}
            <span className="text-[var(--color-primary)]">
              {data.titleHighlight}
            </span>{" "}
            {data.titlePart2}
          </h2>
          <p className="text-gray-400 text-lg">
            Don't just take our word for it. Here's what our{" "}
            <span className="text-[var(--color-primary)]">clients</span> have to
            say about working with Digitrive and the results we've delivered.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {currentTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-[#030e1d] rounded-2xl p-6 lg:p-8 border border-gray-800/60 hover:border-[#00e5ff]/50 transition-colors duration-300 h-full flex flex-col sm:flex-row gap-6 lg:gap-8 items-center"
            >
              {/* Avatar */}
              <div className="w-28 h-28 sm:w-36 sm:h-36 shrink-0 rounded-full overflow-hidden border-2 border-[#00e5ff]">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={144}
                  height={144}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex-1 text-center sm:text-left">
                {/* Stars */}
                <div className="flex justify-center sm:justify-start text-[#ffc107] mb-3 text-sm gap-1">
                  {[...Array(testimonial.rating || 5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>

                {/* Review */}
                <p className="text-gray-300 text-sm lg:text-base leading-relaxed mb-5">
                  <span className="text-[#00e5ff] mr-2 inline-block text-xl align-top">
                    <FaQuoteLeft />
                  </span>
                  {testimonial.reviewText || testimonial.text}
                </p>

                {/* Divider Line */}
                <div className="w-8 h-[2px] bg-[#00e5ff] mb-3 mx-auto sm:mx-0"></div>

                {/* Author Info */}
                <div>
                  <h4 className="text-white font-bold text-base lg:text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-[#00e5ff] text-sm">
                    {testimonial.location || testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2">
            {/* Prev Button */}
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`w-10 h-10 flex items-center justify-center rounded border ${
                currentPage === 1
                  ? "border-gray-800 text-gray-700 cursor-not-allowed"
                  : "border-gray-700 text-gray-400 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
              } transition-colors`}
            >
              <FaChevronLeft className="w-3 h-3" />
            </button>

            {/* Page Numbers */}
            {[...Array(totalPages)].map((_, i) => {
              const pageNum = i + 1;
              return (
                <button
                  key={pageNum}
                  onClick={() => handlePageChange(pageNum)}
                  className={`w-10 h-10 flex items-center justify-center rounded text-sm font-medium transition-colors ${
                    currentPage === pageNum
                      ? "bg-[var(--color-primary)] text-black"
                      : "border border-gray-700 text-gray-400 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}

            {/* Next Button */}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`w-10 h-10 flex items-center justify-center rounded border ${
                currentPage === totalPages
                  ? "border-gray-800 text-gray-700 cursor-not-allowed"
                  : "border-gray-700 text-gray-400 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
              } transition-colors`}
            >
              <FaChevronRight className="w-3 h-3" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
