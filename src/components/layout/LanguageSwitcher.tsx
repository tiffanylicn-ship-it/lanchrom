"use client";

import { useEffect, useRef, useState } from "react";

type LanguageCode = "en" | "de" | "fr";

type GoogleTranslateElement = {
  new (
    options: {
      pageLanguage: string;
      includedLanguages: string;
      autoDisplay: boolean;
    },
    elementId: string,
  ): unknown;
};

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: {
      translate?: {
        TranslateElement?: GoogleTranslateElement;
      };
    };
  }
}

const LANGUAGES: { code: LanguageCode; name: string }[] = [
  { code: "en", name: "English" },
  { code: "de", name: "Deutsch" },
  { code: "fr", name: "Français" },
];

function readActiveLanguage(): LanguageCode {
  if (typeof document === "undefined") return "en";

  const cookie = document.cookie
    .split("; ")
    .find((item) => item.startsWith("googtrans="))
    ?.split("=")[1];
  const locale = cookie?.split("/").pop();

  return locale === "de" || locale === "fr" ? locale : "en";
}

function persistLanguage(language: LanguageCode) {
  document.documentElement.lang = language;

  if (language === "en") {
    document.cookie =
      "googtrans=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=Lax";
    document.cookie =
      "googtrans=; path=/; domain=.lanchrom.com; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=Lax";
  } else {
    const value = `/en/${language}`;
    const maxAge = 60 * 60 * 24 * 365;
    document.cookie = `googtrans=${value}; path=/; max-age=${maxAge}; SameSite=Lax`;
    document.cookie = `googtrans=${value}; path=/; domain=.lanchrom.com; max-age=${maxAge}; SameSite=Lax`;
  }
}

export default function LanguageSwitcher() {
  const [activeLanguage, setActiveLanguage] = useState<LanguageCode>("en");
  const [isOpen, setIsOpen] = useState(false);
  const switcherRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentLanguage = readActiveLanguage();
    setActiveLanguage(currentLanguage);
    document.documentElement.lang = currentLanguage;

    const initialize = () => {
      const TranslateElement = window.google?.translate?.TranslateElement;
      if (!TranslateElement) return;

      const mount = document.getElementById("google_translate_element");
      if (mount && mount.childElementCount === 0) {
        new TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,de,fr",
            autoDisplay: false,
          },
          "google_translate_element",
        );
      }
    };

    window.googleTranslateElementInit = initialize;

    if (window.google?.translate?.TranslateElement) {
      initialize();
      return;
    }

    if (!document.getElementById("google-translate-script")) {
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  useEffect(() => {
    const closeOnOutsideClick = (event: MouseEvent) => {
      if (!switcherRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.removeEventListener("mousedown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  const changeLanguage = (language: LanguageCode) => {
    setIsOpen(false);
    setActiveLanguage(language);
    persistLanguage(language);
    window.location.reload();
  };

  const currentLanguage =
    LANGUAGES.find((language) => language.code === activeLanguage) ?? LANGUAGES[0];

  return (
    <div ref={switcherRef} className="notranslate relative" translate="no">
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-label="Select language"
        className="flex h-8 min-w-[78px] items-center justify-center rounded-md border border-[#BFD2CA] bg-white/85 px-2.5 text-xs font-medium text-[#284D46] outline-none transition-colors hover:border-[#0E918C] focus:border-[#0A514C] focus:ring-2 focus:ring-[#0E918C]/20"
      >
        {currentLanguage.name}
      </button>

      {isOpen && (
        <div
          role="menu"
          aria-label="Languages"
          className="pointer-events-auto absolute right-0 top-full z-[220] mt-1 w-36 overflow-hidden rounded-md border border-[#BFD2CA] bg-white py-1 shadow-[0_12px_30px_rgba(20,60,52,0.16)]"
        >
          {LANGUAGES.map((language) => (
            <button
              key={language.code}
              type="button"
              role="menuitemradio"
              aria-checked={activeLanguage === language.code}
              onClick={() => changeLanguage(language.code)}
              className={`flex w-full cursor-pointer items-center px-3 py-2 text-left text-xs transition-colors hover:bg-[#EAF4EF] ${
                activeLanguage === language.code
                  ? "bg-[#F1F8F5] text-[#0A514C]"
                  : "text-[#405C55]"
              }`}
            >
              <span>{language.name}</span>
            </button>
          ))}
        </div>
      )}
      <div id="google_translate_element" className="google-translate-mount" aria-hidden="true" />
    </div>
  );
}
