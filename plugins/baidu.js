export default ({ app }) => {
  app.router.beforeEach((to, from, next) => {
      next();
      if (process.client) {
        var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?7ed4a3b42c2fa13187605c235dd0bc50";
          var s = document.getElementsByTagName("script")[0]; 
          s.parentNode.insertBefore(hm, s);
        })()
      }
  })
}