// ---default config react -------------------
// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
//--------------------------------------------

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
// https://vitejs.dev/blog/announcing-vite4.html#vitejs-plugin-react-swc-new
// import react from '@vitejs/plugin-react';
// import { ViteAliases } from 'vite-aliases';

const openUrl = 'http://localhost:8000';
const {
  HOST: host = 'localhost', // localhost for preview in development
  PORT = 8000,
  // FORCE_HTTPS = false,
} = process.env;

export default defineConfig({
  server: {
    host,
    port: +PORT,
    open: openUrl, // Automatically Open browser window on startup
  },
  // run client from  build folder to preview the build
  preview: {
    host,
    port: +PORT,
    // https: !!FORCE_HTTPS,
    open: host === 'localhost' ? openUrl : false, // auto open browser window on startup in development, in production dont do it.
  },
  build: {
    outDir: 'build',
  },
  plugins: [
    // ViteAliases({
    //   dir: 'src', // Relative path to the project directory
    //   prefix: '@', // Prefix symbol for the aliases
    //   deep: false, // Allow searching for subdirectories
    //   useConfig: true, // Generates paths in IDE config file for Typescript: set `useTypescript` true
    //   useTypescript: true, // Will generate Paths in tsconfig, used in combination with `useConfig`
    // }),
    react(),
  ],
});
