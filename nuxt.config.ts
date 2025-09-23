// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      script: [],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://unpkg.com/d3-milestones/build/d3-milestones.css', // External stylesheet URL
        }
      ],
    },
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/image', '@nuxt/ui', 'nuxt-mongoose', 'nuxt-mongoose'],
  css: ['~/assets/css/main.css'],
  mongoose: {
    uri: process.env.MONGODB_URI,
    options: {
      dbName: process.env.MONGODB_DBNAME
    },
    modelsDir: 'models',
    devtools: process.env.NODE_ENV === 'development',
  }
})