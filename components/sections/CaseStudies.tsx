import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { DigitalCaseStudiesData } from '@/types/templates.types';
import { Button } from '@/components/ui/Button';
import { FaBuilding, FaArrowRight } from 'react-icons/fa';

export const CaseStudies = ({ data }: { data?: DigitalCaseStudiesData }) => {
  if (!data) return null;

  return (
    <section className="py-16 lg:py-12 bg-[#020914]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Header Area */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-6">

            <div className="flex-1">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-[var(--color-primary)]"></span>
                <p className="text-[var(--color-primary)] font-medium text-sm tracking-wider uppercase">
                  {data.subtitle}
                </p>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                {data.titlePart1.replace(/\\n/g, '\n').split('\n').map((line, i, arr) => (
                  <React.Fragment key={i}>
                    {line}
                    {i < arr.length - 1 && <br />}
                  </React.Fragment>
                ))}
                <span className="text-[var(--color-primary)]">{data.titlePart2}</span>
                {data.titlePart3}
              </h2>
            </div>

            <div className="flex-shrink-0">
              <Button href={data.buttonUrl} variant="outline">
                {data.buttonText}
              </Button>
            </div>

          </div>

          <span className="block w-16 h-[2px] bg-[var(--color-primary)] mb-6"></span>

          <p className="text-gray-400 text-base leading-relaxed max-w-2xl">
            {data.description.replace(/\\n/g, '\n').split('\n').map((line, i, arr) => (
              <React.Fragment key={i}>
                {line}
                {i < arr.length - 1 && <br />}
              </React.Fragment>
            ))}
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.studies.map((study) => (
            <div
              key={study.id}
              className="bg-[#05101f] border border-gray-800/60 rounded-2xl overflow-hidden group hover:border-[var(--color-primary)]/50 transition-all duration-300 flex flex-col"
            >

              {/* Image Box */}
              <div className="relative w-full h-64 overflow-hidden border-b border-gray-800/60">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Number Badge */}
                <div className="absolute top-4 left-4 w-10 h-10 border border-[var(--color-primary)] bg-black/40 backdrop-blur-sm rounded-lg flex items-center justify-center text-[var(--color-primary)] font-bold text-sm z-10">
                  {study.number}
                </div>
              </div>

              {/* Content Box */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-white font-bold text-xl mb-3 group-hover:text-[var(--color-primary)] transition-colors duration-300">
                  {study.title}
                </h3>

                <div className="flex items-center gap-2 text-[var(--color-primary)] text-xs font-semibold uppercase tracking-wider mb-5">
                  <FaBuilding className="w-3 h-3" />
                  <span>Industry: <span className="text-gray-300">{study.industry}</span></span>
                </div>

                <div className="w-full h-px bg-gray-800/60 mb-5"></div>

                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                  {study.description}
                </p>

                <Link href={study.linkUrl} className="inline-flex items-center gap-2 text-[var(--color-primary)] text-sm font-semibold hover:text-white transition-colors duration-300 mt-auto">
                  {study.linkText}
                  <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
