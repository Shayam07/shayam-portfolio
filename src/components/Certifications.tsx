"use client";

import React from "react";
import { Award, CheckCircle, ExternalLink, Trophy, BookOpen, BookmarkCheck, Sparkles } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Certifications() {
  const categoryIcon = (category: string) => {
    switch (category) {
      case "Elite Achievement":
        return <Trophy className="w-5 h-5 text-amber-400" />;
      case "Certification":
        return <Award className="w-5 h-5 text-indigo-400" />;
      case "Academic Milestone":
        return <BookmarkCheck className="w-5 h-5 text-cyan-400" />;
      default:
        return <BookOpen className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section id="certifications" className="py-20 sm:py-28 relative border-t border-zinc-900 bg-zinc-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Honors &amp; Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Achievements &amp; Certifications
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400">
            National rankings, industry-certified machine learning credentials, and top academic milestones.
          </p>
        </div>

        {/* Distinct Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioData.certifications.map((item) => (
            <div
              key={item.id}
              className={`p-6 sm:p-7 rounded-2xl border transition-all space-y-4 group ${
                item.category === "Elite Achievement"
                  ? "bg-gradient-to-br from-zinc-900/80 via-zinc-900/50 to-amber-950/20 border-amber-500/40 hover:border-amber-400 shadow-lg shadow-amber-500/5"
                  : "bg-zinc-900/40 border-zinc-800/80 hover:border-indigo-500/30"
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-zinc-800/80 border border-zinc-700/60">
                    {categoryIcon(item.category)}
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-indigo-400 block font-semibold">
                      {item.category}
                    </span>
                    <span className="text-xs text-zinc-400">
                      {item.issuer} • {item.issueDate}
                    </span>
                  </div>
                </div>

                {item.credentialUrl && (
                  <a
                    href={item.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                    title="View Credential Verification"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                  {item.title}
                </h3>
                {item.distinction && (
                  <span className="inline-block mt-1 text-xs font-mono font-medium text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                    {item.distinction}
                  </span>
                )}
                <p className="text-xs text-zinc-400 leading-relaxed mt-2.5">
                  {item.description}
                </p>
              </div>

              {/* Skills gained */}
              <div className="pt-2 border-t border-zinc-800/60">
                <div className="flex flex-wrap gap-1.5">
                  {item.skillsGained.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800/70 text-zinc-300 border border-zinc-700/40"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Verification banner */}
        <div className="mt-8 p-4 rounded-xl bg-zinc-900/30 border border-zinc-800/60 text-xs text-zinc-400 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <span>Official credential authentications verified with respective academic institutions &amp; accredited learning platforms.</span>
          <span className="text-emerald-400 font-mono flex items-center gap-1.5">
            <CheckCircle className="w-3.5 h-3.5" /> Authentic Academic &amp; Platform Records
          </span>
        </div>
      </div>
    </section>
  );
}
