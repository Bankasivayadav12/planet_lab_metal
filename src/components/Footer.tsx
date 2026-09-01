"use client";

import React from "react";
import Link from "next/link";
import { useContent } from "@/context/ContentContext";
import { Logo } from "@/components/Logo";

export const Footer = () => {
  const { openInquiryModal } = useContent();

  return (
    <footer className="relative text-white border-t border-white/20 overflow-hidden pt-16 pb-12 px-6 sm:px-12 bg-black">
      {/* Dynamic Parallax Fixed Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat bg-fixed opacity-95"
          style={{ backgroundImage: `url('/images/footer_moon_earth.png')` }}
        />
        {/* Ambient Contrast Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/50 to-black/95" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-10">
        {/* Top Centered Brand Emblem & Tagline */}
        <div className="flex flex-col items-center justify-center space-y-3 text-center pt-6 pb-4">
          <Logo variant="dark" />
          <p className="text-sm sm:text-base font-mono tracking-[0.6em] text-cyan-300 uppercase font-black drop-shadow-[0_2px_8px_rgba(6,182,212,0.4)]">
            TRANSCEND EARTH
          </p>
        </div>

        {/* Horizontal Divider Line */}
        <div className="w-full border-t border-white/30" />

        {/* Multi-Column Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-8 py-4 font-mono text-sm sm:text-base text-white">
          {/* Column 1 */}
          <div className="lg:col-span-2 space-y-3.5">
            <Link href="/solutions" className="block text-slate-100 hover:text-cyan-300 font-semibold transition-colors">
              Metallurgy Labs
            </Link>
            <Link href="/suit" className="block text-slate-100 hover:text-cyan-300 font-semibold transition-colors">
              PL-EVA Suit
            </Link>
            <Link href="/spaceflight" className="block text-slate-100 hover:text-cyan-300 font-semibold transition-colors">
              Missions
            </Link>
            <div className="pt-3">
              <Link href="/about#careers" className="block text-slate-100 hover:text-cyan-300 font-semibold transition-colors">
                Careers
              </Link>
            </div>
          </div>

          {/* Column 2 */}
          <div className="lg:col-span-3 space-y-3.5">
            <Link href="/spaceflight" className="block text-slate-100 hover:text-cyan-300 font-semibold transition-colors">
              Human Spaceflight
            </Link>
            <Link href="/solutions/microgravity-research" className="block text-slate-100 hover:text-cyan-300 font-semibold transition-colors">
              Microgravity Research
            </Link>
            <Link href="/solutions/in-space-manufacturing" className="block text-slate-100 hover:text-cyan-300 font-semibold transition-colors">
              In-Space Manufacturing
            </Link>
            <Link href="/solutions/orbital-data-center" className="block text-slate-100 hover:text-cyan-300 font-semibold transition-colors">
              Orbital Data Centers
            </Link>
            <Link href="/solutions" className="block text-slate-100 hover:text-cyan-300 font-semibold transition-colors">
              Partnership Opportunities
            </Link>
          </div>

          {/* Column 3 */}
          <div className="lg:col-span-2 space-y-3.5">
            <Link href="/about#partners" className="block text-slate-100 hover:text-cyan-300 font-semibold transition-colors">
              Partners
            </Link>
            <Link href="/about#suppliers" className="block text-slate-100 hover:text-cyan-300 font-semibold transition-colors">
              Suppliers
            </Link>
            <button
              onClick={() => openInquiryModal("Report a Concern")}
              className="block text-slate-100 hover:text-cyan-300 font-semibold transition-colors text-left"
              suppressHydrationWarning
            >
              Report a Concern
            </button>
          </div>

          {/* Column 4: Social Channels */}
          <div className="lg:col-span-2 space-y-3.5">
            <a
              href="https://x.com"
              target="_blank"
              rel="noreferrer"
              className="block text-slate-100 hover:text-cyan-300 font-semibold transition-colors"
            >
              X
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="block text-slate-100 hover:text-cyan-300 font-semibold transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="block text-slate-100 hover:text-cyan-300 font-semibold transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="block text-slate-100 hover:text-cyan-300 font-semibold transition-colors"
            >
              YouTube
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="block text-slate-100 hover:text-cyan-300 font-semibold transition-colors"
            >
              Facebook
            </a>
          </div>

          {/* Column 5: Right Metadata Card */}
          <div className="lg:col-span-3 lg:border-l lg:border-white/30 lg:pl-6 space-y-6 pt-4 lg:pt-0">
            <div className="space-y-1.5">
              <span className="text-xs text-cyan-300 font-bold uppercase tracking-widest block">
                EMAIL
              </span>
              <a
                href="mailto:contact@planetlabsmetals.com"
                className="text-white hover:text-cyan-300 text-xs sm:text-sm font-semibold transition-colors block"
              >
                contact@planetlabsandmetals.com
              </a>
            </div>
            <div className="space-y-1.5 pt-3 border-t border-white/20">
              <span className="text-xs text-cyan-300 font-bold uppercase tracking-widest block">
                ADDRESS
              </span>
              <p className="text-slate-200 text-xs sm:text-sm font-light leading-relaxed">
                645 Harrison Street, 4th Floor,<br />
                San Francisco, California 94107,<br />
                United States.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row items-center justify-between text-xs sm:text-sm font-mono text-slate-300 space-y-4 md:space-y-0">
          <div>
            © {new Date().getFullYear()} Planet Labs & Metals, Inc. All rights reserved.
          </div>
          <div className="flex space-x-6 font-semibold">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
            <span className="hover:text-white cursor-pointer transition-colors">Security Notices</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
