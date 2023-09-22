import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import autoprefixer from 'autoprefixer'
import legacy from '@vitejs/plugin-legacy'
import 'core-js/actual';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    legacy({
      targets: ['ie >= 11'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime', 'core-js/modules/es.promise.js'],
      polyfills: ['es.array.iterator']
    })
  ],
  base: './',
  css: {
    postcss: {
      plugins: [
        autoprefixer({}) // add options if needed
      ]
    }
  }
})
