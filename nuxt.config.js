
export default {
  mode: 'universal',
  router: {
    middleware: 'delay'
  },
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Quicksand:400,500,700&display=swap'}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { 
    color: '#0F0F0F',
    height: '3px'
  },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/app.css',
    // SCSS file in the project
    '@/assets/css/sass/app.sass'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {
      src: "~/plugins/locomotiveScroll.js",
      mode: "client"
    },
    {
      src: '~/plugins/vue-pdf.js', 
      ssr: false
    },
    {
      src: '~/plugins/gsap.js', 
      ssr: false
    }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      config.output.globalObject = 'this'
      config.module.rules.push(
        {
          test: /\.pdf$/,
          loader: 'url-loader'
        }
      )
    }
  }
}
