"use client";

import React from "react";
import Image from "next/image";
import { useContent } from "@/context/ContentContext";
import { Sparkles, CheckCircle2 } from "lucide-react";

export const SuitViewer = () => {
  const { data, activeHotspotId, setActiveHotspotId, openInquiryModal } = useContent();

  const selectedHotspot =
    data.suitHotspots.find((h) => h.id === activeHotspotId) || data.suitHotspots[0];

  return (
    <div className="bg-[#f5f5f7] text-gray-900 py-20 px-6 sm:px-8 border-t border-b border-gray-200">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono tracking-widest text-red-600 font-bold uppercase">
            INTERACTIVE SYSTEM EXPLORER
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-gray-900">
            PL-EVA Next-Gen Spacesuit
          </h2>
          <p className="text-gray-600 text-base font-normal">
            Click hotspot indicators on the suit model below to inspect critical mobility, life support, and thermal mitigation subsystems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white border border-gray-200/90 rounded-3xl p-6 sm:p-10 shadow-xl">
          {/* Interactive Image Container */}
          <div className="lg:col-span-7 relative h-[500px] sm:h-[600px] w-full rounded-2xl overflow-hidden bg-gradient-to-b from-gray-950 via-[#0d0f14] to-gray-950 flex items-center justify-center">
            <Image
              src="/images/axemu_spacesuit.png"
              alt="PL-EVA Spacesuit"
              fill
              className="object-contain p-4"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />

            {/* Hotspot Markers */}
            {data.suitHotspots.map((spot) => {
              const isSelected = spot.id === activeHotspotId;
              return (
                <button
                  key={spot.id}
                  onClick={() => setActiveHotspotId(spot.id)}
                  style={{ top: `${spot.y}%`, left: `${spot.x}%` }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 group transition-all duration-300 ${
                    isSelected ? "z-30 scale-125" : "z-20 scale-100 hover:scale-110"
                  }`}
                  aria-label={spot.title}
                >
                  <span className="relative flex h-8 w-8 items-center justify-center">
                    <span
                      className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                        isSelected ? "bg-red-500" : "bg-white/40"
                      }`}
                    />
                    <span
                      className={`relative inline-flex rounded-full h-7 w-7 items-center justify-center text-xs font-bold font-mono transition-colors ${
                        isSelected
                          ? "bg-red-600 text-white shadow-lg ring-2 ring-red-400"
                          : "bg-black/70 text-white hover:bg-red-500"
                      }`}
                    >
                      {spot.id}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          {/* Hotspot Info Panel */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-red-100 border border-red-300 text-red-700 text-xs font-mono font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>SUBSYSTEM DETAILED SPECIFICATION</span>
            </div>

            <div className="space-y-3">
              <span className="text-xs font-mono text-gray-500 font-bold uppercase tracking-widest block">
                SUBSYSTEM // {selectedHotspot.id.toUpperCase()}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                {selectedHotspot.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed font-normal">
                {selectedHotspot.description}
              </p>
            </div>

            <div className="space-y-2.5 pt-3 border-t border-gray-200">
              <div className="flex items-center space-x-3 text-xs font-mono text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                <span>EVA Operating Duration: 8+ Hours continuous</span>
              </div>
              <div className="flex items-center space-x-3 text-xs font-mono text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                <span>Lunar Dust Repulsion Anti-Static Coating</span>
              </div>
              <div className="flex items-center space-x-3 text-xs font-mono text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                <span>Thermal Operating Range (-200°C to +120°C)</span>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={() => openInquiryModal(`PL-EVA Spacesuit Specs Inquiry: ${selectedHotspot.title}`)}
                className="w-full py-3.5 px-6 rounded-full bg-black text-white font-bold text-xs tracking-wider uppercase hover:bg-gray-800 transition-colors shadow-md"
              >
                Inquire Technical Specs
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
