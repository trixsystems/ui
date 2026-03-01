<script setup lang="ts">
export type TrxCallDirection = 'inbound' | 'outbound' | 'missed'

export interface TrxCallRecord {
  id: string
  callerId: string
  callerName?: string
  direction: TrxCallDirection
  duration?: number
  startedAt: string
  status?: string
  agent?: string
  queue?: string
  recording?: string
}

withDefaults(defineProps<{
  calls?: TrxCallRecord[]
  loading?: boolean
  showRecording?: boolean
}>(), {
  calls: () => [],
  showRecording: true,
})

const emit = defineEmits<{
  play: [id: string]
  callback: [call: TrxCallRecord]
  view: [call: TrxCallRecord]
}>()

const directionConfig: Record<TrxCallDirection, { icon: string; color: string; label: string }> = {
  inbound:  { icon: 'pi pi-arrow-down-left', color: 'var(--trx-success-color)', label: 'Recebida' },
  outbound: { icon: 'pi pi-arrow-up-right',  color: 'var(--trx-accent-color)',  label: 'Realizada' },
  missed:   { icon: 'pi pi-times',           color: 'var(--trx-danger-color)',  label: 'Perdida' },
}

function formatDuration(s?: number) {
  if (!s) return '—'
  const m = Math.floor(s / 60)
  const sec = s % 60
  return `${m}:${String(sec).padStart(2, '0')}`
}
</script>

<template>
  <div class="trx-call-history">
    <div v-if="loading" class="trx-call-history__empty">
      <i class="pi pi-spin pi-spinner"></i>
    </div>
    <div v-else-if="!calls.length" class="trx-call-history__empty">
      <i class="pi pi-phone-slash"></i>
      <span>Nenhuma chamada encontrada</span>
    </div>
    <div v-else class="trx-call-history__list">
      <div v-for="call in calls" :key="call.id" class="trx-call-history__item" @click="emit('view', call)">
        <div class="trx-call-history__icon" :style="{ color: directionConfig[call.direction].color }">
          <i :class="directionConfig[call.direction].icon"></i>
        </div>
        <div class="trx-call-history__info">
          <span class="trx-call-history__name">{{ call.callerName ?? call.callerId }}</span>
          <span class="trx-call-history__sub">{{ call.callerId }} · {{ directionConfig[call.direction].label }}</span>
        </div>
        <div class="trx-call-history__meta">
          <span class="trx-call-history__duration">{{ formatDuration(call.duration) }}</span>
          <span class="trx-call-history__time">{{ call.startedAt }}</span>
        </div>
        <div class="trx-call-history__actions" @click.stop>
          <button v-if="showRecording && call.recording" class="trx-call-history__btn" title="Reproduzir gravação" @click="emit('play', call.id)">
            <i class="pi pi-play"></i>
          </button>
          <button class="trx-call-history__btn" title="Ligar de volta" @click="emit('callback', call)">
            <i class="pi pi-phone"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.trx-call-history__empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 2rem;
  color: var(--trx-text-secondary);
  font-size: 0.875rem;
}
.trx-call-history__empty i { font-size: 1.5rem; }
.trx-call-history__list { display: flex; flex-direction: column; }
.trx-call-history__item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid var(--trx-border-color);
  cursor: pointer;
  transition: background 0.15s;
}
.trx-call-history__item:last-child { border-bottom: none; }
.trx-call-history__item:hover { background: var(--trx-bg-secondary); }
.trx-call-history__icon { font-size: 1rem; flex-shrink: 0; width: 20px; text-align: center; }
.trx-call-history__info { flex: 1; display: flex; flex-direction: column; gap: 0.1rem; min-width: 0; }
.trx-call-history__name { font-size: 0.875rem; font-weight: 600; color: var(--trx-text-primary); }
.trx-call-history__sub { font-size: 0.75rem; color: var(--trx-text-secondary); }
.trx-call-history__meta { display: flex; flex-direction: column; align-items: flex-end; gap: 0.1rem; flex-shrink: 0; }
.trx-call-history__duration { font-size: 0.875rem; font-weight: 600; color: var(--trx-text-primary); font-family: monospace; }
.trx-call-history__time { font-size: 0.7rem; color: var(--trx-text-secondary); }
.trx-call-history__actions { display: flex; gap: 0.3rem; flex-shrink: 0; }
.trx-call-history__btn {
  width: 28px; height: 28px;
  border: 1px solid var(--trx-border-color);
  border-radius: 6px;
  background: transparent;
  color: var(--trx-text-secondary);
  cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  font-size: 0.75rem;
  transition: all 0.15s;
}
.trx-call-history__btn:hover { border-color: var(--trx-accent-color); color: var(--trx-accent-color); }
</style>
