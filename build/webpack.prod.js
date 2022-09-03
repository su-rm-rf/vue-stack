const { merge } = require('webpack-merge')
const common = require('./webpack.common')

module.exports = env => {
  const prod_config = {
    mode: 'production',
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        }
      ]
    },
  }

  return merge(common(env), prod_config)
}