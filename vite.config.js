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
  server: {
    // 👇 allow Railway's generated host domain
    allowedHosts: [
      "openai-realtime-console-production-9e2b.up.railway.app",
      // you can add others here if needed later
    ],
    port: process.env.PORT || 3000,
  },
  build: {
    rollupOptions: {
      external: ["/:routes.js", "/:create.jsx", "/:context.js"],
    },
  },
};
