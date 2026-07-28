"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useContent } from "@/context/ContentContext";
import {
  Rocket,
  ShieldCheck,
  Award,
  Globe,
  Users,
  ArrowRight,
  Calendar,
  Zap,
  CheckCircle2,
  Sparkles,
  Clock,
  Layers,
  Activity,
  ChevronRight,
  X,
  FileText,
} from "lucide-react";

interface MissionDetail {
  id: string;
  name: string;
  codeName: string;
  category: "Orbital Metallurgy" | "Astronaut Flights" | "Lunar Operations";
  year: string;
  status: "COMPLETED" | "ACTIVE / IN-ORBIT" | "UPCOMING" | "SCHEDULED";
  crew: string;
  duration: string;
  vehicle: string;
  altitude: string;
  inclination: string;
  payloadMass: string;
  summary: string;
  highlights: string[];
  refineryResults?: string;
  image: string;
}

export default function SpaceflightPage() {
  const { openInquiryModal } = useContent();
  const [activeTab, setActiveTab] = useState<string>("ALL");
  const [selectedMission, setSelectedMission] = useState<MissionDetail | null>(null);

  const missions: MissionDetail[] = [
    {
      id: "pl-1",
      name: "Planet Labs Mission 1",
      codeName: "PL-1 TITAN",
      category: "Orbital Metallurgy",
      year: "2022",
      status: "COMPLETED",
      crew: "4 Commander & Specialists",
      duration: "17 Days",
      vehicle: "SpaceX Falcon 9 / Dragon",
      altitude: "420 KM LEO",
      inclination: "51.6°",
      payloadMass: "1,250 KG",
      summary: "First commercial mission integrating zero-gravity levitation alloy furnaces and biomedical research bays.",
      highlights: [
        "Synthesized 45kg of ultra-pure Titanium-Aluminide crystal ingots",
        "Completed 25+ microgravity metallurgical and stem cell experiments",
        "Achieved 99.999% purity on vacuum-refined optical crystals",
      ],
      refineryResults: "Zero grain-boundary defect structure validated post-landing.",
      image: "/images/astronaut_mission.png",
    },
    {
      id: "pl-2",
      name: "Planet Labs Mission 2",
      codeName: "PL-2 AURA",
      category: "Astronaut Flights",
      year: "2023",
      status: "COMPLETED",
      crew: "4 Sovereign & Private Astronauts",
      duration: "10 Days",
      vehicle: "SpaceX Falcon 9 / Dragon",
      altitude: "415 KM LEO",
      inclination: "51.6°",
      payloadMass: "890 KG",
      summary: "Historic commercial flight carrying researchers to low-Earth orbit for zero-g stem cell cultivation and metallurgy.",
      highlights: [
        "First private astronaut mission with national space agency participation",
        "Demonstrated automated vacuum furnace sample extraction",
        "Conducted 120+ hours of live telemetry broadcasts",
      ],
      refineryResults: "Successful in-orbit thermal processing of high-temp alloy coupons.",
      image: "/images/earth_cupola.png",
    },
    {
      id: "pl-3",
      name: "Planet Labs Mission 3",
      codeName: "PL-3 HELIOS",
      category: "Orbital Metallurgy",
      year: "2024",
      status: "COMPLETED",
      crew: "4 All-European Research Crew",
      duration: "18 Days",
      vehicle: "SpaceX Falcon 9 / Dragon",
      altitude: "425 KM LEO",
      inclination: "51.6°",
      payloadMass: "1,500 KG",
      summary: "Advanced scientific mission dedicated to continuous zero-gravity metal crystallization and quantum computing optics.",
      highlights: [
        "Tested prototype microgravity laser melting arrays",
        "Synthesized fluorozirconate glass fiber with zero Rayleigh scattering",
        "Executed 300+ hours of autonomous furnace operations",
      ],
      refineryResults: "10x strength increase in zero-g titanium-matrix composites.",
      image: "/images/orbital_metallurgy.png",
    },
    {
      id: "pl-4",
      name: "Planet Labs Mission 4",
      codeName: "PL-4 VANGUARD",
      category: "Lunar Operations",
      year: "2025",
      status: "ACTIVE / IN-ORBIT",
      crew: "4 International Payload Engineers",
      duration: "21 Days",
      vehicle: "SpaceX Starship / Dragon",
      altitude: "430 KM LEO",
      inclination: "51.6°",
      payloadMass: "2,200 KG",
      summary: "In-orbit deployment of the prototype Lunar Plasma Mining Bay and PL-EVA Spacesuit field testing.",
      highlights: [
        "Full thermal cycle test of PL-EVA Lunar suit from -200°C to +120°C",
        "Simulated lunar regolith plasma extraction in vacuum environment",
        "Docked with Commercial Station Core for payload bay integration",
      ],
      refineryResults: "Direct plasma arc extraction of elemental lunar metal simulants.",
      image: "/images/lunar_metals_facility.png",
    },
    {
      id: "pl-5",
      name: "Planet Labs Mission 5",
      codeName: "PL-5 ARTEMISIA",
      category: "Astronaut Flights",
      year: "2026",
      status: "UPCOMING",
      crew: "4 Sovereign Astronauts",
      duration: "30 Days",
      vehicle: "SpaceX Dragon Crew",
      altitude: "450 KM LEO",
      inclination: "51.6°",
      payloadMass: "1,800 KG",
      summary: "Long-duration astronaut mission focusing on permanent station module commissioning and commercial alloy production.",
      highlights: [
        "Installation of the Commercial Metal Synthesis Lab 2 (PL-L2)",
        "First 30-day continuous crew residency on Planet Labs Station",
        "In-space fabrication of semiconductor substrates for quantum sensors",
      ],
      refineryResults: "Targeting 100kg batch output of semiconductor-grade crystals.",
      image: "/images/planet_labs_hero.png",
    },
    {
      id: "pl-6",
      name: "Planet Labs Mission 6",
      codeName: "PL-6 SELENE FOUNDRY",
      category: "Lunar Operations",
      year: "2027",
      status: "SCHEDULED",
      crew: "Robotic & Crew Hybrid",
      duration: "45 Days",
      vehicle: "Heavy Cargo Starship",
      altitude: "Lunar South Pole",
      inclination: "Polar",
      payloadMass: "15,000 KG",
      summary: "Deploying the world's first autonomous lunar surface metal refinery and solar power array at Shackleton Crater.",
      highlights: [
        "First commercial lunar surface metallurgy platform",
        "Autonomous extraction of oxygen and iron from regolith",
        "Establishing permanent lunar material supply node",
      ],
      refineryResults: "Continuous lunar regolith metal refining operations.",
      image: "/images/advanced_crystal_alloy.png",
    },
  ];

  const filteredMissions =
    activeTab === "ALL"
      ? missions
      : missions.filter((m) => m.category.toUpperCase().includes(activeTab) || m.status.includes(activeTab));

  return (
    <div className="pt-24 space-y-0 bg-[#050608] text-white min-h-screen">
      {/* HERO SECTION */}
      <section className="relative py-24 px-6 sm:px-8 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/astronaut_mission.png"
            alt="Planet Labs Missions"
            fill
            className="object-cover opacity-30 scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050608] via-[#050608]/80 to-black/40" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 space-y-8">
          <div className="inline-flex items-center space-x-2.5 px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-widest uppercase shadow-lg">
            <Rocket className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span>COMMERCIAL SPACEFLIGHT &amp; ORBITAL MISSIONS</span>
          </div>

          <div className="space-y-4 max-w-4xl">
            <h1 className="text-4xl sm:text-7xl font-extrabold tracking-tight leading-none text-white">
              Pioneering Spaceflight &amp; Zero-G Metallurgy
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 font-light leading-relaxed">
              Planet Labs &amp; Metals executes end-to-end orbital spaceflight missions—from sovereign astronaut training and launch integration to in-space titanium refining and lunar surface extraction.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 max-w-4xl border-t border-white/10">
            <div className="space-y-1">
              <span className="text-2xl sm:text-4xl font-black text-cyan-400 font-mono">6+</span>
              <p className="text-xs text-slate-400 font-mono">FLOWN &amp; PLANNED</p>
            </div>
            <div className="space-y-1">
              <span className="text-2xl sm:text-4xl font-black text-white font-mono">1,400+</span>
              <p className="text-xs text-slate-400 font-mono">HOURS IN ZERO-G</p>
            </div>
            <div className="space-y-1">
              <span className="text-2xl sm:text-4xl font-black text-cyan-400 font-mono">250+ KG</span>
              <p className="text-xs text-slate-400 font-mono">REFINED ALLOY OUTPUT</p>
            </div>
            <div className="space-y-1">
              <span className="text-2xl sm:text-4xl font-black text-white font-mono">100%</span>
              <p className="text-xs text-slate-400 font-mono">MISSION SAFETY RECORD</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <button
              onClick={() => openInquiryModal("Astronaut Flight Seat & Payload Reservation")}
              className="px-8 py-4 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs tracking-wider uppercase transition-all shadow-xl flex items-center space-x-2"
            >
              <span>BOOK ASTRONAUT SEAT OR PAYLOAD</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => openInquiryModal("Metallurgy Furnace Payload Bay Lease")}
              className="px-8 py-4 rounded-full border border-white/20 bg-white/5 hover:bg-white/15 text-white font-semibold text-xs tracking-wider uppercase transition-colors"
            >
              INQUIRE ABOUT REFINERY PAYLOADS
            </button>
          </div>
        </div>
      </section>

      {/* FILTER & MISSIONS GRID */}
      <section className="py-24 px-6 sm:px-8 bg-black">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
            <div className="space-y-2">
              <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase font-bold">
                FLIGHT MANIFEST &amp; HERITAGE
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
                Mission Portfolio
              </h2>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {["ALL", "METALLURGY", "ASTRONAUT", "LUNAR"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-2.5 rounded-full text-xs font-mono font-semibold tracking-wider transition-all ${
                    activeTab === tab
                      ? "bg-cyan-500 text-black shadow-lg"
                      : "bg-white/5 text-slate-300 hover:bg-white/15 border border-white/10"
                  }`}
                >
                  {tab === "ALL" ? "ALL MISSIONS" : `${tab} MISSIONS`}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMissions.map((mission) => (
              <div
                key={mission.id}
                onClick={() => setSelectedMission(mission)}
                className="group relative rounded-3xl bg-[#0b0e14] border border-white/15 hover:border-cyan-500/60 overflow-hidden shadow-xl hover:shadow-[0_0_35px_rgba(6,182,212,0.25)] transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-56 w-full overflow-hidden bg-slate-950">
                  <Image
                    src={mission.image}
                    alt={mission.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e14] via-transparent to-black/40" />

                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-cyan-500/40 text-[10px] font-mono font-bold text-cyan-300 uppercase">
                      {mission.codeName}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-3 py-1 rounded-full text-[10px] font-mono font-bold border ${
                        mission.status === "COMPLETED"
                          ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
                          : mission.status.includes("ACTIVE")
                          ? "bg-cyan-500/20 text-cyan-300 border-cyan-500/40 animate-pulse"
                          : "bg-amber-500/20 text-amber-300 border-amber-500/40"
                      }`}
                    >
                      {mission.status}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                      <span className="flex items-center space-x-1">
                        <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{mission.year}</span>
                      </span>
                      <span className="flex items-center space-x-1 text-slate-300">
                        <Clock className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{mission.duration}</span>
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {mission.name}
                    </h3>

                    <p className="text-xs text-slate-300 font-light leading-relaxed line-clamp-3">
                      {mission.summary}
                    </p>
                  </div>

                  {/* Footer Stats */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                    <span>VEHICLE: {mission.vehicle.split("/")[0]}</span>
                    <span className="text-cyan-400 font-bold flex items-center space-x-1 group-hover:translate-x-1 transition-transform">
                      <span>INSPECT</span>
                      <ChevronRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRAINING & OPERATIONAL EXCELLENCE */}
      <section className="py-24 px-6 sm:px-8 bg-[#07090d] border-t border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-bold tracking-widest uppercase">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>ASTRONAUT &amp; PAYLOAD PREPARATION</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              World-Class Flight Operations &amp; Training
            </h2>

            <p className="text-slate-300 text-base font-light leading-relaxed">
              Every Planet Labs mission commander, research scientist, and payload specialist undergoes rigorous training supervised by veteran NASA &amp; ESA flight directors.
            </p>

            <div className="space-y-3 pt-2">
              {[
                "High-G Centrifuge & Neutral Buoyancy EVA Acclimation",
                "Cleanroom Metallurgy Glovebox & Plasma Arc Operations",
                "Full-Scale Spacecraft & Orbital Station Simulator Mockups",
                "Emergency De-Orbit & Survival Sea Recovery Protocols",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start space-x-3 text-sm text-slate-200 font-mono">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button
                onClick={() => openInquiryModal("Astronaut Training Program Details")}
                className="px-8 py-3.5 rounded-full bg-white text-black font-bold text-xs tracking-wider uppercase hover:bg-slate-200 transition-colors shadow-lg flex items-center space-x-2"
              >
                <span>EXPLORE TRAINING CURRICULUM</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 relative h-[420px] sm:h-[480px] w-full rounded-3xl overflow-hidden border border-white/15 shadow-2xl">
            <Image
              src="/images/earth_cupola.png"
              alt="Orbital Station Earth View Cupola"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* DETAIL MODAL */}
      {selectedMission && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
          <div className="bg-[#0e1118] border border-cyan-500/40 rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl space-y-6 p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="flex justify-between items-start border-b border-white/10 pb-4">
              <div>
                <div className="inline-flex items-center space-x-2 text-xs font-mono text-cyan-400 uppercase tracking-widest font-bold mb-1">
                  <span>{selectedMission.category}</span>
                  <span>•</span>
                  <span>{selectedMission.codeName}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {selectedMission.name}
                </h3>
              </div>

              <button
                onClick={() => setSelectedMission(null)}
                className="p-2 text-slate-400 hover:text-white rounded-full bg-white/5 hover:bg-white/15 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Specifications Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 text-xs font-mono">
              <div>
                <span className="text-slate-400 block">LAUNCH VEHICLE</span>
                <span className="text-white font-bold">{selectedMission.vehicle}</span>
              </div>
              <div>
                <span className="text-slate-400 block">ALTITUDE</span>
                <span className="text-cyan-300 font-bold">{selectedMission.altitude}</span>
              </div>
              <div>
                <span className="text-slate-400 block">INCLINATION</span>
                <span className="text-white font-bold">{selectedMission.inclination}</span>
              </div>
              <div>
                <span className="text-slate-400 block">PAYLOAD MASS</span>
                <span className="text-cyan-300 font-bold">{selectedMission.payloadMass}</span>
              </div>
            </div>

            {/* Summary */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-widest font-semibold">
                MISSION OVERVIEW
              </h4>
              <p className="text-sm text-slate-200 leading-relaxed font-light">
                {selectedMission.summary}
              </p>
            </div>

            {/* Key Achievements */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-semibold">
                KEY ACHIEVEMENTS &amp; PAYLOAD OPERATIONAL MILESTONES
              </h4>
              <ul className="space-y-2 text-xs text-slate-200">
                {selectedMission.highlights.map((h, idx) => (
                  <li key={idx} className="flex items-start space-x-2 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Refinery Results */}
            {selectedMission.refineryResults && (
              <div className="p-4 rounded-2xl bg-cyan-950/40 border border-cyan-500/30 space-y-1">
                <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest font-bold">
                  METALLURGY &amp; ALLOY ANALYSIS RESULT
                </span>
                <p className="text-xs text-slate-200 font-mono">{selectedMission.refineryResults}</p>
              </div>
            )}

            {/* Actions */}
            <div className="pt-4 border-t border-white/10 flex justify-end space-x-4">
              <button
                onClick={() => {
                  const title = selectedMission.name;
                  setSelectedMission(null);
                  openInquiryModal(`Inquiry regarding ${title}`);
                }}
                className="px-6 py-3 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs tracking-wider uppercase transition-colors"
              >
                REQUEST MISSION PAYLOAD MANIFEST
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

