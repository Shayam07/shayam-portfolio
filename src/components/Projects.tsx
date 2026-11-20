"use client";

import React, { useState } from "react";
import { ExternalLink, Layers, ArrowUpRight, ChevronRight, Eye, Sparkles, Bot, CheckCircle2 } from "lucide-react";
import { GithubIcon } from "./Icons";
import { portfolioData, Project } from "@/data/portfolio";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ["All", "Agentic AI & LLMs", "Machine Learning", "Data Analytics & NLP"];

  const filteredProjects = activeCategory === "All"
    ? portfolioData.projects
    : portfolioData.projects.filter((p) => p.category === activeCategory);

  // Find flagship project (ORCA)
  const flagshipProject = portfolioData.projects.find((p) => p.flagship) || portfolioData.projects[0];
  const standardProjects = filteredProjects.filter((p) => p.id !== flagshipProject.id);

  return (
    <section id="projects" className="py-20 sm:py-28 relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>Project Showcase</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Featured AI Engineering Systems
            </h2>
            <p className="mt-3 text-sm sm:text-base text-zinc-400 max-w-2xl">
              Concrete implementations spanning collaborative multi-agent reasoning with LangGraph, LLM-powered applications, CNN computer vision, and predictive ML models.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 bg-zinc-900/60 p-1.5 rounded-xl border border-zinc-800 w-fit">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  activeCategory === cat
                    ? "bg-indigo-600 text-white shadow-sm"
                    : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/60"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FLAGSHIP PROJECT CONTAINER: ORCA (Strongest Visual Emphasis) */}
        {(activeCategory === "All" || activeCategory === "Agentic AI & LLMs") && (
          <div className="mb-10 rounded-2xl bg-gradient-to-br from-indigo-950/40 via-zinc-900/80 to-zinc-950 border-2 border-indigo-500/50 hover:border-cyan-400/60 transition-all duration-300 shadow-2xl shadow-indigo-500/10 overflow-hidden relative">
            <div className="p-6 sm:p-8 lg:p-10">
              
              {/* Flagship Meta Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-2.5">
                  <span className="px-3 py-1 text-xs font-mono font-bold uppercase rounded-full bg-cyan-400/10 text-cyan-300 border border-cyan-400/30 flex items-center gap-1.5 shadow-sm">
                    <Sparkles className="w-3.5 h-3.5" />
                    FLAGSHIP SYSTEM
                  </span>
                  <span className="px-2.5 py-0.5 text-xs font-mono rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/30">
                    {flagshipProject.status}
                  </span>
                  <span className="text-xs font-mono text-zinc-400 hidden sm:inline">
                    {flagshipProject.category}
                  </span>
                </div>
                <span className="text-xs font-mono text-zinc-400">
                  {flagshipProject.date}
                </span>
              </div>

              {/* Title & Core Description */}
              <div className="max-w-4xl space-y-3 mb-6">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-2">
                  <span>{flagshipProject.title}</span>
                </h3>
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                  {flagshipProject.shortDescription}
                </p>
              </div>

              {/* Key Highlights Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                {flagshipProject.keyContributions.slice(0, 4).map((contrib, cIdx) => (
                  <div
                    key={cIdx}
                    className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800 text-xs text-zinc-300 flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{contrib}</span>
                  </div>
                ))}
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-zinc-800/80">
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider mr-1">
                  Stack:
                </span>
                {flagshipProject.technologies.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-xs font-mono px-2.5 py-1 rounded-md bg-zinc-800/90 text-zinc-200 border border-zinc-700/60"
                  >
                    {tech}
                  </span>
                ))}

                <div className="w-full sm:w-auto flex flex-wrap sm:flex-nowrap items-center sm:ml-auto gap-3 pt-3 sm:pt-0">
                  <button
                    onClick={() => setSelectedProject(flagshipProject)}
                    className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium transition-all shadow-md shadow-indigo-600/30 cursor-pointer active:scale-95"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Architecture Deep Dive</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  {flagshipProject.githubUrl && (
                    <a
                      href={flagshipProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 hover:text-white border border-zinc-700 transition-colors"
                      title="View GitHub Repository"
                      aria-label="View ORCA GitHub repo"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Remaining 5 Projects in Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {standardProjects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col justify-between rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-indigo-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/5 group overflow-hidden"
            >
              {/* Card Header & Content */}
              <div className="p-6 sm:p-7 space-y-4">
                
                {/* Meta Bar */}
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full border ${
                        project.status === "Completed"
                          ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
                          : "bg-indigo-500/10 text-indigo-400 border-indigo-500/30"
                      }`}
                    >
                      {project.status}
                    </span>
                    <span className="text-xs text-zinc-500 font-mono">
                      {project.category}
                    </span>
                  </div>

                  <span className="text-[11px] font-mono text-zinc-500">
                    {project.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-indigo-300 transition-colors">
                  {project.title}
                </h3>

                {/* Short Description */}
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {project.shortDescription}
                </p>

                {/* Key Contributions list */}
                <div className="space-y-1.5 pt-2 border-t border-zinc-800/60">
                  {project.keyContributions.slice(0, 2).map((kc, kIdx) => (
                    <div key={kIdx} className="text-xs text-zinc-300 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-1.5" />
                      <span className="line-clamp-2">{kc}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-800/60 text-zinc-300 border border-zinc-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-6 py-4 bg-zinc-900/60 border-t border-zinc-800/80 flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex items-center gap-1.5 text-xs font-medium text-indigo-400 hover:text-indigo-300 transition-colors cursor-pointer group/btn"
                >
                  <Eye className="w-4 h-4" />
                  <span>Architecture Deep Dive</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                </button>

                <div className="flex items-center gap-2">
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-zinc-800/70 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors"
                      title="View GitHub Repository"
                      aria-label={`View ${project.title} GitHub repository`}
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  ) : (
                    <span className="text-[10px] font-mono text-zinc-500">
                      Code on request
                    </span>
                  )}

                  {project.liveDemoUrl && (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-indigo-600/20 hover:bg-indigo-600/40 text-indigo-400 hover:text-indigo-300 transition-colors"
                      title="View Live Demonstration"
                      aria-label={`View ${project.title} live demo`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Architecture Deep Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
