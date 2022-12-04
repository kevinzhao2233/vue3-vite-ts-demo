<template>
  <n-config-provider
    :locale="zhCN"
    :theme-overrides="themeOverrides"
    :date-locale="dateZhCN"
    inline-theme-disabled
  >
    <n-dialog-provider>
      <n-notification-provider>
        <n-message-provider>
          <GlobalMessage />
          <slot name="default" />
        </n-message-provider>
      </n-notification-provider>
    </n-dialog-provider>
  </n-config-provider>
</template>

<script setup lang="ts">
import { zhCN, dateZhCN } from 'naive-ui';
import { themeOverrides } from '@/config/theme';
import GlobalMessage from './GlobalMessage.vue';
</script>
