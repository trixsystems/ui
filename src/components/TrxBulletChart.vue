<script setup lang="ts">
export interface TrxBulletItem {
  label: string
  value: number
  target: number
  max?: number
  ranges?: [number, number, number] // poor, satisfactory, good thresholds
  color?: string
}

withDefaults(defineProps<{
  items?: TrxBulletItem[]
  height?: number
  unit?: string
  showLabels?: boolean
}>(), {
  items: () => [],
  height: 20,
  showLabels: true,
})

function pct(v: number, max: number) { return Math.min((v / max) * 100, 100) }
function getMax(item: TrxBulletItem) { return item.max ?? item.target * 1.5 }
function getColor(item: TrxBulletItem) { return item.color ?? 'var(--trx-accent-color)' }
</script>

<template>
  <div class="trx-bullet">
    <div v-for="item in items" :key="item.label" class="trx-bullet__row">
      <div v-if="showLabels" class="trx-bullet__label">{{ item.label }}</div>
      <div class="trx-bullet__chart" :style="{ height: height + 'px' }">
        <!-- Range bands -->
        <div class="trx-bullet__range trx-bullet__range--poor" :style="{ width: item.ranges ? pct(item.ranges[0], getMax(item)) + '%' : '33%' }"></div>
        <div class="trx-bullet__range trx-bullet__range--ok" :style="{ width: item.ranges ? pct(item.ranges[1], getMax(item)) + '%' : '66%' }"></div>
        <div class="trx-bullet__range trx-bullet__range--good" style="width:100%"></div>
        <!-- Value bar -->
        <div class="trx-bullet__value-bar" :style="{ width: pct(item.value, getMax(item)) + '%', background: getColor(item) }"></div>
        <!-- Target line -->
        <div class="trx-bullet__target-line" :style="{ left: pct(item.target, getMax(item)) + '%' }"></div>
      </div>
      <div class="trx-bullet__values">
        <span class="trx-bullet__val">{{ item.value }}{{ unit }}</span>
        <span class="trx-bullet__tgt">/ {{ item.target }}{{ unit }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.trx-bullet { display: flex; flex-direction: column; gap: 0.75rem; }
.trx-bullet__row { display: flex; align-items: center; gap: 0.75rem; }
.trx-bullet__label { font-size: 0.8rem; color: var(--trx-text-secondary); min-width: 80px; text-align: right; flex-shrink: 0; }
.trx-bullet__chart { flex: 1; position: relative; border-radius: 4px; overflow: hidden; }
.trx-bullet__range { position: absolute; top: 0; left: 0; height: 100%; }
.trx-bullet__range--poor { background: color-mix(in srgb, var(--trx-danger-color) 15%, transparent); }
.trx-bullet__range--ok { background: color-mix(in srgb, var(--trx-warning-color) 12%, transparent); }
.trx-bullet__range--good { background: color-mix(in srgb, var(--trx-success-color) 10%, transparent); }
.trx-bullet__value-bar { position: absolute; top: 25%; height: 50%; border-radius: 2px; transition: width 0.4s ease; }
.trx-bullet__target-line { position: absolute; top: 10%; height: 80%; width: 2px; background: var(--trx-text-primary); transform: translateX(-50%); border-radius: 1px; }
.trx-bullet__values { display: flex; align-items: baseline; gap: 0.2rem; flex-shrink: 0; }
.trx-bullet__val { font-size: 0.85rem; font-weight: 700; color: var(--trx-text-primary); font-family: monospace; }
.trx-bullet__tgt { font-size: 0.7rem; color: var(--trx-text-secondary); }
</style>
