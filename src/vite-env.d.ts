/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly BASE_URL: string;
  readonly DEV: boolean;
  readonly MODE: string;
  readonly PROD: boolean;
  readonly SSR: boolean;
  readonly VITE_FIREBASE_API_KEY: string;
  readonly VITE_FIREBASE_AUTH_DOMAIN: string;
  readonly VITE_FIREBASE_PROJECT_ID: string;
  readonly VITE_FIREBASE_STORAGE_BUCKET: string;
  readonly VITE_FIREBASE_MESSAGING_SENDER_ID: string;
  readonly VITE_FIREBASE_APP_ID: string;
  readonly VITE_FIREBASE_MEASUREMENT_ID: string;
  readonly VITE_CODESTRAL_API_KEY: string;
  readonly VITE_CODESTRAL_CHAT_ENDPOINT: string;
  readonly VITE_CODESTRAL_FIM_ENDPOINT: string;
  readonly VITE_SAMBANOVA_API_KEY: string;
  readonly VITE_SAMBANOVA_CHAT_ENDPOINT: string;
  readonly VITE_SAMBANOVA_MODEL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

