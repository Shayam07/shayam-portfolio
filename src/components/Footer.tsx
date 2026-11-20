"use client";

import React from "react";
import { ArrowUp, Heart, Terminal, Shield, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { portfolioData } from "@/data/portfolio";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-zinc-900 bg-zinc-950 text-zinc-400 text-xs py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo & Bio note */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <span className="font-mono font-bold tracking-wider text-sm text-zinc-200">
              SHAYAM.DEV
            </span>
            <span className="hidden sm:inline text-zinc-600">•</span>
            <span className="text-zinc-500 font-mono">
              Designed &amp; Engineered by Shayam Kaarthick
            </span>
          </div>

          {/* System Status Indicator */}
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Systems Nominal • Production Build</span>
          </div>

          {/* Social Profiles & Back to top button */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={portfolioData.personal.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Shayam Kaarthick N GitHub Profile"
              className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-700 transition-colors cursor-pointer"
              title="GitHub: Shayam07"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={portfolioData.personal.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Shayam Kaarthick N LinkedIn Profile"
              className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-cyan-400 border border-zinc-800 hover:border-cyan-500/40 transition-colors cursor-pointer"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 text-xs font-mono transition-colors cursor-pointer active:scale-95"
              aria-label="Scroll to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Copyright notice */}
        <div className="mt-8 pt-6 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-zinc-400 font-mono text-center sm:text-left">
          <span>
            © 2026 Shayam Kaarthick N. All rights reserved.
          </span>
          <span className="text-zinc-500">
            Sri Krishna College of Engineering and Technology (2025–2029)
          </span>
        </div>
      </div>
    </footer>
  );
}
