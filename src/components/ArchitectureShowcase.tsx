"use client";

import React, { useState } from "react";
import { Check, Copy } from "lucide-react";

const CODE_EXAMPLES = {
  orchestration: {
    title: "Autonomous SDLC Orchestration",
    language: "typescript",
    filename: "orchestrator.ts",
    code: `import { EnterpriseAgentRuntime } from "@finclusive/agent-core";

// Define the mission with banking governance bounds
const runtime = new EnterpriseAgentRuntime({
  contextTier: "digital_core_banking",
  policyRuleset: "iso_20022_strict_compliance",
  humanApprovalRequired: true
});

// Dispatch multi-agent engineering workflow
const execution = await runtime.dispatch({
  intent: "Synthesize escrow release workflow from BRD-2026-08",
  documents: ["s3://compliance/brd_escrow_v2.pdf"],
  targets: ["core-ledger-service", "mobile-app-sdk"]
});

console.log("Synthesized artifacts:", execution.verifiedStories);
// => 14 User Stories Generated | 0 Policy Violations | Ready for Review`
  },
  mcp: {
    title: "Model Context Protocol Tool Schema",
    language: "json",
    filename: "mcp-server-config.json",
    code: `{
  "name": "finclusive-banking-gateway",
  "version": "1.4.0",
  "security": {
    "piiMasking": true,
    "auditStream": "kinesis://banking-audit-telemetry",
    "requireConfirmation": ["dispatch_settlement", "modify_kyb_status"]
  },
  "tools": [
    {
      "name": "audit_ledger_consistency",
      "description": "Performs deterministic double-entry reconciliation across virtual accounts",
      "parameters": {
        "type": "object",
        "properties": {
          "tenantId": { "type": "string" },
          "reconcileWindow": { "type": "string" }
        },
        "required": ["tenantId"]
      }
    }
  ]
}`
  },
  process: {
    title: "Process Mining Discovery Engine",
    language: "python",
    filename: "process_miner.py",
    code: `from finclusive_ai import ProcessDiscoveryEngine

# Connect directly to institutional event telemetry
miner = ProcessDiscoveryEngine(
    event_stream="kafka://banking-operations-mesh",
    window="last_30_days"
)

# Extract actual operational execution topologies
topology = miner.reconstruct_workflow(
    process_name="commercial_loan_origination"
)

# Identify systemic bottlenecks and synthesize autonomous execution paths
optimization = topology.synthesize_agentic_accelerator(
    target_kpi="reduce_manual_approval_wait_time",
    guardrails={"max_autonomous_limit_eur": 25000}
)

print(f"Discovered {len(topology.variants)} workflow variants.")
print(f"Generated accelerator DAG: {optimization.dag_id}")`
  }
};

export function ArchitectureShowcase() {
  const [activeTab, setActiveTab] = useState<"orchestration" | "mcp" | "process">("orchestration");
  const [copied, setCopied] = useState(false);

  const current = CODE_EXAMPLES[activeTab];

  const handleCopy = () => {
    navigator.clipboard.writeText(current.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="protocol" className="py-24 sm:py-32 bg-[#FAF8F5] border-t border-[#EAE6DF]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className="max-w-3xl">
          <h2 className="fluid-heading text-[#141715]">
            Model Context Protocol &amp; developer interfaces.
          </h2>
          <p className="mt-4 text-lg text-[#575E59] leading-relaxed">
            Real code, real schemas, and zero pseudo-technology. Inspect the architecture connecting enterprise LLMs to core institutional infrastructure.
          </p>
        </div>

        {/* Tabbed Code Window */}
        <div className="mt-12 rounded-2xl bg-[#0D1411] text-[#FAF8F5] overflow-hidden soft-elevation">
          {/* Header Bar */}
          <div className="px-6 py-4 bg-[#141E1A] flex flex-wrap items-center justify-between gap-4 border-b border-[#232E27]">
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setActiveTab("orchestration")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === "orchestration"
                    ? "bg-[#068241] text-white"
                    : "text-[#8E9690] hover:text-white"
                }`}
              >
                Orchestrator SDK
              </button>
              <button
                onClick={() => setActiveTab("mcp")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === "mcp"
                    ? "bg-[#068241] text-white"
                    : "text-[#8E9690] hover:text-white"
                }`}
              >
                MCP Schema
              </button>
              <button
                onClick={() => setActiveTab("process")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === "process"
                    ? "bg-[#068241] text-white"
                    : "text-[#8E9690] hover:text-white"
                }`}
              >
                Process Mining
              </button>
            </div>

            <div className="flex items-center space-x-3">
              <span className="text-xs text-[#8E9690] font-mono hidden sm:inline">
                {current.filename}
              </span>
              <button
                onClick={handleCopy}
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-[#232E27] text-white text-xs hover:bg-[#2C3B32] transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-[#068241]" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? "Copied" : "Copy"}</span>
              </button>
            </div>
          </div>

          {/* Code Viewer */}
          <div className="p-6 sm:p-8 overflow-x-auto text-sm sm:text-base font-mono leading-relaxed">
            <pre className="text-[#E2DDD3]">
              <code>{current.code}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
