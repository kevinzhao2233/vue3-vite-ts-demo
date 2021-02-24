<template>
  <el-card>
    <template #header> 使用 vuex 改变计数值 </template>
    <div class="card-content">
      <p class="count">{{ count }}</p>
      <div class="btn-box">
        <el-button type="primary" @click="inCrement"> + 1 </el-button>
        <el-button @click="resetCrement">重置</el-button>
      </div>
    </div>
  </el-card>
</template>

<script>
  import { defineComponent, computed } from 'vue'
  import { useStore } from 'vuex'
  import { key } from '/@/store'

  export default defineComponent({
    name: 'Home',
    props: {
      msg: {
        type: String,
        default: ''
      }
    },
    setup() {
      const store = useStore(key)

      const count = computed(() => store.state.count)

      return {
        count,
        inCrement: () => store.commit('increment'),
        resetCrement: () => store.commit('reset')
      }
    }
  })
</script>
<style lang="scss" scoped>
  .card-content {
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
