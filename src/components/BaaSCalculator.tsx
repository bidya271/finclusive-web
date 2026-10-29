"use client";

import React, { useState } from "react";
import { Calculator, ArrowRight, CheckCircle2, Clock, Users, Zap } from "lucide-react";

export function BaaSCalculator() {
  const [volume, setVolume] = useState<number>(5); // in thousands of transactions for startup sizing
  const [jurisdictions, setJurisdictions] = useState<number>(1); // 1 = Local EU/UK, 2 = Cross-border, 3 = Multi-currency
  const [hasCards, setHasCards] = useState<boolean>(false);

  // Formulas for startup sizing
  const legacyMonths = 6 + jurisdictions * 1.5 + (hasCards ? 2 : 0);
  const finclusiveDays = 7 + jurisdictions * 2 + (hasCards ? 3 : 0);
  const estimatedEngineeringHoursSaved = Math.round(volume * 25 + jurisdictions * 180 + (hasCards ? 200 : 0));

  return (
    <section id="calculator" className="py-16 sm:py-24 border-b-[1.5px] border-[#121211] bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b-[1.5px] border-[#121211]">
          <div>
            <div className="flex items-center space-x-2 font-mono-tag text-[12px] text-[#068241] font-bold uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-full bg-[#068241]"></span>
              <span>[04 // STARTUP SIZING &amp; LAUNCH TIMELINE]</span>
            </div>
            <h2 className="font-serif-display text-3xl sm:text-5xl font-normal text-[#121211]">
              Calculate your pilot launch timeline.
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-[14.5px] text-[#55534E] max-w-md">
            Compare traditional sponsor bank vendor integrations against Finclusive&apos;s rapid pilot onboarding pipeline.
          </p>
        </div>

        {/* Interactive Calculator Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 border-[1.5px] border-[#121211] shadow-[4px_4px_0px_#121211] space-y-6">
            
            {/* Slider 1: Transaction Volume */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-[14px] font-semibold text-[#121211]">
                  Target Pilot Monthly Transactions
                </label>
                <span className="font-mono-tag text-[13px] font-bold text-[#068241] bg-[#E6F8EE] px-2.5 py-0.5 border border-[#8CE0B0]">
                  {volume.toLocaleString()}k tx/mo
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="50"
                step="1"
                value={volume}
                onChange={(e) => setVolume(Number(e.target.value))}
                className="w-full h-2 bg-[#DCD8CF] accent-[#068241] rounded-none cursor-pointer"
              />
              <div className="flex justify-between text-[11px] font-mono-tag text-[#8E8B82] mt-1">
                <span>1,000 tx (MVP)</span>
                <span>20,000 tx</span>
                <span>50,000 tx (Growth)</span>
              </div>
            </div>

            {/* Selector 2: Jurisdictions */}
            <div>
              <label className="block text-[14px] font-semibold text-[#121211] mb-2">
                Target Launch Corridors
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 1, label: "Single (UK or EU)" },
                  { id: 2, label: "UK + EU Combined" },
                  { id: 3, label: "Multi-Currency" },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setJurisdictions(item.id)}
                    className={`py-2 px-3 text-[12px] font-semibold border text-center transition-all ${
                      jurisdictions === item.id
                        ? "border-[#121211] bg-[#068241] text-white shadow-[2px_2px_0px_#121211]"
                        : "border-[#DCD8CF] bg-[#FAF8F5] text-[#55534E] hover:border-[#121211]"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Toggle 3: Card Issuance */}
            <div className="pt-4 border-t border-[#DCD8CF] flex items-center justify-between">
              <div>
                <div className="text-[14px] font-semibold text-[#121211]">Virtual Card Issuance</div>
                <div className="text-[12px] text-[#55534E]">Include programmable card issuing in pilot</div>
              </div>
              <button
                type="button"
                onClick={() => setHasCards(!hasCards)}
                className={`w-12 h-6 border-[1.5px] border-[#121211] transition-colors relative flex items-center p-0.5 ${
                  hasCards ? "bg-[#068241]" : "bg-[#DCD8CF]"
                }`}
              >
                <div
                  className={`w-4 h-4 bg-white border border-[#121211] transition-transform ${
                    hasCards ? "translate-x-6" : "translate-x-0"
                  }`}
                />
              </button>
            </div>

          </div>

          {/* Results Summary Box */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 border-[1.5px] border-[#121211] shadow-[5px_5px_0px_#068241] space-y-6">
            
            <div className="flex items-center space-x-2 pb-4 border-b border-[#DCD8CF]">
              <span className="w-2.5 h-2.5 bg-[#068241]"></span>
              <span className="font-mono-tag text-[12px] font-bold text-[#121211] uppercase tracking-wider">
                TIME TO FIRST LIVE TRANSACTION
              </span>
            </div>

            {/* Big Comparison Display */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-[#FAF8F5] border border-[#DCD8CF]">
                <div className="font-mono-tag text-[11px] text-[#8E8B82] uppercase">LEGACY STACK</div>
                <div className="font-serif-display text-4xl text-[#121211] mt-2">
                  {legacyMonths.toFixed(0)} <span className="text-xl font-normal text-[#55534E]">Months</span>
                </div>
                <div className="text-[11.5px] text-[#8E8B82] mt-1">
                  Lengthy bank legal &amp; procurement cycles
                </div>
              </div>

              <div className="p-4 bg-[#E6F8EE] border-[1.5px] border-[#068241] shadow-[2px_2px_0px_#068241]">
                <div className="font-mono-tag text-[11px] text-[#068241] font-bold uppercase">FINCLUSIVE PILOT</div>
                <div className="font-serif-display text-4xl text-[#068241] font-normal mt-2">
                  {finclusiveDays} <span className="text-xl font-normal text-[#068241]">Days</span>
                </div>
                <div className="text-[11.5px] text-[#068241] font-bold mt-1">
                  Instant sandbox keys &amp; pre-configured rails
                </div>
              </div>
            </div>

            {/* Estimated Savings Metrics */}
            <div className="p-4 bg-[#E6F8EE] border border-[#8CE0B0] space-y-2">
              <div className="flex items-center justify-between text-[13px]">
                <span className="text-[#55534E]">Founding Hours Saved:</span>
                <span className="font-mono-tag font-bold text-[#068241]">
                  ~{estimatedEngineeringHoursSaved.toLocaleString()} hrs
                </span>
              </div>
              <div className="flex items-center justify-between text-[13px]">
                <span className="text-[#55534E]">Autonomous Sanction Check:</span>
                <span className="font-mono-tag font-bold text-[#121211]">Sub-85ms / check</span>
              </div>
              <div className="flex items-center justify-between text-[13px]">
                <span className="text-[#55534E]">Pilot Technical Onboarding:</span>
                <span className="font-mono-tag font-bold text-[#068241]">Cohort 1 Supported</span>
              </div>
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="brutalist-button-green w-full inline-flex items-center justify-center space-x-2 py-3 text-white font-bold text-[14px]"
            >
              <span>Apply for Pilot Onboarding</span>
              <ArrowRight className="w-4 h-4" />
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}
