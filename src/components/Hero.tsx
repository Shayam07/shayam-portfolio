"use client";

import React, { useState } from "react";
import { ArrowRight, Download, Mail, Terminal, Cpu, Sparkles, Check, Copy, MessageSquare, Layers } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { portfolioData } from "@/data/portfolio";
import NeuralCanvas from "./NeuralCanvas";
import ResumeModal from "./ResumeModal";
import { useToast } from "./Toast";

export default function Hero() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"langgraph" | "orca" | "architecture">("langgraph");
  const { showToast } = useToast();

  const copyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    showToast("Email address copied to clipboard!", "success");
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-grid-pattern"
    >
      {/* Background Neural Canvas */}
      <NeuralCanvas />

      {/* Radial gradient mask for subtle center highlight */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none [background:radial-gradient(circle_at_50%_40%,rgba(99,102,241,0.08)_0%,rgba(9,9,11,0.95)_70%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Presentation */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 backdrop-blur-md shadow-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
              </span>
              <span className="text-xs font-mono text-zinc-300 tracking-wide">
                {portfolioData.personal.role}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              {portfolioData.personal.heroHeadline}{" "}
              <span className="text-gradient-accent block mt-1">
                {portfolioData.personal.heroHeadlineAccent}
              </span>
            </h1>

            {/* Introduction Bio */}
            <p className="text-base sm:text-lg text-zinc-300/90 leading-relaxed max-w-2xl font-normal">
              {portfolioData.personal.intro}
            </p>

            {/* Display Tags */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              {portfolioData.personal.heroTags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-mono font-medium rounded-lg bg-zinc-900/80 text-cyan-300 border border-zinc-800 shadow-inner flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                  {tag}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 pt-3 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition-all shadow-lg shadow-indigo-600/25 active:scale-95 group"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={() => setResumeOpen(true)}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 border border-zinc-700/80 font-medium text-sm transition-all hover:border-zinc-500 active:scale-95 shadow-sm cursor-pointer"
              >
                <Download className="w-4 h-4 text-indigo-400" />
                <span>Download Resume</span>
              </button>

              <a
                href="#contact"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900/60 hover:bg-zinc-800/80 text-zinc-300 hover:text-white border border-zinc-800 text-sm font-medium transition-all"
              >
                <MessageSquare className="w-4 h-4 text-cyan-400" />
                <span>Connect With Me</span>
              </a>
            </div>

            {/* Social Links & Direct Contacts */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-5 pt-3 text-zinc-400 text-xs border-t border-zinc-800/60 w-full">
              <span className="font-mono text-zinc-500 text-[11px] uppercase tracking-wider">
                Direct Channels
              </span>
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="flex items-center gap-1.5 hover:text-white transition-colors truncate max-w-[220px] sm:max-w-none"
                title="Send Email"
              >
                <Mail className="w-4 h-4 text-indigo-400 shrink-0" />
                <span className="truncate">{portfolioData.personal.email}</span>
              </a>
              <a
                href={`tel:${portfolioData.personal.phoneClean}`}
                className="flex items-center gap-1.5 hover:text-white transition-colors shrink-0"
                title="Call phone"
              >
                <span className="text-emerald-400 font-mono">TEL:</span>
                <span>{portfolioData.personal.phone}</span>
              </a>
              <a
                href={portfolioData.personal.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Shayam Kaarthick N GitHub Profile"
                className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer shrink-0"
                title="View GitHub: Shayam07"
              >
                <GithubIcon className="w-4 h-4 text-zinc-300" />
                <span>GitHub</span>
              </a>
              <a
                href={portfolioData.personal.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Shayam Kaarthick N LinkedIn Profile"
                className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer shrink-0"
                title="View LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4 text-cyan-400" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Flagship Agent Architecture Terminal */}
          <div className="lg:col-span-5 w-full">
            <div className="relative rounded-2xl bg-zinc-950/85 border border-zinc-800 shadow-2xl backdrop-blur-xl overflow-hidden">
              
              {/* Header Bar */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800 bg-zinc-900/50">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/70 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70 inline-block" />
                  </div>
                  <span className="font-mono text-[11px] text-zinc-400 ml-2">
                    orca_langgraph_mesh.py
                  </span>
                </div>

                <div className="flex items-center gap-1 text-[11px] font-mono">
                  <button
                    onClick={() => setActiveTab("langgraph")}
                    className={`px-2 py-0.5 rounded transition-colors ${
                      activeTab === "langgraph"
                        ? "bg-indigo-600/30 text-indigo-300 border border-indigo-500/30"
                        : "text-zinc-500 hover:text-zinc-300"
                    }`}
                  >
                    LangGraph
                  </button>
                  <button
                    onClick={() => setActiveTab("orca")}
                    className={`px-2 py-0.5 rounded transition-colors ${
                      activeTab === "orca"
                        ? "bg-indigo-600/30 text-indigo-300 border border-indigo-500/30"
                        : "text-zinc-500 hover:text-zinc-300"
                    }`}
                  >
                    Agents
                  </button>
                  <button
                    onClick={() => setActiveTab("architecture")}
                    className={`px-2 py-0.5 rounded transition-colors ${
                      activeTab === "architecture"
                        ? "bg-indigo-600/30 text-indigo-300 border border-indigo-500/30"
                        : "text-zinc-500 hover:text-zinc-300"
                    }`}
                  >
                    FastAPI
                  </button>
                </div>
              </div>

              {/* Code / Architecture Display */}
              <div className="p-4 sm:p-5 font-mono text-xs leading-relaxed overflow-x-auto min-h-[310px] bg-black/50">
                {activeTab === "langgraph" && (
                  <div className="space-y-1.5 text-zinc-300">
                    <div className="text-zinc-500"># ORCA Flagship: Multi-Agent StateGraph Architecture</div>
                    <div>
                      <span className="text-indigo-400">from</span> langgraph.graph <span className="text-indigo-400">import</span> StateGraph, END
                    </div>
                    <div>
                      <span className="text-indigo-400">from</span> fastapi <span className="text-indigo-400">import</span> FastAPI
                    </div>
                    <div className="pt-1">
                      workflow = StateGraph(MarineEcosystemState)
                    </div>
                    <div className="text-zinc-400">
                      workflow.add_node(<span className="text-cyan-300">&quot;ingest_telemetry&quot;</span>, sensor_agent)
                    </div>
                    <div className="text-zinc-400">
                      workflow.add_node(<span className="text-cyan-300">&quot;reason_ecosystem&quot;</span>, analysis_agent)
                    </div>
                    <div className="text-zinc-400">
                      workflow.add_node(<span className="text-cyan-300">&quot;synthesize_report&quot;</span>, reporter_agent)
                    </div>
                    <div className="pt-1 text-zinc-500"># Conditional task hand-offs</div>
                    <div>
                      workflow.add_conditional_edges(
                    </div>
                    <div className="pl-4 text-zinc-400">
                      <span className="text-cyan-300">&quot;reason_ecosystem&quot;</span>,
                    </div>
                    <div className="pl-4 text-zinc-400">
                      should_deep_inspect,
                    </div>
                    <div className="pl-4 text-emerald-400">
                      {`{"anomalous": "synthesize_report", "nominal": END}`}
                    </div>
                    <div>)</div>
                    <div className="pt-2 flex items-center gap-2 text-cyan-400 text-[11px]">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                      <span>State: Converged • Marine Telemetry Hand-off Active</span>
                    </div>
                  </div>
                )}

                {activeTab === "orca" && (
                  <div className="space-y-3 text-[11px]">
                    <div className="text-zinc-400 font-sans">
                      Collaborative Agent Topology (ORCA Framework):
                    </div>
                    <div className="p-2.5 rounded-lg bg-zinc-900/80 border border-zinc-800 text-zinc-300">
                      <div className="flex items-center justify-between text-zinc-400 mb-1">
                        <span className="font-semibold text-indigo-300">Agent 01: Ingestion Sentinel</span>
                        <span className="text-xs text-zinc-500">Pandas / NumPy</span>
                      </div>
                      <p className="text-zinc-400 text-[11px]">
                        Cleans and transforms marine salinity, temp, and pH telemetry streams.
                      </p>
                    </div>

                    <div className="p-2.5 rounded-lg bg-zinc-900/80 border border-zinc-800 text-zinc-300">
                      <div className="flex items-center justify-between text-zinc-400 mb-1">
                        <span className="font-semibold text-cyan-300">Agent 02: Ecosystem Reasoner</span>
                        <span className="text-xs text-zinc-500">LLM Reasoning</span>
                      </div>
                      <p className="text-zinc-400 text-[11px]">
                        Evaluates ecological stress thresholds and biological anomaly indicators.
                      </p>
                    </div>

                    <div className="p-2.5 rounded-lg bg-zinc-900/80 border border-zinc-800 text-zinc-300">
                      <div className="flex items-center justify-between text-zinc-400 mb-1">
                        <span className="font-semibold text-emerald-300">Agent 03: Synthesis Reporter</span>
                        <span className="text-xs text-zinc-500">FastAPI Streaming</span>
                      </div>
                      <p className="text-zinc-400 text-[11px]">
                        Compiles evidence-backed, explainable insights with clear citations.
                      </p>
                    </div>
                  </div>
                )}

                {activeTab === "architecture" && (
                  <div className="space-y-2.5 text-[11px]">
                    <div className="text-zinc-400 font-sans">
                      Production Pipeline Specifications:
                    </div>
                    <div className="p-3 rounded-lg bg-zinc-900/70 border border-zinc-800 space-y-1">
                      <span className="text-zinc-500 block text-[10px] font-mono">BACKEND FRAMEWORK</span>
                      <span className="text-indigo-400 font-bold font-mono">FastAPI Asynchronous Engine</span>
                      <p className="text-zinc-400 text-[11px]">
                        Serves agentic reasoning endpoints with non-blocking async loops.
                      </p>
                    </div>
                    <div className="p-3 rounded-lg bg-zinc-900/70 border border-zinc-800 space-y-1">
                      <span className="text-zinc-500 block text-[10px] font-mono">ORCHESTRATION</span>
                      <span className="text-cyan-400 font-bold font-mono">LangGraph StateGraph Engine</span>
                      <p className="text-zinc-400 text-[11px]">
                        Controls deterministic hand-offs, cyclic retry loops, and telemetry memory.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Status Footer */}
              <div className="px-4 py-2 border-t border-zinc-800 bg-zinc-900/40 flex items-center justify-between text-[11px] text-zinc-400 font-mono">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Status: Flagship Project In Progress
                </span>
                <span className="text-zinc-500">FastAPI + LangGraph</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </section>
  );
}
