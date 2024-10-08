/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import libCss from "vite-plugin-libcss";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), libCss()],
  build: {
    rollupOptions: {
      input: path.resolve(__dirname, './src/index.tsx'),
      output: {
        dir: path.resolve("../assets/js/build", './'), // Output directory
        entryFileNames: 'react-app-render-build.js', // Output filename pattern
      }},
  },
});
