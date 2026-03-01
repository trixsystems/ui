<script setup lang="ts">
import { computed } from 'vue'

export type TrxTrendType = 'up' | 'down' | 'neutral'

const props = withDefaults(
  defineProps<{
    title: string
    value?: string | number
    trend?: string
    trendType?: TrxTrendType
    icon?: string
    loading?: boolean
    /** Cor do ícone: primary | success | warning | danger | info | purple */
    color?: string
  }>(),
  { trendType: 'neutral', color: 'primary' },
)

const trendIcon = computed(() => {
  if (props.trendType === 'up') return 'pi pi-arrow-up'
  if (props.trendType === 'down') return 'pi pi-arrow-down'
  return 'pi pi-minus'
})

const trendClass = computed(() => {
  if (props.trendType === 'up') return 'trx-kpi__trend--up'
  if (props.trendType === 'down') return 'trx-kpi__trend--down'
  return 'trx-kpi__trend--neutral'
})
</script>

<template>
  <div class="trx-kpi">
    <div class="trx-kpi__header">
      <span class="trx-kpi__title">{{ title }}</span>
      <div v-if="icon" :class="['trx-kpi__icon', `trx-kpi__icon--${color}`]">
        <i :class="icon" aria-hidden="true" />
      </div>
    </div>

    <div v-if="loading" class="trx-kpi__skeleton">
      <div class="trx-kpi__skeleton-value" />
      <div class="trx-kpi__skeleton-trend" />
    </div>
    <template v-else>
      <div class="trx-kpi__value">{{ value ?? '—' }}</div>
      <div v-if="trend" :class="['trx-kpi__trend', trendClass]">
        <i :class="trendIcon" aria-hidden="true" />
        <span>{{ trend }}</span>
      </div>
    </template>

    <slot />
  </div>
</template>

<style scoped>
.trx-kpi {
  background: var(--trx-bg-card);
  border: 1px solid var(--trx-border-color);
  border-radius: 16px;
  padding: 1.25rem;
  box-shadow: var(--trx-shadow-sm);
}

.trx-kpi__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.75rem;
}

.trx-kpi__title {
  font-size: 0.8125rem;
  font-weight: 500;
  color: var(--trx-text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.trx-kpi__icon {
  width: 36px;
  height: 36px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
}
.trx-kpi__icon--primary { background: var(--trx-primary-soft); color: var(--trx-accent-color); }
.trx-kpi__icon--success { background: var(--trx-success-soft); color: var(--trx-success-color); }
.trx-kpi__icon--warning { background: var(--trx-warning-soft); color: var(--trx-warning-color); }
.trx-kpi__icon--danger  { background: var(--trx-danger-soft);  color: var(--trx-danger-color); }
.trx-kpi__icon--info    { background: var(--trx-info-soft);    color: var(--trx-info-color); }
.trx-kpi__icon--purple  { background: var(--trx-purple-soft);  color: var(--trx-purple-color); }

.trx-kpi__value {
  font-size: 2rem;
  font-weight: 700;
  color: var(--trx-text-primary);
  line-height: 1;
  margin-bottom: 0.5rem;
}

.trx-kpi__trend {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.8125rem;
  font-weight: 500;
  padding: 0.25rem 0.5rem;
  border-radius: 20px;
}
.trx-kpi__trend--up      { background: var(--trx-success-soft); color: var(--trx-success-color); }
.trx-kpi__trend--down    { background: var(--trx-danger-soft);  color: var(--trx-danger-color); }
.trx-kpi__trend--neutral { background: var(--trx-bg-tertiary);  color: var(--trx-text-secondary); }

/* Skeleton */
.trx-kpi__skeleton { animation: pulse 1.5s ease-in-out infinite; }
.trx-kpi__skeleton-value {
  height: 2rem; width: 60%;
  background: var(--trx-border-color); border-radius: 4px; margin-bottom: 0.5rem;
}
.trx-kpi__skeleton-trend {
  height: 1.25rem; width: 40%;
  background: var(--trx-border-color); border-radius: 20px;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
</style>
