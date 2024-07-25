// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primevue/themes/aura';

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/i18n",
    "@nuxt/icon",
    '@nuxtjs/color-mode',
    "nuxt-marquee",
    '@primevue/nuxt-module',
    "@nuxt/image"
  ],
  primevue: {
    options: {
        theme: {
            preset: Aura
        }
    }
},
  i18n: {
    lazy: true,
    langDir: "locales",
    strategy: "prefix",
    locales: [
      {
        code: "en-US",
        name: "English",
        iso: "en-US",
        file: "en.json"
      },
      {
        code: "lt-LT",
        name: "Lietuvių",
        iso: "lt-LT",
        file: "lt.json"
      },
    ],
    colorMode: {
      preference: 'light',
      fallback: 'light',
      classPrefix: '',
    },
    defaultLocale: "en-US",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
    },
  },
})