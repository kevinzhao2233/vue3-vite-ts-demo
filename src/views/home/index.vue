<template>
  <el-card class="card" shadow="hover">
    <template #header> 使用 vuex 改变计数值 </template>
    <Counter />
  </el-card>
  <el-card class="card" shadow="hover">
    <template #header> 使用 axios 搜索网易云歌曲 </template>
    <Music />
  </el-card>
  <el-card class="card" shadow="hover">
    <template #header> 使用 Echarts </template>
    <Echarts />
  </el-card>
</template>

<script>
  import { defineComponent } from 'vue'
  import Counter from './components/Counter.vue'
  import Music from './components/Music.vue'
  import Echarts from './components/Echarts.vue'

  export default defineComponent({
    name: 'Home',
    components: {
      Counter,
      Music,
      Echarts
    },
    setup() {
      return {}
    }
  })
</script>
<style lang="scss" scoped>
  .card {
    margin-bottom: 24px;
  }
</style>
