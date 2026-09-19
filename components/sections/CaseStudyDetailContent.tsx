import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaUsers, FaHeart, FaGlobe, FaShoppingCart,
  FaChartLine, FaArrowDown, FaDollarSign,
  FaTrophy, FaChartBar, FaPhone, FaCalendar,
  FaExternalLinkAlt, FaBriefcase, FaIndustry, FaClock,
  FaCheckCircle, FaRegBuilding, FaTag, FaRegCalendarAlt
} from 'react-icons/fa';
import { CaseStudyDetailData } from '@/types/templates.types';
import { SocialGrowthSVG } from '@/components/ui/SocialGrowthSVG';

const renderMetricIcon = (iconName: string) => {
  const cls = "w-6 h-6";
  switch (iconName) {
    case 'FaUsers': return <FaUsers className={cls} />;
    case 'FaHeart': return <FaHeart className={cls} />;
    case 'FaGlobe': return <FaGlobe className={cls} />;
    case 'FaShoppingCart': return <FaShoppingCart className={cls} />;
    case 'FaChartLine': return <FaChartLine className={cls} />;
    case 'FaArrowDown': return <FaArrowDown className={cls} />;
    case 'FaDollarSign': return <FaDollarSign className={cls} />;
    case 'FaTrophy': return <FaTrophy className={cls} />;
    case 'FaChartBar': return <FaChartBar className={cls} />;
    case 'FaPhone': return <FaPhone className={cls} />;
    case 'FaCalendar': return <FaCalendar className={cls} />;
    default: return <FaChartLine className={cls} />;
  }
};

export const CaseStudyDetailContent = ({ data }: { data: CaseStudyDetailData }) => {
  return (
    <div className="bg-[#020914]">

      {/* Hero Section */}
      <div className="bg-[#05101f] border-b border-gray-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="flex flex-col lg:flex-row gap-10 items-center">

            {/* Left: Text */}
            <div className="flex-1 order-2 lg:order-1">
              <p className="text-[var(--color-primary)] text-xs font-bold tracking-widest uppercase mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[var(--color-primary)] inline-block"></span>
                {data.tag}
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                {data.title.includes(data.titleHighlight)
                  ? <>
                      {data.title.substring(0, data.title.indexOf(data.titleHighlight))}
                      <span className="text-[var(--color-primary)]">{data.titleHighlight}</span>
                      {data.title.substring(data.title.indexOf(data.titleHighlight) + data.titleHighlight.length)}
                    </>
                  : data.title
                }
              </h1>
              <p className="text-gray-400 text-base leading-relaxed mb-8 max-w-xl">
                {data.description}
              </p>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-10 mb-10">
                <div className="flex items-center gap-4">
                  <FaRegBuilding className="text-[var(--color-primary)] w-8 h-8 flex-shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-white font-semibold text-sm mb-0.5">Client</span>
                    <span className="text-gray-300 text-sm">{data.client}</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <FaTag className="text-[var(--color-primary)] w-8 h-8 flex-shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-white font-semibold text-sm mb-0.5">Industry</span>
                    <span className="text-gray-300 text-sm">{data.industry}</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <FaRegCalendarAlt className="text-[var(--color-primary)] w-8 h-8 flex-shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-white font-semibold text-sm mb-0.5">Duration</span>
                    <span className="text-gray-300 text-sm">{data.duration}</span>
                  </div>
                </div>
              </div>

              <Link
                href={data.websiteUrl}
                className="inline-flex items-center gap-2 bg-[var(--color-primary)] text-black font-bold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity text-sm"
              >
                {data.websiteText}
                <FaExternalLinkAlt className="w-3 h-3" />
              </Link>
            </div>

            {/* Right: Hero Image */}
            <div className="flex-shrink-0 w-full lg:w-[480px] order-1 lg:order-2">
              <div className="relative w-full h-72 lg:h-80 rounded-2xl overflow-hidden border border-gray-700/50 shadow-2xl shadow-black/50">
                <Image src={data.heroImage} alt={data.title} fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 flex flex-col gap-0">
        {data.sections.map((section, idx) => (
          <div key={section.id}>
            {/* Section Row */}
            <div className="py-10 flex flex-col lg:flex-row gap-10 items-start">

              {/* Left Column — Number + Title + Text */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full border-2 border-[var(--color-primary)] flex items-center justify-center flex-shrink-0">
                      <span className="text-[var(--color-primary)] text-xs font-bold">{section.number}</span>
                    </div>
                    <span className="text-gray-600 text-lg font-light">|</span>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-white">{section.title}</h2>
                </div>
                <p className="text-gray-400 leading-relaxed text-sm lg:text-base">{section.text}</p>
              </div>

              {/* Right Column — bullets / metrics / SVG */}
              <div className="w-full lg:w-[50%] flex-shrink-0">
                {/* Bullet points */}
                {section.bullets && section.bullets.length > 0 && (
                  <ul className="flex flex-col gap-3">
                    {section.bullets.map((b) => (
                      <li key={b.id} className="flex items-start gap-3">
                        <FaCheckCircle className="text-[var(--color-primary)] w-4 h-4 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{b.text}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Metrics — 2x2 grid on right */}
                {section.metrics && section.metrics.length > 0 && (
                  <div className="grid grid-cols-4 gap-3">
                    {section.metrics.map((m) => (
                      <div
                        key={m.id}
                        className="bg-[#05101f] border border-gray-800/60 rounded-xl p-5 flex flex-col items-center text-center gap-3 hover:border-[var(--color-primary)]/40 transition-colors duration-300"
                      >
                        <div className="w-12 h-12 rounded-full bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/30 flex items-center justify-center text-[var(--color-primary)]">
                          {renderMetricIcon(m.icon)}
                        </div>
                        <p className="text-3xl font-bold text-white">{m.value}</p>
                        <p className="text-gray-400 text-xs leading-tight">{m.label}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Overview SVG animation */}
                {!section.bullets && !section.metrics && (
                  <SocialGrowthSVG />
                )}
              </div>
            </div>

            {/* Divider */}
            {idx < data.sections.length - 1 && (
              <div className="w-full h-px bg-gray-800/60" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
