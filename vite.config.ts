import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import path from 'path'

const isTest = process.env.NODE_ENV === 'test'

export default defineConfig({
  plugins: [!isTest && TanStackRouterVite(), react(), tsconfigPaths()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
