import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    legacy({
      targets: ['IE >= 10'],
      additionalLegacyPolyfills: ['whatwg-fetch']
    })
    // legacy({
    //   targets: ['ie >= 11'],
    //   additionalLegacyPolyfills: ['regenerator-runtime/runtime', 'core-js/modules/es.promise.js'],
    //   polyfills: ['es.array.iterator']
    // })
  ],
  base: './',
})
