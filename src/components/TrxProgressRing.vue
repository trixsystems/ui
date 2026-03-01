<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  value?: number
  max?: number
  size?: number
  thickness?: number
  color?: string
  trackColor?: string
  label?: string
  showValue?: boolean
  unit?: string
  animate?: boolean
}>(), {
  value: 0,
  max: 100,
  size: 80,
  thickness: 8,
  color: 'var(--trx-accent-color)',
  trackColor: 'var(--trx-bg-secondary)',
  showValue: true,
  animate: true,
})

const pct = computed(() => Math.min(1, Math.max(0, (props.value ?? 0) / props.max)))
const r   = computed(() => (props.size / 2) - (props.thickness / 2))
const circ = computed(() => 2 * Math.PI * r.value)
const dash = computed(() => pct.value * circ.value)
const gap  = computed(() => circ.value - dash.value)
const displayValue = computed(() => Math.round(pct.value * props.max))
</script>

<template>
  <div class="trx-progress-ring" :style="{ width: `${size}px`, height: `${size}px` }">
    <svg :width="size" :height="size" :viewBox="`0 0 ${size} ${size}`">
      <circle
        :cx="size / 2" :cy="size / 2" :r="r"
        fill="none" :stroke="trackColor" :stroke-width="thickness"
      />
      <circle
        class="trx-progress-ring__arc"
        :cx="size / 2" :cy="size / 2" :r="r"
        fill="none" :stroke="color" :stroke-width="thickness"
        stroke-linecap="round"
        :stroke-dasharray="`${dash} ${gap}`"
        :stroke-dashoffset="0"
        transform="rotate(-90)"
        :style="{
          transformOrigin: 'center',
          transition: animate ? 'stroke-dasharray 0.5s ease' : 'none',
        }"
      />
    </svg>
    <div class="trx-progress-ring__label">
      <span v-if="showValue" class="trx-progress-ring__value" :style="{ color }">
        {{ displayValue }}<span v-if="unit" class="trx-progress-ring__unit">{{ unit }}</span>
      </span>
      <span v-if="label" class="trx-progress-ring__text">{{ label }}</span>
    </div>
  </div>
</template>

<style scoped>
.trx-progress-ring { position: relative; display: inline-flex; align-items: center; justify-content: center; }
.trx-progress-ring svg { position: absolute; top: 0; left: 0; }
.trx-progress-ring__label {
  display: flex; flex-direction: column; align-items: center; gap: 0.1rem;
  z-index: 1;
}
.trx-progress-ring__value { font-size: calc(v-bind(size) * 0.2px); font-weight: 700; line-height: 1; }
.trx-progress-ring__unit { font-size: 0.7em; }
.trx-progress-ring__text { font-size: calc(v-bind(size) * 0.13px); color: var(--trx-text-secondary); }
</style>
