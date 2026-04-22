/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly ASTRO_STUDIO_APP_TOKEN: string;
  readonly JWT_SECRET: string;
  readonly SITE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare namespace App {
  interface Locals {
    user?: {
      userId: number;
      email: string;
      nombre: string;
    };
  }
}
