module.exports = {
  // 选项...
  publicPath:"./",//打包时加上
  devServer: {
    https: false,
    proxy: {
      '/chat': {
        target: 'http://openapi.tuling123.com/openapi',
        ws: true,
        changOrigin: true,
        pathRewrite: {
          '^/chat': ''
        }
      },
      '/siZhi': {
        target: 'https://api.ownthink.com/',
        ws: true,
        changOrigin: true,
        pathRewrite: {
          '^/siZhi': ''
        }
      }
    }
  }
}