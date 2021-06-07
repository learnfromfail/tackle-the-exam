import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home'
import About from '../views/About'
import Exam from '../views/Exam'
import Pastpapers from '../views/PastPapers'
import LifeHack from '../views/LifeHack'
import InfoTech from '../views/InfoTech'
import Quotes from '../views/Quotes'

import M2 from '../views/notes/m2'

import Display from '../views/Display'

const routes = [
  {
    path: '/ExamNotes/M2',
    name: 'M2',
    component: M2,
  },
  {
    path: '/Display',
    name: 'Display',
    component: Display,
  },
  {
    path: '/',
    name: 'Home',
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
  {
    path: '/LifeHack',
    name: 'LifeHack',
    component: LifeHack,
  },
  {
    path: '/InfoTech',
    name: 'InfoTech',
    component: InfoTech,
  },
  {
    path: '/Quotes',
    name: 'Quotes',
    component: Quotes,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
