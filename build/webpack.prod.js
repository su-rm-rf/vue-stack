const { merge } = require('webpack-merge')
const common = require('./webpack.common')

const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = env => {
  _common = common(env)
  const prod_config = {
    mode: 'production',
    plugins: [
      new CleanWebpackPlugin()
    ],
    optimization: {
      minimizer: [
        new CssMinimizerPlugin()
      ]
    }
  }

  if (env && env.analyzer) {
    prod_config.plugins.push( new BundleAnalyzerPlugin() )
  }

  return merge(_common, prod_config)
}