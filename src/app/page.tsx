"use client";

import { useCallback, useState } from "react";

import { HomeHero } from "@/components/HomeHero";
import { useLanguage } from "@/components/LanguageProvider";
import { ResearchPill } from "@/components/ResearchPill";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

export default function Home() {
  const { copy } = useLanguage();
  const [activeNewsIndex, setActiveNewsIndex] = useState(0);
  const [glowStyle, setGlowStyle] = useState({ left: "50%", top: "50%" });
  const [glowActive, setGlowActive] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    setGlowStyle({
      left: `${e.clientX}px`,
      top: `${e.clientY}px`,
    });
  }, []);

  return (
    <div className="home-main" onMouseMove={handleMouseMove} onMouseEnter={() => setGlowActive(true)} onMouseLeave={() => setGlowActive(false)}>
      {/* Cursor glow */}
      <div
        className={cn("cursor-glow", glowActive && "cursor-glow-active")}
        aria-hidden="true"
        style={{
          background: `radial-gradient(circle 18rem at ${glowStyle.left} ${glowStyle.top}, var(--accent-soft), transparent 50%)`,
        }}
      />

      <Reveal>
        <HomeHero />
      </Reveal>

      <Reveal id="about" className="content-section about-section">
        <div>
          <span className="section-number">001</span>
          <span className="section-kicker">{copy.home.aboutTitle}</span>
        </div>
        <div className="about-copy">
          {copy.home.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Reveal>

      <Reveal className="content-section research-section">
        <div>
          <span className="section-number">002</span>
          <span className="section-kicker">{copy.home.researchTitle}</span>
        </div>
        <ul className="research-list">
          {copy.home.researchInterests.map((interest) => (
            <ResearchPill key={interest} label={interest} />
          ))}
        </ul>
      </Reveal>

      <Reveal className="content-section news-section">
        <div>
          <span className="section-number">003</span>
          <span className="section-kicker">{copy.home.newsTitle}</span>
        </div>
        <div className="news-list">
          {copy.home.news.map((item, index) => (
            <button
              key={item.text}
              type="button"
              className={cn(
                "news-item",
                index === activeNewsIndex
                  ? "news-item-latest"
                  : "news-item-muted",
              )}
              onClick={() => setActiveNewsIndex(index)}
            >
              <time>{item.date}</time>
              <p>{item.text}</p>
            </button>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
