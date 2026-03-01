<script setup lang="ts">
import { computed } from 'vue'

export interface TrxPieSlice { label: string; value: number; color?: string }

const COLORS = ['var(--trx-accent-color)', '#60a5fa', '#f472b6', '#fb923c', '#a78bfa', '#facc15', '#34d399', '#f87171']

const props = withDefaults(defineProps<{
  slices?: TrxPieSlice[]
  size?: number
  showLegend?: boolean
  showLabels?: boolean
}>(), {
  slices: () => [],
  size: 180,
  showLegend: true,
  showLabels: false,
})

const CX = computed(() => props.size / 2)
const CY = computed(() => props.size / 2)
const R = computed(() => props.size / 2 - 4)

const total = computed(() => props.slices.reduce((s, sl) => s + sl.value, 0) || 1)

const sectors = computed(() => {
  let angle = -Math.PI / 2
  return props.slices.map((sl, i) => {
    const pct = sl.value / total.value
    const sweep = pct * 2 * Math.PI
    const start = angle
    angle += sweep
    const x1 = CX.value + R.value * Math.cos(start)
    const y1 = CY.value + R.value * Math.sin(start)
    const x2 = CX.value + R.value * Math.cos(angle)
    const y2 = CY.value + R.value * Math.sin(angle)
    const largeArc = sweep > Math.PI ? 1 : 0
    const midAngle = start + sweep / 2
    return {
      ...sl,
      color: sl.color ?? COLORS[i % COLORS.length],
      pct: Math.round(pct * 100),
      d: `M ${CX.value} ${CY.value} L ${x1} ${y1} A ${R.value} ${R.value} 0 ${largeArc} 1 ${x2} ${y2} Z`,
      labelX: CX.value + (R.value * 0.65) * Math.cos(midAngle),
      labelY: CY.value + (R.value * 0.65) * Math.sin(midAngle),
    }
  })
})
</script>

<template>
  <div class="trx-pie">
    <svg :width="size" :height="size" :viewBox="`0 0 ${size} ${size}`" style="max-width:100%">
      <path
        v-for="(sec, i) in sectors"
        :key="i"
        :d="sec.d"
        :fill="sec.color"
        stroke="var(--trx-bg-card)"
        stroke-width="2"
      >
        <title>{{ sec.label }}: {{ sec.pct }}%</title>
      </path>
      <text
        v-if="showLabels"
        v-for="(sec, i) in sectors.filter(s => s.pct > 8)"
        :key="'l'+i"
        :x="sec.labelX" :y="sec.labelY"
        text-anchor="middle" dominant-baseline="middle"
        font-size="11" font-weight="700" fill="white"
      >{{ sec.pct }}%</text>
    </svg>
    <div v-if="showLegend" class="trx-pie__legend">
      <div v-for="(sec, i) in sectors" :key="i" class="trx-pie__legend-item">
        <span class="trx-pie__legend-dot" :style="{ background: sec.color }"></span>
        <span class="trx-pie__legend-label">{{ sec.label }}</span>
        <span class="trx-pie__legend-pct">{{ sec.pct }}%</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.trx-pie { display: flex; align-items: center; gap: 1.25rem; flex-wrap: wrap; }
.trx-pie__legend { display: flex; flex-direction: column; gap: 0.35rem; }
.trx-pie__legend-item { display: flex; align-items: center; gap: 0.4rem; font-size: 0.8rem; }
.trx-pie__legend-dot { width: 10px; height: 10px; border-radius: 2px; flex-shrink: 0; }
.trx-pie__legend-label { color: var(--trx-text-primary); flex: 1; }
.trx-pie__legend-pct { color: var(--trx-text-secondary); font-weight: 600; font-size: 0.75rem; }
</style>
