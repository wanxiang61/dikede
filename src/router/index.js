import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName:'login' */ '@/views/login')
  },
  {
    path: '/index',
    name: 'index',
    component: () => import(/* webpackChunkName:'index' */ '@/views/index')
  },
  {
    path: '/',
    name: 'layout',
    component: () => import(/* webpackChunkName:'layout' */ '@/layout'),
    children: [
      {
        path: '/layout',
        redirect: '/home'
      },
      {
        path: 'home',
        name: 'home',
        component: () => import(/* webpackChunkName:'home' */ '@/views/home')
      },
      {
        path: 'test',
        name: 'test',
        component: () => import('@/views/test')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
