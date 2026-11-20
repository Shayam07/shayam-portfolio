"use client";

import React from "react";
import { Bot, Brain, BarChart3, Cpu, Sparkles, GraduationCap, Compass, Award, CheckCircle2, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { portfolioData } from "@/data/portfolio";

export default function About() {
  const iconMap: Record<string, React.ReactNode> = {
    Bot: <Bot className="w-5 h-5 text-indigo-400" />,
    Brain: <Brain className="w-5 h-5 text-cyan-400" />,
    BarChart3: <BarChart3 className="w-5 h-5 text-emerald-400" />,
    Cpu: <Cpu className="w-5 h-5 text-purple-400" />,
  };

  return (
    <section id="about" className="py-20 sm:py-28 relative border-t border-zinc-900 bg-zinc-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Profile &amp; Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Engineering intelligent systems through Machine Learning &amp; Agentic AI.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 leading-relaxed">
            Dedicated undergraduate AI &amp; Data Science engineer focused on translating theory into production-grade systems and intelligent agent workflows.
          </p>
        </div>

        {/* Grid: Introduction Narrative & Compact Academic Achievement Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-4 text-sm sm:text-base text-zinc-300 leading-relaxed">
            <div className="p-5 sm:p-7 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 backdrop-blur-sm space-y-4">
              <div className="flex items-center gap-2 text-indigo-400 text-xs font-mono uppercase tracking-wider">
                <GraduationCap className="w-4 h-4" />
                <span>Academic &amp; Technical Trajectory</span>
              </div>
              {portfolioData.about.introduction.map((paragraph, idx) => (
                <p key={idx} className="text-zinc-300/90 text-sm leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Academic & CGPA Achievement Card */}
          <div className="lg:col-span-5">
            <div className="p-5 sm:p-7 rounded-2xl bg-gradient-to-br from-zinc-900/80 via-zinc-900/40 to-indigo-950/20 border border-indigo-500/30 shadow-xl shadow-indigo-500/5 space-y-4">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-cyan-400" />
                  <span className="text-xs font-mono uppercase tracking-wider text-zinc-200">
                    Academic Standing
                  </span>
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                  Top Performance
                </span>
              </div>

              <div>
                <span className="text-xs font-mono text-zinc-400 block mb-1">CUMULATIVE GRADE POINT AVERAGE</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-cyan-300 font-mono">
                    {portfolioData.about.academicCard.cgpa}
                  </span>
                  <span className="text-xs font-mono text-emerald-400 font-medium">Exceptional Merit</span>
                </div>
              </div>

              <div className="space-y-1.5 pt-2 border-t border-zinc-800/80 text-xs">
                <p className="font-bold text-white text-sm">
                  {portfolioData.about.academicCard.degree}
                </p>
                <p className="text-cyan-300 font-medium">
                  {portfolioData.about.academicCard.institution}
                </p>
                <p className="text-zinc-400 font-mono text-[11px]">
                  Duration: {portfolioData.about.academicCard.duration}
                </p>
              </div>

              <div className="p-3 rounded-xl bg-zinc-950/60 border border-zinc-800/80 text-xs text-zinc-300 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>NPTEL Python for Data Science Top 5% Nationwide &amp; Elite Topper.</span>
              </div>

              {/* Verified Social Profile Links */}
              <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2 pt-2 border-t border-zinc-800">
                <a
                  href={portfolioData.personal.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Shayam Kaarthick N GitHub Profile"
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-zinc-950 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 hover:border-zinc-700 text-xs font-mono transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5 text-indigo-400" />
                  <span>GitHub: @{portfolioData.personal.githubUsername}</span>
                  <ArrowUpRight className="w-3 h-3 text-zinc-500" />
                </a>

                <a
                  href={portfolioData.personal.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Shayam Kaarthick N LinkedIn Profile"
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-zinc-950 hover:bg-zinc-800 text-zinc-300 hover:text-cyan-400 border border-zinc-800 hover:border-cyan-500/40 text-xs font-mono transition-colors"
                >
                  <LinkedinIcon className="w-3.5 h-3.5 text-cyan-400" />
                  <span>LinkedIn Profile</span>
                  <ArrowUpRight className="w-3 h-3 text-zinc-500" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Specialization Cards */}
        <div>
          <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-6 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-indigo-400" />
            Core Focus Areas &amp; Specializations
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {portfolioData.about.focusAreas.map((area, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-indigo-500/40 transition-all hover:-translate-y-1 group"
              >
                <div className="p-2.5 rounded-xl bg-zinc-800/70 border border-zinc-700/50 w-fit mb-3 group-hover:bg-indigo-500/10 transition-colors">
                  {iconMap[area.icon] || <Cpu className="w-5 h-5 text-indigo-400" />}
                </div>
                <h4 className="text-sm font-semibold text-zinc-100 group-hover:text-indigo-300 transition-colors">
                  {area.title}
                </h4>
                <p className="text-xs text-zinc-400 leading-relaxed mt-2">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
