<template>
  <h2>{{ msg }}</h2>
  <p>
    技术点：<a href="https://vue3js.cn/docs/zh/">Vue3</a>、
    <a href="https://cn.vitejs.dev/">Vite2</a>、
    <a href="https://next.vuex.vuejs.org/">Vuex4</a>、
    <a href="https://next.router.vuejs.org/zh/">Vur-router4</a>、
    <a href="https://www.typescriptlang.org/zh/">Typescript4</a>、
    <a href="https://echarts.apache.org/zh/index.html">Echarts5</a>、
    <a href="http://axios-js.com/zh-cn/docs/index.html">Axios</a>
  </p>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import log from 'b-pretty-log';

const msg = ref('关于页');

log('info', 'Component is mounted');

</script>
<style lang="scss" scoped>
  h2,
  p {
    line-height: 5;
    text-align: center;
  }
</style>
