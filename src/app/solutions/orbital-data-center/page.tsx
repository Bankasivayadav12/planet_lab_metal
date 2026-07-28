"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useContent } from "@/context/ContentContext";
import {
  Server,
  Lock,
  RefreshCw,
  Globe,
  TrendingUp,
  Leaf,
  Zap,
  ArrowRight,
  ExternalLink,
  Check,
  Sparkles,
} from "lucide-react";

export default function OrbitalDataCenterPage() {
  const { openInquiryModal } = useContent();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const timelineSectionRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activatedIndices, setActivatedIndices] = useState<boolean[]>([true, false, false, false, false]);
  const [scrollProgress, setScrollProgress] = useState(0);

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    source: "",
    message: "",
    subscribe: true,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollContainerRef.current) return;

      const windowHeight = window.innerHeight;
      const activationPoint = windowHeight * 0.75;

      const newActivated = itemRefs.current.map((ref, idx) => {
        if (idx === 0) return true;
        if (!ref) return false;
        const rect = ref.getBoundingClientRect();
        return rect.top <= activationPoint;
      });

      setActivatedIndices(newActivated);

      if (timelineSectionRef.current) {
        const rect = timelineSectionRef.current.getBoundingClientRect();
        const totalHeight = rect.height;
        const currentTop = windowHeight - rect.top;
        const progress = Math.min(Math.max((currentTop / totalHeight) * 100, 15), 100);
        setScrollProgress(progress);
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      handleScroll();
    }
    return () => {
      if (container) container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const odcValueDrivers = [
    {
      step: "01",
      icon: Zap,
      title: "Faster Insights",
      description:
        "In-orbit processing delivers low-latency analytics and real-time decision making without constant downlinking delays. Transmit actionable intelligence directly to ground stations within seconds.",
      image: "/images/hero_space_station_hd.png",
      accent: "text-purple-600 border-purple-500/40 bg-purple-50",
      isLightBg: false,
    },
    {
      step: "02",
      icon: Lock,
      title: "Unmatched Security",
      description:
        "Physically isolated infrastructure with end-to-end quantum encryption and zero-trust architecture safeguards critical defense and sovereign mission data beyond terrestrial reach.",
      image: "/images/orbital_data_center_hd.png",
      accent: "text-purple-400 border-purple-500/40 bg-purple-500/10",
      isLightBg: true,
    },
    {
      step: "03",
      icon: RefreshCw,
      title: "Continuous Resilience",
      description:
        "Immune to terrestrial outages, power grid failures, and natural disasters, ensuring uninterrupted 99.999% cloud compute uptime during ground-based disruptions.",
      image: "/images/orbital_metallurgy.png",
      accent: "text-cyan-400 border-cyan-500/40 bg-cyan-500/10",
      isLightBg: false,
    },
    {
      step: "04",
      icon: Globe,
      title: "Global Data Independence",
      description:
        "Operates beyond national jurisdictions to support sovereign, borderless data management, legal compliance, and international security protocols.",
      image: "/images/advanced_crystal_alloy.png",
      accent: "text-blue-600 border-blue-500/40 bg-blue-50",
      isLightBg: true,
    },
    {
      step: "05",
      icon: TrendingUp,
      title: "Infinite Scalability",
      description:
        "Powered by limitless solar radiation energy and modular orbital station architecture for sustainable, self-expanding compute node capacity.",
      image: "/images/lunar_metals_facility.png",
      accent: "text-emerald-400 border-emerald-500/40 bg-emerald-500/10",
      isLightBg: false,
    },
    {
      step: "06",
      icon: Leaf,
      title: "Minimal Environmental Impact",
      description:
        "Expands global compute power without the massive fossil energy, billion-gallon water cooling demand, and land footprint of Earth-based data centers.",
      image: "/images/planet_labs_hero.png",
      accent: "text-teal-600 border-teal-500/40 bg-teal-50",
      isLightBg: true,
    },
  ];

  const timelineEvents = [
    {
      headline: "Operationalized the first commercial cloud device in space",
      paragraphs: [
        "In 2022, as a part of the Ax-1 Mission, we launched and operationalized an AWS Snowcone device onboard the International Space Station. For the first time, commercial AI inferencing was successfully conducted in-orbit.",
      ],
      linkText: "AWS: HOW WE SENT AN AWS SNOWCONE INTO ORBIT",
      image: "/images/planet_labs_hero.png",
      bullets: [],
      badge: "PL-1 HERITAGE MISSION",
    },
    {
      headline:
        "Proved operational reliability of commercial off-the-shelf technology in low-Earth orbit",
      paragraphs: [
        "Utilizing Quantinuum's Quantum Origin, we established the first quantum-secure link between the International Space Station and Earth by sending the message \"Hello Quantum World\" back to the ground encrypted with post-quantum keys seeded using the world's first commercially available cryptographic key generation platform based on verifiable quantum randomness.",
        "This method safeguards against current and future threats to data and infrastructure in space and furthers the advancement of a quantum enabled space economy in low-Earth orbit.",
      ],
      linkText: "DOE: BUILDING THE UNHACKABLE UNIVERSE",
      image: null,
      bullets: [],
      badge: "QUANTUM ENCRYPTION",
    },
    {
      headline:
        "Demonstrated initial ODC capabilities on the International Space Station",
      paragraphs: [
        "Planet Labs & Metals deployed Data Center Unit-1 (AxDCU-1), a data processing prototype powered by Red Hat Device Edge, onboard the International Space Station in the fall of 2025.",
        "AxDCU-1 will conduct test applications on the orbiting lab to demonstrate initial ODC capabilities as a part of Planet Labs & Metals' ongoing work to develop era-defining space infrastructure.",
        "The compute unit can run cloud computing, artificial intelligence and machine learning (AI/ML), data fusion and space cybersecurity applications utilizing Earth-independent cloud storage and edge processing infrastructure.",
      ],
      linkText: null,
      image: "/images/orbital_metallurgy.png",
      bullets: [],
      badge: "RED HAT EDGE PAYLOAD",
    },
    {
      headline:
        "Launched the first dedicated data center nodes to low-Earth orbit",
      paragraphs: [
        "The first two orbital data center nodes successfully launched to low-Earth orbit on January 11, 2026.",
        "These ODC nodes will lay the foundation for space-based cloud computing, addressing growing global needs for secure, scalable, and cloud-enabled data storage and processing directly to satellites, constellations, and other spacecraft.",
        "Launched with the first tranche of Kepler Communications' optical relay network constellation, these nodes build on our collaboration with the integration of Optical Intersatellite Links (OISLs), enabling high-speed data connections directly between ODCs and commercial and government spacecraft and networks on orbit.",
      ],
      linkText: "READ MORE",
      image: null,
      bullets: [
        "2.5 GIGABYTES PER SECOND-CAPABLE OPTICAL LINKS",
        "COMPATIBLE WITH SPACE DEVELOPMENT AGENCY TRANCHE 1 OPTICAL COMMUNICATION STANDARDS",
        "INTEROPERABLE WITH NATIONAL SECURITY, GOVERNMENT, AND COMMERCIAL NETWORKS",
      ],
      badge: "JANUARY 11, 2026 LAUNCH",
    },
    {
      headline: "2030 & Beyond",
      paragraphs: [
        "Planet Labs & Metals is committed to expanding our ODC network in the years to come, significantly increasing capacity and capability from kilowatts to megawatts of processing power.",
        "Built with commercial-off-the-shelf hardware, running industry-standard containerized operating systems, and connected over existing radio communications and next-generation optical relay meshes, an entire network of scalable and commercial cloud computing resources are made available to space and terrestrial users, driving results for the benefit of every human, everywhere.",
      ],
      linkText: "WE ARE THE FUTURE",
      image: "/images/hero_space_station_hd.png",
      bullets: [],
      badge: "MEGAWATT EXPANSION",
    },
  ];

  return (
    <div ref={scrollContainerRef} className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth bg-[#020306]">
      {/* SECTION 1: DARK HERO SECTION */}
      <section className="snap-start snap-always h-screen w-full px-6 sm:px-8 border-b border-white/10 overflow-hidden bg-[#020306] text-white flex items-center relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/orbital_data_center_hd.png"
            alt="Orbital Data Centers"
            fill
            className="object-cover opacity-45 scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020306] via-[#020306]/75 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 space-y-8 pt-16">
          <div className="inline-flex items-center space-x-3 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/40 text-purple-300 text-xs font-mono tracking-widest uppercase shadow-lg">
            <Sparkles className="w-4 h-4 text-orange-400" />
            <span>PLANET LABS & METALS • DIGITAL INFRASTRUCTURE</span>
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight max-w-5xl leading-tight text-white">
            Orbital Data <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400">Centers</span>
          </h1>

          <p className="text-lg sm:text-2xl text-slate-300 font-light max-w-3xl leading-relaxed">
            Powering the future of data processing and storage, AI, cybersecurity, and digital sovereignty in space.
          </p>

          <div className="flex flex-wrap gap-5 pt-4">
            <button
              onClick={() => openInquiryModal("Talk to an ODC Expert")}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-orange-500 hover:from-purple-500 hover:to-orange-400 text-white font-bold text-xs tracking-widest uppercase transition-all shadow-xl hover:scale-105"
            >
              Talk to an ODC Expert
            </button>
            <a
              href="#the-cloud-evolved"
              className="px-8 py-4 rounded-full border border-white/20 hover:bg-white/10 text-white font-semibold text-xs tracking-widest uppercase transition-all hover:scale-105"
            >
              Explore Full Sections
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHITE BACKGROUND SECTION (THE CLOUD, EVOLVED) */}
      <section id="the-cloud-evolved" className="snap-start snap-always h-screen w-full px-6 sm:px-8 bg-white text-gray-900 border-b border-gray-200 flex items-center justify-center text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-8 relative z-10">
          <span className="text-xs font-mono tracking-widest text-purple-600 uppercase font-bold block px-4 py-1.5 rounded-full bg-purple-50 border border-purple-200 w-fit mx-auto">
            THE CLOUD, EVOLVED
          </span>

          <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-gray-900 leading-tight">
            Scalable, cloud-enabled data processing and storage{" "}
            <span className="text-purple-600">operating directly in space</span>
          </h2>

          <div className="w-24 h-1.5 bg-purple-600 mx-auto rounded-full" />

          <div className="space-y-4 text-base sm:text-lg text-gray-700 font-medium leading-relaxed max-w-3xl mx-auto pt-2">
            <p>
              Orbital Data Centers (ODCs) work in conjunction with terrestrial cloud infrastructure, or independently for high-security use cases, bringing the power of the cloud above Earth&apos;s surface.
            </p>
            <p>
              By reducing reliance on ground-base systems, ODCs enable faster and more secure storage and processing of satellite and mission data, while creating an orbital cloud that strengthens global data sovereignty, AI autonomy, and resilience against terrestrial disruptions.
            </p>
          </div>
        </div>
      </section>

      {/* SECTIONS 3 TO 8: ALTERNATING DARK & WHITE BACKGROUND ODC VALUE DRIVERS */}
      {odcValueDrivers.map((driver, idx) => {
        const Icon = driver.icon;
        const isWhiteSection = driver.isLightBg;

        return (
          <section
            key={idx}
            className={`snap-start snap-always h-screen w-full px-6 sm:px-12 border-b flex items-center justify-center relative overflow-hidden ${
              isWhiteSection
                ? "bg-[#f8f9fc] text-gray-900 border-gray-200"
                : "bg-[#030611] text-white border-white/10"
            }`}
          >
            {!isWhiteSection && (
              <div className="absolute inset-0 z-0">
                <Image
                  src={driver.image}
                  alt={driver.title}
                  fill
                  className="object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030611] via-[#030611]/85 to-[#030611]/90" />
              </div>
            )}

            <div className="max-w-6xl mx-auto relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-8">
                <div className="flex items-center space-x-4">
                  <span
                    className={`text-xs font-mono font-bold px-4 py-1.5 rounded-full border shadow-sm ${
                      isWhiteSection
                        ? "bg-purple-100 border-purple-300 text-purple-800"
                        : driver.accent
                    }`}
                  >
                    CAPABILITY {driver.step} / 06
                  </span>
                  <span className={`text-xs font-mono uppercase tracking-widest ${isWhiteSection ? "text-gray-500" : "text-slate-400"}`}>
                    WHY ODCs DRIVE VALUE
                  </span>
                </div>

                <div className="space-y-4">
                  <div className={`p-4 rounded-2xl border ${isWhiteSection ? "bg-white border-purple-200 text-purple-600 shadow-md" : `${driver.accent} backdrop-blur-xl`} w-fit`}>
                    <Icon className="w-10 h-10" />
                  </div>

                  <h2 className={`text-4xl sm:text-6xl font-black leading-tight tracking-tight ${isWhiteSection ? "text-gray-900" : "text-white"}`}>
                    {driver.title}
                  </h2>

                  <p className={`text-base sm:text-xl font-normal leading-relaxed max-w-2xl ${isWhiteSection ? "text-gray-700" : "text-slate-300"}`}>
                    {driver.description}
                  </p>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => openInquiryModal(`ODC Section ${driver.step}: ${driver.title}`)}
                    className={`px-8 py-4 rounded-full font-mono font-bold text-xs uppercase tracking-widest transition-all shadow-lg flex items-center space-x-3 hover:scale-105 ${
                      isWhiteSection
                        ? "bg-purple-600 hover:bg-purple-700 text-white shadow-purple-600/30"
                        : "bg-gradient-to-r from-purple-600 to-orange-500 text-white shadow-purple-600/30"
                    }`}
                  >
                    <span>INQUIRE ABOUT {driver.title.toUpperCase()}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className={`lg:col-span-5 relative h-80 sm:h-[450px] w-full rounded-3xl overflow-hidden shadow-2xl border border-gray-200 group ${isWhiteSection ? "bg-gray-100 border-gray-300" : "bg-slate-950 border-purple-500/30"}`}>
                <Image
                  src={driver.image}
                  alt={driver.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                {!isWhiteSection && (
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030611] via-transparent to-transparent" />
                )}
              </div>
            </div>
          </section>
        );
      })}

      {/* SECTION 9: WHITE BACKGROUND (PLANET LABS LEADS DIGITAL INFRASTRUCTURE BEYOND EARTH) */}
      <section className="snap-start snap-always min-h-screen w-full px-6 sm:px-12 pt-28 pb-16 bg-white text-gray-900 border-b border-gray-200 flex items-center justify-center relative">
        <div className="max-w-7xl mx-auto space-y-10 text-center w-full">
          <div className="max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-mono tracking-widest text-purple-600 uppercase font-bold px-4 py-1.5 rounded-full bg-purple-50 border border-purple-200 inline-block">
              ORBITAL DATA INFRASTRUCTURE
            </span>
            <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-gray-900 leading-tight">
              Planet Labs & Metals Leads Digital Infrastructure <span className="text-purple-600">Beyond Earth</span>
            </h2>
            <div className="w-24 h-1.5 bg-purple-600 mx-auto rounded-full" />
            <p className="text-sm sm:text-base text-gray-700 font-medium leading-relaxed max-w-2xl mx-auto">
              By delivering cloud computing above the clouds, Planet Labs & Metals is pioneering the next step for data, enabling global resilience, digital sovereignty, and long-term sustainability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
            <div
              className="relative h-72 rounded-3xl overflow-hidden bg-gray-900 border border-gray-200 p-8 flex flex-col justify-end text-left group cursor-pointer hover:border-purple-600 hover:shadow-2xl transition-all duration-500"
              onClick={() => openInquiryModal("Edge AI Inferencing Inquiry")}
            >
              <Image
                src="/images/hero_space_station_hd.png"
                alt="Data Sent with Immediate Response"
                fill
                className="object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/60 to-transparent" />
              <div className="relative z-10 space-y-2 text-white">
                <span className="text-[10px] font-mono text-purple-300 font-bold uppercase tracking-widest bg-purple-950/80 px-2.5 py-1 rounded-md border border-purple-500/30 inline-block">
                  REAL-TIME FILTERING
                </span>
                <h3 className="text-2xl font-bold group-hover:text-purple-300 transition-colors">
                  Data Sent with Immediate Response
                </h3>
                <p className="text-xs text-slate-300 font-light leading-relaxed">
                  In-orbit automated filtering transmits only actionable high-value insights down to Earth.
                </p>
              </div>
            </div>

            <div
              className="relative h-72 rounded-3xl overflow-hidden bg-gray-900 border border-gray-200 p-8 flex flex-col justify-end text-left group cursor-pointer hover:border-purple-600 hover:shadow-2xl transition-all duration-500"
              onClick={() => openInquiryModal("Zero-Trust Encryption Inquiry")}
            >
              <Image
                src="/images/orbital_data_center_hd.png"
                alt="Edge AI Inferencing in Orbit"
                fill
                className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/60 to-transparent" />
              <div className="relative z-10 space-y-2 text-white">
                <span className="text-[10px] font-mono text-purple-300 font-bold uppercase tracking-widest bg-purple-950/80 px-2.5 py-1 rounded-md border border-purple-500/30 inline-block">
                  NEURAL NETWORK PROCESSING
                </span>
                <h3 className="text-2xl font-bold group-hover:text-purple-300 transition-colors">
                  Edge AI Inferencing in Orbit
                </h3>
                <p className="text-xs text-slate-300 font-light leading-relaxed">
                  Deploy neural network inference models directly on orbital servers near sensors.
                </p>
              </div>
            </div>

            <div
              className="relative h-72 rounded-3xl overflow-hidden bg-gray-900 border border-gray-200 p-8 flex flex-col justify-end text-left group cursor-pointer hover:border-purple-600 hover:shadow-2xl transition-all duration-500"
              onClick={() => openInquiryModal("Sovereign Cloud Storage Inquiry")}
            >
              <Image
                src="/images/orbital_metallurgy.png"
                alt="Sovereign Space Vaults"
                fill
                className="object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/60 to-transparent" />
              <div className="relative z-10 space-y-2 text-white">
                <span className="text-[10px] font-mono text-purple-300 font-bold uppercase tracking-widest bg-purple-950/80 px-2.5 py-1 rounded-md border border-purple-500/30 inline-block">
                  AIR-GAPPED SECURITY
                </span>
                <h3 className="text-2xl font-bold group-hover:text-purple-300 transition-colors">
                  Sovereign Space Vaults
                </h3>
                <p className="text-xs text-slate-300 font-light leading-relaxed">
                  Tamper-proof, air-gapped physical storage operating in secure low-Earth orbit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10: DARK HIGH-CONTRAST TIMELINE SECTION */}
      <section ref={timelineSectionRef} className="snap-start snap-always min-h-screen w-full py-28 px-6 sm:px-8 bg-[#020306] text-white border-b border-white/10 flex items-center justify-center relative">
        <div className="max-w-6xl mx-auto space-y-16 w-full py-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-mono tracking-widest text-orange-400 font-bold uppercase block px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 w-fit mx-auto">
              WHY PLANET LABS & METALS
            </span>
            <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white">
              Proven Expertise for <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400">Progress Today</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-purple-500 mx-auto rounded-full" />
          </div>

          <div className="relative pt-6 max-w-5xl mx-auto space-y-24">
            {timelineEvents.map((event, idx) => {
              const isActivated = activatedIndices[idx];
              return (
                <div
                  key={idx}
                  ref={(el) => {
                    itemRefs.current[idx] = el;
                  }}
                  className="flex flex-col md:flex-row items-start w-full group transition-all duration-500"
                >
                  <div className="w-full md:w-[42%] text-left md:text-right md:pr-8 pt-1 flex-shrink-0">
                    <div className="flex flex-col items-start md:items-end space-y-2">
                      {event.badge && (
                        <span
                          className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-widest border transition-all duration-500 ${
                            isActivated
                              ? "bg-orange-500/20 border-orange-500/60 text-orange-300 shadow-[0_0_20px_rgba(249,115,22,0.35)]"
                              : "bg-slate-900/90 border-slate-700 text-slate-300"
                          }`}
                        >
                          {event.badge}
                        </span>
                      )}
                      <h3
                        className={`text-2xl sm:text-3xl font-extrabold leading-snug tracking-tight transition-all duration-500 ${
                          isActivated
                            ? "text-white opacity-100 scale-100"
                            : "text-slate-300 opacity-85 hover:text-white"
                        }`}
                      >
                        {event.headline}
                      </h3>
                    </div>
                  </div>

                  <div className="hidden md:flex md:w-[6%] flex-col items-center self-stretch relative flex-shrink-0 min-h-[160px]">
                    <div className="absolute top-0 bottom-0 w-[2px] bg-slate-800 z-0 overflow-hidden">
                      {isActivated && (
                        <div className="h-full w-full bg-gradient-to-b from-amber-500 via-orange-500 to-purple-500 shadow-[0_0_20px_rgba(249,115,22,1)] transition-all duration-700 ease-out" />
                      )}
                    </div>

                    <div className="relative z-10 pt-3">
                      {isActivated && (
                        <div className="absolute inset-0 rounded-full bg-orange-500 animate-ping opacity-50" />
                      )}
                      <div
                        className={`rounded-full transition-all duration-500 ease-out transform ${
                          isActivated
                            ? "w-4 h-4 bg-white shadow-[0_0_35px_rgba(255,255,255,1)] ring-4 ring-orange-500/90 scale-125"
                            : "w-3.5 h-3.5 bg-slate-600 border border-slate-400"
                        }`}
                      />
                    </div>
                  </div>

                  <div className="w-full md:w-[52%] md:pl-8 space-y-4 flex-shrink-0">
                    {event.paragraphs.map((pText, pIdx) => (
                      <p
                        key={pIdx}
                        className={`text-sm sm:text-base font-light leading-relaxed transition-all duration-500 ${
                          isActivated ? "text-white opacity-100" : "text-slate-300 opacity-85"
                        }`}
                      >
                        {pText}
                      </p>
                    ))}

                    {event.linkText && (
                      <div className="pt-1">
                        <button
                          onClick={() => openInquiryModal(`Timeline Event: ${event.headline}`)}
                          className={`inline-flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-wider text-left transition-all duration-500 ${
                            isActivated
                              ? "text-orange-400 hover:text-orange-300 opacity-100"
                              : "text-orange-400/80 hover:text-orange-300 opacity-85"
                          }`}
                        >
                          <span>{event.linkText}</span>
                          <ExternalLink className="w-3.5 h-3.5 flex-shrink-0" />
                        </button>
                      </div>
                    )}

                    {event.bullets && event.bullets.length > 0 && (
                      <div className="pt-2 space-y-2 font-mono text-xs">
                        {event.bullets.map((bullet, bIdx) => (
                          <div
                            key={bIdx}
                            className={`p-3 rounded-xl border uppercase tracking-wider transition-all duration-500 ${
                              isActivated
                                ? "bg-slate-900/90 border-orange-500/60 text-orange-300 shadow-[0_0_25px_rgba(249,115,22,0.25)]"
                                : "bg-slate-900/50 border-slate-800 text-slate-300"
                            }`}
                          >
                            • {bullet}
                          </div>
                        ))}
                      </div>
                    )}

                    {event.image && (
                      <div
                        className={`relative h-56 sm:h-64 w-full max-w-md rounded-2xl overflow-hidden border shadow-2xl bg-slate-900 cursor-pointer mt-4 transition-all duration-500 ${
                          isActivated
                            ? "opacity-100 border-orange-500/70 shadow-[0_20px_50px_rgba(0,0,0,0.9)]"
                            : "opacity-90 border-white/20 hover:opacity-100"
                        }`}
                        onClick={() => openInquiryModal(`Timeline Details: ${event.headline}`)}
                      >
                        <Image
                          src={event.image}
                          alt={event.headline}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-95"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 11: BUILDING STRATEGIC ADVANTAGE & PIONEERING AN INDUSTRIAL REVOLUTION */}
      <section className="snap-start snap-always min-h-screen w-full px-6 sm:px-12 py-28 bg-[#04060d] text-white border-b border-white/10 flex items-center justify-center relative">
        <div className="max-w-6xl mx-auto space-y-16 w-full">
          {/* Banner Box: Building Strategic Advantage */}
          <div className="relative rounded-3xl overflow-hidden border border-white/15 p-8 sm:p-12 bg-slate-950 shadow-2xl">
            <Image
              src="/images/hero_space_station_hd.png"
              alt="Curved Earth Horizon"
              fill
              className="object-cover opacity-35"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />
            <div className="relative z-10 max-w-2xl space-y-6">
              <span className="text-xs font-mono tracking-widest text-slate-400 font-bold uppercase block">
                BUILDING STRATEGIC ADVANTAGE
              </span>

              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                The Trusted Leader In Orbital Infrastructure
              </h2>

              <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
                Our expertise in human spaceflight, station infrastructure, and on-orbit operations ensures secure, resilient, and commercially viable data centers in low Earth orbit.
              </p>

              <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
                Planet Labs & Metals is building the foundation for the orbital cloud, connecting space, Earth, and everything in between.
              </p>

              <div className="pt-2">
                <Link
                  href="/solutions/in-space-manufacturing"
                  className="inline-flex items-center px-8 py-3.5 rounded-full bg-white hover:bg-slate-200 text-black font-bold text-xs tracking-wider uppercase transition-all shadow-lg hover:scale-105"
                >
                  Continue to Commercial Station
                </Link>
              </div>
            </div>
          </div>

          {/* Subhead Section: Pioneering an Industrial Revolution */}
          <div className="max-w-3xl space-y-6 pt-4">
            <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
              Pioneering an <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400">
                Industrial Revolution
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
              Planet Labs & Metals leads the space industrialization era, taking data center infrastructure to orbit for the benefit of cloud and AI users in space and on Earth.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 12: LET'S BUILD THE FUTURE OF COMPUTE BEYOND EARTH - EXACT CONTACT FORM */}
      <section className="snap-start snap-always min-h-screen w-full py-28 px-6 sm:px-8 bg-[#030611] text-white flex items-center justify-center border-b border-white/10 relative">
        <div className="max-w-6xl mx-auto space-y-12 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6 space-y-4">
              <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
                Let’s Build the Future of Compute Beyond Earth
              </h2>
            </div>
            <div className="lg:col-span-6 pt-2">
              <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
                Join Planet Labs & Metals in creating a more secure, sustainable, and connected planet-powered from orbit.
              </p>
            </div>
          </div>

          <div className="bg-[#e2e4e9] text-gray-900 p-8 sm:p-12 rounded-3xl shadow-2xl border border-gray-300">
            {formSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Thank You for Your Submission!</h3>
                <p className="text-sm text-gray-600 max-w-md mx-auto">
                  Our ODC systems engineers will review your project inquiry and connect with you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-700">First Name*</label>
                    <input
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 bg-white"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-700">Last Name*</label>
                    <input
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 bg-white"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-700">Email Address*</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 bg-white"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-700">Phone Number</label>
                  <div className="flex space-x-2">
                    <select className="px-3 py-3 rounded-lg border border-gray-300 text-sm bg-white text-gray-700">
                      <option value="+1">🇺🇸 +1</option>
                      <option value="+44">🇬🇧 +44</option>
                      <option value="+91">🇮🇳 +91</option>
                      <option value="+61">🇦🇺 +61</option>
                    </select>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 bg-white"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-700">Company Name / Organizational Affiliation*</label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 bg-white"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-700">How did you hear about us?</label>
                  <select
                    value={formData.source}
                    onChange={(e) => setFormData({ ...formData, source: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 bg-white text-gray-700"
                  >
                    <option value="">-- Select an Option --</option>
                    <option value="Search Engine">Search Engine (Google/Bing)</option>
                    <option value="News Media">News / Press Release</option>
                    <option value="Social Media">Social Media (LinkedIn/X)</option>
                    <option value="Industry Event">Industry Conference / Event</option>
                    <option value="Referral">Direct Referral / Partner</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-700">Tell us more about your request*</label>
                  <textarea
                    rows={3}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 bg-white"
                  />
                </div>

                <div className="flex items-start space-x-3 pt-2">
                  <input
                    type="checkbox"
                    id="subscribe"
                    checked={formData.subscribe}
                    onChange={(e) => setFormData({ ...formData, subscribe: e.target.checked })}
                    className="mt-1 w-4 h-4 rounded text-orange-500 focus:ring-orange-400"
                  />
                  <label htmlFor="subscribe" className="text-xs text-gray-600 leading-relaxed">
                    Yes, I’d like to receive updates from Planet Labs & Metals. You may unsubscribe from these communications at any time.
                  </label>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="px-8 py-3.5 rounded-lg bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md hover:scale-105"
                  >
                    Submit
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
