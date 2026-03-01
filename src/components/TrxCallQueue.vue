<script setup lang="ts">
import { computed } from 'vue'

export interface TrxQueueCall {
  id: string
  callerId: string
  callerName?: string
  waitTime: number
  priority?: 'low' | 'normal' | 'high'
}

const props = withDefaults(defineProps<{
  calls: TrxQueueCall[]
  queueName?: string
  maxWaitWarning?: number
}>(), {
  maxWaitWarning: 120,
})

const emit = defineEmits<{
  answer: [callId: string]
  transfer: [callId: string]
}>()

const sorted = computed(() =>
  [...props.calls].sort((a, b) => {
    const p = { high: 0, normal: 1, low: 2 }
    return (p[a.priority ?? 'normal'] - p[b.priority ?? 'normal']) || b.waitTime - a.waitTime
  })
)

function formatWait(s: number) {
  if (s < 60) return `${s}s`
  return `${Math.floor(s / 60)}m ${s % 60}s`
}

const priorityConfig = {
  high:   { label: 'Alta',   color: 'var(--trx-danger-color)' },
  normal: { label: 'Normal', color: 'var(--trx-info-color)' },
  low:    { label: 'Baixa',  color: 'var(--trx-text-secondary)' },
}
</script>

<template>
  <div class="trx-call-queue">
    <div class="trx-call-queue__header">
      <span class="trx-call-queue__name">{{ queueName || 'Fila de Chamadas' }}</span>
      <span class="trx-call-queue__count">{{ calls.length }}</span>
    </div>

    <div v-if="calls.length === 0" class="trx-call-queue__empty">
      <i class="pi pi-inbox"></i>
      <span>Nenhuma chamada na fila</span>
    </div>

    <ul v-else class="trx-call-queue__list">
      <li
        v-for="call in sorted"
        :key="call.id"
        class="trx-call-queue__item"
        :class="{ 'trx-call-queue__item--warning': call.waitTime > maxWaitWarning }"
      >
        <div class="trx-call-queue__item-info">
          <div class="trx-call-queue__item-caller">
            <span>{{ call.callerName || call.callerId }}</span>
            <span v-if="call.callerName" class="trx-call-queue__item-number">{{ call.callerId }}</span>
          </div>
          <div class="trx-call-queue__item-meta">
            <span
              class="trx-call-queue__wait"
              :class="{ 'trx-call-queue__wait--over': call.waitTime > maxWaitWarning }"
            >
              <i class="pi pi-clock"></i> {{ formatWait(call.waitTime) }}
            </span>
            <span
              v-if="call.priority && call.priority !== 'normal'"
              class="trx-call-queue__priority"
              :style="{ color: priorityConfig[call.priority].color }"
            >{{ priorityConfig[call.priority].label }}</span>
          </div>
        </div>
        <div class="trx-call-queue__item-actions">
          <button class="trx-call-queue__btn trx-call-queue__btn--answer" @click="emit('answer', call.id)" title="Atender">
            <i class="pi pi-phone"></i>
          </button>
          <button class="trx-call-queue__btn" @click="emit('transfer', call.id)" title="Transferir">
            <i class="pi pi-share-alt"></i>
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.trx-call-queue {
  background: var(--trx-bg-card);
  border: 1px solid var(--trx-border-color);
  border-radius: 12px;
  overflow: hidden;
}

.trx-call-queue__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid var(--trx-border-color);
  background: var(--trx-bg-secondary);
}

.trx-call-queue__name { font-weight: 600; font-size: 0.9rem; color: var(--trx-text-primary); }

.trx-call-queue__count {
  background: var(--trx-accent-color);
  color: white;
  border-radius: 12px;
  padding: 0.1rem 0.5rem;
  font-size: 0.75rem;
  font-weight: 700;
  min-width: 20px;
  text-align: center;
}

.trx-call-queue__empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 2rem;
  color: var(--trx-text-secondary);
  font-size: 0.85rem;
}

.trx-call-queue__empty i { font-size: 1.5rem; opacity: 0.4; }

.trx-call-queue__list { list-style: none; margin: 0; padding: 0; }

.trx-call-queue__item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.6rem 1rem;
  border-bottom: 1px solid var(--trx-border-color);
  transition: background 0.15s;
}

.trx-call-queue__item:last-child { border-bottom: none; }
.trx-call-queue__item:hover { background: var(--trx-bg-secondary); }
.trx-call-queue__item--warning { background: rgba(245, 158, 11, 0.05); }

.trx-call-queue__item-info { flex: 1; min-width: 0; }

.trx-call-queue__item-caller {
  display: flex;
  align-items: baseline;
  gap: 0.4rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--trx-text-primary);
}

.trx-call-queue__item-number { font-size: 0.75rem; color: var(--trx-text-secondary); font-family: monospace; }

.trx-call-queue__item-meta { display: flex; align-items: center; gap: 0.5rem; margin-top: 0.15rem; font-size: 0.75rem; }

.trx-call-queue__wait { color: var(--trx-text-secondary); display: flex; align-items: center; gap: 0.2rem; }
.trx-call-queue__wait--over { color: var(--trx-warning-color); font-weight: 600; }
.trx-call-queue__wait i { font-size: 0.65rem; }

.trx-call-queue__priority { font-size: 0.7rem; font-weight: 600; }

.trx-call-queue__item-actions { display: flex; gap: 0.25rem; }

.trx-call-queue__btn {
  width: 28px;
  height: 28px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  background: var(--trx-bg-secondary);
  color: var(--trx-text-secondary);
  transition: all 0.15s;
}

.trx-call-queue__btn:hover { filter: brightness(1.1); }
.trx-call-queue__btn--answer { background: var(--trx-success-color); color: white; }
</style>
