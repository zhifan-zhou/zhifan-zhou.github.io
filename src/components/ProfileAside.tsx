"use client";

import { profile } from "@/data/profile";

import { useLanguage } from "./LanguageProvider";
import { LocalViewCounter } from "./LocalViewCounter";
import { ProfilePhoto } from "./ProfilePhoto";
import { SocialIconLink } from "./SocialIconLink";

export function ProfileAside() {
  const { copy } = useLanguage();

  return (
    <aside className="profile-card">
      <ProfilePhoto />

      <div className="mt-5">
        <h2 className="text-2xl font-semibold leading-tight text-stone-950">
          {profile.name}
        </h2>
        <p className="mt-2 text-sm font-medium text-sky-800">
          {copy.profile.role}
        </p>
      </div>

      <div className="mt-5 space-y-2 border-l-2 border-sky-600 pl-4">
        <p className="text-lg font-semibold leading-6 text-stone-950">
          {copy.profile.school}
        </p>
        <p className="text-sm leading-6 text-stone-600">
          {copy.profile.major}
        </p>
      </div>

      <p className="mt-5 text-sm leading-6 text-stone-600">
        {copy.profile.line}
      </p>

      <div className="mt-5">
        <LocalViewCounter />
      </div>

      <div className="mt-6 flex items-center gap-3">
        {profile.socialLinks.map((link) => (
          <SocialIconLink key={link.key} link={link} />
        ))}
      </div>
    </aside>
  );
}
