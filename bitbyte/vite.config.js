import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import requireTransform from 'vite-plugin-require-transform';

export default defineConfig({
  plugins: [
    react(),
    requireTransform({
    fileRegex: /^(?!.*react).*\.js$/,    }),
  ],
  optimizeDeps: {
    include: ['@popperjs/core', 'bootstrap']
  },
  build: {
    outDir: 'dist', // Ensure this matches your deployment folder
    sourcemap: false,
  },
});
