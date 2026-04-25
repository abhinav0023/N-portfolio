import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
// Use base: '/<repo-name>/' for GitHub Pages project sites; './' works for custom domain or preview.
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
})
