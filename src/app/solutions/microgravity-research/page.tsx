"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useContent } from "@/context/ContentContext";
import {
  Sparkles,
  Atom,
  Activity,
  Globe,
  Layers,
  FileText,
  Database,
  Check,
} from "lucide-react";

export default function MicrogravityResearchPage() {
  const { openInquiryModal } = useContent();

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    message: "",
    interests: [] as string[],
    subscribe: true,
  });

  const handleInterestToggle = (interest: string) => {
    setFormData((prev) => {
      const exists = prev.interests.includes(interest);
      if (exists) {
        return { ...prev, interests: prev.interests.filter((i) => i !== interest) };
      } else {
        return { ...prev, interests: [...prev.interests, interest] };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const verticalCards = [
    {
      title: "Zero-Gravity Titanium Alloys",
      icon: Layers,
      image: "/images/orbital_metallurgy.png",
      desc: "Synthesizing hyper-pure titanium-aluminide structures free from gravitational settling.",
    },
    {
      title: "High-Purity Plasma Refining",
      icon: Activity,
      image: "/images/lunar_metals_facility.png",
      desc: "Vacuum plasma arc furnaces producing defect-free metallic crystals in orbit.",
    },
    {
      title: "Physical & Material Sciences",
      icon: Atom,
      image: "/images/advanced_crystal_alloy.png",
      desc: "Containerless levitation processing and semiconductor alloy crystallization.",
    },
    {
      title: "Orbital Data & Remote Sensing",
      icon: Globe,
      image: "/images/hero_space_station_hd.png",
      desc: "Hyperspectral earth observation and automated orbital data infrastructure.",
    },
  ];

  const microgravityEffects = [
    {
      bold: "Absence of buoyancy and sedimentation",
      text: "so dense metal atoms don't settle during cooling, producing perfectly uniform crystal lattices throughout the alloy.",
    },
    {
      bold: "Containerless levitation processing",
      text: "prevents molten metal contact with crucible walls, completely eliminating container impurities and stress points.",
    },
    {
      bold: "Loss of gravity-driven thermal convection",
      text: "allows quiet liquid-metal solidification without turbulent mixing or thermal micro-flaws.",
    },
    {
      bold: "Diffusion-dominated crystal growth",
      text: "enables pure molecular diffusion to govern alloy formation, yielding ultra-high strength-to-weight ratios.",
    },
    {
      bold: 'Loss of "directionality"',
      text: "provides symmetric 3D crystallization without gravitational strain or structural sagging during cooling.",
    },
    {
      bold: "No hydrostatic pressure gradient",
      text: "ensures uniform pressure distribution across liquid metals regardless of melt depth or chamber volume.",
    },
    {
      bold: "Capillary forces & surface tension control",
      text: "allows precise micro-mold filling and nanostructure casting unattainable under 1G Earth gravity.",
    },
    {
      bold: "Uniform surface wetting & coating",
      text: "delivers defect-free protective metal coatings across complex aerospace components.",
    },
  ];

  const missionResearchList = [
    {
      id: "pl-1",
      title: "Planet Labs Mission 1",
      code: "PL-1",
      image: "/images/planet_labs_hero.png",
      desc: "25+ zero-g titanium alloy crystallization and metallurgy experiments.",
    },
    {
      id: "pl-2",
      title: "Planet Labs Mission 2",
      code: "PL-2",
      image: "/images/lunar_metals_facility.png",
      desc: "Pioneering microgravity plasma furnace operations and stem cell research.",
    },
    {
      id: "pl-3",
      title: "Planet Labs Mission 3",
      code: "PL-3",
      image: "/images/orbital_metallurgy.png",
      desc: "European research consortium testing advanced crystal growth.",
    },
    {
      id: "pl-4",
      title: "Planet Labs Mission 4",
      code: "PL-4",
      image: "/images/advanced_crystal_alloy.png",
      desc: "Expanding international scientific partnerships with global research nations.",
    },
  ];

  return (
    <div className="pt-24 space-y-0 bg-[#050608] text-white">
      {/* HERO */}
      <section className="relative py-24 px-6 sm:px-8 border-b border-white/10 overflow-hidden bg-[#050608]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/orbital_metallurgy.png"
            alt="Microgravity Metallurgy Research"
            fill
            className="object-cover opacity-35"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050608] via-[#050608]/75 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 space-y-6">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-widest uppercase">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>PLANET LABS & METALS • RESEARCH SOLUTIONS</span>
          </div>

          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight max-w-4xl leading-tight text-white">
            Microgravity Research
          </h1>
        </div>
      </section>

      {/* ZERO GRAVITY. INFINITE POSSIBILITIES. */}
      <section className="py-24 px-6 sm:px-8 bg-white text-gray-900 border-b border-gray-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-gray-900 leading-tight">
              Zero Gravity. <span className="text-orange-500">Infinite Possibilities.</span>
            </h2>

            <p className="text-base sm:text-lg text-gray-800 font-medium leading-relaxed">
              Zero-gravity metal research leads to novel discoveries about titanium-aluminide crystallization, hyper-pure alloys, and how industrial processes perform without gravitational sedimentation—translating into revolutionary advances for aerospace, medical implants, and defense on Earth.
            </p>

            <p className="text-xs sm:text-sm text-gray-600 font-normal leading-relaxed">
              Planet Labs & Metals operates orbital foundry platforms in low-Earth orbit. In the absence of gravity, liquid metals freeze into immaculate crystalline structures without thermal convection flaws. We invite research institutions, commercial defense contractors, and global space agencies to harness the full opportunities of orbital metallurgy.
            </p>

            <div className="pt-4">
              <button
                onClick={() => openInquiryModal("Metals Breakthrough Consultation")}
                className="px-8 py-3.5 rounded-full border border-gray-400 text-gray-900 font-semibold text-xs tracking-wider uppercase hover:bg-black hover:text-white transition-all duration-300 shadow-sm"
              >
                Start Your Metallurgy Breakthrough
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 relative h-[380px] sm:h-[450px] w-full rounded-3xl overflow-hidden shadow-2xl border border-gray-200 bg-slate-900">
            <Image
              src="/images/advanced_crystal_alloy.png"
              alt="Orbital Metal Lab"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* 4 VERTICAL CARDS */}
      <section className="py-20 px-6 sm:px-8 bg-[#f5f5f7] border-b border-gray-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {verticalCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="relative h-[480px] rounded-3xl overflow-hidden shadow-xl border border-gray-200/80 group cursor-pointer"
                onClick={() => openInquiryModal(`Research Vertical: ${card.title}`)}
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white shadow-2xl group-hover:scale-110 group-hover:border-orange-400 transition-all duration-300">
                    <Icon className="w-8 h-8 text-white group-hover:text-orange-400 transition-colors" />
                  </div>
                  <h3 className="text-xl font-black text-white leading-snug drop-shadow-md">
                    {card.title}
                  </h3>
                </div>

                <div className="absolute bottom-6 left-6 right-6 text-center text-xs text-gray-300 font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {card.desc}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* THE MICROGRAVITY METALLURGY EFFECT */}
      <section className="py-24 px-6 sm:px-8 bg-white text-gray-900 border-b border-gray-200">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="space-y-4">
            <span className="text-xs font-mono tracking-widest text-orange-600 font-bold uppercase block">
              THE MICROGRAVITY METALLURGY EFFECT
            </span>
            <p className="text-sm sm:text-base text-gray-700 font-normal leading-relaxed max-w-4xl">
              For metallurgists, materials engineers, and industrial innovators, the persistent microgravity environment in space provides a unique opportunity to synthesize defect-free metal matrices with atomic-level precision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 pt-4">
            {microgravityEffects.map((item, idx) => (
              <div key={idx} className="space-y-1 text-xs sm:text-sm text-gray-700 leading-relaxed border-t border-gray-200 pt-4">
                <span className="font-bold text-gray-900 pr-1">{item.bold}</span>
                <span className="font-normal">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE BANNER */}
      <section className="relative py-28 px-6 sm:px-8 bg-black text-white border-t border-white/10 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
          <Image
            src="/images/footer_moon_earth.png"
            alt="Earth View from Orbit"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 space-y-8">
            <blockquote className="text-2xl sm:text-4xl font-extrabold text-white leading-tight font-serif italic drop-shadow-lg">
              &ldquo;Ninety-five percent of our zero-gravity metal synthesis is engineered to revolutionize structural materials on Earth. Space is our ultimate metallurgy laboratory.&rdquo;
            </blockquote>

            <div className="space-y-1 font-mono text-xs text-slate-300 border-l-2 border-orange-500 pl-4">
              <p className="font-bold text-white text-sm">Planet Labs & Metals Research Directorate</p>
              <p className="text-slate-400">Chief Metallurgy & Material Science Advisory Board</p>
            </div>
          </div>
        </div>
      </section>

      {/* VIEW THE RESEARCH & ACADEMIC ALLIANCE */}
      <section className="py-24 px-6 sm:px-8 bg-[#f5f5f7] text-gray-900 border-t border-b border-gray-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-black text-gray-900">View the Metallurgy Research</h2>
              <div className="w-16 h-0.5 bg-orange-500" />
            </div>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div
                onClick={() => openInquiryModal("Access Metallurgy Database")}
                className="relative h-32 rounded-2xl bg-slate-950 p-4 border border-gray-800 flex flex-col justify-end shadow-md hover:border-orange-500 cursor-pointer transition-colors group"
              >
                <Database className="w-5 h-5 text-gray-400 group-hover:text-orange-400 mb-auto" />
                <span className="text-xs font-mono font-bold tracking-wider text-white uppercase group-hover:text-orange-400">
                  METALLURGY DATABASE
                </span>
              </div>

              <div
                onClick={() => openInquiryModal("Access Publication Database")}
                className="relative h-32 rounded-2xl bg-slate-950 p-4 border border-gray-800 flex flex-col justify-end shadow-md hover:border-orange-500 cursor-pointer transition-colors group"
              >
                <FileText className="w-5 h-5 text-gray-400 group-hover:text-orange-400 mb-auto" />
                <span className="text-xs font-mono font-bold tracking-wider text-white uppercase group-hover:text-orange-400">
                  PUBLICATION DATABASE
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-black text-gray-900">Academic & Industry Alliance</h2>
              <div className="w-16 h-0.5 bg-orange-500" />
            </div>

            <p className="text-xs sm:text-sm text-gray-600 font-normal leading-relaxed">
              Through our Metallurgy Alliance, Planet Labs & Metals leverages its proven capabilities working with university labs and industrial partners around the world to fly commercial payloads to orbit.
            </p>

            <div className="pt-2">
              <button
                onClick={() => openInquiryModal("Metallurgy Alliance Application")}
                className="px-6 py-3 rounded-full border border-gray-400 text-gray-900 text-xs font-semibold uppercase tracking-wider hover:bg-black hover:text-white transition-colors"
              >
                Learn more about the Metallurgy Alliance
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION RESEARCH ROW */}
      <section className="py-24 px-6 sm:px-8 bg-white text-gray-900 border-b border-gray-200">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-black text-gray-900">Planet Labs Mission Research</h2>
            <div className="w-16 h-0.5 bg-orange-500" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {missionResearchList.map((m) => (
              <div
                key={m.id}
                className="space-y-3 group cursor-pointer"
                onClick={() => openInquiryModal(`Mission Research Details: ${m.title}`)}
              >
                <div className="relative h-44 w-full rounded-2xl overflow-hidden shadow-md bg-slate-900 border border-gray-200">
                  <Image
                    src={m.image}
                    alt={m.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-gray-900 group-hover:text-orange-500 transition-colors">
                    {m.title}
                  </h3>
                  <span className="text-xs font-mono font-bold text-gray-500 uppercase">{m.code}</span>
                </div>
                <p className="text-xs text-gray-600 font-light leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* START YOUR BREAKTHROUGH CONTACT FORM */}
      <section className="py-24 px-6 sm:px-8 bg-[#e8e9ec] text-gray-900 border-b border-gray-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight">
              Start Your Breakthrough
            </h2>

            <p className="text-sm sm:text-base text-gray-700 font-medium leading-relaxed">
              Space presents material opportunities that are currently unimaginable in gravity&apos;s bounds. How might microgravity metal synthesis help you forge a breakthrough in your research?
            </p>

            <p className="text-xs sm:text-sm text-gray-600 font-normal leading-relaxed">
              Planet Labs & Metals provides flexible and lower-cost access to the revolutionary potential of orbital metallurgy than ever before.
            </p>
          </div>

          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl shadow-2xl border border-gray-200">
            {formSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Thank You for Your Submission!</h3>
                <p className="text-sm text-gray-600 max-w-md mx-auto">
                  Our research specialists will review your inquiry and connect with you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-black text-gray-900">
                    Contact the Planet Labs & Metals team today.
                  </h3>
                  <p className="text-xs text-gray-600">
                    Interested in sending your project to space? Contact us below.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-700">First name*</label>
                    <input
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-700">Last name*</label>
                    <input
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-700">
                    Company Name / Organizational Affiliation*
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-700">Email*</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-700">Phone number</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <label className="text-xs font-bold text-gray-800 block">
                    What is your research/area of interest (check all that apply)?*
                  </label>
                  {[
                    "Zero-gravity metallurgy & titanium refining",
                    "Advanced crystalline materials & semiconductors",
                    "Earth observation & remote sensing",
                    "Human research and health applications",
                    "Physical sciences (quantum, fluids, astrophysics, plasmas)",
                    "Other",
                  ].map((option, idx) => (
                    <label key={idx} className="flex items-center space-x-3 text-xs text-gray-700 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.interests.includes(option)}
                        onChange={() => handleInterestToggle(option)}
                        className="w-4 h-4 text-orange-500 rounded border-gray-300 focus:ring-orange-500"
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-700">Tell us more:</label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-fit px-8 py-3.5 rounded-lg bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md"
                >
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
