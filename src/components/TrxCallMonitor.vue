<script setup lang="ts">
export type TrxMonitorMode = 'listen' | 'whisper' | 'barge'

export interface TrxMonitorCall {
  id: string
  agentName: string
  agentExt: string
  customerName?: string
  customerPhone: string
  duration: number // seconds
  queue?: string
}

withDefaults(defineProps<{
  calls?: TrxMonitorCall[]
  loading?: boolean
  activeId?: string
  activeMode?: TrxMonitorMode
}>(), {
  calls: () => [],
})

const emit = defineEmits<{
  monitor: [call: TrxMonitorCall, mode: TrxMonitorMode]
  stop: [id: string]
}>()

const MODES: { key: TrxMonitorMode; label: string; icon: string; color: string }[] = [
  { key: 'listen',  label: 'Escuta',    icon: 'pi pi-eye',        color: 'var(--trx-accent-color)' },
  { key: 'whisper', label: 'Sussurro',  icon: 'pi pi-microphone', color: 'var(--trx-warning-color)' },
  { key: 'barge',   label: 'Entrar',    icon: 'pi pi-phone',      color: 'var(--trx-danger-color)' },
]

function fmt(s: number) {
  const m = Math.floor(s / 60)
  const sec = s % 60
  return `${String(m).padStart(2,'0')}:${String(sec).padStart(2,'0')}`
}
</script>

<template>
  <div class="trx-monitor">
    <div v-if="loading" class="trx-monitor__empty">
      <i class="pi pi-spin pi-spinner"></i>
    </div>
    <div v-else-if="!calls.length" class="trx-monitor__empty">
      <i class="pi pi-phone" style="font-size:1.5rem"></i>
      <span>Nenhuma chamada ativa</span>
    </div>
    <div v-else class="trx-monitor__list">
      <div
        v-for="call in calls"
        :key="call.id"
        class="trx-monitor__item"
        :class="{ 'trx-monitor__item--active': activeId === call.id }"
      >
        <div class="trx-monitor__agent">
          <span class="trx-monitor__agent-name">{{ call.agentName }}</span>
          <span class="trx-monitor__agent-ext">{{ call.agentExt }}</span>
        </div>
        <div class="trx-monitor__call-info">
          <span class="trx-monitor__customer">{{ call.customerName ?? call.customerPhone }}</span>
          <span class="trx-monitor__queue" v-if="call.queue">{{ call.queue }}</span>
        </div>
        <span class="trx-monitor__duration">{{ fmt(call.duration) }}</span>
        <div v-if="activeId === call.id" class="trx-monitor__active-badge">
          <i class="pi pi-circle-fill trx-monitor__pulse"></i>
          {{ activeMode === 'listen' ? 'Escutando' : activeMode === 'whisper' ? 'Sussurrando' : 'Na chamada' }}
          <button class="trx-monitor__stop-btn" @click="emit('stop', call.id)">
            <i class="pi pi-stop-circle"></i>
          </button>
        </div>
        <div v-else class="trx-monitor__actions">
          <button
            v-for="m in MODES"
            :key="m.key"
            class="trx-monitor__mode-btn"
            :title="m.label"
            :style="{ '--mc': m.color }"
            @click="emit('monitor', call, m.key)"
          >
            <i :class="m.icon"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.trx-monitor { width: 100%; }
.trx-monitor__empty { display: flex; flex-direction: column; align-items: center; gap: 0.5rem; padding: 2rem; color: var(--trx-text-secondary); font-size: 0.875rem; }
.trx-monitor__list { display: flex; flex-direction: column; }
.trx-monitor__item { display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem 1rem; border-bottom: 1px solid var(--trx-border-color); transition: background 0.15s; }
.trx-monitor__item:last-child { border-bottom: none; }
.trx-monitor__item:hover { background: var(--trx-bg-secondary); }
.trx-monitor__item--active { background: color-mix(in srgb, var(--trx-accent-color) 6%, transparent); }
.trx-monitor__agent { display: flex; flex-direction: column; min-width: 110px; }
.trx-monitor__agent-name { font-size: 0.875rem; font-weight: 600; color: var(--trx-text-primary); }
.trx-monitor__agent-ext { font-size: 0.725rem; color: var(--trx-text-secondary); font-family: monospace; }
.trx-monitor__call-info { flex: 1; display: flex; flex-direction: column; min-width: 0; }
.trx-monitor__customer { font-size: 0.825rem; color: var(--trx-text-primary); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.trx-monitor__queue { font-size: 0.7rem; color: var(--trx-accent-color); }
.trx-monitor__duration { font-size: 0.8rem; font-family: monospace; color: var(--trx-text-secondary); flex-shrink: 0; }
.trx-monitor__active-badge { display: flex; align-items: center; gap: 0.4rem; font-size: 0.775rem; color: var(--trx-accent-color); font-weight: 600; flex-shrink: 0; }
.trx-monitor__pulse { font-size: 0.5rem; animation: pulse 1s infinite; }
@keyframes pulse { 0%,100% { opacity:1 } 50% { opacity:0.3 } }
.trx-monitor__stop-btn { background: none; border: 1px solid var(--trx-danger-color); border-radius: 5px; color: var(--trx-danger-color); cursor: pointer; padding: 0.15rem 0.4rem; font-size: 0.75rem; margin-left: 0.25rem; }
.trx-monitor__actions { display: flex; gap: 0.3rem; flex-shrink: 0; }
.trx-monitor__mode-btn { width: 30px; height: 30px; border: 1px solid var(--trx-border-color); border-radius: 6px; background: transparent; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 0.75rem; color: var(--trx-text-secondary); transition: all 0.15s; }
.trx-monitor__mode-btn:hover { border-color: var(--mc); color: var(--mc); background: color-mix(in srgb, var(--mc) 10%, transparent); }
</style>
