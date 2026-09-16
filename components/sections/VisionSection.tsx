import React from 'react';
import { MissionVisionSectionData } from '@/types/templates.types';
import Image from 'next/image';

export const VisionSection = ({ data }: { data?: MissionVisionSectionData }) => {
  if (!data) return null;

  return (
    <section className="bg-[#051024] py-8 lg:py-12 relative overflow-hidden border-b border-[#0a1a36]">
      <div className="container mx-auto px-4 lg:px-8">

        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-16">

          {/* Image Side */}
          <div className="w-full lg:w-5/12 relative z-10">
            <div className="relative overflow-hidden group" style={{ borderRadius: '100px 20px 20px 20px' }}>
              <Image
                src={data.image}
                alt="Vision"
                width={800}
                height={600}
                className="w-full h-[300px] lg:h-[380px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Dark Overlay Text */}
              {data.overlayText && (
                <div className="absolute inset-0 bg-gradient-to-r from-[#051024]/80 to-transparent">
                  <div className="absolute bottom-6 right-6 text-right">
                    <p className="text-white font-medium text-sm lg:text-base tracking-[0.2em] whitespace-pre-line leading-loose">
                      {data.overlayText}
                    </p>
                    <div className="w-12 h-[3px] bg-[#c49250] mt-4 ml-auto"></div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-7/12 relative z-10 flex flex-col justify-center">

            {/* Background Number (Hollow) */}
            <div
              className="absolute top-0 flex items-start justify-center -z-10 text-[160px] lg:text-[100px] font-bold leading-none select-none pointer-events-none right-0"
              style={{ WebkitTextStroke: '1px #102a4c', color: 'transparent', transform: 'translateY(-10px)' }}
            >
              {data.number}
            </div>

            <div className="mb-8 relative z-20">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-[#00e5ff] uppercase tracking-[0.2em] text-xs font-bold">{data.subtitle}</span>
                <div className="w-12 h-[2px] bg-[#00e5ff]"></div>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                {data.titlePart1.split('\n').map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    <br className="hidden md:block" />
                  </React.Fragment>
                ))}
                <span className="text-[#00e5ff]">{data.titleHighlight}</span>
                {data.titlePart2 && ` ${data.titlePart2}`}
              </h2>

              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                {data.description}
              </p>
            </div>

            {/* Features (Bottom) */}
            <div className="grid grid-cols-3 gap-6 pt-4 relative z-20">
              {data.features.map((feature, index) => (
                <div key={feature.id} className={`flex flex-col ${index < data.features.length - 1 ? 'border-r border-[#102a4c] pr-4' : ''}`}>
                  <span className="text-white text-[10px] md:text-xs font-bold tracking-widest uppercase whitespace-pre-line leading-relaxed">
                    {feature.title}
                  </span>
                  <div className="w-10 h-[2px] bg-[#c49250] mt-4"></div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
