<template>
  <a-alert
    description="请打开控制台查看打印信息"
    type="success"
    show-icon
  />
  <a-button @click="success">发送正常成功请求</a-button>
  <a-button @click="timeout">发送延时请求</a-button>
  <a-button @click="udf">发送未知请求</a-button>
  <a-button @click="repeat">取消重复请求</a-button>
  <a-button @click="jump">跳转页面取消请求</a-button>
</template>

<script setup lang="ts">
import router from '@/router';
import * as api from '@/api/index';

const success = () => {
  api.successRequest();
};
const udf = () => {
  api.undefinedRequest();
};
const timeout = () => {
  api.timeoutRequest();
};
const repeat = () => {
  api.timeoutRequest();
  api.timeoutRequest();
};
const jump = () => {
  api.timeoutRequest();
  setTimeout(() => {
    router.push('/about');
  }, 2000);
};

</script>
<style lang="scss" scoped>
  .card {
    margin-bottom: 24px;
  }
</style>
