"use client";

import React from "react";
import Image from "next/image";
import { useContent } from "@/context/ContentContext";
import { Cpu, Zap, Box, Shield, ArrowRight } from "lucide-react";

export const StationViewer = () => {
  const { data, activeModuleId, setActiveModuleId, openInquiryModal } = useContent();

  const selectedModule =
    data.stationModules.find((m) => m.id === activeModuleId) || data.stationModules[0];

  return (
    <div className="bg-[#08090c] text-white py-20 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono tracking-widest text-blue-400 uppercase">
            ORBITAL ARCHITECTURE
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
            Explore Planet Labs Station Modules
          </h2>
          <p className="text-gray-400 text-base">
            Select a commercial module below to view structural capacity, available payload racks, power throughput, and mission capabilities.
          </p>
        </div>

        {/* Module Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-3">
          {data.stationModules.map((mod) => {
            const isActive = mod.id === activeModuleId;
            return (
              <button
                key={mod.id}
                onClick={() => setActiveModuleId(mod.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-mono tracking-wider transition-all duration-300 ${
                  isActive
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30 scale-105"
                    : "bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10"
                }`}
              >
                {mod.name.split("(")[0]}
              </button>
            );
          })}
        </div>

        {/* Selected Module Detail Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-black/60 border border-white/10 rounded-3xl p-6 sm:p-10 backdrop-blur-xl">
          <div className="lg:col-span-7 relative h-[350px] sm:h-[450px] w-full rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/hero_space_station.png"
              alt={selectedModule.name}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs font-mono text-gray-300">
              <span className="px-3 py-1 rounded bg-black/60 backdrop-blur-md border border-white/20">
                VOLUME: {selectedModule.volume}
              </span>
              <span className="px-3 py-1 rounded bg-black/60 backdrop-blur-md border border-white/20 text-blue-400">
                POWER: {selectedModule.power}
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-mono text-blue-400 uppercase tracking-widest">
                {selectedModule.type}
              </span>
              <h3 className="text-2xl font-bold text-white mt-1 leading-tight">
                {selectedModule.name}
              </h3>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed font-light">
              {selectedModule.description}
            </p>

            <div className="space-y-3">
              <h4 className="text-xs font-mono text-gray-400 uppercase tracking-wider">
                Module Capabilities & Payload Access:
              </h4>
              <div className="grid grid-cols-1 gap-2">
                {selectedModule.features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="flex items-center space-x-2 text-xs text-gray-200 bg-white/5 px-3 py-2 rounded-lg border border-white/10"
                  >
                    <Box className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={() =>
                  openInquiryModal(`Commercial Payload Slot Request: ${selectedModule.name}`)
                }
                className="w-full py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs tracking-wider uppercase transition-colors shadow-lg flex items-center justify-center space-x-2"
              >
                <span>Reserve Payload Slot</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
