import React from "react";
import Image from "next/image";
import Link from "next/link";
import { DigitalServicesData } from "@/types/templates.types";
import {
  FaBezierCurve,
  FaPenNib,
  FaChessKnight,
  FaCode,
  FaMobileAlt,
  FaSearch,
  FaBullhorn,
  FaArrowRight,
} from "react-icons/fa";

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case "FaBezierCurve":
      return <FaBezierCurve className="w-5 h-5" />;
    case "FaPenNib":
      return <FaPenNib className="w-5 h-5" />;
    case "FaChessKnight":
      return <FaChessKnight className="w-5 h-5" />;
    case "FaCode":
      return <FaCode className="w-5 h-5" />;
    case "FaMobileAlt":
      return <FaMobileAlt className="w-5 h-5" />;
    case "FaSearch":
      return <FaSearch className="w-5 h-5" />;
    case "FaBullhorn":
      return <FaBullhorn className="w-5 h-5" />;
    default:
      return null;
  }
};

export const Services = ({ data }: { data?: DigitalServicesData }) => {
  if (!data) return null;

  return (
    <section className="py-10 lg:py-200 lg:py-10 lg:py-2000 lg:py-10 lg:py-200 lg:py-10 lg:py-2006 bg-[#020914]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Content: Text on Left, Image on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-8 lg:mb-10">
          {/* Left Text */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[var(--color-primary)]"></span>
              <p className="text-[var(--color-primary)] font-medium text-sm tracking-wider uppercase">
                {data.subtitle}
              </p>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
              {(data.titlePart1 || "")
                .replace(/\\n/g, "\n")
                .split("\n")
                .map((line, i, arr) => (
                  <React.Fragment key={i}>
                    {line}
                    {i < arr.length - 1 && <br />}
                  </React.Fragment>
                ))}
              <span className="text-[var(--color-primary)]">
                {data.titlePart2}
              </span>{" "}
              Services
            </h2>

            <p className="text-gray-400 text-base leading-relaxed mb-6">
              {data.description
                .replace(/\\n/g, "\n")
                .split("\n")
                .map((line, i, arr) => (
                  <React.Fragment key={i}>
                    {line}
                    {i < arr.length - 1 && <br />}
                  </React.Fragment>
                ))}
            </p>
            <span className="w-16 h-[2px] bg-[var(--color-primary)]"></span>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-6 relative w-full h-[250px] sm:h-[300px] lg:h-[350px] flex justify-end items-center">
            <div className="relative w-full h-full">
              <Image
                src={data.image}
                alt="Our Services"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Bottom Content: Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.services.map((service) => (
            <div
              key={service.id}
              className="bg-[#05101f] border border-gray-800/60 hover:border-[var(--color-primary)]/50 transition-all duration-300 rounded-2xl p-8 flex flex-col group"
            >
              <div className="flex items-start gap-6 mb-6">
                {/* Icon Container matching reference: single outer ring hugging the inner circle */}
                <div className="flex-shrink-0 w-14 h-14 rounded-full border border-[var(--color-primary)]/40 flex items-center justify-center group-hover:scale-110 group-hover:border-[var(--color-primary)] transition-all duration-300">
                  <div className="w-11 h-11 rounded-full bg-gray-900/60 flex items-center justify-center text-[var(--color-primary)] shadow-[0_0_10px_rgba(0,194,199,0.15)]">
                    {renderIcon(service.icon)}
                  </div>
                </div>

                <div>
                  <h3 className="text-white font-bold text-xl mb-1 group-hover:text-[var(--color-primary)] transition-colors duration-300">
                    <span className="text-gray-500 font-normal mr-2">
                      {service.number}
                    </span>
                    {service.title}
                  </h3>
                </div>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                {service.description}
              </p>

              <Link
                href={service.linkUrl}
                className="inline-flex items-center gap-2 text-[var(--color-primary)] text-sm font-medium hover:text-white transition-colors duration-300"
              >
                {service.linkText}
                <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
