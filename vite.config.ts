/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, './src'),
    }
  },
  test: {
    environment: 'jsdom',
    globals: true,
    coverage: {
      all: true,
      exclude: [
        '**/*{.,-}test.{js,cjs,mjs,ts,tsx,jsx}',
        '**/*{.,-}config.{js,cjs,mjs,ts,tsx,jsx}',
        '**/*.d.ts'
      ],
      reporter: ['text']
    }
    // setupFiles: './tests/setup.js'
  }
})
