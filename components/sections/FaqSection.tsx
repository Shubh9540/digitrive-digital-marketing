'use client';

import React, { useState } from 'react';
import { DigitalFaqPageData } from '@/types/templates.types';
import { FaMinus, FaChevronDown, FaRegCommentDots } from 'react-icons/fa';

export const FaqSection = ({ data }: { data?: DigitalFaqPageData }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0); // First item open by default

  if (!data) return null;

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-[#020914] py-16 lg:py-12 text-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-4 mb-4">
            <span className="w-10 h-[2px] bg-gray-700"></span>
            <span className="w-2 h-2 rotate-45 bg-[var(--color-primary)]"></span>
            <p className="text-[var(--color-primary)] font-semibold text-sm tracking-[0.2em] uppercase">
              {data.subtitle}
            </p>
            <span className="w-10 h-[2px] bg-gray-700"></span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            {data.titlePart1}
            <span className="text-[var(--color-primary)]">{data.titlePart2}</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            {data.description}
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          {/* Left Column */}
          <div className="flex flex-col gap-6">
            {data.faqs.map((faq, index) => {
              if (index % 2 !== 0) return null;
              const isActive = activeIndex === index;

              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden cursor-pointer h-fit ${isActive
                      ? 'border-l-2 border-t-2 border-[var(--color-primary)] border-r-gray-800/60 border-b-gray-800/60 bg-[#05101f] shadow-[0_0_20px_rgba(0,229,255,0.05)]'
                      : 'border-gray-800/60 bg-[#05101f] hover:border-gray-700'
                    }`}
                  onClick={() => toggleAccordion(index)}
                >
                  <div className="p-6 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      {isActive && (
                        <div className="w-10 h-10 rounded-full border border-[var(--color-primary)] flex items-center justify-center flex-shrink-0 text-[var(--color-primary)]">
                          <FaRegCommentDots className="w-5 h-5" />
                        </div>
                      )}
                      <h3 className={`text-lg font-bold transition-colors duration-300 ${isActive ? 'text-[var(--color-primary)]' : 'text-white'}`}>
                        {faq.question}
                      </h3>
                    </div>

                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${isActive ? 'bg-[var(--color-primary)] text-black' : 'bg-gray-800/80 text-[var(--color-primary)]'
                      }`}>
                      {isActive ? <FaMinus className="w-4 h-4" /> : <FaChevronDown className="w-4 h-4" />}
                    </div>
                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out px-6 ${isActive ? 'max-h-[500px] pb-6 opacity-100' : 'max-h-0 pb-0 opacity-0'
                      }`}
                  >
                    <p className="text-gray-400 text-base leading-relaxed pl-14">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6">
            {data.faqs.map((faq, index) => {
              if (index % 2 === 0) return null;
              const isActive = activeIndex === index;

              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden cursor-pointer h-fit ${isActive
                      ? 'border-l-2 border-t-2 border-[var(--color-primary)] border-r-gray-800/60 border-b-gray-800/60 bg-[#05101f] shadow-[0_0_20px_rgba(0,229,255,0.05)]'
                      : 'border-gray-800/60 bg-[#05101f] hover:border-gray-700'
                    }`}
                  onClick={() => toggleAccordion(index)}
                >
                  <div className="p-6 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      {isActive && (
                        <div className="w-10 h-10 rounded-full border border-[var(--color-primary)] flex items-center justify-center flex-shrink-0 text-[var(--color-primary)]">
                          <FaRegCommentDots className="w-5 h-5" />
                        </div>
                      )}
                      <h3 className={`text-lg font-bold transition-colors duration-300 ${isActive ? 'text-[var(--color-primary)]' : 'text-white'}`}>
                        {faq.question}
                      </h3>
                    </div>

                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${isActive ? 'bg-[var(--color-primary)] text-black' : 'bg-gray-800/80 text-[var(--color-primary)]'
                      }`}>
                      {isActive ? <FaMinus className="w-4 h-4" /> : <FaChevronDown className="w-4 h-4" />}
                    </div>
                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out px-6 ${isActive ? 'max-h-[500px] pb-6 opacity-100' : 'max-h-0 pb-0 opacity-0'
                      }`}
                  >
                    <p className="text-gray-400 text-base leading-relaxed pl-14">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
