'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { ProjectsGridData } from '@/types/templates.types';

export const ProjectsGridSection = ({ data }: { data?: ProjectsGridData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  if (!data || !data.projects || data.projects.length === 0) return null;

  const totalPages = Math.ceil(data.projects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProjects = data.projects.slice(startIndex, startIndex + itemsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <section className="bg-[var(--color-bg-main)] py-12 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[#00e5ff] font-semibold tracking-wider uppercase text-sm mb-2 block">
            Our Works
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Explore Our Recent <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-[#0088ff]">Projects</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {currentProjects.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-2xl bg-[#0c1f40] border border-[#1a3861] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,229,255,0.15)]">
              {/* Image */}
              <div className="relative h-64 sm:h-80 w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#02181e] via-transparent to-transparent z-10"></div>
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Category Badge */}
                <div className="absolute top-6 left-6 z-20">
                  <span className="bg-[#0c1f40]/80 backdrop-blur-md text-white text-xs font-semibold px-4 py-2 rounded-full border border-gray-600/50">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 relative z-20">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#00e5ff] transition-colors">
                  <Link href={project.url} className="before:absolute before:inset-0">
                    {project.title}
                  </Link>
                </h3>
                
                <div className="flex items-center text-[#00e5ff] font-medium text-sm group-hover:gap-2 transition-all">
                  <span>View Details</span>
                  <FaArrowRight className="ml-2 w-4 h-4 opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-16 gap-2">
            <button 
              onClick={handlePrev}
              disabled={currentPage === 1}
              className="w-10 h-10 rounded-full flex items-center justify-center bg-[#0c1f40] text-white border border-[#1a3861] hover:bg-[#00e5ff] hover:text-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <FaChevronLeft className="w-3 h-3" />
            </button>
            
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentPage(idx + 1)}
                className={`w-10 h-10 rounded-full flex items-center justify-center font-medium transition-colors ${
                  currentPage === idx + 1 
                    ? 'bg-[#00e5ff] text-black' 
                    : 'bg-[#0c1f40] text-white border border-[#1a3861] hover:bg-[#102a4c]'
                }`}
              >
                {idx + 1}
              </button>
            ))}

            <button 
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className="w-10 h-10 rounded-full flex items-center justify-center bg-[#0c1f40] text-white border border-[#1a3861] hover:bg-[#00e5ff] hover:text-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <FaChevronRight className="w-3 h-3" />
            </button>
          </div>
        )}
        
      </div>
    </section>
  );
};
