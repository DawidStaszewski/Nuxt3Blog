export default {
  // Wersja Nuxt
  compatibilityDate: "2024-04-03",

  // Sekcja devtools w przypadku używania narzędzi deweloperskich
  devtools: { enabled: true },

  // Style globalne
  css: ["~/assets/scss/custom.scss"],

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

  // Opcje konfiguracji webpack (domyślnie dla Nuxt 2.x)
  build: {
    loaders: {
      sass: {
        additionalData: '@use "@/assets/scss/custom" as *;',
      },
    },
  },
};
