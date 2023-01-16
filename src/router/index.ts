//引入路由对象
import { createRouter, createWebHistory, createWebHashHistory, createMemoryHistory, RouteRecordRaw } from 'vue-router'

// 声明类型推断 
declare module 'vue-router' {
  interface RouteMeta {
    title?: string
  }
}

const routes: Array<RouteRecordRaw> = []


const router = createRouter({
  history: createWebHistory(),
  routes: [//配置信息
    {
      path: '/',
      component: () => import('../views/Login.vue'),
      meta: {
        title: '登陆页面'
      }
    },
    {
      path: '/index',
      component: () => import('../views/index.vue'),
      meta: {
        title: '首页'
      }
    }
  ]
})

//导出router
export default router