import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Main from '../views/Main.vue'

const pageRoutes = Array.from({ length: 10 }, (_, index) => {
  const pageNumber = index + 1
  return {
    path: `/page-${pageNumber}`,
    name: `Page${pageNumber}`,
    component: () => import(`../views/Page${pageNumber}.vue`)
  }
})

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    children: [
      { path: '/', name: 'Home', component: Home },
      ...pageRoutes
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
