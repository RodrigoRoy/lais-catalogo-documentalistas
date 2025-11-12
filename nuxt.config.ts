// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/image', '@nuxt/ui', 'nuxt-mongoose', 'nuxt-mongoose', '@nuxt/fonts', '@nuxtjs/color-mode'],

  app: {
    baseURL: "/mujeresdocumentalistas",
    head: {
      title: 'Catálogo Mujeres Documentalistas en México 1970-1985',
      link: [
        { rel: 'icon', href: '/favicon.ico' }
      ]
    }
  },

  // Part of NuxtUI config: https://ui.nuxt.com/getting-started/installation/nuxt#import-tailwind-css-and-nuxt-ui-in-your-css
  css: ['~/assets/css/main.css'],

  // Nuxt Color Mode config: https://color-mode.nuxtjs.org/usage/configuration
  colorMode: {
    preference: 'dark',
    fallback: 'dark'
  },

  // Nuxt Mongoose config: https://docs.arashsheyda.me/nuxt-mongoose/getting-started/configuration
  mongoose: {
    uri: process.env.MONGODB_URI,
    options: {
      dbName: process.env.MONGODB_DBNAME
    },
    modelsDir: 'models',
    devtools: process.env.NODE_ENV === 'development',
  },

  // Nuxt Fonts config: https://fonts.nuxt.com/get-started/configuration
  fonts: {
    defaults: {
      weights: ['100 900'],
      styles: ['normal', 'italic']
    }
  },
  
  // NuxtImage config: https://image.nuxt.com/get-started/configuration
  image: {
    quality: 80,
    format: ['webp', 'jpg'],
  },
})