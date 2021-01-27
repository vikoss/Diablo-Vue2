import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "About" */ '../views/About.vue')
  },
  {
    path: '/region/:region/profile/:profile',
    name: 'Profile',
    component: () => import(/* webpackChunkName: "Profile" */ '../views/Profile.vue')
  },
  {
    path: '/region/:region/profile/:profile/hero/:hero',
    name: 'Hero',
    component: () => import(/* webpackChunkName: "Hero" */ '../views/Hero.vue')
  },
  {
    path: '/error',
    name: 'Error',
    component: () => import(/* webpackChunkName: "Error" */ '../views/Error.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
