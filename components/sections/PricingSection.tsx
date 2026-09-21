import React from "react";
import { PricingData } from "@/types/templates.types";
import {
  FaCheckCircle,
  FaCog,
  FaUsers,
  FaShieldAlt,
  FaHeadset,
  FaChartBar,
  FaPaperPlane,
  FaChartLine,
  FaCrown,
  FaBuilding,
  FaLocationArrow,
} from "react-icons/fa";
import Link from "next/link";

const renderIcon = (iconName: string, className?: string) => {
  const IconProps = { className: className || "w-6 h-6" };
  switch (iconName) {
    case "FaCog":
      return <FaCog {...IconProps} />;
    case "FaUsers":
      return <FaUsers {...IconProps} />;
    case "FaShieldAlt":
      return <FaShieldAlt {...IconProps} />;
    case "FaHeadset":
      return <FaHeadset {...IconProps} />;
    case "FaChartBar":
      return <FaChartBar {...IconProps} />;
    case "FaPaperPlane":
      return <FaPaperPlane {...IconProps} />;
    case "FaLocationArrow":
      return <FaLocationArrow {...IconProps} />;
    case "FaChartLine":
      return <FaChartLine {...IconProps} />;
    case "FaCrown":
      return <FaCrown {...IconProps} />;
    case "FaBuilding":
      return <FaBuilding {...IconProps} />;
    default:
      return null;
  }
};

export const PricingSection = ({ data }: { data?: PricingData }) => {
  if (!data) return null;

  return (
    <section className="bg-[#020914] py-10 lg:py-200 lg:py-10 lg:py-2000 lg:py-10 lg:py-200 lg:py-10 lg:py-2006">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-4 mb-4">
            <span className="w-10 h-[2px] bg-gray-700"></span>
            <span className="w-2 h-2 rotate-45 bg-[var(--color-primary)]"></span>
            <p className="text-[var(--color-primary)] font-semibold text-sm tracking-[0.2em] uppercase">
              {data.subtitle}
            </p>
            <span className="w-10 h-[2px] bg-gray-700"></span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            {data.titlePart1}{" "}
            <span className="text-[var(--color-primary)]">
              {data.titleHighlight}
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed whitespace-pre-line">
            {data.description}
          </p>
        </div>

        {/* Top Features Row */}
        <div className="flex flex-wrap justify-center gap-8 lg:gap-12 mb-16">
          {data.topFeatures.map((feature) => (
            <div key={feature.id} className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full border border-[var(--color-primary)]/30 flex items-center justify-center bg-[var(--color-primary)]/5">
                {renderIcon(
                  feature.icon,
                  "w-5 h-5 text-[var(--color-primary)]",
                )}
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-sm leading-snug">
                  {feature.title}
                </span>
                <span className="text-gray-400 text-xs">
                  {feature.subtitle}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 relative">
          {data.plans.map((plan, index) => {
            const isPopular = plan.isPopular;

            return (
              <div
                key={plan.id}
                className={`flex flex-col h-full rounded-2xl bg-[#05101f] transition-all duration-300 relative group
                  border border-gray-800/60 hover:-translate-y-2 hover:border-[var(--color-primary)] hover:shadow-[0_0_30px_rgba(0,229,255,0.15)] mt-0
                `}
              >
                {/* Popular Badge */}
                {isPopular && plan.popularBadgeText && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[var(--color-primary)] text-black font-bold text-xs px-4 py-10 lg:py-200 lg:py-10 lg:py-200.5 rounded-full uppercase tracking-wider z-10 whitespace-nowrap">
                    {plan.popularBadgeText}
                  </div>
                )}

                <div className="p-8 flex-1 flex flex-col items-center text-center">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-all duration-300
                    bg-[var(--color-primary)]/10 text-[var(--color-primary)] group-hover:shadow-[0_0_20px_var(--color-primary)] group-hover:bg-[var(--color-primary)]/20
                  `}
                  >
                    {renderIcon(plan.icon, "w-8 h-8")}
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-gray-400 mb-8 min-h-[40px] leading-relaxed">
                    {plan.description}
                  </p>

                  <div className="mb-8">
                    <span className="text-4xl font-bold transition-colors duration-300 text-[var(--color-primary)]">
                      {plan.price}
                    </span>
                    {plan.priceSuffix && (
                      <span className="text-gray-400 text-sm ml-1">
                        {plan.priceSuffix}
                      </span>
                    )}
                  </div>

                  <div className="w-full h-[1px] bg-gray-800/60 mb-8"></div>

                  <ul className="flex flex-col gap-4 w-full text-left mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature.id} className="flex items-start gap-3">
                        <FaCheckCircle className="w-4 h-4 mt-1 text-[var(--color-primary)] flex-shrink-0" />
                        <span className="text-sm text-gray-300 leading-snug">
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={plan.buttonUrl}
                    className={`w-full mt-auto py-4 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition-all duration-300
                      bg-transparent border border-gray-600 text-white hover:border-[var(--color-primary)] group-hover:bg-[var(--color-primary)] group-hover:text-black group-hover:border-[var(--color-primary)]
                    `}
                  >
                    {plan.buttonText}
                    <span className="text-lg">→</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
