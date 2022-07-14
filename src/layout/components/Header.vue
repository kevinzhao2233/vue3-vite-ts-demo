<template>
  <div class="layout-header">
    <div
      class="logo"
      @click="gotoPage({ name: '首页', route: '/' })"
    >
      <img
        src="/src/assets/vite-logo.svg"
        alt="logo"
      >
      <h3>{{ proTitle }}</h3>
    </div>
    <ul class="nav-box">
      <li
        v-for="item in navList"
        :key="item.route"
        class="nav-item"
        @click="gotoPage(item)"
      >
        {{
          item.name
        }}
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue';
import router from '@/router/index';

  interface Nav {
    name: string
    route: string
  }

const proTitle = ref('Vue3 + Vite3 + TS + Pinia');
const navList = reactive<Nav[]>([
  {
    name: '关于',
    route: '/about',
  },
]);
const gotoPage = (nav: Nav) => {
  router.push(nav.route);
};

</script>
<style lang="scss" scoped>
  .layout-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
    padding: 0 24px;
    background-color: #eaecf6;

    .logo {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      user-select: none;

      img {
        width: 36px;
        height: 36px;
        margin-right: 12px;
      }

      h3 {
        font-size: 17px;
      }
    }

    .nav-box {
      display: flex;
      align-items: center;
      height: 100%;

      .nav-item {
        height: 100%;
        padding: 0 12px;
        margin-left: 24px;
        line-height: 60px;
        cursor: pointer;

        &:hover {
          background: #d4d6df;
        }
      }
    }
  }
</style>
