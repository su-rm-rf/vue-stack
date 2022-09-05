const { merge } = require('webpack-merge')
const common = require('./webpack.common')

const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

module.exports = env => {
  const prod_config = {
    mode: 'production',
    plugins: [],
    optimization: {
      minimizer: [
        // `...`,
        new CssMinimizerPlugin()
      ],
      splitChunks: {

      }
    }
  }

  if (env.analyzer) {
    prod_config.plugins.push( new BundleAnalyzerPlugin() )
  }

  return merge(common(env), prod_config)
}