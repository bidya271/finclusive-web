import React from "react";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#121211] text-[#FAF8F5] pt-16 pb-12 border-t-[1.5px] border-[#121211]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top brand row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-[#2A2A29]">
          
          <div className="md:col-span-5">
            <div className="flex items-center space-x-2.5">
              <span className="w-3.5 h-3.5 bg-[#068241] border border-white"></span>
              <span className="font-serif-display text-3xl font-bold tracking-tight text-white">
                finclusive<span className="text-[#068241]">.si</span>
              </span>
            </div>
            
            <p className="mt-4 text-[14px] text-[#A0A09B] leading-relaxed max-w-sm">
              Autonomous agentic AI workflows, enterprise accelerators, and secure Model Context Protocol infrastructure engineered for mission-critical financial systems.
            </p>

            <div className="mt-6 font-mono-tag text-[11px] text-[#068241] flex items-center space-x-2 font-bold">
              <span className="w-2 h-2 rounded-full bg-[#068241] animate-pulse"></span>
              <span>EARLY PILOT STAGE // ACTIVE SANDBOXES</span>
            </div>
          </div>

          <div className="md:col-span-7 grid grid-cols-2 gap-8 font-mono-tag text-[12px]">
            <div>
              <div className="text-[#068241] font-bold uppercase mb-3 text-[11px] tracking-wider">
                SOLUTIONS &amp; ACCELERATORS
              </div>
              <ul className="space-y-2 text-[#A0A09B]">
                <li><a href="#solutions" className="hover:text-white transition-colors">Agentic SDLC Studio</a></li>
                <li><a href="#solutions" className="hover:text-white transition-colors">Enterprise MCP Gateways</a></li>
                <li><a href="#solutions" className="hover:text-white transition-colors">Process Discovery &amp; Optimization</a></li>
                <li><a href="#solutions" className="hover:text-white transition-colors">Autonomous Regression Testing</a></li>
              </ul>
            </div>

            <div>
              <div className="text-[#068241] font-bold uppercase mb-3 text-[11px] tracking-wider">
                PLATFORM &amp; DEVELOPERS
              </div>
              <ul className="space-y-2 text-[#A0A09B]">
                <li><a href="#workflows" className="hover:text-white transition-colors">Agent Swarm Topologies</a></li>
                <li><a href="#architecture" className="hover:text-white transition-colors">Model Context Protocol (MCP)</a></li>
                <li><a href="#roadmap" className="hover:text-white transition-colors">Architecture Roadmap</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Design Partner Program</a></li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom row: disclaimer & copyright */}
        <div className="pt-8 flex flex-col md:flex-row md:items-center justify-between gap-4 font-mono-tag text-[11px] text-[#777]">
          <div>
            &copy; 2026 Finclusive.si (Finclusive Tech d.o.o. / Finclusive Tech Pvt. Ltd.). All rights reserved.
          </div>

          <div className="flex items-center space-x-6 text-[#A0A09B]">
            <a href="#" className="hover:text-white">Security Disclosures</a>
            <a href="#" className="hover:text-white">Privacy Architecture</a>
            <a href="#" className="hover:text-white">Responsible AI Framework</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
