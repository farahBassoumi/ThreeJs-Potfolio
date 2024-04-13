import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import WindiCSS from 'vite-plugin-windicss';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), WindiCSS()], 
  // base: '/threejs-potfolio/',
},
console.log('inside vite.config.js')
)
