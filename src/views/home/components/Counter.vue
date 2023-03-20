<template>
  <div class="counter-box">
    <p class="count">{{ count }}</p>
    <a-space>
      <a-button type="primary" @click="inCrement"> + 1 </a-button>
      <a-button @click="resetCrement">重置</a-button>
    </a-space>
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
