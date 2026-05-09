"use client";

import { useState, type CSSProperties } from "react";
import Link from "next/link";

import { ProfileAside } from "@/components/ProfileAside";
import { useLanguage } from "@/components/LanguageProvider";
import { Reveal } from "@/components/Reveal";
import { profile } from "@/data/profile";

export default function Home() {
  const { copy } = useLanguage();
  const [showAllNews, setShowAllNews] = useState(false);
  const visibleNews = showAllNews ? copy.home.news : copy.home.news.slice(0, 3);

  return (
    <div className="grid min-w-0 gap-10 lg:grid-cols-[320px_1fr] lg:items-start">
      <ProfileAside />

      <div className="min-w-0 space-y-12">
        <Reveal className="hero-panel hero-showcase">
          <div className="hero-aura" aria-hidden="true" />
          <div className="relative">
            <p className="hero-eyebrow">{copy.home.eyebrow}</p>
            <h1 className="hero-title">{copy.home.title}</h1>
            <p className="hero-copy">{copy.home.positioning}</p>

            <div className="hero-actions">
              <Link href="/publications" className="primary-action">
                {copy.nav.publications}
              </Link>
              <Link href="/experiences#datamaster" className="secondary-action">
                DataMaster
              </Link>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="secondary-action"
              >
                GitHub
              </a>
            </div>

            <div className="hero-metrics" aria-label="Profile highlights">
              <div>
                <span>{copy.profile.school}</span>
                <strong>{copy.profile.major}</strong>
              </div>
              <div>
                <span>DataMaster</span>
                <strong>{copy.publications.items[0]?.status}</strong>
              </div>
              <div>
                <span>Focus</span>
                <strong>{copy.profile.line}</strong>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal id="about" className="content-section">
          <h2 className="section-title">{copy.home.aboutTitle}</h2>
          <div className="space-y-4 text-[1.02rem] leading-8 text-stone-700">
            {copy.home.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Reveal>

        <Reveal id="research" className="content-section">
          <h2 className="section-title">{copy.home.researchTitle}</h2>
          <ul className="research-map">
            {copy.home.researchInterests.map((interest, index) => (
              <li key={interest} style={{ "--node-index": index } as CSSProperties}>
                <span className="research-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {interest}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal id="news" className="content-section">
          <h2 className="section-title">{copy.home.newsTitle}</h2>
          <div className="news-list">
            {visibleNews.map((item) => (
              <article key={item.text} className="news-item">
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
    </div>
  );
}
