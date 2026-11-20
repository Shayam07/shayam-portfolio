"use client";

import React from "react";
import { GraduationCap, Briefcase, Calendar, MapPin, CheckCircle2, Building, Sparkles, ArrowRight } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28 relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career &amp; Practical Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Professional Experience &amp; Education
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400">
            Industry mentorship and hands-on ML model development with Infosys Springboard, alongside structured undergraduate study.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Professional Experience Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 border-b border-zinc-800 pb-3">
              <Briefcase className="w-5 h-5 text-cyan-400" />
              <h3 className="text-lg font-bold text-zinc-100">Industry Experience</h3>
            </div>

            <div className="space-y-6">
              {portfolioData.experience.map((exp) => (
                <div
                  key={exp.id}
                  className={`p-5 sm:p-7 rounded-2xl border transition-all space-y-4 ${
                    exp.isProject
                      ? "bg-zinc-900/40 border-indigo-500/30 hover:border-indigo-500/50"
                      : "bg-zinc-900/50 border-zinc-800/80 hover:border-cyan-500/40"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <span
                      className={`text-xs font-mono px-2.5 py-0.5 rounded-full border w-fit ${
                        exp.isProject
                          ? "bg-purple-500/10 text-purple-300 border-purple-500/30"
                          : "bg-cyan-500/10 text-cyan-300 border-cyan-500/30"
                      }`}
                    >
                      {exp.type}
                    </span>
                    <span className="text-xs font-mono text-zinc-400 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                      {exp.period}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-white tracking-tight">
                      {exp.role}
                    </h4>
                    <p className="text-xs font-medium text-cyan-400 mt-0.5 flex items-center gap-1.5">
                      <Building className="w-3.5 h-3.5 text-zinc-400" />
                      <span>{exp.organization}</span> • <span>{exp.location}</span>
                    </p>
                  </div>

                  <p className="text-xs text-zinc-300 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Bullet Points */}
                  <ul className="space-y-2 pt-2 border-t border-zinc-800/70">
                    {exp.bulletPoints.map((point, pIdx) => (
                      <li key={pIdx} className="text-xs text-zinc-300 flex items-start gap-2.5 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0 mt-1.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {exp.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 border border-zinc-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Academic Rigor Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 border-b border-zinc-800 pb-3">
              <GraduationCap className="w-5 h-5 text-indigo-400" />
              <h3 className="text-lg font-bold text-zinc-100">Formal Education</h3>
            </div>

            {portfolioData.education.map((edu, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-7 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-indigo-500/30 transition-all space-y-5"
              >
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                    <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 w-fit">
                      {edu.currentStatus}
                    </span>
                    <span className="text-xs font-mono text-zinc-400 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                      {edu.duration}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-white tracking-tight">
                    {edu.degree}
                  </h4>
                  <p className="text-sm font-medium text-cyan-400 mt-1">
                    {edu.institution}
                  </p>
                  <p className="text-xs text-zinc-400 flex items-center gap-1 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                    {edu.location}
                  </p>
                </div>

                {/* CGPA Highlight */}
                <div className="p-3.5 rounded-xl bg-indigo-950/20 border border-indigo-500/30 flex items-center justify-between">
                  <span className="text-xs font-mono text-zinc-300 font-medium">Academic CGPA</span>
                  <span className="text-base font-bold font-mono text-cyan-300">{edu.cgpa}</span>
                </div>

                {/* Core Coursework */}
                <div>
                  <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block mb-2">
                    Foundational Coursework:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {edu.coreCoursework.map((course, cIdx) => (
                      <span
                        key={cIdx}
                        className="text-xs px-2.5 py-1 rounded-lg bg-zinc-800/80 text-zinc-300 border border-zinc-700/50"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Academic Highlights */}
                <div className="pt-2 border-t border-zinc-800/70">
                  <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block mb-2">
                    Achievements &amp; Activities:
                  </span>
                  <ul className="space-y-1.5">
                    {edu.highlights.map((hl, hIdx) => (
                      <li key={hIdx} className="text-xs text-zinc-300 flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
