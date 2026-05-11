import type { SocialLink } from "@/data/profile";

import { useMagneticEffect } from "@/hooks/useMagneticEffect";
import { cn } from "@/lib/utils";

type SocialIconLinkProps = {
  link: SocialLink;
  className?: string;
};

function SocialIcon({ type }: { type: SocialLink["key"] }) {
  if (type === "github") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.4a9.7 9.7 0 0 0-3.1 18.9c.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.2-3.4-1.2-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 0 1.6 1.1 1.6 1.1.9 1.6 2.4 1.1 2.9.9.1-.7.4-1.1.7-1.4-2.2-.3-4.6-1.1-4.6-4.9 0-1.1.4-2 1.1-2.7-.1-.3-.5-1.3.1-2.7 0 0 .9-.3 2.8 1a9.5 9.5 0 0 1 5.1 0c1.9-1.3 2.8-1 2.8-1 .6 1.4.2 2.4.1 2.7.7.7 1.1 1.6 1.1 2.7 0 3.8-2.3 4.7-4.6 4.9.4.3.7 1 .7 2v2.9c0 .3.2.6.7.5A9.7 9.7 0 0 0 12 2.4Z" />
      </svg>
    );
  }

  if (type === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5.2 8.8h3.2v10.3H5.2V8.8Zm1.6-5a1.9 1.9 0 1 1 0 3.8 1.9 1.9 0 0 1 0-3.8Zm3.6 5h3v1.4h.1c.4-.8 1.5-1.7 3.1-1.7 3.3 0 3.9 2.2 3.9 5v5.6h-3.2v-5c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7v5.1h-3.2V8.8Z" />
      </svg>
    );
  }

  if (type === "email") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4.8 6.2h14.4c1 0 1.8.8 1.8 1.8v8c0 1-.8 1.8-1.8 1.8H4.8C3.8 17.8 3 17 3 16V8c0-1 .8-1.8 1.8-1.8Zm.7 2 6.5 4.7 6.5-4.7h-13Zm13.7 1.8-6.7 4.8a.9.9 0 0 1-1 0L4.8 10v6h14.4v-6Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 3.5h7.2L19 8.3v12.2H7V3.5Zm7 1.8v3.2h3.2L14 5.3ZM9 10.5v1.4h8v-1.4H9Zm0 3.1V15h8v-1.4H9Zm0 3.1v1.4h5.7v-1.4H9Z" />
    </svg>
  );
}

export function SocialIconLink({ link, className }: SocialIconLinkProps) {
  const { ref } = useMagneticEffect();

  if (link.isUnavailable) {
    return (
      <span
        ref={ref as React.RefObject<HTMLSpanElement>}
        aria-label={link.ariaLabel}
        aria-disabled="true"
        title="Link to be updated later"
        className={cn("social-icon-link social-icon-placeholder", className)}
      >
        <SocialIcon type={link.key} />
        <span className="sr-only">{link.label}</span>
      </span>
    );
  }

  return (
    <a
      ref={ref as React.RefObject<HTMLAnchorElement>}
      href={link.href}
      aria-label={link.ariaLabel}
      target={link.isExternal ? "_blank" : undefined}
      rel={link.isExternal ? "noreferrer" : undefined}
      download={link.download}
      className={cn("social-icon-link", className)}
    >
      <SocialIcon type={link.key} />
      <span className="sr-only">{link.label}</span>
    </a>
  );
}
