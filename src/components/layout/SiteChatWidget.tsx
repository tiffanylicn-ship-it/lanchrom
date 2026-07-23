import Script from "next/script";

export default function SiteChatWidget() {
  const enabled = process.env.NEXT_PUBLIC_SITECHAT_ENABLED === "true";
  const widgetUrl = process.env.NEXT_PUBLIC_SITECHAT_WIDGET_URL;
  const projectId = process.env.NEXT_PUBLIC_SITECHAT_PROJECT_ID ?? "lanchrom";
  const apiBaseUrl = process.env.NEXT_PUBLIC_SITECHAT_API_BASE_URL ?? "";

  if (!enabled || !widgetUrl) return null;

  const config = {
    projectId,
    apiBaseUrl,
    brandName: "LANCHROM™",
    welcomeMessage: "Hi, welcome to LANCHROM. Ask about HPLC solvents, LC-MS solvents, OEM packaging, CoA, SDS, samples, or lead time.",
    leadCapture: true,
    handoffEmail: process.env.NEXT_PUBLIC_SITECHAT_HANDOFF_EMAIL ?? "info@lanchrom.com",
  };

  return (
    <>
      <Script
        id="sitechat-config"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `window.SiteChatConfig = ${JSON.stringify(config)};`,
        }}
      />
      <Script id="sitechat-widget" src={widgetUrl} strategy="afterInteractive" />
    </>
  );
}
