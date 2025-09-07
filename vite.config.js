import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/react_desafio_hito2_v2/',
  plugins: [react()],
  build: {outDir: 'docs'}
})
