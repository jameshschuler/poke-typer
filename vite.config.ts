import vue from '@vitejs/plugin-vue';
import path from 'path';
import { defineConfig } from 'vite';
import WindiCSS from 'vite-plugin-windicss';

export default defineConfig( {
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/app.scss";`
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve( __dirname, './src' ),
    },
  },
  plugins: [ vue(), WindiCSS() ]
} )
