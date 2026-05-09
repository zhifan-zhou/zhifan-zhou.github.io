"use client";

import { useState } from "react";

import { ProfileAside } from "@/components/ProfileAside";
import { useLanguage } from "@/components/LanguageProvider";

export default function Home() {
  const { copy } = useLanguage();
  const [showAllNews, setShowAllNews] = useState(false);
  const visibleNews = showAllNews ? copy.home.news : copy.home.news.slice(0, 3);

  return (
    <div className="grid min-w-0 gap-10 lg:grid-cols-[320px_1fr] lg:items-start">
      <ProfileAside />

      <div className="min-w-0 space-y-12">
        <section className="hero-panel">
          <p className="text-sm font-medium text-sky-700">
            {copy.home.eyebrow}
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-stone-950 sm:text-5xl">
            {copy.home.title}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-stone-700">
            {copy.home.positioning}
          </p>
        </section>

        <section className="content-section">
          <h2 className="section-title">{copy.home.aboutTitle}</h2>
          <div className="space-y-4 text-[1.02rem] leading-8 text-stone-700">
            {copy.home.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className="content-section">
          <h2 className="section-title">{copy.home.researchTitle}</h2>
          <ul className="interest-list">
            {copy.home.researchInterests.map((interest) => (
              <li key={interest}>
                <span aria-hidden="true" />
                {interest}
              </li>
            ))}
          </ul>
        </section>

        <section className="content-section">
          <h2 className="section-title">{copy.home.skillsTitle}</h2>
          <div className="skill-list-grid">
            {copy.home.skillGroups.map((group) => (
              <section key={group.title} className="skill-list-column">
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </section>

        <section className="content-section">
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
        </section>
      </div>
    </div>
  );
}
