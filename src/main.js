import { createApp } from 'vue'

import router from './router/index'

import './css/index.scss'
import App from './App'

const root = createApp(App)
root.use(router)
root.mount('#root')