import type { SocialLink } from "@/data/profile";
import { cn } from "@/lib/utils";

type ExternalLinkProps = {
  link: SocialLink;
  className?: string;
};

export function ExternalLink({ link, className }: ExternalLinkProps) {
  if (link.isUnavailable) {
    return (
      <span
        aria-label={link.ariaLabel}
        aria-disabled="true"
        title="Link to be updated later"
        className={cn("placeholder-link", className)}
      >
        {link.label}
      </span>
    );
  }

  return (
    <a
      href={link.href}
      aria-label={link.ariaLabel}
      target={link.isExternal ? "_blank" : undefined}
      rel={link.isExternal ? "noreferrer" : undefined}
      download={link.download}
      className={cn("text-link", className)}
    >
      {link.label}
    </a>
  );
}
