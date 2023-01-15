<template>

  <div>
    <h1>小满最骚</h1>
    <router-link tag="div" to="/">跳转 login</router-link>
    <router-link tag="div" style="margin-left:200px" to="/register">跳转 register</router-link>

    <button @click="toPage('Login')">Login</button>
    <button @click="toPage('Register')">Login</button>



    <hr />
    <router-view></router-view>
  </div>

</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const toPage = (url: string) => {
  router.push({
    name: url
  })
}
</script>

<style lang='less' scoped>

</style>