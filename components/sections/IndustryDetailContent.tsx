'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight, FaMinus, FaPlus } from 'react-icons/fa';
import { IndustryDetailData } from '@/types/templates.types';

export const IndustryDetailContent = ({ data }: { data: IndustryDetailData }) => {
  const [openFaqId, setOpenFaqId] = useState<string | null>(data.faq.questions[0]?.id || null);

  return (
    <div className="flex flex-col gap-12 w-full">
      
      {/* 1. Hero Image Section */}
      <div className="w-full h-[400px] rounded-2xl overflow-hidden relative group">
        <Image 
          src={data.heroImage}
          alt={data.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#020914]/90 via-[#020914]/60 to-transparent"></div>
        
        <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-center max-w-2xl">
          <p className="text-[var(--color-primary)] font-bold tracking-widest text-sm uppercase mb-4">
            INDUSTRY
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            {data.title}
          </h1>
          <h2 className="text-xl md:text-2xl text-white font-medium mb-6">
            {data.subtitle}
          </h2>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8 max-w-lg">
            {data.heroText}
          </p>
          <Link 
            href={data.heroButtonUrl}
            className="inline-flex items-center justify-center gap-2 bg-[var(--color-primary)] text-black px-6 py-3 rounded text-sm font-bold w-fit hover:bg-white transition-colors"
          >
            {data.heroButtonText}
            <FaArrowRight className="w-3 h-3" />
          </Link>

        </div>
      </div>

      {/* 2. Service Overview */}
      <div className="flex flex-col gap-6">
        <div>
          <h2 className="text-3xl font-bold text-white relative inline-block pb-3 mb-2">
            {data.overview.title} <span className="text-[var(--color-primary)]">{data.overview.titleHighlight}</span>
            <span className="absolute bottom-0 left-0 w-16 h-[3px] bg-[var(--color-primary)]"></span>
          </h2>
        </div>
        <p className="text-gray-400 leading-relaxed text-sm lg:text-base">
          {data.overview.text1}
        </p>
        <p className="text-gray-400 leading-relaxed text-sm lg:text-base">
          {data.overview.text2}
        </p>
      </div>

      {/* 3. Service Center */}
      <div className="flex flex-col gap-6">
        <div>
          <h2 className="text-3xl font-bold text-white relative inline-block pb-3 mb-2">
            {data.serviceCenter.title} <span className="text-[var(--color-primary)]">{data.serviceCenter.titleHighlight}</span>
            <span className="absolute bottom-0 left-0 w-16 h-[3px] bg-[var(--color-primary)]"></span>
          </h2>
        </div>
        <p className="text-gray-400 leading-relaxed text-sm lg:text-base mb-2">
          {data.serviceCenter.text}
        </p>

        {/* 2-Column Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.serviceCenter.features.map(feature => (
            <div key={feature.id} className="flex flex-col gap-4 group">
              <div className="w-full h-[220px] rounded-xl overflow-hidden relative border border-gray-800/60">
                <Image 
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <div className="w-10 h-[2px] bg-gray-700 mb-3 group-hover:bg-[var(--color-primary)] transition-colors"></div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {feature.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Frequently Asked Question */}
      <div className="flex flex-col gap-6 mt-4">
        <div>
          <h2 className="text-3xl font-bold text-white relative inline-block pb-3 mb-2">
            {data.faq.title} <span className="text-[var(--color-primary)]">{data.faq.titleHighlight}</span>
            <span className="absolute bottom-0 left-0 w-16 h-[3px] bg-[var(--color-primary)]"></span>
          </h2>
        </div>
        <p className="text-gray-400 leading-relaxed text-sm lg:text-base mb-4">
          {data.faq.text}
        </p>
        
        {/* FAQ Accordion */}
        <div className="flex flex-col gap-3">
          {data.faq.questions.map((q, i) => {
            const isOpen = openFaqId === q.id;
            return (
              <div 
                key={q.id} 
                className={`border rounded-lg overflow-hidden transition-colors ${
                  isOpen ? 'border-[var(--color-primary)]/40 bg-[#05101f]' : 'border-gray-800/60 bg-[#020914]'
                }`}
              >
                <div 
                  className="flex items-center justify-between p-4 cursor-pointer select-none"
                  onClick={() => setOpenFaqId(isOpen ? null : q.id)}
                >
                  <h4 className={`font-bold text-sm ${isOpen ? 'text-white' : 'text-gray-300'}`}>
                    {q.question}
                  </h4>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                    isOpen ? 'bg-[var(--color-primary)] text-black' : 'bg-[#05101f] text-[var(--color-primary)] border border-gray-800'
                  }`}>
                    {isOpen ? <FaMinus className="w-3 h-3" /> : <FaPlus className="w-3 h-3" />}
                  </div>
                </div>
                {isOpen && (
                  <div className="p-4 pt-0 border-t border-[var(--color-primary)]/20 mt-2">
                    <p className="text-gray-400 text-sm leading-relaxed mt-4">
                      {q.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};
