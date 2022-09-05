开发环境不使用babel

# 基础：
搭建Webpack
  webpack webpack-cli webapck-dev-server webpack-merge
集成html
  html-webpack-plugin
集成Sass
  style-loader css-loader postcss-loader postcss sass-loader sass
静态资源
  type: asset
使用ES6
  babel-loader @babel/core @babel/preset-env
集成Vue3
  vue vue-loader vue-


# 优化：
dev缓存
  type: filesystem

提取css
  mini-css-extract-plugin
压缩css
  css-minimizer-webpack-plugin
代码拆分
  optmization.splitChunks
