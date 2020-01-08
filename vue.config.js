const autoprefixer = require('autoprefixer')
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

const pxtorem = require('postcss-pxtorem')
module.exports = {
  publicPath: process.env === 'production' ? '' : '/',
  outputDir: 'dist',
  assetsDir: 'static',
  filenameHashing: true,
  lintOnSave: true,
  runtimeCompiler: false,
  transpileDependencies: [/\/node_modules\/vue-echarts\//, /\/node_modules\/resize-detector\//],
  productionSourceMap: false,
  chainWebpack: (config) => {
    /* config.module
       .rule('pug')
       .test(/\.pug$/)
       .use('pug-html-loader')
       .loader('pug-html-loader')
       .end() */
    /* 配置文件路径别名 */
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@assets', resolve('src/assets'))
  },
  devServer: {
    historyApiFallback: true
  },
  // 使用变量之后，sass 文件不会直接生效，至少在 vue 文件 里面是访问不到的。 需要在 vue.config.js 里面增加如下配置
  css: {
    sourceMap: true,
    loaderOptions: {
      sass: {
        prependData: `
        @import "@/assets/styles/variables.scss";
        `
      },
      postcss: {
        plugins: [
          autoprefixer(),
          /* postcss配置
          * 技巧：不转换成rem
          * px检测区分大小写，也就是说Px/PX/pX不会被转换，可以用这个方式避免转换成rem
          *  */
          pxtorem({
            rootValue: 37.5, // html节点预设的font-size大小,若设计稿尺寸为375则设置37.5;若为750则设置为75
            propList: ['*'], // 指定转换成rem的属性, * 表示全部转换
            unitPrecision: 5, // 将rem精确到小数点后5位
            selectorBlackList: [], // str/reg 指定不转换的选择器, str时包含字段即匹配
            replace: true,
            mediaQuery: false, // 媒体查询内的px是否转换
            minPixelValue: 0 // 小于指定数值的px不转换
          })
        ]
      }
    }
  }
}
