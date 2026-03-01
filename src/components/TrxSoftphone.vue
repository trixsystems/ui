<script setup lang="ts">
import { computed } from 'vue'
import TrxCallTimer from './TrxCallTimer.vue'

export type TrxSoftphoneStatus = 'idle' | 'ringing' | 'active' | 'hold' | 'muted'

const props = withDefaults(defineProps<{
  status: TrxSoftphoneStatus
  callInfo?: { number: string; name?: string; duration?: number }
  canTransfer?: boolean
  canHold?: boolean
}>(), {
  canTransfer: true,
  canHold: true,
})

const emit = defineEmits<{
  answer: []
  hangup: []
  mute: []
  unmute: []
  hold: []
  resume: []
  transfer: []
}>()

const statusLabel = computed(() => {
  const map: Record<TrxSoftphoneStatus, string> = {
    idle: 'Disponível',
    ringing: 'Chamada entrante...',
    active: 'Em chamada',
    hold: 'Em espera',
    muted: 'Mudo',
  }
  return map[props.status]
})

const isActive = computed(() => props.status === 'active' || props.status === 'muted')
</script>

<template>
  <div class="trx-softphone" :class="`trx-softphone--${status}`">
    <div class="trx-softphone__info">
      <div class="trx-softphone__status-dot"></div>
      <div class="trx-softphone__details">
        <span class="trx-softphone__label">{{ statusLabel }}</span>
        <span v-if="callInfo" class="trx-softphone__caller">
          {{ callInfo.name || callInfo.number }}
        </span>
      </div>
      <TrxCallTimer
        v-if="isActive && callInfo?.duration !== undefined"
        :running="isActive"
        :start-at="callInfo.duration"
        class="trx-softphone__timer"
      />
    </div>

    <div v-if="status !== 'idle'" class="trx-softphone__controls">
      <button v-if="status === 'ringing'" class="trx-softphone__btn trx-softphone__btn--answer" @click="emit('answer')">
        <i class="pi pi-phone"></i>
      </button>

      <template v-if="isActive || status === 'hold'">
        <button
          v-if="canHold"
          class="trx-softphone__btn"
          :class="status === 'hold' ? 'trx-softphone__btn--active' : ''"
          @click="status === 'hold' ? emit('resume') : emit('hold')"
          :title="status === 'hold' ? 'Retomar' : 'Espera'"
        >
          <i :class="status === 'hold' ? 'pi pi-play' : 'pi pi-pause'"></i>
        </button>

        <button
          v-if="isActive"
          class="trx-softphone__btn"
          :class="status === 'muted' ? 'trx-softphone__btn--active' : ''"
          @click="status === 'muted' ? emit('unmute') : emit('mute')"
          :title="status === 'muted' ? 'Ativar mic' : 'Mudo'"
        >
          <i :class="status === 'muted' ? 'pi pi-microphone-slash' : 'pi pi-microphone'"></i>
        </button>

        <button v-if="canTransfer" class="trx-softphone__btn" @click="emit('transfer')" title="Transferir">
          <i class="pi pi-share-alt"></i>
        </button>
      </template>

      <button class="trx-softphone__btn trx-softphone__btn--hangup" @click="emit('hangup')" title="Encerrar">
        <i class="pi pi-times"></i>
      </button>
    </div>
  </div>
</template>

<style scoped>
.trx-softphone {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem 0.75rem;
  background: var(--trx-bg-card);
  border: 1px solid var(--trx-border-color);
  border-radius: 10px;
  transition: all 0.2s;
}

.trx-softphone--ringing { border-color: var(--trx-info-color); animation: ring-pulse 1s infinite; }
.trx-softphone--active  { border-color: var(--trx-success-color); }
.trx-softphone--hold    { border-color: var(--trx-warning-color); }
.trx-softphone--muted   { border-color: var(--trx-warning-color); }

@keyframes ring-pulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(59,130,246,0.4); }
  50% { box-shadow: 0 0 0 6px rgba(59,130,246,0); }
}

.trx-softphone__info { display: flex; align-items: center; gap: 0.5rem; flex: 1; min-width: 0; }

.trx-softphone__status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
  background: var(--trx-text-secondary);
}

.trx-softphone--idle .trx-softphone__status-dot    { background: var(--trx-success-color); }
.trx-softphone--ringing .trx-softphone__status-dot  { background: var(--trx-info-color); animation: blink 0.8s infinite; }
.trx-softphone--active .trx-softphone__status-dot   { background: var(--trx-success-color); }
.trx-softphone--hold .trx-softphone__status-dot     { background: var(--trx-warning-color); }
.trx-softphone--muted .trx-softphone__status-dot    { background: var(--trx-warning-color); }

@keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0.2; } }

.trx-softphone__details { display: flex; flex-direction: column; min-width: 0; }
.trx-softphone__label { font-size: 0.75rem; color: var(--trx-text-secondary); }
.trx-softphone__caller { font-size: 0.85rem; font-weight: 600; color: var(--trx-text-primary); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }

.trx-softphone__timer { font-size: 0.8rem; }

.trx-softphone__controls { display: flex; gap: 0.25rem; align-items: center; }

.trx-softphone__btn {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  background: var(--trx-bg-secondary);
  color: var(--trx-text-secondary);
  transition: all 0.15s;
}

.trx-softphone__btn:hover { filter: brightness(1.1); }
.trx-softphone__btn--answer  { background: var(--trx-success-color); color: white; }
.trx-softphone__btn--hangup  { background: var(--trx-danger-color); color: white; }
.trx-softphone__btn--active  { background: var(--trx-warning-color); color: white; }
</style>
