"use client";

import React, { useState } from "react";
import { ArrowUpRight, Menu, X, Bot, Sparkles, Workflow } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#FAF8F5]/95 backdrop-blur-md border-b-[1.5px] border-[#121211]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo & Operational Status */}
          <div className="flex items-center space-x-4">
            <a href="#" className="flex items-center space-x-2.5 group">
              <div className="flex items-center -space-x-1">
                <span className="w-4 h-4 bg-[#5033A4] border-[1.5px] border-[#121211] inline-block shadow-[1.5px_1.5px_0px_#121211]"></span>
                <span className="w-4 h-4 bg-[#068241] border-[1.5px] border-[#121211] inline-block shadow-[1.5px_1.5px_0px_#121211]"></span>
              </div>
              <span className="font-serif-display text-2xl sm:text-3xl font-bold tracking-tight text-[#121211]">
                finclusive<span className="text-[#068241]">.si</span>
              </span>
            </a>

            <div className="hidden md:flex items-center pl-3 border-l-[1.5px] border-[#DCD8CF] space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#068241] animate-pulse ring-2 ring-[#068241]/20"></span>
              <span className="font-mono-tag text-[11px] text-[#068241] font-bold uppercase tracking-wider bg-[#E6F8EE] px-2 py-0.5 border border-[#8CE0B0]">
                AGENTIC AI WORKFLOWS // IN DEVELOPMENT
              </span>
            </div>
          </div>

          {/* Clean Nav links without RemitPe */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a 
              href="#workflows" 
              className="text-[14.5px] font-medium text-[#121211] hover:text-[#068241] transition-colors"
            >
              Agentic Workflows
            </a>
            <a 
              href="#solutions" 
              className="text-[14.5px] font-medium text-[#121211] hover:text-[#068241] transition-colors"
            >
              Enterprise AI Accelerators
            </a>
            <a 
              href="#architecture" 
              className="text-[14.5px] font-medium text-[#121211] hover:text-[#068241] transition-colors"
            >
              MCP &amp; Agent Runtime
            </a>
            <a 
              href="#roadmap" 
              className="text-[14.5px] font-medium text-[#121211] hover:text-[#068241] transition-colors"
            >
              Vision &amp; Roadmap
            </a>
          </nav>

          {/* Right Action */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href="#contact"
              className="brutalist-button-green inline-flex items-center space-x-2 px-4 py-2 text-[13.5px] font-bold tracking-wide"
            >
              <span>Connect with AI Architects</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile hamburger */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 border-[1.5px] border-[#121211] bg-white text-[#121211] focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t-[1.5px] border-[#121211] space-y-3 bg-[#FAF8F5]">
            <a
              href="#workflows"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-2 py-1 text-base font-medium text-[#121211]"
            >
              Agentic Workflows
            </a>
            <a
              href="#solutions"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-2 py-1 text-base font-medium text-[#121211]"
            >
              Enterprise AI Accelerators
            </a>
            <a
              href="#architecture"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-2 py-1 text-base font-medium text-[#121211]"
            >
              MCP &amp; Agent Runtime
            </a>
            <a
              href="#roadmap"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-2 py-1 text-base font-medium text-[#121211]"
            >
              Vision &amp; Roadmap
            </a>
            <div className="pt-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full brutalist-button-green inline-flex items-center justify-center space-x-2 px-4 py-2.5 text-[14px] font-bold tracking-wide"
              >
                <span>Connect with AI Architects</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
