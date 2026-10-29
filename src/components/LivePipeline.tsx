"use client";

import React, { useState, useEffect } from "react";
import { CheckCircle2, ArrowRight, Shield, Zap, RefreshCw, Layers } from "lucide-react";

export function LivePipeline() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: "01",
      name: "Smart Identity & KYB Routing",
      sub: "Dynamic Virtual IBAN Provisioning",
      status: "DESIGN SPEC"
    },
    {
      id: "02",
      name: "Agentic Compliance Shield",
      sub: "Automated Sanction Disambiguation",
      status: "AI PROTOTYPE"
    },
    {
      id: "03",
      name: "RemitPe Liquidity Corridors",
      sub: "Frictionless FX Corridor Routing",
      status: "RAIL MAPPING"
    },
    {
      id: "04",
      name: "Atomic Ledger Finality",
      sub: "Double-Entry Balance Reconciliation",
      status: "CORE ARCHITECTURE"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [steps.length]);

  return (
    <div className="w-full bg-[#FFFFFF] border-[1.5px] border-[#121211] p-5 sm:p-6 shadow-[5px_5px_0px_#068241]">
      {/* Header bar */}
      <div className="flex items-center justify-between pb-4 border-b-[1.5px] border-[#DCD8CF]">
        <div className="flex items-center space-x-2.5">
          <span className="w-3.5 h-3.5 bg-[#068241] border border-[#121211] shadow-[1px_1px_0px_#121211]"></span>
          <span className="font-mono-tag text-[12px] uppercase tracking-wider font-bold text-[#068241]">
            TARGET ARCHITECTURE // ATOMIC TRANSACTION FLOW
          </span>
          <span className="hidden sm:inline font-mono-tag text-[10.5px] bg-[#E6F8EE] text-[#068241] px-2 py-0.5 border border-[#8CE0B0] font-semibold">
            IN DEVELOPMENT
          </span>
        </div>
        <div className="flex items-center space-x-2 font-mono-tag text-[11px] text-[#55534E]">
          <RefreshCw className="w-3.5 h-3.5 animate-spin text-[#068241]" />
          <span className="text-[#068241] font-bold">STATE: ARCHITECTING</span>
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
                  [{step.id}]
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
                {step.name}
              </div>
              <div className="text-[11.5px] text-[#55534E] mt-1 leading-snug">
                {step.sub}
              </div>
            </div>
          );
        })}
      </div>

      {/* Terminal log snippet */}
      <div className="bg-[#121211] text-[#EFECE5] p-3.5 border border-[#121211] font-mono-tag text-[12px] overflow-x-auto">
        <div className="flex items-center space-x-2 text-[#8E8B82] mb-1.5 text-[11px]">
          <span className="inline-block w-2 h-2 rounded-full bg-[#068241]"></span>
          <span>ENGINEERING_BLUEPRINT // ACTIVE DESIGN CYCLE</span>
        </div>
        <p className="text-[#00FFD5]">
          &gt; Target Stage [{steps[activeStep].id}]: {steps[activeStep].name}...
        </p>
        <p className="text-[#8CE0B0] text-[11.5px] mt-0.5">
          &gt; Goal: Replacing multi-vendor fragmentation with unified virtual accounts and autonomous risk checks.
        </p>
      </div>
    </div>
  );
}
