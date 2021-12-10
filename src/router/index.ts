import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '@pages/home/index.vue';
import Request from '@pages/request/index.vue';
import request, { IAxiosInstance } from '@/utils/request';
import Layout from '@/layout/index.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'Home',
        component: Home,
      },
      {
        path: '/request',
        name: 'Request',
        component: Request,
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('@pages/about/index.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 路由全局前置守卫
router.beforeEach((to, from, next) => {
  // 路由变化时取消当前所有非全局的 pending 状态的请求
  (request as IAxiosInstance).clearPendingPool();
  next();
});

export default router;
