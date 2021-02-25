import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Layout from '/@/layout/index.vue'
import HelloWorld from '/@pages/home/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('/@pages/about/index.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
