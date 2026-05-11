"use client";

import { useEffect, useRef, useState } from "react";

function isCJK(char: string): boolean {
  const code = char.codePointAt(0);
  return code !== undefined && (
    (code >= 0x4e00 && code <= 0x9fff) ||
    (code >= 0x3400 && code <= 0x4dbf) ||
    (code >= 0x3000 && code <= 0x303f) ||
    (code >= 0xff00 && code <= 0xffef)
  );
}

export function TypeReveal({ text, className }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [visible, setVisible] = useState(false);
  const [revealed, setRevealed] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry && entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    if (revealed >= text.length) return;

    const hasCJK = [...text].some(isCJK);
    const charsPerTick = hasCJK ? 1 : 2;
    const intervalMs = hasCJK ? 30 : 20;

    const timer = setTimeout(() => {
      setRevealed((c) => Math.min(c + charsPerTick, text.length));
    }, intervalMs);

    return () => clearTimeout(timer);
  }, [visible, revealed, text]);

  const chars = [...text];

  return (
    <p ref={ref} className={className} aria-label={text}>
      {chars.map((char, i) => (
        <span
          key={i}
          style={{
            opacity: i < revealed ? 1 : 0,
            transition: "opacity 0.05s ease",
          }}
        >
          {char === " " ? " " : char}
        </span>
      ))}
    </p>
  );
}
