"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="pt-36 pb-20 sm:pt-48 sm:pb-32 px-6 sm:px-10 lg:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-end">
        {/* Left Column: Two-line confident display headline */}
        <div className="lg:col-span-8">
          <h1 className="fluid-display text-[#141715]">
            Autonomous agentic software for financial institutions.
          </h1>

          <p className="mt-8 text-xl sm:text-2xl text-[#575E59] font-normal leading-relaxed max-w-2xl">
            We architect enterprise AI accelerators that transform complex regulatory requirements, 
            banking operations, and software delivery into self-orchestrating, verified execution swarms.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center space-x-2.5 px-7 py-3.5 rounded-full bg-[#068241] text-white text-[15px] font-medium hover:bg-[#056B35] transition-all duration-200 shadow-sm"
            >
              <span>Explore Partnership</span>
              <ArrowUpRight className="w-4 h-4 opacity-80" />
            </a>

            <a
              href="#accelerators"
              className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-full bg-white text-[#141715] text-[15px] font-medium border border-[#E2DDD3] hover:border-[#141715] transition-all duration-200"
            >
              <span>View Accelerators</span>
            </a>
          </div>
        </div>

        {/* Right Column: Grounded Thesis & Live Indicator */}
        <div className="lg:col-span-4 bg-[#F2EFE9] rounded-2xl p-8 sm:p-10 flex flex-col justify-between min-h-[300px]">
          <div>
            <div className="flex items-center space-x-2 text-[13px] text-[#068241] font-medium tracking-wide">
              <span className="w-2 h-2 rounded-full bg-[#068241] animate-pulse"></span>
              <span>EARLY STAGE DESIGN COHORT</span>
            </div>
            <h2 className="fluid-subheading text-[#141715] mt-4">
              Eliminating the handoff tax in banking technology.
            </h2>
          </div>

          <div className="pt-6 border-t border-[#E0DCD3] text-[14px] text-[#575E59] leading-normal">
            Inspired by centers of intelligence and Model Context Protocol architectures. Built for regulated precision.
          </div>
        </div>
      </div>
    </section>
  );
}
