<script setup lang="ts">
import { computed } from 'vue'

export interface TrxHeatmapCell {
  day: number
  hour: number
  value: number
}

const props = withDefaults(defineProps<{
  data: TrxHeatmapCell[]
  maxValue?: number
  cellSize?: number
  showLabels?: boolean
  days?: string[]
}>(), {
  cellSize: 20,
  showLabels: true,
  days: () => ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb'],
})

const hours = Array.from({ length: 24 }, (_, i) => i)

const max = computed(() => props.maxValue ?? Math.max(1, ...props.data.map(d => d.value)))

function getCell(day: number, hour: number) {
  return props.data.find(d => d.day === day && d.hour === hour)
}

function opacity(val: number) {
  return Math.max(0.05, val / max.value)
}

function label(h: number) {
  if (h === 0 || h === 6 || h === 12 || h === 18 || h === 23) return `${h}h`
  return ''
}
</script>

<template>
  <div class="trx-heatmap">
    <div v-if="showLabels" class="trx-heatmap__hour-labels">
      <div class="trx-heatmap__corner"></div>
      <div
        v-for="h in hours"
        :key="h"
        class="trx-heatmap__hour-label"
        :style="{ width: `${cellSize}px` }"
      >{{ label(h) }}</div>
    </div>

    <div class="trx-heatmap__grid">
      <div v-for="(dayLabel, d) in days" :key="d" class="trx-heatmap__row">
        <div v-if="showLabels" class="trx-heatmap__day-label">{{ dayLabel }}</div>
        <div
          v-for="h in hours"
          :key="h"
          class="trx-heatmap__cell"
          :style="{
            width: `${cellSize}px`,
            height: `${cellSize}px`,
            opacity: opacity(getCell(d, h)?.value ?? 0),
          }"
          :title="`${dayLabel} ${h}h: ${getCell(d, h)?.value ?? 0}`"
        ></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.trx-heatmap { display: inline-flex; flex-direction: column; gap: 2px; overflow-x: auto; }

.trx-heatmap__hour-labels {
  display: flex;
  align-items: flex-end;
  gap: 2px;
  padding-left: 40px;
  margin-bottom: 2px;
}

.trx-heatmap__hour-label {
  font-size: 0.6rem;
  color: var(--trx-text-secondary);
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
}

.trx-heatmap__grid { display: flex; flex-direction: column; gap: 2px; }
.trx-heatmap__row { display: flex; align-items: center; gap: 2px; }

.trx-heatmap__day-label {
  width: 36px;
  font-size: 0.65rem;
  color: var(--trx-text-secondary);
  text-align: right;
  padding-right: 4px;
  white-space: nowrap;
}

.trx-heatmap__cell {
  background: var(--trx-accent-color);
  border-radius: 2px;
  cursor: default;
  transition: opacity 0.15s;
  flex-shrink: 0;
}

.trx-heatmap__cell:hover { outline: 1px solid var(--trx-accent-color); opacity: 1 !important; }
</style>
