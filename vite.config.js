/// <reference types="vitest" />
import react from '@vitejs/plugin-react'
import CopyPlugin from 'copy-webpack-plugin'
import dotenv from 'dotenv'
import { defineConfig } from 'vite'
dotenv.config()
console.log('🚀 ~ dotenv.config()', dotenv.config())

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
