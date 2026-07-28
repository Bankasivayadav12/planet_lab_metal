"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import { X, Search, ArrowRight, Rocket, Shield, Globe } from "lucide-react";
import { useContent } from "@/context/ContentContext";

export const SearchModal = () => {
  const { isSearchOpen, setIsSearchOpen, searchQuery, setSearchQuery, data } = useContent();

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase();

    const results: Array<{ title: string; subtitle: string; link: string; category: string }> = [];

    // Search cards
    data.missionCards.forEach((card) => {
      if (card.title.toLowerCase().includes(q) || card.description.toLowerCase().includes(q)) {
        results.push({
          title: card.title,
          subtitle: card.description.slice(0, 100) + "...",
          link: card.link,
          category: "Mission Program",
        });
      }
    });

    // Search modules
    data.stationModules.forEach((mod) => {
      if (mod.name.toLowerCase().includes(q) || mod.description.toLowerCase().includes(q)) {
        results.push({
          title: mod.name,
          subtitle: mod.description,
          link: "/station",
          category: "Planet Labs Station",
        });
      }
    });

    // Search suit
    data.suitHotspots.forEach((spot) => {
      if (spot.title.toLowerCase().includes(q) || spot.description.toLowerCase().includes(q)) {
        results.push({
          title: spot.title,
          subtitle: spot.description,
          link: "/suit",
          category: "AxEMU Suit",
        });
      }
    });

    // Search solutions
    data.solutionsList.forEach((sol) => {
      if (sol.title.toLowerCase().includes(q) || sol.description.toLowerCase().includes(q)) {
        results.push({
          title: sol.title,
          subtitle: sol.description,
          link: "/solutions",
          category: "Solutions",
        });
      }
    });

    return results;
  }, [searchQuery, data]);

  if (!isSearchOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-start justify-center pt-20 px-4 animate-in fade-in duration-200">
      <div className="bg-[#12151c] border border-white/20 rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl space-y-4">
        {/* Header */}
        <div className="p-4 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center space-x-3 flex-1">
            <Search className="w-5 h-5 text-gray-400" />
            <input
              type="text"
              autoFocus
              placeholder="Search Planet Labs & Metals, Station, AxEMU, missions, or solutions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent text-white text-base w-full focus:outline-none placeholder-gray-500 font-light"
            />
          </div>
          <button
            onClick={() => setIsSearchOpen(false)}
            className="text-gray-400 hover:text-white p-1 rounded-full hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Content */}
        <div className="p-6 max-h-[60vh] overflow-y-auto space-y-4">
          {!searchQuery.trim() ? (
            <div className="space-y-4">
              <span className="text-xs font-mono tracking-widest text-gray-400 uppercase">
                QUICK SUGGESTIONS
              </span>
              <div className="grid grid-cols-2 gap-2">
                <Link
                  href="/station"
                  onClick={() => setIsSearchOpen(false)}
                  className="p-3 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 text-xs font-medium text-gray-200 flex items-center space-x-2"
                >
                  <Rocket className="w-4 h-4 text-blue-400" />
                  <span>Planet Labs Station</span>
                </Link>
                <Link
                  href="/suit"
                  onClick={() => setIsSearchOpen(false)}
                  className="p-3 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 text-xs font-medium text-gray-200 flex items-center space-x-2"
                >
                  <Shield className="w-4 h-4 text-red-400" />
                  <span>AxEMU Lunar Spacesuit</span>
                </Link>
                <Link
                  href="/spaceflight"
                  onClick={() => setIsSearchOpen(false)}
                  className="p-3 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 text-xs font-medium text-gray-200 flex items-center space-x-2"
                >
                  <Globe className="w-4 h-4 text-emerald-400" />
                  <span>Private Astronaut Missions</span>
                </Link>
                <Link
                  href="/solutions"
                  onClick={() => setIsSearchOpen(false)}
                  className="p-3 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 text-xs font-medium text-gray-200 flex items-center space-x-2"
                >
                  <Search className="w-4 h-4 text-purple-400" />
                  <span>Microgravity Manufacturing</span>
                </Link>
              </div>
            </div>
          ) : searchResults.length > 0 ? (
            <div className="space-y-3">
              <span className="text-xs font-mono text-gray-400 uppercase">
                FOUND {searchResults.length} MATCHING RESULTS
              </span>
              {searchResults.map((res, i) => (
                <Link
                  key={i}
                  href={res.link}
                  onClick={() => setIsSearchOpen(false)}
                  className="block p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors space-y-1 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest">
                      {res.category}
                    </span>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </div>
                  <h4 className="text-sm font-semibold text-white">{res.title}</h4>
                  <p className="text-xs text-gray-400 font-light line-clamp-2">{res.subtitle}</p>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-10 text-gray-400 text-sm">
              No space data matched &ldquo;{searchQuery}&rdquo;. Try searching for &ldquo;Station&rdquo;, &ldquo;Suit&rdquo;, or &ldquo;Research&rdquo;.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
