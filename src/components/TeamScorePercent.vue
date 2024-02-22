<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'

import { use } from 'echarts/core'
import { LineChart } from 'echarts/charts'
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DataZoomComponent
} from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'
import type { ComposeOption } from 'echarts/core'
import type { LineSeriesOption } from 'echarts/charts'
import type {
  TitleComponentOption,
  TooltipComponentOption,
  GridComponentOption,
  DataZoomComponentOption
} from 'echarts/components'

use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DataZoomComponent,
  LineChart,
  CanvasRenderer
])

type EChartsOption = ComposeOption<
  | TitleComponentOption
  | TooltipComponentOption
  | GridComponentOption
  | DataZoomComponentOption
  | LineSeriesOption
>

const props = defineProps<{
  title: string
}>()

const option: Ref<EChartsOption> = ref({
  title: {
    text: props.title,
    left: 'center'
  },
  tooltip: {
    trigger: 'item',
    formatter: '命中率: {c}'
  },
  xAxis: {
    data: ['Prac 1', 'Prac 2', 'Prac 3', 'Quals 1', 'Quals 2', 'Quals 3', 'Quals 4', 'Quals 5', 'Quals 6', 'Quals 7', 'Quals 8', 'Quals 9', 'Quals 10', 'Quals 11',  'Quals 12']
  },
  dataZoom: [
    {
      start: 0,
      end: 40
    }
  ],
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [1, 2, 3, 4, 5, 6 ,7 ,8 ,9, 10, 11, 12, 13, 14, 15],
      type: 'line'
    }
  ]
});
</script>

<template>
  <v-sheet class="pa-3" elevation="3" width="100%" rounded>
    <v-chart class="chart" :option="option" autoresize />
  </v-sheet>
</template>

<style scoped>
.chart {
  height: 330px;
}
</style>