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
  integrations: [
    db({
      // Si hay variables de entorno de Turso, úsalas (producción)
      // Si no, usa SQLite local (desarrollo)
      ...(process.env.ASTRO_DATABASE_FILE && process.env.ASTRO_DB_AUTH_TOKEN && {
        studio: false,
        dbUrl: process.env.ASTRO_DATABASE_FILE,
        authToken: process.env.ASTRO_DB_AUTH_TOKEN
      })
    })
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
