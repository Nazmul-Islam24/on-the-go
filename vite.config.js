import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // 👈 এটি দিলে GitHub (on-the-go) এবং Netlify দুটোতেই কাজ করবে
})