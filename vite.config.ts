import path from 'path'

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { VitePluginFonts } from 'vite-plugin-fonts'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets')
    }
  },
  plugins: [
    react(),
    VitePluginFonts({
      google: {
        families: [{ name: 'Inter', styles: 'wght@400;500' }]
      }
    })
  ]
})
