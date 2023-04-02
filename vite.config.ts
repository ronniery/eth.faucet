import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { env, argv } from 'process';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 6002
  }
})
