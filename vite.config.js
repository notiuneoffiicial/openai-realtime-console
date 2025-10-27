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
      "@": resolve(__dirname, "client/src"),           // allows imports like "@/components/..."
      "/:routes.js": resolve(__dirname, "client/src/routes.js"), // fixes your build error
    },
  },
  build: {
    rollupOptions: {
      external: [], // ensures Rollup doesn't skip internal imports
    },
  },
};
