<template>


  <div class="scrollBehavior">

    <h1 style="color:aliceblue">scrollBehavior </h1>

  </div>
  <router-view #default="{ route, Component }">
    <transition :enter-active-class="`animate__animated ${route.meta.transition}`">
      <component :is="Component"></component>
    </transition>
  </router-view>

</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'

</script>

<style>
* {
  padding: 0;
  margin: 0;
}

html,
body,
#app {
  /* height: 100%; */
  /* 滚动行为 这里记得把app.vue的height:100%注释掉，否则不起效果 */
  /* overflow: hidden; */
}

.scrollBehavior {
  height: 2000px;
  background: #000;
  justify-content: center;
}
</style>