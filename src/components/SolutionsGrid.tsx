"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

const ACCELERATORS = [
  {
    title: "Autonomous SDLC Orchestration",
    subhead: "Transform requirements into verified code",
    description: "An intelligent engineering studio that maintains persistent context over digital banking assets, architecture blueprints, and regulatory bounds. It takes business requirement documents (BRDs) and wireframes to generate complete user stories, production code diffs, and automated UAT plans.",
    provenance: "Inspired by Viom Studio principles",
    metric: "Eliminates weeks of back-and-forth documentation handoffs"
  },
  {
    title: "Enterprise Process Mining & Discovery",
    subhead: "Uncover real operational workflows from telemetry",
    description: "Instead of relying on outdated manual process diagrams, our AI process discovery engine continuously analyzes core banking event streams and system logs to reconstruct actual operational workflows, identify latency bottlenecks, and synthesize automated execution DAGs.",
    provenance: "Event Mesh Process Intelligence",
    metric: "Identifies systemic friction and exception paths automatically"
  },
  {
    title: "Self-Healing Test & Regression Engine",
    subhead: "Continuous quality shifted completely left",
    description: "Autonomous regression platform driven by natural language and user journey telemetry. Generates, maintains, and automatically updates end-to-end test suites across digital channels, ensuring zero breaking changes slip into production releases.",
    provenance: "Autonomous Quality Guard",
    metric: "Tests adapt seamlessly when user interfaces evolve"
  },
  {
    title: "Model Context Protocol Tool Gateway",
    subhead: "Zero-trust bindings for sensitive enterprise data",
    description: "A secure, observable MCP gateway that allows enterprise LLM agents to safely interact with core banking ledgers, KYC registries, and internal databases without exposing credentials, leaking PII, or risking unauthorized execution.",
    provenance: "Enterprise Governance Layer",
    metric: "Enforces mandatory human confirmation for high-stakes writes"
  }
];

export function SolutionsGrid() {
  return (
    <section id="accelerators" className="py-24 sm:py-32 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
      {/* Section Header */}
      <div className="max-w-3xl">
        <h2 className="fluid-heading text-[#141715]">
          Four enterprise AI accelerators designed for resilience.
        </h2>
        <p className="mt-4 text-lg text-[#575E59] leading-relaxed">
          Engineered to optimize costs, streamline software delivery, and fuel modernization across core institutional infrastructure.
        </p>
      </div>

      {/* Editorial Stacked Panels (No 3-column AI slop card grids) */}
      <div className="mt-16 space-y-8">
        {ACCELERATORS.map((item, idx) => (
          <div
            key={idx}
            className="p-8 sm:p-12 rounded-2xl bg-white border border-[#EAE6DF] soft-elevation transition-all"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5">
                <span className="text-[12px] font-medium text-[#068241] uppercase tracking-wider">
                  {item.provenance}
                </span>
                <h3 className="fluid-subheading text-[#141715] mt-2 font-normal">
                  {item.title}
                </h3>
                <p className="text-base text-[#575E59] mt-2 font-normal">
                  {item.subhead}
                </p>
              </div>

              <div className="lg:col-span-7 flex flex-col justify-between h-full">
                <p className="text-[16px] text-[#575E59] leading-relaxed font-light">
                  {item.description}
                </p>

                <div className="mt-6 pt-6 border-t border-[#F2EFE9] flex flex-wrap items-center justify-between gap-4">
                  <span className="text-[14px] text-[#141715] font-medium">
                    {item.metric}
                  </span>
                  <a
                    href="#contact"
                    className="inline-flex items-center space-x-1.5 text-[14px] font-medium text-[#068241] hover:text-[#056B35]"
                  >
                    <span>Request Technical Blueprint</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
