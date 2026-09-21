"use client";

import React, { useState, useEffect, useRef } from "react";
import { DigitalCounterData } from "@/types/templates.types";
import { FaChartBar, FaUsers, FaChartLine, FaTrophy } from "react-icons/fa";

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case "FaChartBar":
      return <FaChartBar className="w-5 h-5" />;
    case "FaUsers":
      return <FaUsers className="w-5 h-5" />;
    case "FaChartLine":
      return <FaChartLine className="w-5 h-5" />;
    case "FaTrophy":
      return <FaTrophy className="w-5 h-5" />;
    default:
      return null;
  }
};

const AnimatedCounter = ({
  endValue,
  duration = 2000,
}: {
  endValue: number;
  duration?: number;
}) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 },
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) observer.unobserve(elementRef.current);
    };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Easing function (easeOutExpo)
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

      setCount(Math.floor(easeProgress * endValue));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(endValue);
      }
    };

    requestAnimationFrame(animate);
  }, [hasStarted, endValue, duration]);

  return <span ref={elementRef}>{count}</span>;
};

export const CounterSection = ({ data }: { data?: DigitalCounterData }) => {
  if (!data) return null;

  return (
    <section className="py-10 lg:py-200 lg:py-10 lg:py-2000 lg:py-10 lg:py-200 lg:py-10 lg:py-2006 bg-[#020914]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#05101f] border border-gray-800/60 rounded-2xl p-8 lg:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-gray-800/60">
            {data.counters.map((counter, index) => (
              <div
                key={counter.id}
                className={`flex items-center gap-5 ${index !== 0 ? "lg:pl-8" : ""}`}
              >
                {/* Icon matching the Services design: Single cyan border, dark background */}
                <div className="flex-shrink-0 w-14 h-14 rounded-full border border-[var(--color-primary)]/40 flex items-center justify-center hover:border-[var(--color-primary)] transition-colors duration-300">
                  <div className="w-11 h-11 rounded-full bg-gray-900/60 flex items-center justify-center text-[var(--color-primary)] shadow-[0_0_10px_rgba(0,194,199,0.15)]">
                    {renderIcon(counter.icon)}
                  </div>
                </div>

                <div className="flex flex-col">
                  <h3 className="text-3xl font-bold text-[var(--color-primary)] mb-1 flex items-center">
                    <AnimatedCounter endValue={counter.value} />
                    <span>{counter.suffix}</span>
                  </h3>
                  <h4 className="text-white text-sm font-semibold tracking-wide mb-1">
                    {counter.title}
                  </h4>
                  <p className="text-gray-400 text-xs">{counter.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
