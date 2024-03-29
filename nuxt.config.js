const pkg = require('./package')
module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: "郭炯韦个人博客 - 一个简约的个人博客",
    script: [
      { src: '/rem.js', type: 'text/javascript', charset: 'utf-8'}
    ],
    __dangerouslyDisableSanitizers: ['script'],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'keywords', hid: 'keywords', content: '个人博客，简约博客，郭炯韦个人博客，郭炯韦,郭炯韦' },
      { name: 'description', hid: 'description', content: '郭炯韦的个人博客，将与广大前端爱好共同分享最新技术和技术中遇到的问题' },
      { name: 'author', hid: 'author', content: "郭炯韦" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#c1866a' },

  /*
  ** Global CSS
  */
  css: ['~/assets/css/index.css'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/custom-components.js',
    '~/plugins/filters.js',
    '~/plugins/axios.js',
    { src: '~/plugins/baidu.js', ssr: false }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
  ],

  hooks: {
    'vue-renderer:ssr:context'(context) {
      const routePath = JSON.stringify(context.nuxt.routePath)
      context.nuxt = { serverRendered: true, routePath }
    }
  },
  telemetry: false,
  /*
  ** Build configuration
  */
  build: {
    extractCSS: true,
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

    }
  }
}
