"use client";

import { ExperienceTimeline } from "./ExperienceTimeline";
import { PageHeader } from "./PageHeader";
import { useLanguage } from "./LanguageProvider";

export function ExperiencesPageClient() {
  const { copy } = useLanguage();
  const { education } = copy.experiences;

  return (
    <div>
      <PageHeader title={copy.experiences.title} />

      <section className="content-section">
        <h2 className="section-title">{copy.experiences.educationTitle}</h2>
        <article className="education-panel">
          <div>
            <p className="text-sm font-medium" style={{ color: 'var(--accent-strong)' }}>
              {education.organization}
            </p>
            <h3>{education.degree}</h3>
            {education.description ? (
              <p className="mt-3 max-w-2xl text-sm leading-7" style={{ color: 'var(--muted)' }}>
                {education.description}
              </p>
            ) : null}
          </div>
          <div className="education-meta">
            <span>{education.period}</span>
          </div>
          {education.details.length ? (
            <ul>
              {education.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          ) : null}
        </article>
      </section>

      <section className="content-section">
        <h2 className="section-title">{copy.experiences.workTitle}</h2>
        <ExperienceTimeline experiences={copy.experiences.work} />
      </section>
    </div>
  );
}
