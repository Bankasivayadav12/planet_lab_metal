"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Compass, ShieldCheck } from "lucide-react";

export const FeatureBannerSection = () => {
  return (
    <div className="bg-gradient-to-b from-[#04081c] via-[#081338] to-[#04091f] text-white">
      {/* Banner 1: Orbital Station */}
      <section className="relative overflow-hidden border-b border-white/10 py-20 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs font-mono tracking-widest uppercase">
              <Compass className="w-3.5 h-3.5 text-cyan-400" />
              <span>ORBITAL REFINERY & STATION</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Foundations for the Future
            </h2>
            <div className="pt-2">
              <Link
                href="/solutions"
                className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold tracking-wider uppercase transition-all duration-300 shadow-[0_0_25px_rgba(37,99,235,0.4)]"
              >
                <span>EXPLORE METALLURGY SOLUTIONS</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="relative h-[340px] sm:h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl border border-white/20 group bg-slate-950">
            <Image
              src="/images/planet_labs_hero.png"
              alt="Planet Labs Orbital Station"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Banner 2: Artemis Spacesuit */}
      <section className="relative overflow-hidden py-20 px-6 sm:px-12 bg-gradient-to-b from-[#04091f] to-[#020617]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1 relative h-[360px] sm:h-[420px] w-full rounded-3xl overflow-hidden shadow-2xl border border-white/20 group bg-black">
            <Image
              src="/images/axemu_spacesuit.png"
              alt="AxEMU Spacesuit"
              fill
              className="object-contain p-4 group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div className="order-1 lg:order-2 space-y-4">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-300 text-xs font-mono tracking-widest uppercase">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>ARTEMIS LUNAR EVA ARMOR</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Advancing Exploration
            </h2>
            <div className="pt-2">
              <Link
                href="/suit"
                className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-full border border-amber-400/40 bg-amber-500/10 hover:bg-amber-500 hover:text-black text-amber-300 text-xs font-bold tracking-wider uppercase transition-all duration-300 shadow-lg"
              >
                <span>MEET THE PL-EVA SPACESUIT</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
