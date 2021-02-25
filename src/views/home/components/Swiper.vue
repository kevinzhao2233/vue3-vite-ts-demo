<template>
  <div class="swiper-box">
    <swiper :slides-per-view="3" :space-between="50">
      <swiper-slide>Slide 1</swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
    </swiper>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue'
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import 'swiper/swiper.scss'

  export default defineComponent({
    name: 'Swiper',
    components: {
      Swiper,
      SwiperSlide
    },
    setup() {
      return {}
    }
  })
</script>
<style lang="scss" scoped>
  .swiper-box {
  }
</style>
