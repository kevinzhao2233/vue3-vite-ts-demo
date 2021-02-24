<template>
  <div class="app-layout">
    <Header />
    <router-view />
  </div>
</template>
<script lang="ts">
  import Header from './components/Header.vue'
  import { defineComponent } from 'vue'
  export default defineComponent({
    name: 'Layout',
    components: {
      Header
    }
  })
</script>
<style lang="scss" scoped>
  .app-layout {
  }
</style>
