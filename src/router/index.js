import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Main from '../views/Main.vue'


Vue.use(VueRouter)

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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
