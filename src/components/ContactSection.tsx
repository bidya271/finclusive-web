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
    workflowFocus: "Autonomous SDLC Orchestration",
    notes: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.7 },
      colors: ["#068241", "#5033A4", "#141715"]
    });
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#FAF8F5] border-t border-[#EAE6DF]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Narrative */}
          <div className="lg:col-span-5">
            <h2 className="fluid-heading text-[#141715]">
              Partner with our AI systems architects.
            </h2>
            <p className="mt-6 text-lg text-[#575E59] leading-relaxed">
              We are working with forward-thinking financial institutions, digital banks, and fintech infrastructure builders to deploy autonomous accelerators in production.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start space-x-3 text-[15px] text-[#575E59]">
                <div className="w-5 h-5 rounded-full bg-[#E8F5EE] text-[#068241] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span>Direct access to founding engineering leaders &bull; no sales friction</span>
              </div>
              <div className="flex items-start space-x-3 text-[15px] text-[#575E59]">
                <div className="w-5 h-5 rounded-full bg-[#E8F5EE] text-[#068241] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span>Private evaluation sandboxes for Model Context Protocol gateways</span>
              </div>
              <div className="flex items-start space-x-3 text-[15px] text-[#575E59]">
                <div className="w-5 h-5 rounded-full bg-[#E8F5EE] text-[#068241] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span>Strict mutual NDA and zero-data-retention security guarantees</span>
              </div>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-8 sm:p-12 border border-[#EAE6DF] soft-elevation">
            {submitted ? (
              <div className="py-12 text-center">
                <div className="w-12 h-12 bg-[#E8F5EE] text-[#068241] rounded-full mx-auto flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="fluid-subheading text-[#141715]">
                  Message Received.
                </h3>
                <p className="mt-3 text-base text-[#575E59] max-w-md mx-auto">
                  An AI systems architect will review your technical inquiry and follow up at <strong className="text-[#141715]">{formData.email}</strong> within one business day.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm text-[#068241] font-medium underline"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[13px] font-medium text-[#141715] mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Maya Chen"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E2DDD3] text-[#141715] focus:outline-none focus:border-[#068241] focus:ring-1 focus:ring-[#068241] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[13px] font-medium text-[#141715] mb-2">
                      Work Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="maya@institution.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E2DDD3] text-[#141715] focus:outline-none focus:border-[#068241] focus:ring-1 focus:ring-[#068241] transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[13px] font-medium text-[#141715] mb-2">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Digital Bank / FinTech"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E2DDD3] text-[#141715] focus:outline-none focus:border-[#068241] focus:ring-1 focus:ring-[#068241] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[13px] font-medium text-[#141715] mb-2">
                      Primary Accelerator Focus
                    </label>
                    <select
                      value={formData.workflowFocus}
                      onChange={(e) => setFormData({ ...formData, workflowFocus: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E2DDD3] text-[#141715] focus:outline-none focus:border-[#068241] focus:ring-1 focus:ring-[#068241] transition-all"
                    >
                      <option value="Autonomous SDLC Orchestration">Autonomous SDLC Orchestration</option>
                      <option value="Process Mining & Optimization">Process Mining &amp; Optimization</option>
                      <option value="Self-Healing Test Engine">Self-Healing Test &amp; Regression Engine</option>
                      <option value="Model Context Protocol Gateway">Model Context Protocol Gateway</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[13px] font-medium text-[#141715] mb-2">
                    What challenge or project are you looking to address?
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Describe your technical objectives or current operational bottlenecks..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E2DDD3] text-[#141715] focus:outline-none focus:border-[#068241] focus:ring-1 focus:ring-[#068241] transition-all"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-[#068241] hover:bg-[#056B35] text-white text-[15px] font-medium inline-flex items-center justify-center space-x-2 transition-all duration-200"
                  >
                    <span>Send Technical Inquiry</span>
                    <ArrowUpRight className="w-4 h-4 opacity-80" />
                  </button>
                </div>

                <div className="text-center text-[12px] text-[#8E9690] pt-1">
                  Confidential &bull; Zero-Data Retention &bull; Direct Architect Review
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
