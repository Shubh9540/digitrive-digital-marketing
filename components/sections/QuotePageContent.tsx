import React from "react";
import { DigitalQuoteData } from "@/types/templates.types";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaBullseye,
  FaChartBar,
  FaLightbulb,
  FaUser,
  FaRegEnvelope,
  FaPhone,
  FaGlobe,
  FaRegFileAlt,
  FaPaperPlane,
  FaLock,
  FaChevronDown,
} from "react-icons/fa";

const renderIcon = (iconName: string, className?: string) => {
  const props = {
    className: className || "w-6 h-6 text-[var(--color-primary)]",
  };
  switch (iconName) {
    case "FaPhoneAlt":
      return <FaPhoneAlt {...props} />;
    case "FaEnvelope":
      return <FaEnvelope {...props} />;
    case "FaMapMarkerAlt":
      return <FaMapMarkerAlt {...props} />;
    case "FaBullseye":
      return <FaBullseye {...props} />;
    case "FaChartBar":
      return <FaChartBar {...props} />;
    case "FaLightbulb":
      return <FaLightbulb {...props} />;
    default:
      return <FaBullseye {...props} />;
  }
};

export const QuotePageContent = ({ data }: { data?: DigitalQuoteData }) => {
  if (!data) return null;

  return (
    <section className="bg-[#020914] pt-10 lg:pt-206 lg:pt-10 lg:pt-204 pb-12 text-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
          {/* Left Column */}
          <div className="flex flex-col">
            <div className="flex items-center gap-4 mb-4">
              <span className="w-10 h-[2px] bg-[var(--color-primary)]"></span>
              <p className="text-[var(--color-primary)] font-semibold text-sm tracking-[0.2em] uppercase">
                {data.leftCol.subtitle}
              </p>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              {data.leftCol.titlePart1}
              <br className="hidden lg:block" />
              <span className="text-[var(--color-primary)]">
                {data.leftCol.titlePart2}
              </span>
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-lg">
              {data.leftCol.description}
            </p>

            <div className="flex flex-col gap-8 mb-12">
              {data.leftCol.features.map((feature) => (
                <div key={feature.id} className="flex gap-5">
                  <div className="w-14 h-14 rounded-full border border-[var(--color-primary)]/50 flex items-center justify-center flex-shrink-0 bg-[var(--color-primary)]/5">
                    {renderIcon(feature.icon)}
                  </div>
                  <div className="flex flex-col justify-center">
                    <h4 className="text-white font-bold text-lg mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                      {feature.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(0,229,255,0.1)]">
              <img
                src={data.leftCol.image}
                alt="Growth"
                className="w-full h-auto object-cover opacity-90"
              />
            </div>
          </div>

          {/* Right Column (Form Box) */}
          <div className="flex flex-col h-full lg:pl-10 mt-10 lg:mt-0">
            <div className="bg-[#05101f] border border-gray-800/60 rounded-3xl p-8 lg:p-10 shadow-2xl relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-primary)]/5 rounded-bl-full pointer-events-none filter blur-2xl"></div>

              <div className="flex items-center gap-4 mb-4">
                <span className="w-10 h-[2px] bg-[var(--color-primary)]"></span>
              </div>

              <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                {data.form.titlePart1}
                <span className="text-[var(--color-primary)]">
                  {data.form.titlePart2}
                </span>
              </h3>

              <p className="text-gray-400 text-sm mb-10 leading-relaxed max-w-sm">
                {data.form.description}
              </p>

              <form className="flex flex-col gap-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <FaUser className="text-gray-400 w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      placeholder={data.form.namePlaceholder}
                      className="w-full bg-[#030b17] border border-gray-800/80 rounded-xl py-4 pl-12 pr-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[var(--color-primary)] transition-colors"
                    />
                  </div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <FaRegEnvelope className="text-gray-400 w-4 h-4" />
                    </div>
                    <input
                      type="email"
                      placeholder={data.form.emailPlaceholder}
                      className="w-full bg-[#030b17] border border-gray-800/80 rounded-xl py-4 pl-12 pr-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[var(--color-primary)] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <FaPhone className="text-gray-400 w-4 h-4" />
                    </div>
                    <input
                      type="tel"
                      placeholder={data.form.phonePlaceholder}
                      className="w-full bg-[#030b17] border border-gray-800/80 rounded-xl py-4 pl-12 pr-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[var(--color-primary)] transition-colors"
                    />
                  </div>
                  <div className="relative">
                    <select
                      defaultValue=""
                      className="w-full bg-[#030b17] border border-gray-800/80 rounded-xl py-4 pl-4 pr-12 text-sm text-gray-400 appearance-none focus:outline-none focus:border-[var(--color-primary)] transition-colors"
                    >
                      <option value="" disabled>
                        {data.form.servicePlaceholder}
                      </option>
                      <option value="seo">SEO</option>
                      <option value="web">Web Development</option>
                      <option value="marketing">Digital Marketing</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                      <FaChevronDown className="text-gray-400 w-3 h-3" />
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <FaGlobe className="text-gray-400 w-4 h-4" />
                  </div>
                  <input
                    type="url"
                    placeholder={data.form.websitePlaceholder}
                    className="w-full bg-[#030b17] border border-gray-800/80 rounded-xl py-4 pl-12 pr-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[var(--color-primary)] transition-colors"
                  />
                </div>

                <div className="relative">
                  <div className="absolute top-4 left-0 pl-4 flex pointer-events-none">
                    <FaRegFileAlt className="text-gray-400 w-4 h-4" />
                  </div>
                  <textarea
                    placeholder={data.form.messagePlaceholder}
                    rows={4}
                    className="w-full bg-[#030b17] border border-gray-800/80 rounded-xl py-4 pl-12 pr-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[var(--color-primary)] transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[var(--color-primary)] text-black font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-3 hover:bg-white transition-colors mt-2"
                >
                  {data.form.submitText}
                  <FaPaperPlane className="w-4 h-4" />
                </button>

                <div className="flex items-center justify-center gap-2 mt-4 text-gray-400 text-xs font-medium">
                  <FaLock className="w-3 h-3 text-white" />
                  <span>{data.form.secureText}</span>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Contact Info */}
        <div className="w-full border-t border-gray-800/60 pt-10 lg:pt-200 mt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.contact.map((item, index) => (
              <div
                key={item.id}
                className={`flex items-center gap-5 ${index !== data.contact.length - 1 ? "md:border-r border-gray-800/60" : ""}`}
              >
                <div className="w-14 h-14 rounded-full border border-[var(--color-primary)]/50 flex items-center justify-center flex-shrink-0 bg-[#05101f]">
                  {renderIcon(item.icon, "w-6 h-6 text-[var(--color-primary)]")}
                </div>
                <div className="flex flex-col pr-4">
                  <span className="text-gray-400 text-xs font-medium mb-1">
                    {item.title}
                  </span>
                  <span className="text-white font-bold text-sm mb-1 whitespace-pre-line">
                    {item.text}
                  </span>
                  <span className="text-gray-500 text-xs">{item.subtext}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
