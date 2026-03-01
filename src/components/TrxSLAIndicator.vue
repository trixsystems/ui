<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  deadline?: string | Date
  createdAt?: string | Date
  warningThreshold?: number
  label?: string
  showProgress?: boolean
}>(), {
  warningThreshold: 0.7,
  showProgress: true,
})

const now = () => Date.now()

function toMs(d?: string | Date) {
  if (!d) return 0
  return new Date(d).getTime()
}

const total = computed(() => toMs(props.deadline) - toMs(props.createdAt))
const elapsed = computed(() => now() - toMs(props.createdAt))
const remaining = computed(() => Math.max(0, toMs(props.deadline) - now()))
const pct = computed(() => Math.min(1, total.value > 0 ? elapsed.value / total.value : 0))

const breached = computed(() => remaining.value === 0)
const warning  = computed(() => !breached.value && pct.value >= props.warningThreshold)

const color = computed(() => {
  if (breached.value) return 'var(--trx-danger-color)'
  if (warning.value) return 'var(--trx-warning-color)'
  return 'var(--trx-success-color)'
})

function formatRemaining(ms: number) {
  if (ms <= 0) return 'Vencido'
  const h = Math.floor(ms / 3600000)
  const m = Math.floor((ms % 3600000) / 60000)
  if (h > 0) return `${h}h ${m}m`
  return `${m}m`
}
</script>

<template>
  <div class="trx-sla" :style="{ '--sla-color': color }">
    <div class="trx-sla__header">
      <span class="trx-sla__label">{{ label ?? 'SLA' }}</span>
      <span class="trx-sla__time" :class="{ 'trx-sla__time--breached': breached }">
        <i :class="breached ? 'pi pi-times-circle' : warning ? 'pi pi-exclamation-triangle' : 'pi pi-clock'"></i>
        {{ formatRemaining(remaining) }}
      </span>
    </div>
    <div v-if="showProgress" class="trx-sla__bar">
      <div class="trx-sla__fill" :style="{ width: `${pct * 100}%` }"></div>
    </div>
  </div>
</template>

<style scoped>
.trx-sla { display: flex; flex-direction: column; gap: 0.3rem; }
.trx-sla__header { display: flex; align-items: center; justify-content: space-between; gap: 0.5rem; }
.trx-sla__label { font-size: 0.75rem; color: var(--trx-text-secondary); font-weight: 500; }
.trx-sla__time { display: flex; align-items: center; gap: 0.3rem; font-size: 0.8rem; font-weight: 600; color: var(--sla-color); }
.trx-sla__time--breached { animation: pulse 1s ease-in-out infinite; }
@keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
.trx-sla__bar { height: 4px; background: var(--trx-bg-secondary); border-radius: 2px; overflow: hidden; }
.trx-sla__fill { height: 100%; background: var(--sla-color); border-radius: 2px; transition: width 1s linear; }
</style>
