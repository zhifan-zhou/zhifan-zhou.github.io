"use client";

import { useState } from "react";

import { FeaturedDataMaster } from "@/components/FeaturedDataMaster";
import { HomeHero } from "@/components/HomeHero";
import { useLanguage } from "@/components/LanguageProvider";
import { ResearchConstellation } from "@/components/ResearchConstellation";
import { Reveal } from "@/components/Reveal";

export default function Home() {
  const { copy } = useLanguage();
  const [showAllNews, setShowAllNews] = useState(false);
  const visibleNews = showAllNews ? copy.home.news : copy.home.news.slice(0, 3);

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

      <Reveal>
        <FeaturedDataMaster />
      </Reveal>

      <Reveal id="research" className="content-section research-section">
        <div className="section-heading-row">
          <p className="section-kicker">{copy.home.researchTitle}</p>
          <h2>{copy.profile.line}</h2>
        </div>
        <ResearchConstellation />
      </Reveal>

      <Reveal id="news" className="content-section news-section">
        <div className="section-heading-row compact">
          <p className="section-kicker">{copy.home.newsTitle}</p>
        </div>
        <div className="news-list">
          {visibleNews.map((item, index) => (
            <article
              key={item.text}
              className={index === 0 ? "news-item news-item-latest" : "news-item news-item-muted"}
            >
              <time>{item.date}</time>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
        {copy.home.news.length > 3 ? (
          <button
            type="button"
            className="news-toggle"
            onClick={() => setShowAllNews((current) => !current)}
          >
            {showAllNews ? copy.home.showLess : copy.home.showMore}
          </button>
        ) : null}
      </Reveal>
    </div>
  );
}
