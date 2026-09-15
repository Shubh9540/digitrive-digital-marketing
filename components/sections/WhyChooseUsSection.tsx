import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { DigitalWhyChooseUsData } from '@/types/templates.types';
import { FaCog, FaChartLine, FaPlus, FaUsers, FaWifi, FaStar } from 'react-icons/fa';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaCog': return <FaCog className="w-6 h-6" />;
    case 'FaChartLine': return <FaChartLine className="w-6 h-6" />;
    default: return <FaCog className="w-6 h-6" />;
  }
};

export const WhyChooseUsSection = ({ data }: { data?: DigitalWhyChooseUsData }) => {
  if (!data) return null;

  return (
    <section className="py-20 lg:py-28 bg-[#020914] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column (col-xl-6) */}
          <div className="flex flex-col z-20">
            
            {/* Subtitle (Simple Dot style as requested) */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[var(--color-primary)]"></span>
              <p className="text-[var(--color-primary)] font-bold text-[13px] tracking-[0.2em] uppercase">
                {data.subtitle}
              </p>
            </div>

            {/* Title */}
            <h2 className="text-4xl md:text-[50px] font-bold text-white leading-[1.1] mb-6">
              {data.titlePart1.replace(/\\n/g, '\n').split('\n').map((line, i, arr) => (
                <React.Fragment key={i}>
                  {line}
                  {i < arr.length - 1 && <br />}
                </React.Fragment>
              ))}{' '}
              <span className="text-[var(--color-primary)]">{data.titlePart2}</span>
            </h2>

            {/* Description */}
            <p className="text-[#a0aabf] text-[16px] leading-relaxed mb-10 max-w-[90%]">
              {data.description.replace(/\\n/g, '\n')}
            </p>

            {/* Feature Box Wrapper & Client Info (Side by side using flex) */}
            <div className="flex flex-col sm:flex-row gap-8 sm:gap-6 items-center sm:items-stretch">
              
              {/* Feature Boxes */}
              <div className="flex-1 flex flex-col gap-5 w-full">
                {data.features.map((feature) => (
                  <div key={feature.id} className="rounded-2xl border border-[var(--color-primary)]/20 bg-transparent p-6 flex flex-col sm:flex-row gap-5 items-start sm:items-center">
                    <div className="w-[64px] h-[64px] rounded-full border border-[var(--color-primary)] flex items-center justify-center flex-shrink-0 text-[var(--color-primary)] bg-transparent">
                      {renderIcon(feature.icon)}
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-[20px] mb-2">{feature.title}</h4>
                      <p className="text-[#a0aabf] text-[14px] leading-relaxed whitespace-pre-line">
                        {feature.description.replace(/\\n/g, '\n')}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Choose Client Info (Pill & Ball) */}
              <div className="flex flex-col items-center justify-center gap-6 flex-shrink-0">
                <div className="flex items-center gap-3">
                  {/* Pill */}
                  <div className="w-[56px] rounded-full border border-gray-700 bg-transparent p-1.5 pb-2 flex flex-col items-center gap-2">
                    <Link href={data.teamRedirectUrl} className="w-[44px] h-[44px] rounded-full bg-[var(--color-primary)] flex items-center justify-center text-white font-bold text-lg hover:scale-105 transition-transform flex-shrink-0">
                      <FaPlus className="w-4 h-4" />
                    </Link>
                    <div className="flex flex-col -space-y-2 mt-1">
                      {data.teamImages.map((img, i) => (
                        <div key={i} className="w-[44px] h-[44px] rounded-full overflow-hidden border-2 border-[#020914] relative z-10">
                          <Image src={img} alt="Team" fill className="object-cover" />
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Vertical Text */}
                  <div className="relative h-48 w-6">
                    <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90 whitespace-nowrap text-[#a0aabf] text-[12px] font-semibold tracking-widest uppercase">
                      {data.customersText}
                    </p>
                  </div>
                </div>

                {/* Ball Icon */}
                <div className="w-[68px] h-[68px] rounded-2xl border border-gray-700 bg-transparent flex items-center justify-center text-white">
                  <FaWifi className="w-7 h-7 rotate-90 opacity-80" />
                </div>
              </div>

            </div>

          </div>

          {/* Right Column (col-xl-6) */}
          <div className="relative w-full aspect-[4/5] max-w-[500px] mx-auto mt-16 lg:mt-0 z-10">
            
            {/* The cyan curve matching the exact shape of the image */}
            <div className="absolute -left-6 lg:-left-8 top-[-3%] bottom-[-3%] w-[60%] lg:w-[65%] rounded-l-[300px] border-l-[1.5px] border-t-[1.5px] border-b-[1.5px] border-[var(--color-primary)] z-0 hidden lg:block opacity-80">
              {/* Top dot */}
              <div className="absolute top-0 right-[15%] w-2.5 h-2.5 rounded-full bg-[var(--color-primary)] -translate-y-1/2"></div>
              {/* Bottom dot */}
              <div className="absolute bottom-0 right-[2%] w-2 h-2 rounded-full bg-[var(--color-primary)] translate-y-1/2"></div>
            </div>

            {/* Main Image (Pill shape, taller) */}
            <div className="relative w-full h-full rounded-[300px] overflow-hidden z-10 shadow-[0_0_30px_rgba(0,194,199,0.1)]">
              <Image 
                src={data.mainImage} 
                alt="Our Expertise" 
                fill 
                className="object-cover"
              />
            </div>

            {/* Counter Badge (Completely inside the image at the bottom center) */}
            <div className="absolute bottom-6 lg:bottom-8 left-1/2 -translate-x-1/2 z-20 w-[170px] lg:w-[190px] aspect-square rounded-full bg-[#020b16] border border-[#1a2639] flex flex-col items-center justify-center p-4 text-center shadow-[0_15px_40px_rgba(0,0,0,0.5)]">
               <div className="w-[48px] h-[48px] rounded-full bg-[var(--color-primary)] flex items-center justify-center text-white mb-2 shadow-[0_0_15px_rgba(0,194,199,0.4)]">
                 <FaUsers className="w-5 h-5" />
               </div>
               <h2 className="text-[52px] lg:text-[56px] font-normal text-[var(--color-primary)] mb-0 leading-none tracking-tight">{data.badgePercentage}</h2>
               <p className="text-white text-[10px] lg:text-[11px] font-semibold whitespace-pre-line leading-[1.3] mt-1 tracking-wide">
                 {data.badgeText.replace(/\\n/g, '\n')}
               </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
