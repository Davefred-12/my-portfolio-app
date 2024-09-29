import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@assets': '/src/assets', // Alias for importing assets from src folder
    },
  },
  server: {
    open: true, // Automatically opens the app in the browser
  },
});
