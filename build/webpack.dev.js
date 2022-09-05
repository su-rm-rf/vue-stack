const path = require('path')

const { merge } = require('webpack-merge')

const common = require('./webpack.common')

module.exports = env => {
  const dev_config = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
      port: 8099,
      historyApiFallback: true,
      static: {
        // directory: '',
        // publicPath: '/dist/'
      }
    },
    // cache: {
    //   type: 'filesystem',
    //   cacheDirectory: path.resolve(__dirname, '.temp_cache')
    // },
    // optimization: {
    //   minimize: true
    // }
  }

  return merge(common(env), dev_config)
}