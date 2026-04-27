import { appEnv, codestralMissingEnvKeys } from "@/lib/env";

export const CODESTRAL_CHAT_URL = appEnv.codestral.chatEndpoint;

export const hasCodestralConfig = codestralMissingEnvKeys.length === 0;

export function getCodestralHeaders() {
  if (!hasCodestralConfig) {
    throw new Error(
      `Missing AI .env values: ${codestralMissingEnvKeys.join(", ")}`,
    );
  }

  return {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${appEnv.codestral.apiKey}`,
  };
}

export function explainCodestralError(status: number) {
  if (status === 401) return "Invalid Codestral API key (401) — check VITE_CODESTRAL_API_KEY";
  if (status === 429) return "Rate limit hit — wait a moment and retry (429)";
  if (status === 422) return "Bad request to AI (422)";
  if (status === 504) return "AI server timeout — try a shorter / simpler prompt (504)";
  if (status === 502 || status === 503) return `AI service unavailable (${status}) — try again`;
  return `AI error ${status}`;
}

if (!hasCodestralConfig) {
  console.error(
    `[Matrix AI] Missing AI .env values: ${codestralMissingEnvKeys.join(", ")}. ` +
      "Codestral calls will fail until these VITE_ variables are set and Vite is restarted.",
  );
}