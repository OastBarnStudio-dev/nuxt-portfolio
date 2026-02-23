import colors from 'vuetify/es5/util/colors'

export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: 'Fernando Sobron',
    title: 'Fernando Sobron Heathfield Studio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'description',
        hid: 'description',
        content:
          'Award winning admen and documentary film maker, PhD. I am a media professional now running an advertising practice after decades working for ad agencies and TV productionsI write and shoot video, produce graphics and illustrations from the heart of East Sussex'
      },
      {
        name: 'keywords',
        content:
          'Advertising Creative Director, Unscripted TV, Video, Producer, Producer Director, Director, Illustration, Character design, Documentary scholar, PhD'
      },
      {
        name: 'og:title',
        content: 'Fernando Sobron at the Barn Studio, Heathfield'
      },
      {
        name: 'og:description',
        content:
          'Experienced admen and film maker running a video and graphic studio production.'
      },
      { name: 'og:type', content: 'website' },
      { name: 'og:url', content: 'https://kousikaganesan.github.io/' },
      {
        name: 'og:image',
        content:
          'https://res.cloudinary.com/dxp5v7a5h/image/upload/v1771860056/fs_at_barn.svg'
      },
      {
        name: 'twitter:card',
        content: 'summary'
      },
      {
        name: 'twitter:site',
        content: 'Fernando Sobron'
      },
      {
        name: 'twitter:title',
        content: 'Fernando_Sobron'
      },
      {
        name: 'twitter:description',
        content: 'Advertising creative, Producer Director, Illustrator.'
      },
      {
        name: 'twitter:image',
        content:
          'https://res.cloudinary.com/dxp5v7a5h/image/upload/v1771860056/fs_at_barn.svg'
      },
      {
        name: 'twitter:image:alt',
        content: 'Fernando Sobron Logo'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon?v=2', href: '/favicon.ico' }],
    script: [
      {
        // src: 'drift.min.js'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loadingIndicator: {
    name: 'rectangle-bounce',
    color: '#02f3e6',
    background: '#131313'
  },

  /*
   ** Global CSS
   */
  css: ['aos/dist/aos.css', '~/assets/font/biko.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/typed', ssr: false },
    { src: '~/plugins/aos', ssr: false },
    { src: '~/plugins/vue-waypoint', ssr: false },
    { src: '~/plugins/carousal', ssr: false }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify',
    '@aceforth/nuxt-optimized-images'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@neneos/nuxt-animate.css',
    'vue-scrollto/nuxt'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/scss/main.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
          background: '#232020'
        }
      }
    }
  },
  pwa: {
    manifest: {
      name: 'Fernando Sobron'
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
