<script setup lang="ts">
import { computed } from 'vue'

export interface TrxBarDataset {
  label: string
  data: number[]
  color?: string
}

const COLORS = ['var(--trx-accent-color)', '#60a5fa', '#f472b6', '#fb923c', '#a78bfa']

const props = withDefaults(defineProps<{
  labels?: string[]
  datasets?: TrxBarDataset[]
  height?: number
  showGrid?: boolean
  showValues?: boolean
  horizontal?: boolean
  stacked?: boolean
}>(), {
  labels: () => [],
  datasets: () => [],
  height: 220,
  showGrid: true,
  showValues: false,
  horizontal: false,
  stacked: false,
})

const W = 600
const PAD = { top: 20, right: 16, bottom: 36, left: 44 }
const chartW = computed(() => W - PAD.left - PAD.right)
const chartH = computed(() => props.height - PAD.top - PAD.bottom)

const maxV = computed(() => {
  if (props.stacked) {
    return Math.max(...props.labels.map((_, i) => props.datasets.reduce((s, d) => s + (d.data[i] ?? 0), 0)), 1)
  }
  return Math.max(...props.datasets.flatMap(d => d.data), 1)
})

const groupW = computed(() => chartW.value / (props.labels.length || 1))
const barW = computed(() => props.stacked
  ? groupW.value * 0.6
  : (groupW.value * 0.8) / (props.datasets.length || 1)
)

function barX(gi: number, di: number) {
  const gStart = PAD.left + gi * groupW.value
  if (props.stacked) return gStart + groupW.value * 0.2
  return gStart + groupW.value * 0.1 + di * barW.value
}

function barY(value: number, stackOffset = 0) {
  const h = (value / maxV.value) * chartH.value
  return PAD.top + chartH.value - h - (stackOffset / maxV.value) * chartH.value
}

function barH(value: number) {
  return (value / maxV.value) * chartH.value
}

const yTicks = computed(() =>
  Array.from({ length: 5 }, (_, i) => {
    const v = Math.round((i / 4) * maxV.value)
    const y = PAD.top + chartH.value - (i / 4) * chartH.value
    return { v, y }
  })
)

const stackedBars = computed(() =>
  props.labels.map((_, gi) => {
    let offset = 0
    return props.datasets.map((ds, di) => {
      const v = ds.data[gi] ?? 0
      const bar = { v, offset, di }
      offset += v
      return bar
    })
  })
)
</script>

<template>
  <div class="trx-bar-chart">
    <svg :viewBox="`0 0 ${W} ${height}`" :height="height" preserveAspectRatio="none" style="width:100%">
      <!-- Grid -->
      <template v-if="showGrid">
        <line
          v-for="t in yTicks" :key="t.v"
          :x1="PAD.left" :y1="t.y" :x2="PAD.left + chartW" :y2="t.y"
          stroke="var(--trx-border-color)" stroke-width="1"
        />
      </template>
      <!-- Y axis labels -->
      <text
        v-for="t in yTicks" :key="'yl' + t.v"
        :x="PAD.left - 6" :y="t.y + 4"
        text-anchor="end" font-size="10" fill="var(--trx-text-secondary)"
      >{{ t.v }}</text>
      <!-- X labels -->
      <text
        v-for="(label, i) in labels" :key="'xl' + i"
        :x="PAD.left + i * groupW + groupW / 2" :y="PAD.top + chartH + 18"
        text-anchor="middle" font-size="10" fill="var(--trx-text-secondary)"
      >{{ label }}</text>
      <!-- Bars -->
      <template v-if="stacked">
        <template v-for="(group, gi) in stackedBars" :key="gi">
          <rect
            v-for="bar in group" :key="bar.di"
            :x="barX(gi, 0)"
            :y="barY(bar.v, bar.offset)"
            :width="barW"
            :height="barH(bar.v)"
            :fill="datasets[bar.di].color ?? COLORS[bar.di % COLORS.length]"
            rx="2"
          />
        </template>
      </template>
      <template v-else>
        <template v-for="(ds, di) in datasets" :key="di">
          <rect
            v-for="(v, gi) in ds.data" :key="gi"
            :x="barX(gi, di)"
            :y="barY(v)"
            :width="barW"
            :height="barH(v)"
            :fill="ds.color ?? COLORS[di % COLORS.length]"
            rx="2"
          />
          <text
            v-if="showValues"
            v-for="(v, gi) in ds.data" :key="'val' + gi"
            :x="barX(gi, di) + barW / 2"
            :y="barY(v) - 3"
            text-anchor="middle" font-size="9"
            :fill="ds.color ?? COLORS[di % COLORS.length]"
          >{{ v }}</text>
        </template>
      </template>
    </svg>
    <div v-if="datasets.length > 1" class="trx-bar-chart__legend">
      <div v-for="(ds, di) in datasets" :key="di" class="trx-bar-chart__legend-item">
        <span class="trx-bar-chart__legend-dot" :style="{ background: ds.color ?? COLORS[di % COLORS.length] }"></span>
        {{ ds.label }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.trx-bar-chart { width: 100%; }
.trx-bar-chart__legend { display: flex; gap: 1rem; flex-wrap: wrap; justify-content: center; margin-top: 0.5rem; }
.trx-bar-chart__legend-item { display: flex; align-items: center; gap: 0.35rem; font-size: 0.775rem; color: var(--trx-text-secondary); }
.trx-bar-chart__legend-dot { width: 10px; height: 10px; border-radius: 3px; flex-shrink: 0; }
</style>
