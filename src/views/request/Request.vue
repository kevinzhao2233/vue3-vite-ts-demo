<template>
  <NAlert type="success" show-icon>请打开控制台查看打印信息</NAlert>
  <NSpace>
    <NButton @click="success">发送正常成功请求</NButton>
    <NButton @click="timeout">发送延时请求</NButton>
    <NButton @click="udf">发送未知请求</NButton>
    <NButton @click="repeat">取消重复请求</NButton>
    <NButton @click="jump">跳转页面取消请求</NButton>
  </NSpace>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import * as api from '@/api/index';

const router = useRouter();

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
  .n-alert {
    margin-bottom: 24px;
  }
</style>
