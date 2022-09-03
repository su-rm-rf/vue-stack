const { merge } = require('webpack-merge')
const common = require('./webpack.common')

module.exports = env => {
  const dev_config = {
    mode: 'development',
    devtool: 'inline-source-map',
    module: {
      rules: [
        
      ]
    },
    devServer: {
      port: 9900
    }
  }

  return merge(common(env), dev_config)
}