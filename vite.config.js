import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ["**/*.md"],
  homepage: "https://coding-corps.github.io/CodingCompass/",
  base: '/CodingCompass/',
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // Example: splitting vendor libraries
            if (id.includes('react')) {
              return 'vendor-react';
            }
            if (id.includes('lodash')) {
              return 'vendor-lodash';
            }
            // You can add more custom logic to split other large libraries
          }
        }
      }
    },
    chunkSizeWarningLimit: 1000 // Set the limit in KB as needed
  }
})
