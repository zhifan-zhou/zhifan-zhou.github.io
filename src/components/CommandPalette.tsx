"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { useRouter } from "next/navigation";

import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

import { useLanguage } from "./LanguageProvider";
import { useTheme } from "./ThemeProvider";

type PaletteAction = {
  id: string;
  label: string;
  description: string;
  keywords: string;
  run: () => void;
};

export function CommandPalette() {
  const router = useRouter();
  const { copy } = useLanguage();
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement | null>(null);

  function closePalette() {
    setIsOpen(false);
    setQuery("");
    setActiveIndex(0);
  }

  async function copyEmail() {
    await navigator.clipboard.writeText(profile.email);
    setStatus(copy.commandPalette.copiedEmail);
    window.setTimeout(() => setStatus(""), 1800);
  }

  const actions: PaletteAction[] = [
    {
      id: "home",
      label: copy.commandPalette.actions.home,
      description: copy.nav.home,
      keywords: "home homepage index",
      run: () => router.push("/"),
    },
    {
      id: "about",
      label: copy.commandPalette.actions.about,
      description: copy.home.aboutTitle,
      keywords: "about profile bio",
      run: () => router.push("/#about"),
    },
    {
      id: "research",
      label: copy.commandPalette.actions.research,
      description: copy.home.researchTitle,
      keywords: "research interests agents multimodal",
      run: () => router.push("/#research"),
    },
    {
      id: "news",
      label: copy.commandPalette.actions.news,
      description: copy.home.newsTitle,
      keywords: "news updates",
      run: () => router.push("/#news"),
    },
    {
      id: "publications",
      label: copy.commandPalette.actions.publications,
      description: copy.nav.publications,
      keywords: "publication paper under review",
      run: () => router.push("/publications"),
    },
    {
      id: "datamaster",
      label: copy.commandPalette.actions.datamaster,
      description: "DataMaster",
      keywords: "datamaster project mle bench agents",
      run: () => router.push("/experiences#datamaster"),
    },
    {
      id: "contact",
      label: copy.commandPalette.actions.contact,
      description: copy.nav.contact,
      keywords: "contact email map",
      run: () => router.push("/contact"),
    },
    {
      id: "github",
      label: copy.commandPalette.actions.github,
      description: profile.github,
      keywords: "github code profile",
      run: () => window.open(profile.github, "_blank", "noreferrer"),
    },
    {
      id: "copy-email",
      label: copy.commandPalette.actions.copyEmail,
      description: profile.email,
      keywords: "copy email mail contact",
      run: () => void copyEmail(),
    },
    {
      id: "toggle-theme",
      label: copy.commandPalette.actions.toggleTheme,
      description: theme === "dark" ? copy.theme.light : copy.theme.dark,
      keywords: "theme dark light mode",
      run: () => setTheme(theme === "dark" ? "light" : "dark"),
    },
  ];

  const visibleActions = actions.filter((action) => {
    const value = `${action.label} ${action.description} ${action.keywords}`.toLowerCase();
    return value.includes(query.toLowerCase().trim());
  });

  useEffect(() => {
    function handleKeyDown(event: globalThis.KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setIsOpen(true);
        setActiveIndex(0);
        window.setTimeout(() => inputRef.current?.focus(), 0);
      }

      if (event.key === "Escape") {
        closePalette();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  function runAction(action: PaletteAction) {
    action.run();
    if (action.id !== "copy-email") {
      closePalette();
    }
  }

  function handleInputKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((current) =>
        visibleActions.length ? (current + 1) % visibleActions.length : 0,
      );
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((current) =>
        visibleActions.length
          ? (current - 1 + visibleActions.length) % visibleActions.length
          : 0,
      );
    }

    if (event.key === "Enter" && visibleActions[activeIndex]) {
      runAction(visibleActions[activeIndex]);
    }
  }

  return (
    <>
      <button
        type="button"
        className="command-trigger"
        aria-label={copy.commandPalette.title}
        onClick={() => {
          setIsOpen(true);
          setActiveIndex(0);
          window.setTimeout(() => inputRef.current?.focus(), 0);
        }}
      >
        <span>⌘K</span>
      </button>

      {isOpen ? (
        <div className="command-overlay" role="presentation" onMouseDown={closePalette}>
          <div
            className="command-dialog"
            role="dialog"
            aria-modal="true"
            aria-label={copy.commandPalette.title}
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="command-header">
              <div>
                <p>{copy.commandPalette.title}</p>
                <small>{copy.commandPalette.hint}</small>
              </div>
              <button type="button" onClick={closePalette} aria-label="Close command palette">
                Esc
              </button>
            </div>

            <input
              ref={inputRef}
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
                setActiveIndex(0);
              }}
              onKeyDown={handleInputKeyDown}
              placeholder={copy.commandPalette.placeholder}
              className="command-input"
              aria-activedescendant={
                visibleActions[activeIndex]
                  ? `command-action-${visibleActions[activeIndex].id}`
                  : undefined
              }
            />

            <div className="command-list" role="listbox">
              {visibleActions.length ? (
                visibleActions.map((action, index) => (
                  <button
                    key={action.id}
                    id={`command-action-${action.id}`}
                    type="button"
                    role="option"
                    aria-selected={activeIndex === index}
                    className={cn(
                      "command-item",
                      activeIndex === index && "command-item-active",
                    )}
                    onClick={() => runAction(action)}
                    onMouseEnter={() => setActiveIndex(index)}
                  >
                    <span>{action.label}</span>
                    <small>{action.description}</small>
                  </button>
                ))
              ) : (
                <p className="command-empty">{copy.commandPalette.noResults}</p>
              )}
            </div>

            {status ? <p className="command-status">{status}</p> : null}
          </div>
        </div>
      ) : null}
    </>
  );
}
