<script setup lang="ts">
import { computed, ref, watch } from 'vue'

const props = withDefaults(defineProps<{
  value?: number
  previousValue?: number
  label?: string
  unit?: string
  prefix?: string
  decimals?: number
  animate?: boolean
}>(), {
  value: 0,
  decimals: 0,
  animate: true,
})

const direction = ref<'up' | 'down' | 'neutral'>('neutral')
let flashTimer: ReturnType<typeof setTimeout>

watch(() => props.value, (next, prev) => {
  if (next === prev || !props.animate) return
  clearTimeout(flashTimer)
  direction.value = next > prev ? 'up' : 'down'
  flashTimer = setTimeout(() => direction.value = 'neutral', 1500)
})

const formatted = computed(() => {
  const n = props.value ?? 0
  return n.toFixed(props.decimals)
})

const changeColor = computed(() => {
  if (direction.value === 'up') return 'var(--trx-success-color)'
  if (direction.value === 'down') return 'var(--trx-danger-color)'
  return 'var(--trx-text-primary)'
})
</script>

<template>
  <div class="trx-ticker">
    <span v-if="label" class="trx-ticker__label">{{ label }}</span>
    <span class="trx-ticker__value" :class="`trx-ticker__value--${direction}`" :style="{ color: changeColor }">
      <span v-if="prefix">{{ prefix }}</span>{{ formatted }}<span v-if="unit">{{ unit }}</span>
    </span>
  </div>
</template>

<style scoped>
.trx-ticker { display: inline-flex; flex-direction: column; gap: 0.15rem; }
.trx-ticker__label { font-size: 0.75rem; color: var(--trx-text-secondary); }
.trx-ticker__value { font-size: 1.25rem; font-weight: 700; font-family: monospace; transition: color 0.3s; }
.trx-ticker__value--up { animation: tick-up 0.3s ease; }
.trx-ticker__value--down { animation: tick-down 0.3s ease; }
@keyframes tick-up   { 0% { transform: translateY(4px); opacity: 0.5; } 100% { transform: translateY(0); opacity: 1; } }
@keyframes tick-down { 0% { transform: translateY(-4px); opacity: 0.5; } 100% { transform: translateY(0); opacity: 1; } }
</style>
