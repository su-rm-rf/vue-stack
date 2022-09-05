import { createRouter, createWebHistory } from "vue-router"

import Home from '../components/Home'
import Business from '../components/Business'
import About from '../components/About'

// const Home = { template: '<div>home</div>' }
// const Business = { template: '<div>business</div>' }
// const About = { template: '<div>about</div>' }

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

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router