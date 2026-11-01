"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

const MILESTONES = [
  {
    quarter: "Phase 1: Design Partner Alpha",
    focus: "Context Graph & Requirements Engine",
    deliverables: "Autonomous synthesis of user stories, architectural diagrams, and schema contracts directly from institutional BRD uploads."
  },
  {
    quarter: "Phase 2: MCP Tool Gateway",
    focus: "Zero-Trust Banking Integrations",
    deliverables: "Standardized Model Context Protocol server connectors for core banking ledgers, identity verification suites, and compliance event meshes."
  },
  {
    quarter: "Phase 3: Self-Healing Regression",
    focus: "Continuous Quality & UAT Automation",
    deliverables: "Autonomous Playwright & API regression suites shifting quality assurance completely left, with self-healing selector adaptation."
  },
  {
    quarter: "Phase 4: Telemetry Process Mining",
    focus: "Operational Optimization DAGs",
    deliverables: "Automated discovery of enterprise process variants, latency bottlenecks, and real-time synthesis of agentic approval workflows."
  }
];

export function RoadmapSection() {
  return (
    <section id="roadmap" className="py-24 sm:py-32 bg-white border-t border-[#EAE6DF]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className="max-w-3xl">
          <h2 className="fluid-heading text-[#141715]">
            Engineering roadmap &amp; release phases.
          </h2>
          <p className="mt-4 text-lg text-[#575E59] leading-relaxed">
            Our deliberate build sequence. We prioritize deterministic safety, rigorous compliance verification, and practical institutional utility.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {MILESTONES.map((item, idx) => (
            <div
              key={idx}
              className="p-8 sm:p-10 rounded-2xl bg-[#FAF8F5] border border-[#EAE6DF] flex flex-col justify-between"
            >
              <div>
                <span className="text-[12px] font-medium text-[#068241] uppercase tracking-wider">
                  {item.quarter}
                </span>
                <h3 className="fluid-subheading text-[#141715] mt-2 font-normal">
                  {item.focus}
                </h3>
                <p className="mt-4 text-[15px] text-[#575E59] leading-relaxed font-light">
                  {item.deliverables}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#EAE6DF]">
                <a
                  href="#contact"
                  className="inline-flex items-center space-x-1 text-sm font-medium text-[#141715] hover:text-[#068241]"
                >
                  <span>Inquire about this milestone</span>
                  <ArrowUpRight className="w-4 h-4 opacity-70" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
