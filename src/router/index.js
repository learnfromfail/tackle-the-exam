import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home'
import About from '../views/About'
import Exam from '../views/Exam'
import Pastpapers from '../views/PastPapers'

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
    path: '/About',
    name: 'About',
    component: About,
  },
  {
    path: '/ExamNotes',
    name: 'Exam',
    component: Exam,
  },
  {
    path: '/PastPapers',
    name: 'Pastpapers',
    component: Pastpapers,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
