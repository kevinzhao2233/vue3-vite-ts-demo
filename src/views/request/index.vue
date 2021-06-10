<template>
  <el-button @click="success">发送正常成功请求</el-button>
  <el-button @click="timeout">发送延时请求</el-button>
  <el-button @click="udf">发送未知请求</el-button>
  <el-button @click="repeat">取消重复请求</el-button>
  <el-button @click="jump">跳转页面取消亲求</el-button>
</template>

<script>
  import { defineComponent } from 'vue'
  import router from '/@/router'
  import * as api from '/@/api/index'

  export default defineComponent({
    name: 'Request',
    setup() {
      const success = () => {
        api.successRequest()
      }
      const udf = () => {
        api.undefinedRequest()
      }
      const timeout = () => {
        api.timeoutRequest()
      }
      const repeat = () => {
        api.timeoutRequest()
        api.timeoutRequest()
      }
      const jump = () => {
        api.timeoutRequest()
        setTimeout(() => {
          router.push('/about')
        }, 2000);
      }
      return {
        success,
        udf,
        timeout,
        repeat,
        jump
      }
    }
  })
</script>
<style lang="scss" scoped>
  .card {
    margin-bottom: 24px;
  }
</style>
