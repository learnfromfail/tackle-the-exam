import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home'
import About from '../views/About'
import Exam from '../views/Exam'

const routes = [
  {
    path: '/',
    name: '/Home',
    component: Home,
  },
  {
    path: '/Home',
    name: '/',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/exam',
    name: 'Home',
    component: Exam,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
