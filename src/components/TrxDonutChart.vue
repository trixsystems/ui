<script setup lang="ts">
import { computed } from 'vue'

export interface TrxDonutSlice {
  label: string
  value: number
  color?: string
}

const COLORS = ['var(--trx-accent-color)', '#60a5fa', '#f472b6', '#fb923c', '#a78bfa', '#facc15']

const props = withDefaults(defineProps<{
  slices?: TrxDonutSlice[]
  size?: number
  thickness?: number
  label?: string
  sublabel?: string
  showLegend?: boolean
  animated?: boolean
}>(), {
  slices: () => [],
  size: 160,
  thickness: 30,
  showLegend: true,
  animated: true,
})

const CX = computed(() => props.size / 2)
const CY = computed(() => props.size / 2)
const R = computed(() => (props.size - props.thickness) / 2)
const C = computed(() => 2 * Math.PI * R.value)

const total = computed(() => props.slices.reduce((s, sl) => s + sl.value, 0) || 1)

const segments = computed(() => {
  let offset = 0
  return props.slices.map((sl, i) => {
    const pct = sl.value / total.value
    const dash = pct * C.value
    const gap = C.value - dash
    const seg = { ...sl, dash, gap, offset, color: sl.color ?? COLORS[i % COLORS.length], pct: Math.round(pct * 100) }
    offset += dash
    return seg
  })
})
</script>

<template>
  <div class="trx-donut">
    <div class="trx-donut__chart">
      <svg :width="size" :height="size" :viewBox="`0 0 ${size} ${size}`">
        <!-- Background ring -->
        <circle
          :cx="CX" :cy="CY" :r="R"
          fill="none" stroke="var(--trx-bg-secondary)"
          :stroke-width="thickness"
        />
        <!-- Segments -->
        <circle
          v-for="(seg, i) in segments"
          :key="i"
          :cx="CX" :cy="CY" :r="R"
          fill="none"
          :stroke="seg.color"
          :stroke-width="thickness"
          :stroke-dasharray="`${seg.dash} ${seg.gap}`"
          :stroke-dashoffset="-(seg.offset - C / 4)"
          stroke-linecap="butt"
          :style="animated ? { transition: 'stroke-dasharray 0.6s ease' } : {}"
        />
        <!-- Center label -->
        <text :x="CX" :y="CY - (sublabel ? 8 : 4)" text-anchor="middle" font-size="14" font-weight="700" fill="var(--trx-text-primary)">
          {{ label ?? total.toLocaleString('pt-BR') }}
        </text>
        <text v-if="sublabel" :x="CX" :y="CY + 14" text-anchor="middle" font-size="10" fill="var(--trx-text-secondary)">
          {{ sublabel }}
        </text>
      </svg>
    </div>
    <div v-if="showLegend" class="trx-donut__legend">
      <div v-for="(seg, i) in segments" :key="i" class="trx-donut__legend-item">
        <span class="trx-donut__legend-dot" :style="{ background: seg.color }"></span>
        <span class="trx-donut__legend-label">{{ seg.label }}</span>
        <span class="trx-donut__legend-pct">{{ seg.pct }}%</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.trx-donut { display: flex; align-items: center; gap: 1.5rem; flex-wrap: wrap; }
.trx-donut__chart { flex-shrink: 0; }
.trx-donut__legend { display: flex; flex-direction: column; gap: 0.4rem; }
.trx-donut__legend-item { display: flex; align-items: center; gap: 0.4rem; font-size: 0.8rem; }
.trx-donut__legend-dot { width: 10px; height: 10px; border-radius: 50%; flex-shrink: 0; }
.trx-donut__legend-label { color: var(--trx-text-primary); flex: 1; }
.trx-donut__legend-pct { color: var(--trx-text-secondary); font-weight: 600; font-size: 0.75rem; }
</style>
