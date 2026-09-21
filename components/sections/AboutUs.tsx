import React from "react";
import Image from "next/image";
import { DigitalAboutUsData } from "@/types/templates.types";
import { Button } from "@/components/ui/Button";
import { FaLightbulb, FaRocket, FaPen, FaChartBar } from "react-icons/fa";

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case "FaLightbulb":
      return <FaLightbulb className="w-5 h-5" />;
    case "FaRocket":
      return <FaRocket className="w-5 h-5" />;
    case "FaPen":
      return <FaPen className="w-5 h-5" />;
    case "FaChartBar":
      return <FaChartBar className="w-5 h-5" />;
    default:
      return null;
  }
};

export const AboutUs = ({
  data,
  hideButton,
}: {
  data?: DigitalAboutUsData;
  hideButton?: boolean;
}) => {
  if (!data) return null;

  return (
    <section className="py-10 lg:py-200 lg:py-10 lg:py-2000 lg:py-10 lg:py-200 lg:py-10 lg:py-2006 bg-[var(--color-bg-main)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Image Side */}
          <div className="relative w-full h-[500px] lg:h-[700px] rounded-[40px] overflow-hidden shadow-2xl lg:col-span-5">
            <Image
              src={data.image}
              alt="About Us"
              fill
              className="object-cover"
            />
          </div>

          {/* Right Content Side */}
          <div className="flex flex-col justify-between h-full py-4 lg:py-6 lg:col-span-7">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-[var(--color-primary)]"></span>
                <p className="text-[var(--color-primary)] font-medium text-sm">
                  {data.subtitle}
                </p>
              </div>

              <h2 className="text-3xl lg:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                {data.titlePart1
                  .replace(/\\n/g, "\n")
                  .split("\n")
                  .map((line, i, arr) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < arr.length - 1 && <br />}
                    </React.Fragment>
                  ))}{" "}
                <span className="text-[var(--color-primary)]">
                  {data.titlePart2}
                </span>
              </h2>

              <p className="text-gray-400 text-base leading-relaxed mb-10">
                {data.description}
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 mb-10">
              {data.features.map((feature, index) => {
                // Determine border classes based on index to create clean internal grid lines
                const isTopLeft = index === 0;
                const isTopRight = index === 1;
                const isBottomLeft = index === 2;
                const isBottomRight = index === 3;

                // Mobile: stack layout with bottom borders.
                // sm (Tablet+): 2x2 grid with center cross borders.
                let borderClasses = "";
                if (isTopLeft)
                  borderClasses =
                    "border-b border-gray-800/60 py-6 sm:py-10 lg:py-200 lg:py-10 lg:py-200 sm:pb-8 sm:pr-6 sm:border-r";
                if (isTopRight)
                  borderClasses =
                    "border-b border-gray-800/60 py-6 sm:py-10 lg:py-200 lg:py-10 lg:py-200 sm:pb-8 sm:pl-6";
                if (isBottomLeft)
                  borderClasses =
                    "border-b border-gray-800/60 py-6 sm:py-10 lg:py-200 lg:py-10 lg:py-200 sm:border-b-0 sm:pt-8 sm:pr-6 sm:border-r";
                if (isBottomRight) borderClasses = "pt-6 sm:pt-8 sm:pl-6";

                return (
                  <div
                    key={feature.id}
                    className={`flex items-start gap-5 ${borderClasses}`}
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl border border-[var(--color-primary)]/30 bg-gray-900/50 flex items-center justify-center text-[var(--color-primary)]">
                      {renderIcon(feature.icon)}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-base mb-1.5">
                        {feature.title}
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {!hideButton && (
              <div>
                <Button href={data.buttonUrl} variant="solid">
                  {data.buttonText}
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
