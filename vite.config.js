import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    react(),
    legacy({
      // polyfills: ['es/map', 'es/set'],
      additionalLegacyPolyfills: ['whatwg-fetch', 'regenerator-runtime/runtime'],
      polyfills: ["es.array.iterator"],
      targets: ['defaults', 'IE >= 11']
    })



    // legacy({
    //   targets: ['defaults', 'ie >= 10'],
    //   additionalLegacyPolyfills: ['whatwg-fetch', 'regenerator-runtime/runtime', 'core-js/modules/es.promise.js']
    // })
    // legacy({
    //   targets: ['defaults', 'IE >= 10'],
    //   additionalLegacyPolyfills: ['whatwg-fetch', 'regenerator-runtime/runtime', 'core-js/modules/es.promise.js'],
    //   polyfills: ['es.array.iterator', 'es/map', 'es/set', 'es/promise', 'es/array', 'es/function', 'es/math', 'es/object', 'es/symbol']
    // })
  ]
})
