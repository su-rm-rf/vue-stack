# SFC
  Single-File Component 将一个Vue组件的模板template、逻辑script与样式style封装在单个文件中
  优点：
    关注点不是完全基于文件类型分离，应当是为了能够更好的维护代码
    预编译模板、而非运行时编译，编译优化
    组合式API语法更简单
  相应的语言块
    template: 传递给@vue/compiler-dom，预编译为JS渲染函数，作为组件的render选项
    script: ES模块，默认导出Vue的组件选项对象
    script setup: 预处理为组件的setup函数
    style: 可以有多个，可以使用scoped或module
    自定义块: 比如写文档，使用loader进行处理
  自动名称推导
    根据文件名自动推导其组件名
  预处理器
    script或style上使用lang为ts或sass等
  src导入
    可以将template、script、style通过src引入
  注释，参照各自原来的语言

# script setup 
  编译时语法糖
    使用纯Typescript声明props和自定义事件
    更好的运行时性能，模板被编译为同一作用域内
  其中的代码，会在每次组件实例被创建时执行
  顶层的绑定会被暴露给模板，变量、函数声明、import导入的内容
  响应式 ref解包
  使用组件
    动态组件 :is
    递归组件 as 重命名
    命名空间组件 A.B
  使用自定义指令
  defineProps和defineEmits
    编译器宏，类型推导，不能传入局部变量
  defineExpose
    暴露组件setup中的声明
  useSlots和useAttrs
    运行时函数，等价于setupContext.slots和attrs
  与普通script一起使用
    无法在setup中声明的选项，inheritAttrs
    声明模块的具名导出
    运行只需要在模块作用域执行一次的副作用
  顶层await
    编译成 async setup()
    与Suspense内置组件组合使用
  针对TypeScript的功能
    针对类型的props/emit声明
      类型声明 -> 静态分析 -> 运行时声明
    使用类型声明时的默认props值 withDefaults
  限制：不能与src属性一起使用

# CSS
  组件作用域css
    已经使用了postcss进行polyfill


# 组合式API Compoisition API
  响应式基础
  深入响应式系统

  ref 响应式变量
    接收一个值，返回一个带有value属性的对象
    reactive 深层解包
    shallowRef
    * 在template中调用ref赋值的对象，无需.value
  computed 计算属性
    接收一个getter函数，返回一个只读的响应式ref对象
    接收一个有get和set函数的对象，创建一个可写得ref对象
    * 调用该对象的get或set方法，执行相应的逻辑
  reactive
    返回一个对象的响应式代理Proxy
    避免深层响应式转换，只保留顶层访问的响应性
      
  readonly




# hook
  生命周期钩子

# 路由
  vue-router
  两种模式：
    hash: hashchange, 不会重新加载页面
    history: pushState/replaceState, 需要服务端配合

# 状态管理


# CSS样式
  全局公共样式抽离，组件按层级设定style的scope
  当有外部样式和vue组件内部style时，打包后前者在前、后者在后