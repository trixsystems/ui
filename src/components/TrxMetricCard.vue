<script setup lang="ts">
import { computed } from 'vue'
import TrxSparkline from './TrxSparkline.vue'

const props = withDefaults(defineProps<{
  title: string
  value: string | number
  unit?: string
  change?: number
  changeLabel?: string
  sparklineData?: number[]
  color?: 'primary' | 'success' | 'warning' | 'danger'
  loading?: boolean
}>(), {
  color: 'primary',
})

const colorVar = computed(() => {
  const map: Record<string, string> = {
    primary: 'var(--trx-accent-color)',
    success: 'var(--trx-success-color)',
    warning: 'var(--trx-warning-color)',
    danger:  'var(--trx-danger-color)',
  }
  return map[props.color]
})

const changePositive = computed(() => props.change !== undefined && props.change >= 0)
const changeIcon = computed(() => {
  if (props.change === undefined) return ''
  if (props.change > 0) return 'pi pi-arrow-up'
  if (props.change < 0) return 'pi pi-arrow-down'
  return 'pi pi-minus'
})
</script>

<template>
  <div class="trx-metric-card" :class="`trx-metric-card--${color}`">
    <div class="trx-metric-card__main">
      <p class="trx-metric-card__title">{{ title }}</p>
      <div class="trx-metric-card__value-row">
        <span v-if="loading" class="trx-metric-card__skeleton"></span>
        <template v-else>
          <span class="trx-metric-card__value" :style="{ color: colorVar }">{{ value }}</span>
          <span v-if="unit" class="trx-metric-card__unit">{{ unit }}</span>
        </template>
      </div>
      <div v-if="change !== undefined" class="trx-metric-card__change" :class="changePositive ? 'trx-metric-card__change--up' : 'trx-metric-card__change--down'">
        <i :class="changeIcon"></i>
        <span>{{ Math.abs(change) }}%</span>
        <span v-if="changeLabel" class="trx-metric-card__change-label">{{ changeLabel }}</span>
      </div>
    </div>
    <div v-if="sparklineData?.length" class="trx-metric-card__chart">
      <TrxSparkline :data="sparklineData" :width="80" :height="40" :color="colorVar" />
    </div>
  </div>
</template>

<style scoped>
.trx-metric-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  background: var(--trx-bg-card);
  border: 1px solid var(--trx-border-color);
  border-radius: 12px;
  padding: 1rem 1.25rem;
  transition: all 0.2s;
}

.trx-metric-card:hover { box-shadow: var(--trx-shadow-md); transform: translateY(-1px); }

.trx-metric-card__main { flex: 1; min-width: 0; }
.trx-metric-card__title { font-size: 0.8rem; color: var(--trx-text-secondary); margin: 0 0 0.25rem; }

.trx-metric-card__value-row { display: flex; align-items: baseline; gap: 0.25rem; }

.trx-metric-card__value { font-size: 1.75rem; font-weight: 700; line-height: 1.2; }

.trx-metric-card__unit { font-size: 0.8rem; color: var(--trx-text-secondary); }

.trx-metric-card__skeleton {
  display: block;
  height: 2rem;
  width: 80px;
  background: linear-gradient(90deg, var(--trx-bg-secondary) 25%, var(--trx-border-color) 50%, var(--trx-bg-secondary) 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: 4px;
}

@keyframes shimmer { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }

.trx-metric-card__change {
  display: inline-flex;
  align-items: center;
  gap: 0.2rem;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.15rem 0.4rem;
  border-radius: 12px;
  margin-top: 0.4rem;
}

.trx-metric-card__change--up { background: rgba(16,185,129,0.1); color: var(--trx-success-color); }
.trx-metric-card__change--down { background: rgba(239,68,68,0.1); color: var(--trx-danger-color); }

.trx-metric-card__change i { font-size: 0.65em; }
.trx-metric-card__change-label { font-weight: 400; opacity: 0.8; }
</style>
