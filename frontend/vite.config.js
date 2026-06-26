import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/auth/google': {
        target: 'http://localhost:8000',
        secure: false,
      },
      '/auth': {
        target: 'http://localhost:8000',
        secure: false,
      },
      '/api': {
        target: 'http://localhost:8000',
        secure: false,
      },
      '/upload': {
        target: 'http://localhost:8000',
        secure: false,
      },
      '/results': {
        target: 'http://localhost:8000',
        secure: false,
      },
      '/cases': {
        target: 'http://localhost:8000',
        secure: false,
      },
      '/reports': {
        target: 'http://localhost:8000',
        secure: false,
      },
      '/notifications': {
        target: 'http://localhost:8000',
        secure: false,
      },
      '/audit': {
        target: 'http://localhost:8000',
        secure: false,
      },
      '/hexviewer': {
        target: 'http://localhost:8000',
        secure: false,
      },
    }
  }
})