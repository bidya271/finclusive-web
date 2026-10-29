"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2, Compass, Layers, ShieldCheck, Zap } from "lucide-react";

export function BaaSCalculator() {
  const [selectedCorridor, setSelectedCorridor] = useState<string>("EU-UK");
  const [useCase, setUseCase] = useState<string>("Remittances");

  const corridorProfiles: Record<string, { rails: string; timeline: string; impact: string }> = {
    "EU-UK": {
      rails: "SEPA Instant & UK Faster Payments",
      timeline: "Target Pilot Q1",
      impact: "Zero-markup corridors between Europe & Britain for migrant workers."
    },
    "CROSS-BORDER": {
      rails: "SEPA to UPI, Pix & Regional Clearing",
      timeline: "Target Pilot Q2",
      impact: "Direct remittance settlement from European accounts directly to beneficiary bank wallets."
    },
    "GLOBAL": {
      rails: "Multi-Currency Virtual Ledgers",
      timeline: "Design Phase",
      impact: "Universal programmatic ledger for global fintechs seeking turnkey sponsor banking."
    }
  };

  const activeProfile = corridorProfiles[selectedCorridor];

  return (
    <section id="calculator" className="py-16 sm:py-24 border-b-[1.5px] border-[#121211] bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b-[1.5px] border-[#121211]">
          <div>
            <div className="flex items-center space-x-2 font-mono-tag text-[12px] text-[#068241] font-bold uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-full bg-[#068241]"></span>
              <span>[04 // ARCHITECTURE ROADMAP EXPLORER]</span>
            </div>
            <h2 className="font-serif-display text-3xl sm:text-5xl font-normal text-[#121211]">
              Explore the corridors we are designing.
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-[14.5px] text-[#55534E] max-w-md">
            Interactive overview of the payment corridors, clearing rails, and capabilities on our engineering roadmap.
          </p>
        </div>

        {/* Interactive Explorer Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 border-[1.5px] border-[#121211] shadow-[4px_4px_0px_#121211] space-y-6">
            
            {/* Step 1: Corridor selection */}
            <div>
              <label className="block text-[14px] font-semibold text-[#121211] mb-2.5">
                Target Payment Corridor
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: "EU-UK", label: "EU & UK Rails" },
                  { id: "CROSS-BORDER", label: "Europe to Asia/LATAM" },
                  { id: "GLOBAL", label: "Multi-Currency" },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedCorridor(item.id)}
                    className={`py-2.5 px-3 text-[12px] font-semibold border text-center transition-all ${
                      selectedCorridor === item.id
                        ? "border-[#121211] bg-[#068241] text-white shadow-[2px_2px_0px_#121211]"
                        : "border-[#DCD8CF] bg-[#FAF8F5] text-[#55534E] hover:border-[#121211]"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Use Case */}
            <div>
              <label className="block text-[14px] font-semibold text-[#121211] mb-2.5">
                Target Application Type
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  "Remittances",
                  "Neobank Wallets",
                  "B2B Payouts"
                ].map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setUseCase(item)}
                    className={`py-2.5 px-3 text-[12px] font-semibold border text-center transition-all ${
                      useCase === item
                        ? "border-[#121211] bg-[#5033A4] text-white shadow-[2px_2px_0px_#121211]"
                        : "border-[#DCD8CF] bg-[#FAF8F5] text-[#55534E] hover:border-[#121211]"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Feature Checklist */}
            <div className="pt-4 border-t border-[#DCD8CF] space-y-2.5 text-[13px] text-[#55534E]">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#068241]" />
                <span>Virtual ledger accounts with real-time balance reconciliation</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#068241]" />
                <span>Automated sanction screening powered by agentic AI</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#068241]" />
                <span>Regulated sponsor banking escrow alignment</span>
              </div>
            </div>

          </div>

          {/* Results Summary Box */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 border-[1.5px] border-[#121211] shadow-[5px_5px_0px_#068241] space-y-6">
            
            <div className="flex items-center space-x-2 pb-4 border-b border-[#DCD8CF]">
              <span className="w-2.5 h-2.5 bg-[#068241]"></span>
              <span className="font-mono-tag text-[12px] font-bold text-[#121211] uppercase tracking-wider">
                DESIGN SPECIFICATION PROFILE
              </span>
            </div>

            {/* Selected Profile Details */}
            <div className="p-4 bg-[#E6F8EE] border-[1.5px] border-[#068241] shadow-[2px_2px_0px_#068241]">
              <div className="font-mono-tag text-[11px] text-[#068241] font-bold uppercase">
                TARGET CLEARING RAILS
              </div>
              <div className="font-serif-display text-2xl sm:text-3xl text-[#121211] mt-1">
                {activeProfile.rails}
              </div>
              <p className="text-[13px] text-[#55534E] mt-2 leading-relaxed">
                {activeProfile.impact}
              </p>
            </div>

            {/* Aspirational Blueprint Matrix */}
            <div className="p-4 bg-[#FAF8F5] border border-[#DCD8CF] space-y-2.5">
              <div className="flex items-center justify-between text-[13px]">
                <span className="text-[#55534E]">Target Application:</span>
                <span className="font-mono-tag font-bold text-[#5033A4]">{useCase}</span>
              </div>
              <div className="flex items-center justify-between text-[13px]">
                <span className="text-[#55534E]">Engineering Milestone:</span>
                <span className="font-mono-tag font-bold text-[#068241]">{activeProfile.timeline}</span>
              </div>
              <div className="flex items-center justify-between text-[13px]">
                <span className="text-[#55534E]">Architecture Status:</span>
                <span className="font-mono-tag font-bold text-[#121211]">Open to Design Partners</span>
              </div>
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="brutalist-button-green w-full inline-flex items-center justify-center space-x-2 py-3 text-white font-bold text-[14px]"
            >
              <span>Join as an Early Design Partner</span>
              <ArrowRight className="w-4 h-4" />
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}
