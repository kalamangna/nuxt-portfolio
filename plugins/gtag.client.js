import Vue from "vue"
import VueGtag from "vue-gtag"

Vue.use(VueGtag, {
  config: { id: "G-7TD0NB820M" },
  enabled: process.env.NODE_ENV === "production" ? true : false,
})
