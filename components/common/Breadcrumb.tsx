import React from 'react';
import Link from 'next/link';
import { BreadcrumbData } from '@/types/templates.types';
import { FaAngleRight } from 'react-icons/fa';

export const Breadcrumb = ({ data }: { data?: BreadcrumbData }) => {
  if (!data) return null;

  return (
    <section 
      className="relative w-full h-[250px] md:h-[300px] lg:h-[350px] flex flex-col justify-center items-center text-center px-4"
      style={{
        backgroundImage: `url('${data.bgImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#020914]/80 z-0"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center pt-8">
        <h1 className="text-4xl md:text-4xl lg:text-5xl lg:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          {data.title}
        </h1>
        
        <div className="flex items-center gap-2 text-sm md:text-base font-medium">
          {data.paths.map((path, index) => (
            <React.Fragment key={index}>
              {path.url ? (
                <Link href={path.url} className="text-white hover:text-[var(--color-primary)] transition-colors">
                  {path.label}
                </Link>
              ) : (
                <span className="text-white">
                  {path.label}
                </span>
              )}
              
              {index < data.paths.length - 1 && (
                <FaAngleRight className="w-3 h-3 text-white" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
