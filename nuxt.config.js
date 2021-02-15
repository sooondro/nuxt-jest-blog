export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Chessgram",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~assets/styles/main.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~plugins/date-filter.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    "bootstrap-vue/nuxt",
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios"
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL:
      process.env.BASE_URL ||
      "https://nuxt-jest-blog-default-rtdb.europe-west1.firebasedatabase.app/"
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  
  transition: {
    name: "fade",
    mode: "out-in"
  },

  env: {
    fbAPIKey: 'AIzaSyDnz0nNrVc4HaphRrF3zhH14pmd7tiiTmY'
  }
};
