import { defineConfig } from 'astro/config'
import vue from '@astrojs/vue'
import UnoCSS from 'unocss/astro'
import vuetify from 'vite-plugin-vuetify'

// https://astro.build/config
export default defineConfig({
  integrations: [
    vue(),
    UnoCSS({
      injectReset: true,
    }),
  ],
  vite: {
    plugins: [vuetify()],
  },
})
