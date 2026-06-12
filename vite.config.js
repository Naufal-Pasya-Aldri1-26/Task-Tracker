import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/naufal-pasya-aldri1-26/",  // <-- ADD THIS EXACT LINE
})
