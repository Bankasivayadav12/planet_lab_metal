"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowRight, Layers, Cpu, Server } from "lucide-react";

export default function SolutionsLandingPage() {
  const solutionPillars = [
    {
      title: "Microgravity Research",
      tagline: "Zero Gravity. Infinite Metallurgy & Physical Science Possibilities.",
      href: "/solutions/microgravity-research",
      image: "/images/orbital_metallurgy.png",
      icon: Layers,
      color: "border-cyan-500/40 hover:border-cyan-400",
      btnBg: "bg-cyan-500 hover:bg-cyan-400 text-black",
      desc: "Conduct high-purity metal crystallization, plasma alloy refining, and biomedical research on board our commercial low-Earth orbit foundry platform.",
    },
    {
      title: "In-Space Manufacturing",
      tagline: "Production of Advanced Alloys, Semiconductors & Biologics without Gravity Constraints.",
      href: "/solutions/in-space-manufacturing",
      image: "/images/advanced_crystal_alloy.png",
      icon: Cpu,
      color: "border-orange-500/40 hover:border-orange-400",
      btnBg: "bg-orange-500 hover:bg-orange-400 text-white",
      desc: "Unlock zero-g manufacturing for defect-free semiconductor wafers, ZBLAN optical fibers, custom titanium medical implants, and 3D bioprinted tissue.",
    },
    {
      title: "Orbital Data Centers",
      tagline: "Scalable, Cloud-Enabled Compute & AI Inferencing Operating Directly in Space.",
      href: "/solutions/orbital-data-center",
      image: "/images/orbital_data_center_hd.png",
      icon: Server,
      color: "border-purple-500/40 hover:border-purple-400",
      btnBg: "bg-purple-600 hover:bg-purple-500 text-white",
      desc: "Air-gapped, zero-trust cloud data storage and edge AI inferencing immune to terrestrial power grid disruptions and physical cyber vulnerabilities.",
    },
  ];

  return (
    <div className="pt-24 space-y-0 bg-[#050608] text-white min-h-screen">
      {/* HERO */}
      <section className="relative py-28 px-6 sm:px-8 border-b border-white/10 overflow-hidden bg-[#050608]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero_space_station_hd.png"
            alt="Planet Labs Solutions"
            fill
            className="object-cover opacity-35"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050608] via-[#050608]/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 space-y-6 text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-widest uppercase">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>PLANET LABS & METALS • COMMERCIAL SOLUTIONS</span>
          </div>

          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight max-w-4xl mx-auto leading-tight text-white">
            Pioneering Orbital Solutions & Industrial Metallurgy
          </h1>

          <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
            Select a specialized commercial solution below to explore our dedicated capabilities for microgravity research, zero-g manufacturing, and orbital data cloud infrastructure.
          </p>
        </div>
      </section>

      {/* 3 SOLUTION PILLARS GRID */}
      <section className="py-24 px-6 sm:px-8 bg-[#090b10] border-b border-white/10">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {solutionPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className={`relative rounded-3xl overflow-hidden bg-[#0e121a] border ${pillar.color} shadow-2xl flex flex-col justify-between group transition-all duration-500 hover:-translate-y-2`}
                >
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={pillar.image}
                      alt={pillar.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0e121a] via-[#0e121a]/50 to-transparent" />
                    
                    <div className="absolute top-6 left-6 p-3 rounded-2xl bg-black/60 backdrop-blur-md border border-white/20 text-white">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <div className="p-8 space-y-4 flex-1 flex flex-col justify-between">
                    <div className="space-y-3">
                      <h2 className="text-3xl font-black text-white group-hover:text-cyan-300 transition-colors">
                        {pillar.title}
                      </h2>
                      <p className="text-xs font-mono font-bold text-orange-400 leading-snug">
                        {pillar.tagline}
                      </p>
                      <p className="text-sm text-slate-300 font-light leading-relaxed pt-2">
                        {pillar.desc}
                      </p>
                    </div>

                    <div className="pt-6">
                      <Link
                        href={pillar.href}
                        className={`w-full py-4 px-6 rounded-2xl ${pillar.btnBg} font-mono font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 transition-all shadow-lg`}
                      >
                        <span>EXPLORE {pillar.title.toUpperCase()}</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
