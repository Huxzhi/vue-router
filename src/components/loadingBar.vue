<template>

  <div class="wraps">
    <div ref="bar" class="bar"></div>
  </div>

</template>

<script setup lang='ts'>
import { ref, reactive, onMounted } from 'vue'

let speed = ref<number>(1)
let bar = ref<HTMLElement>()
let timer = ref<number>(0) //设置id

const startLoading = () => {
  let dom = bar.value as HTMLElement
  speed.value = 1
  console.log(dom);
  timer.value = window.requestAnimationFrame(function fn() {//不用箭头函数的原因，递归
    if (speed.value < 90) {
      speed.value += 1;
      dom.style.width = speed.value + '%'
      timer.value = window.requestAnimationFrame(fn) //递归
    } else {
      speed.value = 1;
      window.cancelAnimationFrame(timer.value)
    }
  })

}
const endLoading = () => {
  let dom = bar.value as HTMLElement
  setTimeout(() => {
    window.requestAnimationFrame(() => {
      speed.value = 100;
      dom.style.width = speed.value + '%'
    })
  }, 1000)


}
// 放到全局导航守卫-后置守卫 后不需要了
// //只有在 onMounted 之后才能获取 DOM
// onMounted(() => {
//   startLoading()
//   endLoading()
// })

defineExpose({
  startLoading,
  endLoading,
})

</script>

<style lang='less' scoped>
.wraps {
  position: fixed;
  top: 0;
  width: 100%;
  height: 2px;

  .bar {
    height: inherit;
    width: 0;
    background: blue;
  }
}
</style>