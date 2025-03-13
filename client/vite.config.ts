import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,           // 👈 Change to port 3000 for React frontend
    host: '127.0.0.1',
    open: true,           // automatically opens browser
    proxy: {
      '/api': {
        target: 'http://localhost:3001',  // backend API runs on port 3001
        secure: false,
        changeOrigin: true,
      },
    },
  },
});
