"use client";

import React, { useState } from "react";
import { Check, ArrowRight, ShieldCheck, Play, RotateCcw } from "lucide-react";

interface AgentStep {
  id: string;
  agent: string;
  domain: string;
  input: string;
  output: string;
  runtimeProof: string;
}

const SWARM_STEPS: AgentStep[] = [
  {
    id: "context",
    agent: "Requirements Context Agent",
    domain: "Natural Language to Technical Intent",
    input: "Enterprise banking BRD: Instant cross-border escrow clearing with ISO 20022 messaging.",
    output: "Synthesized 18 validated user stories, schema contracts, and acceptance criteria.",
    runtimeProof: "Context Graph verified against 42 institutional policies with zero hallucination."
  },
  {
    id: "synthesis",
    agent: "Core Engineering Swarm",
    domain: "Deterministic Code & API Synthesis",
    input: "Generated architectural contracts & ledger interfaces.",
    output: "Full TypeScript microservice stack, database migrations, and Model Context Protocol tool endpoints.",
    runtimeProof: "Static analysis: 0 type errors, 100% test coverage on double-entry accounting state."
  },
  {
    id: "mcp",
    agent: "Policy & MCP Governance Guard",
    domain: "Zero-Trust Tool Execution Gate",
    input: "Tool invocation request: connect to core ledger & dispatch simulated clearing batches.",
    output: "Enforced PII tokenization, rate caps, and human authorization thresholds for ledger writes.",
    runtimeProof: "Audit trail hashed and committed to immutable verification log."
  },
  {
    id: "qa",
    agent: "Autonomous Regression Agent",
    domain: "Self-Healing Verification Loop",
    input: "Synthesized Playwright & API integration test journeys across web, mobile, and REST interfaces.",
    output: "Executed 140 parallel journey runs; automatically repaired 3 selector shifts from UI update.",
    runtimeProof: "Signed verification attestation ready for banking compliance review."
  }
];

export function InteractivePipeline() {
  const [activeIdx, setActiveIdx] = useState(0);
  const current = SWARM_STEPS[activeIdx];

  return (
    <section id="pipeline" className="py-24 sm:py-32 bg-white border-y border-[#EAE6DF]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* Section Heading */}
        <div className="max-w-3xl">
          <h2 className="fluid-heading text-[#141715]">
            See how the autonomous swarm resolves complex work.
          </h2>
          <p className="mt-4 text-lg text-[#575E59] leading-relaxed">
            Step through the multi-agent orchestration pipeline. Each agent executes within strict deterministic boundaries, producing verifiable engineering artifacts.
          </p>
        </div>

        {/* The Live Interactive Thing */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Interactive Navigation Pills */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-3">
            {SWARM_STEPS.map((step, idx) => {
              const isActive = idx === activeIdx;
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveIdx(idx)}
                  className={`text-left p-6 rounded-xl transition-all duration-200 ${
                    isActive
                      ? "bg-[#068241] text-white shadow-md"
                      : "bg-[#FAF8F5] text-[#141715] hover:bg-[#F2EFE9]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-[12px] font-medium tracking-wide uppercase ${isActive ? "text-white/80" : "text-[#575E59]"}`}>
                      Phase {idx + 1}
                    </span>
                    {isActive && <Check className="w-4 h-4 text-white" />}
                  </div>
                  <div className="text-xl font-serif mt-2 font-normal">
                    {step.agent}
                  </div>
                  <div className={`text-[13px] mt-1 ${isActive ? "text-white/90" : "text-[#575E59]"}`}>
                    {step.domain}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Live Artifact Inspection Terminal */}
          <div className="lg:col-span-7 bg-[#0D1411] rounded-2xl p-8 sm:p-10 text-[#FAF8F5] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#232E27]">
                <div className="flex items-center space-x-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#068241] animate-pulse"></span>
                  <span className="text-[13px] font-mono text-[#8E9690] uppercase tracking-wider">
                    ACTIVE AGENT TELEMETRY
                  </span>
                </div>
                <span className="text-[12px] text-[#068241] bg-[#068241]/20 px-2.5 py-1 rounded-full font-mono">
                  DETERMINISTIC // VERIFIED
                </span>
              </div>

              {/* Input block */}
              <div className="mt-6">
                <div className="text-[12px] font-mono text-[#8E9690] uppercase tracking-wider">
                  System Context &amp; Objective
                </div>
                <p className="mt-2 text-base text-[#FAF8F5] font-light leading-relaxed">
                  {current.input}
                </p>
              </div>

              {/* Output block */}
              <div className="mt-6 pt-6 border-t border-[#232E27]">
                <div className="text-[12px] font-mono text-[#068241] uppercase tracking-wider">
                  Generated Agent Deliverable
                </div>
                <p className="mt-2 text-base text-[#E2DDD3] font-light leading-relaxed">
                  {current.output}
                </p>
              </div>
            </div>

            {/* Bottom Verification Note */}
            <div className="mt-8 pt-6 border-t border-[#232E27] flex items-center justify-between text-[13px] text-[#8E9690]">
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-[#068241]" />
                <span>{current.runtimeProof}</span>
              </div>
              <button
                onClick={() => setActiveIdx((prev) => (prev + 1) % SWARM_STEPS.length)}
                className="text-white hover:text-[#068241] text-xs font-mono uppercase tracking-wider transition-colors inline-flex items-center space-x-1"
              >
                <span>Next Step</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
