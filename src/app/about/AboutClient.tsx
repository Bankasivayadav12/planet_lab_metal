"use client";

import React from "react";
import { useContent } from "@/context/ContentContext";

export default function AboutClient() {
  const { openInquiryModal } = useContent();

  const founders = [
    {
      name: "Sri Nidhi Rajpoot",
      role: "Co-Founder, Financier & CEO",
      bio: "Sri Nidhi Rajpoot serves as Financier & CEO. She directs executive strategy, commercial investments, international space accords, and orbital station infrastructure deployment.",
      avatar: "SR",
      gradient: "from-blue-700 via-indigo-800 to-slate-900",
    },
    {
      name: "N. Prem Kumar",
      role: "Chief Metallurgist",
      bio: "N. Prem Kumar serves as Chief Metallurgist. He pioneered zero-g titanium-aluminide furnace crystallization, containerless levitation refining, and advanced orbital alloy formulation.",
      avatar: "PK",
      gradient: "from-amber-700 via-orange-800 to-stone-950",
    },
  ];

  const leadershipTeam = [
    {
      name: "Sri Nidhi Rajpoot",
      role: "Financier & CEO",
      avatar: "SR",
      gradient: "from-blue-600 via-indigo-700 to-slate-900",
    },
    {
      name: "N. Prem Kumar",
      role: "Chief Metallurgist",
      avatar: "PK",
      gradient: "from-amber-600 via-orange-700 to-stone-900",
    },
    {
      name: "Dhanunjaya",
      role: "Chief Legal Adviser",
      avatar: "DJ",
      gradient: "from-purple-700 via-indigo-900 to-slate-950",
    },

    {
      name: "Sunil Mishra",
      role: "Coordinator",
      avatar: "SM",
      gradient: "from-violet-600 via-purple-800 to-slate-950",
    },
  ];

  const foreignTeam = [
    {
      name: "Hans Müller",
      role: "VP of European Operations & Orbital Engineering",
      avatar: "HM",
      gradient: "from-blue-800 via-indigo-900 to-slate-950",
      location: "Germany / Switzerland",
    },
    {
      name: "Lukas Schmidt",
      role: "Senior Director of Microgravity Refineries",
      avatar: "LS",
      gradient: "from-emerald-800 via-teal-900 to-slate-950",
      location: "Germany",
    },
    {
      name: "Leon Fischer",
      role: "Head of Orbital Thermal & Power Systems",
      avatar: "LF",
      gradient: "from-cyan-800 via-sky-900 to-slate-950",
      location: "Switzerland",
    },
    {
      name: "Max Weber",
      role: "Lead Quantum Materials Scientist",
      avatar: "MW",
      gradient: "from-violet-800 via-purple-900 to-slate-950",
      location: "Germany",
    },
    {
      name: "Paul Wagner",
      role: "Director of Sovereign Mission Accords",
      avatar: "PW",
      gradient: "from-amber-800 via-orange-900 to-slate-950",
      location: "Austria",
    },
    {
      name: "Felix Becker",
      role: "Chief Automation & Robotics Engineer",
      avatar: "FB",
      gradient: "from-rose-800 via-pink-900 to-slate-950",
      location: "Germany",
    },
    {
      name: "Jonas Hoffmann",
      role: "Lead Spacecraft Systems Architect",
      avatar: "JH",
      gradient: "from-indigo-800 via-blue-900 to-slate-950",
      location: "Switzerland",
    },
    {
      name: "Tim Schneider",
      role: "Director of Cryogenic Fuel Systems",
      avatar: "TS",
      gradient: "from-teal-800 via-emerald-900 to-slate-950",
      location: "Germany",
    },
    {
      name: "Noah Braun",
      role: "Senior Flight Payload Specialist",
      avatar: "NB",
      gradient: "from-sky-800 via-cyan-900 to-slate-950",
      location: "Luxembourg",
    },
    {
      name: "Emil Klein",
      role: "European Logistics & Infrastructure Lead",
      avatar: "EK",
      gradient: "from-purple-800 via-violet-900 to-slate-950",
      location: "Germany",
    },
  ];

  return (
    <div className="pt-24 space-y-0 bg-[#050608] text-white">
      {/* SECTION 1: HERO (DARK SPACE WITH SUBTLE GRID) */}
      <section className="relative py-24 px-6 sm:px-8 border-b border-white/10 overflow-hidden bg-[#050608]">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-25" />

        <div className="max-w-7xl mx-auto relative z-10 space-y-4">
          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight max-w-4xl leading-tight text-white">
            Meet the Team
          </h1>
        </div>
      </section>

      {/* SECTION 2: UNPARALLELED LEO EXPERTISE (WHITE LIGHT) */}
      <section className="py-24 px-6 sm:px-8 bg-white text-gray-900 border-b border-gray-200">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="space-y-3">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
              Unparalleled LEO Expertise
            </h2>
            <div className="w-16 h-0.5 bg-orange-500" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-xs sm:text-sm text-gray-700 leading-relaxed">
            <div className="lg:col-span-6 space-y-4">
              <p>
                Our team has been involved with every International Space
                Station mission since the program&apos;s inception.
              </p>
              <p>
                We are making the possibilities of low-Earth Orbit accessible to
                visionary governments, researchers, manufacturers, and
                individuals. Because we believe microgravity is the most
                promising environment for innovation and problem-solving since
                the Internet.
              </p>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <p>
                In 2022, we successfully completed the first private mission to
                the International Space Station and we are currently building
                the first commercial space station; ensuring a brighter future
                for everyone on Earth and setting our course for life beyond it.
              </p>
              <p>
                The leadership team includes world-class, specialized expertise
                in commercial utilization of microgravity, on-orbit operations,
                astronaut training, space medicine, space system
                architecture/design/development, engineering, marketing, and
                law.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: FOUNDERS (WHITE LIGHT) */}
      <section className="py-24 px-6 sm:px-8 bg-[#f5f5f7] text-gray-900 border-b border-gray-200">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="space-y-3">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
              Founders
            </h2>
            <div className="w-16 h-0.5 bg-orange-500" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-4 text-xs sm:text-sm text-gray-700 leading-relaxed pt-2">
              <p className="font-bold text-gray-900 text-base">
                Founded by Sri Nidhi Rajpoot and N. Prem Kumar.
              </p>
              <p>
                <strong className="text-gray-900">Sri Nidhi Rajpoot</strong> is
                the Financier &amp; CEO. She previously directed commercial
                engineering services, spaceflight mission investments, and
                commercial utilization of low-Earth orbit.
              </p>
              <p>
                <strong className="text-gray-900">N. Prem Kumar</strong> is the
                Chief Metallurgist. He previously directed microgravity plasma
                arc furnace engineering, supervising orbital station materials
                processing and titanium crystallization.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {founders.map((founder, idx) => (
                <div
                  key={idx}
                  className="rounded-3xl bg-white border border-gray-200 p-6 space-y-4 shadow-xl hover:shadow-2xl transition-all duration-300 group"
                >
                  <div
                    className={`h-64 w-full rounded-2xl bg-gradient-to-br ${founder.gradient} text-white flex flex-col items-center justify-center p-6 text-center space-y-3 shadow-md group-hover:scale-[1.02] transition-transform`}
                  >
                    <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-2xl font-black font-mono shadow-inner">
                      {founder.avatar}
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-white">
                        {founder.name}
                      </h3>
                      <p className="text-xs font-mono text-cyan-300 uppercase font-semibold pt-1">
                        {founder.role}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-gray-600 leading-relaxed font-light">
                    {founder.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: FOREIGN / INTERNATIONAL OPERATIONS TEAM GRID */}
      <section
        id="foreign-team"
        className="py-24 px-6 sm:px-8 bg-[#f8fafc] text-gray-900 border-b border-gray-200"
      >
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="space-y-3">
            <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-mono font-bold uppercase tracking-widest">
              EUROPEAN &amp; INTERNATIONAL OPERATIONS
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
              Foreign &amp; International Engineering Team
            </h2>
            <div className="w-16 h-0.5 bg-blue-600" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {foreignTeam.map((member, idx) => (
              <div
                key={idx}
                className="space-y-3 group cursor-pointer"
                onClick={() =>
                  openInquiryModal(`International Team Inquiry: ${member.name}`)
                }
              >
                <div
                  className={`relative h-64 w-full rounded-2xl overflow-hidden bg-gradient-to-br ${member.gradient} shadow-md flex flex-col items-center justify-center p-5 text-center border border-gray-200 group-hover:scale-105 transition-transform duration-500`}
                >
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white font-mono font-black text-xl shadow-lg">
                    {member.avatar}
                  </div>
                  <div className="pt-3 space-y-1">
                    <h3 className="text-base font-black text-white">
                      {member.name}
                    </h3>
                    <p className="text-[11px] font-mono text-cyan-200 uppercase font-semibold leading-tight">
                      {member.role}
                    </p>
                  </div>
                </div>

                <div className="space-y-0.5">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-black text-gray-900 group-hover:text-blue-600 transition-colors">
                      {member.name}
                    </h4>
                  </div>
                  <p className="text-xs text-gray-500 font-mono uppercase">
                    {member.role}
                  </p>
                  <p className="text-[10px] font-mono text-blue-600 font-bold uppercase">
                    {member.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: LEADERSHIP TEAM GRID */}
      <section
        id="team"
        className="py-24 px-6 sm:px-8 bg-white text-gray-900 border-b border-gray-200"
      >
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="space-y-3">
            <div className="inline-block px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-mono font-bold uppercase tracking-widest">
              EXECUTIVE LEADERSHIP &amp; OPERATIONS
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
              Leadership Team
            </h2>
            <div className="w-16 h-0.5 bg-orange-500" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadershipTeam.map((member, idx) => (
              <div
                key={idx}
                className="space-y-3 group cursor-pointer"
                onClick={() =>
                  openInquiryModal(
                    `Executive Leadership Inquiry: ${member.name}`,
                  )
                }
              >
                <div
                  className={`relative h-72 w-full rounded-2xl overflow-hidden bg-gradient-to-br ${member.gradient} shadow-md flex flex-col items-center justify-center p-6 text-center border border-gray-200 group-hover:scale-105 transition-transform duration-500`}
                >
                  <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white font-mono font-black text-2xl shadow-lg">
                    {member.avatar}
                  </div>
                  <div className="pt-4 space-y-1">
                    <h3 className="text-lg font-black text-white">
                      {member.name}
                    </h3>
                    <p className="text-xs font-mono text-cyan-200 uppercase font-semibold">
                      {member.role}
                    </p>
                  </div>
                </div>

                <div className="space-y-0.5">
                  <h4 className="text-sm font-black text-gray-900 group-hover:text-orange-500 transition-colors">
                    {member.name}
                  </h4>
                  <p className="text-xs text-gray-500 font-mono uppercase">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: CONTACT EXECUTIVE LEADERSHIP (WHITE LIGHT) */}
      <section className="py-20 px-6 sm:px-8 bg-[#e8e9ec] text-gray-900 text-center border-t border-gray-200">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-gray-900">
            Connect with Executive Leadership &amp; International Offices
          </h2>
          <p className="text-sm text-gray-600 font-normal">
            For strategic partnerships, sovereign accords, and commercial
            inquiry across North America &amp; Europe.
          </p>
          <button
            onClick={() =>
              openInquiryModal(
                "Executive Leadership & International Direct Contact",
              )
            }
            className="px-9 py-4 rounded-full bg-black hover:bg-orange-600 text-white font-bold text-xs tracking-wider uppercase transition-colors shadow-lg"
          >
            Contact Executive &amp; International Leadership
          </button>
        </div>
      </section>
    </div>
  );
}
