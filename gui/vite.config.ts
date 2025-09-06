import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss()],
  build: {
    outDir: path.resolve(__dirname, '../public'), // 👈 Output outside gui
    emptyOutDir: false,                           // Clears the folder before build
  }
})
