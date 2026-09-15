import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { DigitalBlogData } from '@/types/templates.types';
import { FaFileAlt, FaArrowRight } from 'react-icons/fa';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaFileAlt': return <FaFileAlt className="w-3 h-3" />;
    default: return <FaFileAlt className="w-3 h-3" />;
  }
};

export const BlogSection = ({ data }: { data?: DigitalBlogData }) => {
  if (!data) return null;

  return (
    <section className="py-16 lg:py-12 bg-[#020914] border-t border-gray-800/60">
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
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            {data.titlePart1.replace(/\\n/g, '\n').split('\n').map((line, i, arr) => (
              <React.Fragment key={i}>
                {line}
                {i < arr.length - 1 && <br />}
              </React.Fragment>
            ))}
            <span className="text-[var(--color-primary)] underline decoration-[var(--color-primary)] underline-offset-8 decoration-2">{data.titlePart2}</span>
          </h2>
          
          <p className="text-gray-400 text-base leading-relaxed">
            {data.description.replace(/\\n/g, '\n').split('\n').map((line, i, arr) => (
              <React.Fragment key={i}>
                {line}
                {i < arr.length - 1 && <br />}
              </React.Fragment>
            ))}
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.blogs.map((blog) => (
            <div 
              key={blog.id} 
              className="bg-[#05101f] rounded-2xl overflow-hidden group border border-gray-800/60 hover:border-[var(--color-primary)] hover:shadow-[0_0_20px_rgba(0,194,199,0.15)] transition-all duration-300 flex flex-col"
            >
              
              {/* Image Section */}
              <div className="relative w-full h-60 overflow-hidden">
                <Image 
                  src={blog.image} 
                  alt={blog.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Date Badge */}
                <div className="absolute top-4 left-4 bg-[#0a192f]/90 backdrop-blur-md rounded-lg flex flex-col items-center justify-center p-2 min-w-[50px] shadow-lg border border-white/5">
                  <span className="text-[var(--color-primary)] font-bold text-xl leading-none mb-1">{blog.day}</span>
                  <span className="text-white text-[10px] font-semibold tracking-wider uppercase">{blog.month}</span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 mb-4 text-[var(--color-primary)] font-medium text-xs tracking-wider uppercase">
                  {renderIcon(blog.categoryIcon)}
                  <span>{blog.category}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 hover:text-[var(--color-primary)] transition-colors duration-300 line-clamp-2">
                  <Link href={blog.linkUrl}>
                    {blog.title}
                  </Link>
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                  {blog.excerpt}
                </p>
                
                <Link 
                  href={blog.linkUrl} 
                  className="inline-flex items-center gap-2 text-[var(--color-primary)] text-sm font-semibold hover:text-white transition-colors duration-300 mt-auto"
                >
                  {blog.linkText}
                  <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>

            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-14 flex justify-center">
          <Link 
            href={data.footerButtonUrl}
            className="inline-flex items-center justify-center gap-3 bg-transparent border border-gray-600 text-white px-8 py-3.5 rounded-lg font-semibold text-sm hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors duration-300 group"
          >
            {data.footerButtonText}
            <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>

      </div>
    </section>
  );
};
