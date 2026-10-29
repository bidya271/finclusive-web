import React from "react";
import { ArrowUpRight, CheckCircle2, Globe, Shield, Activity, Sparkles, Compass } from "lucide-react";

export function RemitPeCaseStudy() {
  return (
    <section id="remitpe-benchmark" className="py-16 sm:py-24 border-b-[1.5px] border-[#121211] bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Flagship Banner */}
        <div className="p-8 sm:p-12 bg-[#E6F8EE] border-[1.5px] border-[#121211] shadow-[6px_6px_0px_#068241] relative overflow-hidden">
          
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b-[1.5px] border-[#8CE0B0]">
            <div className="flex items-center space-x-3">
              <span className="w-4 h-4 bg-[#068241] border border-[#121211] inline-block shadow-[1px_1px_0px_#121211]"></span>
              <span className="font-mono-tag text-[13px] font-bold text-[#068241] uppercase tracking-wider">
                STRATEGIC VISION // POWERED IN PARTNERSHIP WITH REMITPE
              </span>
            </div>
            
            <span className="font-mono-tag text-[11px] bg-white px-2.5 py-1 border-[1.5px] border-[#068241] text-[#068241] font-bold shadow-[2px_2px_0px_#068241]">
              CORRIDOR PARTNER
            </span>
          </div>

          {/* Main content grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8 items-center">
            
            <div className="lg:col-span-7">
              <h3 className="font-serif-display text-3xl sm:text-5xl font-normal text-[#121211] leading-tight">
                Architecting the rails RemitPe envisions for borderless money movement.
              </h3>
              
              <p className="mt-4 text-[15px] text-[#55534E] leading-relaxed">
                RemitPe is on a mission to eliminate excessive fees, sluggish intermediary bank delays, and friction for global migrants. 
                Finclusive is being engineered as the underlying technical engine—unifying multi-currency virtual ledgers, AI compliance, 
                and direct corridor connections so money reaches families instantly.
              </p>

              {/* Comparison Matrix: What we want to replace vs what we are building */}
              <div className="mt-6 space-y-3">
                <div className="p-3.5 bg-white border border-[#121211] flex items-start space-x-3">
                  <span className="font-mono-tag text-[11px] font-bold text-[#D97706] bg-[#FEF3C7] px-2 py-0.5 border border-[#FDE68A] shrink-0">
                    THE LEGACY FRICTION
                  </span>
                  <div className="text-[13px] text-[#55534E]">
                    <strong className="text-[#121211]">Fragmented Banking &amp; Hidden Markups:</strong> Multi-day settlement hops across correspondent banks, opaque foreign exchange fees, and cumbersome manual AML checks.
                  </div>
                </div>

                <div className="p-3.5 bg-white border-[1.5px] border-[#068241] shadow-[2px_2px_0px_#068241] flex items-start space-x-3">
                  <span className="font-mono-tag text-[11px] font-bold text-white bg-[#068241] px-2 py-0.5 border border-[#121211] shrink-0">
                    THE REMITPE OBJECTIVE
                  </span>
                  <div className="text-[13px] text-[#121211]">
                    <strong className="text-[#068241]">Instant, Fair, and Sovereign:</strong> Real-time clearing over SEPA Instant, Faster Payments, Pix &amp; UPI, paired with intelligent compliance and zero predatory margins.
                  </div>
                </div>
              </div>
            </div>

            {/* Aspirational Focus Cards */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="bg-white p-5 border-[1.5px] border-[#121211] shadow-[3px_3px_0px_#068241]">
                <div className="font-mono-tag text-[10.5px] text-[#068241] uppercase font-bold">PRIMARY CORRIDORS</div>
                <div className="font-serif-display text-2xl sm:text-3xl font-normal text-[#068241] mt-1">EU, UK &amp; Global</div>
                <div className="text-[12px] text-[#55534E] mt-2 font-medium">Connecting major migrant routes</div>
              </div>

              <div className="bg-white p-5 border-[1.5px] border-[#121211] shadow-[3px_3px_0px_#068241]">
                <div className="font-mono-tag text-[10.5px] text-[#068241] uppercase font-bold">AML ARCHITECTURE</div>
                <div className="font-serif-display text-2xl sm:text-3xl font-normal text-[#068241] mt-1">Autonomous</div>
                <div className="text-[12px] text-[#55534E] mt-2 font-medium">Sub-second AI sanction screening</div>
              </div>

              <div className="bg-white p-5 border-[1.5px] border-[#121211] shadow-[3px_3px_0px_#068241]">
                <div className="font-mono-tag text-[10.5px] text-[#8E8B82] uppercase">SETTLEMENT GOAL</div>
                <div className="font-serif-display text-2xl sm:text-3xl font-normal text-[#121211] mt-1">Instant</div>
                <div className="text-[12px] text-[#55534E] mt-2 font-medium">Atomic ledger finality</div>
              </div>

              <div className="bg-white p-5 border-[1.5px] border-[#121211] shadow-[3px_3px_0px_#068241]">
                <div className="font-mono-tag text-[10.5px] text-[#8E8B82] uppercase">INFRASTRUCTURE</div>
                <div className="font-serif-display text-2xl sm:text-3xl font-normal text-[#121211] mt-1">BaaS Native</div>
                <div className="text-[12px] text-[#55534E] mt-2 font-medium">Built for developer agility</div>
              </div>
            </div>

          </div>

          {/* External link CTA */}
          <div className="mt-8 pt-6 border-t border-[#8CE0B0] flex flex-wrap items-center justify-between gap-4">
            <div className="text-[13.5px] text-[#55534E]">
              Explore the front-facing RemitPe product vision in development:
            </div>
            <a
              href="https://wl.remitpe.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2 bg-white border-[1.5px] border-[#121211] font-mono-tag text-[12px] font-bold text-[#068241] hover:bg-[#FAF8F5] shadow-[2px_2px_0px_#121211]"
            >
              <span>EXPLORE WL.REMITPE.COM</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
