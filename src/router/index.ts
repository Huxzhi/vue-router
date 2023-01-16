//引入路由对象
import { createRouter, createWebHistory, createWebHashHistory, createMemoryHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = []


const router = createRouter({
  history: createWebHistory(),
  routes: [//配置信息
    {
      path: '/',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/index',
      component: () => import('../views/index.vue')
    }
  ]
})

//导出router
export default router