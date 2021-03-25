<template>
  <div class="search-bar">
    <el-input
      v-model="keywords"
      placeholder="输入想要搜索的歌名"
      clearable
      style="width: 300px; margin-right: 24px;"
      @keypress.enter="fetchMusic"
    />
    <el-button type="primary" @click="fetchMusic">搜索</el-button>
  </div>
  <ul
    v-loading="loading"
    element-loading-text="拼命加载中..."
    element-loading-spinner="el-icon-loading"
    class="list-box"
  >
    <li v-for="item in list.songs" :key="item.id" class="list-item">
      <span class="name">{{ item.name }}</span>
      <span class="artists">{{ item.artists[0].name }}</span>
    </li>
  </ul>
</template>
<script lang="ts">
  import { defineComponent, reactive, ref } from 'vue'
  import * as api from '/@/api/index'

  export default defineComponent({
    name: 'Music',
    setup() {
      const keywords = ref('干饭人之歌')

      let list = reactive({ songs: []})

      const loading = ref(true)

      const fetchMusic = () => {
        if (!keywords.value) return
        loading.value = true
        api
          .getMusic({ keywords: keywords.value })
          .then((res: any) => {
            list.songs = res.result.songs
          })
          .finally(() => {
            loading.value = false
          })
      }
      fetchMusic()
      return {
        loading,
        fetchMusic,
        keywords,
        list
      }
    }
  })
</script>
<style lang="scss" scoped>
  .list-box {
    height: 220px;
    padding: 4px 0;
    margin-top: 24px;
    overflow: auto;
    border: 1px solid #eeeeee;
    border-radius: 4px;
    .list-item {
      display: flex;
      align-items: center;
      height: 40px;
      line-height: 1.6;

      .name {
        width: 40%;
        padding: 0 12px;
      }

      &:nth-child(2n - 1) {
        background: #f1f5f9;
      }
    }
  }
</style>
