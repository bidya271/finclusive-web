import React from "react";
import { ArrowUpRight, Terminal, Bot, Workflow, Layers, ShieldCheck, Cpu } from "lucide-react";
import { LivePipeline } from "./LivePipeline";
import { ASPIRATIONAL_PILLARS } from "@/lib/constants";

export function HeroSection() {
  return (
    <section className="relative pt-12 pb-16 sm:pt-20 sm:pb-24 border-b-[1.5px] border-[#121211] canvas-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Kicker badge */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#E6F8EE] border-[1.5px] border-[#068241] shadow-[2px_2px_0px_#068241]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#068241] animate-pulse"></span>
            <span className="font-mono-tag text-[12px] font-bold text-[#068241] tracking-wide uppercase">
              AGENTIC AI FOR FINANCIAL ENTERPRISE &bull; IN DEVELOPMENT
            </span>
          </div>

          <div className="inline-flex items-center space-x-1.5 px-2.5 py-1 bg-[#F4F0FF] border-[1.5px] border-[#5033A4] font-mono-tag text-[11px] shadow-[1.5px_1.5px_0px_#5033A4]">
            <span className="text-[#55534E]">ARCHITECTURE</span>
            <span className="font-bold text-[#5033A4]">AGENTIC SDLC &amp; MCP PROTOCOL</span>
          </div>
        </div>

        {/* Editorial Headline */}
        <div className="max-w-5xl">
          <h1 className="font-serif-display text-4xl sm:text-6xl lg:text-7xl font-normal text-[#121211] leading-[1.02] tracking-tight">
            Autonomous agentic workflows engineered for{" "}
            <em className="text-[#068241] italic font-serif">mission-critical finance</em>.
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-[#55534E] leading-relaxed max-w-3xl">
            We build enterprise AI accelerators and autonomous agent swarms that operate across the software lifecycle 
            and core operations: transforming requirements into verified code, discovering hidden process inefficiencies, 
            and automating continuous regulatory compliance with deterministic governance.
          </p>
        </div>

        {/* Action CTAs */}
        <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
          <a
            href="#contact"
            className="brutalist-button-green inline-flex items-center justify-center space-x-3 px-6 py-3.5 text-white font-bold text-[15px] transition-transform"
          >
            <span>Partner With Our AI Architects</span>
            <ArrowUpRight className="w-5 h-5" />
          </a>

          <a
            href="#architecture"
            className="brutalist-button inline-flex items-center justify-center space-x-2 px-6 py-3.5 bg-white text-[#121211] font-semibold text-[15px] hover:bg-[#F3EFE6] transition-colors"
          >
            <Terminal className="w-4 h-4 text-[#5033A4]" />
            <span>Explore Agent Runtime &amp; MCP</span>
          </a>

          <div className="sm:ml-4 flex items-center space-x-2 text-xs font-mono-tag text-[#068241] font-bold bg-[#E6F8EE] px-3 py-2 border border-[#8CE0B0]">
            <ShieldCheck className="w-4 h-4 text-[#068241]" />
            <span>ZERO-DATA RETENTION &bull; AIR-GAPPED MCP GATES</span>
          </div>
        </div>

        {/* Live Interactive Agent Workflow Simulation */}
        <div className="mt-12 sm:mt-16">
          <LivePipeline />
        </div>

        {/* Aspirational Mission Pillars */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {ASPIRATIONAL_PILLARS.map((item, i) => (
            <div
              key={i}
              className="bg-white border-[1.5px] border-[#121211] p-5 shadow-[3px_3px_0px_#068241] hover:border-[#068241] transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="font-mono-tag text-[10.5px] text-[#068241] uppercase tracking-wider font-bold">
                  {item.label}
                </div>
                <div className="text-2xl font-serif-display font-normal text-[#121211] mt-2">
                  {item.target}
                </div>
              </div>
              <div className="text-xs text-[#55534E] mt-3 font-medium leading-relaxed pt-3 border-t border-[#DCD8CF]">
                {item.mission}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
