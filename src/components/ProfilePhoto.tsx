"use client";

import { useEffect, useState } from "react";

import { profile } from "@/data/profile";

export function ProfilePhoto() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const image = new window.Image();
    image.onload = () => setIsLoaded(true);
    image.onerror = () => setIsLoaded(false);
    image.src = profile.photo.src;
  }, []);

  if (!isLoaded) {
    return (
      <div className="profile-photo-fallback" aria-label={profile.photo.alt}>
        ZZ
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={profile.photo.alt}
      className="profile-photo"
      style={{
        backgroundImage: `url(${profile.photo.src})`,
        backgroundPosition: profile.photo.objectPosition,
      }}
    />
  );
}
