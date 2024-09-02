import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import envcompatible from 'vite-plugin-env-compatible'

// https://vitejs.dev/config/

export default defineConfig({

  define: {
    global: 'window'
  },

  server: {
    proxy: {
      '/api': 'https://studynotion-server-opqv.onrender.com',
    },
  },
  envPrefix: 'REACT_APP_',
  plugins: [react()],
})
