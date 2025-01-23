import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
      interval: 100,
    },
    proxy: {
      '/user': process.env.VITE_API_BASE_URL,
    },
  },
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
});
