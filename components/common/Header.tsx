'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { HeaderData } from '@/types/templates.types';
import { FaChevronDown, FaBars, FaTimes } from 'react-icons/fa';
import { Button } from '@/components/ui/Button';

export const Header = ({ data }: { data?: HeaderData }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  if (!data) return null;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setOpenMobileDropdown(null);
  };
  
  const toggleDropdown = (id: string) => {
    setOpenMobileDropdown(prev => prev === id ? null : id);
  };

  return (
    <header className="w-full bg-[var(--color-bg-main)] border-b border-[var(--color-border)] sticky top-0 z-50">
      {/* Subtle glow effect at the bottom spanning full width */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--color-primary)]/50 to-transparent shadow-[0_0_15px_3px_rgba(0,194,199,0.3)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-center h-24">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-3">
              {data.image ? (
                <div className="relative h-16 w-60">
                  <Image 
                    src={data.image} 
                    alt={data.imageAlt || "Logo"} 
                    fill 
                    className="object-contain object-left"
                    priority
                  />
                </div>
              ) : (
                <span className="text-2xl font-bold text-white tracking-wide">DIGITRIVE</span>
              )}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {data.navLinks?.map((link) => {
              const isActive = pathname === link.url;
              return (
                <div key={link.id} className="relative group">
                  {link.subLinks && link.subLinks.length > 0 ? (
                    <div 
                      className={`flex items-center gap-1 cursor-pointer text-sm font-medium transition-colors hover:text-[var(--color-primary)] ${
                        isActive ? 'text-[var(--color-primary)]' : 'text-white'
                      }`}
                    >
                      {link.label}
                      <FaChevronDown className="w-3 h-3 ml-1 opacity-70" />
                    </div>
                  ) : (
                    <Link 
                      href={link.url || '#'} 
                      className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-[var(--color-primary)] ${
                        isActive ? 'text-[var(--color-primary)]' : 'text-white'
                      }`}
                    >
                      {link.label}
                    </Link>
                  )}
                  
                  {/* Underline for active state */}
                  {isActive && (
                    <div className="absolute -bottom-7 left-0 right-0 h-[2px] bg-[var(--color-primary)]"></div>
                  )}

                  {/* Dropdown Menu (Desktop) */}
                  {link.subLinks && link.subLinks.length > 0 && (
                    <div className="absolute left-0 top-full mt-2 w-48 bg-[#0d1620] border border-[var(--color-border)] rounded shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 transform origin-top-left group-hover:translate-y-2">
                      <div className="py-10 lg:py-20">
                        {link.subLinks.map((subLink) => (
                          subLink.url ? (
                            <Link 
                              key={subLink.id} 
                              href={subLink.url}
                              className="block px-4 py-10 lg:py-20 text-sm text-gray-300 hover:bg-[var(--color-primary)] hover:text-white transition-colors"
                            >
                              {subLink.label}
                            </Link>
                          ) : (
                            <span
                              key={subLink.id}
                              className="block px-4 py-10 lg:py-20 text-sm text-gray-500 cursor-default select-none"
                            >
                              {subLink.label}
                            </span>
                          )
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center">
            {data.contactButton && (
              <Button href={data.contactButton.url} variant="solid">
                {data.contactButton.text}
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={toggleMobileMenu}
              className="text-white hover:text-[var(--color-primary)] p-2 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#0d1620] border-t border-[var(--color-border)] px-4 pt-10 lg:pt-20 pb-6 shadow-2xl absolute top-24 left-0 right-0 max-h-[calc(100vh-6rem)] overflow-y-auto">
          <nav className="flex flex-col space-y-2">
            {data.navLinks?.map((link) => {
              const isActive = pathname === link.url;
              return (
                <div key={link.id} className="flex flex-col">
                  <div 
                    className="flex justify-between items-center py-3 border-b border-[var(--color-border)]/50 cursor-pointer"
                    onClick={() => link.subLinks && link.subLinks.length > 0 ? toggleDropdown(link.id) : null}
                  >
                    {link.subLinks && link.subLinks.length > 0 ? (
                      <span className={`text-base font-medium ${isActive ? 'text-[var(--color-primary)]' : 'text-white'}`}>
                        {link.label}
                      </span>
                    ) : (
                      <Link 
                        href={link.url || '#'}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`text-base font-medium ${isActive ? 'text-[var(--color-primary)]' : 'text-white'}`}
                      >
                        {link.label}
                      </Link>
                    )}
                    {link.subLinks && link.subLinks.length > 0 && (
                      <FaChevronDown className={`text-gray-400 w-3 h-3 transition-transform duration-300 ${openMobileDropdown === link.id ? 'rotate-180' : ''}`} />
                    )}
                  </div>
                  
                  {/* Sublinks Mobile */}
                  {link.subLinks && link.subLinks.length > 0 && openMobileDropdown === link.id && (
                    <div className="pl-4 py-10 lg:py-20 flex flex-col space-y-3 bg-[#080d14] rounded-b">
                      {link.subLinks.map((subLink) => (
                        subLink.url ? (
                          <Link 
                            key={subLink.id}
                            href={subLink.url}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-sm text-gray-400 hover:text-white"
                          >
                            {subLink.label}
                          </Link>
                        ) : (
                          <span
                            key={subLink.id}
                            className="text-sm text-gray-600 cursor-default select-none"
                          >
                            {subLink.label}
                          </span>
                        )
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
            
            {/* Mobile CTA */}
            {data.contactButton && (
              <div className="pt-6 pb-2">
                <Button 
                  href={data.contactButton.url} 
                  variant="solid" 
                  className="w-full"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {data.contactButton.text}
                </Button>
              </div>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};
