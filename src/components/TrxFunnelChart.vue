<script setup lang="ts">
import { computed } from 'vue'

export interface TrxFunnelStep {
  label: string
  value: number
  color?: string
}

const props = withDefaults(defineProps<{
  steps?: TrxFunnelStep[]
  showValues?: boolean
  showPercent?: boolean
  animated?: boolean
}>(), {
  steps: () => [],
  showValues: true,
  showPercent: true,
  animated: true,
})

const DEFAULT_COLORS = [
  'var(--trx-accent-color)',
  '#60a5fa',
  '#a78bfa',
  '#f472b6',
  '#fb923c',
  '#facc15',
]

const maxValue = computed(() => Math.max(...props.steps.map(s => s.value), 1))

const enriched = computed(() =>
  props.steps.map((s, i) => ({
    ...s,
    color: s.color ?? DEFAULT_COLORS[i % DEFAULT_COLORS.length],
    pct: Math.round((s.value / maxValue.value) * 100),
    convRate: i === 0 ? 100 : Math.round((s.value / props.steps[0].value) * 100),
  }))
)
</script>

<template>
  <div class="trx-funnel">
    <div v-if="!steps.length" class="trx-funnel__empty">
      <i class="pi pi-chart-bar"></i> Sem dados
    </div>
    <div v-else class="trx-funnel__steps">
      <div v-for="(step, i) in enriched" :key="i" class="trx-funnel__step">
        <div class="trx-funnel__bar-wrap">
          <div
            class="trx-funnel__bar"
            :class="{ 'trx-funnel__bar--animated': animated }"
            :style="{ width: step.pct + '%', background: step.color }"
          ></div>
        </div>
        <div class="trx-funnel__info">
          <span class="trx-funnel__label">{{ step.label }}</span>
          <div class="trx-funnel__numbers">
            <span v-if="showValues" class="trx-funnel__value" :style="{ color: step.color }">
              {{ step.value.toLocaleString('pt-BR') }}
            </span>
            <span v-if="showPercent" class="trx-funnel__pct">{{ step.convRate }}%</span>
          </div>
        </div>
        <div v-if="i < enriched.length - 1" class="trx-funnel__drop">
          <i class="pi pi-arrow-down"></i>
          <span>{{ (enriched[i + 1].value - step.value).toLocaleString('pt-BR') }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.trx-funnel { width: 100%; }
.trx-funnel__empty { text-align: center; padding: 2rem; color: var(--trx-text-secondary); }
.trx-funnel__steps { display: flex; flex-direction: column; gap: 0; }
.trx-funnel__step { padding: 0.4rem 0; }
.trx-funnel__bar-wrap { background: var(--trx-bg-secondary); border-radius: 4px; height: 28px; overflow: hidden; }
.trx-funnel__bar {
  height: 100%; border-radius: 4px; min-width: 4px;
  transition: width 0;
}
.trx-funnel__bar--animated { transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1); }
.trx-funnel__info { display: flex; justify-content: space-between; align-items: center; margin-top: 0.25rem; }
.trx-funnel__label { font-size: 0.875rem; color: var(--trx-text-primary); font-weight: 600; }
.trx-funnel__numbers { display: flex; align-items: center; gap: 0.5rem; }
.trx-funnel__value { font-size: 0.875rem; font-weight: 700; }
.trx-funnel__pct { font-size: 0.75rem; color: var(--trx-text-secondary); background: var(--trx-bg-secondary); padding: 0.1rem 0.4rem; border-radius: 10px; }
.trx-funnel__drop { display: flex; align-items: center; gap: 0.3rem; font-size: 0.725rem; color: var(--trx-danger-color); padding: 0.1rem 0; }
</style>
