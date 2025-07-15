import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio-Website-v2/',
  resolve: {
    alias: [
      { find: '@', replacement: '/src' }
    ]
  }
})
