"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useContent } from "@/context/ContentContext";
import { Check } from "lucide-react";

export const FeaturedNewsCommunity = () => {
  const { data } = useContent();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <section className="bg-[#f8f9fa] text-gray-900 py-20 px-6 sm:px-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Featured News */}
        <div className="lg:col-span-7 space-y-6">
          <div className="border-b border-gray-200 pb-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight inline-block relative">
              Featured News
              <span className="absolute bottom-[-13px] left-0 w-16 h-1 bg-orange-500 rounded-full" />
            </h2>
          </div>

          <div className="space-y-4 pt-2">
            {data.latestNews.map((news) => (
              <Link
                key={news.id}
                href="/about#news"
                className="flex items-center space-x-4 sm:space-x-5 py-3 border-b border-gray-200/80 last:border-0 group"
              >
                <div className="relative w-28 sm:w-36 h-20 sm:h-24 rounded-xl overflow-hidden flex-shrink-0 bg-gray-200 shadow-sm border border-gray-200">
                  <Image
                    src={news.image || "/images/planet_labs_hero.png"}
                    alt={news.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 112px, 144px"
                  />
                </div>
                <div className="space-y-1.5 flex-1">
                  <h3 className="text-sm sm:text-base font-semibold text-gray-900 group-hover:text-blue-600 transition-colors leading-snug">
                    {news.title}
                  </h3>
                  <p className="text-xs text-gray-500 font-mono">
                    {news.date}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Right Column: Join Community Form */}
        <div className="lg:col-span-5 space-y-6 pt-4 lg:pt-8 lg:pl-4">
          <div className="space-y-3">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 leading-tight">
              Join the Planet Labs & Metals Community
            </h2>
            <p className="text-sm text-gray-600 font-light leading-relaxed">
              Take your front-row seat to first looks at the latest Planet Labs & Metals updates.
            </p>
          </div>

          {subscribed ? (
            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-medium flex items-center space-x-2">
              <Check className="w-5 h-5 text-emerald-600" />
              <span>Thank you for joining the community dispatch!</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex items-center space-x-2 pt-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                required
                className="flex-1 bg-white border border-gray-300 rounded-full px-6 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-black shadow-sm"
              />
              <button
                type="submit"
                className="px-8 py-3 rounded-full bg-black hover:bg-gray-800 text-white font-bold text-xs tracking-wider uppercase transition-colors shadow-md flex-shrink-0"
              >
                JOIN
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
