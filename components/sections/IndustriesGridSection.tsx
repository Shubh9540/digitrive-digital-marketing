import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IndustriesGridData } from "@/types/templates.types";

import { 
  FaArrowRight, FaUsers, FaChartBar, FaStar, FaShoppingCart, FaHeartbeat, 
  FaBuilding, FaGraduationCap, FaPlane, FaUtensils, FaTshirt, FaMoneyBillWave, 
  FaLaptopCode, FaIndustry, FaLeaf, FaCar, FaUsersCog, FaPlayCircle, FaHeart, FaBalanceScale 
} from "react-icons/fa";

const renderIcon = (iconName: string, customClass?: string) => {
  const cls = customClass || "w-5 h-5";

  switch (iconName) {
    case "FaShoppingCart": return <FaShoppingCart className={cls} />;
    case "FaHeartbeat": return <FaHeartbeat className={cls} />;
    case "FaBuilding": return <FaBuilding className={cls} />;
    case "FaGraduationCap": return <FaGraduationCap className={cls} />;
    case "FaPlane": return <FaPlane className={cls} />;
    case "FaUtensils": return <FaUtensils className={cls} />;
    case "FaTshirt": return <FaTshirt className={cls} />;
    case "FaMoneyBillWave": return <FaMoneyBillWave className={cls} />;
    case "FaLaptopCode": return <FaLaptopCode className={cls} />;
    case "FaIndustry": return <FaIndustry className={cls} />;
    case "FaLeaf": return <FaLeaf className={cls} />;
    case "FaCar": return <FaCar className={cls} />;
    case "FaUsersCog": return <FaUsersCog className={cls} />;
    case "FaPlayCircle": return <FaPlayCircle className={cls} />;
    case "FaHeart": return <FaHeart className={cls} />;
    case "FaBalanceScale": return <FaBalanceScale className={cls} />;
    case "FaUsers": return <FaUsers className={customClass || "w-8 h-8"} />;
    case "FaChartBar": return <FaChartBar className={customClass || "w-8 h-8"} />;
    case "FaStar": return <FaStar className={customClass || "w-8 h-8"} />;
    default: return <FaStar className={cls} />;
  }
};

export const IndustriesGridSection = ({
  data,
}: {
  data?: IndustriesGridData;
}) => {
  if (!data) return null;

  return (
    <section className="relative overflow-hidden bg-[#02131b] py-12 sm:py-16 lg:py-[72px]">
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-[-200px] h-[500px] w-[500px] rounded-full bg-cyan-500/[0.025] blur-[120px]" />

        <div className="absolute right-[-150px] bottom-[-200px] h-[500px] w-[500px] rounded-full bg-cyan-500/[0.025] blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
        {/* =====================================================
            HERO / TOP CONTENT
        ====================================================== */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.65fr_1fr] lg:items-center lg:gap-10">
          {/* ================= LEFT ================= */}
          <div className="max-w-[760px]">
            {/* Eyebrow */}
            <div className="mb-5 flex items-center gap-3 sm:mb-6">
              <p className="text-[11px] font-bold uppercase tracking-[0.20em] text-[#00d9ff] sm:text-xs sm:tracking-[0.22em]">
                {data.subtitle}
              </p>

              <span className="h-[2px] w-14 bg-[#00d9ff] sm:w-[72px]" />
            </div>

            {/* Main Heading */}
            <h2 className="max-w-[720px] text-[42px] font-extrabold leading-[0.98] tracking-[-0.035em] text-white sm:text-[52px] lg:text-[57px] xl:text-[60px]">
              {data.titlePart1}
              <br />
              {data.titlePart2}{" "}
              <span className="text-[#00d9ff]">{data.titleHighlight}</span>
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-[720px] text-[15px] font-normal leading-[1.65] text-[#d1d9dc] sm:text-[16px] lg:text-[17px]">
              {data.description}
            </p>
          </div>

          {/* ================= RIGHT ================= */}
          <div className="flex flex-col items-center justify-center lg:pl-4">
            {/* Stats */}
            <div className="grid grid-cols-3 items-start">
              {data.stats.map((stat, index) => (
                <div
                  key={stat.id}
                  className={`relative flex min-w-0 flex-col items-start px-4 first:pl-0 last:pr-0 sm:px-6 lg:px-7 ${index !== 0 ? "border-l border-[#176170]/70" : ""}`}
                >
                  {/* Icon */}
                  <div className="mb-2 flex h-8 items-center text-[#00d9ff] sm:h-9">
                    {renderIcon(stat.icon, "w-7 h-7 sm:w-8 sm:h-8")}
                  </div>

                  {/* Number */}
                  <h3 className="text-[27px] font-bold leading-none tracking-tight text-[#00d9ff] sm:text-[31px] lg:text-[32px]">
                    {stat.value}
                  </h3>

                  {/* Label */}
                  <p className="mt-2 max-w-[105px] text-[12px] leading-[1.4] text-[#d5dde0] sm:text-[13px]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* =====================================================
            INDUSTRIES GRID
        ====================================================== */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {data.industries.map((ind) => (
            <div
              key={ind.id}
              className="group flex flex-col overflow-hidden rounded-xl border border-[#15303a] bg-[#061923] transition-all duration-300 hover:-translate-y-1 hover:border-[#00d9ff]/50 hover:shadow-[0_15px_45px_rgba(0,217,255,0.08)]"
            >
              {/* Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={ind.image}
                  alt={ind.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/45 transition-colors duration-300 group-hover:bg-black/25" />

                {/* Icon */}
                <div className="absolute bottom-[-22px] left-6 z-10 flex h-12 w-12 items-center justify-center rounded-full border-4 border-[#061923] bg-[#00d9ff] text-[#02131b] shadow-lg">
                  {renderIcon(ind.icon)}
                </div>
              </div>

              {/* Card content */}
              <div className="flex flex-1 flex-col p-6 pt-9">
                <h3 className="mb-3 text-xl font-bold text-white transition-colors group-hover:text-[#00d9ff]">
                  {ind.title}
                </h3>

                <p className="mb-6 flex-grow text-sm leading-relaxed text-gray-400">
                  {ind.description}
                </p>

                <Link
                  href={ind.url}
                  className="flex w-fit items-center gap-2 text-sm font-semibold text-[#00d9ff] transition-colors hover:text-white"
                >
                  {ind.linkText}

                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#00d9ff] text-[#00d9ff] transition-all duration-300 group-hover:bg-[#00d9ff] group-hover:text-[#02131b]">
                    <FaArrowRight className="h-3 w-3" />
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
