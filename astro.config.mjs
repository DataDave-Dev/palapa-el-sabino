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
      // En producción con ASTRO_DB_REMOTE_URL configurado, usa Turso
      // En desarrollo sin esa variable, usa SQLite local
      ...(process.env.ASTRO_DB_REMOTE_URL && {
        remote: process.env.ASTRO_DB_REMOTE_URL
      })
    })
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
