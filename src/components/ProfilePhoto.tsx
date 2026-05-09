import { profile } from "@/data/profile";

export function ProfilePhoto() {
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
