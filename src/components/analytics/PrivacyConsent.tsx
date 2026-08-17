"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./PrivacyConsent.module.css";

const CONSENT_KEY = "lanchrom-cookie-consent-v1";
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID ?? "GTM-5NS8F7FH";
const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID ?? "G-0PVLBGM9VN";
const HUBSPOT_PORTAL_ID = "246539586";

type ConsentChoice = "accepted" | "declined";
type GoogleConsentValue = "granted" | "denied";

type AnalyticsWindow = Window & {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
  lanchromAnalyticsLoaded?: boolean;
};

function analyticsWindow() {
  return window as AnalyticsWindow;
}

function getGtag() {
  const target = analyticsWindow();
  target.dataLayer = target.dataLayer ?? [];
  target.gtag = target.gtag ?? function gtag(...args: unknown[]) {
    target.dataLayer?.push(args);
  };
  return target.gtag;
}

function updateGoogleConsent(analyticsStorage: GoogleConsentValue) {
  getGtag()("consent", "update", {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: analyticsStorage,
  });
}

function appendExternalScript(id: string, src: string) {
  if (document.getElementById(id)) return;
  const script = document.createElement("script");
  script.id = id;
  script.async = true;
  script.src = src;
  document.head.appendChild(script);
}

function loadAnalyticsServices() {
  const target = analyticsWindow();
  if (target.lanchromAnalyticsLoaded) return;
  target.lanchromAnalyticsLoaded = true;
  target.dataLayer = target.dataLayer ?? [];

  if (!document.getElementById("google-tag-manager")) {
    target.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
    appendExternalScript(
      "google-tag-manager",
      `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`,
    );
  }

  appendExternalScript(
    "google-analytics",
    `https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`,
  );
  getGtag()("js", new Date());
  getGtag()("config", GA4_ID, { anonymize_ip: true });

  appendExternalScript(
    "hubspot-tracking",
    `https://js.hs-scripts.com/${HUBSPOT_PORTAL_ID}.js`,
  );
}

function clearAnalyticsCookies() {
  document.cookie.split(";").forEach((cookie) => {
    const name = cookie.split("=")[0]?.trim();
    if (
      !name ||
      !["_ga", "_gcl", "_hs", "__hs", "hubspotutk"].some((prefix) =>
        name.startsWith(prefix),
      )
    ) return;
    document.cookie = `${name}=; Max-Age=0; path=/; SameSite=Lax`;
    document.cookie = `${name}=; Max-Age=0; path=/; domain=.lanchrom.com; SameSite=Lax`;
  });
}

export default function PrivacyConsent() {
  const [choice, setChoice] = useState<ConsentChoice | null | undefined>(undefined);
  const [settingsOpen, setSettingsOpen] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(CONSENT_KEY);
    const initialChoice: ConsentChoice | null =
      stored === "accepted" || stored === "declined" ? stored : null;

    setChoice(initialChoice);
    if (initialChoice === "accepted") {
      updateGoogleConsent("granted");
      loadAnalyticsServices();
    } else {
      updateGoogleConsent("denied");
    }
  }, []);

  function saveChoice(nextChoice: ConsentChoice) {
    window.localStorage.setItem(CONSENT_KEY, nextChoice);
    setChoice(nextChoice);
    setSettingsOpen(false);

    if (nextChoice === "accepted") {
      updateGoogleConsent("granted");
      loadAnalyticsServices();
      return;
    }

    updateGoogleConsent("denied");
    clearAnalyticsCookies();
  }

  if (choice === undefined) return null;

  const showPanel = choice === null || settingsOpen;

  return (
    <>
      {showPanel && (
        <section
          className={styles.panel}
          aria-label="Cookie preferences"
          aria-live="polite"
        >
          <div className={styles.copy}>
            <strong>Privacy preferences</strong>
            <p>
              We use optional analytics to understand website performance. Analytics and
              CRM tracking stay off unless you accept. Essential site functions remain
              available either way. Read our <Link href="/privacy">Privacy Policy</Link>.
            </p>
          </div>
          <div className={styles.actions}>
            <button
              type="button"
              className={styles.secondaryButton}
              onClick={() => saveChoice("declined")}
            >
              Essential only
            </button>
            <button
              type="button"
              className={styles.primaryButton}
              onClick={() => saveChoice("accepted")}
            >
              Accept analytics
            </button>
          </div>
        </section>
      )}

      {!showPanel && (
        <button
          type="button"
          className={styles.settingsButton}
          onClick={() => setSettingsOpen(true)}
        >
          Cookie settings
        </button>
      )}
    </>
  );
}
