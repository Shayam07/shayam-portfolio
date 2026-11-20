"use client";

import React from "react";
import { X, ExternalLink, Cpu, Network, CheckCircle2, AlertTriangle, ArrowRight, Layers, Bot, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/data/portfolio";
import { GithubIcon } from "./Icons";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <AnimatePresence>
      {project && (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          key="project-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md z-0"
        />

        {/* Modal Window */}
        <motion.div
          key="project-modal"
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative w-full max-w-4xl my-6 bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden z-[10] max-h-[92vh] flex flex-col"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4 border-b border-zinc-800 bg-zinc-900/60">
            <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
              <span
                className={`text-[10px] sm:text-[11px] font-mono uppercase tracking-wider px-2 sm:px-2.5 py-0.5 rounded-full border ${
                  project.status === "Completed"
                    ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
                    : "bg-indigo-500/10 text-indigo-400 border-indigo-500/30"
                }`}
              >
                {project.status}
              </span>
              {project.flagship && (
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> Flagship
                </span>
              )}
              <span className="text-xs text-zinc-400 font-mono hidden md:inline-block">
                {project.category}
              </span>
            </div>

            <div className="flex items-center gap-1.5 sm:gap-2">
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-700 text-xs font-mono transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Source Code</span>
                </a>
              ) : (
                <span className="px-2 py-0.5 text-[10px] font-mono text-zinc-500 bg-zinc-900 border border-zinc-800/80 rounded">
                  Repo on request
                </span>
              )}

              {project.liveDemoUrl && (
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-mono transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Demo</span>
                </a>
              )}

              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 transition-colors ml-1 cursor-pointer"
                aria-label="Close project modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-4 sm:p-8 overflow-y-auto space-y-6 sm:space-y-7 text-sm text-zinc-300">
            {/* Title & Overview */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
                {project.title}
              </h2>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                {project.shortDescription}
              </p>
            </div>

            {/* Problem Statement & Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-red-950/20 border border-red-500/20 space-y-1.5">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-red-400 flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5" /> Problem Statement
                </span>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  {project.problemStatement}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/20 space-y-1.5">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Technical Solution
                </span>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Key Contributions */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Layers className="w-4 h-4 text-cyan-400" />
                <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-200">
                  Key Technical Contributions
                </h3>
              </div>
              <ul className="space-y-2">
                {project.keyContributions.map((contrib, cIdx) => (
                  <li
                    key={cIdx}
                    className="p-3 rounded-lg bg-zinc-900/60 border border-zinc-800 text-xs text-zinc-300 flex items-start gap-2.5 leading-relaxed"
                  >
                    <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                    <span>{contrib}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* System Architecture Flow */}
            <div className="p-5 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 space-y-4">
              <div className="flex items-center gap-2 border-b border-zinc-800 pb-3">
                <Network className="w-4 h-4 text-cyan-400" />
                <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-200">
                  System Architecture &amp; Workflow
                </h3>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                {project.architecture.overview}
              </p>

              <div className="space-y-2 pt-1">
                {project.architecture.diagramSteps.map((step, sIdx) => (
                  <div
                    key={sIdx}
                    className="flex items-start gap-3 p-3 rounded-lg bg-zinc-900/90 border border-zinc-800 font-mono text-xs text-zinc-300"
                  >
                    <span className="text-indigo-400 font-bold shrink-0">STEP 0{sIdx + 1}</span>
                    <span className="leading-relaxed">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Methodology */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Cpu className="w-4 h-4 text-purple-400" />
                <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-200">
                  Methodology &amp; Algorithmic Approaches
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.architecture.methodology.map((meth, mIdx) => (
                  <div
                    key={mIdx}
                    className="p-3 rounded-lg bg-zinc-900/40 border border-zinc-800 text-xs text-zinc-300 flex items-start gap-2"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{meth}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Pills */}
            <div className="pt-2 border-t border-zinc-800">
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider block mb-2">
                Technologies Used:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 text-xs font-mono rounded bg-zinc-900 text-zinc-300 border border-zinc-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Bar */}
          <div className="p-4 bg-zinc-900/60 border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-400">
            <span>Project Reference: <code className="text-zinc-300 font-mono">{project.id}</code></span>
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-medium transition-colors cursor-pointer"
            >
              Close Deep Dive
            </button>
          </div>
        </motion.div>
      </div>
      )}
    </AnimatePresence>
  );
}
