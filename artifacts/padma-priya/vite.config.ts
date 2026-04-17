import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const port = Number(process.env.PORT);
const basePath = process.env.BASE_PATH || '/';

export default defineConfig({
  base: basePath,
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  server: {
    port: port || 5173,
    host: '0.0.0.0',
    allowedHosts: true,
  },
  preview: {
    port: port || 4173,
    host: '0.0.0.0',
    allowedHosts: true,
  },
});
