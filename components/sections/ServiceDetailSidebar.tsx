"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaPhoneAlt, FaFileDownload, FaChevronRight } from "react-icons/fa";

export const ServiceDetailSidebar = ({ data }: { data: any["sidebar"] }) => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-8">
      {/* Services List */}
      <div className="bg-[#08152c] rounded-xl overflow-hidden p-6 shadow-xl border border-[#102a4c]">
        <div className="flex flex-col gap-2">
          {data.services.map((service: any) => {
            const isActive = pathname === service.url;
            return (
              <Link
                key={service.id}
                href={service.url}
                className={`flex items-center justify-between p-4 rounded-lg transition-all duration-300 font-medium ${
                  isActive
                    ? "bg-gradient-to-r from-[#00e5ff]/20 to-[#00e5ff]/5 border border-[#00e5ff]/30 text-white"
                    : "bg-transparent text-gray-300 hover:bg-[#0c1f40] hover:text-white"
                }`}
              >
                <span>{service.title}</span>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                    isActive
                      ? "bg-[#00e5ff] text-[#051024]"
                      : "bg-[#102a4c] text-white group-hover:bg-[#c49250]"
                  }`}
                >
                  <FaChevronRight className="w-3 h-3" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Brochure Widget */}
      <div className="bg-[#0c1f40] rounded-xl overflow-hidden p-6 border border-[#1a3861] hover:bg-[#102a4c] transition-colors group cursor-pointer shadow-xl">
        <Link href="#" className="flex items-center justify-center gap-6">
          <FaFileDownload className="w-6 h-6 text-white" />
          <div className="text-left">
            <h4 className="text-white font-bold text-lg leading-tight">
              Download
              <br />
              Brochure
            </h4>
          </div>
        </Link>
      </div>

      {/* Contact Widget */}
      <div
        className="relative rounded-xl overflow-hidden shadow-xl"
        style={{ minHeight: "320px" }}
      >
        {/* Background gradient/image simulation */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#051024] to-[#081b3b] z-0"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#00e5ff] rounded-full blur-[100px] opacity-20 z-0"></div>

        <div className="relative z-10 p-8 flex flex-col items-center text-center h-full justify-between gap-6">
          <h3 className="text-2xl font-bold text-white leading-tight">
            {data.contact.title}
          </h3>

          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-[#0c1f40] flex items-center justify-center border border-[#1a3861]">
              <FaPhoneAlt className="w-6 h-6 text-[#00e5ff]" />
            </div>
            <div>
              <p className="text-[#00e5ff] text-sm font-medium mb-1">
                Phone Number
              </p>
              <p className="text-xl md:text-2xl font-bold text-white">
                {data.contact.phone}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
