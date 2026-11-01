import React from "react";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0D1411] text-[#FAF8F5] pt-20 pb-12 border-t border-[#232E27]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#232E27]">
          {/* Brand Col */}
          <div className="md:col-span-6">
            <a href="#" className="flex items-center space-x-3">
              <span className="w-3 h-3 rounded-full bg-[#068241]"></span>
              <span className="font-serif text-3xl tracking-tight text-white font-normal">
                finclusive<span className="text-[#068241]">.si</span>
              </span>
            </a>
            <p className="mt-4 text-[16px] text-[#8E9690] leading-relaxed max-w-md font-light">
              Autonomous agentic AI workflows, enterprise accelerators, and Model Context Protocol infrastructure engineered for mission-critical financial systems.
            </p>
          </div>

          {/* Nav Columns */}
          <div className="md:col-span-3">
            <div className="text-[12px] font-medium text-white uppercase tracking-wider mb-4">
              Accelerators
            </div>
            <ul className="space-y-3 text-[14px] text-[#8E9690]">
              <li>
                <a href="#accelerators" className="hover:text-white transition-colors">
                  Autonomous SDLC Studio
                </a>
              </li>
              <li>
                <a href="#accelerators" className="hover:text-white transition-colors">
                  Process Mining &amp; Optimization
                </a>
              </li>
              <li>
                <a href="#accelerators" className="hover:text-white transition-colors">
                  Self-Healing Regression
                </a>
              </li>
              <li>
                <a href="#protocol" className="hover:text-white transition-colors">
                  Model Context Protocol
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="text-[12px] font-medium text-white uppercase tracking-wider mb-4">
              Ecosystem
            </div>
            <ul className="space-y-3 text-[14px] text-[#8E9690]">
              <li>
                <a href="#pipeline" className="hover:text-white transition-colors">
                  Interactive Pipeline
                </a>
              </li>
              <li>
                <a href="#protocol" className="hover:text-white transition-colors">
                  Developer Interfaces
                </a>
              </li>
              <li>
                <a href="#roadmap" className="hover:text-white transition-colors">
                  Engineering Roadmap
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Design Partner Program
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8E9690]">
          <div>
            &copy; 2026 Finclusive.si (Finclusive Tech d.o.o. / Finclusive Tech Pvt. Ltd.). All rights reserved.
          </div>
          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-white transition-colors">Security Architecture</a>
            <a href="#" className="hover:text-white transition-colors">Responsible AI Governance</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Framework</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
