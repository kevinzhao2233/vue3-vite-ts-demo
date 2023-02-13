<template>
  <AppProvider>
    <router-view />
    <!-- <NThemeEditor /> -->
  </AppProvider>
</template>

<script lang="ts" setup>
// import { NThemeEditor } from 'naive-ui';
import AppProvider from './components/Application/AppProvider.vue';
</script>
