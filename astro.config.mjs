import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://zelvanor-studio.github.io',
  base: '/COULEURS-ET-PINCEAUX',
  vite: {
    plugins: [tailwindcss()],
  },
});