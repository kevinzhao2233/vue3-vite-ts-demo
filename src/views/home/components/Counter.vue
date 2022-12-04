<template>
  <div class="counter-box">
    <p class="count">{{ count }}</p>
    <NSpace>
      <NButton type="primary" @click="inCrement"> + 1 </NButton>
      <NButton @click="resetCrement">重置</NButton>
    </NSpace>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useAppStore } from '@/stores/app';

const appSotre = useAppStore();

const count = computed(() => appSotre.count);

const inCrement = () => appSotre.increment();

const resetCrement = () => appSotre.reset();

</script>
<style lang="scss" scoped>
  .counter-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .count {
      margin-bottom: 12px;
      font-size: 20px;
    }
  }
</style>
