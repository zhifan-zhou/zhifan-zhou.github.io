"use client";

import { useState, type CSSProperties, type MouseEvent } from "react";
import Link from "next/link";

import { profile } from "@/data/profile";

import { useLanguage } from "./LanguageProvider";
import { LocalViewCounter } from "./LocalViewCounter";
import { ProfilePhoto } from "./ProfilePhoto";
import { SocialIconLink } from "./SocialIconLink";

export function HomeHero() {
  const { copy } = useLanguage();
  const [spotlight, setSpotlight] = useState({ x: 58, y: 36 });

  function handleMouseMove(event: MouseEvent<HTMLElement>) {
    const bounds = event.currentTarget.getBoundingClientRect();
    setSpotlight({
      x: ((event.clientX - bounds.left) / bounds.width) * 100,
      y: ((event.clientY - bounds.top) / bounds.height) * 100,
    });
  }

  return (
    <section
      className="hero-cinematic"
      onMouseMove={handleMouseMove}
      style={{
        "--hero-x": `${spotlight.x}%`,
        "--hero-y": `${spotlight.y}%`,
      } as CSSProperties}
    >
      <div className="hero-ambient" aria-hidden="true" />
      <div className="hero-noise" aria-hidden="true" />

      <div className="hero-content">
        <p className="hero-eyebrow">{copy.home.eyebrow}</p>
        <h1 className="hero-title">{copy.home.title}</h1>
        <p className="hero-copy">{copy.home.positioning}</p>

        <div className="hero-actions">
          <Link href="/experiences#datamaster" className="primary-action">
            DataMaster
          </Link>
          <Link href="/publications" className="secondary-action">
            {copy.nav.publications}
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
      </div>

      <div className="hero-portrait-wrap">
        <ProfilePhoto />
        <div className="hero-social-row">
          {profile.socialLinks.map((link) => (
            <SocialIconLink key={link.key} link={link} />
          ))}
        </div>
        <LocalViewCounter />
      </div>

      <div className="hero-focus-card" aria-label="Research focus">
        <span>{copy.profile.role}</span>
        <strong>{copy.profile.major}</strong>
        <div>
          {copy.home.researchInterests.map((interest) => (
            <em key={interest}>{interest}</em>
          ))}
        </div>
      </div>
    </section>
  );
}
