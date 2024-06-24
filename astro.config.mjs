import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://www.datangyuan.cn",
  integrations: [
    tailwind({ configFile: "./tailwind.config.mjs" }),
    icon({
      include: {
        tabler: ['*'],
        'flat-color-icons': [
          'template',
          'gallery',
          'approval',
          'document',
          'advertising',
          'currency-exchange',
          'voice-presentation',
          'business-contact',
          'database',
        ],
      },
    }),
    vue({jsx: true, reactivityTransform: true,appEntrypoint: '/src/main.js',})
  ],
});
