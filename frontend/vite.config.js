import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";

export default defineConfig({
  plugins: [react()],
  publicDir: "public",
  build: {
    outDir: resolve(import.meta.dirname, "../src"),
    emptyOutDir: false,
    copyPublicDir: false,
    rollupOptions: {
      output: {
        entryFileNames: "assets/login-app.js",
        chunkFileNames: "assets/login-[name].js",
        assetFileNames: ({ names }) => names?.some((name) => name.endsWith(".css"))
          ? "assets/login-app.css"
          : "assets/[name]-[hash][extname]",
      },
    },
  },
});
