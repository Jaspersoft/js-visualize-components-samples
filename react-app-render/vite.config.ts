/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */
import react from "@vitejs/plugin-react";
import {defineConfig} from "vite";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import "@jaspersoft/jv-ui-components/dist/jv-ui.css";`
            }
        }
    },
    build: {
        rollupOptions: {
            input: path.resolve(__dirname, './src/index.tsx'),
            output: {
                dir: path.resolve("../assets/js/build", './'), // Output directory
                entryFileNames: 'react-app-render-build.js', // Output filename pattern
            },
        },
    },
});
