import { join, dirname, resolve } from "path";
import { fileURLToPath } from "url";
import react from "@vitejs/plugin-react";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
  root: join(__dirname, "client"),
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "client"),
    },
  },
  build: {
    rollupOptions: {
      // Exclude virtual modules from SSR build
      external: ["/:routes.js", "/:create.jsx", "/:context.js"],
    },
  },
};
