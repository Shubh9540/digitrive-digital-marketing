'use client';

import React, { useState } from 'react';
import { DigitalClientsData } from '@/types/templates.types';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export const ClientsSection = ({ data }: { data?: DigitalClientsData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  if (!data) return null;

  const itemsPerPage = data.itemsPerPage || 10;
  const totalPages = Math.ceil(data.logos.length / itemsPerPage);
  const startIdx = (currentPage - 1) * itemsPerPage;
  const visibleLogos = data.logos.slice(startIdx, startIdx + itemsPerPage);

  const goTo = (page: number) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  return (
    <section className="bg-[#0b111f] py-12 lg:py-16 px-4">
      <div className="max-w-[1200px] mx-auto">

        {/* ── Header row ── */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 mb-10">
          {/* Left: text */}
          <div className="flex-1 text-center lg:text-left">
            <p className="text-[#00c5c8] text-sm font-semibold uppercase tracking-widest mb-2 flex items-center gap-2 justify-center lg:justify-start">
              <span className="w-6 h-px bg-[#00c5c8] inline-block"></span>
              {data.subtitle}
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
              {data.titlePart1} <span className="text-[#00c5c8]">{data.titleHighlight}</span>
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-lg">
              {data.description}
            </p>
          </div>

          {/* Right: image */}
          <div className="flex-shrink-0 w-full max-w-[420px] lg:max-w-[480px]">
            <img
              src={data.image}
              alt="Great Brands Grow Together"
              className="w-full h-auto object-contain rounded-xl"
            />
          </div>
        </div>

        {/* ── Logo grid ── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {visibleLogos.map((logo) => (
            <div
              key={logo.id}
              className="bg-[#0f1a2e] border border-[#1a2a40] rounded-xl flex items-center justify-center p-4 h-[90px] md:h-[100px] hover:border-[#00c5c8] hover:shadow-[0_0_15px_rgba(0,197,200,0.15)] transition-all duration-300 group"
            >
              <img
                src={logo.image}
                alt={logo.name}
                className="max-h-[55px] max-w-full w-auto object-contain transition-all duration-300"
              />
            </div>
          ))}
        </div>

        {/* ── Pagination ── */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-10">
            {/* Prev */}
            <button
              onClick={() => goTo(currentPage - 1)}
              disabled={currentPage === 1}
              className="w-9 h-9 flex items-center justify-center rounded-full border border-[#1a2a40] text-gray-400 hover:border-[#00c5c8] hover:text-[#00c5c8] disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <FaChevronLeft size={12} />
            </button>

            {/* Page numbers */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => goTo(page)}
                className={`w-9 h-9 flex items-center justify-center rounded-full text-sm font-semibold transition-all ${
                  currentPage === page
                    ? 'bg-[#00c5c8] text-white border border-[#00c5c8]'
                    : 'border border-[#1a2a40] text-gray-400 hover:border-[#00c5c8] hover:text-[#00c5c8]'
                }`}
              >
                {page}
              </button>
            ))}

            {/* Next */}
            <button
              onClick={() => goTo(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="w-9 h-9 flex items-center justify-center rounded-full border border-[#1a2a40] text-gray-400 hover:border-[#00c5c8] hover:text-[#00c5c8] disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <FaChevronRight size={12} />
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
