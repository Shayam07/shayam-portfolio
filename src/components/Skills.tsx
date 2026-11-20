"use client";

import React, { useState } from "react";
import { Code2, BrainCircuit, Sparkles, Cpu, Terminal, Search } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const iconMap: Record<string, React.ReactNode> = {
    Code2: <Code2 className="w-5 h-5 text-indigo-400" />,
    BrainCircuit: <BrainCircuit className="w-5 h-5 text-cyan-400" />,
    Sparkles: <Sparkles className="w-5 h-5 text-purple-400" />,
    Cpu: <Cpu className="w-5 h-5 text-indigo-400" />,
    Terminal: <Terminal className="w-5 h-5 text-emerald-400" />,
  };

  const getFilteredCategories = () => {
    let list = portfolioData.skills;
    if (selectedCategory !== "all") {
      list = list.filter((cat) => cat.id === selectedCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.map((cat) => ({
        ...cat,
        skills: cat.skills.filter((s) => s.toLowerCase().includes(q)),
      })).filter((cat) => cat.skills.length > 0);
    }
    return list;
  };

  const filteredCategories = getFilteredCategories();

  return (
    <section id="skills" className="py-20 sm:py-28 relative border-t border-zinc-900 bg-zinc-950/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono uppercase tracking-wider mb-3">
              <Cpu className="w-3.5 h-3.5" />
              <span>Technical Skills</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Core Competencies &amp; Toolchain
            </h2>
            <p className="mt-3 text-sm sm:text-base text-zinc-400 max-w-2xl">
              Factual technical skills across programming languages, machine learning techniques, generative agent orchestration, and data engineering frameworks.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Filter skills (e.g. LangGraph, Python)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 rounded-xl bg-zinc-900/80 border border-zinc-800 text-xs text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-indigo-500/50 transition-colors"
            />
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
              selectedCategory === "all"
                ? "bg-indigo-600 text-white shadow-sm"
                : "bg-zinc-900/80 text-zinc-400 hover:text-zinc-200 border border-zinc-800"
            }`}
          >
            All Categories
          </button>
          {portfolioData.skills.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? "bg-indigo-600 text-white shadow-sm"
                  : "bg-zinc-900/80 text-zinc-400 hover:text-zinc-200 border border-zinc-800"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Categorized Skills Grid - NO FAKE PERCENTAGES */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700 transition-all flex flex-col justify-between space-y-4"
            >
              <div>
                <div className="flex items-center gap-3 border-b border-zinc-800/80 pb-3 mb-3">
                  <div className="p-2 rounded-xl bg-zinc-800/80 border border-zinc-700/50">
                    {iconMap[category.iconName] || <Code2 className="w-5 h-5 text-indigo-400" />}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-zinc-100">
                      {category.title}
                    </h3>
                    <span className="text-[11px] font-mono text-zinc-500">
                      {category.skills.length} competencies
                    </span>
                  </div>
                </div>

                <p className="text-xs text-zinc-400 mb-4 leading-relaxed">
                  {category.description}
                </p>

                {/* Clean Badges */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1.5 rounded-lg text-xs font-mono bg-zinc-800/80 text-zinc-200 border border-zinc-700/60 hover:border-indigo-500/50 hover:text-white transition-colors shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
