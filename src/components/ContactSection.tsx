"use client";

import React, { useState } from "react";
import { ArrowUpRight, CheckCircle2, Shield, Lock, Send } from "lucide-react";
import confetti from "canvas-confetti";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    jurisdiction: "EU",
    timeline: "Immediate (<30 Days)",
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
              <span>[05 // FOUNDING COHORT INTAKE]</span>
            </div>
            <h2 className="font-serif-display text-3xl sm:text-5xl font-normal text-[#121211] leading-tight">
              Direct access to our founding infrastructure team.
            </h2>
            
            <p className="mt-4 text-[15px] text-[#55534E] leading-relaxed">
              We work closely with a selective first cohort of founding fintech builders. Speak directly with the engineers 
              architecting the virtual ledger and AI compliance engine.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start space-x-3 text-[14px]">
                <div className="w-5 h-5 rounded-full bg-[#E6F8EE] text-[#068241] flex items-center justify-center border border-[#8CE0B0] shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <div className="text-[#121211]">
                  <strong>Pilot Sandbox Access:</strong> Issued to approved founding teams within 24 hours.
                </div>
              </div>

              <div className="flex items-start space-x-3 text-[14px]">
                <div className="w-5 h-5 rounded-full bg-[#E6F8EE] text-[#068241] flex items-center justify-center border border-[#8CE0B0] shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <div className="text-[#121211]">
                  <strong>Hands-on Architecture Support:</strong> Shared Slack/Discord channel with our core engineers.
                </div>
              </div>

              <div className="flex items-start space-x-3 text-[14px]">
                <div className="w-5 h-5 rounded-full bg-[#E6F8EE] text-[#068241] flex items-center justify-center border border-[#8CE0B0] shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <div className="text-[#121211]">
                  <strong>Sponsor Bank Readiness:</strong> Clear documentation package for partner bank approval.
                </div>
              </div>
            </div>

            {/* Direct Office Address & Trust */}
            <div className="mt-10 p-4 bg-[#FAF8F5] border border-[#DCD8CF] font-mono-tag text-[12px] text-[#55534E]">
              <div className="text-[#121211] font-bold mb-1">FINCLUSIVE.SI // FOUNDING ENTITY</div>
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
                    Pilot Application Received.
                  </h3>
                  <p className="mt-3 text-[14.5px] text-[#55534E] max-w-md mx-auto">
                    Our founding engineering team will review your requirements. 
                    Expect sandbox keys and API documentation at <strong className="text-[#121211]">{formData.email}</strong> within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 font-mono-tag text-[12px] text-[#068241] underline font-bold"
                  >
                    Submit another query
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
                        placeholder="maya@startup.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white border-[1.5px] border-[#121211] text-[14px] text-[#121211] focus:outline-none focus:ring-2 focus:ring-[#068241]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[13px] font-semibold text-[#121211] mb-1">
                        Company / Startup Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. NeoWallet / GlobalPay"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white border-[1.5px] border-[#121211] text-[14px] text-[#121211] focus:outline-none focus:ring-2 focus:ring-[#068241]"
                      />
                    </div>

                    <div>
                      <label className="block text-[13px] font-semibold text-[#121211] mb-1">
                        Target Pilot Corridor
                      </label>
                      <select
                        value={formData.jurisdiction}
                        onChange={(e) => setFormData({ ...formData, jurisdiction: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white border-[1.5px] border-[#121211] text-[14px] text-[#121211] focus:outline-none focus:ring-2 focus:ring-[#068241]"
                      >
                        <option value="EU">European Union (SEPA / Virtual IBANs)</option>
                        <option value="UK">United Kingdom (Faster Payments)</option>
                        <option value="US">North America (ACH / FedNow)</option>
                        <option value="CROSS">Cross-Border Remittance Corridor</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[13px] font-semibold text-[#121211] mb-1">
                      What are you looking to build?
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Briefly describe your use case: e.g. Virtual accounts for B2B payouts, cross-border remittance app, automated AI sanction screening..."
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
                      <span>Submit Pilot Application</span>
                    </button>
                  </div>

                  <div className="flex items-center justify-center space-x-2 text-[11px] font-mono-tag text-[#8E8B82] pt-2">
                    <Lock className="w-3 h-3 text-[#068241]" />
                    <span>MUTUAL NDA &bull; 256-BIT ENCRYPTED &bull; STRICT CONFIDENTIALITY</span>
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
