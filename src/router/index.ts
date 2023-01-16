//引入路由对象
import { createRouter, createWebHistory, createWebHashHistory, createMemoryHistory, RouteRecordRaw } from 'vue-router'

// 声明类型推断 
declare module 'vue-router' {
  interface RouteMeta {
    title?: string,
    transition?: string,
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
        title: '登陆页面',
        transition: "animate__fadeInUp",
      }
    },
    {
      path: '/index',
      component: () => import('../views/index.vue'),
      meta: {
        title: '首页',
        transition: "animate__bounceIn",
      }
    }
  ]
})

//导出router
export default router