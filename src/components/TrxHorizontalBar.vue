<script setup lang="ts">
export interface TrxHBarItem {
  label: string
  value: number
  color?: string
  target?: number
}

const COLORS = ['var(--trx-accent-color)', '#60a5fa', '#f472b6', '#fb923c', '#a78bfa', '#facc15']

withDefaults(defineProps<{
  items?: TrxHBarItem[]
  unit?: string
  showValues?: boolean
  showTarget?: boolean
  maxValue?: number
  loading?: boolean
}>(), {
  items: () => [],
  showValues: true,
  showTarget: true,
})

function getMax(items: TrxHBarItem[], maxValue?: number) {
  return maxValue ?? Math.max(...items.map(i => Math.max(i.value, i.target ?? 0)), 1)
}
</script>

<template>
  <div class="trx-hbar">
    <div v-if="loading" class="trx-hbar__loading"><i class="pi pi-spin pi-spinner"></i></div>
    <div v-else-if="!items.length" class="trx-hbar__empty">Sem dados</div>
    <div v-else class="trx-hbar__list">
      <div v-for="(item, i) in items" :key="item.label" class="trx-hbar__item">
        <div class="trx-hbar__label-row">
          <span class="trx-hbar__label">{{ item.label }}</span>
          <div v-if="showValues" class="trx-hbar__values">
            <span class="trx-hbar__value" :style="{ color: item.color ?? COLORS[i % COLORS.length] }">
              {{ item.value.toLocaleString('pt-BR') }}{{ unit }}
            </span>
            <span v-if="showTarget && item.target" class="trx-hbar__target-val">/ {{ item.target }}{{ unit }}</span>
          </div>
        </div>
        <div class="trx-hbar__track">
          <div
            class="trx-hbar__fill"
            :style="{
              width: (item.value / getMax(items, maxValue)) * 100 + '%',
              background: item.color ?? COLORS[i % COLORS.length]
            }"
          ></div>
          <div
            v-if="showTarget && item.target"
            class="trx-hbar__target-line"
            :style="{ left: (item.target / getMax(items, maxValue)) * 100 + '%' }"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.trx-hbar { width: 100%; }
.trx-hbar__loading, .trx-hbar__empty { padding: 1.5rem; text-align: center; color: var(--trx-text-secondary); }
.trx-hbar__list { display: flex; flex-direction: column; gap: 0.6rem; }
.trx-hbar__item { display: flex; flex-direction: column; gap: 0.2rem; }
.trx-hbar__label-row { display: flex; justify-content: space-between; align-items: center; }
.trx-hbar__label { font-size: 0.825rem; color: var(--trx-text-primary); font-weight: 500; }
.trx-hbar__values { display: flex; align-items: baseline; gap: 0.25rem; }
.trx-hbar__value { font-size: 0.825rem; font-weight: 700; font-family: monospace; }
.trx-hbar__target-val { font-size: 0.725rem; color: var(--trx-text-secondary); }
.trx-hbar__track { height: 10px; background: var(--trx-bg-secondary); border-radius: 5px; overflow: visible; position: relative; }
.trx-hbar__fill { height: 100%; border-radius: 5px; transition: width 0.5s cubic-bezier(0.4,0,0.2,1); }
.trx-hbar__target-line { position: absolute; top: -2px; height: calc(100% + 4px); width: 2px; background: var(--trx-text-primary); border-radius: 1px; transform: translateX(-50%); }
</style>
