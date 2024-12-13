export default {
  // Wersja Nuxt
  compatibilityDate: "2024-04-03",

  // Sekcja devtools w przypadku używania narzędzi deweloperskich
  devtools: { enabled: true },

  // Style globalne
  css: ["~/assets/scss/custom.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  // Konfiguracja meta i head dla aplikacji
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css",
        },
      ],
    },
  },

  // Opcje konfiguracji dla Google Fonts
  googleFonts: {
    families: {
      Roboto: [400, 700],
      "Open+Sans": [400, 600],
    },
    display: "swap", // Opcjonalnie możesz ustawić metodę wyświetlania czcionek
  },

  modules: ["@nuxtjs/google-fonts", "@nuxtjs/tailwindcss"],
};