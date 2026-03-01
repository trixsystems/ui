<script setup lang="ts">
import { computed } from 'vue'

export interface TrxRadarDataset {
  label: string
  data: number[]
  color?: string
}

const COLORS = ['var(--trx-accent-color)', '#f472b6', '#60a5fa', '#fb923c']

const props = withDefaults(defineProps<{
  axes?: string[]
  datasets?: TrxRadarDataset[]
  size?: number
  max?: number
  levels?: number
  filled?: boolean
}>(), {
  axes: () => [],
  datasets: () => [],
  size: 260,
  max: 100,
  levels: 4,
  filled: true,
})

const CX = computed(() => props.size / 2)
const CY = computed(() => props.size / 2)
const R = computed(() => props.size / 2 - 24)

function angleFor(i: number) {
  return (Math.PI * 2 * i) / props.axes.length - Math.PI / 2
}

function pointOnRing(level: number, i: number) {
  const r = (level / props.levels) * R.value
  const a = angleFor(i)
  return [CX.value + r * Math.cos(a), CY.value + r * Math.sin(a)]
}

function labelPoint(i: number) {
  const r = R.value + 14
  const a = angleFor(i)
  return [CX.value + r * Math.cos(a), CY.value + r * Math.sin(a)]
}

function dataPath(data: number[]) {
  return data.map((v, i) => {
    const r = (Math.min(v, props.max) / props.max) * R.value
    const a = angleFor(i)
    return [CX.value + r * Math.cos(a), CY.value + r * Math.sin(a)]
  })
}

function toSVGPath(points: number[][]) {
  return points.map((p, i) => `${i === 0 ? 'M' : 'L'}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ') + ' Z'
}

const levelRings = computed(() =>
  Array.from({ length: props.levels }, (_, i) =>
    props.axes.map((_, ai) => pointOnRing(i + 1, ai))
  )
)
</script>

<template>
  <div class="trx-radar">
    <svg :width="size" :height="size" :viewBox="`0 0 ${size} ${size}`" style="width:100%;max-width:100%">
      <!-- Level rings -->
      <polygon
        v-for="(ring, ri) in levelRings"
        :key="ri"
        :points="ring.map(p => p.join(',')).join(' ')"
        fill="none"
        stroke="var(--trx-border-color)"
        stroke-width="1"
      />
      <!-- Axis lines -->
      <line
        v-for="(_, i) in axes"
        :key="i"
        :x1="CX" :y1="CY"
        :x2="pointOnRing(levels, i)[0]" :y2="pointOnRing(levels, i)[1]"
        stroke="var(--trx-border-color)" stroke-width="1"
      />
      <!-- Axis labels -->
      <text
        v-for="(ax, i) in axes"
        :key="'l'+i"
        :x="labelPoint(i)[0]" :y="labelPoint(i)[1]"
        text-anchor="middle" dominant-baseline="middle"
        font-size="10" fill="var(--trx-text-secondary)"
      >{{ ax }}</text>
      <!-- Datasets -->
      <g v-for="(ds, di) in datasets" :key="di">
        <path
          v-if="filled"
          :d="toSVGPath(dataPath(ds.data))"
          :fill="ds.color ?? COLORS[di % COLORS.length]"
          fill-opacity="0.15"
        />
        <path
          :d="toSVGPath(dataPath(ds.data))"
          fill="none"
          :stroke="ds.color ?? COLORS[di % COLORS.length]"
          stroke-width="2"
          stroke-linejoin="round"
        />
        <circle
          v-for="(_, pi) in ds.data"
          :key="pi"
          :cx="dataPath(ds.data)[pi][0]" :cy="dataPath(ds.data)[pi][1]"
          r="3" :fill="ds.color ?? COLORS[di % COLORS.length]"
        />
      </g>
    </svg>
    <div v-if="datasets.length > 1" class="trx-radar__legend">
      <div v-for="(ds, di) in datasets" :key="di" class="trx-radar__legend-item">
        <span class="trx-radar__legend-dot" :style="{ background: ds.color ?? COLORS[di % COLORS.length] }"></span>
        {{ ds.label }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.trx-radar { display: flex; flex-direction: column; align-items: center; }
.trx-radar__legend { display: flex; gap: 1rem; flex-wrap: wrap; justify-content: center; margin-top: 0.5rem; }
.trx-radar__legend-item { display: flex; align-items: center; gap: 0.35rem; font-size: 0.775rem; color: var(--trx-text-secondary); }
.trx-radar__legend-dot { width: 10px; height: 10px; border-radius: 50%; flex-shrink: 0; }
</style>
