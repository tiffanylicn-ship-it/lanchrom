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

// Waits briefly for the reCAPTCHA script to finish loading. The script tag
// is injected with strategy="afterInteractive", so on a slow connection it
// may genuinely not be attached to `window` yet by the time the visitor
// submits a fast form. Polling here avoids treating "not loaded yet" the
// same as "will never load".
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
