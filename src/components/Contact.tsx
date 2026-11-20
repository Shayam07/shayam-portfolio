"use client";

import React, { useState } from "react";
import { Mail, Phone, Send, Copy, Check, MessageSquare, ArrowRight, Download, FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { portfolioData } from "@/data/portfolio";
import { useToast } from "./Toast";
import ResumeModal from "./ResumeModal";

export default function Contact() {
  const { showToast } = useToast();
  const [copied, setCopied] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopied(true);
    showToast("Email address copied to clipboard!", "success");
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      showToast("Please fill in your name, email, and message.", "error");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      showToast("Message recorded! Launching your email client...", "success");

      const mailtoUrl = `mailto:${portfolioData.personal.email}?subject=${encodeURIComponent(
        formData.subject || "Collaboration Inquiry via Portfolio"
      )}&body=${encodeURIComponent(
        `Hi Shayam,\n\nFrom: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
      )}`;
      window.open(mailtoUrl, "_blank");

      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 600);
  };

  return (
    <>
      <section id="contact" className="py-20 sm:py-28 relative border-t border-zinc-900 bg-zinc-950/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono uppercase tracking-wider mb-3">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Initiate Contact</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Let&apos;s Build Something Intelligent.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-zinc-300 max-w-2xl leading-relaxed">
              I&apos;m always interested in exploring new AI ideas, collaborating on meaningful projects and connecting with people passionate about technology.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column: Direct Info, Phone, Email & Resume */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Direct Communication Channels */}
              <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 space-y-4">
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 block">
                  Direct Channels
                </span>
                
                {/* Email Box */}
                <div className="flex items-center justify-between gap-3 p-3.5 rounded-xl bg-zinc-950 border border-zinc-800 font-mono text-xs">
                  <a
                    href={`mailto:${portfolioData.personal.email}`}
                    className="flex items-center gap-2.5 truncate text-zinc-200 hover:text-cyan-400 transition-colors"
                  >
                    <Mail className="w-4 h-4 text-indigo-400 shrink-0" />
                    <span className="truncate">{portfolioData.personal.email}</span>
                  </a>
                  <button
                    onClick={copyEmail}
                    className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-[11px] transition-colors shrink-0 cursor-pointer"
                    title="Copy email"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-zinc-400" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Telephone Box */}
                <div className="flex items-center justify-between gap-3 p-3.5 rounded-xl bg-zinc-950 border border-zinc-800 font-mono text-xs">
                  <a
                    href={`tel:${portfolioData.personal.phoneClean}`}
                    className="flex items-center gap-2.5 truncate text-zinc-200 hover:text-emerald-400 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{portfolioData.personal.phone}</span>
                  </a>
                  <a
                    href={`tel:${portfolioData.personal.phoneClean}`}
                    className="px-2.5 py-1 rounded-md bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-[11px] transition-colors"
                  >
                    Call
                  </a>
                </div>

                {/* Download Resume Action in Contact */}
                <div className="pt-2">
                  <button
                    onClick={() => setResumeOpen(true)}
                    className="w-full flex items-center justify-center gap-2 p-3 rounded-xl bg-indigo-600/10 hover:bg-indigo-600/20 text-indigo-300 border border-indigo-500/30 text-xs font-mono font-medium transition-all cursor-pointer active:scale-95"
                  >
                    <Download className="w-4 h-4 text-indigo-400" />
                    <span>Download Full Resume PDF</span>
                  </button>
                </div>
              </div>

              {/* Social Channels */}
              <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 space-y-4">
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 block">
                  Professional Profiles
                </span>

                <div className="space-y-2.5">
                  <a
                    href={portfolioData.personal.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Shayam Kaarthick N LinkedIn Profile"
                    className="flex items-center justify-between p-3 rounded-xl bg-zinc-900/60 hover:bg-zinc-800/60 border border-zinc-800 text-xs text-zinc-200 hover:text-cyan-400 transition-colors group cursor-pointer"
                  >
                    <div className="flex items-center gap-2.5">
                      <LinkedinIcon className="w-4 h-4 text-cyan-400" />
                      <span>LinkedIn Profile</span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-zinc-500 group-hover:translate-x-0.5 transition-transform" />
                  </a>

                  <a
                    href={portfolioData.personal.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Shayam Kaarthick N GitHub Profile"
                    className="flex items-center justify-between p-3 rounded-xl bg-zinc-900/60 hover:bg-zinc-800/60 border border-zinc-800 text-xs text-zinc-200 hover:text-white transition-colors group cursor-pointer"
                  >
                    <div className="flex items-center gap-2.5">
                      <GithubIcon className="w-4 h-4 text-indigo-400" />
                      <span>GitHub: @{portfolioData.personal.githubUsername}</span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-zinc-500 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Academic Location & Availability */}
              <div className="p-4 rounded-xl bg-zinc-900/20 border border-zinc-800/60 text-xs text-zinc-400 flex items-center justify-between">
                <span>Location: {portfolioData.personal.location}</span>
                <span className="text-emerald-400 font-mono">Open for AI Internships</span>
              </div>
            </div>

            {/* Right Column: Contact Message Form */}
            <div className="lg:col-span-7">
              <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 shadow-xl space-y-5">
                <h3 className="text-lg font-bold text-white tracking-tight">
                  Send a Direct Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-zinc-400 block font-medium">Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Dr. Sarah Chen / Recruiter"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-indigo-500 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-zinc-400 block font-medium">Your Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="sarah@organization.ai"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-indigo-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-zinc-400 block font-medium">Topic / Subject</label>
                    <input
                      type="text"
                      placeholder="AI Project Collaboration / Research / Internship"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-zinc-400 block font-medium">Message Body *</label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Describe your project, question, or problem to solve..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs font-mono transition-all shadow-lg shadow-indigo-600/25 active:scale-95 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Transmitting...</span>
                    ) : (
                      <>
                        <span>Transmit Message</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </>
  );
}
