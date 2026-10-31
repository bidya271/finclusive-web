import React from "react";
import { ArrowUpRight, Bot, Cpu, Layers, Workflow, ShieldCheck, CheckCircle2, GitPullRequest } from "lucide-react";

export function AgenticWorkflowShowcase() {
  return (
    <section id="workflows" className="py-16 sm:py-24 border-b-[1.5px] border-[#121211] bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner */}
        <div className="p-8 sm:p-12 bg-[#E6F8EE] border-[1.5px] border-[#121211] shadow-[6px_6px_0px_#068241] relative overflow-hidden">
          
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b-[1.5px] border-[#8CE0B0]">
            <div className="flex items-center space-x-3">
              <span className="w-4 h-4 bg-[#068241] border border-[#121211] inline-block shadow-[1px_1px_0px_#121211]"></span>
              <span className="font-mono-tag text-[13px] font-bold text-[#068241] uppercase tracking-wider">
                STRATEGIC FOCUS // AGENTIC AI ACROSS THE ENTERPRISE SDLC
              </span>
            </div>
            
            <span className="font-mono-tag text-[11px] bg-white px-2.5 py-1 border-[1.5px] border-[#068241] text-[#068241] font-bold shadow-[2px_2px_0px_#068241]">
              VIOM-CLASS ACCELERATOR ARCHITECTURE
            </span>
          </div>

          {/* Main content grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8 items-center">
            
            <div className="lg:col-span-7">
              <h3 className="font-serif-display text-3xl sm:text-5xl font-normal text-[#121211] leading-tight">
                From BRDs and wireframes to verified code and automated regression.
              </h3>
              
              <p className="mt-4 text-[15px] text-[#55534E] leading-relaxed">
                Traditional enterprise software delivery suffers from endless requirement handoffs, disconnected testing cycles, 
                and fragile maintenance. Finclusive builds autonomous agent swarms that maintain context over business assets, 
                synthesizing verified user stories, executing regression suites, and orchestrating deployment pipelines.
              </p>

              {/* Comparison Matrix: Old Way vs Agentic Workflow */}
              <div className="mt-6 space-y-3">
                <div className="p-3.5 bg-white border border-[#121211] flex items-start space-x-3">
                  <span className="font-mono-tag text-[11px] font-bold text-[#D97706] bg-[#FEF3C7] px-2 py-0.5 border border-[#FDE68A] shrink-0">
                    MANUAL SDLC
                  </span>
                  <div className="text-[13px] text-[#55534E]">
                    <strong className="text-[#121211]">Fragmented Tool Silos:</strong> Months spent writing documentation by hand, manual ticket shuffling in Jira, and delayed UAT cycles run weeks after feature code is cut.
                  </div>
                </div>

                <div className="p-3.5 bg-white border-[1.5px] border-[#068241] shadow-[2px_2px_0px_#068241] flex items-start space-x-3">
                  <span className="font-mono-tag text-[11px] font-bold text-white bg-[#068241] px-2 py-0.5 border border-[#121211] shrink-0">
                    AGENTIC AI WORKFLOW
                  </span>
                  <div className="text-[13px] text-[#121211]">
                    <strong className="text-[#068241]">Context-Aware Autonomous Swarms:</strong> Continuous requirement graph synchronization, automated user story and test plan generation, and self-healing regression test execution.
                  </div>
                </div>
              </div>
            </div>

            {/* Aspirational Focus Cards */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="bg-white p-5 border-[1.5px] border-[#121211] shadow-[3px_3px_0px_#068241]">
                <div className="font-mono-tag text-[10.5px] text-[#068241] uppercase font-bold">REQUIREMENTS</div>
                <div className="font-serif-display text-2xl sm:text-3xl font-normal text-[#068241] mt-1">Autonomous</div>
                <div className="text-[12px] text-[#55534E] mt-2 font-medium">BRD to verified user stories &amp; tests</div>
              </div>

              <div className="bg-white p-5 border-[1.5px] border-[#121211] shadow-[3px_3px_0px_#068241]">
                <div className="font-mono-tag text-[10.5px] text-[#068241] uppercase font-bold">TOOL PROTOCOL</div>
                <div className="font-serif-display text-2xl sm:text-3xl font-normal text-[#068241] mt-1">MCP Native</div>
                <div className="text-[12px] text-[#55534E] mt-2 font-medium">Model Context Protocol integration</div>
              </div>

              <div className="bg-white p-5 border-[1.5px] border-[#121211] shadow-[3px_3px_0px_#121211]">
                <div className="font-mono-tag text-[10.5px] text-[#8E8B82] uppercase">TEST ENGINE</div>
                <div className="font-serif-display text-2xl sm:text-3xl font-normal text-[#121211] mt-1">Self-Healing</div>
                <div className="text-[12px] text-[#55534E] mt-2 font-medium">Adaptive NLP test suites shifted left</div>
              </div>

              <div className="bg-white p-5 border-[1.5px] border-[#121211] shadow-[3px_3px_0px_#121211]">
                <div className="font-mono-tag text-[10.5px] text-[#8E8B82] uppercase">PROCESS AI</div>
                <div className="font-serif-display text-2xl sm:text-3xl font-normal text-[#121211] mt-1">Discovery</div>
                <div className="text-[12px] text-[#55534E] mt-2 font-medium">Telemetry event stream optimization</div>
              </div>
            </div>

          </div>

          {/* Bottom highlight */}
          <div className="mt-8 pt-6 border-t border-[#8CE0B0] flex flex-wrap items-center justify-between gap-4 font-mono-tag text-[12px]">
            <div className="text-[#55534E]">
              Engineered with zero-trust guardrails, deterministic audit logs, and human-in-the-loop validation.
            </div>
            <a
              href="#contact"
              className="inline-flex items-center space-x-2 px-4 py-2 bg-white border-[1.5px] border-[#121211] font-bold text-[#068241] hover:bg-[#FAF8F5] shadow-[2px_2px_0px_#121211]"
            >
              <span>DISCUSS DESIGN PARTNERSHIP</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
