import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { DigitalTeamData } from '@/types/templates.types';
import { FaLinkedinIn, FaCode, FaPalette, FaArrowRight, FaUsers } from 'react-icons/fa';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaCode': return <FaCode className="w-4 h-4" />;
    case 'FaPalette': return <FaPalette className="w-4 h-4" />;
    default: return <FaCode className="w-4 h-4" />;
  }
};

export const TeamSection = ({ data }: { data?: DigitalTeamData }) => {
  if (!data) return null;

  return (
    <section className="py-16 lg:py-12 bg-[#020914]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Content */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="w-12 h-[1px] bg-gray-600"></span>
            <FaUsers className="w-4 h-4 text-[var(--color-primary)]" />
            <p className="text-[var(--color-primary)] font-medium text-sm tracking-widest uppercase">
              {data.subtitle}
            </p>
            <span className="w-12 h-[1px] bg-gray-600"></span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            {data.titlePart1.replace(/\\n/g, '\n').split('\n').map((line, i, arr) => (
              <React.Fragment key={i}>
                {line}
                {i < arr.length - 1 && <br />}
              </React.Fragment>
            ))}
            <span className="text-[var(--color-primary)] underline decoration-[var(--color-primary)] underline-offset-8 decoration-2">{data.titlePart2}</span>
          </h2>
          
          <p className="text-gray-400 text-base leading-relaxed">
            {data.description.replace(/\\n/g, '\n').split('\n').map((line, i, arr) => (
              <React.Fragment key={i}>
                {line}
                {i < arr.length - 1 && <br />}
              </React.Fragment>
            ))}
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.members.map((member) => (
            <div 
              key={member.id} 
              className="relative rounded-2xl overflow-hidden group border border-gray-800/60 hover:border-[var(--color-primary)] hover:shadow-[0_0_20px_rgba(0,194,199,0.15)] transition-all duration-300"
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  fill 
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                {/* Dark Gradient Overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
              </div>

              {/* Badges / Top Elements */}
              <div className="absolute top-4 right-4 z-20 flex flex-col gap-2 items-end">
                <Link 
                  href={member.linkedinUrl}
                  target="_blank"
                  className="w-8 h-8 rounded-full bg-[#0a192f]/80 backdrop-blur-sm flex items-center justify-center text-white hover:text-[var(--color-primary)] transition-colors border border-[var(--color-primary)]/30"
                >
                  <FaLinkedinIn className="w-4 h-4" />
                </Link>
              </div>

              {/* Team Lead Badge on Hover */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 bg-[var(--color-primary)] text-black text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-b-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                Team Lead
              </div>

              {/* Bottom Content */}
              <div className="relative z-10 p-6 pt-64 flex flex-col items-center text-center">
                <h3 className="text-2xl font-bold text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-[var(--color-primary)] font-medium text-sm mb-5">
                  {member.role}
                </p>
                
                <div className="w-16 h-[1px] bg-[var(--color-primary)] mb-5"></div>
                
                <div className="flex items-center gap-4 w-full mb-6">
                  {/* Icon Box */}
                  <div className="w-10 h-10 rounded-md border border-[var(--color-primary)]/40 flex items-center justify-center flex-shrink-0 text-[var(--color-primary)]">
                    {renderIcon(member.specialtyIcon)}
                  </div>
                  <div className="flex flex-col items-start text-left">
                    <span className="text-gray-300 text-sm font-medium">{member.specialtyTitle}</span>
                    <span className="text-gray-500 text-xs">{member.experience}</span>
                  </div>
                </div>

                <Link 
                  href={member.profileUrl} 
                  className="w-full py-3 px-4 rounded-lg flex items-center justify-center gap-2 text-sm font-semibold transition-all duration-300 border border-[var(--color-primary)]/40 text-white group-hover:bg-[var(--color-primary)] group-hover:text-black group-hover:border-[var(--color-primary)]"
                >
                  View Profile <FaArrowRight className="w-3 h-3" />
                </Link>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 max-w-3xl mx-auto bg-[#05101f] border border-gray-800/60 rounded-xl p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-12 h-12 rounded-full border border-[var(--color-primary)]/40 flex items-center justify-center flex-shrink-0 text-[var(--color-primary)] bg-[#0a192f]">
              <FaUsers className="w-5 h-5" />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed text-left border-l border-gray-700 pl-5">
              {data.footerText.replace(/\\n/g, ' ')}
            </p>
          </div>
          <Link 
            href={data.footerButtonUrl}
            className="flex-shrink-0 flex items-center gap-2 text-[var(--color-primary)] font-semibold text-sm hover:text-white transition-colors group"
          >
            {data.footerButtonText} 
            <div className="w-8 h-8 rounded-full border border-[var(--color-primary)] flex items-center justify-center group-hover:bg-[var(--color-primary)] group-hover:text-black transition-colors">
              <FaArrowRight className="w-3 h-3" />
            </div>
          </Link>
        </div>

      </div>
    </section>
  );
};
