"use client";

import React, { useState } from "react";
import { ArrowUpRight, CheckCircle2, Shield, Lock, Send, Bot, Workflow } from "lucide-react";
import confetti from "canvas-confetti";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    domain: "Agentic SDLC",
    interest: "Design Partner / Early Pilot",
    requirements: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 },
      colors: ["#068241", "#5033A4", "#FEAE01"]
    });
  };

  return (
    <section id="contact" className="py-16 sm:py-24 border-b-[1.5px] border-[#121211] bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Editorial Left Narrative */}
          <div className="lg:col-span-5">
            <div className="flex items-center space-x-2 font-mono-tag text-[12px] text-[#068241] font-bold uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-full bg-[#068241]"></span>
              <span>[05 // DESIGN PARTNERSHIP INTAKE]</span>
            </div>
            <h2 className="font-serif-display text-3xl sm:text-5xl font-normal text-[#121211] leading-tight">
              Collaborate directly with our AI architecture team.
            </h2>
            
            <p className="mt-4 text-[15px] text-[#55534E] leading-relaxed">
              We are actively developing autonomous agentic accelerators and seeking forward-looking engineering leaders, enterprise architects, and digital banking teams to shape our tool specs and early pilot deployments.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start space-x-3 text-[14px]">
                <div className="w-5 h-5 rounded-full bg-[#E6F8EE] text-[#068241] flex items-center justify-center border border-[#8CE0B0] shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <div className="text-[#121211]">
                  <strong>Early Sandbox Access:</strong> Priority evaluation of Model Context Protocol (MCP) gateways and autonomous SDLC swarms.
                </div>
              </div>

              <div className="flex items-start space-x-3 text-[14px]">
                <div className="w-5 h-5 rounded-full bg-[#E6F8EE] text-[#068241] flex items-center justify-center border border-[#8CE0B0] shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <div className="text-[#121211]">
                  <strong>Enterprise Workflow Alignment:</strong> Tailor agent tool bindings directly to your Jira, GitHub, or core banking stack.
                </div>
              </div>

              <div className="flex items-start space-x-3 text-[14px]">
                <div className="w-5 h-5 rounded-full bg-[#E6F8EE] text-[#068241] flex items-center justify-center border border-[#8CE0B0] shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <div className="text-[#121211]">
                  <strong>Direct Engineering Channel:</strong> Regular feedback loops with the AI systems architects building the platform.
                </div>
              </div>
            </div>

            {/* Direct Office Address & Trust */}
            <div className="mt-10 p-4 bg-[#FAF8F5] border border-[#DCD8CF] font-mono-tag text-[12px] text-[#55534E]">
              <div className="text-[#121211] font-bold mb-1">FINCLUSIVE.SI // AI RESEARCH &amp; LABS</div>
              <div>Finclusive Tech d.o.o. / Finclusive Tech Pvt. Ltd.</div>
              <div className="text-[#8E8B82] mt-1">Ljubljana, Slovenia &bull; Global Operations</div>
              <div className="text-[#068241] mt-2 font-bold flex items-center space-x-1.5">
                <span className="w-2 h-2 rounded-full bg-[#068241]"></span>
                <span>ENTERPRISE AGENTIC AI ACCELERATOR</span>
              </div>
            </div>
          </div>

          {/* Form Right Box */}
          <div className="lg:col-span-7">
            <div className="bg-[#FAF8F5] p-6 sm:p-10 border-[1.5px] border-[#121211] shadow-[5px_5px_0px_#068241]">
              
              {submitted ? (
                <div className="py-12 text-center">
                  <div className="w-12 h-12 bg-[#068241] text-white mx-auto flex items-center justify-center border-[1.5px] border-[#121211] shadow-[3px_3px_0px_#121211] mb-4">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif-display text-3xl font-normal text-[#121211]">
                    Thank You for Reaching Out.
                  </h3>
                  <p className="mt-3 text-[14.5px] text-[#55534E] max-w-md mx-auto">
                    We have received your note. A member of our AI engineering team will follow up directly at <strong className="text-[#121211]">{formData.email}</strong> to schedule an architecture conversation.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 font-mono-tag text-[12px] text-[#068241] underline font-bold"
                  >
                    Submit another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[13px] font-semibold text-[#121211] mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Maya Chen"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white border-[1.5px] border-[#121211] text-[14px] text-[#121211] focus:outline-none focus:ring-2 focus:ring-[#068241]"
                      />
                    </div>

                    <div>
                      <label className="block text-[13px] font-semibold text-[#121211] mb-1">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="maya@enterprise.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white border-[1.5px] border-[#121211] text-[14px] text-[#121211] focus:outline-none focus:ring-2 focus:ring-[#068241]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[13px] font-semibold text-[#121211] mb-1">
                        Organization / Enterprise *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Digital Bank / FinTech"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white border-[1.5px] border-[#121211] text-[14px] text-[#121211] focus:outline-none focus:ring-2 focus:ring-[#068241]"
                      />
                    </div>

                    <div>
                      <label className="block text-[13px] font-semibold text-[#121211] mb-1">
                        Primary AI Workflow Focus
                      </label>
                      <select
                        value={formData.domain}
                        onChange={(e) => setFormData({ ...formData, domain: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white border-[1.5px] border-[#121211] text-[14px] text-[#121211] focus:outline-none focus:ring-2 focus:ring-[#068241]"
                      >
                        <option value="Agentic SDLC">Agentic SDLC (BRD to Code &amp; Test)</option>
                        <option value="Process Discovery">Process Discovery &amp; Optimization</option>
                        <option value="Autonomous UAT">Autonomous Regression &amp; UAT</option>
                        <option value="MCP Tool Gateways">Model Context Protocol (MCP) Infrastructure</option>
                        <option value="AI Compliance">Automated Regulatory Compliance</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[13px] font-semibold text-[#121211] mb-1">
                      What operational bottleneck are you looking to solve?
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Share your goals: e.g. Automating requirement-to-test mapping, legacy process discovery, deploying secure MCP tool gateways..."
                      value={formData.requirements}
                      onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border-[1.5px] border-[#121211] text-[14px] text-[#121211] focus:outline-none focus:ring-2 focus:ring-[#068241]"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="brutalist-button-green w-full inline-flex items-center justify-center space-x-2 py-3.5 text-white font-bold text-[15px]"
                    >
                      <Send className="w-4 h-4" />
                      <span>Start an AI Architecture Conversation</span>
                    </button>
                  </div>

                  <div className="flex items-center justify-center space-x-2 text-[11px] font-mono-tag text-[#8E8B82] pt-2">
                    <Lock className="w-3 h-3 text-[#068241]" />
                    <span>MUTUAL NDA &bull; 256-BIT ENCRYPTION &bull; STRICT CONFIDENTIALITY</span>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
