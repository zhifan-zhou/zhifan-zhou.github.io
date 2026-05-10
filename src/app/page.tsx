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

      <Reveal className="content-section research-section">
        <p className="section-kicker">{copy.home.researchTitle}</p>
        <ul className="research-list">
          {copy.home.researchInterests.map((interest) => (
            <li key={interest}>{interest}</li>
          ))}
        </ul>
      </Reveal>

      <Reveal className="content-section news-section">
        <p className="section-kicker">{copy.home.newsTitle}</p>
        <div className="news-list">
          {copy.home.news.map((item, index) => (
            <article
              key={item.text}
              className={index === 0 ? "news-item news-item-latest" : "news-item news-item-muted"}
            >
              <time>{item.date}</time>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
