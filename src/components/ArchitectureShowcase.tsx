"use client";

import React, { useState } from "react";
import { CODE_SNIPPETS } from "@/lib/constants";
import { Terminal, Copy, Check, Code2, ShieldAlert, BookOpen } from "lucide-react";

export function ArchitectureShowcase() {
  const [activeTab, setActiveTab] = useState<"account" | "compliance" | "ledger">("account");
  const [copied, setCopied] = useState(false);

  const current = CODE_SNIPPETS[activeTab];

  const handleCopy = () => {
    navigator.clipboard.writeText(current.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="architecture" className="py-16 sm:py-24 border-b-[1.5px] border-[#121211] bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b-[1.5px] border-[#121211]">
          <div>
            <div className="flex items-center space-x-2 font-mono-tag text-[12px] text-[#068241] font-bold uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-full bg-[#068241]"></span>
              <span>[03 // DEVELOPER SANDBOX ARTIFACTS]</span>
            </div>
            <h2 className="font-serif-display text-3xl sm:text-5xl font-normal text-[#121211]">
              Engineered like software, not legacy banking.
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-[14.5px] text-[#55534E] max-w-md">
            Inspect clean developer interfaces for programmatic account provisioning, AI risk supervisor prompts, and immutable double-entry ledger state.
          </p>
        </div>

        {/* Code Sandbox Display */}
        <div className="border-[1.5px] border-[#121211] bg-[#121211] text-[#FAF8F5] shadow-[6px_6px_0px_#068241] overflow-hidden">
          
          {/* Window Titlebar */}
          <div className="bg-[#1C1C1B] px-4 py-3 border-b border-[#333] flex flex-wrap items-center justify-between gap-3">
            
            {/* Tabs */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setActiveTab("account")}
                className={`px-3 py-1.5 font-mono-tag text-[12px] font-bold border transition-all ${
                  activeTab === "account"
                    ? "bg-[#068241] text-white border-[#068241]"
                    : "bg-[#252524] text-[#AAA] border-transparent hover:text-white"
                }`}
              >
                01. Provision IBAN Account
              </button>

              <button
                onClick={() => setActiveTab("compliance")}
                className={`px-3 py-1.5 font-mono-tag text-[12px] font-bold border transition-all ${
                  activeTab === "compliance"
                    ? "bg-[#068241] text-white border-[#068241]"
                    : "bg-[#252524] text-[#AAA] border-transparent hover:text-white"
                }`}
              >
                02. Agentic Risk Supervisor
              </button>

              <button
                onClick={() => setActiveTab("ledger")}
                className={`px-3 py-1.5 font-mono-tag text-[12px] font-bold border transition-all ${
                  activeTab === "ledger"
                    ? "bg-[#068241] text-white border-[#068241]"
                    : "bg-[#252524] text-[#AAA] border-transparent hover:text-white"
                }`}
              >
                03. Immutable Double-Entry
              </button>
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-3">
              <span className="font-mono-tag text-[11px] text-[#888] hidden sm:inline">
                {current.filename}
              </span>
              <button
                onClick={handleCopy}
                className="inline-flex items-center space-x-1.5 px-2.5 py-1 bg-[#2B2B2A] hover:bg-[#383837] text-white border border-[#444] font-mono-tag text-[11px] transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-[#00FFD5]" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? "COPIED" : "COPY CODE"}</span>
              </button>
            </div>
          </div>

          {/* Subheader info bar */}
          <div className="bg-[#171716] px-4 py-2 border-b border-[#2A2A29] flex items-center justify-between font-mono-tag text-[11.5px] text-[#A0A09B]">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#068241]"></span>
              <span>ENDPOINT: {current.title}</span>
            </div>
            <span className="text-[#068241] font-bold bg-[#068241]/20 px-2 py-0.5 rounded">ENV: PILOT SANDBOX</span>
          </div>

          {/* Code Viewer */}
          <div className="p-4 sm:p-6 overflow-x-auto text-[13px] sm:text-[14px] font-mono leading-relaxed bg-[#121211]">
            <pre className="text-[#EDEDED]">
              <code>{current.code}</code>
            </pre>
          </div>

          {/* Bottom terminal bar */}
          <div className="bg-[#1C1C1B] px-4 py-3 border-t border-[#333] flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-mono-tag text-[11px] text-[#888]">
            <div className="flex items-center space-x-2">
              <span className="text-[#00FFD5]">STATUS:</span>
              <span className="text-white">Active in Founding Partner Sandboxes</span>
            </div>
            <div>
              <span>SDK: </span>
              <span className="text-[#068241] font-bold">@finclusive/sdk@v0.4.0-alpha</span>
              <span className="ml-3 text-[#AAA]">TypeScript / Python</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
