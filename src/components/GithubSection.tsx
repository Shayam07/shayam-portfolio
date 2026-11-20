"use client";

import React, { useState } from "react";
import { Star, GitFork, ExternalLink, Activity, Terminal, GitCommit, Sparkles } from "lucide-react";
import { GithubIcon } from "./Icons";
import { portfolioData } from "@/data/portfolio";

export default function GithubSection() {
  const [hoveredDay, setHoveredDay] = useState<{ day: number; count: number } | null>(null);

  // Generate a deterministic realistic-looking contribution pattern (52 weeks x 7 days)
  const generateContributionWeeks = () => {
    const weeks = [];
    const seedValues = [
      0, 1, 2, 0, 3, 4, 1, 0, 2, 5, 3, 1, 0, 0, 2, 4, 3, 6, 2, 1, 0, 3, 2, 4,
      1, 0, 3, 5, 2, 4, 0, 1, 3, 4, 6, 2, 0, 1, 4, 3, 5, 2, 0, 3, 4, 1, 2, 5,
      3, 4, 2, 0, 1, 3, 2, 4, 5, 1, 0, 2, 3, 4, 2, 6, 3, 1, 0, 2, 4, 5, 3, 2
    ];

    let dayCounter = 0;
    for (let w = 0; w < 42; w++) {
      const days = [];
      for (let d = 0; d < 7; d++) {
        const val = seedValues[(w * 7 + d) % seedValues.length];
        days.push({ day: dayCounter++, count: val });
      }
      weeks.push(days);
    }
    return weeks;
  };

  const contributionWeeks = generateContributionWeeks();

  const getColorClass = (count: number) => {
    if (count === 0) return "bg-zinc-900 border-zinc-800/60";
    if (count <= 2) return "bg-indigo-950/80 border-indigo-900/60 text-indigo-400";
    if (count <= 4) return "bg-indigo-700/80 border-indigo-600/60 text-indigo-200";
    return "bg-cyan-400 border-cyan-300 text-black";
  };

  const getLanguageColor = (lang: string) => {
    switch (lang.toLowerCase()) {
      case "python":
        return "bg-cyan-400";
      case "jupyter notebook":
        return "bg-amber-400";
      case "typescript":
      case "javascript":
        return "bg-indigo-400";
      default:
        return "bg-emerald-400";
    }
  };

  return (
    <section id="github" className="py-20 sm:py-28 relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
              <GithubIcon className="w-3.5 h-3.5" />
              <span>Open Source Activity • {portfolioData.github.featuredRepos.length} Repositories</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              GitHub Repositories &amp; Contributions
            </h2>
            <p className="mt-3 text-sm sm:text-base text-zinc-400 max-w-2xl">
              Public codebases, algorithmic implementations, and daily commit telemetry tracking real-world Machine Learning, Generative AI, and Agentic system engineering.
            </p>
          </div>

          <a
            href={portfolioData.personal.social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Shayam Kaarthick N GitHub Profile"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-700/80 text-xs font-mono transition-all hover:border-zinc-500 w-fit cursor-pointer shadow-sm group"
          >
            <GithubIcon className="w-4 h-4 text-indigo-400 group-hover:text-cyan-400 transition-colors" />
            <span>@{portfolioData.github.username}</span>
            <ExternalLink className="w-3.5 h-3.5 text-zinc-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Contribution Graph Widget */}
        <div className="p-6 sm:p-7 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 mb-10 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-zinc-800/80 pb-3">
            <div className="flex items-center gap-2">
              <GitCommit className="w-4 h-4 text-cyan-400" />
              <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-200">
                Continuous Learning &amp; Commit Telemetry
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs text-zinc-400 font-mono">
              <span>Less</span>
              <span className="w-2.5 h-2.5 rounded-sm bg-zinc-900 border border-zinc-800 inline-block" />
              <span className="w-2.5 h-2.5 rounded-sm bg-indigo-950 border border-indigo-900 inline-block" />
              <span className="w-2.5 h-2.5 rounded-sm bg-indigo-700 border border-indigo-600 inline-block" />
              <span className="w-2.5 h-2.5 rounded-sm bg-cyan-400 border border-cyan-300 inline-block" />
              <span>More</span>
            </div>
          </div>

          {/* Activity Matrix */}
          <div className="overflow-x-auto pb-2">
            <div className="flex gap-1.5 min-w-[680px]">
              {contributionWeeks.map((week, wIdx) => (
                <div key={wIdx} className="flex flex-col gap-1.5">
                  {week.map((d) => (
                    <div
                      key={d.day}
                      onMouseEnter={() => setHoveredDay(d)}
                      onMouseLeave={() => setHoveredDay(null)}
                      className={`w-3 h-3 rounded-[3px] border transition-all cursor-pointer hover:scale-125 ${getColorClass(
                        d.count
                      )}`}
                      title={`${d.count} contributions on day ${d.day}`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Activity Status Bar */}
          <div className="flex items-center justify-between text-xs text-zinc-400 pt-2 font-mono">
            <span>
              {hoveredDay ? (
                <span className="text-cyan-400 font-medium">
                  {hoveredDay.count} contribution{hoveredDay.count !== 1 ? "s" : ""} recorded
                </span>
              ) : (
                "Continuous development across coursework, models & hackathons"
              )}
            </span>
            <span className="text-zinc-500">Telemetry Feed</span>
          </div>
        </div>

        {/* Featured Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.github.featuredRepos.map((repo, idx) => (
            <a
              key={idx}
              href={repo.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${repo.name} repository on GitHub`}
              className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-indigo-500/50 hover:bg-zinc-900/60 transition-all hover:-translate-y-1 group space-y-4 flex flex-col justify-between shadow-sm"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <Terminal className="w-4 h-4 text-indigo-400 shrink-0" />
                    <span className="text-sm font-bold text-white group-hover:text-indigo-300 transition-colors font-mono truncate">
                      {repo.name}
                    </span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-zinc-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
                </div>

                <p className="text-xs text-zinc-400 leading-relaxed line-clamp-3">
                  {repo.description}
                </p>

                {/* Topics */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {repo.topics.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800/80 text-zinc-400 border border-zinc-700/50 group-hover:border-zinc-600 transition-colors"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Repo Stats */}
              <div className="flex items-center gap-4 text-xs font-mono text-zinc-400 pt-3 border-t border-zinc-800/60">
                <span className="flex items-center gap-1.5">
                  <span className={`w-2 h-2 rounded-full ${getLanguageColor(repo.language)} inline-block`} />
                  <span>{repo.language}</span>
                </span>
                <span className="flex items-center gap-1 hover:text-zinc-200">
                  <Star className="w-3.5 h-3.5 text-amber-400" />
                  <span>{repo.stars}</span>
                </span>
                <span className="flex items-center gap-1 hover:text-zinc-200">
                  <GitFork className="w-3.5 h-3.5 text-zinc-400" />
                  <span>{repo.forks}</span>
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-8 p-4 rounded-xl bg-zinc-900/30 border border-zinc-800/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-zinc-400">
          <span>
            All codebases and algorithmic implementations are actively maintained and tracked on GitHub.
          </span>
          <a
            href={portfolioData.personal.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-cyan-300 font-mono inline-flex items-center gap-1.5"
          >
            <span>Explore all repositories on GitHub</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
