const pkg = require('./package')
const rem = '!function(e){var t,n=document,i=window,o=n.documentElement;function u(){var t=o.getBoundingClientRect().width/e*100;o.style.fontSize=t+"px"}u(),i.addEventListener("resize",function(){clearTimeout(t),t=setTimeout(u,300)},!1),i.addEventListener("pageshow",function(e){e.persisted&&(clearTimeout(t),t=setTimeout(u,300))},!1)}(750);';
module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: "郭炯韦个人博客 - 一个简约的个人博客",
    script: [
      { innerHTML: rem, type: 'text/javascript', charset: 'utf-8'}
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
    '~/plugins/axios.js'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
  ],

  /*
  ** Build configuration
  */
  build: {
    extractCSS: { allChunks: true },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  }
}
