<script setup lang="ts">
import { computed } from 'vue'

export type TrxCallStatus = 'ringing' | 'active' | 'hold' | 'ended' | 'missed'

const props = withDefaults(defineProps<{
  callerId: string
  callerName?: string
  duration?: number
  status: TrxCallStatus
  direction?: 'inbound' | 'outbound'
  queue?: string
  agent?: string
}>(), {
  direction: 'inbound',
})

const emit = defineEmits<{
  answer: []
  hangup: []
  hold: []
  transfer: []
}>()

const statusConfig: Record<TrxCallStatus, { label: string; color: string; icon: string }> = {
  ringing:  { label: 'Chamando',   color: 'var(--trx-info-color)',    icon: 'pi pi-phone' },
  active:   { label: 'Em chamada', color: 'var(--trx-success-color)', icon: 'pi pi-phone' },
  hold:     { label: 'Em espera',  color: 'var(--trx-warning-color)', icon: 'pi pi-pause' },
  ended:    { label: 'Encerrada',  color: 'var(--trx-text-secondary)', icon: 'pi pi-phone-slash' },
  missed:   { label: 'Perdida',   color: 'var(--trx-danger-color)',   icon: 'pi pi-times' },
}

const config = computed(() => statusConfig[props.status])

function formatDuration(secs?: number) {
  if (!secs) return '00:00'
  const m = Math.floor(secs / 60).toString().padStart(2, '0')
  const s = (secs % 60).toString().padStart(2, '0')
  return `${m}:${s}`
}
</script>

<template>
  <div class="trx-call-card" :class="`trx-call-card--${status}`">
    <div class="trx-call-card__left">
      <div class="trx-call-card__icon" :style="{ color: config.color }">
        <i :class="config.icon"></i>
        <i
          class="trx-call-card__direction"
          :class="direction === 'inbound' ? 'pi pi-arrow-down-left' : 'pi pi-arrow-up-right'"
        ></i>
      </div>
    </div>

    <div class="trx-call-card__info">
      <div class="trx-call-card__caller">
        <span class="trx-call-card__name">{{ callerName || callerId }}</span>
        <span v-if="callerName" class="trx-call-card__number">{{ callerId }}</span>
      </div>
      <div class="trx-call-card__meta">
        <span class="trx-call-card__status" :style="{ color: config.color }">{{ config.label }}</span>
        <span v-if="duration !== undefined" class="trx-call-card__duration">{{ formatDuration(duration) }}</span>
        <span v-if="queue" class="trx-call-card__queue">{{ queue }}</span>
      </div>
      <div v-if="agent" class="trx-call-card__agent">
        <i class="pi pi-user"></i> {{ agent }}
      </div>
    </div>

    <div class="trx-call-card__actions">
      <slot name="actions">
        <button v-if="status === 'ringing'" class="trx-call-card__btn trx-call-card__btn--answer" @click="emit('answer')" title="Atender">
          <i class="pi pi-phone"></i>
        </button>
        <button v-if="status === 'active'" class="trx-call-card__btn trx-call-card__btn--hold" @click="emit('hold')" title="Colocar em espera">
          <i class="pi pi-pause"></i>
        </button>
        <button v-if="status === 'active' || status === 'hold'" class="trx-call-card__btn trx-call-card__btn--transfer" @click="emit('transfer')" title="Transferir">
          <i class="pi pi-share-alt"></i>
        </button>
        <button v-if="status !== 'ended' && status !== 'missed'" class="trx-call-card__btn trx-call-card__btn--hangup" @click="emit('hangup')" title="Encerrar">
          <i class="pi pi-times"></i>
        </button>
      </slot>
    </div>
  </div>
</template>

<style scoped>
.trx-call-card {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  background: var(--trx-bg-card);
  border: 1px solid var(--trx-border-color);
  border-radius: 12px;
  border-left: 4px solid var(--trx-border-color);
  transition: all 0.2s ease;
}

.trx-call-card--ringing { border-left-color: var(--trx-info-color); }
.trx-call-card--active  { border-left-color: var(--trx-success-color); }
.trx-call-card--hold    { border-left-color: var(--trx-warning-color); }
.trx-call-card--ended   { border-left-color: var(--trx-border-color); opacity: 0.7; }
.trx-call-card--missed  { border-left-color: var(--trx-danger-color); }

.trx-call-card__icon {
  position: relative;
  font-size: 1.25rem;
  width: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.trx-call-card__direction {
  position: absolute;
  bottom: -4px;
  right: -4px;
  font-size: 0.6rem;
  background: var(--trx-bg-card);
  border-radius: 50%;
}

.trx-call-card__info { flex: 1; min-width: 0; }

.trx-call-card__caller { display: flex; align-items: baseline; gap: 0.5rem; flex-wrap: wrap; }

.trx-call-card__name {
  font-weight: 600;
  font-size: 0.9rem;
  color: var(--trx-text-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.trx-call-card__number {
  font-size: 0.75rem;
  color: var(--trx-text-secondary);
  font-family: monospace;
}

.trx-call-card__meta {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.2rem;
  font-size: 0.75rem;
}

.trx-call-card__duration { color: var(--trx-text-secondary); font-family: monospace; }

.trx-call-card__queue {
  background: var(--trx-bg-secondary);
  padding: 0.1rem 0.4rem;
  border-radius: 4px;
  font-size: 0.7rem;
  color: var(--trx-text-secondary);
}

.trx-call-card__agent {
  font-size: 0.75rem;
  color: var(--trx-text-secondary);
  margin-top: 0.15rem;
}

.trx-call-card__agent i { font-size: 0.65rem; }

.trx-call-card__actions { display: flex; gap: 0.25rem; }

.trx-call-card__btn {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  transition: all 0.15s ease;
  background: var(--trx-bg-secondary);
  color: var(--trx-text-secondary);
}

.trx-call-card__btn:hover { filter: brightness(1.1); }
.trx-call-card__btn--answer  { background: var(--trx-success-color); color: white; }
.trx-call-card__btn--hangup  { background: var(--trx-danger-color);  color: white; }
.trx-call-card__btn--hold    { background: var(--trx-warning-color); color: white; }
.trx-call-card__btn--transfer { color: var(--trx-info-color); }
</style>
