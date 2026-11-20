import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import GithubSection from "@/components/GithubSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { ToastProvider } from "@/components/Toast";

export default function Home() {
  return (
    <ToastProvider>
      <div className="relative min-h-screen bg-[#09090B] text-slate-100 selection:bg-indigo-500/30 selection:text-white">
        {/* Sticky Global Navigation */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="flex flex-col">
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Experience />
          <Certifications />
          <GithubSection />
          <Contact />
        </main>

        {/* Global Tech Footer */}
        <Footer />
      </div>
    </ToastProvider>
  );
}
