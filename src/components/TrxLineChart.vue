<script setup lang="ts">
import { computed } from 'vue'

export interface TrxLineDataset {
  label: string
  data: number[]
  color?: string
}

const COLORS = ['var(--trx-accent-color)', '#60a5fa', '#f472b6', '#fb923c', '#a78bfa']

const props = withDefaults(defineProps<{
  labels?: string[]
  datasets?: TrxLineDataset[]
  height?: number
  showDots?: boolean
  showGrid?: boolean
  filled?: boolean
  smooth?: boolean
}>(), {
  labels: () => [],
  datasets: () => [],
  height: 200,
  showDots: true,
  showGrid: true,
  filled: false,
  smooth: true,
})

const W = 600
const PAD = { top: 16, right: 16, bottom: 32, left: 40 }
const chartW = computed(() => W - PAD.left - PAD.right)
const chartH = computed(() => props.height - PAD.top - PAD.bottom)

const allValues = computed(() => props.datasets.flatMap(d => d.data))
const minV = computed(() => Math.min(...allValues.value, 0))
const maxV = computed(() => Math.max(...allValues.value, 1))

function scaleX(i: number) {
  const n = props.labels.length - 1 || 1
  return PAD.left + (i / n) * chartW.value
}
function scaleY(v: number) {
  return PAD.top + chartH.value - ((v - minV.value) / (maxV.value - minV.value)) * chartH.value
}

function buildPath(data: number[], fill: boolean) {
  if (!data.length) return ''
  const pts = data.map((v, i) => [scaleX(i), scaleY(v)] as [number, number])
  let d = `M ${pts[0][0]} ${pts[0][1]}`
  if (props.smooth) {
    for (let i = 1; i < pts.length; i++) {
      const cx = (pts[i - 1][0] + pts[i][0]) / 2
      d += ` C ${cx} ${pts[i - 1][1]} ${cx} ${pts[i][1]} ${pts[i][0]} ${pts[i][1]}`
    }
  } else {
    pts.slice(1).forEach(([x, y]) => { d += ` L ${x} ${y}` })
  }
  if (fill) {
    const lastX = pts[pts.length - 1][0]
    const baseY = PAD.top + chartH.value
    d += ` L ${lastX} ${baseY} L ${pts[0][0]} ${baseY} Z`
  }
  return d
}

const yTicks = computed(() => {
  const count = 4
  return Array.from({ length: count + 1 }, (_, i) => {
    const v = minV.value + (i / count) * (maxV.value - minV.value)
    return { v: Math.round(v), y: scaleY(v) }
  })
})
</script>

<template>
  <div class="trx-line-chart">
    <svg :viewBox="`0 0 ${W} ${height}`" :height="height" preserveAspectRatio="none" style="width:100%">
      <!-- Grid -->
      <template v-if="showGrid">
        <line
          v-for="tick in yTicks"
          :key="tick.v"
          :x1="PAD.left" :y1="tick.y"
          :x2="PAD.left + chartW" :y2="tick.y"
          stroke="var(--trx-border-color)" stroke-width="1"
        />
      </template>
      <!-- Y labels -->
      <text
        v-for="tick in yTicks"
        :key="'l' + tick.v"
        :x="PAD.left - 6" :y="tick.y + 4"
        text-anchor="end" font-size="10" fill="var(--trx-text-secondary)"
      >{{ tick.v }}</text>
      <!-- X labels -->
      <text
        v-for="(label, i) in labels"
        :key="'x' + i"
        :x="scaleX(i)" :y="PAD.top + chartH + 18"
        text-anchor="middle" font-size="10" fill="var(--trx-text-secondary)"
      >{{ label }}</text>
      <!-- Datasets -->
      <template v-for="(ds, di) in datasets" :key="di">
        <defs v-if="filled">
          <linearGradient :id="`fill-${di}`" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" :stop-color="ds.color ?? COLORS[di % COLORS.length]" stop-opacity="0.25"/>
            <stop offset="100%" :stop-color="ds.color ?? COLORS[di % COLORS.length]" stop-opacity="0.02"/>
          </linearGradient>
        </defs>
        <path
          v-if="filled"
          :d="buildPath(ds.data, true)"
          :fill="`url(#fill-${di})`" stroke="none"
        />
        <path
          :d="buildPath(ds.data, false)"
          :stroke="ds.color ?? COLORS[di % COLORS.length]"
          stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"
        />
        <circle
          v-if="showDots"
          v-for="(v, i) in ds.data"
          :key="i"
          :cx="scaleX(i)" :cy="scaleY(v)" r="3"
          :fill="ds.color ?? COLORS[di % COLORS.length]"
        />
      </template>
    </svg>
    <!-- Legend -->
    <div v-if="datasets.length > 1" class="trx-line-chart__legend">
      <div v-for="(ds, di) in datasets" :key="di" class="trx-line-chart__legend-item">
        <span class="trx-line-chart__legend-dot" :style="{ background: ds.color ?? COLORS[di % COLORS.length] }"></span>
        <span>{{ ds.label }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.trx-line-chart { width: 100%; }
.trx-line-chart__legend { display: flex; gap: 1rem; flex-wrap: wrap; justify-content: center; margin-top: 0.5rem; }
.trx-line-chart__legend-item { display: flex; align-items: center; gap: 0.35rem; font-size: 0.775rem; color: var(--trx-text-secondary); }
.trx-line-chart__legend-dot { width: 10px; height: 10px; border-radius: 50%; flex-shrink: 0; }
</style>
