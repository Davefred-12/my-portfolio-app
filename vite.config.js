// frontend/vite.config.js
export default {
  server: {
    proxy: {
      '/api': 'http://localhost:5000', // Proxy backend API calls to Express
    },
  },
};
