import React from 'react';
import Link from 'next/link';
import { DigitalNotFoundData } from '@/types/templates.types';
import { FaHome } from 'react-icons/fa';

export const NotFoundContent = ({ data }: { data?: DigitalNotFoundData }) => {
  if (!data) return null;

  const numSize = 'clamp(90px, 28vw, 320px)';
  const shadow = '4px 4px 0px #066b6c, 8px 8px 15px rgba(0,0,0,0.4)';

  return (
    <section className="bg-[#0b101e] flex flex-col items-center justify-center min-h-[calc(100vh-80px)] py-2 px-4 text-center overflow-hidden">

      {/* ── Main 404 block ── */}
      <div className="relative w-full max-w-[900px] mx-auto mb-2 flex justify-center items-center" style={{ paddingTop: 'clamp(40px, 8vw, 70px)' }}>

        {/* ── Scattered decorative SVG elements ── */}
        <svg className="absolute top-[8%] left-[3%] opacity-70" width="10" height="10"><circle cx="5" cy="5" r="5" fill="#00c5c8"/></svg>
        <svg className="absolute top-[40%] left-[1%] opacity-40" width="22" height="22"><circle cx="11" cy="11" r="10" fill="none" stroke="#00c5c8" strokeWidth="1.5"/></svg>
        <svg className="absolute bottom-[10%] left-[8%] opacity-60" width="7" height="7"><circle cx="3.5" cy="3.5" r="3.5" fill="#00c5c8"/></svg>
        <svg className="absolute top-[5%] left-[22%] opacity-30" width="14" height="14">
          <line x1="0" y1="0" x2="14" y2="14" stroke="#00c5c8" strokeWidth="2"/>
          <line x1="14" y1="0" x2="0" y2="14" stroke="#00c5c8" strokeWidth="2"/>
        </svg>
        <svg className="absolute bottom-[5%] left-[30%] opacity-25" width="12" height="12">
          <line x1="0" y1="0" x2="12" y2="12" stroke="#00c5c8" strokeWidth="2"/>
          <line x1="12" y1="0" x2="0" y2="12" stroke="#00c5c8" strokeWidth="2"/>
        </svg>
        <svg className="absolute top-[8%] right-[5%] opacity-30" width="14" height="14">
          <line x1="0" y1="0" x2="14" y2="14" stroke="#00c5c8" strokeWidth="2"/>
          <line x1="14" y1="0" x2="0" y2="14" stroke="#00c5c8" strokeWidth="2"/>
        </svg>
        <svg className="absolute top-[45%] right-[1%] opacity-60" width="8" height="8"><circle cx="4" cy="4" r="4" fill="#00c5c8"/></svg>
        <svg className="absolute bottom-[12%] right-[6%] opacity-40" width="20" height="20"><circle cx="10" cy="10" r="9" fill="none" stroke="#00c5c8" strokeWidth="1.5"/></svg>
        <svg className="absolute bottom-[20%] right-[18%] opacity-25" width="12" height="12">
          <line x1="0" y1="0" x2="12" y2="12" stroke="#00c5c8" strokeWidth="2"/>
          <line x1="12" y1="0" x2="0" y2="12" stroke="#00c5c8" strokeWidth="2"/>
        </svg>
        <svg className="absolute top-[18%] right-[23%] opacity-60" width="6" height="6"><circle cx="3" cy="3" r="3" fill="#00c5c8"/></svg>

        {/* ── Left "4" ── */}
        <span
          className="font-black text-[#00c5c8] leading-none select-none flex-shrink-0"
          style={{ fontSize: numSize, textShadow: shadow, lineHeight: 1 }}
        >
          4
        </span>

        {/* ── Center: error.webp (girl + 0 circle) ── */}
        <div className="relative flex-shrink-0 flex items-center justify-center"
          style={{ width: 'clamp(90px, 28vw, 320px)', height: 'clamp(90px, 28vw, 320px)', margin: '0 -3%' }}
        >
          {/* Speech bubble with ? */}
          <div className="absolute z-20 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16"
            style={{ top: '-20%', left: '58%' }}
          >
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path
                d="M 50,8 C 27,8 8,27 8,50 C 8,60 11.5,69 17.5,76 L 10,92 L 28,86 C 34.5,89.5 42,91.5 50,91.5 C 73,91.5 92,72.5 92,50 C 92,27 73,8 50,8 Z"
                fill="#0f1a2e"
                stroke="#00c5c8"
                strokeWidth="3"
              />
              <text x="50" y="66" fontFamily="sans-serif" fontSize="52" fontWeight="bold" fill="#00c5c8" textAnchor="middle">?</text>
            </svg>
          </div>

          <img
            src={data.image}
            alt="404 Not Found"
            className="relative z-10 w-full h-full object-contain"
          />
        </div>

        {/* ── Right "4" ── */}
        <span
          className="font-black text-[#00c5c8] leading-none select-none flex-shrink-0"
          style={{ fontSize: numSize, textShadow: shadow, lineHeight: 1 }}
        >
          4
        </span>
      </div>

      <h2 className="text-2xl sm:text-3xl md:text-[38px] lg:text-[42px] font-bold text-white mb-1 md:mb-2">
        {data.titlePart1} <span className="text-[#00c5c8]">{data.titleHighlight}</span> {data.titlePart2}
      </h2>

      <p className="text-gray-400 text-xs sm:text-sm md:text-base max-w-md mx-auto mb-4 md:mb-6 leading-relaxed">
        {data.description}
      </p>

      <Link
        href={data.buttonUrl}
        className="inline-flex items-center gap-2 bg-[#00c5c8] hover:bg-[#009ea1] text-white px-8 py-3 rounded-full font-medium transition-colors"
      >
        <FaHome />
        {data.buttonText}
      </Link>
    </section>
  );
};
