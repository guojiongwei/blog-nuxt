const Koa = require('koa')
const consola = require('consola')
import conf from './config'
import fs from 'fs'
import https from 'https'
import path from 'path'
import enforceHttps from 'koa-sslify'
import router from './router'
import middleware from './middleware'
import './mongodb'
const { Nuxt, Builder } = require('nuxt')

const app = new Koa()
middleware(app)
router(app)
// app.use(enforceHttps())
// Import and Set Nuxt.js options 
let config = require('../nuxt.config.js')
config.dev = !(app.env === 'production')

async function start() {
  // Instantiate nuxt.js
  const nuxt = new Nuxt(config)
// Configuare https
const httpsOption = {
  key : fs.readFileSync(path.resolve(__dirname,"./ssl/guojiongwei.key")),
  cert: fs.readFileSync(path.resolve(__dirname, "./ssl/guojiongwei.pem"))
}
  // const {
  //   host = process.env.HOST || '0.0.0.0',
  //   port = process.env.PORT || 80
  // } = nuxt.options.server
  const host = '0.0.0.0'
  const port = 80
  // Build in development
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }
  app.use(ctx => {
    ctx.status = 200
    ctx.respond = false // Bypass Koa's built-in response handling
    ctx.req.ctx = ctx // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
    nuxt.render(ctx.req, ctx.res)
  })
  app.listen(port, host)
  // app.listen(httpsOption,port, host)
  // https.createServer(httpsOption, app.callback()).listen(port, host);
  
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}

start()
