// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://vicente-espinha.github.io',
  vite: {
    // Cast: @tailwindcss/vite is typed against a different Vite version than Astro's.
    plugins: [/** @type {any} */ (tailwindcss())],
  },
});
