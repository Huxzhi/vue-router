<template>

  <div>
    <h1>小满最骚</h1>
    <router-link replace to="/">跳转 login</router-link>
    <router-link replace style="margin-left:200px" to="/register">跳转 register</router-link>

    <button @click="toPage('Login')">Login</button>
    <button @click="toDetail(item)">Register</button>



    <hr />
    <router-view></router-view>
  </div>

</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

type Item = {
  name: string,
  price: number,
  id: number
}

const item: Item = {
  name: 'xiaoman',
  price: 100,
  id: 1
}

const toPage = (url: string) => {
  router.push({
    name: url,
    query: item
  })
}

const toDetail = (item: Item) => {
  router.push({
    name: 'Register',
    params: {
      id: item.id
    }
  })
}
</script>

<style lang='less' scoped>

</style>