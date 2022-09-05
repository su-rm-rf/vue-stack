import { createRouter, createWebHistory } from 'vue-router'

import Home from '../components/Home'
import About from '../components/About'
import VForm3 from '../components/VForm3'
import NotFound from '../components/404'

const routes = [
  {
    path: '/', component: Home,
  },
  {
    path: '/about', component: About
  },
  {
    path: '/vform3', component: VForm3
  },
  {
    path: '/404', component: NotFound
  }
]

const router = createRouter({
  // history: createWebHistory('/vue-stack/'),
  history: createWebHistory(''),
  routes
})

export default router