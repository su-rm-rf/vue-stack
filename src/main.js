import { createApp } from 'vue'

import ElementPlus from 'element-plus'
import VForm3 from 'vform3-builds'

import 'element-plus/dist/index.css'
import 'vform3-builds/dist/designer.style.css'

import router from './router/index'

import './css/main.scss'
import App from './App.vue'

const app = createApp(App)

app.use(ElementPlus, { size: 'small', zIndex: 3000 })
app.use(VForm3)

app.use(router)

app.mount('#root')