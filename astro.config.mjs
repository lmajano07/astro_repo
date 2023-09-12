import { defineConfig } from "astro/config";

import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  site: import.meta.env.STRAPI_URL,
  integrations: [solidJs()],
});
