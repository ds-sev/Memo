import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    react(),
    legacy({
      additionalLegacyPolyfills: ['whatwg-fetch', 'regenerator-runtime/runtime'],
      polyfills: ["es.array.iterator"],
      targets: ['defaults', 'ie >= 10']
    })
  ]
})
