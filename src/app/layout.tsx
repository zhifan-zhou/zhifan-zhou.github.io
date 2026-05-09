import type { Metadata } from "next";

import "./globals.css";

import { LanguageProvider } from "@/components/LanguageProvider";
import { SiteFrame } from "@/components/SiteFrame";
import { ThemeProvider } from "@/components/ThemeProvider";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: `${profile.name} | Academic Homepage`,
  description:
    "Personal academic homepage and interactive resume for Zhifan Zhou, an undergraduate student at Carnegie Mellon University studying Statistics and Machine Learning.",
  authors: [{ name: profile.name }],
  keywords: [
    "Zhifan Zhou",
    "Sky Zhou",
    "Carnegie Mellon University",
    "Statistics and Machine Learning",
    "AI agents",
    "LLM systems",
    "data science",
    "NLP",
  ],
  openGraph: {
    title: `${profile.name} | Academic Homepage`,
    description:
      "Academic homepage, portfolio, and resume-style profile for AI agents, data science, NLP, and product-oriented AI systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <LanguageProvider>
            <SiteFrame>{children}</SiteFrame>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
