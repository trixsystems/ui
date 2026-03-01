<script setup lang="ts">
import { computed } from 'vue'

export interface TrxWaterfallItem {
  label: string
  value: number       // positive = increase, negative = decrease
  isTotal?: boolean   // renders as standalone bar
}

const props = withDefaults(defineProps<{
  items?: TrxWaterfallItem[]
  height?: number
  unit?: string
  positiveColor?: string
  negativeColor?: string
  totalColor?: string
}>(), {
  items: () => [],
  height: 220,
  positiveColor: 'var(--trx-success-color)',
  negativeColor: 'var(--trx-danger-color)',
  totalColor: 'var(--trx-accent-color)',
})

const W = 600
const PAD = { top: 20, right: 16, bottom: 36, left: 50 }
const chartW = computed(() => W - PAD.left - PAD.right)
const chartH = computed(() => props.height - PAD.top - PAD.bottom)

const enriched = computed(() => {
  let running = 0
  return props.items.map(item => {
    if (item.isTotal) {
      const total = running + item.value
      const e = { ...item, start: 0, end: total, running }
      return e
    }
    const start = running
    running += item.value
    return { ...item, start, end: running, running }
  })
})

const allVals = computed(() => enriched.value.flatMap(e => [e.start, e.end]))
const minV = computed(() => Math.min(...allVals.value, 0))
const maxV = computed(() => Math.max(...allVals.value, 1))

const barW = computed(() => (chartW.value / props.items.length) * 0.6)

function scaleY(v: number) {
  return PAD.top + chartH.value - ((v - minV.value) / (maxV.value - minV.value)) * chartH.value
}

function barX(i: number) {
  const slotW = chartW.value / props.items.length
  return PAD.left + i * slotW + (slotW - barW.value) / 2
}

const yTicks = computed(() =>
  Array.from({ length: 5 }, (_, i) => {
    const v = minV.value + (i / 4) * (maxV.value - minV.value)
    return { v: Math.round(v), y: scaleY(v) }
  })
)
</script>

<template>
  <div class="trx-waterfall">
    <svg :viewBox="`0 0 ${W} ${height}`" :height="height" preserveAspectRatio="none" style="width:100%">
      <!-- Grid -->
      <line v-for="t in yTicks" :key="t.v" :x1="PAD.left" :y1="t.y" :x2="PAD.left + chartW" :y2="t.y" stroke="var(--trx-border-color)" stroke-width="1"/>
      <!-- Y labels -->
      <text v-for="t in yTicks" :key="'l'+t.v" :x="PAD.left - 6" :y="t.y + 4" text-anchor="end" font-size="10" fill="var(--trx-text-secondary)">{{ t.v }}</text>
      <!-- Zero line -->
      <line :x1="PAD.left" :y1="scaleY(0)" :x2="PAD.left + chartW" :y2="scaleY(0)" stroke="var(--trx-text-secondary)" stroke-width="1.5"/>
      <!-- Bars -->
      <g v-for="(e, i) in enriched" :key="i">
        <rect
          :x="barX(i)"
          :y="Math.min(scaleY(e.start), scaleY(e.end))"
          :width="barW"
          :height="Math.abs(scaleY(e.start) - scaleY(e.end))"
          :fill="e.isTotal ? totalColor : e.value >= 0 ? positiveColor : negativeColor"
          rx="2"
        />
        <!-- Connector line (not for last or total) -->
        <line
          v-if="i < enriched.length - 1 && !e.isTotal && !enriched[i+1].isTotal"
          :x1="barX(i) + barW"
          :y1="scaleY(e.end)"
          :x2="barX(i + 1)"
          :y2="scaleY(e.end)"
          stroke="var(--trx-border-color)"
          stroke-width="1"
          stroke-dasharray="3,3"
        />
        <!-- X label -->
        <text :x="barX(i) + barW / 2" :y="PAD.top + chartH + 18" text-anchor="middle" font-size="10" fill="var(--trx-text-secondary)">{{ e.label }}</text>
        <!-- Value -->
        <text
          :x="barX(i) + barW / 2"
          :y="Math.min(scaleY(e.start), scaleY(e.end)) - 4"
          text-anchor="middle" font-size="9"
          :fill="e.isTotal ? totalColor : e.value >= 0 ? positiveColor : negativeColor"
        >{{ e.value > 0 ? '+' : '' }}{{ e.value }}</text>
      </g>
    </svg>
  </div>
</template>

<style scoped>
.trx-waterfall { width: 100%; }
</style>
