"use client";

import React, { useState, useEffect } from "react";
import { Bot, RefreshCw, Cpu, CheckCircle2, ShieldAlert, GitBranch, ArrowRight } from "lucide-react";

export function LivePipeline() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: "01",
      agent: "Context Analyst Agent",
      role: "BRD & Wireframe Parser",
      task: "Ingest specification & build knowledge graph",
      status: "CONTEXT BOUND"
    },
    {
      id: "02",
      agent: "Synthesis & Code Agent",
      role: "Deterministic Core Generator",
      task: "Generate typed microservices & ledger logic",
      status: "CODE SYNTHESIZED"
    },
    {
      id: "03",
      agent: "MCP Tool Supervisor",
      role: "Model Context Protocol Gate",
      task: "Strict security bounds & sandbox validation",
      status: "POLICY CLEARED"
    },
    {
      id: "04",
      agent: "Autonomous Quality Agent",
      role: "Self-Healing Regression Engine",
      task: "Execute E2E user journeys & verify proof",
      status: "VERIFIED"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [steps.length]);

  return (
    <div id="workflows" className="w-full bg-[#FFFFFF] border-[1.5px] border-[#121211] p-5 sm:p-6 shadow-[5px_5px_0px_#068241]">
      {/* Header bar */}
      <div className="flex items-center justify-between pb-4 border-b-[1.5px] border-[#DCD8CF]">
        <div className="flex items-center space-x-2.5">
          <span className="w-3.5 h-3.5 bg-[#068241] border border-[#121211] shadow-[1px_1px_0px_#121211]"></span>
          <span className="font-mono-tag text-[12px] uppercase tracking-wider font-bold text-[#068241]">
            AUTONOMOUS AGENT WORKFLOW // SDLC &amp; ENTERPRISE ACCELERATOR
          </span>
          <span className="hidden sm:inline font-mono-tag text-[10.5px] bg-[#E6F8EE] text-[#068241] px-2 py-0.5 border border-[#8CE0B0] font-semibold">
            STATE MACHINE ACTIVE
          </span>
        </div>
        <div className="flex items-center space-x-2 font-mono-tag text-[11px] text-[#55534E]">
          <RefreshCw className="w-3.5 h-3.5 animate-spin text-[#068241]" />
          <span className="text-[#068241] font-bold">ORCHESTRATOR: ONLINE</span>
        </div>
      </div>

      {/* Steps visualization */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 my-5">
        {steps.map((step, idx) => {
          const isActive = idx === activeStep;
          const isDone = idx < activeStep;

          return (
            <div
              key={step.id}
              onClick={() => setActiveStep(idx)}
              className={`cursor-pointer p-3.5 border-[1.5px] transition-all relative ${
                isActive
                  ? "border-[#121211] bg-[#E6F8EE] shadow-[3px_3px_0px_#068241]"
                  : isDone
                  ? "border-[#8CE0B0] bg-[#E6F8EE]/60"
                  : "border-[#DCD8CF] bg-[#FAF8F5]/50 opacity-75"
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-mono-tag text-[11px] text-[#068241] font-bold">
                  [{step.id}] {step.agent}
                </span>
                <span
                  className={`text-[10px] font-mono-tag px-2 py-0.5 border font-bold ${
                    isActive
                      ? "bg-[#068241] text-white border-[#068241]"
                      : isDone
                      ? "bg-[#068241] text-white border-[#068241]"
                      : "bg-[#FAF8F5] text-[#55534E] border-[#DCD8CF]"
                  }`}
                >
                  {step.status}
                </span>
              </div>
              <div className="font-semibold text-[13.5px] text-[#121211] leading-tight">
                {step.role}
              </div>
              <div className="text-[11.5px] text-[#55534E] mt-1 leading-snug">
                {step.task}
              </div>
            </div>
          );
        })}
      </div>

      {/* Terminal log snippet */}
      <div className="bg-[#121211] text-[#EFECE5] p-3.5 border border-[#121211] font-mono-tag text-[12px] overflow-x-auto">
        <div className="flex items-center space-x-2 text-[#8E8B82] mb-1.5 text-[11px]">
          <span className="inline-block w-2 h-2 rounded-full bg-[#068241]"></span>
          <span>AGENT_RUNTIME // DAG_ID: dag_enterprise_orchestration_492</span>
        </div>
        <p className="text-[#00FFD5]">
          &gt; Active Swarm [{steps[activeStep].id}]: {steps[activeStep].agent} ({steps[activeStep].role})
        </p>
        <p className="text-[#8CE0B0] text-[11.5px] mt-0.5">
          &gt; Task: {steps[activeStep].task}. Tool bindings verified through Model Context Protocol (MCP) gateway.
        </p>
      </div>
    </div>
  );
}
