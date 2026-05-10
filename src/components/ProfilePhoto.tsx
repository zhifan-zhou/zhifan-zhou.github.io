import Image from "next/image";

import { profile } from "@/data/profile";

export function ProfilePhoto() {
  return (
    <Image
      src={profile.photo.src}
      alt={profile.photo.alt}
      width={400}
      height={500}
      unoptimized
      className="profile-photo"
      style={{ objectPosition: profile.photo.objectPosition }}
      priority
    />
  );
}
