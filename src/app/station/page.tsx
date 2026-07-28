"use client";

import React from "react";
import Image from "next/image";
import { siteData } from "@/data/siteData";
import { useContent } from "@/context/ContentContext";
import {
  Shield,
  ArrowRight,
  Globe,
  Box,
  Zap,
  Activity,
  Maximize2,
  Compass,
} from "lucide-react";

export default function StationPage() {
  const { openInquiryModal } = useContent();
  const { hero, stationModules } = siteData;

  return (
    <div className="pt-24 space-y-0 bg-[#050608] text-white">
      {/* HERO SECTION */}
      <section className="relative py-20 px-6 sm:px-8 border-b border-white/10 overflow-hidden bg-[#050608]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-widest uppercase">
              <Box className="w-4 h-4 text-cyan-400" />
              <span>COMMERCIAL ORBITAL STATION & FOUNDRY</span>
            </div>

            <h1 className="text-4xl sm:text-7xl font-extrabold tracking-tight leading-tight text-white">
              Commercial Space Station
            </h1>

            <p className="text-lg text-slate-300 max-w-2xl font-light leading-relaxed">
              The world&apos;s first commercial space station and orbital metallurgy refinery. Planet Labs &amp; Metals Station provides microgravity research laboratories, cleanroom metal synthesis bays, and habitation modules.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => openInquiryModal("Commercial Space Station Module Access")}
                className="px-8 py-4 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs tracking-wider uppercase transition-colors shadow-lg flex items-center space-x-2"
              >
                <span>BOOK STATION MODULE BAY</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => openInquiryModal("Orbital Station Partnership")}
                className="px-8 py-4 rounded-full border border-white/20 bg-white/5 hover:bg-white/15 text-white font-semibold text-xs tracking-wider uppercase transition-colors"
              >
                PARTNERSHIP INQUIRIES
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 relative h-[420px] sm:h-[480px] w-full rounded-3xl overflow-hidden border border-white/15 shadow-2xl">
            <Image
              src="/images/hero_space_station_hd.png"
              alt="Planet Labs Commercial Space Station"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
              priority
            />
          </div>
        </div>
      </section>

      {/* MODULES GRID SECTION */}
      <section className="py-24 px-6 sm:px-8 bg-black text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase font-bold">
              MODULAR ORBITAL INFRASTRUCTURE
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              Station Core Architecture
            </h2>
            <p className="text-slate-400 text-base font-light">
              Modular modules engineered for high-throughput zero-g titanium refining, microgravity research, and long-duration crew habitation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {stationModules.map((mod) => (
              <div
                key={mod.id}
                className="p-8 rounded-3xl bg-slate-900/60 backdrop-blur-xl border border-white/15 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] transition-all duration-300 space-y-6 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-950 border border-cyan-800 text-cyan-300 font-bold">
                      {mod.type}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      VOL: {mod.volume}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white">{mod.name}</h3>

                  <p className="text-sm text-slate-300 leading-relaxed font-light">
                    {mod.description}
                  </p>

                  <div className="pt-2">
                    <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3 font-semibold">
                      Key Capabilities &amp; Specs
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                      {mod.features.map((feat, i) => (
                        <li key={i} className="flex items-center space-x-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex justify-between items-center text-xs">
                  <span className="text-slate-400 font-mono">POWER: {mod.power}</span>
                  <button
                    onClick={() => openInquiryModal(`Inquiry for ${mod.name}`)}
                    className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center space-x-1"
                  >
                    <span>Reserve Payload Bay</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERSHIP CTA (WHITE) */}
      <section className="py-20 px-6 sm:px-8 bg-white text-gray-900 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-cyan-100 border border-cyan-300 text-cyan-800 text-xs font-mono font-bold">
            <Globe className="w-3.5 h-3.5" />
            <span>GLOBAL ORBITAL INFRASTRUCTURE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-gray-900">
            Join the Commercial Orbital Era
          </h2>

          <p className="text-gray-600 font-normal max-w-2xl mx-auto leading-relaxed">
            From zero-g metal refining to sovereign astronaut missions, partner with Planet Labs &amp; Metals to access low Earth orbit infrastructure.
          </p>

          <div className="pt-4 flex justify-center">
            <button
              onClick={() => openInquiryModal("Commercial Station Lease")}
              className="px-9 py-4 rounded-full bg-black text-white font-bold text-xs tracking-wider uppercase hover:bg-gray-800 transition-colors shadow-xl flex items-center space-x-2"
            >
              <span>DISCUSS STATION LEASING &amp; PAYLOADS</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
