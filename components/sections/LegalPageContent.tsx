import React from 'react';
import { LegalPageData } from '@/types/templates.types';

export const LegalPageContent = ({ data }: { data?: LegalPageData }) => {
  if (!data) return null;

  return (
    <section className="bg-[#020914] py-16 lg:py-12 text-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10">
          {data.sections.map((section) => (
            <div key={section.id} className="flex flex-col gap-3">
              <h3 className="text-2xl font-bold text-white">
                {section.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
