module.exports = {
  lintOnSave: false,      
//   eslint词码解析规范
  productionSourceMap: false,    
// 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
  devServer: {
      // 跨域请求：PROXY代理
      proxy: {
          '/': {
              target: 'https://news-at.zhihu.com/api/4', 
              changeOrigin: true
          }
      }
  }
};