import React from "react";
import Link from "next/link";

interface LogoProps {
  scrolled?: boolean;
  variant?: "dark" | "light" | "auto";
  className?: string;
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  scrolled = false,
  variant = "auto",
  className = "",
  showText = true,
}) => {
  // Determine effective theme: if variant is auto, rely on scrolled status
  const isLightMode = variant === "light" || (variant === "auto" && scrolled);

  return (
    <Link href="/" className={`group flex items-center space-x-3.5 ${className}`}>
      {/* SVG Graphic Emblem */}
      <div className="relative flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 transition-transform duration-300 group-hover:scale-105">
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-md"
        >
          <defs>
            {/* Metallic & Planet Gradients */}
            <linearGradient id="planetGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="50%" stopColor="#1D4ED8" />
              <stop offset="100%" stopColor="#0F172A" />
            </linearGradient>

            <linearGradient id="metalGrad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#94A3B8" />
              <stop offset="50%" stopColor="#CBD5E1" />
              <stop offset="100%" stopColor="#F8FAFC" />
            </linearGradient>

            <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#60A5FA" />
              <stop offset="100%" stopColor="#38BDF8" />
            </linearGradient>

            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Background Outer Orbital Ring */}
          <ellipse
            cx="50"
            cy="50"
            rx="42"
            ry="18"
            transform="rotate(-28 50 50)"
            stroke={isLightMode ? "#2563EB" : "#60A5FA"}
            strokeWidth="3.5"
            strokeDasharray="180"
            strokeDashoffset="20"
            opacity="0.85"
            className="transition-all duration-500"
          />

          {/* Central Planet / Metal Globe Base */}
          <circle
            cx="50"
            cy="50"
            r="24"
            fill="url(#planetGrad)"
            stroke={isLightMode ? "#1E293B" : "#E2E8F0"}
            strokeWidth="1.5"
          />

          {/* Metallic Crystalline Facets representing Metals */}
          <path
            d="M50 26 L68 40 L68 60 L50 74 L32 60 L32 40 Z"
            fill="none"
            stroke="url(#metalGrad)"
            strokeWidth="2"
            opacity="0.8"
          />
          <path
            d="M50 26 L50 74 M32 40 L68 60 M32 60 L68 40"
            stroke="url(#metalGrad)"
            strokeWidth="1"
            opacity="0.5"
          />

          {/* Orbital Satellite Node */}
          <circle
            cx="80"
            cy="32"
            r="4.5"
            fill="url(#accentGrad)"
            filter="url(#glow)"
            className="animate-pulse"
          />

          {/* Inner Core Accent */}
          <circle cx="50" cy="50" r="6" fill="#60A5FA" opacity="0.9" />
          <circle cx="50" cy="50" r="2.5" fill="#FFFFFF" />
        </svg>
      </div>

      {/* Brand Text */}
      {showText && (
        <div className="flex flex-col justify-center">
          <span
            className={`font-black tracking-[0.18em] text-lg sm:text-xl uppercase transition-colors font-sans leading-tight ${
              isLightMode
                ? "text-slate-900 group-hover:text-blue-600"
                : "text-white group-hover:text-blue-400"
            }`}
          >
            PLANET LABS
          </span>
          <span
            className={`font-extrabold tracking-[0.34em] text-xs sm:text-sm uppercase transition-colors font-mono -mt-0.5 ${
              isLightMode
                ? "text-blue-600 group-hover:text-blue-700"
                : "text-cyan-400 group-hover:text-cyan-300"
            }`}
          >
            AND METALS
          </span>
        </div>
      )}
    </Link>
  );
};
