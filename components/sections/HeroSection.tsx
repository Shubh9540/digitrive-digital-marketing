'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { DigitalHeroData } from '@/types/templates.types';
import { Button } from '@/components/ui/Button';
import { FaChartLine, FaUsers, FaBullseye, FaGlobe } from 'react-icons/fa';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaChartLine': return <FaChartLine className="w-6 h-6" />;
    case 'FaUsers': return <FaUsers className="w-6 h-6" />;
    case 'FaBullseye': return <FaBullseye className="w-6 h-6" />;
    case 'FaGlobe': return <FaGlobe className="w-6 h-6" />;
    default: return null;
  }
};

export const HeroSection = ({ data }: { data?: DigitalHeroData }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!data) return null;

  return (
    <section className="relative w-full h-[550px] lg:h-[650px] overflow-hidden bg-black flex items-center">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src={data.bgImage} 
          alt="Hero Background" 
          fill 
          className="object-cover opacity-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 h-full">
        
        {/* Left Content */}
        <div className="flex flex-col justify-center animate-fade-in-up lg:col-span-7 h-full">
          <p className="text-[var(--color-primary)] text-sm font-semibold tracking-wider mb-4 uppercase">
            {data.subtitle}
          </p>
          <div className="w-16 h-0.5 bg-[var(--color-primary)] mb-6"></div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-4 tracking-tight">
            {data.titlePart1} <span className="text-[var(--color-primary)]">{data.titlePart2}</span>
          </h1>
          
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-light text-gray-200 mb-6 leading-relaxed">
            {data.heading2.replace(/\\n/g, '\n').split('\n').map((line, i, lines) => (
              <React.Fragment key={i}>
                {line.split('GROW').map((part, j, arr) => (
                  <React.Fragment key={`${i}-${j}`}>
                    {part}
                    {j < arr.length - 1 && <span className="text-[var(--color-primary)] font-semibold">GROW</span>}
                  </React.Fragment>
                ))}
                {i < lines.length - 1 && <br />}
              </React.Fragment>
            ))}
          </h2>
          
          <p className="text-gray-400 text-base leading-relaxed mb-10 max-w-md">
            {data.description}
          </p>
          
          <div>
            <Button href={data.buttonUrl} variant="solid">
              {data.buttonText}
            </Button>
          </div>
        </div>

        {/* Right Floating Elements (Desktop Only) */}
        <div className="hidden lg:block relative lg:col-span-5 h-full">
          {mounted && (
            <>
              {/* Connecting Curved Dashed SVG Paths */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none" style={{ zIndex: 1 }}>
                {/* Line from Chart (50%, 15%) to Team (10%, 50%) */}
                <path 
                  d="M 50 15 Q 25 30 10 50" 
                  fill="transparent" 
                  stroke="rgba(0, 194, 199, 0.5)" 
                  strokeWidth="0.3" 
                  strokeDasharray="1.5, 2.5"
                  strokeLinecap="round"
                  className="animate-dash-anim"
                />
                {/* Line from Team (10%, 50%) to Target (90%, 60%) */}
                <path 
                  d="M 10 50 Q 50 35 90 60" 
                  fill="transparent" 
                  stroke="rgba(0, 194, 199, 0.5)" 
                  strokeWidth="0.3" 
                  strokeDasharray="1.5, 2.5"
                  strokeLinecap="round"
                  className="animate-dash-anim"
                />
                {/* Line from Team (10%, 50%) to Globe (40%, 85%) */}
                <path 
                  d="M 10 50 Q 20 75 40 85" 
                  fill="transparent" 
                  stroke="rgba(0, 194, 199, 0.5)" 
                  strokeWidth="0.3" 
                  strokeDasharray="1.5, 2.5"
                  strokeLinecap="round"
                  className="animate-dash-anim"
                />
              </svg>

              {/* Floating Icons */}
              {data.floatingIcons.map((item, index) => {
                // Different float animations for variety
                const floatClasses = ['animate-float-slow', 'animate-float-medium', 'animate-float-fast'];
                const floatClass = floatClasses[index % 3];

                return (
                  <div 
                    key={item.id}
                    className={`absolute z-10 ${floatClass}`}
                    style={{ 
                      top: item.y, 
                      left: item.x, 
                      animationDelay: item.delay,
                      transform: 'translate(-50%, -50%)'
                    }}
                  >
                    <div className="relative group cursor-pointer">
                      {/* Glow effect rings (visible by default) */}
                      <div className="absolute inset-[-10px] rounded-full border border-[var(--color-primary)]/40 group-hover:scale-110 transition-all duration-700"></div>
                      <div className="absolute inset-[-20px] rounded-full border border-[var(--color-primary)]/20 group-hover:scale-110 transition-all duration-1000 delay-75"></div>
                      
                      {/* Main Icon circle */}
                      <div className="w-16 h-16 rounded-full bg-black/60 border border-[var(--color-primary)] backdrop-blur-sm flex items-center justify-center text-white shadow-[0_0_20px_rgba(0,194,199,0.4)] transition-transform duration-300 group-hover:scale-110">
                        {renderIcon(item.icon)}
                      </div>
                      
                      {/* Tooltip */}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-black/80 text-white text-xs px-3 py-1.5 rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap">
                        {item.label}
                      </div>
                    </div>
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>
    </section>
  );
};
