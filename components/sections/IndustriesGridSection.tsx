import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IndustriesGridData } from '@/types/templates.types';
import { 
  FaArrowRight, FaUsers, FaChartBar, FaStar, FaShoppingCart, FaHeartbeat, 
  FaBuilding, FaGraduationCap, FaPlane, FaUtensils, FaTshirt, FaMoneyBillWave, 
  FaLaptopCode, FaIndustry, FaLeaf, FaCar, FaUsersCog, FaPlayCircle, FaHeart, FaBalanceScale 
} from 'react-icons/fa';

const renderIcon = (iconName: string) => {
  const cls = "w-5 h-5";
  switch (iconName) {
    case 'FaShoppingCart': return <FaShoppingCart className={cls} />;
    case 'FaHeartbeat': return <FaHeartbeat className={cls} />;
    case 'FaBuilding': return <FaBuilding className={cls} />;
    case 'FaGraduationCap': return <FaGraduationCap className={cls} />;
    case 'FaPlane': return <FaPlane className={cls} />;
    case 'FaUtensils': return <FaUtensils className={cls} />;
    case 'FaTshirt': return <FaTshirt className={cls} />;
    case 'FaMoneyBillWave': return <FaMoneyBillWave className={cls} />;
    case 'FaLaptopCode': return <FaLaptopCode className={cls} />;
    case 'FaIndustry': return <FaIndustry className={cls} />;
    case 'FaLeaf': return <FaLeaf className={cls} />;
    case 'FaCar': return <FaCar className={cls} />;
    case 'FaUsersCog': return <FaUsersCog className={cls} />;
    case 'FaPlayCircle': return <FaPlayCircle className={cls} />;
    case 'FaHeart': return <FaHeart className={cls} />;
    case 'FaBalanceScale': return <FaBalanceScale className={cls} />;
    case 'FaUsers': return <FaUsers className="w-8 h-8" />;
    case 'FaChartBar': return <FaChartBar className="w-8 h-8" />;
    case 'FaStar': return <FaStar className="w-8 h-8" />;
    default: return <FaStar className={cls} />;
  }
};

export const IndustriesGridSection = ({ data }: { data?: IndustriesGridData }) => {
  if (!data) return null;

  return (
    <section className="bg-[#020914] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start mb-16">
          
          {/* Left: Title & Text */}
          <div className="w-full lg:w-[45%] flex-shrink-0">
            <div className="flex items-center gap-4 mb-6">
              <p className="text-[var(--color-primary)] font-semibold text-sm tracking-[0.2em] uppercase">
                {data.subtitle}
              </p>
              <span className="w-20 h-[2px] bg-gray-700"></span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-[1.2]">
              {data.titlePart1} <br /> {data.titlePart2} <span className="text-[var(--color-primary)]">{data.titleHighlight}</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
              {data.description}
            </p>
          </div>

          {/* Right: Stats & Signature */}
          <div className="w-full lg:w-[55%] flex flex-col mt-10 lg:mt-0">
            
            {/* Stats Row */}
            <div className="flex flex-row items-start justify-between w-full mb-10">
              {data.stats.map((stat, index) => (
                <div 
                  key={stat.id} 
                  className={`flex flex-col items-start text-left flex-1 ${
                    index !== 2 ? 'border-r border-gray-700/50' : ''
                  } ${index === 1 ? 'pl-6 lg:pl-10' : index === 2 ? 'pl-6 lg:pl-10' : ''}`}
                >
                  <div className="text-[var(--color-primary)] mb-4">
                    {renderIcon(stat.icon)}
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
                  <p className="text-gray-400 text-sm max-w-[120px] leading-relaxed">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Signature Text */}
            {data.signatureText && (
              <div className="relative mt-2 self-end text-right w-[80%] max-w-[350px]">
                <div 
                  className="text-[40px] text-[var(--color-primary)] leading-[1.2] -rotate-3" 
                  style={{ fontFamily: "'Dancing Script', cursive" }}
                >
                  Your Growth <br />
                  <span className="pl-16">Our Expertise</span>
                </div>
                {/* Underline SVG */}
                <svg className="absolute -bottom-3 right-0 w-full h-3 text-[var(--color-primary)]" viewBox="0 0 200 20" preserveAspectRatio="none">
                  <path d="M10,15 Q100,10 190,12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </div>
            )}
          </div>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {data.industries.map((ind) => (
            <div 
              key={ind.id}
              className="bg-[#05101f] border border-gray-800/60 rounded-xl overflow-hidden group hover:border-[var(--color-primary)]/40 transition-colors duration-300 flex flex-col"
            >
              {/* Image Container with Icon overlapping */}
              <div className="relative h-48 w-full">
                {/* Inner wrapper for image zoom effect so icon doesn't get clipped */}
                <div className="absolute inset-0 overflow-hidden">
                  <Image 
                    src={ind.image} 
                    alt={ind.title} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
                </div>
                
                {/* Overlapping Icon */}
                <div className="absolute -bottom-6 left-6 w-12 h-12 rounded-full bg-[var(--color-primary)] border-4 border-[#05101f] flex items-center justify-center text-black shadow-lg z-10">
                  {renderIcon(ind.icon)}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 pt-10 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                  {ind.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                  {ind.description}
                </p>
                
                <Link 
                  href={ind.url}
                  className="flex items-center gap-2 text-[var(--color-primary)] font-semibold text-sm hover:text-white transition-colors mt-auto w-fit"
                >
                  {ind.linkText} 
                  <div className="w-8 h-8 rounded-full border border-[var(--color-primary)] flex items-center justify-center group-hover:bg-[var(--color-primary)] transition-colors text-[var(--color-primary)] group-hover:text-black">
                    <FaArrowRight className="w-3 h-3" />
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
