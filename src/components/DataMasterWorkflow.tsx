"use client";

import { useMemo, useState } from "react";

type DataMasterWorkflowProps = {
  isChinese?: boolean;
};

export function DataMasterWorkflow({ isChinese = false }: DataMasterWorkflowProps) {
  const steps = useMemo(
    () =>
      isChinese
        ? [
            { label: "规划", detail: "设定实验方向与下一步行动。" },
            { label: "执行", detail: "调用工具并运行数据科学任务。" },
            { label: "评估", detail: "检查结果，判断是否需要调整。" },
            { label: "记忆", detail: "保留对后续实验有用的上下文。" },
            { label: "改进", detail: "把反馈转化为下一轮迭代。" },
          ]
        : [
            { label: "Plan", detail: "Frame the experiment and next action." },
            { label: "Execute", detail: "Use tools to run data science tasks." },
            { label: "Evaluate", detail: "Inspect outputs and decide what changes." },
            { label: "Remember", detail: "Carry useful context into later trials." },
            { label: "Improve", detail: "Turn feedback into the next iteration." },
          ],
    [isChinese],
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStep = steps[activeIndex];

  return (
    <div className="datamaster-flow" aria-label="DataMaster workflow">
      <div className="flow-orbit" aria-hidden="true">
        {steps.map((step, index) => (
          <span
            key={step.label}
            className={index === activeIndex ? "flow-orbit-dot flow-orbit-dot-active" : "flow-orbit-dot"}
          />
        ))}
      </div>

      <div className="flow-steps">
        {steps.map((step, index) => (
          <button
            key={step.label}
            type="button"
            className={index === activeIndex ? "flow-step flow-step-active" : "flow-step"}
            onClick={() => setActiveIndex(index)}
            onFocus={() => setActiveIndex(index)}
            onMouseEnter={() => setActiveIndex(index)}
            aria-pressed={index === activeIndex}
          >
            <span>{step.label}</span>
          </button>
        ))}
      </div>

      <p className="flow-detail">
        <span>{activeStep.label}</span>
        {activeStep.detail}
      </p>
    </div>
  );
}
