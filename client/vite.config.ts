import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// The client dev server proxies /api requests to the Express backend (port 3001)
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      },
    },
  },
})
