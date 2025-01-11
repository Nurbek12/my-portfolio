// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@vueuse/nuxt'],
  compatibilityDate: "2024-11-01",
  routeRules: {
    '/': {
      ssr: false
    }
  },
  css: ["~/assets/main.css"],
  devtools: { enabled: false },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    BOT_TOKEN: process.env.TELEGRAM_BOT_KEY,
    BOT_USER: process.env.TELEGRAM_USER_ID,
  }
});
