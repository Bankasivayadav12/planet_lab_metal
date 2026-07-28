"use client";

import React from "react";
import { Hero } from "@/components/Hero";
import { MissionCardGrid } from "@/components/MissionCardGrid";
import { FeatureBannerSection } from "@/components/FeatureBanner";
import { FeaturedNewsCommunity } from "@/components/FeaturedNewsCommunity";

export default function Home() {
  return (
    <div className="space-y-0 bg-[#020617] text-white overflow-hidden">
      {/* Hero Section */}
      <Hero />

      {/* 3-Card Grid Section (Core Infrastructure Pillars) */}
      <MissionCardGrid />

      {/* Feature Banners Section */}
      <FeatureBannerSection />

      {/* Featured News & Join Community Section (Matches reference layout) */}
      <FeaturedNewsCommunity />
    </div>
  );
}
