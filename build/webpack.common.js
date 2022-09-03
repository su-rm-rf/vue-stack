const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = env => {
  return {
    entry: './src/main.js',
    output: {
      path: path.resolve(__dirname, '../dist'),
      filename: 'assets/js/[name].code.js'
    },
    module: {
      rules: [
        
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, '../public/index.html'),
        title: 'clean-vue'
      })
    ]
  }
}