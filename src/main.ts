import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import router from './router'
import ElementUi from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)


app.use(router)
app.use(ElementUi)

const whiteList = ['/']

router.beforeEach((to, from, next) => {
  let token = localStorage.getItem('token')
  //白名单 有值 或者登陆过存储了token信息可以跳转 否则就去登录页面
  if (whiteList.includes(to.path) || token) { //token每次都要跟后端校验一下是否过期
    //另外说一下beforeEach可以定义不止一个，vue会收集你所有定义的路由钩子，所以next的作用不应该是跳转，而是使步骤进行到下一个你定义的钩子
    next()
  } else {
    next('/')
  }
})


app.mount('#app')
