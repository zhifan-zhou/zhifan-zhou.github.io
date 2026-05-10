"use client";

import { useState, type CSSProperties, type MouseEvent } from "react";

import { profile } from "@/data/profile";

import { useLanguage } from "./LanguageProvider";
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
      style={
        {
          "--hero-x": `${spotlight.x}%`,
          "--hero-y": `${spotlight.y}%`,
        } as CSSProperties
      }
    >
      <div className="hero-ambient" aria-hidden="true" />

      <div className="hero-content">
        <p className="hero-eyebrow">{copy.home.eyebrow}</p>
        <h1 className="hero-title">{copy.home.title}</h1>
        <p className="hero-copy">{copy.home.positioning}</p>

        <div className="hero-social-row">
          {profile.socialLinks.map((link) => (
            <SocialIconLink key={link.key} link={link} />
          ))}
        </div>
      </div>

      <div className="hero-portrait-wrap">
        <ProfilePhoto />
      </div>
    </section>
  );
}
