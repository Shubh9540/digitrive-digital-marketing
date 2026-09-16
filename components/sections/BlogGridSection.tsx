'use client';

import React, { useState } from 'react';
import { DigitalBlogData } from '@/types/templates.types';
import Link from 'next/link';
import { FaFileAlt, FaAngleDoubleLeft, FaAngleLeft, FaAngleRight, FaAngleDoubleRight } from 'react-icons/fa';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaFileAlt': return <FaFileAlt className="w-3 h-3" />;
    default: return <FaFileAlt className="w-3 h-3" />;
  }
};

export const BlogGridSection = ({ data }: { data?: DigitalBlogData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  if (!data) return null;

  const totalPages = Math.ceil(data.blogs.length / itemsPerPage);
  
  // Calculate current blogs
  const indexOfLastBlog = currentPage * itemsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - itemsPerPage;
  const currentBlogs = data.blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // Optional: Scroll to top of section when page changes
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  const getPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <section className="bg-[#020914] py-16 lg:py-24">
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
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            {data.titlePart1.replace(/\\n/g, '\n').split('\n').map((line, i, arr) => (
              <React.Fragment key={i}>
                {line}
                {i < arr.length - 1 && <br />}
              </React.Fragment>
            ))}
            <span className="text-[var(--color-primary)] relative">
              {data.titlePart2}
              <span className="absolute -bottom-2 left-0 w-1/2 h-[2px] bg-[var(--color-primary)]"></span>
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed whitespace-pre-line">
            {data.description.replace(/\\n/g, '\n')}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {currentBlogs.map((blog) => (
            <div key={blog.id} className="group flex flex-col bg-[#05101f] rounded-2xl overflow-hidden border border-gray-800/60 hover:border-[var(--color-primary)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,229,255,0.1)]">
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Date Badge */}
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md border border-gray-700/50 rounded-lg p-2 flex flex-col items-center justify-center min-w-[50px]">
                  <span className="text-[var(--color-primary)] font-bold text-xl leading-none">{blog.day}</span>
                  <span className="text-white text-[10px] tracking-wider uppercase mt-1">{blog.month}</span>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-6 lg:p-8 flex flex-col flex-grow">
                {/* Category */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-[var(--color-primary)]">
                    {renderIcon(blog.categoryIcon)}
                  </span>
                  <span className="text-[var(--color-primary)] text-xs font-medium tracking-wide uppercase">
                    {blog.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 line-clamp-2 group-hover:text-[var(--color-primary)] transition-colors duration-300">
                  <Link href={blog.linkUrl}>
                    {blog.title}
                  </Link>
                </h3>

                {/* Excerpt */}
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                  {blog.excerpt}
                </p>

                {/* Read More Link */}
                <Link 
                  href={blog.linkUrl}
                  className="inline-flex items-center gap-2 text-[var(--color-primary)] text-sm font-bold tracking-wide group/link"
                >
                  {blog.linkText}
                  <span className="transition-transform duration-300 group-hover/link:translate-x-1">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Working Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2">
            <button 
              onClick={() => handlePageChange(1)}
              disabled={currentPage === 1}
              className="w-10 h-10 rounded border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-[var(--color-primary)] transition-colors disabled:opacity-50 disabled:hover:border-gray-700 disabled:hover:text-gray-400 disabled:cursor-not-allowed"
            >
              <FaAngleDoubleLeft className="w-3 h-3" />
            </button>
            <button 
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="w-10 h-10 rounded border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-[var(--color-primary)] transition-colors disabled:opacity-50 disabled:hover:border-gray-700 disabled:hover:text-gray-400 disabled:cursor-not-allowed"
            >
              <FaAngleLeft className="w-3 h-3" />
            </button>
            
            {getPageNumbers().map(number => (
              <button
                key={number}
                onClick={() => handlePageChange(number)}
                className={`w-10 h-10 rounded border flex items-center justify-center font-bold transition-colors ${
                  currentPage === number 
                    ? 'bg-[var(--color-primary)] border-[var(--color-primary)] text-black'
                    : 'border-gray-700 text-gray-400 hover:text-white hover:border-[var(--color-primary)]'
                }`}
              >
                {number}
              </button>
            ))}
            
            <button 
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="w-10 h-10 rounded border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-[var(--color-primary)] transition-colors disabled:opacity-50 disabled:hover:border-gray-700 disabled:hover:text-gray-400 disabled:cursor-not-allowed"
            >
              <FaAngleRight className="w-3 h-3" />
            </button>
            <button 
              onClick={() => handlePageChange(totalPages)}
              disabled={currentPage === totalPages}
              className="w-10 h-10 rounded border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-[var(--color-primary)] transition-colors disabled:opacity-50 disabled:hover:border-gray-700 disabled:hover:text-gray-400 disabled:cursor-not-allowed"
            >
              <FaAngleDoubleRight className="w-3 h-3" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
