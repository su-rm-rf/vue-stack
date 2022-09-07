const path = require('path')

const { merge } = require('webpack-merge')
const common = require('./webpack.common')

module.exports = env => {
  const dev_config = {
    mode: 'development',
    devtool: 'inline-source-map',
    // cache: {
    //   type: 'filesystem',
    //   cacheDirectory: path.resolve(__dirname, '.temp_cache')
    // },
    devServer: {
      port: 9900,
      historyApiFallback: {
        rewrites: [
          {
            from: /./, to: common(env).output.publicPath
          }
        ]
      }, 
      // 仅供调试生产环境的bug
      // static: {
      //   directory: path.join(__dirname, '../dist')
      // },
      proxy: {

      }
    },
  }

  return merge(common(env), dev_config)
}