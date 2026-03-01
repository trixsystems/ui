<script setup lang="ts">
import { computed } from 'vue'

export interface TrxScatterPoint { x: number; y: number; label?: string; size?: number }
export interface TrxScatterDataset { label: string; data: TrxScatterPoint[]; color?: string }

const COLORS = ['var(--trx-accent-color)', '#f472b6', '#60a5fa', '#fb923c', '#a78bfa']

const props = withDefaults(defineProps<{
  datasets?: TrxScatterDataset[]
  height?: number
  xLabel?: string
  yLabel?: string
  showGrid?: boolean
  showTooltip?: boolean
}>(), {
  datasets: () => [],
  height: 240,
  showGrid: true,
})

const W = 600
const PAD = { top: 16, right: 16, bottom: 36, left: 44 }
const chartW = computed(() => W - PAD.left - PAD.right)
const chartH = computed(() => props.height - PAD.top - PAD.bottom)

const allX = computed(() => props.datasets.flatMap(d => d.data.map(p => p.x)))
const allY = computed(() => props.datasets.flatMap(d => d.data.map(p => p.y)))
const minX = computed(() => Math.min(...allX.value, 0))
const maxX = computed(() => Math.max(...allX.value, 1))
const minY = computed(() => Math.min(...allY.value, 0))
const maxY = computed(() => Math.max(...allY.value, 1))

function scaleX(v: number) { return PAD.left + ((v - minX.value) / (maxX.value - minX.value)) * chartW.value }
function scaleY(v: number) { return PAD.top + chartH.value - ((v - minY.value) / (maxY.value - minY.value)) * chartH.value }

const xTicks = computed(() => Array.from({ length: 5 }, (_, i) => { const v = minX.value + (i / 4) * (maxX.value - minX.value); return { v: Math.round(v), x: scaleX(v) } }))
const yTicks = computed(() => Array.from({ length: 5 }, (_, i) => { const v = minY.value + (i / 4) * (maxY.value - minY.value); return { v: Math.round(v), y: scaleY(v) } }))
</script>

<template>
  <div class="trx-scatter">
    <svg :viewBox="`0 0 ${W} ${height}`" :height="height" preserveAspectRatio="none" style="width:100%">
      <!-- Grid -->
      <template v-if="showGrid">
        <line v-for="t in yTicks" :key="'gy'+t.v" :x1="PAD.left" :y1="t.y" :x2="PAD.left+chartW" :y2="t.y" stroke="var(--trx-border-color)" stroke-width="1"/>
        <line v-for="t in xTicks" :key="'gx'+t.v" :x1="t.x" :y1="PAD.top" :x2="t.x" :y2="PAD.top+chartH" stroke="var(--trx-border-color)" stroke-width="1"/>
      </template>
      <!-- Axes labels -->
      <text v-for="t in yTicks" :key="'yl'+t.v" :x="PAD.left-6" :y="t.y+4" text-anchor="end" font-size="10" fill="var(--trx-text-secondary)">{{ t.v }}</text>
      <text v-for="t in xTicks" :key="'xl'+t.v" :x="t.x" :y="PAD.top+chartH+18" text-anchor="middle" font-size="10" fill="var(--trx-text-secondary)">{{ t.v }}</text>
      <!-- Datasets -->
      <g v-for="(ds, di) in datasets" :key="di">
        <circle
          v-for="(pt, pi) in ds.data"
          :key="pi"
          :cx="scaleX(pt.x)" :cy="scaleY(pt.y)"
          :r="pt.size ?? 5"
          :fill="ds.color ?? COLORS[di % COLORS.length]"
          fill-opacity="0.8"
        >
          <title v-if="pt.label">{{ pt.label }}: ({{ pt.x }}, {{ pt.y }})</title>
        </circle>
      </g>
      <!-- Axis names -->
      <text v-if="xLabel" :x="PAD.left + chartW/2" :y="height - 2" text-anchor="middle" font-size="10" fill="var(--trx-text-secondary)">{{ xLabel }}</text>
    </svg>
    <div v-if="datasets.length > 1" class="trx-scatter__legend">
      <div v-for="(ds, di) in datasets" :key="di" class="trx-scatter__legend-item">
        <span class="trx-scatter__legend-dot" :style="{ background: ds.color ?? COLORS[di % COLORS.length] }"></span>
        {{ ds.label }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.trx-scatter { width: 100%; }
.trx-scatter__legend { display: flex; gap: 1rem; flex-wrap: wrap; justify-content: center; margin-top: 0.5rem; }
.trx-scatter__legend-item { display: flex; align-items: center; gap: 0.35rem; font-size: 0.775rem; color: var(--trx-text-secondary); }
.trx-scatter__legend-dot { width: 10px; height: 10px; border-radius: 50%; }
</style>
