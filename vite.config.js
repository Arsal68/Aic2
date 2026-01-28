import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: '/Aic/',  // ← ADD THIS LINE - most important!
  
  // Optional: Better build optimization
  build: {
    outDir: 'dist',
    // Fix chunk size warnings
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          // Add other large libraries if needed
        }
      }
    },
    chunkSizeWarningLimit: 1000,  // Increase warning limit
  },
  
  // Optional: For better development
  server: {
    port: 3000,
    open: true
  }
})