"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, FileText, ArrowUpRight, Sparkles, Terminal } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { portfolioData } from "@/data/portfolio";
import ResumeModal from "./ResumeModal";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/80 shadow-lg shadow-black/30 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#hero"
              className="group flex items-center gap-2.5 text-zinc-100 hover:text-white transition-colors"
            >
              <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 group-hover:border-indigo-500/50 transition-colors shadow-inner">
                <span className="font-mono text-xs font-bold text-indigo-400 group-hover:text-cyan-400 transition-colors">
                  S
                </span>
                <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              </div>
              <div className="flex flex-col">
                <span className="font-mono font-bold tracking-wider text-sm text-zinc-100 flex items-center gap-1.5">
                  SHAYAM.DEV
                </span>
                <span className="text-[10px] text-zinc-400 font-mono hidden sm:inline-block">
                  AI Engineering
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1 bg-zinc-900/60 p-1 rounded-full border border-zinc-800/80 backdrop-blur-sm">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3.5 py-1.5 text-xs font-medium text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/60 rounded-full transition-all"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Actions & Availability */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Availability Indicator */}
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/70 border border-zinc-800 text-xs text-zinc-300">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[11px] font-medium text-zinc-300">
                  Open for AI Projects
                </span>
              </div>

              {/* Social Profile Links */}
              <a
                href={portfolioData.personal.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Shayam Kaarthick N GitHub Profile"
                className="p-2 rounded-lg bg-zinc-900/80 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 hover:border-zinc-700 transition-colors cursor-pointer"
                title="GitHub: Shayam07"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={portfolioData.personal.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Shayam Kaarthick N LinkedIn Profile"
                className="p-2 rounded-lg bg-zinc-900/80 hover:bg-zinc-800 text-zinc-300 hover:text-cyan-400 border border-zinc-800 hover:border-cyan-500/40 transition-colors cursor-pointer"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              {/* Resume Button */}
              <button
                onClick={() => setResumeModalOpen(true)}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-700/80 text-xs font-medium transition-all hover:border-indigo-500/50 active:scale-95 shadow-sm cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5 text-indigo-400" />
                <span>Resume</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                onClick={() => setResumeModalOpen(true)}
                className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs"
                aria-label="View Resume"
              >
                <FileText className="w-4 h-4 text-indigo-400" />
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-zinc-800 bg-zinc-950/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3 mt-3 max-h-[calc(100vh-80px)] overflow-y-auto animate-in fade-in slide-in-from-top-3 shadow-2xl">
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-zinc-900/60 border border-zinc-800 text-xs text-zinc-300 mb-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[11px] font-medium">
                {portfolioData.personal.availabilityStatus}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 text-xs font-medium text-zinc-300 hover:text-white hover:bg-zinc-800/70 rounded-lg transition-colors flex items-center"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-2 border-t border-zinc-800 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <a
                  href={portfolioData.personal.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-200 text-xs font-medium"
                >
                  <GithubIcon className="w-4 h-4 text-zinc-300" />
                  <span>GitHub</span>
                </a>
                <a
                  href={portfolioData.personal.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-200 text-xs font-medium"
                >
                  <LinkedinIcon className="w-4 h-4 text-cyan-400" />
                  <span>LinkedIn</span>
                </a>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setResumeModalOpen(true);
                  }}
                  className="flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-indigo-600 text-white text-xs font-medium"
                >
                  <FileText className="w-4 h-4" />
                  <span>View Resume</span>
                </button>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 px-4 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-200 text-xs font-medium"
                >
                  <span>Contact</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Resume Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </>
  );
}
