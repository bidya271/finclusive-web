"use client";

import React, { useState } from "react";
import { CORE_CAPABILITIES } from "@/lib/constants";
import { ArrowUpRight, Check, Shield, Cpu, RefreshCw, Layers } from "lucide-react";

export function SolutionsGrid() {
  const [activeCard, setActiveCard] = useState<string>("01");

  return (
    <section id="solutions" className="py-16 sm:py-24 border-b-[1.5px] border-[#121211] bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b-[1.5px] border-[#121211]">
          <div>
            <div className="flex items-center space-x-2 font-mono-tag text-[12px] text-[#068241] font-bold uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-full bg-[#068241]"></span>
              <span>[02 // MODULAR CAPABILITIES FOR FOUNDING TEAMS]</span>
            </div>
            <h2 className="font-serif-display text-3xl sm:text-5xl font-normal text-[#121211]">
              Architected for early-stage fintech builders.
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-[14.5px] text-[#55534E] max-w-md">
            Four lean, high-velocity primitives designed to get your pilot into production without bloated legacy vendor lock-in.
          </p>
        </div>

        {/* 4 Architectural Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CORE_CAPABILITIES.map((cap) => {
            const isFocal = activeCard === cap.id;
            return (
              <div
                key={cap.id}
                onMouseEnter={() => setActiveCard(cap.id)}
                className={`p-6 sm:p-8 bg-white border-[1.5px] border-[#121211] transition-all relative ${
                  isFocal
                    ? "shadow-[5px_5px_0px_#068241] ring-1 ring-[#068241]"
                    : "shadow-[3px_3px_0px_#121211]"
                }`}
              >
                {/* Top status bar */}
                <div className="flex items-center justify-between pb-4 border-b border-[#DCD8CF]">
                  <div className="flex items-center space-x-2 font-mono-tag text-[11px]">
                    <span className="font-bold text-[#068241]">[{cap.id}]</span>
                    <span className="text-[#8E8B82]">//</span>
                    <span className="font-semibold text-[#121211]">{cap.code}</span>
                  </div>

                  <span className="px-2.5 py-0.5 font-mono-tag text-[10.5px] font-bold bg-[#E6F8EE] text-[#068241] border border-[#8CE0B0]">
                    {cap.tag}
                  </span>
                </div>

                {/* Title & Summary */}
                <h3 className="font-serif-display text-2xl sm:text-3xl font-normal text-[#121211] mt-5 mb-2.5">
                  {cap.title}
                </h3>
                <p className="text-[14.5px] text-[#55534E] leading-relaxed mb-6">
                  {cap.summary}
                </p>

                {/* Technical Bullet Items */}
                <div className="space-y-2.5 pt-4 border-t border-[#DCD8CF]">
                  {cap.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start space-x-2.5 text-[13.5px] text-[#121211]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#068241] mt-2 shrink-0"></div>
                      <span className="leading-snug">{detail}</span>
                    </div>
                  ))}
                </div>

                {/* Footer tag */}
                <div className="mt-6 pt-4 border-t border-[#DCD8CF] flex items-center justify-between">
                  <span className="font-mono-tag text-[11px] text-[#068241] flex items-center space-x-1.5 font-bold">
                    <span className="w-2 h-2 rounded-full bg-[#068241]"></span>
                    <span>{cap.status}</span>
                  </span>

                  <a
                    href="#contact"
                    className="font-mono-tag text-[12px] text-[#068241] hover:text-[#056e37] font-bold inline-flex items-center space-x-1"
                  >
                    <span>REQUEST PILOT SPEC</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#068241]" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
