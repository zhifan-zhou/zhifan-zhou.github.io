"use client";

import { useState, type FormEvent } from "react";

import { profile } from "@/data/profile";

import { useLanguage } from "./LanguageProvider";
import { PageHeader } from "./PageHeader";
import { SocialIconLink } from "./SocialIconLink";

export function ContactPageClient() {
  const { copy } = useLanguage();
  const [name, setName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [message, setMessage] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subject = encodeURIComponent(`Website message from ${name || "visitor"}`);
    const body = encodeURIComponent(
      [`Name: ${name}`, `Email: ${senderEmail}`, "", message].join("\n"),
    );

    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  async function handleCopyEmail() {
    await navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    window.setTimeout(() => setCopiedEmail(false), 1800);
  }

  return (
    <div>
      <PageHeader title={copy.contact.title} description={copy.contact.description} />

      <div className="contact-grid">
        <section className="dropbox-panel">
          <h2>{copy.contact.formTitle}</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              <span>{copy.contact.nameLabel}</span>
              <input
                value={name}
                onChange={(event) => setName(event.target.value)}
                name="name"
                autoComplete="name"
              />
            </label>
            <label>
              <span>{copy.contact.emailLabel}</span>
              <input
                value={senderEmail}
                onChange={(event) => setSenderEmail(event.target.value)}
                name="email"
                type="email"
                autoComplete="email"
              />
            </label>
            <label>
              <span>{copy.contact.messageLabel}</span>
              <textarea
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                name="message"
                rows={7}
                required
              />
            </label>
            <button type="submit">{copy.contact.submitLabel}</button>
          </form>
        </section>

        <aside className="contact-info-panel">
          <div className="contact-info-copy">
            <p className="text-sm font-medium text-sky-800">
              {copy.contact.locationLabel}
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-stone-950">
              {copy.contact.mapTitle}
            </h2>
            <p className="mt-3 text-sm leading-6 text-stone-600">
              {profile.schoolAddress}
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-4 inline-flex text-sm font-medium text-sky-700 underline decoration-sky-700/25 underline-offset-4 hover:text-sky-900"
            >
              {profile.email}
            </a>
            <button
              type="button"
              className="copy-email-button"
              onClick={handleCopyEmail}
            >
              {copiedEmail
                ? copy.contact.copiedEmailLabel
                : copy.contact.copyEmailLabel}
            </button>
          </div>

          <div className="mt-6 flex gap-3">
            {profile.socialLinks.map((link) => (
              <SocialIconLink key={link.key} link={link} />
            ))}
          </div>

          <div
            className="map-panel embedded-map"
            aria-label="Map showing Carnegie Mellon University"
          >
            <iframe
              title="Carnegie Mellon University map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-79.9564%2C40.4354%2C-79.9325%2C40.4513&layer=mapnik&marker=40.4433%2C-79.9436"
              loading="lazy"
            />
            <span className="map-pin-clean" aria-hidden="true" />
          </div>
        </aside>
      </div>
    </div>
  );
}
