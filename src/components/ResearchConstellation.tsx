"use client";

import { useMemo, useState } from "react";

import { useLanguage } from "./LanguageProvider";

export function ResearchConstellation() {
  const { copy } = useLanguage();
  const isChinese = copy.home.researchTitle === "研究兴趣";
  const descriptions = useMemo(
    () =>
      isChinese
        ? [
            "关注规划、工具使用、记忆和评估如何形成可迭代的 agentic workflow。",
            "关注自动化实验、数据科学任务和面向机器学习的迭代改进。",
            "关注多模态大模型系统如何支持更自然、更有用的人机交互。",
          ]
        : [
            "Planning, tool use, memory, and evaluation as parts of agentic workflows.",
            "Automated experimentation and iterative improvement for data science tasks.",
            "Multimodal LLM systems for more natural and useful human-AI interaction.",
          ],
    [isChinese],
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const activeInterest = copy.home.researchInterests[activeIndex] ?? copy.home.researchInterests[0];

  return (
    <div className="research-constellation">
      <div className="research-orbit" aria-hidden="true">
        <span className="research-core">{isChinese ? "研究" : "Focus"}</span>
        {copy.home.researchInterests.map((interest, index) => (
          <span
            key={interest}
            className={
              index === activeIndex
                ? "research-orbit-node research-orbit-node-active"
                : "research-orbit-node"
            }
          >
            {String(index + 1).padStart(2, "0")}
          </span>
        ))}
      </div>

      <div className="research-field">
        {copy.home.researchInterests.map((interest, index) => (
          <button
            key={interest}
            type="button"
            className={index === activeIndex ? "research-topic research-topic-active" : "research-topic"}
            onClick={() => setActiveIndex(index)}
            onFocus={() => setActiveIndex(index)}
            onMouseEnter={() => setActiveIndex(index)}
            aria-pressed={index === activeIndex}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            {interest}
          </button>
        ))}
      </div>

      <p className="research-caption">
        <strong>{activeInterest}</strong>
        {descriptions[activeIndex]}
      </p>
    </div>
  );
}
