const title = "Abd Dzuljalali Wal Ikram - Frontend Web Developer"
const description = `I am Abed, a Frontend Web Developer based in Sinjai, Indonesia.`
const url = "kalamangna.dev"

export default {
  dev: process.env.NODE_ENV !== "production",

  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: {
      lang: "en",
    },
    title: title,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: description,
      },
      { name: "format-detection", content: "telephone=no" },

      // Facebook Meta Tags
      {
        property: "og:title",
        content: title,
      },
      {
        property: "og:description",
        content: description,
      },
      {
        property: "og:url",
        content: `https://${url}`,
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:image",
        content: `https://${url}/meta.png`,
      },

      // Twitter Meta Tags
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        property: "twitter:domain",
        content: url,
      },
      {
        property: "twitter:url",
        content: `https://${url}`,
      },
      {
        name: "twitter:title",
        content: title,
      },
      {
        name: "twitter:description",
        content: description,
      },
      {
        name: "twitter:image",
        content: `https://${url}/meta.png`,
      },
      {
        name: "twitter:creator",
        content: "@kalamangna",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["~/plugins/aos.client.js"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    "nuxt-vite",
    "@nuxtjs/svg",
    "@nuxt/image",
    "@nuxtjs/tailwindcss",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/sitemap", "vue-scrollto/nuxt", "@nuxtjs/google-gtag"],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // Sitemap configuration
  sitemap: {
    hostname: "https://kalamangna.dev",
  },

  // GA configuration
  "google-gtag": {
    id: "G-HN9K173VQK",
    config: {
      send_page_view: false,
    },
    debug: false,
  },
}
