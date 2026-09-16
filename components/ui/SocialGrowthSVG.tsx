'use client';
import React from 'react';

export const SocialGrowthSVG = () => {
  return (
    <div className="relative w-full h-52 flex items-center justify-center">
      <svg
        viewBox="0 0 340 220"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          {/* Glow filter */}
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Gradients */}
          <radialGradient id="bgGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00c2c7" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#020914" stopOpacity="0" />
          </radialGradient>

          {/* Instagram gradient */}
          <linearGradient id="igGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f09433" />
            <stop offset="25%" stopColor="#e6683c" />
            <stop offset="50%" stopColor="#dc2743" />
            <stop offset="75%" stopColor="#cc2366" />
            <stop offset="100%" stopColor="#bc1888" />
          </linearGradient>

          {/* CSS Animations as style tag */}
          <style>{`
            @keyframes orbit1 {
              0%   { transform: translate(0px, 0px); }
              25%  { transform: translate(4px, -5px); }
              50%  { transform: translate(0px, -8px); }
              75%  { transform: translate(-4px, -5px); }
              100% { transform: translate(0px, 0px); }
            }
            @keyframes orbit2 {
              0%   { transform: translate(0px, 0px); }
              25%  { transform: translate(-5px, 4px); }
              50%  { transform: translate(0px, 8px); }
              75%  { transform: translate(5px, 4px); }
              100% { transform: translate(0px, 0px); }
            }
            @keyframes orbit3 {
              0%   { transform: translate(0px, 0px) rotate(0deg); }
              50%  { transform: translate(0px, -6px) rotate(5deg); }
              100% { transform: translate(0px, 0px) rotate(0deg); }
            }
            @keyframes phonePulse {
              0%   { opacity: 0.85; }
              50%  { opacity: 1; }
              100% { opacity: 0.85; }
            }
            @keyframes ringPulse {
              0%   { opacity: 0.3; transform: scale(1); }
              50%  { opacity: 0.6; transform: scale(1.04); }
              100% { opacity: 0.3; transform: scale(1); }
            }
            @keyframes textFloat {
              0%   { transform: translateY(0px); }
              50%  { transform: translateY(-4px); }
              100% { transform: translateY(0px); }
            }
            .icon-f  { animation: orbit1 3.5s ease-in-out infinite; }
            .icon-ig { animation: orbit2 4s ease-in-out infinite; transform-origin: 52px 60px; }
            .icon-li { animation: orbit1 4.5s ease-in-out infinite 0.5s; }
            .icon-yt { animation: orbit2 3.8s ease-in-out infinite 1s; }
            .icon-tk { animation: orbit3 5s ease-in-out infinite; }
            .icon-pi { animation: orbit1 4.2s ease-in-out infinite 1.5s; }
            .phone   { animation: phonePulse 3s ease-in-out infinite; }
            .ring1   { animation: ringPulse 3s ease-in-out infinite; transform-origin: 170px 110px; }
            .ring2   { animation: ringPulse 3s ease-in-out infinite 0.5s; transform-origin: 170px 110px; }
            .float-txt { animation: textFloat 4s ease-in-out infinite; }
          `}</style>
        </defs>

        {/* Background glow */}
        <ellipse cx="170" cy="110" rx="130" ry="90" fill="url(#bgGlow)" />

        {/* Orbit rings */}
        <ellipse cx="170" cy="110" rx="100" ry="68" fill="none" stroke="#00c2c7" strokeWidth="0.5" strokeDasharray="4 6" opacity="0.25" className="ring1" />
        <ellipse cx="170" cy="110" rx="130" ry="88" fill="none" stroke="#00c2c7" strokeWidth="0.5" strokeDasharray="3 8" opacity="0.15" className="ring2" />

        {/* PHONE mockup */}
        <g className="phone">
          <rect x="148" y="45" width="44" height="78" rx="7" fill="#0d1a2e" stroke="#00c2c7" strokeWidth="1.5" />
          <rect x="152" y="52" width="36" height="62" rx="3" fill="#071424" />
          {/* Status bar */}
          <rect x="158" y="55" width="20" height="2" rx="1" fill="#00c2c7" opacity="0.5" />
          {/* Screen lines */}
          <rect x="154" y="61" width="32" height="2" rx="1" fill="#1a3050" />
          <rect x="154" y="66" width="24" height="2" rx="1" fill="#1a3050" />
          <rect x="154" y="71" width="28" height="2" rx="1" fill="#1a3050" />
          <rect x="154" y="76" width="20" height="2" rx="1" fill="#1a3050" />
          {/* Chart bars on screen */}
          <rect x="156" y="92" width="5" height="14" rx="1" fill="#00c2c7" opacity="0.7" />
          <rect x="163" y="86" width="5" height="20" rx="1" fill="#00c2c7" opacity="0.9" />
          <rect x="170" y="89" width="5" height="17" rx="1" fill="#00c2c7" opacity="0.7" />
          <rect x="177" y="82" width="5" height="24" rx="1" fill="#00c2c7" />
          {/* Home button */}
          <circle cx="170" cy="118" r="3" fill="none" stroke="#00c2c7" strokeWidth="1" opacity="0.5" />
        </g>

        {/* FACEBOOK — top center */}
        <g className="icon-f" style={{ transformOrigin: '170px 22px' }}>
          <circle cx="170" cy="22" r="18" fill="#1877F2" filter="url(#glow)" />
          <text x="170" y="28" textAnchor="middle" fontSize="16" fontWeight="bold" fill="white" fontFamily="Arial">f</text>
        </g>

        {/* INSTAGRAM — top left */}
        <g className="icon-ig">
          <circle cx="52" cy="60" r="18" fill="url(#igGrad)" filter="url(#glow)" />
          <rect x="44" y="52" width="16" height="16" rx="5" fill="none" stroke="white" strokeWidth="1.5" />
          <circle cx="52" cy="60" r="4" fill="none" stroke="white" strokeWidth="1.5" />
          <circle cx="57.5" cy="54.5" r="1.2" fill="white" />
        </g>

        {/* LINKEDIN — top right */}
        <g className="icon-li" style={{ transformOrigin: '288px 60px' }}>
          <circle cx="288" cy="60" r="18" fill="#0A66C2" filter="url(#glow)" />
          <text x="281" y="63" fontSize="8" fontWeight="bold" fill="white" fontFamily="Arial">in</text>
        </g>

        {/* PINTEREST — left */}
        <g className="icon-pi" style={{ transformOrigin: '32px 115px' }}>
          <circle cx="32" cy="115" r="16" fill="#E60023" filter="url(#glow)" />
          <text x="32" y="121" textAnchor="middle" fontSize="16" fontWeight="bold" fill="white" fontFamily="Arial">P</text>
        </g>

        {/* TIKTOK — bottom left */}
        <g className="icon-tk" style={{ transformOrigin: '68px 178px' }}>
          <circle cx="68" cy="178" r="17" fill="#010101" stroke="#00f2ea" strokeWidth="1.5" filter="url(#glow)" />
          <text x="68" y="184" textAnchor="middle" fontSize="13" fontWeight="bold" fill="white" fontFamily="Arial">TT</text>
        </g>

        {/* YOUTUBE — bottom right */}
        <g className="icon-yt" style={{ transformOrigin: '278px 172px' }}>
          <circle cx="278" cy="172" r="17" fill="#FF0000" filter="url(#glow)" />
          <polygon points="272,165 272,179 285,172" fill="white" />
        </g>

        {/* "Social Growth" curved text label */}
        <g className="float-txt">
          <rect x="215" y="28" width="105" height="28" rx="14" fill="#0d1a2e" stroke="#00c2c7" strokeWidth="1" opacity="0.9" />
          <text x="268" y="47" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#00c2c7" fontFamily="Arial">Social Growth</text>
          {/* Arrow */}
          <line x1="215" y1="42" x2="200" y2="55" stroke="#00c2c7" strokeWidth="1" strokeDasharray="2 2" opacity="0.5" />
        </g>

      </svg>
    </div>
  );
};
