import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  site: "https://www.datangyuan.cn",
  integrations: [tailwind({ configFile: "./tailwind.config.mjs" }),vue({jsx: true, reactivityTransform: true,appEntrypoint: '/src/main.js',})],
});
