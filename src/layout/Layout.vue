<template>
  <Header />
  <div class="page">
    <router-view />
  </div>
</template>
<script setup lang="ts">
import Header from './components/Header.vue';
</script>
<style lang="scss" scoped>
.page {
  padding: 24px;
}
</style>
