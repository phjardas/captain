import react from "@vitejs/plugin-react-swc";
import { defineConfig, splitVendorChunkPlugin } from "vite";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    splitVendorChunkPlugin(),
    react(),
    VitePWA({
      injectRegister: "script-defer",
      devOptions: {
        enabled: true,
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,png,jpg,jpeg,svg,webp,woff2}"],
        globIgnores: ["**/node_modules/**/*", "sw.js"],
        maximumFileSizeToCacheInBytes: 1024 * 1024 * 10,
      },
      manifest: {
        id: "/",
        name: "Sex Diary",
        short_name: "Sex Diary",
        lang: "en",
        start_url: ".",
        display: "standalone",
        theme_color: "#9c27b0",
        background_color: "#f5f5f5",
        icons: [
          {
            src: "logo.svg",
            type: "image/svg+xml",
            sizes: "150x150",
            purpose: "maskable",
          },
        ],
      },
    }),
  ],
});
