import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
      // Deep imports of Chakra's default tokens, see src/components/ui/provider.tsx
      { find: /^chakra-theme\//, replacement: '/node_modules/@chakra-ui/react/dist/esm/theme/' }
    ]
  }
})
