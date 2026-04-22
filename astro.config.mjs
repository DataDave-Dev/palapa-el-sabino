// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import db from '@astrojs/db';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: node({
    mode: 'standalone'
  }),
  integrations: [db()],
  vite: {
    plugins: [tailwindcss()]
  },
  db: {
    // En desarrollo usa SQLite local
    // En producción usa las variables de entorno
    ...(process.env.ASTRO_DATABASE_FILE && {
      dbUrl: process.env.ASTRO_DATABASE_FILE,
      authToken: process.env.ASTRO_DB_AUTH_TOKEN
    })
  }
});
