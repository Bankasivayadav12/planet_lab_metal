"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useContent } from "@/context/ContentContext";
import {
  Sparkles,
  Layers,
  Cpu,
  Zap,
  Microscope,
  Dna,
  Binary,
  Box,
  Activity,
  Check,
} from "lucide-react";

export default function InSpaceManufacturingPage() {
  const { openInquiryModal } = useContent();

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    message: "",
    industry: "Advanced Materials",
    subscribe: true,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const manufacturingApplications = [
    {
      title: "Semiconductors",
      icon: Cpu,
      image: "/images/advanced_crystal_alloy.png",
      desc: "Defect-free silicon carbide and gallium nitride wafers synthesized in microgravity.",
    },
    {
      title: "Optical Fibers",
      icon: Zap,
      image: "/images/hero_space_station_hd.png",
      desc: "Ultra-low-loss ZBLAN fluoride optical fiber production free from micro-crystallization.",
    },
    {
      title: "Nanomaterials",
      icon: Box,
      image: "/images/orbital_metallurgy.png",
      desc: "High-purity carbon nanotubes and graphene structures for next-gen electronics.",
    },
    {
      title: "Regenerative Medicine",
      icon: Microscope,
      image: "/images/lunar_metals_facility.png",
      desc: "3D cellular tissue scaffolding and organoid growth without gravity distortion.",
    },
    {
      title: "Biologics",
      icon: Dna,
      image: "/images/planet_labs_hero.png",
      desc: "High-concentration monoclonal antibody crystallization for targeted therapies.",
    },
    {
      title: "Medical Devices",
      icon: Activity,
      image: "/images/axemu_spacesuit.png",
      desc: "Custom titanium alloy joint implants and biocompatible orthopedic hardware.",
    },
    {
      title: "Disease Modeling",
      icon: Binary,
      image: "/images/advanced_crystal_alloy.png",
      desc: "Accelerated cellular aging models for cardiovascular and neurodegenerative research.",
    },
    {
      title: "3D Bioprinting",
      icon: Layers,
      image: "/images/orbital_metallurgy.png",
      desc: "Zero-g bio-ink printing of vascularized human tissue constructs and heart valves.",
    },
  ];

  return (
    <div className="pt-24 space-y-0 bg-[#050608] text-white">
      {/* HERO */}
      <section className="relative py-24 px-6 sm:px-8 border-b border-white/10 overflow-hidden bg-[#050608]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/advanced_crystal_alloy.png"
            alt="In-Space Manufacturing"
            fill
            className="object-cover opacity-35"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050608] via-[#050608]/75 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 space-y-6">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-widest uppercase">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>PLANET LABS & METALS • MANUFACTURING PLATFORM</span>
          </div>

          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight max-w-4xl leading-tight text-white">
            In-Space Manufacturing
          </h1>
        </div>
      </section>

      {/* IMAGINE THE POSSIBILITIES WITHOUT g */}
      <section className="py-24 px-6 sm:px-8 bg-white text-gray-900 border-b border-gray-200">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-gray-900 leading-tight">
              Imagine the Possibilities without <span className="text-orange-500 font-black">g</span>
            </h2>
            <div className="w-16 h-0.5 bg-orange-500" />
          </div>

          <p className="text-base sm:text-lg text-gray-800 font-medium leading-relaxed max-w-4xl">
            In-space manufacturing unlocks the benefits of microgravity to solve industry challenges on Earth. Planet Labs & Metals is creating an innovation platform for the in-space production of advanced materials, titanium alloys, and biomedical products that support the development of a robust commercial economy in low-Earth orbit and beyond.
          </p>

          <div className="space-y-3 pt-4 border-t border-gray-200">
            <h3 className="text-lg font-bold text-gray-900">Microgravity Advantages</h3>
            <p className="text-xs sm:text-sm text-gray-600 font-normal leading-relaxed max-w-4xl">
              The microgravity environment provides an absence of sedimentation, convection, and buoyancy, as well as the dominance of material surface tension and diffusive properties. Planet Labs & Metals dedicated Research & Manufacturing Facility provides state-of-the-art capabilities to develop products and processes that cannot be created under the influence of gravity.
            </p>
            <p className="text-xs sm:text-sm text-gray-600 font-normal leading-relaxed max-w-4xl">
              With unprecedented access to microgravity and the vacuum of space, Planet Labs & Metals has the potential to change the paradigm across industries, including semiconductors, energy, optical fibers, titanium alloys, and biotechnology.
            </p>
          </div>
        </div>
      </section>

      {/* 8 IN-SPACE MANUFACTURING APPLICATIONS */}
      <section className="py-24 px-6 sm:px-8 bg-[#f5f5f7] border-b border-gray-200">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="space-y-3">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
              In-Space Manufacturing Applications
            </h2>
            <div className="w-16 h-0.5 bg-orange-500" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {manufacturingApplications.map((app, idx) => (
              <div
                key={idx}
                onClick={() => openInquiryModal(`Manufacturing Application: ${app.title}`)}
                className="relative h-48 rounded-2xl overflow-hidden shadow-lg border border-gray-200 group cursor-pointer"
              >
                <Image
                  src={app.image}
                  alt={app.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-lg font-extrabold text-white drop-shadow-md">
                    {app.title}
                  </h3>
                  <p className="text-[11px] text-gray-300 font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 pt-1 line-clamp-2">
                    {app.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE BANNER */}
      <section className="relative py-28 px-6 sm:px-8 bg-black text-white border-t border-white/10 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 space-y-8">
            <blockquote className="text-2xl sm:text-4xl font-extrabold text-white leading-tight font-serif italic drop-shadow-lg">
              &ldquo;This partnership paves the way for an entire commercial industry on board Planet Labs & Metals station that will enable our scientific research teams to advance biomanufacturing and zero-gravity alloy refining...&rdquo;
            </blockquote>
            <p className="font-bold text-white text-sm font-mono">Anthony Atala, MD — Director of Wake Forest Institute for Regenerative Medicine</p>
          </div>
        </div>
      </section>

      {/* IN-SPACE MANUFACTURING UPDATES */}
      <section className="py-24 px-6 sm:px-8 bg-white text-gray-900 border-b border-gray-200">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-black text-gray-900">In-Space Manufacturing Updates</h2>
            <div className="w-16 h-0.5 bg-orange-500" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              onClick={() => openInquiryModal("Press Update: In-Space Production Technologies")}
              className="space-y-4 group cursor-pointer"
            >
              <div className="relative h-64 w-full rounded-3xl overflow-hidden shadow-lg bg-slate-900 border border-gray-200">
                <Image
                  src="/images/hero_space_station_hd.png"
                  alt="Manufacturing Update 1"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-orange-500 transition-colors leading-snug">
                Planet Labs & Metals and Partners Demonstrate Commitment to Emerging Technologies for In-Space Production and Manufacturing in Low-Earth Orbit
              </h3>
            </div>

            <div
              onClick={() => openInquiryModal("Press Update: Pressurized Modules Accord")}
              className="space-y-4 group cursor-pointer"
            >
              <div className="relative h-64 w-full rounded-3xl overflow-hidden shadow-lg bg-slate-900 border border-gray-200">
                <Image
                  src="/images/planet_labs_hero.png"
                  alt="Manufacturing Update 2"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-orange-500 transition-colors leading-snug">
                Commercial Space Industry Partners Sign Agreement to Provide Pressurized Manufacturing Modules for Planet Labs & Metals Station
              </h3>
            </div>
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
              Space presents opportunities that are currently unimaginable in gravity&apos;s bounds. How might microgravity help you forge a breakthrough in your research or gain a competitive edge in your product development?
            </p>

            <p className="text-xs sm:text-sm text-gray-600 font-normal leading-relaxed">
              Planet Labs & Metals provides more flexible and lower-cost access to the revolutionary potential of microgravity than ever before.
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
                  Our in-space manufacturing engineers will review your project inquiry and connect with you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-black text-gray-900">
                    Contact the Planet Labs & Metals team today.
                  </h3>
                  <p className="text-xs text-gray-600">
                    Interested in sending your in-space manufacturing project to space? Contact us below.
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
                    Which industry describes the area you currently work in?*
                  </label>
                  {["Advanced Materials", "Energy", "Biomedical", "Other"].map((ind, idx) => (
                    <label key={idx} className="flex items-center space-x-3 text-xs text-gray-700 cursor-pointer">
                      <input
                        type="radio"
                        name="industry"
                        checked={formData.industry === ind}
                        onChange={() => setFormData({ ...formData, industry: ind })}
                        className="w-4 h-4 text-orange-500 border-gray-300 focus:ring-orange-500"
                      />
                      <span>{ind}</span>
                    </label>
                  ))}
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-700">Tell us more:</label>
                  <textarea
                    rows={3}
                    required
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
