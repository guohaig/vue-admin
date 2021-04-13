// const { on } = require("events");
// const path = require("path");
module.exports = {
  //基本路径
  //   publicPath: process.env.NODE_ENV === "production" ? "" : "/",
  //输出文件目录
  //   outputDir: process.env.NODE_ENV === "production" ? "dist" : "devdist",
  //eslint-loader 是否在保存的时候检查
  lintOnSave: true,
  /**
   * webpack配置,see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
   */
  //   chainWebpack: config => {},
  //   configureWebpack: config => {
  //     // config.resolve = {//配置解析别名
  //     //     extendsion: ['.js', '.json', '.vue'],
  //     //     alias: {
  //     //         '@': path.resolve(_dirname, './src'),
  //     //         'public': path.resolve(_dirname, './public'),
  //     //         'components': path.resolve(_dirname, './src/components'),
  //     //         'common': path.resolve(_dirname, './src/common'),
  //     //         'api': path.resolve(_dirname, './src/api'),
  //     //         'views': path.resolve(_dirname, './src/views'),
  //     //         'data': path.resolve(_dirname, './srcdata')
  //     //     }
  //     // }
  //   },
  //生产环境是否生成 sourceMap文件
  //   productionSourceMap: false,
  //css相关配置
  //   css: {
  //     //是否配置css分离插件 ExtractTextPlugin
  //     extract: true,
  //     //开启CSS soure maps?
  //     sourceMap: false,
  //     //css 预设器配置项
  //     loaderOptions: {
  //       sass: {
  //         prependData: '@import "./src/styles/main.scss";'
  //       }
  //     },
  //     //启用CSS modules for all css / pre-processor file.
  //     requireModuleExtension: false
  //   },
  // use thread-loader for babel & TS in production build
  //enabled by default if the machine has more than 1 cores
  parallel: require("os").cpus().length > 1,
  /**
   * PWA 插件相关配置，see https://github.com.vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
   */
  //   pwa: {},
  // webpack-dev-server 相关配置
  /*
    devServer: {
        open: false, //编译完成是否打开网页
        host: '0.0.0.0', //指定使用地址，默认localhost, 0.0.0.0代表可以被外界访问
        port: 8080, //访问端口
        https: false, //编译失败时刷新页面
        hot: true, //开启热加载
        hotOnly: false,
        proxy: null, //设置代理
        overlay: { //全屏模式下是否显示脚本错误
            warnings: true,
            errors: true
        },
        before: app => {},
    },
    */
  devServer: {
    proxy: {
      "/ajax": {
        target: "https://m.maoyan.com",
        changeOrigin: true
      }
    }
  }
  /**
   * 第三方插件配置
   */
  //   pluginOptions: {}
};
