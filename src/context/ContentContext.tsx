"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { siteData, MissionCard, FeatureBannerData, StationModule, SuitHotspot, PressRelease } from "@/data/siteData";

interface ContentContextType {
  data: typeof siteData;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  isInquiryOpen: boolean;
  setIsInquiryOpen: (open: boolean) => void;
  inquirySubject: string;
  openInquiryModal: (subject?: string) => void;
  activeModuleId: string;
  setActiveModuleId: (id: string) => void;
  activeHotspotId: string;
  setActiveHotspotId: (id: string) => void;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const ContentProvider = ({ children }: { children: ReactNode }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [inquirySubject, setInquirySubject] = useState("General Inquiry");
  const [activeModuleId, setActiveModuleId] = useState("hub-1");
  const [activeHotspotId, setActiveHotspotId] = useState("helmet");

  const openInquiryModal = (subject: string = "General Inquiry") => {
    setInquirySubject(subject);
    setIsInquiryOpen(true);
  };

  return (
    <ContentContext.Provider
      value={{
        data: siteData,
        searchQuery,
        setSearchQuery,
        isSearchOpen,
        setIsSearchOpen,
        isInquiryOpen,
        setIsInquiryOpen,
        inquirySubject,
        openInquiryModal,
        activeModuleId,
        setActiveModuleId,
        activeHotspotId,
        setActiveHotspotId,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error("useContent must be used within a ContentProvider");
  }
  return context;
};
