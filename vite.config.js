import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  server: {
    host: true,
    port: 3000,
    allowedHosts: ['.ngrok-free.app'],
  },
  extend: {
    animation: {
      'spin-slow': 'spin 8s linear infinite',
    },
    
  },
})