<template>

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
import router from '../router';
import { ElMessage, FormRules, FormInstance } from 'element-plus'


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
      router.push('/index')
      localStorage.setItem('token', '1')
    } else {
      ElMessage.error('请输入完整')
    }
  })

}
</script>

<style lang='less' scoped>
.login {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>