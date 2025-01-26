import { fileURLToPath } from 'node:url';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  typescript: {
    shim: false
  },
  nitro: {},
  alias: {
    "@": fileURLToPath(new URL('./', import.meta.url)),
  },
  app: {
    head: {
      title: "Barco Soluciones IT",
      htmlAttrs: {
        lang: 'es'
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "keywords",
          name: "keywords",
          content: "Barco Soluciones IT - Desarrollo Web y Soluciones Empresariales",
        },
        {
          hid: "description",
          name: "description",
          content: "Barco Soluciones IT - Agencia de Desarrollo Web y Soluciones Empresariales",
        },
        { name: "format-detection", content: "telephone=no" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap",
        },
      ],
      script: [
        { src: "/js/wow.min.js" },
        { src: "/js/isotope.pkgd.min.js" },
        { src: "/js/pace.min.js" },
        { src: "/js/splitting.min.js" },
        { src: "/js/simpleParallax.min.js" },
      ]
    }
  },
  css: [
    'swiper/css/bundle',
  ],
  webpack: {
    extractCSS: true,
    optimization: {
      splitChunks: {
        layouts: true
      }
    }
  },
  build: {
    transpile: [
      "vue3-count-to",
      "vue3-particles"
    ]
  }
})
