<template>
  <div class="app-layout">
    <Header />
    <div class="page">
      <router-view />
    </div>
  </div>
</template>
<script setup lang="ts">
import Header from './components/Header.vue';
</script>
<style lang="scss" scoped>
  .app-layout {
    .page {
      padding: 24px;
    }
  }
</style>
