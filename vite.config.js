import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    nodePolyfills(),
    legacy({
      targets: ['defaults', 'IE >= 10'],
      additionalLegacyPolyfills: ['whatwg-fetch', 'regenerator-runtime/runtime', 'core-js/modules/es.promise.js'],
      polyfills: ['es.array.iterator', 'es/map', 'es/set', 'es/promise', 'es/array', 'es/function', 'es/math', 'es/object', 'es/symbol']
    })
  ],
  base: './'
})
