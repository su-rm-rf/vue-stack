# webpack
entry
  chunk
output
  path,filename
  chunk
  publicPath
loader
  babel
  vue
  style,css,postcss,sass
  file
  ts
plugin
  html
  vue
  miniCssExtract
resolve
  alias
devServer
  proxy
cache
  提升构建速度
  
生产环境优化：
  miniCssExtract 合并提取css
  cssMinimizer 压缩css
  splitChunk 代码拆分
    按需加载
  bundleAnalyzer 打包体积分析
原理：

# ES6
babel-loader

# Vue
vue-loader
vuePlugin

# Typescript
declare module

ts-loader
编译时静态分析，减少生产环境中的运行时错误
vue-tsc
defineComponent
lang="ts"

# Vite
esbuild 构建ts
rollup 打包

# nodejs
线程进程
