'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { DigitalTestimonialsData } from '@/types/templates.types';
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export const TestimonialsPageContent = ({ data }: { data?: DigitalTestimonialsData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  if (!data || !data.testimonials) return null;

  const totalPages = Math.ceil(data.testimonials.length / itemsPerPage);

  // Calculate current page items
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentTestimonials = data.testimonials.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      // Optional: scroll to top of section
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-[#020914] py-16 lg:py-12">
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
            {data.titlePart1} <span className="text-[var(--color-primary)]">{data.titleHighlight}</span> {data.titlePart2}
          </h2>
          <p className="text-gray-400 text-lg">
            Don't just take our word for it. Here's what our <span className="text-[var(--color-primary)]">clients</span> have to say about working with Digitrive and the results we've delivered.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {currentTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-[#05101f] border border-gray-800/60 rounded-xl p-6 lg:p-8 relative hover:border-[var(--color-primary)]/40 transition-colors duration-300 flex flex-col"
            >
              {/* Top Row: Image & Stars */}
              <div className="flex items-start gap-4 mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border border-gray-700/50 flex-shrink-0">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center h-16 pt-2">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={`w-3.5 h-3.5 ${i < testimonial.rating ? 'text-[var(--color-primary)]' : 'text-gray-700'}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Quote Text */}
              <div className="flex gap-4 mb-6 flex-grow">
                <FaQuoteLeft className="text-[var(--color-primary)] w-4 h-4 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-sm leading-relaxed">
                  {testimonial.reviewText || testimonial.text}
                </p>
              </div>

              {/* Bottom Row: Name/Role & Large Quote Icon */}
              <div className="flex items-end justify-between mt-auto">
                <div>
                  <h4 className="text-white font-semibold text-sm mb-1">{testimonial.name}</h4>
                  <p className="text-[var(--color-primary)] text-xs">{testimonial.role}</p>
                </div>
                <FaQuoteLeft className="text-gray-800/50 w-12 h-12" />
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
              className={`w-10 h-10 flex items-center justify-center rounded border ${currentPage === 1
                  ? 'border-gray-800 text-gray-700 cursor-not-allowed'
                  : 'border-gray-700 text-gray-400 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]'
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
                  className={`w-10 h-10 flex items-center justify-center rounded text-sm font-medium transition-colors ${currentPage === pageNum
                      ? 'bg-[var(--color-primary)] text-black'
                      : 'border border-gray-700 text-gray-400 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]'
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
              className={`w-10 h-10 flex items-center justify-center rounded border ${currentPage === totalPages
                  ? 'border-gray-800 text-gray-700 cursor-not-allowed'
                  : 'border-gray-700 text-gray-400 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]'
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
