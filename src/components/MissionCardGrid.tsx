"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { useContent } from "@/context/ContentContext";

export const MissionCardGrid = () => {
  const { data } = useContent();

  return (
    <section className="bg-[#f5f5f7] text-gray-900 py-24 px-6 sm:px-8 border-t border-b border-gray-200">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-semibold tracking-widest uppercase shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>PIONEERING METALLURGY & SPACE OPERATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-gray-900">
            Core Infrastructure Pillars
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.missionCards.map((card, idx) => (
            <div
              key={card.id}
              className="p-6 rounded-3xl bg-white border border-gray-200/80 shadow-md hover:shadow-2xl hover:border-gray-300 transition-all duration-300 flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-5">
                {/* Image Container */}
                <div className="relative w-full h-64 sm:h-72 rounded-2xl overflow-hidden shadow-sm bg-gray-100">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-[10px] font-mono font-bold text-white uppercase">
                    PILLAR 0{idx + 1}
                  </div>
                </div>

                {/* Card Title & Content */}
                <div className="space-y-2.5">
                  <h3 className="text-2xl font-bold tracking-tight text-gray-900 leading-snug group-hover:text-blue-600 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed font-normal">
                    {card.description}
                  </p>
                </div>
              </div>

              {/* Action Pill Button */}
              <div className="pt-2">
                <Link
                  href={card.link}
                  className="w-full py-3.5 px-6 rounded-full border border-gray-900 text-gray-900 hover:bg-black hover:text-white text-xs font-bold tracking-wider uppercase transition-all duration-300 flex items-center justify-between shadow-sm"
                >
                  <span>{card.buttonText}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
