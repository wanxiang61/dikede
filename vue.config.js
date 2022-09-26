const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    devServer: {
      port: 8888,
      host: 'localhost',
      open: true,
      // 该项目中代理跨域的配置
      proxy: {
        // 当我们的本地的请求 有/api的时候，就会代理我们的请求地址向另外一个服务器发出请求
        '/api': {
          target: 'http://likede2-admin.itheima.net/likede', // 跨域请求的地址
          changeOrigin: true // 只有这个值为true的情况下 才表示开启跨域
        }
      }
    }
  }
})
