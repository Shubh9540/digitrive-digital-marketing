import React from 'react';
import { DigitalContactData } from '@/types/templates.types';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPlus, FaPaperPlane, FaSyncAlt, FaUser, FaRegEnvelope, FaRegEdit, FaRegCommentDots } from 'react-icons/fa';

const renderIcon = (iconName: string, className?: string) => {
  const props = { className: className || 'w-5 h-5 text-[var(--color-primary)]' };
  switch (iconName) {
    case 'FaPhoneAlt': return <FaPhoneAlt {...props} />;
    case 'FaEnvelope': return <FaEnvelope {...props} />;
    case 'FaMapMarkerAlt': return <FaMapMarkerAlt {...props} />;
    default: return <FaPhoneAlt {...props} />;
  }
};

export const ContactSection = ({ data }: { data?: DigitalContactData }) => {
  if (!data) return null;

  return (
    <section className="bg-[#020914] pt-16 lg:pt-24 text-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Left Column: Form */}
          <div>
            <div className="flex items-center gap-2 mb-4 text-[var(--color-primary)] font-semibold text-sm">
              <FaPlus className="w-3 h-3" />
              <span>{data.form.subtitle}</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              {data.form.titlePart1}
              <span className="text-[var(--color-primary)]">{data.form.titlePart2}</span>
              {data.form.titlePart3}
            </h2>
            
            <div className="w-16 h-1 bg-[var(--color-primary)] mb-10"></div>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <FaUser className="text-[var(--color-primary)] w-4 h-4" />
                  </div>
                  <input 
                    type="text" 
                    placeholder={data.form.namePlaceholder}
                    className="w-full bg-[#05101f] border border-gray-800/60 rounded-lg py-4 pl-12 pr-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[var(--color-primary)] transition-colors"
                  />
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <FaRegEnvelope className="text-[var(--color-primary)] w-4 h-4" />
                  </div>
                  <input 
                    type="email" 
                    placeholder={data.form.emailPlaceholder}
                    className="w-full bg-[#05101f] border border-gray-800/60 rounded-lg py-4 pl-12 pr-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[var(--color-primary)] transition-colors"
                  />
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <FaRegEdit className="text-[var(--color-primary)] w-4 h-4" />
                  </div>
                  <input 
                    type="text" 
                    placeholder={data.form.subjectPlaceholder}
                    className="w-full bg-[#05101f] border border-gray-800/60 rounded-lg py-4 pl-12 pr-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[var(--color-primary)] transition-colors"
                  />
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <FaPhoneAlt className="text-[var(--color-primary)] w-4 h-4" />
                  </div>
                  <input 
                    type="tel" 
                    placeholder={data.form.phonePlaceholder}
                    className="w-full bg-[#05101f] border border-gray-800/60 rounded-lg py-4 pl-12 pr-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[var(--color-primary)] transition-colors"
                  />
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute top-4 left-0 pl-4 flex pointer-events-none">
                  <FaRegCommentDots className="text-[var(--color-primary)] w-4 h-4" />
                </div>
                <textarea 
                  placeholder={data.form.messagePlaceholder}
                  rows={5}
                  className="w-full bg-[#05101f] border border-gray-800/60 rounded-lg py-4 pl-12 pr-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[var(--color-primary)] transition-colors resize-none"
                ></textarea>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button type="submit" className="bg-[var(--color-primary)] text-black font-bold py-3 px-6 rounded flex items-center justify-center gap-3 hover:bg-white transition-colors">
                  {data.form.submitText}
                  <div className="bg-white rounded-full p-1.5 flex items-center justify-center">
                    <FaPaperPlane className="w-3 h-3 text-[var(--color-primary)]" />
                  </div>
                </button>
                <button type="reset" className="bg-[#05101f] border border-[var(--color-primary)]/50 text-white font-bold py-3 px-6 rounded flex items-center justify-center gap-3 hover:border-[var(--color-primary)] transition-colors">
                  {data.form.resetText}
                  <div className="bg-white rounded-full p-1.5 flex items-center justify-center">
                    <FaSyncAlt className="w-3 h-3 text-black" />
                  </div>
                </button>
              </div>
            </form>
          </div>

          {/* Right Column: Info */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-4 text-[var(--color-primary)] font-semibold text-sm">
              <FaPlus className="w-3 h-3" />
              <span>{data.info.subtitle}</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              {data.info.title}
            </h2>
            
            <p className="text-gray-400 text-sm leading-relaxed mb-10 max-w-lg">
              {data.info.description}
            </p>

            <div className="flex flex-col gap-6 w-full max-w-md">
              {data.info.details.map((detail, index) => (
                <React.Fragment key={detail.id}>
                  <div className="flex items-center gap-6 group">
                    <div className="w-16 h-16 bg-[var(--color-primary)] rounded-lg flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-105">
                      {renderIcon(detail.icon, 'w-7 h-7 text-black')}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-white font-bold text-lg mb-1">{detail.title}</span>
                      <span className="text-[var(--color-primary)] text-sm font-medium whitespace-pre-line leading-relaxed">
                        {detail.text}
                      </span>
                    </div>
                  </div>
                  {index < data.info.details.length - 1 && (
                    <div className="w-full h-[1px] bg-gray-800/60 my-2"></div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Full Width Map */}
      <div className="w-full h-[400px] lg:h-[500px]">
        <iframe 
          src={data.mapUrl} 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>
      </div>
    </section>
  );
};
