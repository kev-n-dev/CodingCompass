import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
 
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  chunkSizeWarningLimit: 3000, // Set the limit in KB

  assetsInclude: ["**/*.md"],
  homepage: "https://coding-corps.github.io/CodingCompass/",

  base: '/CodingCompass/',
})
