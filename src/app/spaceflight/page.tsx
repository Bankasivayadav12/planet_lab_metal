"use client";

import React from "react";
import Image from "next/image";
import { useContent } from "@/context/ContentContext";
import { Rocket, ShieldCheck, Award, Globe, Users, ArrowRight } from "lucide-react";

export default function SpaceflightPage() {
  const { openInquiryModal } = useContent();

  const flightMissions = [
    {
      id: "ax-1",
      name: "Planet Labs Mission 1 (PL-1)",
      year: "2022",
      crew: "4 Astronauts",
      duration: "17 Days",
      impact: "First all-private astronaut mission conducting 25+ science and metallurgy experiments.",
    },
    {
      id: "ax-2",
      name: "Planet Labs Mission 2 (PL-2)",
      year: "2023",
      crew: "4 Astronauts",
      duration: "10 Days",
      impact: "Historic mission carrying researchers to microgravity for zero-g alloy and stem cell research.",
    },
    {
      id: "ax-3",
      name: "Planet Labs Mission 3 (PL-3)",
      year: "2024",
      crew: "4 All-European Crew",
      duration: "18 Days",
      impact: "Commercial astronaut mission representing European space research institutes.",
    },
    {
      id: "ax-4",
      name: "Planet Labs Mission 4 (PL-4)",
      year: "Upcoming",
      crew: "4 International Crew",
      duration: "14 Days",
      impact: "Expanding international scientific partnerships with global research nations.",
    },
  ];

  return (
    <div className="pt-24 space-y-0 bg-[#050608] text-white">
      {/* Spaceflight Hero */}
      <section className="relative py-20 px-6 sm:px-8 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/astronaut_mission.png"
            alt="Astronaut Missions"
            fill
            className="object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050608] via-[#050608]/70 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 space-y-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-xs font-mono">
            <Rocket className="w-3.5 h-3.5" />
            <span>COMMERCIAL HUMAN SPACEFLIGHT OPERATOR</span>
          </div>

          <h1 className="text-4xl sm:text-7xl font-extrabold tracking-tight max-w-4xl leading-tight">
            Astronaut Missions & Spaceflight Training
          </h1>

          <p className="text-lg text-gray-300 max-w-2xl font-light leading-relaxed">
            Planet Labs & Metals provides end-to-end mission management for sovereign nations and private organizations—including medical screening, centrifuge training, launch vehicle integration, and orbital flight operations.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button
              onClick={() => openInquiryModal("Astronaut Seat Reservation Request")}
              className="px-8 py-3.5 rounded-full bg-white text-black font-semibold text-xs tracking-wider uppercase hover:bg-gray-200 transition-colors shadow-lg flex items-center space-x-2"
            >
              <span>Book Astronaut Seat</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Flight History Grid */}
      <section className="py-24 px-6 sm:px-8 bg-[#090b0e]">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-mono tracking-widest text-blue-400 uppercase">
              PROVEN MISSION HERITAGE
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
              Planet Labs Commercial Spaceflight Missions
            </h2>
            <p className="text-gray-400 text-base font-light">
              Pioneering private astronaut flights to low-Earth orbit with international space agencies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {flightMissions.map((mission) => (
              <div
                key={mission.id}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4 hover:border-blue-500/40 transition-colors"
              >
                <div className="flex items-center justify-between text-xs font-mono text-gray-400">
                  <span>{mission.year}</span>
                  <span className="text-blue-400 font-semibold">{mission.duration}</span>
                </div>
                <h3 className="text-xl font-bold text-white">{mission.name}</h3>
                <p className="text-xs text-gray-400 font-mono">{mission.crew}</p>
                <p className="text-xs text-gray-300 font-light leading-relaxed">
                  {mission.impact}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Overview */}
      <section className="py-24 px-6 sm:px-8 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono tracking-widest text-emerald-400 uppercase">
              WORLD-CLASS TRAINING CURRICULUM
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
              Astronaut Preparation Center
            </h2>
            <p className="text-gray-300 text-base font-light leading-relaxed">
              Every Planet Labs astronaut undergoes world-class training developed by experienced flight commanders. Curriculum includes spacecraft emergency procedures, microgravity parabolic flights, centrifuge G-force acclimation, and orbital experiment execution.
            </p>

            <ul className="space-y-3 text-sm text-gray-300 font-mono">
              <li className="flex items-center space-x-3">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Customized Sovereign Space Agency Training Tracks</span>
              </li>
              <li className="flex items-center space-x-3">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Full-Scale Spacecraft Simulator Mockups</span>
              </li>
              <li className="flex items-center space-x-3">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Comprehensive Medical & Physical Conditioning</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-6 relative h-[380px] sm:h-[450px] w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <Image
              src="/images/earth_cupola.png"
              alt="Orbital View"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
