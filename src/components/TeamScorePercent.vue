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
  title: string,
  xAxis: Array<string>,
  data: Array<number>
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
    data: props.xAxis
  },
  dataZoom: [
    {
      start: 0,
      end: 100
    }
  ],
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: props.data,
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