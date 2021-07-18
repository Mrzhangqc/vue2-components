module.exports = {
  publicPath: '/', // 根域上下文目录
  outputDir: 'dist', // 构建输出目录
  assetsDir: 'assets', // 静态资源目录 (js, css, img, fonts)
  lintOnSave: true, // 是否开启eslint保存检测，有效值：ture | false | 'error'
  configureWebpack:{
    resolve:{
      alias:{
        'assets':'@/assets',
        'components':'@/components',
        'pages':'@/pages'
      }
    }
  },
  devServer: {
    open: true,
    host: '0.0.0.0',
    port: 8080,
    https: false,
    hotOnly: false,
    // proxy: {
    //   '/api': {
    //     target: 'http://47.100.47.3/',
    //     changeOrigin: true,
    //   },
    // },
  }
}