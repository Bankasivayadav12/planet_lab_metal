"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Orbit } from "lucide-react";
import { useContent } from "@/context/ContentContext";

export const Hero = () => {
  const { openInquiryModal } = useContent();

  return (
    <section className="relative min-h-[92vh] text-white flex items-center justify-center pt-28 pb-20 px-6 sm:px-12 overflow-hidden bg-[#02040a]">
      {/* Animated Star Particles Layer */}
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
        <div className="absolute top-[15%] left-[20%] w-1.5 h-1.5 bg-white rounded-full animate-twinkle-1 shadow-[0_0_10px_#fff]" />
        <div className="absolute top-[35%] left-[70%] w-2 h-2 bg-cyan-300 rounded-full animate-twinkle-2 shadow-[0_0_12px_#38bdf8]" />
        <div className="absolute top-[60%] left-[30%] w-1.5 h-1.5 bg-blue-300 rounded-full animate-twinkle-3 shadow-[0_0_8px_#60a5fa]" />
        <div className="absolute top-[25%] left-[85%] w-2 h-2 bg-amber-200 rounded-full animate-twinkle-1 shadow-[0_0_10px_#fde047]" />
        <div className="absolute top-[75%] left-[65%] w-1.5 h-1.5 bg-white rounded-full animate-twinkle-2 shadow-[0_0_10px_#fff]" />
      </div>

      {/* Radiant Glowing Ambient Blooms */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[150px] pointer-events-none animate-pulse z-[1]" />
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-cyan-400/20 rounded-full blur-[130px] pointer-events-none z-[1]" />

      {/* Dynamic Animated HD Background Image: Space Station + Bright Earth Horizon */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="relative w-full h-full animate-space-float">
          <Image
            src="/images/hero_space_station_hd.png"
            alt="Planet Labs Space Station HD Background"
            fill
            priority
            className="object-cover object-right-center opacity-90 scale-105"
            sizes="100vw"
          />
        </div>

        {/* Shimmering Solar Panel Light Sweep */}
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-r from-transparent via-cyan-300/10 to-transparent animate-shimmer-scan pointer-events-none z-[1]" />

        {/* Animated Earth Horizon Atmosphere Glow Beam */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cyan-500/25 via-blue-600/15 to-transparent animate-horizon-glow z-[2]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#02040a] via-[#02040a]/65 to-transparent w-full md:w-3/5 z-[2]" />
        <div className="absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-t from-[#02040a] via-transparent to-transparent z-[2]" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Punchy Minimal Headline */}
        <div className="lg:col-span-8 space-y-7">
          <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-cyan-500/15 border border-cyan-400/30 backdrop-blur-xl text-xs font-mono tracking-widest text-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.25)]">
            <Orbit className="w-4 h-4 text-cyan-400 animate-spin-slow" />
            <span>PLANET LABS & METALS • ORBITAL REFINERY</span>
          </div>

          <div className="space-y-3">
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.08] text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-blue-200">
              Building Era-Defining
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-200">
                Space Infrastructure
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 max-w-xl font-light leading-relaxed pt-1">
              Pioneering commercial space stations and zero-gravity titanium metallurgy.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/solutions"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 text-white font-bold text-sm tracking-wider hover:brightness-110 transition-all duration-300 shadow-[0_0_30px_rgba(6,182,212,0.4)] flex items-center space-x-3 group"
            >
              <span>EXPLORE SOLUTIONS</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <button
              onClick={() => openInquiryModal("Commercial Flight & Metals Inquiry")}
              className="px-8 py-4 rounded-full border border-cyan-400/40 bg-slate-900/60 backdrop-blur-xl text-white font-semibold text-sm tracking-wider hover:bg-white/15 transition-all duration-300 flex items-center space-x-2 shadow-lg"
            >
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>BOOK MISSION</span>
            </button>
          </div>
        </div>

        <div className="lg:col-span-4 hidden lg:block" />
      </div>
    </section>
  );
};

