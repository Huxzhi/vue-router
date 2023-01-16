//引入路由对象
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

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
  //滚动行为
  scrollBehavior: (to, from, savedPosition) => {
    // console.log(savedPosition);
    // if (savedPosition) {
    //   return savedPosition
    // } else {
    //   return {
    //     top: 0
    //   }
    // }

    //支持异步
    return new Promise((r) => {
      setTimeout(() => {
        r({ top: 99999999 })
      }, 2000);
    })
  },


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