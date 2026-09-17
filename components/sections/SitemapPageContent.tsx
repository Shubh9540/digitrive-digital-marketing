import React from 'react';
import Link from 'next/link';
import { DigitalSitemapData } from '@/types/templates.types';
import { FaHome, FaCog, FaFileAlt, FaBullseye, FaShieldAlt, FaEnvelope, FaChevronRight } from 'react-icons/fa';

export const SitemapPageContent = ({ data }: { data?: DigitalSitemapData }) => {
  if (!data) return null;

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'FaHome': return <FaHome size={22} />;
      case 'FaCog': return <FaCog size={22} />;
      case 'FaFileAlt': return <FaFileAlt size={22} />;
      case 'FaBullseye': return <FaBullseye size={22} />;
      case 'FaShieldAlt': return <FaShieldAlt size={22} />;
      case 'FaEnvelope': return <FaEnvelope size={22} />;
      default: return <FaHome size={22} />;
    }
  };

  return (
    <section className="bg-[#0b101e] py-16 px-4">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.categories.map((category) => (
            <div 
              key={category.id} 
              className="border border-[#1a2a40] rounded-2xl overflow-hidden bg-[#0b101e] hover:border-[#00c5c8] transition-colors duration-300"
            >
              {/* Card Header */}
              <div className="p-6 flex items-start gap-4 pb-4">
                <div className="w-14 h-14 flex-shrink-0 rounded-full border border-[#00c5c8] flex items-center justify-center text-[#00c5c8]">
                  {renderIcon(category.icon)}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{category.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{category.description}</p>
                </div>
              </div>

              {/* Links List */}
              <div className="flex flex-col px-6 pb-6">
                {category.links.map((link) => (
                  <Link 
                    key={link.id} 
                    href={link.url}
                    className="flex items-center justify-between py-3 border-t border-[#1a2a40] group hover:bg-[#0f1a2e] -mx-6 px-6 transition-colors"
                  >
                    <span className="text-gray-300 text-sm group-hover:text-white transition-colors">{link.label}</span>
                    <FaChevronRight size={12} className="text-[#00c5c8]" />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
