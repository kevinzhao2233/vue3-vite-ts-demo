<template>
  <a-card title="使用 pinia 改变计数值" :hoverable="true">
    <Counter />
  </a-card>
  <a-card title="测试封装 axios" :hoverable="true">
    <NButton @click="gotoRequest">去测试页面</NButton>
  </a-card>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import Counter from './components/Counter.vue';

const router = useRouter();

const gotoRequest = () => {
  router.push('/request');
};

</script>
<style lang="scss" scoped>
.n-card {
  margin-bottom: 24px;
}
</style>
