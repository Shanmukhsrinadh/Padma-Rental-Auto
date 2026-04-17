import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const port = Number(process.env.PORT) || 5173;
const basePath = process.env.BASE_PATH || '/';

// Absolute paths resolved from this config file's location
const workspaceRoot = new URL('../../', import.meta.url).pathname.replace(/\/$/, '');
const artifactDir = new URL('.', import.meta.url).pathname.replace(/\/$/, '');
const artifactNodeModules = artifactDir + '/node_modules';

export default defineConfig({
  base: basePath,
  root: workspaceRoot,
  plugins: [react()],
  resolve: {
    modules: [artifactNodeModules, 'node_modules'],
  },
  build: {
    outDir: artifactDir + '/dist/public',
    emptyOutDir: true,
  },
  server: {
    port,
    host: '0.0.0.0',
    allowedHosts: true,
    fs: {
      allow: [workspaceRoot, artifactNodeModules],
    },
  },
  preview: {
    port,
    host: '0.0.0.0',
    allowedHosts: true,
  },
});
