"use client";

import React, { useState } from "react";
import { X, CheckCircle2, Send, Rocket } from "lucide-react";
import { useContent } from "@/context/ContentContext";

export const MissionModal = () => {
  const { isInquiryOpen, setIsInquiryOpen, inquirySubject } = useContent();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    country: "",
    details: "",
  });

  if (!isInquiryOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setIsInquiryOpen(false);
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-[#12151c] border border-white/20 rounded-3xl w-full max-w-xl overflow-hidden shadow-2xl space-y-6">
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Rocket className="w-5 h-5 text-blue-400" />
            <h3 className="text-lg font-bold text-white uppercase tracking-wider font-mono">
              Planet Labs & Metals Inquiry
            </h3>
          </div>
          <button
            onClick={() => setIsInquiryOpen(false)}
            className="text-gray-400 hover:text-white p-1 rounded-full hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-10 text-center space-y-4">
            <div className="inline-flex p-4 rounded-full bg-emerald-500/20 text-emerald-400 mb-2 border border-emerald-500/30">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="text-2xl font-bold text-white">Inquiry Transmitted</h4>
            <p className="text-gray-300 text-sm max-w-sm mx-auto font-light">
              Your inquiry for <span className="text-blue-400 font-semibold">{inquirySubject}</span> has been routed to Planet Labs & Metals Operations.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div className="p-3 rounded-xl bg-blue-950/40 border border-blue-800/40 text-xs text-blue-300 font-mono">
              Subject: {inquirySubject}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-gray-400 uppercase mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="Astronaut / Executive Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-400"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-gray-400 uppercase mb-1">Organization / Agency</label>
                <input
                  type="text"
                  required
                  placeholder="Space Agency / Enterprise"
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-400"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-gray-400 uppercase mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="official@domain.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-400"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-gray-400 uppercase mb-1">Country / Jurisdiction</label>
                <input
                  type="text"
                  required
                  placeholder="United States, ESA, etc."
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-400"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-gray-400 uppercase mb-1">Mission Requirements / Objectives</label>
              <textarea
                rows={3}
                required
                placeholder="Describe payload weight, target orbit duration, or astronaut seat requirements..."
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-400"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-full bg-white text-black font-semibold text-xs tracking-wider uppercase hover:bg-gray-200 transition-colors shadow-lg flex items-center justify-center space-x-2"
            >
              <span>Transmit Flight Request</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
