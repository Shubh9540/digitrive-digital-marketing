import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { DigitalFooterData } from '@/types/templates.types';
import { FaEnvelope, FaPhoneAlt, FaAngleRight, FaFacebookF, FaLinkedinIn, FaInstagram, FaPinterestP } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const renderSocialIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaXTwitter': return <FaXTwitter className="w-4 h-4" />;
    case 'FaFacebookF': return <FaFacebookF className="w-4 h-4" />;
    case 'FaLinkedinIn': return <FaLinkedinIn className="w-4 h-4" />;
    case 'FaInstagram': return <FaInstagram className="w-4 h-4" />;
    case 'FaPinterestP': return <FaPinterestP className="w-4 h-4" />;
    default: return null;
  }
};

export const Footer = ({ data }: { data?: DigitalFooterData }) => {
  if (!data) return null;

  return (
    <footer className="bg-[#02181e] pt-12 pb-6 border-t border-gray-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-6 mb-10">
          
          {/* Column 1: Brand Info & Contact */}
          <div className="lg:col-span-3 lg:pr-6 lg:border-r border-gray-800/60 flex flex-col gap-5">
            
            {/* Logo area */}
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12">
                <Image 
                  src={data.logo} 
                  alt="Digitrive Logo" 
                  fill 
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-2xl tracking-wide uppercase leading-none mb-1">Digitrive</span>
                <span className="text-gray-400 text-xs">{data.tagline}</span>
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mt-2">
              {data.description.replace(/\\n/g, '\n').split('\n').map((line, i, arr) => (
                <React.Fragment key={i}>
                  {line}
                  {i < arr.length - 1 && <br />}
                </React.Fragment>
              ))}
            </p>

            {/* Contact Items */}
            <div className="flex flex-col gap-3 mt-1">
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full border border-[var(--color-primary)]/40 flex items-center justify-center flex-shrink-0 text-[var(--color-primary)] group-hover:bg-[var(--color-primary)] group-hover:text-black transition-colors duration-300">
                  <FaEnvelope className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[var(--color-primary)] text-xs font-semibold mb-1">{data.emailLabel}</span>
                  <a href={`mailto:${data.email}`} className="text-white text-sm hover:text-[var(--color-primary)] transition-colors">{data.email}</a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full border border-[var(--color-primary)]/40 flex items-center justify-center flex-shrink-0 text-[var(--color-primary)] group-hover:bg-[var(--color-primary)] group-hover:text-black transition-colors duration-300">
                  <FaPhoneAlt className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[var(--color-primary)] text-xs font-semibold mb-1">{data.phoneLabel}</span>
                  <a href={`tel:${data.phone.replace(/[^0-9+]/g, '')}`} className="text-white text-sm hover:text-[var(--color-primary)] transition-colors">{data.phone}</a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-2">
              <h4 className="text-[var(--color-primary)] text-sm font-semibold mb-3">{data.followUsText}</h4>
              <div className="flex items-center gap-3">
                {data.socialLinks.map((social) => (
                  <Link 
                    key={social.id}
                    href={social.url}
                    className="w-10 h-10 rounded-md border border-[var(--color-primary)]/30 flex items-center justify-center text-white hover:bg-[var(--color-primary)] hover:text-black hover:border-[var(--color-primary)] transition-all duration-300"
                  >
                    {renderSocialIcon(social.icon)}
                  </Link>
                ))}
              </div>
            </div>
            
          </div>

          {/* Columns 2, 3, 4: Links */}
          <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-0 lg:pl-10 pt-2">
            {data.columns.map((col, idx) => (
              <div 
                key={col.id} 
                className={`flex flex-col ${idx !== 2 ? 'lg:border-r border-gray-800/60 lg:pr-8 lg:mr-8' : ''}`}
              >
                <h3 className="text-white font-bold text-lg mb-2">{col.title}</h3>
                <div className="w-8 h-[2px] bg-[var(--color-primary)] mb-5"></div>
                <ul className="flex flex-col gap-3">
                  {col.links.map((link) => (
                    <li key={link.id}>
                      <Link 
                        href={link.url}
                        className="flex items-center gap-3 text-gray-400 hover:text-[var(--color-primary)] transition-colors duration-300 group text-sm"
                      >
                        <FaAngleRight className="text-[var(--color-primary)] w-3 h-3 group-hover:translate-x-1 transition-transform" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800/60 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p 
            className="text-gray-400 text-sm text-center md:text-left"
            dangerouslySetInnerHTML={{ __html: data.copyright.replace('Digitrive', '<span class="text-[var(--color-primary)] font-semibold">DIGITRIVE</span>') }}
          />
          <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-3 sm:gap-x-4">
            {data.bottomLinks.map((link, idx) => (
              <React.Fragment key={link.id}>
                <Link href={link.url} className="text-gray-400 text-xs sm:text-sm hover:text-[var(--color-primary)] transition-colors whitespace-nowrap">
                  {link.label}
                </Link>
                {idx < data.bottomLinks.length - 1 && (
                  <span className="text-gray-600 text-sm">|</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};
