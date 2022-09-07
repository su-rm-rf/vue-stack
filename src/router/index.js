import { createRouter, createWebHistory } from "vue-router"

import PKG from '../../package.json'

import Home from '../components/Home'
import Business from '../components/Business'
import About from '../components/About'

const routes = [
  {
    path: '/', component: Home,
  },
  {
    path: '/business', component: Business,
  },
  {
    path: '/about', component: About,
  }
]

const base = PKG.base
const router = createRouter({
  history: createWebHistory(base),
  routes
})

export default router