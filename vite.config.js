import { join, dirname, resolve } from "path";
import { fileURLToPath } from "url";
import react from "@vitejs/plugin-react";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Automatically detect any /:*.js or /:*.jsx files in client/src
const aliasFiles = fs
  .readdirSync(resolve(__dirname, "client/src"))
  .filter((f) => f.startsWith(":") && (f.endsWith(".js") || f.endsWith(".jsx")));

const aliases = aliasFiles.reduce((acc, file) => {
  acc[`/${file}`] = resolve(__dirname, `client/src/${file}`);
  return acc;
}, {});

export default {
  root: join(__dirname, "client"),
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "client/src"),
      ...aliases, // 👈 dynamically add all /:*.js(x) files
    },
  },
  build: {
    rollupOptions: {
      external: [],
    },
  },
};
