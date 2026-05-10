"use client";

import { HomeHero } from "@/components/HomeHero";
import { useLanguage } from "@/components/LanguageProvider";
import { Reveal } from "@/components/Reveal";

export default function Home() {
  const { copy } = useLanguage();

  return (
    <div className="home-main">
      <Reveal>
        <HomeHero />
      </Reveal>

      <Reveal id="about" className="content-section about-section">
        <p className="section-kicker">{copy.home.aboutTitle}</p>
        <div className="about-copy">
          {copy.home.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
