import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxtjs/i18n"],
  css: ["~/assets/css/index.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    defaultLocale: "uz",
    locales: [
      { code: "uz", language: "uz-UZ" },
      { code: "ru", language: "ru-RU" },
    ],
  },
});
