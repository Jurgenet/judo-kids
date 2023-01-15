// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  vite: {
    server: {
      open: false,
      watch: {
        usePolling: true,
      }
    },
  },
  app: {
    head: {
      title: 'Детская секция дзюдо',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Детская секция дзюдо, Россия, Курск',
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'россия, курск, детское, дзюдо, секция, russia, kursk, judo, kids, club',
        },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: true,
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Suez+One&display=swap'
        },
        // cyrillic
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=PT+Serif:wght@400;700&display=swap'
        },

      ],
      
    }
  },
  css: [
    'primevue/resources/themes/saga-blue/theme.css',
    'primevue/resources/primevue.css',
    'primeicons/primeicons.css',
    'primeflex/primeflex.css',
    '~/assets/css/main.sass',
  ],
  build: {
    transpile: ['primevue'],
  },
  typescript: {
    strict: true,
    shim: false,
  },
  modules: [],
})
