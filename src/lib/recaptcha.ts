type ReCaptchaClient = {
  ready: (callback: () => void) => void;
  execute: (siteKey: string, options: { action: string }) => Promise<string>;
};

declare global {
  interface Window {
    grecaptcha?: ReCaptchaClient;
  }
}

const SCRIPT_WAIT_TIMEOUT_MS = 4000;
const SCRIPT_WAIT_INTERVAL_MS = 150;
const SCRIPT_ID = "google-recaptcha";

let recaptchaScriptPromise: Promise<void> | null = null;

function loadRecaptchaScript(siteKey: string): Promise<void> {
  if (window.grecaptcha) return Promise.resolve();
  if (recaptchaScriptPromise) return recaptchaScriptPromise;

  recaptchaScriptPromise = new Promise(resolve => {
    const existing = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;
    if (existing) {
      waitForGrecaptcha(SCRIPT_WAIT_TIMEOUT_MS).then(() => resolve());
      return;
    }

    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.async = true;
    script.src = `https://www.google.com/recaptcha/api.js?render=${encodeURIComponent(siteKey)}`;
    script.addEventListener("load", () => resolve(), { once: true });
    script.addEventListener("error", () => resolve(), { once: true });
    document.head.appendChild(script);
  });

  return recaptchaScriptPromise;
}

// Waits briefly for the reCAPTCHA client to become available after its script
// has loaded. Polling avoids treating a slow initialization as a hard failure.
function waitForGrecaptcha(timeoutMs: number): Promise<ReCaptchaClient | null> {
  return new Promise(resolve => {
    if (window.grecaptcha) {
      resolve(window.grecaptcha);
      return;
    }
    const start = Date.now();
    const interval = setInterval(() => {
      if (window.grecaptcha) {
        clearInterval(interval);
        resolve(window.grecaptcha);
      } else if (Date.now() - start > timeoutMs) {
        clearInterval(interval);
        resolve(null);
      }
    }, SCRIPT_WAIT_INTERVAL_MS);
  });
}

// Returns a reCAPTCHA token when possible, but never blocks form submission.
// reCAPTCHA is an anti-spam layer, not a hard requirement for the request to
// be valid — the API routes already treat a missing/empty token as "skip
// verification" server-side. If the site key isn't configured, the script
// failed to load, or it's blocked by an ad blocker / corporate firewall
// (all common for lab-equipment B2B buyers on locked-down networks), we
// resolve with an empty string instead of rejecting so the surrounding form
// can still submit.
export async function getRecaptchaToken(action: string): Promise<string> {
  try {
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
    if (!siteKey) return "";

    await loadRecaptchaScript(siteKey);
    const client = await waitForGrecaptcha(SCRIPT_WAIT_TIMEOUT_MS);
    if (!client) return "";

    return await new Promise<string>(resolve => {
      client.ready(() => {
        client
          .execute(siteKey, { action })
          .then(resolve)
          .catch(() => resolve(""));
      });
    });
  } catch {
    return "";
  }
}

export {};
