import path from "path";
import bodyParser from "koa-bodyparser";
import staticFiles from "koa-static";
import Rule from "./rule";
import Send from "./send";
import Auth from "./auth";
// import Log from './log'
import Func from "./func";
import history from "koa2-connect-history-api-fallback";
import compress from "koa-compress";
export default app => {
  //缓存拦截器
  app.use(async (ctx, next) => {
    // console.log('https' + ctx.request.href.slice(4))
    // if(ctx.request.protocol == 'http') {
    //     ctx.redirect('https' + ctx.request.href.slice(4))
    //     return
    // }
    // if (ctx.url == '/favicon.ico') return

    await next();
    ctx.status = 200;
    ctx.set("Cache-Control", "must-revalidation");
    if (ctx.fresh) {
      ctx.status = 304;
      return;
    }
  });

  // 日志中间件
  // app.use(Log())

  // 数据返回的封装
  app.use(Send());

  // 方法封装
  app.use(Func());

  //权限中间件
  app.use(Auth());

  //post请求中间件
  app.use(bodyParser());
  // 解析路由history模式
  // app.use(history({rewrites: [{ from: /^\/wap\/.*$/, to: '/index.html' }]}))
  // 解析gzip压缩格式文件
  // app.use(compress({ threshold: 2048 }))
  //静态文件中间件
  // app.use(staticFiles(path.resolve(__dirname, '../../../public/client')));

  // 规则中间件
  Rule({
    app,
    rules: [
      {
        path: path.join(__dirname, "../controller/admin"),
        name: "admin"
      },
      {
        path: path.join(__dirname, "../controller/client"),
        name: "client"
      }
    ]
  });

  // 增加错误的监听处理
  app.on("error", (err, ctx) => {
    if (ctx && !ctx.headerSent && ctx.status < 500) {
      ctx.status = 500;
    }
    if (ctx && ctx.log && ctx.log.error) {
      if (!ctx.state.logged) {
        ctx.log.error(err.stack);
      }
    }
  });
};
