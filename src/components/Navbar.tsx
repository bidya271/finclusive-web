"use client";

import React, { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FAF8F5]/90 backdrop-blur-md py-4 border-b border-[#EAE6DF]"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 flex items-center justify-between">
        {/* Brand Wordmark */}
        <a href="#" className="flex items-center space-x-3 group">
          <span className="w-3 h-3 rounded-full bg-[#068241] transition-transform duration-300 group-hover:scale-125"></span>
          <span className="font-serif text-2xl tracking-tight text-[#141715] font-normal">
            finclusive<span className="text-[#068241]">.si</span>
          </span>
        </a>

        {/* Center Links */}
        <nav className="hidden md:flex items-center space-x-10 text-[15px] font-medium text-[#575E59]">
          <a href="#accelerators" className="hover:text-[#141715] transition-colors">
            Accelerators
          </a>
          <a href="#pipeline" className="hover:text-[#141715] transition-colors">
            Interactive Engine
          </a>
          <a href="#protocol" className="hover:text-[#141715] transition-colors">
            Protocol &amp; MCP
          </a>
          <a href="#roadmap" className="hover:text-[#141715] transition-colors">
            Roadmap
          </a>
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="#contact"
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-[#141715] text-[#FAF8F5] text-[14px] font-medium hover:bg-[#068241] transition-all duration-200"
          >
            <span>Partner with Us</span>
            <ArrowUpRight className="w-4 h-4 opacity-70" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-[#141715]"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-[#FAF8F5] border-b border-[#EAE6DF] px-6 py-6 space-y-4">
          <a
            href="#accelerators"
            onClick={() => setMobileOpen(false)}
            className="block text-lg text-[#141715]"
          >
            Accelerators
          </a>
          <a
            href="#pipeline"
            onClick={() => setMobileOpen(false)}
            className="block text-lg text-[#141715]"
          >
            Interactive Engine
          </a>
          <a
            href="#protocol"
            onClick={() => setMobileOpen(false)}
            className="block text-lg text-[#141715]"
          >
            Protocol &amp; MCP
          </a>
          <a
            href="#roadmap"
            onClick={() => setMobileOpen(false)}
            className="block text-lg text-[#141715]"
          >
            Roadmap
          </a>
          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="inline-flex w-full justify-center items-center py-3 rounded-full bg-[#068241] text-white font-medium"
            >
              Partner with Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
