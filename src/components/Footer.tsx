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
              Sovereign digital banking and autonomous cross-border payment infrastructure engineered for next-generation fintech startups.
            </p>

            <div className="mt-6 font-mono-tag text-[11px] text-[#068241] flex items-center space-x-2 font-bold">
              <span className="w-2 h-2 rounded-full bg-[#068241] animate-pulse"></span>
              <span>EARLY PILOT STAGE // ACTIVE SANDBOXES</span>
            </div>
          </div>

          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-6 font-mono-tag text-[12px]">
            <div>
              <div className="text-[#068241] font-bold uppercase mb-3 text-[11px] tracking-wider">
                SOLUTIONS
              </div>
              <ul className="space-y-2 text-[#A0A09B]">
                <li><a href="#solutions" className="hover:text-white transition-colors">BaaS Ledger Core</a></li>
                <li><a href="#solutions" className="hover:text-white transition-colors">AI Sanctions Engine</a></li>
                <li><a href="#solutions" className="hover:text-white transition-colors">Corridor FX Router</a></li>
                <li><a href="#solutions" className="hover:text-white transition-colors">Virtual IBANs</a></li>
              </ul>
            </div>

            <div>
              <div className="text-[#068241] font-bold uppercase mb-3 text-[11px] tracking-wider">
                ECOSYSTEM
              </div>
              <ul className="space-y-2 text-[#A0A09B]">
                <li>
                  <a href="https://wl.remitpe.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors inline-flex items-center space-x-1">
                    <span>RemitPe Portal</span>
                    <ArrowUpRight className="w-3 h-3 text-[#068241]" />
                  </a>
                </li>
                <li>
                  <a href="https://remitpe.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors inline-flex items-center space-x-1">
                    <span>RemitPe Main</span>
                    <ArrowUpRight className="w-3 h-3 text-[#068241]" />
                  </a>
                </li>
                <li><a href="#architecture" className="hover:text-white transition-colors">Sandbox API</a></li>
                <li><a href="#calculator" className="hover:text-white transition-colors">Startup Sizing</a></li>
              </ul>
            </div>

            <div>
              <div className="text-[#068241] font-bold uppercase mb-3 text-[11px] tracking-wider">
                CORRIDORS
              </div>
              <ul className="space-y-2 text-[#A0A09B]">
                <li>Slovenia (EU SEPA)</li>
                <li>United Kingdom</li>
                <li>United States</li>
                <li>Cross-Border Rails</li>
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
            <a href="#" className="hover:text-white">Pilot Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
