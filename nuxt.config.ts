// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/image',
    '@nuxt/ui',
    'nuxt-mongoose',
    'nuxt-mongoose',
    '@nuxt/fonts'
  ],
  css: ['~/assets/css/main.css'],
  mongoose: {
    uri: process.env.MONGODB_URI,
    options: {
      dbName: process.env.MONGODB_DBNAME
    },
    modelsDir: 'models',
    devtools: process.env.NODE_ENV === 'development',
  },
  fonts: {
    defaults: {
      weights: ['100 900'],
      styles: ['normal', 'italic']
    }
  },
})