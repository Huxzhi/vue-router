<template>

  <div class="reg">
    register
    <div>品牌：{{ route.params?.name }}</div>
    <div>价格：{{ route.params?.price }}</div>
    <div>ID：{{ route.params?.id }}</div>
  </div>

</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
import { useRoute } from 'vue-router';

const route = useRoute()


</script>

<style>
.reg {
  background: green;
  height: 400px;
  width: 400px;
  font-size: 20px;
  color: white;
}
</style>