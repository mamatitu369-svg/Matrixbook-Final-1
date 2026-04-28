type RuntimeEnvKey =
  | "VITE_FIREBASE_API_KEY"
  | "VITE_FIREBASE_AUTH_DOMAIN"
  | "VITE_FIREBASE_PROJECT_ID"
  | "VITE_FIREBASE_STORAGE_BUCKET"
  | "VITE_FIREBASE_MESSAGING_SENDER_ID"
  | "VITE_FIREBASE_APP_ID"
  | "VITE_FIREBASE_MEASUREMENT_ID"
  | "VITE_CODESTRAL_API_KEY"
  | "VITE_CODESTRAL_CHAT_ENDPOINT"
  | "VITE_CODESTRAL_FIM_ENDPOINT"
  | "VITE_SAMBANOVA_API_KEY"
  | "VITE_SAMBANOVA_CHAT_ENDPOINT"
  | "VITE_SAMBANOVA_MODEL";

const readEnv = (key: RuntimeEnvKey, fallback = "") => {
  const value = import.meta.env[key];
  return typeof value === "string" && value.trim() ? value.trim() : fallback;
};

export const appEnv = {
  firebase: {
    apiKey: readEnv("VITE_FIREBASE_API_KEY"),
    authDomain: readEnv("VITE_FIREBASE_AUTH_DOMAIN"),
    projectId: readEnv("VITE_FIREBASE_PROJECT_ID"),
    storageBucket: readEnv("VITE_FIREBASE_STORAGE_BUCKET"),
    messagingSenderId: readEnv("VITE_FIREBASE_MESSAGING_SENDER_ID"),
    appId: readEnv("VITE_FIREBASE_APP_ID"),
    measurementId: readEnv("VITE_FIREBASE_MEASUREMENT_ID"),
  },
  codestral: {
    apiKey: readEnv("VITE_CODESTRAL_API_KEY"),
    chatEndpoint: readEnv(
      "VITE_CODESTRAL_CHAT_ENDPOINT",
      "https://codestral.mistral.ai/v1/chat/completions",
    ),
    fimEndpoint: readEnv(
      "VITE_CODESTRAL_FIM_ENDPOINT",
      "https://codestral.mistral.ai/v1/fim/completions",
    ),
  },
  sambanova: {
    apiKey: readEnv("VITE_SAMBANOVA_API_KEY"),
    chatEndpoint: readEnv(
      "VITE_SAMBANOVA_CHAT_ENDPOINT",
      "https://api.sambanova.ai/v1/chat/completions",
    ),
    model: readEnv("VITE_SAMBANOVA_MODEL", "gemma-3-12b-it"),
  },
} as const;

export const firebaseMissingEnvKeys = [
  ["VITE_FIREBASE_API_KEY", appEnv.firebase.apiKey],
  ["VITE_FIREBASE_AUTH_DOMAIN", appEnv.firebase.authDomain],
  ["VITE_FIREBASE_PROJECT_ID", appEnv.firebase.projectId],
  ["VITE_FIREBASE_STORAGE_BUCKET", appEnv.firebase.storageBucket],
  ["VITE_FIREBASE_MESSAGING_SENDER_ID", appEnv.firebase.messagingSenderId],
  ["VITE_FIREBASE_APP_ID", appEnv.firebase.appId],
].flatMap(([key, value]) => (value ? [] : [key]));

export const codestralMissingEnvKeys = [
  ["VITE_CODESTRAL_API_KEY", appEnv.codestral.apiKey],
  ["VITE_CODESTRAL_CHAT_ENDPOINT", appEnv.codestral.chatEndpoint],
].flatMap(([key, value]) => (value ? [] : [key]));

export const sambanovaMissingEnvKeys = [
  ["VITE_SAMBANOVA_API_KEY", appEnv.sambanova.apiKey],
  ["VITE_SAMBANOVA_CHAT_ENDPOINT", appEnv.sambanova.chatEndpoint],
  ["VITE_SAMBANOVA_MODEL", appEnv.sambanova.model],
].flatMap(([key, value]) => (value ? [] : [key]));

export const isFirebaseConfigured = firebaseMissingEnvKeys.length === 0;
export const isCodestralConfigured = codestralMissingEnvKeys.length === 0;
export const isSambaNovaConfigured = sambanovaMissingEnvKeys.length === 0;