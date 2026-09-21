import React from "react";
import Link from "next/link";
import {
  FaPhoneAlt,
  FaRegFilePdf,
  FaChevronRight,
  FaShoppingCart,
} from "react-icons/fa";
import { IndustryDetailData } from "@/types/templates.types";

export const IndustryDetailSidebar = ({
  data,
  currentId,
}: {
  data: IndustryDetailData["sidebar"];
  currentId: string;
}) => {
  return (
    <div className="flex flex-col gap-8 w-full">
      {/* Industries Links */}
      <div className="flex flex-col gap-2">
        {data.industriesLinks.map((link) => {
          const isActive = link.id === currentId;
          return (
            <Link
              key={link.id}
              href={link.url}
              className={`flex items-center justify-between p-4 rounded-lg border transition-all duration-300 ${
                isActive
                  ? "bg-[var(--color-primary)] border-[var(--color-primary)] text-black font-bold"
                  : "bg-[#05101f] border-gray-800/60 text-gray-300 hover:border-[var(--color-primary)]/40 hover:text-white"
              }`}
            >
              <span>{link.label}</span>
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center ${isActive ? "bg-black/10" : "bg-gray-800"}`}
              >
                <FaChevronRight
                  className={`w-3 h-3 ${isActive ? "text-black" : "text-[var(--color-primary)]"}`}
                />
              </div>
            </Link>
          );
        })}
      </div>

      {/* Contact Card */}
      <div className="bg-[#051024] rounded-2xl p-8 border border-gray-800/60 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-primary)]/5 rounded-bl-full -z-10 transition-transform duration-500 group-hover:scale-110"></div>

        <p className="text-[var(--color-primary)] text-xs font-bold tracking-widest uppercase mb-4">
          LET'S TALK
        </p>

        <h3 className="text-3xl font-bold text-white mb-8 leading-tight">
          {data.contactCard.titlePart1}{" "}
          <span className="text-[var(--color-primary)]">
            {data.contactCard.titleHighlight}
          </span>{" "}
          {data.contactCard.titlePart2}
        </h3>

        <div className="flex flex-col items-center text-center gap-4 mb-8">
          <div className="w-16 h-16 rounded-full bg-[var(--color-primary)] flex items-center justify-center shadow-[0_0_20px_rgba(0,229,255,0.3)]">
            <FaPhoneAlt className="w-6 h-6 text-black" />
          </div>
          <div>
            <p className="text-gray-400 text-sm mb-1">
              {data.contactCard.subtitle}
            </p>
            <p className="text-white font-bold text-xl">
              {data.contactCard.phone}
            </p>
          </div>
        </div>

        <Link
          href={data.contactCard.pdfUrl}
          className="w-full py-4 bg-[var(--color-primary)] text-black font-bold rounded-lg flex items-center justify-center gap-2 hover:bg-white transition-colors"
        >
          <FaRegFilePdf className="w-5 h-5" />
          {data.contactCard.pdfButtonText}
        </Link>
      </div>

      {/* Promo Card */}
      <div className="bg-gradient-to-br from-[#051024] to-[#020914] rounded-2xl p-8 border border-gray-800/60 relative overflow-hidden">
        {/* Subtle decorative elements */}
        <div className="absolute -right-10 -bottom-10 w-40 h-40 border-[30px] border-[var(--color-primary)]/5 rounded-full"></div>
        <FaShoppingCart className="absolute top-8 right-8 w-12 h-12 text-[var(--color-primary)]/10" />

        <h3 className="text-3xl font-bold text-white mb-2 leading-tight relative z-10">
          {data.promoCard.titlePart1} <br />
          {data.promoCard.titlePart2}
        </h3>

        <div className="w-12 h-[2px] bg-[var(--color-primary)] my-6"></div>

        <p className="text-gray-400 text-sm leading-relaxed relative z-10">
          {data.promoCard.subtitle}
        </p>
      </div>
    </div>
  );
};
