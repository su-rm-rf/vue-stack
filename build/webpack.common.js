const path = require('path')

const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const pathResolve = _path => path.resolve(__dirname, _path)

module.exports = env => {
  return {
    entry: './src/main.js', // 从项目根目录算起
    output: {
      path: pathResolve('../dist'), // 使用绝对路径
      filename: 'assets/js/[name].code.js',
      chunkFilename: 'assets/js/[name].bundle.js',
      // publicPath: '/vue-stack/'
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        },
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        },
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          loader: 'ts-loader',
          options: {
            appendTsSuffixTo: [/\.vue$/]
          }
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              // options: {
              //   esModule: false,
              //   modules: {
              //     auto: false, // 
              //     localIdentName: '[local]_[hash:base64:8]' // 自定义生产的类名
              //   }
              // }
            },
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: {
                    "postcss-preset-env": {
                      browsers: [
                        "defaults",
                        "not ie < 9",
                        "last 7 versions",
                        "> 1%",
                        "iOS >= 8",
                        "last 3 iOS versions",
                        "android >= 5.0"
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
          test: /\.(jpg|png|gif|svg)$/,
          type: 'asset',
          parser: {
            dataUrlCondition: {
              maxSize: 10 * 1024
            }
          }
        }
      ]
    },
    resolve: {
      extensions: ['.ts', '.js', '.vue', '.json'],
      alias: {
        '@': path.join('../src')
      }
    },
    plugins: [
      new VueLoaderPlugin(),
      new HtmlWebpackPlugin({
        template: pathResolve('../public/index.html'),
        filename: 'index.html',
        title: 'vue-stack'
      }),
      new MiniCssExtractPlugin({
        filename: 'assets/css/[name].style.css',
        chunkFilename: 'assets/css/[name].css'
      })
    ]
  }
}