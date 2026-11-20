import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shayam Kaarthick N | AI Engineer & Machine Learning Developer",
  description: "Portfolio of Shayam Kaarthick N — AI Engineer, Machine Learning Developer & B.Tech Artificial Intelligence and Data Science student at Sri Krishna College of Engineering and Technology (CGPA 9.65). Specializing in Machine Learning, Generative AI, and Agentic AI.",
  keywords: [
    "Shayam Kaarthick N",
    "Shayam Kaarthick",
    "AI Engineer",
    "Machine Learning",
    "Generative AI",
    "Agentic AI",
    "LangGraph",
    "FastAPI",
    "Sri Krishna College of Engineering and Technology",
    "Infosys Springboard",
    "Python Developer"
  ],
  authors: [{ name: "Shayam Kaarthick N" }],
  creator: "Shayam Kaarthick N",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shayamkaarthick.dev",
    title: "Shayam Kaarthick N | AI Engineer Portfolio",
    description: "Engineering Intelligence. Building AI That Matters. Explore projects in collaborative multi-agent reasoning (ORCA), Career AI, deep learning, and predictive machine learning.",
    siteName: "Shayam Kaarthick N Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shayam Kaarthick N | AI Engineer",
    description: "Engineering Intelligence. Building AI That Matters.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="min-h-screen bg-[#09090B] text-slate-100 antialiased selection:bg-indigo-500/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
