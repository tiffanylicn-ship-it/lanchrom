// ============================================================
// LANCHROM™ — Google reCAPTCHA v3 Verification
// ============================================================

const RECAPTCHA_VERIFY_URL = "https://www.google.com/recaptcha/api/siteverify";
const MIN_SCORE = 0.5; // 0.0 (bot) to 1.0 (human)

interface RecaptchaResponse {
  success: boolean;
  score: number;
  action: string;
  challenge_ts: string;
  hostname: string;
  "error-codes"?: string[];
}

export async function verifyRecaptcha(token: string): Promise<{
  valid: boolean;
  score: number;
  error?: string;
}> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  if (!secretKey) {
    console.warn("reCAPTCHA secret key not configured — skipping verification in dev");
    return { valid: true, score: 1.0 };
  }

  try {
    const response = await fetch(RECAPTCHA_VERIFY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: secretKey,
        response: token,
      }),
    });

    const data: RecaptchaResponse = await response.json();

    if (!data.success) {
      return {
        valid: false,
        score: 0,
        error: `reCAPTCHA failed: ${data["error-codes"]?.join(", ")}`,
      };
    }

    if (data.score < MIN_SCORE) {
      return {
        valid: false,
        score: data.score,
        error: `Low reCAPTCHA score: ${data.score} (min: ${MIN_SCORE})`,
      };
    }

    return { valid: true, score: data.score };
  } catch (error) {
    console.error("reCAPTCHA verification error:", error);
    return { valid: false, score: 0, error: "reCAPTCHA verification failed" };
  }
}
