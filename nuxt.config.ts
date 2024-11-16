// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@pinia/nuxt'],
   pinia: {
    storesDirs: ['./stores/**'],
  },
  /*modules: [
    '@vueuse/nuxt',
	'@pinia/nuxt',
  ],
  pinia: {
    storesDirs: ['./stores/**', './custom-folder/stores/**'],
  },*/
  
  devtools: { enabled: true },
  
  //css: ['~/assets/scss/global.scss'],
})
