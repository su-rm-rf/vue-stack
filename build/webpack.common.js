const path = require('path')

const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const PKG = require('../package.json')

module.exports = env => {
  return {
    entry: './src/main.js',
    output: {
      path: path.resolve(__dirname, '../dist'),
      filename: 'assets/js/[name]_[contenthash:8].code.js',
      chunkFilename: 'assets/js/[name]_[contenthash:8].bundle.js',
      publicPath: PKG.base,
    },
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
        },
        {
          test: /\.vue$/,
          use: 'vue-loader'
        },
        {
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                esModule: false,
                modules: {
                  auto: false,
                  localIdentName: '[local]_[hash:base64:8]' // 自定义生成的类名
                }
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: {
                    'postcss-preset-env': {
                      browsers: [
                        'defaults',
                        'not ie < 9',
                        'last 7 versions',
                        '> 1%',
                        'iOS >= 8',
                        'last 3 iOS versions',
                        'android >= 5.0'
                      ]
                    }
                  }
                }
              }
            },
            'sass-loader'
          ]
        },
        {
          test: /\.(jpg|jpeg|png|gif|bmp|ico|svg)$/,
          type: 'asset',
          parser: {
            dataUrlCondition: {
              maxSize: 10 * 1024 // 小于10kb的图片会内联处理
            }
          }
        }
      ]
    },
    plugins: [
      new VueLoaderPlugin(),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, '../public/index.html'),
        filename: 'index.html',
        title: PKG.name
      }),
      new MiniCssExtractPlugin({
        filename: 'assets/css/[name]_[contenthash:8].style.css',
        chunkFilename: 'assets/css/[name]_[contenthash:8].css'
      })
    ],
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        '@': path.join('../src')
      }
    },
  }
}