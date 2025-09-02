import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  base: '/portfolio-sacha/', // Exemple : '/portfolio-sacha/'
  build: {
    outDir: 'dist',
  },
});
