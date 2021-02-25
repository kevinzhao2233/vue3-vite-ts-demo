<template>
  <div ref="container" style="width: 100%; height: 400px;" />
</template>
<script lang="ts">
  import { defineComponent, onMounted, ref } from 'vue'
  import * as echarts from 'echarts'

  export default defineComponent({
    name: 'Swiper',
    components: {},
    setup() {
      const container = ref<HTMLElement | null>(null)
      let chart = null

      onMounted(() => {
        chart = echarts.init(container.value as HTMLElement)
        console.log(chart)
        chart.setOption({
          color: ['#409eff'],
          title: {
            text: 'ECharts 入门示例'
          },
          tooltip: {},
          xAxis: {
            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
          },
          yAxis: {},
          series: [
            {
              name: '销量',
              type: 'bar',
              data: [5, 20, 36, 10, 10, 20]
            }
          ]
        })
      })

      return {
        container,
        chart
      }
    }
  })
</script>
