"use client";

import React, { useState } from "react";
import { Check, ArrowRight, ShieldCheck, Play, Sparkles, Terminal, Activity, GitBranch } from "lucide-react";

interface AgentStep {
  id: string;
  name: string;
  role: string;
  focus: string;
  inputPayload: string;
  actionScript: string;
  outputArtifact: string;
  verificationBadge: string;
  status: string;
}

const SWARM_PIPELINE: AgentStep[] = [
  {
    id: "context",
    name: "Requirements Context Agent",
    role: "Natural Language to Technical Intent",
    focus: "Parsing Institutional BRDs & Regulatory Directives",
    inputPayload: "Directive: Implement continuous ISO 20022 message validation and escrow hold state for corporate cross-border accounts.",
    actionScript: "Synthesizing dynamic entity relations, risk boundaries, and idempotency guarantees across core ledger endpoints...",
    outputArtifact: "Generated 14 typed user stories, 6 architectural state diagrams, and zero-trust policy contracts.",
    verificationBadge: "VERIFIED // ZERO HALLUCINATION POLICY PASS",
    status: "CONTEXT BOUND"
  },
  {
    id: "synthesis",
    name: "Autonomous Engineering Swarm",
    role: "Deterministic Microservice Synthesis",
    focus: "TypeScript, Go & High-Concurrency Ledgers",
    inputPayload: "Input: Approved architectural intent contracts and double-entry schema bounds.",
    actionScript: "Emitting type-safe ledger mutation endpoints, database migration scripts, and MCP tool handlers...",
    outputArtifact: "Production-ready pull request: 12 clean modules, 0 compiler warnings, 100% test coverage on balance invariants.",
    verificationBadge: "STATIC ANALYSIS: PASS (0 TYPE ERRORS)",
    status: "CODE SYNTHESIZED"
  },
  {
    id: "mcp",
    name: "Model Context Protocol Guard",
    role: "Zero-Trust Tool Execution Gateway",
    focus: "Role-Based Access & PII Tokenization",
    inputPayload: "Invocation: Agent requests tool binding to institutional core banking ledger for simulated escrow clearance.",
    actionScript: "Validating HMAC session signature, checking human-in-the-loop approvals, and stripping sensitive PII...",
    outputArtifact: "Secure sandbox invocation granted. Immutable audit receipt written to cryptographic telemetry stream.",
    verificationBadge: "MCP SECURITY GATE: PASS (TOKENIZED)",
    status: "POLICY CLEARED"
  },
  {
    id: "qa",
    name: "Autonomous Regression Agent",
    role: "Self-Healing Verification Loop",
    focus: "Continuous Quality Shifted Left",
    inputPayload: "Trigger: Execution of 140 parallel customer journeys across web portal, mobile SDK, and REST API.",
    actionScript: "Running browser execution tests via Playwright; automatically adapting UI selectors to accommodate redesign shifts...",
    outputArtifact: "All 140 journeys green; regulator-ready UAT evidence dossier synthesized and signed.",
    verificationBadge: "140 / 140 PASS // AUDIT EVIDENCE SIGNED",
    status: "UAT VERIFIED"
  }
];

export function InteractivePipeline() {
  const [activeIdx, setActiveIdx] = useState(0);
  const current = SWARM_PIPELINE[activeIdx];

  return (
    <section id="pipeline" className="py-24 sm:py-32 bg-white border-y border-[#EAE6DF]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* Header */}
        <div className="max-w-3xl">
          <h2 className="fluid-heading text-[#141715]">
            How the autonomous swarm executes in production.
          </h2>
          <p className="mt-4 text-lg text-[#575E59] leading-relaxed">
            Step through the multi-agent pipeline. Every agent operates within deterministic policy bounds, 
            producing verifiable code, Model Context Protocol (MCP) tool bindings, and auditable evidence.
          </p>
        </div>

        {/* Interactive Staged Walkthrough */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Interactive Swarm Steps */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-3">
            {SWARM_PIPELINE.map((step, idx) => {
              const isActive = idx === activeIdx;
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveIdx(idx)}
                  className={`text-left p-6 rounded-2xl transition-all duration-300 ${
                    isActive
                      ? "bg-[#068241] text-white shadow-lg scale-[1.02]"
                      : "bg-[#FAF8F5] text-[#141715] hover:bg-[#F2EFE9]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-[12px] font-medium tracking-wide uppercase ${isActive ? "text-white/80" : "text-[#575E59]"}`}>
                      Phase {idx + 1} &bull; {step.status}
                    </span>
                    {isActive ? (
                      <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse"></span>
                    ) : (
                      <span className="w-2 h-2 rounded-full bg-[#D8D4CC]"></span>
                    )}
                  </div>
                  <div className="text-xl sm:text-2xl font-serif mt-2 font-normal">
                    {step.name}
                  </div>
                  <div className={`text-[13.5px] mt-1 font-light ${isActive ? "text-white/90" : "text-[#575E59]"}`}>
                    {step.role}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Live Telemetry Terminal */}
          <div className="lg:col-span-7 bg-[#0D1411] rounded-2xl p-8 sm:p-10 text-[#FAF8F5] flex flex-col justify-between min-h-[460px] soft-elevation">
            <div>
              {/* Terminal Titlebar */}
              <div className="flex items-center justify-between pb-6 border-b border-[#232E27]">
                <div className="flex items-center space-x-3">
                  <span className="w-3 h-3 rounded-full bg-[#068241] animate-pulse"></span>
                  <span className="text-[13px] font-mono text-[#8E9690] uppercase tracking-wider">
                    SWARM TELEMETRY &bull; NODE {activeIdx + 1}/4
                  </span>
                </div>
                <span className="text-[11px] text-[#068241] bg-[#068241]/20 px-3 py-1 rounded-full font-mono uppercase">
                  {current.status}
                </span>
              </div>

              {/* Input Context */}
              <div className="mt-6">
                <div className="text-[11px] font-mono text-[#8E9690] uppercase tracking-wider">
                  Target Intent &amp; Policy Bounds
                </div>
                <p className="mt-2 text-base text-[#FAF8F5] font-light leading-relaxed">
                  {current.inputPayload}
                </p>
              </div>

              {/* Execution Script */}
              <div className="mt-6 pt-5 border-t border-[#232E27]/80">
                <div className="text-[11px] font-mono text-[#8E9690] uppercase tracking-wider">
                  Live Swarm Execution
                </div>
                <p className="mt-2 text-[14.5px] text-[#8CE0B0] font-mono leading-relaxed">
                  &gt; {current.actionScript}
                </p>
              </div>

              {/* Output Artifact */}
              <div className="mt-6 pt-5 border-t border-[#232E27]">
                <div className="text-[11px] font-mono text-[#068241] uppercase tracking-wider">
                  Synthesized Deliverable
                </div>
                <p className="mt-2 text-base text-[#E2DDD3] font-light leading-relaxed">
                  {current.outputArtifact}
                </p>
              </div>
            </div>

            {/* Bottom Proof Bar */}
            <div className="mt-8 pt-6 border-t border-[#232E27] flex flex-wrap items-center justify-between gap-4 text-[13px] text-[#8E9690]">
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-[#068241]" />
                <span className="font-mono text-xs text-[#FAF8F5]">{current.verificationBadge}</span>
              </div>

              <button
                onClick={() => setActiveIdx((prev) => (prev + 1) % SWARM_PIPELINE.length)}
                className="text-white hover:text-[#068241] text-xs font-mono uppercase tracking-wider transition-colors inline-flex items-center space-x-1"
              >
                <span>Cycle to Next Phase</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
