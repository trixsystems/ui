<script setup lang="ts">
import { computed } from 'vue'

export type TrxSentiment = 'positive' | 'neutral' | 'negative' | 'unknown'

const props = withDefaults(defineProps<{
  sentiment?: TrxSentiment
  score?: number // -1 to 1
  label?: string
  showScore?: boolean
  size?: 'sm' | 'md' | 'lg'
}>(), {
  sentiment: 'unknown',
  score: 0,
  size: 'md',
})

const config: Record<TrxSentiment, { icon: string; label: string; color: string; emoji: string }> = {
  positive: { icon: 'pi pi-face-smile', label: 'Positivo', color: 'var(--trx-success-color)', emoji: '😊' },
  neutral:  { icon: 'pi pi-minus-circle', label: 'Neutro', color: 'var(--trx-warning-color)', emoji: '😐' },
  negative: { icon: 'pi pi-face-sad', label: 'Negativo', color: 'var(--trx-danger-color)', emoji: '😟' },
  unknown:  { icon: 'pi pi-question-circle', label: 'Indefinido', color: 'var(--trx-text-secondary)', emoji: '❓' },
}

const c = computed(() => config[props.sentiment])
const displayScore = computed(() => `${props.score >= 0 ? '+' : ''}${Math.round(props.score * 100)}`)
</script>

<template>
  <div class="trx-sentiment" :class="`trx-sentiment--${size}`" :style="{ '--sc': c.color }">
    <div class="trx-sentiment__icon-wrap">
      <span class="trx-sentiment__emoji">{{ c.emoji }}</span>
    </div>
    <div class="trx-sentiment__info">
      <span class="trx-sentiment__label">{{ label ?? c.label }}</span>
      <span v-if="showScore && sentiment !== 'unknown'" class="trx-sentiment__score">{{ displayScore }}</span>
    </div>
    <div v-if="showScore && sentiment !== 'unknown'" class="trx-sentiment__bar-wrap">
      <div
        class="trx-sentiment__bar"
        :style="{ width: Math.abs(score) * 100 + '%' }"
      ></div>
    </div>
  </div>
</template>

<style scoped>
.trx-sentiment { display: inline-flex; align-items: center; gap: 0.4rem; padding: 0.3rem 0.65rem; border-radius: 8px; border: 1px solid var(--sc); background: color-mix(in srgb, var(--sc) 8%, transparent); }
.trx-sentiment--sm { padding: 0.2rem 0.5rem; border-radius: 6px; }
.trx-sentiment--lg { padding: 0.5rem 0.9rem; border-radius: 10px; }
.trx-sentiment__emoji { font-size: 1rem; line-height: 1; }
.trx-sentiment--sm .trx-sentiment__emoji { font-size: 0.85rem; }
.trx-sentiment--lg .trx-sentiment__emoji { font-size: 1.25rem; }
.trx-sentiment__info { display: flex; flex-direction: column; gap: 1px; }
.trx-sentiment__label { font-size: 0.775rem; font-weight: 700; color: var(--sc); line-height: 1; }
.trx-sentiment--sm .trx-sentiment__label { font-size: 0.7rem; }
.trx-sentiment--lg .trx-sentiment__label { font-size: 0.875rem; }
.trx-sentiment__score { font-size: 0.65rem; color: var(--trx-text-secondary); font-family: monospace; }
.trx-sentiment__bar-wrap { width: 40px; height: 4px; background: var(--trx-bg-secondary); border-radius: 2px; overflow: hidden; }
.trx-sentiment__bar { height: 100%; background: var(--sc); border-radius: 2px; transition: width 0.4s; }
</style>
