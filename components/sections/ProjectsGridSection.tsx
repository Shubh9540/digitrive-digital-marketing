"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { ProjectsGridData } from "@/types/templates.types";

export const ProjectsGridSection = ({ data }: { data?: ProjectsGridData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  if (!data || !data.projects || data.projects.length === 0) return null;

  const totalPages = Math.ceil(data.projects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProjects = data.projects.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <section className="bg-[var(--color-bg-main)] py-10 lg:py-200 lg:py-10 lg:py-2002 lg:py-10 lg:py-200 lg:py-10 lg:py-2006">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[#00e5ff] font-semibold tracking-wider uppercase text-sm mb-2 block">
            Our Works
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Explore Our Recent{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-[#0088ff]">
              Projects
            </span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-8">
          {currentProjects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-2xl bg-[var(--color-bg-card)] border border-[#1a3861] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,229,255,0.1)] hover:border-[var(--color-primary)] flex flex-col md:flex-row h-full"
            >
              {/* Image Container (Left Side on Desktop) */}
              <div className="relative w-full md:w-[45%] lg:w-[50%] h-64 md:h-auto overflow-hidden bg-[#051024] flex-shrink-0 p-6 flex items-center justify-center border-b md:border-b-0 md:border-r border-[#1a3861]">
                <div className="relative w-full aspect-video rounded overflow-hidden shadow-2xl border border-gray-700/30">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Content Container (Right Side on Desktop) */}
              <div className="w-full md:w-[55%] lg:w-[50%] p-6 lg:p-8 flex flex-col justify-center relative z-20">
                <span className="text-[#00e5ff] font-bold text-xs tracking-wider uppercase mb-3 block">
                  {project.category}
                </span>

                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-[#00e5ff] transition-colors leading-tight">
                  <Link
                    href={project.url}
                    className="before:absolute before:inset-0"
                  >
                    {project.title}
                  </Link>
                </h3>

                <p className="text-gray-400 text-sm mb-8 line-clamp-3">
                  {project.description ||
                    "A modern digital solution designed to inspire exploration and boost engagement."}
                </p>

                <div className="mt-auto flex items-center text-[#00e5ff] font-medium text-sm gap-2 transition-all">
                  <span>Live Link</span>
                  <div className="w-8 h-8 rounded-full border border-[#00e5ff] flex items-center justify-center transition-all duration-300 group-hover:bg-[#00e5ff] group-hover:text-black">
                    <FaArrowRight className="w-3 h-3" />
                  </div>
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
              className="w-10 h-10 rounded-full flex items-center justify-center bg-[#08152e] text-white border border-[#1a3861] hover:bg-[#00e5ff] hover:text-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <FaChevronLeft className="w-3 h-3" />
            </button>

            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentPage(idx + 1)}
                className={`w-10 h-10 rounded-full flex items-center justify-center font-medium transition-colors ${
                  currentPage === idx + 1
                    ? "bg-[#00e5ff] text-black"
                    : "bg-[#08152e] text-white border border-[#1a3861] hover:bg-[#102a4c]"
                }`}
              >
                {idx + 1}
              </button>
            ))}

            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className="w-10 h-10 rounded-full flex items-center justify-center bg-[#08152e] text-white border border-[#1a3861] hover:bg-[#00e5ff] hover:text-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <FaChevronRight className="w-3 h-3" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
