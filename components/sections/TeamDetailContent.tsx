import React from "react";
import Image from "next/image";
import { TeamDetailData } from "@/types/templates.types";
import {
  FaEnvelope,
  FaPhone,
  FaGlobe,
  FaUser,
  FaBirthdayCake,
  FaMapMarkerAlt,
} from "react-icons/fa";

export const TeamDetailContent = ({ data }: { data: TeamDetailData }) => {
  return (
    <div className="bg-[#020914] py-10 lg:py-200 lg:py-10 lg:py-2000 lg:py-10 lg:py-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section - Profile Card */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start mb-20">
          {/* Left - Image Card */}
          <div className="w-full lg:w-[400px] flex-shrink-0">
            <div className="relative w-full h-[450px] lg:h-[500px] rounded-2xl overflow-hidden border border-gray-700/50 bg-[#05101f]">
              <Image
                src={data.image}
                alt={data.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 400px"
              />
              {/* Experience Badge */}
              <div className="absolute top-8 right-0 bg-[var(--color-primary)] px-2 py-6 rounded-l-lg shadow-lg">
                <p
                  className="text-[#020914] text-xs font-bold tracking-[0.2em] whitespace-nowrap"
                  style={{
                    writingMode: "vertical-rl",
                    textOrientation: "mixed",
                  }}
                >
                  {data.experienceBadge}
                </p>
              </div>
            </div>
          </div>

          {/* Right - Details */}
          <div className="flex-1">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-2">
              {data.name}
            </h1>
            <h2 className="text-2xl lg:text-3xl font-medium text-[var(--color-primary)] mb-8 flex items-center gap-3">
              <span className="text-[var(--color-primary)]">/</span> {data.role}
            </h2>

            <p className="text-gray-400 leading-relaxed mb-10 pb-10 border-b border-gray-800/60">
              {data.description}
            </p>

            {/* Contact Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12">
              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-gray-700/50 flex items-center justify-center flex-shrink-0 bg-[#05101f]">
                  <FaEnvelope className="text-[var(--color-primary)] w-4 h-4" />
                </div>
                <div>
                  <p className="text-white text-sm font-semibold mb-1">Email</p>
                  <a
                    href={`mailto:${data.contact.email}`}
                    className="text-gray-400 text-sm hover:text-[var(--color-primary)] transition-colors"
                  >
                    {data.contact.email}
                  </a>
                </div>
              </div>

              {/* Blood Group */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-gray-700/50 flex items-center justify-center flex-shrink-0 bg-[#05101f]">
                  <FaUser className="text-[var(--color-primary)] w-4 h-4" />
                </div>
                <div>
                  <p className="text-white text-sm font-semibold mb-1">
                    Blood Group
                  </p>
                  <p className="text-gray-400 text-sm">
                    {data.contact.bloodGroup}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-gray-700/50 flex items-center justify-center flex-shrink-0 bg-[#05101f]">
                  <FaPhone className="text-[var(--color-primary)] w-4 h-4" />
                </div>
                <div>
                  <p className="text-white text-sm font-semibold mb-1">Phone</p>
                  <a
                    href={`tel:${data.contact.phone.replace(/\s+/g, "")}`}
                    className="text-gray-400 text-sm hover:text-[var(--color-primary)] transition-colors"
                  >
                    {data.contact.phone}
                  </a>
                </div>
              </div>

              {/* Age */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-gray-700/50 flex items-center justify-center flex-shrink-0 bg-[#05101f]">
                  <FaBirthdayCake className="text-[var(--color-primary)] w-4 h-4" />
                </div>
                <div>
                  <p className="text-white text-sm font-semibold mb-1">Age</p>
                  <p className="text-gray-400 text-sm">{data.contact.age}</p>
                </div>
              </div>

              {/* Website */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-gray-700/50 flex items-center justify-center flex-shrink-0 bg-[#05101f]">
                  <FaGlobe className="text-[var(--color-primary)] w-4 h-4" />
                </div>
                <div>
                  <p className="text-white text-sm font-semibold mb-1">
                    Website
                  </p>
                  <a
                    href={`https://${data.contact.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 text-sm hover:text-[var(--color-primary)] transition-colors"
                  >
                    {data.contact.website}
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-gray-700/50 flex items-center justify-center flex-shrink-0 bg-[#05101f]">
                  <FaMapMarkerAlt className="text-[var(--color-primary)] w-4 h-4" />
                </div>
                <div>
                  <p className="text-white text-sm font-semibold mb-1">
                    Address
                  </p>
                  <p className="text-gray-400 text-sm leading-tight">
                    {data.contact.address}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Biography Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-6">
            Short <span className="text-[var(--color-primary)]">Biography</span>
          </h3>
          <p className="text-gray-400 leading-relaxed text-sm">
            {data.biography.split("\n").map((line, i) => (
              <React.Fragment key={i}>
                {line}
                {i !== data.biography.split("\n").length - 1 && (
                  <>
                    <br />
                    <br />
                  </>
                )}
              </React.Fragment>
            ))}
          </p>
        </div>

        {/* Skills Section */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-6">
            Expertise{" "}
            <span className="text-[var(--color-primary)]">& Skills</span>
          </h3>
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            <div className="flex-1">
              <p className="text-gray-400 leading-relaxed text-sm">
                {data.skillDescription}
              </p>
            </div>

            {/* Progress Bars */}
            <div className="flex-1 w-full flex flex-col gap-8">
              {data.skills.map((skill) => (
                <div key={skill.id} className="w-full">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white text-sm font-semibold">
                      {skill.name}
                    </span>
                    <span className="text-[var(--color-primary)] text-xs font-bold">
                      {skill.percentage}
                    </span>
                  </div>
                  <div className="w-full h-1.5 bg-[#0d1a2e] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[var(--color-primary)] rounded-full transition-all duration-1000 ease-out"
                      style={{ width: skill.percentage }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
