<template>
  <div class="app-layout">
    <Header />
    <div class="page">
      <router-view />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import Header from './components/Header.vue';

export default defineComponent({
  name: 'Layout',
  components: {
    Header,
  },
});
</script>
<style lang="scss" scoped>
  .app-layout {
    .page {
      padding: 24px;
    }
  }
</style>
