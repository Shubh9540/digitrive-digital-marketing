"use client";
import React, { useState, useEffect, useCallback } from 'react';
import { DigitalTestimonialsData } from '@/types/templates.types';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight, FaStar, FaQuoteLeft } from 'react-icons/fa';
import useEmblaCarousel from 'embla-carousel-react';

export const Testimonials = ({ data }: { data?: DigitalTestimonialsData }) => {
  // Using Embla for a perfect infinite loop without partial peeking cards
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'start',
    // Setting slidesToScroll based on screen size could be done via options, 
    // but the simplest is just to align perfectly with the CSS flex basis.
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  if (!data || !data.testimonials || data.testimonials.length === 0) return null;

  return (
    <section className="bg-[#051024] py-12 lg:py-20 overflow-hidden relative">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          {data.subtitle && (
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="w-10 h-[1px] bg-gray-600"></span>
              <span className="w-2 h-2 rotate-45 bg-[#00e5ff]"></span>
              <p className="text-[#00e5ff] font-medium text-sm tracking-widest uppercase">
                {data.subtitle}
              </p>
              <span className="w-10 h-[1px] bg-gray-600"></span>
            </div>
          )}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            {data.titlePart1} <span className="text-[#00e5ff]">{data.titleHighlight}</span> {data.titlePart2}
          </h2>
          <div className="w-12 h-1 bg-[#00e5ff] mx-auto mt-4"></div>
        </div>

        {/* Slider Container */}
        <div className="relative flex items-center justify-center max-w-6xl mx-auto group">
          
          {/* Prev Button */}
          <button 
            onClick={scrollPrev}
            className="absolute left-0 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#00e5ff] flex items-center justify-center text-[#00e5ff] hover:bg-[#00e5ff] hover:text-[#051024] transition-colors bg-[#051024] hidden md:flex"
            aria-label="Previous Testimonial"
          >
            <FaChevronLeft />
          </button>

          {/* Embla Wrapper to hold padding so viewport is true width */}
          <div className="w-full px-0 md:px-16">
            <div className="overflow-hidden w-full" ref={emblaRef}>
              <div className="flex touch-pan-y" style={{ backfaceVisibility: 'hidden' }}>
                {data.testimonials.map((testimonial) => (
                  <div 
                    key={testimonial.id} 
                    className="flex-[0_0_100%] md:flex-[0_0_50%] min-w-0 px-2 lg:px-4"
                  >
                    <div className="bg-[#0a1930] rounded-xl p-6 lg:p-8 border border-gray-800 h-full flex flex-col xl:flex-row gap-6 items-start">
                      {/* Avatar */}
                      <div className="w-20 h-20 shrink-0 rounded-full overflow-hidden border-2 border-[#00e5ff]">
                        <Image 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          width={80}
                          height={80}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1">
                        {/* Stars */}
                        <div className="flex text-yellow-400 mb-3 text-sm">
                          {[...Array(testimonial.rating || 5)].map((_, i) => (
                            <FaStar key={i} />
                          ))}
                        </div>
                        
                        {/* Review */}
                        <p className="text-gray-300 text-sm leading-relaxed mb-4 relative z-10">
                          <span className="text-[#00e5ff] mr-2 inline-block"><FaQuoteLeft /></span>
                          {testimonial.reviewText}
                        </p>
                        
                        {/* Author Info */}
                        <div>
                          <h4 className="text-white font-semibold text-base">{testimonial.name}</h4>
                          <p className="text-[#00e5ff] text-sm">{testimonial.location}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Next Button */}
          <button 
            onClick={scrollNext}
            className="absolute right-0 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#00e5ff] flex items-center justify-center text-[#00e5ff] hover:bg-[#00e5ff] hover:text-[#051024] transition-colors bg-[#051024] hidden md:flex"
            aria-label="Next Testimonial"
          >
            <FaChevronRight />
          </button>

        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-8 gap-2">
          {scrollSnaps.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollTo(idx)}
              className={`w-3 h-3 rounded-full transition-all ${
                idx === selectedIndex ? 'bg-[#00e5ff] w-4' : 'bg-gray-600 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
