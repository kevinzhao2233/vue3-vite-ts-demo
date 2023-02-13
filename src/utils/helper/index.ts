import { NIcon } from 'naive-ui';
import { Component, h } from 'vue';

// Naive UI 中帮助渲染 Icon 的工具，传入 SVG 即可
export const renderIcon = (icon: Component) => () => h(NIcon, null, { default: () => h(icon) });
