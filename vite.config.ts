import { cloudflare } from "@cloudflare/vite-plugin";
import { defineConfig } from "vite";

export default defineConfig({
  publicDir: process.env.SITE_OUTPUT_DIR ?? "public",
  plugins: [cloudflare()],
});
