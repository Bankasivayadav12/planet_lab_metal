"use client";

import React from "react";
import Image from "next/image";
import { SuitViewer } from "@/components/SuitViewer";
import { useContent } from "@/context/ContentContext";
import {
  Shield,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Layers,
  Activity,
  Cpu,
  Feather,
  Wrench,
  Globe,
} from "lucide-react";

export default function SuitPage() {
  const { openInquiryModal } = useContent();

  const capabilities = [
    {
      icon: Layers,
      title: "Enhanced Fit & Ergonomics",
      description:
        "Customizable sizing joints accommodate 90% of male and female astronaut population sizes for superior comfort and dexterity.",
    },
    {
      icon: Activity,
      title: "Multipurpose Mission Suit",
      description:
        "Built to excel in microgravity spacewalks around station modules as well as dusty, high-abrasion lunar surface mining tasks.",
    },
    {
      icon: Shield,
      title: "Redundant Safety Systems",
      description:
        "Human-centered architecture eliminates single-point failures with dual-loop oxygen recirculation and emergency thermal backups.",
    },
    {
      icon: Feather,
      title: "Dynamic Joint Mobility",
      description:
        "Innovative soft fabric bearings and sealed hard joints allow astronauts to walk, crouch, and sample lunar regolith effortlessly.",
    },
    {
      icon: Cpu,
      title: "Integrated HD Optics & HUD",
      description:
        "Built-in 4K video feeds, heads-up telemetry display, and real-time biometric tracking keep mission control continuously connected.",
    },
    {
      icon: Wrench,
      title: "On-Orbit Maintainability",
      description:
        "Designed for rapid modular servicing in space, significantly reducing launch payload costs and expanding mission longevity.",
    },
  ];

  return (
    <div className="pt-24 space-y-0 bg-[#050608] text-white">
      {/* SECTION 1: HERO (BLACK) */}
      <section className="relative py-20 px-6 sm:px-8 border-b border-white/10 overflow-hidden bg-[#050608]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-red-500/20 border border-red-500/30 text-red-300 text-xs font-mono tracking-widest uppercase">
              <Shield className="w-4 h-4 text-red-400" />
              <span>PL-EVA NEXT-GEN LUNAR SPACESUIT</span>
            </div>

            <h1 className="text-4xl sm:text-7xl font-extrabold tracking-tight leading-tight text-white">
              PL-EVA Spacesuit
            </h1>

            <p className="text-lg text-slate-300 max-w-2xl font-light leading-relaxed">
              Engineered for extreme thermal protection, lunar surface mining, and microgravity spaceflight operations. The Planet Labs Extravehicular Mobility Unit provides unprecedented mobility and safety for astronaut explorers.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => openInquiryModal("PL-EVA Technical Collaboration")}
                className="px-8 py-4 rounded-full bg-white text-black font-bold text-xs tracking-wider uppercase hover:bg-gray-200 transition-colors shadow-lg flex items-center space-x-2"
              >
                <span>REQUEST SPECIFICATIONS</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => openInquiryModal("PL-EVA Commercial Partnership")}
                className="px-8 py-4 rounded-full border border-white/20 bg-white/5 hover:bg-white/15 text-white font-semibold text-xs tracking-wider uppercase transition-colors"
              >
                PARTNERSHIP INQUIRIES
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 relative h-[420px] sm:h-[480px] w-full rounded-3xl overflow-hidden bg-gradient-to-b from-black via-[#090b0e] to-black border border-white/15 shadow-2xl">
            <Image
              src="/images/axemu_spacesuit.png"
              alt="PL-EVA Spacesuit"
              fill
              className="object-contain p-6"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>
      </section>

      {/* SECTION 2: INTERACTIVE SYSTEM EXPLORER (WHITE) */}
      <SuitViewer />

      {/* SECTION 3: KEY CAPABILITY PILLARS (BLACK) */}
      <section className="py-24 px-6 sm:px-8 bg-black text-white border-t border-b border-white/10">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-mono tracking-widest text-red-400 uppercase font-bold">
              ADVANCED SUIT ARCHITECTURE
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              Built for the Edge of Exploration
            </h2>
            <p className="text-slate-400 text-base font-light">
              Combines decades of spaceflight heritage with cutting-edge textiles, avionics, and life support systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="p-8 rounded-3xl bg-slate-900/60 backdrop-blur-xl border border-white/15 hover:border-red-500/50 hover:shadow-[0_0_30px_rgba(239,68,68,0.2)] transition-all duration-300 space-y-4 group"
                >
                  <div className="p-3 rounded-2xl bg-red-600/20 text-red-400 w-fit group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-300 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 4: COMMERCIAL & SOVEREIGN PARTNERSHIPS (WHITE) */}
      <section className="py-20 px-6 sm:px-8 bg-white text-gray-900 border-t border-gray-200 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-red-100 border border-red-300 text-red-700 text-xs font-mono font-bold">
            <Globe className="w-3.5 h-3.5" />
            <span>GLOBAL SPACEFLIGHT PROGRAM</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-gray-900">
            Commercial & Sovereign Suit Partnerships
          </h2>

          <p className="text-gray-600 font-normal max-w-2xl mx-auto leading-relaxed">
            The PL-EVA suit represents the future of extravehicular space exploration. Explore sovereign agency customization, brand partnerships, and technical collaboration opportunities.
          </p>

          <div className="pt-4 flex justify-center">
            <button
              onClick={() => openInquiryModal("PL-EVA Partnership Program")}
              className="px-9 py-4 rounded-full bg-black text-white font-bold text-xs tracking-wider uppercase hover:bg-gray-800 transition-colors shadow-xl flex items-center space-x-2"
            >
              <span>INQUIRE ABOUT SUIT PARTNERSHIPS</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
