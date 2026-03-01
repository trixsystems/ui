<script setup lang="ts">
export interface TrxQueueData {
  name: string
  waiting: number
  active: number
  abandoned: number
  serviceLevel: number // 0-100%
  avgWait: number // seconds
  longestWait: number // seconds
  agentsReady: number
  agentsTotal: number
}

withDefaults(defineProps<{
  queues?: TrxQueueData[]
  loading?: boolean
  compact?: boolean
}>(), {
  queues: () => [],
})

function fmt(s: number) {
  const m = Math.floor(s / 60); const sec = s % 60
  return `${String(m).padStart(2,'0')}:${String(sec).padStart(2,'0')}`
}
function slColor(sl: number) {
  if (sl >= 80) return 'var(--trx-success-color)'
  if (sl >= 60) return 'var(--trx-warning-color)'
  return 'var(--trx-danger-color)'
}
</script>

<template>
  <div class="trx-qm">
    <div v-if="loading" class="trx-qm__loading"><i class="pi pi-spin pi-spinner"></i></div>
    <div v-else-if="!queues.length" class="trx-qm__empty">Nenhuma fila configurada</div>
    <div v-else class="trx-qm__list">
      <div v-for="q in queues" :key="q.name" class="trx-qm__queue">
        <div class="trx-qm__queue-header">
          <span class="trx-qm__queue-name">{{ q.name }}</span>
          <span class="trx-qm__agents">{{ q.agentsReady }}/{{ q.agentsTotal }} agentes</span>
        </div>
        <div class="trx-qm__metrics" :class="{ 'trx-qm__metrics--compact': compact }">
          <div class="trx-qm__metric">
            <span class="trx-qm__metric-value trx-qm__metric-value--warn">{{ q.waiting }}</span>
            <span class="trx-qm__metric-label">Aguardando</span>
          </div>
          <div class="trx-qm__metric">
            <span class="trx-qm__metric-value trx-qm__metric-value--active">{{ q.active }}</span>
            <span class="trx-qm__metric-label">Em atendimento</span>
          </div>
          <div class="trx-qm__metric">
            <span class="trx-qm__metric-value">{{ q.abandoned }}</span>
            <span class="trx-qm__metric-label">Abandonadas</span>
          </div>
          <div class="trx-qm__metric">
            <span class="trx-qm__metric-value" :style="{ color: slColor(q.serviceLevel) }">{{ q.serviceLevel }}%</span>
            <span class="trx-qm__metric-label">Nível de Serviço</span>
          </div>
          <div class="trx-qm__metric">
            <span class="trx-qm__metric-value">{{ fmt(q.avgWait) }}</span>
            <span class="trx-qm__metric-label">TMA Espera</span>
          </div>
          <div class="trx-qm__metric">
            <span class="trx-qm__metric-value" :style="{ color: q.longestWait > 120 ? 'var(--trx-danger-color)' : undefined }">{{ fmt(q.longestWait) }}</span>
            <span class="trx-qm__metric-label">Maior Espera</span>
          </div>
        </div>
        <div class="trx-qm__sl-bar">
          <div class="trx-qm__sl-fill" :style="{ width: q.serviceLevel + '%', background: slColor(q.serviceLevel) }"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.trx-qm { width: 100%; }
.trx-qm__loading, .trx-qm__empty { padding: 2rem; text-align: center; color: var(--trx-text-secondary); }
.trx-qm__list { display: flex; flex-direction: column; gap: 0.75rem; }
.trx-qm__queue { background: var(--trx-bg-card); border: 1px solid var(--trx-border-color); border-radius: 10px; overflow: hidden; }
.trx-qm__queue-header { display: flex; justify-content: space-between; align-items: center; padding: 0.6rem 1rem; background: var(--trx-bg-secondary); border-bottom: 1px solid var(--trx-border-color); }
.trx-qm__queue-name { font-size: 0.875rem; font-weight: 700; color: var(--trx-text-primary); }
.trx-qm__agents { font-size: 0.75rem; color: var(--trx-text-secondary); }
.trx-qm__metrics { display: grid; grid-template-columns: repeat(6, 1fr); gap: 0; padding: 0.5rem 0; }
.trx-qm__metrics--compact { grid-template-columns: repeat(3, 1fr); }
.trx-qm__metric { display: flex; flex-direction: column; align-items: center; padding: 0.4rem; border-right: 1px solid var(--trx-border-color); }
.trx-qm__metric:last-child { border-right: none; }
.trx-qm__metric-value { font-size: 1.1rem; font-weight: 700; color: var(--trx-text-primary); font-family: monospace; }
.trx-qm__metric-value--warn { color: var(--trx-warning-color); }
.trx-qm__metric-value--active { color: var(--trx-success-color); }
.trx-qm__metric-label { font-size: 0.65rem; color: var(--trx-text-secondary); text-align: center; }
.trx-qm__sl-bar { height: 3px; background: var(--trx-bg-secondary); }
.trx-qm__sl-fill { height: 100%; transition: width 0.5s ease; }
</style>
