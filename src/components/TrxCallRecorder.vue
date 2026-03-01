<script setup lang="ts">
import { computed } from 'vue'

export type TrxRecordingState = 'idle' | 'recording' | 'paused'

const props = withDefaults(defineProps<{
  state?: TrxRecordingState
  duration?: number // seconds
  disabled?: boolean
}>(), {
  state: 'idle',
  duration: 0,
})

const emit = defineEmits<{
  start: []
  pause: []
  resume: []
  stop: []
}>()

const fmt = computed(() => {
  const m = Math.floor(props.duration / 60)
  const s = props.duration % 60
  return `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`
})
</script>

<template>
  <div class="trx-recorder" :class="`trx-recorder--${state}`">
    <div class="trx-recorder__indicator">
      <span class="trx-recorder__dot" :class="{ 'trx-recorder__dot--blink': state === 'recording' }"></span>
      <span class="trx-recorder__label">
        {{ state === 'idle' ? 'Sem gravação' : state === 'recording' ? 'Gravando' : 'Pausado' }}
      </span>
    </div>
    <span class="trx-recorder__time">{{ fmt }}</span>
    <div class="trx-recorder__controls">
      <button
        v-if="state === 'idle'"
        class="trx-recorder__btn trx-recorder__btn--start"
        :disabled="disabled"
        title="Iniciar gravação"
        @click="emit('start')"
      >
        <i class="pi pi-circle-fill"></i>
      </button>
      <template v-else>
        <button
          v-if="state === 'recording'"
          class="trx-recorder__btn trx-recorder__btn--pause"
          :disabled="disabled"
          title="Pausar"
          @click="emit('pause')"
        >
          <i class="pi pi-pause"></i>
        </button>
        <button
          v-else
          class="trx-recorder__btn trx-recorder__btn--resume"
          :disabled="disabled"
          title="Retomar"
          @click="emit('resume')"
        >
          <i class="pi pi-play"></i>
        </button>
        <button
          class="trx-recorder__btn trx-recorder__btn--stop"
          :disabled="disabled"
          title="Parar"
          @click="emit('stop')"
        >
          <i class="pi pi-stop"></i>
        </button>
      </template>
    </div>
  </div>
</template>

<style scoped>
.trx-recorder { display: flex; align-items: center; gap: 0.75rem; padding: 0.5rem 0.75rem; border: 1px solid var(--trx-border-color); border-radius: 8px; background: var(--trx-bg-card); }
.trx-recorder--recording { border-color: var(--trx-danger-color); background: color-mix(in srgb, var(--trx-danger-color) 5%, transparent); }
.trx-recorder--paused { border-color: var(--trx-warning-color); }
.trx-recorder__indicator { display: flex; align-items: center; gap: 0.4rem; }
.trx-recorder__dot { width: 8px; height: 8px; border-radius: 50%; background: var(--trx-border-color); }
.trx-recorder--recording .trx-recorder__dot { background: var(--trx-danger-color); }
.trx-recorder--paused .trx-recorder__dot { background: var(--trx-warning-color); }
.trx-recorder__dot--blink { animation: blink 1s infinite; }
@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
.trx-recorder__label { font-size: 0.775rem; color: var(--trx-text-secondary); font-weight: 600; }
.trx-recorder--recording .trx-recorder__label { color: var(--trx-danger-color); }
.trx-recorder--paused .trx-recorder__label { color: var(--trx-warning-color); }
.trx-recorder__time { font-family: monospace; font-size: 0.875rem; font-weight: 700; color: var(--trx-text-primary); flex: 1; }
.trx-recorder__controls { display: flex; gap: 0.3rem; }
.trx-recorder__btn { width: 30px; height: 30px; border-radius: 6px; border: 1px solid var(--trx-border-color); background: transparent; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 0.75rem; transition: all 0.15s; color: var(--trx-text-secondary); }
.trx-recorder__btn--start { color: var(--trx-danger-color); border-color: var(--trx-danger-color); }
.trx-recorder__btn--start:hover { background: color-mix(in srgb, var(--trx-danger-color) 10%, transparent); }
.trx-recorder__btn--pause:hover, .trx-recorder__btn--resume:hover { border-color: var(--trx-accent-color); color: var(--trx-accent-color); }
.trx-recorder__btn--stop:hover { border-color: var(--trx-danger-color); color: var(--trx-danger-color); }
.trx-recorder__btn:disabled { opacity: 0.4; cursor: not-allowed; }
</style>
