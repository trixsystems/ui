<script setup lang="ts">
export interface TrxAgentRankEntry {
  id: string
  name: string
  avatar?: string
  value: number
  unit?: string
  delta?: number // positivo = melhora
  position?: number
}

withDefaults(defineProps<{
  entries?: TrxAgentRankEntry[]
  title?: string
  loading?: boolean
  highlight?: string // id do agente atual
  maxValue?: number
}>(), {
  entries: () => [],
  title: 'Ranking',
})

const emit = defineEmits<{ rowClick: [entry: TrxAgentRankEntry] }>()

const MEDALS = ['🥇', '🥈', '🥉']
</script>

<template>
  <div class="trx-rank">
    <div v-if="title" class="trx-rank__header">
      <span class="trx-rank__title">{{ title }}</span>
    </div>
    <div v-if="loading" class="trx-rank__loading"><i class="pi pi-spin pi-spinner"></i></div>
    <div v-else-if="!entries.length" class="trx-rank__empty">Sem dados</div>
    <div v-else class="trx-rank__list">
      <div
        v-for="(e, i) in entries"
        :key="e.id"
        class="trx-rank__item"
        :class="{ 'trx-rank__item--highlight': highlight === e.id }"
        @click="emit('rowClick', e)"
      >
        <span class="trx-rank__pos">{{ i < 3 ? MEDALS[i] : `#${i + 1}` }}</span>
        <div class="trx-rank__avatar-wrap">
          <img v-if="e.avatar" :src="e.avatar" class="trx-rank__avatar" :alt="e.name" />
          <div v-else class="trx-rank__avatar-init">{{ e.name[0] }}</div>
        </div>
        <span class="trx-rank__name">{{ e.name }}</span>
        <div class="trx-rank__bar-wrap">
          <div
            class="trx-rank__bar"
            :style="{ width: (maxValue ? (e.value / maxValue) * 100 : 100) + '%' }"
          ></div>
        </div>
        <div class="trx-rank__value-wrap">
          <span class="trx-rank__value">{{ e.value.toLocaleString('pt-BR') }}</span>
          <span v-if="e.unit" class="trx-rank__unit">{{ e.unit }}</span>
          <span
            v-if="e.delta !== undefined"
            class="trx-rank__delta"
            :class="e.delta > 0 ? 'up' : e.delta < 0 ? 'down' : ''"
          >
            <i :class="e.delta > 0 ? 'pi pi-arrow-up' : e.delta < 0 ? 'pi pi-arrow-down' : 'pi pi-minus'"></i>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.trx-rank { width: 100%; }
.trx-rank__header { padding: 0.5rem 0 0.75rem; }
.trx-rank__title { font-size: 0.875rem; font-weight: 700; color: var(--trx-text-primary); }
.trx-rank__loading, .trx-rank__empty { padding: 1.5rem; text-align: center; color: var(--trx-text-secondary); }
.trx-rank__list { display: flex; flex-direction: column; gap: 0.4rem; }
.trx-rank__item { display: flex; align-items: center; gap: 0.6rem; padding: 0.5rem 0.75rem; border-radius: 8px; cursor: pointer; transition: background 0.15s; }
.trx-rank__item:hover { background: var(--trx-bg-secondary); }
.trx-rank__item--highlight { background: color-mix(in srgb, var(--trx-accent-color) 8%, transparent); }
.trx-rank__pos { font-size: 0.875rem; min-width: 28px; text-align: center; }
.trx-rank__avatar-wrap { flex-shrink: 0; }
.trx-rank__avatar { width: 28px; height: 28px; border-radius: 50%; object-fit: cover; }
.trx-rank__avatar-init { width: 28px; height: 28px; border-radius: 50%; background: var(--trx-accent-color); color: white; display: flex; align-items: center; justify-content: center; font-size: 0.7rem; font-weight: 700; }
.trx-rank__name { font-size: 0.825rem; font-weight: 600; color: var(--trx-text-primary); min-width: 100px; }
.trx-rank__bar-wrap { flex: 1; height: 6px; background: var(--trx-bg-secondary); border-radius: 3px; overflow: hidden; }
.trx-rank__bar { height: 100%; background: var(--trx-accent-color); border-radius: 3px; transition: width 0.4s ease; }
.trx-rank__item--highlight .trx-rank__bar { background: var(--trx-success-color); }
.trx-rank__value-wrap { display: flex; align-items: center; gap: 0.2rem; min-width: 60px; justify-content: flex-end; }
.trx-rank__value { font-size: 0.875rem; font-weight: 700; color: var(--trx-text-primary); font-family: monospace; }
.trx-rank__unit { font-size: 0.7rem; color: var(--trx-text-secondary); }
.trx-rank__delta { font-size: 0.65rem; }
.trx-rank__delta.up { color: var(--trx-success-color); }
.trx-rank__delta.down { color: var(--trx-danger-color); }
</style>
