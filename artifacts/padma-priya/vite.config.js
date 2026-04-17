import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// For GitHub Pages: set base to your repo name, e.g. '/my-repo-name/'
// For local dev: leave as '/'
const base = process.env.GITHUB_PAGES_BASE || '/';

export default defineConfig({
  base,
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  server: {
    port: 5173,
    host: true,
  },
});
