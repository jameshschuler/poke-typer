import vue from "@vitejs/plugin-vue";
import path from "path";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import WindiCSS from "vite-plugin-windicss";

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/app.scss";`,
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [
    vue(),
    WindiCSS(),
    VitePWA({
      injectRegister: "auto",
      registerType: "autoUpdate",
      workbox: {
        clientsClaim: true,
        skipWaiting: true,
      },
      devOptions: {
        enabled: true,
      },
      base: "/",
      srcDir: "src",
      includeAssets: ["assets/pwa/*.png"],
      manifest: {
        name: "PokéTyper",
        short_name: "PokéTyper",
        start_url: "/",
        description:
          "Simple web app that displays the effectiveness of various Pokémon types compared to other types.",
        theme_color: "#ffffff",
        icons: [
          {
            src: "poketyper-192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "poketyper-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "poketyper-512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    }),
  ],
});
