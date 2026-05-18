// astro.config.mjs
// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap"; 

// https://astro.build/config
export default defineConfig({
  
  site: 'https://arcotalents.com.br',
  output: 'static',
  prefetch: {
    prefetchAll: true
  },
  image: {
    // Enable caching and optimization
    domains: ['arcotalents.com.br'],
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: {
        limitInputPixels: false,
      },
    },
  },

  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
         include: ['aos']
       },
    build: {
      // Minify CSS and JS
      minify: 'esbuild',
      cssCodeSplit: true,
    }
  },


  integrations: [sitemap()], 
});