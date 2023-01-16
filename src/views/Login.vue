<template>
  <!-- <loadingBar></loadingBar> 这里只是看看效果，最好是放到 全局导航守卫-后置守卫 !!!-->
  <div class="login">

    <el-form ref="form" :rules="rules" :model="formInline" class="demo-form-inline">
      <el-form-item prop="user" label="账号：">
        <el-input v-model="formInline.user" placeholder="请输入账号" />
      </el-form-item>
      <el-form-item prop="password" label="密码：">
        <el-input v-model="formInline.password" placeholder="请输入密码" type="password" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">登陆</el-button>
      </el-form-item>
    </el-form>
  </div>

</template>


<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
// import router from '../router';
import { ElMessage, FormRules, FormInstance } from 'element-plus'
import loadingBar from '../components/loadingBar.vue';
import axios from 'axios'
const router = useRouter()

const formInline = reactive({
  user: '',
  password: '',
})


const form = ref<FormInstance>()

const rules: FormRules = reactive({
  user: [{
    required: true,
    message: "请输入账号",
    type: "string"
  }],
  password: [{
    required: true,
    message: "请输入密码",
    type: "string"
  }]
})

const onSubmit = () => {
  console.log('submit!', form.value)
  form.value?.validate((validate) => {
    if (validate) {
      initRouter()

      // router.push('/index')
      localStorage.setItem('token', '1')
    } else {
      ElMessage.error('请输入完整')
    }
  })

}

/**
 * 一般是单独的ts页面编写，这里合起来了
 */
const initRouter = async () => {
  const result = await axios.get('http://localhost:9999/login', { params: formInline });

  const data = result.data //连起来不让写

  //要对结果作判断，返回路由还是错误提示
  if (data.code === 400) {
    alert(data.mesage)
    return
  }

  //判断有没有数据
  data.route.forEach((v: any) => {
    router.addRoute({
      path: v.path,
      name: v.name,
      //这儿不能使用@
      component: () => import(`@/views/${v.component}`)
    })
    router.push('/index')
  })

  console.log(router.getRoutes());

}

</script>

<style lang='less' >
.login {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>