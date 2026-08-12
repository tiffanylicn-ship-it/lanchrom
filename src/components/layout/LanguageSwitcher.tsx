"use client";

import { useEffect, useState } from "react";

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

const LANGUAGES: { code: LanguageCode; label: string; name: string }[] = [
  { code: "en", label: "EN", name: "English" },
  { code: "de", label: "DE", name: "Deutsch" },
  { code: "fr", label: "FR", name: "Français" },
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

  const changeLanguage = (language: LanguageCode) => {
    setActiveLanguage(language);
    persistLanguage(language);
    window.location.reload();
  };

  return (
    <div className="notranslate flex items-center gap-1" translate="no" aria-label="Language">
      <span className="mr-1 hidden text-[10px] font-bold uppercase tracking-[0.12em] text-[#71817C] sm:inline">
        Language
      </span>
      <div className="flex rounded-md border border-[#BFD2CA] bg-white/75 p-0.5">
        {LANGUAGES.map((language) => (
          <button
            key={language.code}
            type="button"
            onClick={() => changeLanguage(language.code)}
            aria-label={`Switch to ${language.name}`}
            aria-pressed={activeLanguage === language.code}
            className={`rounded px-2 py-1 text-[10px] font-bold transition-colors ${
              activeLanguage === language.code
                ? "bg-[#0A514C] text-white"
                : "text-[#4E6760] hover:bg-[#E8F2EE] hover:text-[#0A514C]"
            }`}
          >
            {language.label}
          </button>
        ))}
      </div>
      <div id="google_translate_element" className="google-translate-mount" aria-hidden="true" />
    </div>
  );
}
