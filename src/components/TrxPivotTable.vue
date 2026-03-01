<script setup lang="ts">
import { computed } from 'vue'

export interface TrxPivotRow {
  [key: string]: unknown
}

const props = withDefaults(defineProps<{
  data: TrxPivotRow[]
  rowField: string
  colField: string
  valueField: string
  aggregation?: 'sum' | 'count' | 'avg' | 'min' | 'max'
  rowLabel?: string
  showTotals?: boolean
}>(), {
  aggregation: 'sum',
  rowLabel: 'Linha',
  showTotals: true,
})

function aggregate(values: number[]): number {
  if (!values.length) return 0
  switch (props.aggregation) {
    case 'count': return values.length
    case 'avg': return values.reduce((a, b) => a + b, 0) / values.length
    case 'min': return Math.min(...values)
    case 'max': return Math.max(...values)
    default: return values.reduce((a, b) => a + b, 0)
  }
}

function fmt(n: number): string {
  return props.aggregation === 'count' ? String(n) : n.toLocaleString('pt-BR', { maximumFractionDigits: 2 })
}

const rowKeys = computed(() => [...new Set(props.data.map(r => String(r[props.rowField])))])
const colKeys = computed(() => [...new Set(props.data.map(r => String(r[props.colField])))])

const cellValue = (r: string, c: string) => fmt(aggregate(
  props.data
    .filter(d => String(d[props.rowField]) === r && String(d[props.colField]) === c)
    .map(d => Number(d[props.valueField]) || 0)
))

const rowTotal = (r: string) => fmt(aggregate(
  colKeys.value.flatMap(c =>
    props.data
      .filter(d => String(d[props.rowField]) === r && String(d[props.colField]) === c)
      .map(d => Number(d[props.valueField]) || 0)
  )
))

const colTotal = (c: string) => fmt(aggregate(
  rowKeys.value.flatMap(r =>
    props.data
      .filter(d => String(d[props.rowField]) === r && String(d[props.colField]) === c)
      .map(d => Number(d[props.valueField]) || 0)
  )
))

const grandTotal = computed(() => fmt(aggregate(props.data.map(d => Number(d[props.valueField]) || 0))))

// Max value for heatmap
const maxVal = computed(() => {
  let max = 0
  for (const r of rowKeys.value) {
    for (const c of colKeys.value) {
      const vals = props.data
        .filter(d => String(d[props.rowField]) === r && String(d[props.colField]) === c)
        .map(d => Number(d[props.valueField]) || 0)
      const v = aggregate(vals)
      if (v > max) max = v
    }
  }
  return max
})

function cellOpacity(r: string, c: string): number {
  const vals = props.data
    .filter(d => String(d[props.rowField]) === r && String(d[props.colField]) === c)
    .map(d => Number(d[props.valueField]) || 0)
  return maxVal.value ? aggregate(vals) / maxVal.value : 0
}
</script>

<template>
  <div class="trx-pivot">
    <div class="trx-pivot__wrap">
      <table class="trx-pivot__table">
        <thead>
          <tr>
            <th class="trx-pivot__th trx-pivot__th--corner">{{ rowLabel }}</th>
            <th v-for="col in colKeys" :key="col" class="trx-pivot__th">{{ col }}</th>
            <th v-if="showTotals" class="trx-pivot__th trx-pivot__th--total">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in rowKeys" :key="row">
            <td class="trx-pivot__td trx-pivot__td--label">{{ row }}</td>
            <td
              v-for="col in colKeys"
              :key="col"
              class="trx-pivot__td trx-pivot__td--value"
              :style="{ '--heat': cellOpacity(row, col) }"
            >
              {{ cellValue(row, col) }}
            </td>
            <td v-if="showTotals" class="trx-pivot__td trx-pivot__td--total">{{ rowTotal(row) }}</td>
          </tr>
        </tbody>
        <tfoot v-if="showTotals">
          <tr>
            <td class="trx-pivot__td trx-pivot__td--label trx-pivot__td--foot">Total</td>
            <td v-for="col in colKeys" :key="col" class="trx-pivot__td trx-pivot__td--total">{{ colTotal(col) }}</td>
            <td class="trx-pivot__td trx-pivot__td--grand">{{ grandTotal }}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>

<style scoped>
.trx-pivot { overflow: hidden; border: 1px solid var(--trx-border-color); border-radius: 10px; }
.trx-pivot__wrap { overflow: auto; }
.trx-pivot__table { border-collapse: collapse; width: 100%; font-size: 0.82rem; }
.trx-pivot__th {
  padding: 0.5rem 0.75rem; text-align: center; font-weight: 600; white-space: nowrap;
  background: var(--trx-bg-secondary); border-bottom: 2px solid var(--trx-border-color);
  border-right: 1px solid var(--trx-border-color); color: var(--trx-text-primary);
}
.trx-pivot__th--corner { text-align: left; }
.trx-pivot__th--total { background: color-mix(in srgb, var(--trx-accent-color) 8%, var(--trx-bg-secondary)); }
.trx-pivot__td {
  padding: 0.4rem 0.75rem; border-bottom: 1px solid var(--trx-border-color);
  border-right: 1px solid var(--trx-border-color); text-align: center; color: var(--trx-text-primary);
}
.trx-pivot__td--label { text-align: left; font-weight: 500; background: var(--trx-bg-secondary); }
.trx-pivot__td--value {
  background: color-mix(in srgb, var(--trx-accent-color) calc(var(--heat) * 20%), transparent);
}
.trx-pivot__td--total { font-weight: 600; background: color-mix(in srgb, var(--trx-accent-color) 6%, var(--trx-bg-secondary)); }
.trx-pivot__td--foot { font-weight: 700; }
.trx-pivot__td--grand { font-weight: 700; background: color-mix(in srgb, var(--trx-accent-color) 14%, var(--trx-bg-secondary)); }
</style>
