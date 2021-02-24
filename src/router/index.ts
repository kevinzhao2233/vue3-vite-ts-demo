import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Layout from '/@/layout/index.vue'
import HelloWorld from '/@pages/home/index.vue'
import FormPage from '/@pages/form/index.vue'

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
        path: '/form',
        name: 'form',
        component: FormPage
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('/@/components/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
