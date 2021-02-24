<template>
  <h1>{{ state.msg }}</h1>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue'

  export default defineComponent({
    name: 'About',
    setup() {
      const msg = ref('About Page')

      return {
        msg
      }
    }
  })
</script>
