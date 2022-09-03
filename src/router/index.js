import { createRouter, createWebHistory } from 'vue-router'

import Home from '../components/Home'
import About from '../components/About'
import NotFound from '../components/404'

const routes = [
  {
    path: '/', component: Home,
  },
  {
    path: '/about', component: About
  },
  {
    path: '/404', component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router