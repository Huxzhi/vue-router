<template>

  <div>
    <h1>小满最骚</h1>
    <router-link tag="div" to="/">跳转login</router-link>
    <router-link tag="div" style="margin-left:200px" to="/register">跳转register</router-link>

    <hr />
    <router-view></router-view>
  </div>

</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'

</script>

<style lang='less' scoped>

</style>