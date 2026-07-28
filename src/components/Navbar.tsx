"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Menu, X, Rocket } from "lucide-react";
import { useContent } from "@/context/ContentContext";
import { Logo } from "@/components/Logo";

export const Navbar = () => {
  const pathname = usePathname();
  const { setIsSearchOpen, openInquiryModal } = useContent();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "PL-EVA Suit", href: "/suit" },
    { name: "Missions", href: "/spaceflight" },
    {
      name: "Solutions",
      href: "/solutions",
      dropdownHeader: "FOR INNOVATORS",
      dropdown: [
        { name: "Microgravity Research", href: "/solutions/microgravity-research" },
        { name: "In-Space Manufacturing", href: "/solutions/in-space-manufacturing" },
        { name: "Orbital Data Centers", href: "/solutions/orbital-data-center" },
      ],
    },
    {
      name: "About",
      href: "/about",
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-4 text-black border-b border-gray-200"
          : "bg-gradient-to-b from-black/80 via-black/40 to-transparent py-6 text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Logo scrolled={scrolled} />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-9">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            if (link.dropdown) {
              return (
                <div key={link.name} className="relative group py-1">
                  <Link
                    href={link.href}
                    className={`text-base font-semibold tracking-wide transition-colors flex items-center space-x-1 ${
                      scrolled
                        ? isActive
                          ? "text-black font-bold"
                          : "text-gray-700 hover:text-black"
                        : isActive
                          ? "text-white font-bold"
                          : "text-gray-200 hover:text-white"
                    }`}
                  >
                    <span>{link.name}</span>
                  </Link>

                  {/* Dropdown Menu */}
                  <div className="absolute top-full left-0 mt-2 w-56 rounded-2xl bg-[#12141a]/95 backdrop-blur-2xl border border-white/15 p-3 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 space-y-1">
                    {link.dropdownHeader && (
                      <div className="px-3 pt-1 pb-1.5 text-[10px] font-mono font-bold tracking-widest text-slate-400 uppercase border-b border-white/10 mb-1">
                        {link.dropdownHeader}
                      </div>
                    )}
                    {link.dropdown.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        className="block px-3 py-2 rounded-xl text-sm font-semibold text-white hover:bg-white/15 hover:text-cyan-300 transition-colors"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-base font-semibold tracking-wide transition-colors relative py-1 ${
                  scrolled
                    ? isActive
                      ? "text-black font-bold"
                      : "text-gray-700 hover:text-black"
                    : isActive
                      ? "text-white font-bold"
                      : "text-gray-200 hover:text-white"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-blue-600 rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="hidden md:flex items-center space-x-6">
          <button
            onClick={() => setIsSearchOpen(true)}
            className={`p-2 transition-colors rounded-full ${
              scrolled
                ? "text-gray-700 hover:text-black hover:bg-gray-100"
                : "text-gray-300 hover:text-white hover:bg-white/10"
            }`}
            aria-label="Search"
            suppressHydrationWarning
          >
            <Search className="w-5 h-5" />
          </button>

          
        </div>

        {/* Mobile Menu Trigger */}
        <div className="flex items-center space-x-4 md:hidden">
          <button
            onClick={() => setIsSearchOpen(true)}
            className={`p-2 ${
              scrolled ? "text-gray-700 hover:text-black" : "text-gray-300 hover:text-white"
            }`}
            suppressHydrationWarning
          >
            <Search className="w-5 h-5" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 ${
              scrolled ? "text-gray-700 hover:text-black" : "text-gray-300 hover:text-white"
            }`}
            suppressHydrationWarning
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200 ${
            scrolled
              ? "bg-white border-b border-gray-200 text-black"
              : "bg-black/95 border-b border-white/10 text-white"
          }`}
        >
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-lg font-medium tracking-wide py-2 ${
                  pathname === link.href
                    ? "text-blue-600 font-semibold"
                    : scrolled
                      ? "text-gray-700 hover:text-black"
                      : "text-gray-300 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              openInquiryModal("General Inquiry");
            }}
            className={`w-full py-3 rounded-full font-semibold text-sm tracking-wider uppercase ${
              scrolled
                ? "bg-black text-white hover:bg-gray-800"
                : "bg-white text-black hover:bg-gray-100"
            }`}
          >
            Book Mission
          </button>
        </div>
      )}
    </header>
  );
};
