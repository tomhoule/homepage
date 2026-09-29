import { defineConfig } from "cf/config";

export default defineConfig({
  worker: {
    name: "tomhoule-com",
    compatibilityDate: "2026-09-29",
    assets: {
      htmlHandling: "auto-trailing-slash",
      notFoundHandling: "404-page",
    },
  },
});
