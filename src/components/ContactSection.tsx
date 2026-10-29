"use client";

import React, { useState } from "react";
import { ArrowUpRight, CheckCircle2, Shield, Lock, Send, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    jurisdiction: "EU",
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
              Collaborate directly with our engineering team.
            </h2>
            
            <p className="mt-4 text-[15px] text-[#55534E] leading-relaxed">
              We are actively developing the platform and seeking fintech founders, digital wallet operators, and cross-border teams to shape the API specifications and early sandbox releases.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start space-x-3 text-[14px]">
                <div className="w-5 h-5 rounded-full bg-[#E6F8EE] text-[#068241] flex items-center justify-center border border-[#8CE0B0] shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <div className="text-[#121211]">
                  <strong>Early Sandbox Access:</strong> Priority access to prototype APIs and documentation as they are released.
                </div>
              </div>

              <div className="flex items-start space-x-3 text-[14px]">
                <div className="w-5 h-5 rounded-full bg-[#E6F8EE] text-[#068241] flex items-center justify-center border border-[#8CE0B0] shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <div className="text-[#121211]">
                  <strong>Corridor Alignment:</strong> Help us prioritize the payment corridors and local clearing rails your business needs.
                </div>
              </div>

              <div className="flex items-start space-x-3 text-[14px]">
                <div className="w-5 h-5 rounded-full bg-[#E6F8EE] text-[#068241] flex items-center justify-center border border-[#8CE0B0] shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <div className="text-[#121211]">
                  <strong>Direct Engineering Channel:</strong> Regular feedback loops with the architects building the system.
                </div>
              </div>
            </div>

            {/* Direct Office Address & Trust */}
            <div className="mt-10 p-4 bg-[#FAF8F5] border border-[#DCD8CF] font-mono-tag text-[12px] text-[#55534E]">
              <div className="text-[#121211] font-bold mb-1">FINCLUSIVE.SI // ENGINEERING LABS</div>
              <div>Finclusive Tech d.o.o. / Finclusive Tech Pvt. Ltd.</div>
              <div className="text-[#8E8B82] mt-1">Ljubljana, Slovenia &bull; Global Operations</div>
              <div className="text-[#068241] mt-2 font-bold flex items-center space-x-1.5">
                <span className="w-2 h-2 rounded-full bg-[#068241]"></span>
                <span>PARTNER OF REMITPE ECOSYSTEM</span>
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
                    We have received your note. A member of our engineering team will follow up directly at <strong className="text-[#121211]">{formData.email}</strong> to schedule an architecture conversation.
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
                        placeholder="maya@organization.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white border-[1.5px] border-[#121211] text-[14px] text-[#121211] focus:outline-none focus:ring-2 focus:ring-[#068241]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[13px] font-semibold text-[#121211] mb-1">
                        Company or Project *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. NextPay / Remit Labs"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white border-[1.5px] border-[#121211] text-[14px] text-[#121211] focus:outline-none focus:ring-2 focus:ring-[#068241]"
                      />
                    </div>

                    <div>
                      <label className="block text-[13px] font-semibold text-[#121211] mb-1">
                        Primary Corridor Interest
                      </label>
                      <select
                        value={formData.jurisdiction}
                        onChange={(e) => setFormData({ ...formData, jurisdiction: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white border-[1.5px] border-[#121211] text-[14px] text-[#121211] focus:outline-none focus:ring-2 focus:ring-[#068241]"
                      >
                        <option value="EU">European Union (SEPA Instant / Virtual IBANs)</option>
                        <option value="UK">United Kingdom (Faster Payments)</option>
                        <option value="US">North America</option>
                        <option value="CROSS">Cross-Border Remittances (Europe &rarr; Global)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[13px] font-semibold text-[#121211] mb-1">
                      What are you building or exploring?
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Share your goals: e.g. Cross-border remittance integration, programmable virtual accounts, automated sanction screening..."
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
                      <span>Start an Architecture Conversation</span>
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
