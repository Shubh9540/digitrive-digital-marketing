import React from 'react';
import { BlogDetailData } from '@/types/templates.types';
import { FaMobileAlt, FaSearch, FaChartLine, FaMousePointer, FaTachometerAlt, FaShieldAlt, FaDesktop, FaLocationArrow, FaFileAlt, FaHandPointUp } from 'react-icons/fa';

const renderIcon = (iconName: string, className?: string) => {
  const IconProps = { className: className || 'w-6 h-6' };
  switch (iconName) {
    case 'FaMobileAlt': return <FaMobileAlt {...IconProps} />;
    case 'FaSearch': return <FaSearch {...IconProps} />;
    case 'FaChartLine': return <FaChartLine {...IconProps} />;
    case 'FaMousePointer': return <FaMousePointer {...IconProps} />;
    case 'FaTachometerAlt': return <FaTachometerAlt {...IconProps} />;
    case 'FaShieldAlt': return <FaShieldAlt {...IconProps} />;
    case 'FaDesktop': return <FaDesktop {...IconProps} />;
    case 'FaLocationArrow': return <FaLocationArrow {...IconProps} />;
    case 'FaFileAlt': return <FaFileAlt {...IconProps} />;
    case 'FaHandPointUp': return <FaHandPointUp {...IconProps} />;
    default: return null;
  }
};

export const BlogDetailContent = ({ data }: { data?: BlogDetailData }) => {
  if (!data) return null;

  return (
    <section className="bg-[#020914] py-12 lg:py-20 text-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          <div className="flex flex-col">
            <div className="mb-6">
              <span className="inline-block px-4 py-1.5 rounded-full border border-[var(--color-primary)] text-[var(--color-primary)] text-xs font-semibold tracking-wide">
                {data.category}
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              {data.title}
              <span className="text-[var(--color-primary)] block">{data.titleHighlight}</span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              {data.subtitle}
            </p>
            
            {/* Author Info */}
            <div className="flex items-center gap-4">
              <img src={data.author.image} alt={data.author.name} className="w-12 h-12 rounded-full object-cover" />
              <div className="flex flex-col">
                <span className="text-sm text-gray-400">
                  By <span className="text-[var(--color-primary)] font-semibold">{data.author.name}</span>
                </span>
                <span className="text-xs text-gray-500">
                  {data.author.date} <span className="mx-2">•</span> {data.author.readTime}
                </span>
              </div>
            </div>
          </div>
          
          <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[300px] sm:h-[400px] lg:h-[500px]">
            <img src={data.heroImage} alt={data.title} className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Content Body */}
        <div className="w-full">
          
          <div className="prose prose-invert prose-lg max-w-none mb-12">
            {data.content.map((paragraph, idx) => (
              <p key={idx} className="text-gray-300 leading-relaxed mb-6">{paragraph}</p>
            ))}
          </div>

          {/* Blockquote */}
          <div className="bg-[#05101f] rounded-2xl p-8 sm:p-10 mb-16 relative border border-gray-800 shadow-lg">
            <div className="absolute top-8 left-6 sm:left-10 text-[var(--color-primary)] opacity-80 text-6xl font-serif leading-none">
              &ldquo;
            </div>
            <p className="text-lg sm:text-xl text-white font-medium italic leading-relaxed relative z-10 pl-12 sm:pl-16">
              {data.blockquote}
            </p>
          </div>

          {/* Why It Matters */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-4">
              <span className="w-10 h-[1px] bg-[var(--color-primary)]"></span>
              <p className="text-gray-400 text-xs tracking-[0.2em] uppercase font-semibold">
                {data.whyItMatters.subtitle}
              </p>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">{data.whyItMatters.title}</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              {data.whyItMatters.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {data.whyItMatters.grid.map(item => (
                <div key={item.id} className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded bg-[#05101f] border border-gray-800 flex items-center justify-center flex-shrink-0 text-[var(--color-primary)]">
                    {renderIcon(item.icon, 'w-5 h-5')}
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Best Practices Box */}
          <div className="bg-[#05101f] rounded-3xl p-8 sm:p-12 mb-16 border border-gray-800 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
            <h3 className="text-2xl font-bold text-center mb-10">{data.bestPractices.title}</h3>
            
            <div className="flex flex-wrap justify-center gap-8 sm:gap-12 lg:gap-16">
              {data.bestPractices.list.map(item => (
                <div key={item.id} className="flex flex-col items-center text-center max-w-[100px]">
                  <div className="w-16 h-16 rounded-2xl bg-transparent border border-gray-700 flex items-center justify-center text-[var(--color-primary)] mb-4 transition-all duration-300 hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)]/5 hover:-translate-y-1">
                    {renderIcon(item.icon, 'w-8 h-8')}
                  </div>
                  <span className="text-gray-300 text-sm font-medium leading-tight">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Conclusion */}
          <div className="prose prose-invert prose-lg max-w-none">
            {data.conclusion.map((paragraph, idx) => (
              <p key={idx} className="text-gray-300 leading-relaxed mb-6">{paragraph}</p>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
