const pkg = require('./package')
const rem = '(function(win,doc){var docEl=doc.documentElement,resizeEvt="orientationchange" in window?"orientationchange":"resize",refresh=function(){var w=docEl.clientWidth,dpr=win.devicePixelRatio||1;docEl.style.fontSize=100*(w/750)+"px";function setBodyFontSize(){if(doc.body){doc.body.style.fontSize="16px"}else{doc.addEventListener("DOMContentLoaded",refresh)}}setBodyFontSize()};refresh();if(!doc.addEventListener){return}win.addEventListener(resizeEvt,refresh,false)})(window,document);';
module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
        { innerHTML: rem, type: 'text/javascript', charset: 'utf-8'}
      ],
      __dangerouslyDisableSanitizers: ['script']
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
