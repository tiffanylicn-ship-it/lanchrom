type ReCaptchaClient = {
  ready: (callback: () => void) => void;
  execute: (siteKey: string, options: { action: string }) => Promise<string>;
};

declare global {
  interface Window {
    grecaptcha?: ReCaptchaClient;
  }
}

export function getRecaptchaToken(action: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

    if (!siteKey) {
      reject(new Error("Missing NEXT_PUBLIC_RECAPTCHA_SITE_KEY"));
      return;
    }

    if (!window.grecaptcha) {
      reject(new Error("Google reCAPTCHA is not loaded"));
      return;
    }

    window.grecaptcha.ready(() => {
      window.grecaptcha?.execute(siteKey, { action }).then(resolve).catch(reject);
    });
  });
}

export {};
