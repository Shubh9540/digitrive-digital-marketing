import React from "react";
import Image from "next/image";
import { ProjectDetailData } from "@/types/templates.types";
import { FaCheck } from "react-icons/fa";

export const ProjectDetailContent = ({
  data,
}: {
  data?: ProjectDetailData;
}) => {
  if (!data) return null;

  return (
    <section className="bg-[var(--color-bg-main)] py-10 lg:py-200 lg:py-10 lg:py-2002 lg:py-10 lg:py-200 lg:py-10 lg:py-2002">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Banner */}
        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-3xl overflow-hidden">
          <Image
            src={data.heroImage}
            alt="Project Hero"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Main Content Padding */}
        <div className="py-10 lg:py-200 lg:py-10 lg:py-2002 lg:py-10 lg:py-200 lg:py-10 lg:py-2002">
          {/* Meta Bar */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-4 py-8 border-b border-gray-800/60 mb-12">
            <div className="flex flex-col">
              <span className="text-gray-400 text-sm mb-1">Clients</span>
              <span className="text-white font-bold text-lg md:text-xl">
                {data.meta.client}
              </span>
            </div>

            <div className="hidden md:block w-px h-12 bg-gray-800/60"></div>

            <div className="flex flex-col">
              <span className="text-gray-400 text-sm mb-1">Category</span>
              <span className="text-white font-bold text-lg md:text-xl">
                {data.meta.category}
              </span>
            </div>

            <div className="hidden md:block w-px h-12 bg-gray-800/60"></div>

            <div className="flex flex-col">
              <span className="text-gray-400 text-sm mb-1">Date</span>
              <span className="text-white font-bold text-lg md:text-xl">
                {data.meta.date}
              </span>
            </div>

            <div className="hidden md:block w-px h-12 bg-gray-800/60"></div>

            <div className="flex flex-col">
              <span className="text-gray-400 text-sm mb-1">Location</span>
              <span className="text-white font-bold text-lg md:text-xl">
                {data.meta.location}
              </span>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex flex-col gap-8 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              {data.overview.title}
            </h2>
            <p className="text-gray-400 leading-relaxed">
              {data.overview.text1}
            </p>
            <p className="text-gray-400 leading-relaxed">
              {data.overview.text2}
            </p>
          </div>

          {/* Double Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="relative h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden">
              <Image
                src={data.middleImages.image1}
                alt="Project detail 1"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden">
              <Image
                src={data.middleImages.image2}
                alt="Project detail 2"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Conclusion */}
          <div className="mb-16">
            <p className="text-gray-400 leading-relaxed">
              {data.conclusionText}
            </p>
          </div>

          {/* Facts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <h2 className="text-4xl md:text-4xl lg:text-5xl lg:text-[48px] font-medium text-white leading-[1.2] tracking-tight">
                {data.facts.title
                  .replace(" In ", "\nIn ")
                  .split("\n")
                  .map((line, i) => (
                    <span key={i} className="block whitespace-nowrap">
                      {line}
                    </span>
                  ))}
              </h2>
            </div>

            <div className="lg:col-span-7 flex flex-col gap-8">
              <p className="text-gray-400 leading-relaxed">{data.facts.text}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {data.facts.list.map((fact) => (
                  <div key={fact.id} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#c49250] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <FaCheck className="text-white w-2.5 h-2.5" />
                    </div>
                    <span className="text-gray-400 text-[15px]">
                      {fact.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
