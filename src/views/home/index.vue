<template>
  <el-card class="card" shadow="hover">
    <template #header> 使用 vuex 改变计数值 </template>
    <Counter />
  </el-card>
  <el-card class="card" shadow="hover">
    <template #header> 测试封装 axios </template>
    <el-button @click="gotoRequest">去测试页面</el-button>
  </el-card>
  <el-card class="card" shadow="hover">
    <template #header> 使用 Echarts </template>
    <Echarts />
  </el-card>
</template>

<script>
  import { defineComponent } from 'vue'
  import Counter from './components/Counter.vue'
  import Echarts from './components/Echarts.vue'
  import router from '/@/router'

  export default defineComponent({
    name: 'Home',
    components: {
      Counter,
      Echarts
    },
    setup() {
      const gotoRequest = () => {
        router.push('/request')
      }
      return {
        gotoRequest
      }
    }
  })
</script>
<style lang="scss" scoped>
  .card {
    margin-bottom: 24px;
  }
</style>
