<!-- eslint-disable vue/valid-template-root -->
<template />
<script setup lang="ts">
import { useMessage } from 'naive-ui';

const message = useMessage();

window.$message = message;
</script>
