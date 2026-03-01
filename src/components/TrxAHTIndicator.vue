<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  value?: number   // seconds - current AHT
  target?: number  // seconds - goal
  label?: string
  showBreakdown?: boolean
  talkTime?: number
  holdTime?: number
  acwTime?: number
}>(), {
  value: 0,
  target: 180,
  label: 'TMA',
  showBreakdown: false,
})

function fmt(s: number) {
  const m = Math.floor(s / 60); const sec = s % 60
  return `${String(m).padStart(2,'0')}:${String(sec).padStart(2,'0')}`
}

const pct = computed(() => Math.min((props.value / (props.target || 1)) * 100, 200))
const color = computed(() => {
  if (pct.value <= 80) return 'var(--trx-success-color)'
  if (pct.value <= 110) return 'var(--trx-warning-color)'
  return 'var(--trx-danger-color)'
})
const delta = computed(() => props.value - props.target)
</script>

<template>
  <div class="trx-aht">
    <div class="trx-aht__header">
      <span class="trx-aht__label">{{ label }}</span>
      <span class="trx-aht__target">Meta: {{ fmt(target) }}</span>
    </div>
    <div class="trx-aht__value-row">
      <span class="trx-aht__value" :style="{ color }">{{ fmt(value) }}</span>
      <span class="trx-aht__delta" :class="delta > 0 ? 'over' : 'under'">
        <i :class="delta > 0 ? 'pi pi-arrow-up' : 'pi pi-arrow-down'"></i>
        {{ fmt(Math.abs(delta)) }}
      </span>
    </div>
    <div class="trx-aht__bar-wrap">
      <div class="trx-aht__bar" :style="{ width: Math.min(pct, 100) + '%', background: color }"></div>
      <div class="trx-aht__target-line" :style="{ left: '100%' }"></div>
      <div v-if="pct > 100" class="trx-aht__over-bar" :style="{ width: (pct - 100) + '%', background: 'var(--trx-danger-color)', opacity: 0.4 }"></div>
    </div>
    <div v-if="showBreakdown" class="trx-aht__breakdown">
      <div v-if="talkTime !== undefined" class="trx-aht__seg">
        <i class="pi pi-phone"></i>
        <span>Fala</span>
        <span class="trx-aht__seg-val">{{ fmt(talkTime) }}</span>
      </div>
      <div v-if="holdTime !== undefined" class="trx-aht__seg">
        <i class="pi pi-pause"></i>
        <span>Hold</span>
        <span class="trx-aht__seg-val">{{ fmt(holdTime) }}</span>
      </div>
      <div v-if="acwTime !== undefined" class="trx-aht__seg">
        <i class="pi pi-file-edit"></i>
        <span>ACW</span>
        <span class="trx-aht__seg-val">{{ fmt(acwTime) }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.trx-aht { width: 100%; }
.trx-aht__header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.3rem; }
.trx-aht__label { font-size: 0.775rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: var(--trx-text-secondary); }
.trx-aht__target { font-size: 0.725rem; color: var(--trx-text-secondary); }
.trx-aht__value-row { display: flex; align-items: baseline; gap: 0.5rem; margin-bottom: 0.4rem; }
.trx-aht__value { font-size: 1.6rem; font-weight: 800; font-family: monospace; }
.trx-aht__delta { font-size: 0.775rem; font-weight: 600; display: flex; align-items: center; gap: 0.2rem; }
.trx-aht__delta.over { color: var(--trx-danger-color); }
.trx-aht__delta.under { color: var(--trx-success-color); }
.trx-aht__bar-wrap { height: 6px; background: var(--trx-bg-secondary); border-radius: 3px; overflow: hidden; margin-bottom: 0.5rem; position: relative; display: flex; }
.trx-aht__bar { height: 100%; border-radius: 3px 0 0 3px; transition: width 0.4s ease; flex-shrink: 0; }
.trx-aht__breakdown { display: flex; gap: 1rem; flex-wrap: wrap; }
.trx-aht__seg { display: flex; align-items: center; gap: 0.3rem; font-size: 0.775rem; color: var(--trx-text-secondary); }
.trx-aht__seg-val { font-weight: 700; color: var(--trx-text-primary); font-family: monospace; }
</style>
