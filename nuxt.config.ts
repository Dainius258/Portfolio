// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/i18n",
    "@nuxt/icon",
    '@nuxtjs/color-mode',
    "nuxt-marquee",
    "@nuxt/image",
    "nuxt-swiper",
    '@vee-validate/nuxt'
  ],
  runtimeConfig: {
    public: {
      emailJsPublicKey: process.env.EMAILJS_PUBLIC_KEY,
      emailJsServiceId: process.env.EMAILJS_SERVICE_ID,
      emailJsContactMeTemplateId: process.env.EMAILJS_CONTACTME_TEMPLATE_ID,
    },
  },
  i18n: {
    lazy: true,
    langDir: "locales",
    strategy: "prefix_except_default",
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