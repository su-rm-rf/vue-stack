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
      historyApiFallback: true,
      proxy: {
        '/api': {
          
        }
      }
    },
  }

  return merge(common(env), dev_config)
}