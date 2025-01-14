export default defineNuxtConfig({
  // Konfiguracja Runtime
  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE_URL || "http://127.0.0.1:8000/api",
    },
  },

  // Globalne style
  css: [
    "@/assets/css/tailwind.css", // ścieżka do pliku CSS
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  // Konfiguracja aplikacji
  // app: {
  //   head: {
  //     title: "Moja Aplikacja",
  //     meta: [
  //       { charset: "utf-8" },
  //       { name: "viewport", content: "width=device-width, initial-scale=1" },
  //     ],
  //     link: [
  //       {
  //         rel: "stylesheet",
  //         href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css",
  //       },
  //     ],
  //   },
  // },

  // Google Fonts
  googleFonts: {
    families: {
      Roboto: [400, 700],
      "Open+Sans": [400, 600],
    },
    display: "swap",
  },

  // Moduły
  modules: [
    "@nuxtjs/google-fonts", // Google Fonts
  ],

  // Nitro Proxy (zamiast @nuxtjs/proxy)
  nitro: {
    devProxy: {
      "/api/": {
        target: "http://127.0.0.1:8000", // Adres backendu Laravel
        changeOrigin: true,
        prependPath: true,
      },
    },
  },

  compatibilityDate: "2025-01-04",
});
