"use client";

import { ExperienceTimeline } from "./ExperienceTimeline";
import { ExternalLink } from "./ExternalLink";
import { PageHeader } from "./PageHeader";
import { useLanguage } from "./LanguageProvider";

export function ExperiencesPageClient() {
  const { copy } = useLanguage();
  const { education } = copy.experiences;
  const isChinese = copy.experiences.title === "经历";
  const workflow = isChinese
    ? [
        { label: "规划", detail: "设计实验方向" },
        { label: "执行", detail: "调用工具运行任务" },
        { label: "评估", detail: "检查模型与结果" },
        { label: "记忆", detail: "保留有效经验" },
        { label: "改进", detail: "迭代下一轮实验" },
      ]
    : [
        { label: "Plan", detail: "Design experiments" },
        { label: "Execute", detail: "Use tools and run tasks" },
        { label: "Evaluate", detail: "Inspect model results" },
        { label: "Remember", detail: "Retain useful context" },
        { label: "Improve", detail: "Iterate the workflow" },
      ];

  return (
    <div>
      <PageHeader title={copy.experiences.title} />

      <section className="content-section">
        <h2 className="section-title">{copy.experiences.educationTitle}</h2>
        <article className="education-panel">
          <div>
            <p className="text-sm font-medium text-sky-800">
              {education.organization}
            </p>
            <h3>{education.degree}</h3>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-stone-600">
              {education.description}
            </p>
          </div>
          <div className="education-meta">
            <span>{education.period}</span>
          </div>
          <ul>
            {education.details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="content-section">
        <h2 className="section-title">{copy.experiences.projectsTitle}</h2>
        <div className="project-showcase">
          {copy.experiences.projects.map((project, index) => (
            <article
              key={project.title}
              id={project.title.toLowerCase() === "datamaster" ? "datamaster" : undefined}
              className="project-feature"
            >
              <div className="project-index">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-3">
                  <h3>{project.title}</h3>
                  <span className="project-status">{project.status}</span>
                </div>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-stone-600">
                  {project.description}
                </p>
                <div className="project-pipeline" aria-label={`${project.title} workflow`}>
                  {workflow.map((step, stepIndex) => (
                    <span key={step.label} className="workflow-step" tabIndex={0}>
                      <span>{step.label}</span>
                      <small>{step.detail}</small>
                      {stepIndex < workflow.length - 1 ? (
                        <b aria-hidden="true">→</b>
                      ) : null}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm">
                  {project.links.map((link) => (
                    <ExternalLink key={link.label} link={link} />
                  ))}
                </div>
              </div>
              <time>{project.period}</time>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section">
        <h2 className="section-title">{copy.experiences.workTitle}</h2>
        <ExperienceTimeline experiences={copy.experiences.work} />
      </section>
    </div>
  );
}
