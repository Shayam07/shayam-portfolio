"use client";

import React from "react";
import { X, Download, FileText, ExternalLink, CheckCircle, GraduationCap, Briefcase, Mail, Phone, Award } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { useToast } from "./Toast";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const { showToast } = useToast();

  const handleDownload = () => {
    showToast("Downloading resume PDF...", "info");
    const link = document.createElement("a");
    link.href = portfolioData.personal.resumePath;
    link.download = "Shayam_Kaarthick_N_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    showToast("Email copied to clipboard!", "success");
  };

  return (
    <AnimatePresence>
      {isOpen && (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          key="resume-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md z-0"
        />

        {/* Modal Window */}
        <motion.div
          key="resume-modal"
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative w-full max-w-3xl my-6 bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden z-[10] max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4 border-b border-zinc-800 bg-zinc-900/60">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="p-1.5 sm:p-2 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 shrink-0">
                <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-semibold text-zinc-100">
                  Curriculum Vitae / Resume
                </h3>
                <p className="text-[11px] sm:text-xs text-zinc-400">
                  {portfolioData.personal.name} • {portfolioData.personal.role}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1.5 sm:gap-2">
              <button
                onClick={handleDownload}
                className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium transition-all shadow-md shadow-indigo-600/20 active:scale-95 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">PDF Download</span>
                <span className="sm:hidden">PDF</span>
              </button>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Scrollable Content */}
          <div className="p-4 sm:p-8 overflow-y-auto space-y-6 text-sm text-zinc-300">
            {/* Header info */}
            <div className="border-b border-zinc-800 pb-5">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                <div>
                  <h1 className="text-2xl font-bold tracking-tight text-white">
                    {portfolioData.personal.name}
                  </h1>
                  <p className="text-indigo-400 font-medium text-sm mt-0.5">
                    {portfolioData.personal.role}
                  </p>
                  <p className="text-xs text-zinc-400 mt-1">
                    {portfolioData.personal.institution} • {portfolioData.personal.location}
                  </p>
                  <p className="text-xs font-mono text-cyan-300 font-semibold mt-1">
                    CGPA: {portfolioData.personal.cgpa}
                  </p>
                </div>

                <div className="flex flex-col gap-1.5 text-xs font-mono">
                  <button
                    onClick={copyEmail}
                    className="flex items-center gap-1.5 text-zinc-300 hover:text-indigo-400 transition-colors cursor-pointer text-left"
                  >
                    <Mail className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                    <span>{portfolioData.personal.email}</span>
                  </button>
                  <a
                    href={`tel:${portfolioData.personal.phoneClean}`}
                    className="flex items-center gap-1.5 text-zinc-300 hover:text-emerald-400 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{portfolioData.personal.phone}</span>
                  </a>
                  <a
                    href={portfolioData.personal.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-zinc-400 hover:text-cyan-400 transition-colors"
                  >
                    <span>github.com/{portfolioData.personal.githubUsername}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href={portfolioData.personal.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-zinc-400 hover:text-cyan-400 transition-colors"
                  >
                    <span>LinkedIn Profile</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Professional Summary */}
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                Professional Profile
              </h2>
              <p className="text-xs leading-relaxed text-zinc-300">
                {portfolioData.personal.intro}
              </p>
            </div>

            {/* Education */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <GraduationCap className="w-4 h-4 text-cyan-400" />
                <h2 className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  Education
                </h2>
              </div>
              {portfolioData.education.map((edu, idx) => (
                <div key={idx} className="bg-zinc-900/60 p-4 rounded-xl border border-zinc-800/80">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                    <span className="font-semibold text-zinc-100">{edu.degree}</span>
                    <span className="text-xs text-indigo-400 font-mono">{edu.duration}</span>
                  </div>
                  <p className="text-xs text-zinc-400 mb-1">{edu.institution} — {edu.location}</p>
                  <p className="text-xs font-mono font-bold text-cyan-300 mb-2">CGPA: {edu.cgpa}</p>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {edu.coreCoursework.map((course, cIdx) => (
                      <span
                        key={cIdx}
                        className="px-2 py-0.5 text-[11px] rounded bg-zinc-800 text-zinc-300 border border-zinc-700/50"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Professional Experience */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Briefcase className="w-4 h-4 text-indigo-400" />
                <h2 className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  Professional Experience
                </h2>
              </div>
              <div className="space-y-3">
                {portfolioData.experience.map((exp) => (
                  <div key={exp.id} className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-white text-xs sm:text-sm">{exp.role}</span>
                      <span className="text-xs font-mono text-zinc-400">{exp.period}</span>
                    </div>
                    <p className="text-xs text-cyan-400 mb-2">{exp.organization}</p>
                    <ul className="space-y-1 text-xs text-zinc-300">
                      {exp.bulletPoints.map((b, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0 mt-1.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Skills */}
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-3">
                Technical Skills
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {portfolioData.skills.map((cat) => (
                  <div key={cat.id} className="p-3 rounded-lg bg-zinc-900/40 border border-zinc-800/60">
                    <span className="text-xs font-medium text-indigo-300 block mb-1.5">
                      {cat.title}
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {cat.skills.map((s, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-1.5 py-0.5 rounded text-[11px] bg-zinc-800 text-zinc-300"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements & Certifications */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Award className="w-4 h-4 text-amber-400" />
                <h2 className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  Achievements &amp; Certifications
                </h2>
              </div>
              <ul className="space-y-2 text-xs text-zinc-300">
                {portfolioData.certifications.map((cert) => (
                  <li key={cert.id} className="p-2.5 rounded-lg bg-zinc-900/40 border border-zinc-800/60 flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-zinc-100">{cert.title}</strong>
                      {cert.distinction && (
                        <span className="text-amber-300 ml-1 font-mono text-[11px]">({cert.distinction})</span>
                      )}
                      <p className="text-zinc-400 text-[11px] mt-0.5">{cert.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Footer Note */}
          <div className="p-4 bg-zinc-900/70 border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-400">
            <span>Official Curriculum Vitae &bull; Shayam Kaarthick N</span>
            <button
              onClick={handleDownload}
              className="text-indigo-400 hover:text-indigo-300 font-medium inline-flex items-center gap-1 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" /> Download PDF
            </button>
          </div>
        </motion.div>
      </div>
      )}
    </AnimatePresence>
  );
}
