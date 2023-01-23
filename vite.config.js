/// <reference types="vitest" />
import react from '@vitejs/plugin-react'
import CopyPlugin from 'copy-webpack-plugin'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './test/setup.js',
    clearMocks: true,
  },

  server: {
    proxy: {
      '/api': {
        target: 'https://elfco-secret-santa.herokuapp.com',
        changeOrigin: true,
      },
    },
  },
})
