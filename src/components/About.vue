<template>
  <h1>{{ state.msg }}</h1>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'About',
    setup() {
      const state = {
        msg: 'About Page'
      }

      return {
        state
      }
    }
  })
</script>
