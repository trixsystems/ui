<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'

const props = withDefaults(defineProps<{
  timeoutMs?: number
  warningMs?: number
  modelValue?: boolean
}>(), {
  timeoutMs: 30 * 60 * 1000,
  warningMs: 5 * 60 * 1000,
  modelValue: true,
})

const emit = defineEmits<{
  timeout: []
  extend: []
  'update:modelValue': [active: boolean]
}>()

const remaining = ref(props.timeoutMs)
const showWarning = ref(false)
let countdown: ReturnType<typeof setInterval>
let resetTimer: ReturnType<typeof setTimeout>

function reset() {
  clearTimeout(resetTimer)
  clearInterval(countdown)
  remaining.value = props.timeoutMs
  showWarning.value = false
  resetTimer = setTimeout(startCountdown, props.timeoutMs - props.warningMs)
}

function startCountdown() {
  showWarning.value = true
  remaining.value = props.warningMs
  countdown = setInterval(() => {
    remaining.value -= 1000
    if (remaining.value <= 0) {
      clearInterval(countdown)
      showWarning.value = false
      emit('timeout')
    }
  }, 1000)
}

function extend() {
  reset()
  emit('extend')
}

const EVENTS = ['mousemove', 'keydown', 'click', 'scroll'] as const

onMounted(() => {
  if (!props.modelValue) return
  EVENTS.forEach(e => window.addEventListener(e, reset, { passive: true }))
  reset()
})

onBeforeUnmount(() => {
  clearTimeout(resetTimer)
  clearInterval(countdown)
  EVENTS.forEach(e => window.removeEventListener(e, reset))
})

const minutes = computed(() => Math.floor(remaining.value / 60000))
const seconds = computed(() => Math.floor((remaining.value % 60000) / 1000))
const timeStr = computed(() => `${minutes.value}:${String(seconds.value).padStart(2, '0')}`)
</script>

<template>
  <Teleport to="body">
    <Transition name="trx-session-fade">
      <div v-if="showWarning" class="trx-session-backdrop">
        <div class="trx-session-dialog">
          <div class="trx-session-dialog__icon">
            <i class="pi pi-clock"></i>
          </div>
          <h2 class="trx-session-dialog__title">Sessão expirando</h2>
          <p class="trx-session-dialog__msg">
            Sua sessão expirará em <strong>{{ timeStr }}</strong> por inatividade.
          </p>
          <div class="trx-session-dialog__actions">
            <button class="trx-session-dialog__btn trx-session-dialog__btn--extend" @click="extend">
              <i class="pi pi-refresh"></i> Continuar sessão
            </button>
            <button class="trx-session-dialog__btn trx-session-dialog__btn--logout" @click="emit('timeout')">
              Sair agora
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.trx-session-backdrop {
  position: fixed; inset: 0; z-index: 99999;
  background: rgba(0,0,0,0.6); backdrop-filter: blur(4px);
  display: flex; align-items: center; justify-content: center;
}
.trx-session-dialog {
  background: var(--trx-bg-card); border: 1px solid var(--trx-border-color);
  border-radius: 16px; padding: 2rem; text-align: center;
  max-width: 380px; width: 90%;
  box-shadow: var(--trx-shadow-xl, 0 20px 60px rgba(0,0,0,0.3));
}
.trx-session-dialog__icon {
  width: 64px; height: 64px; border-radius: 50%; margin: 0 auto 1rem;
  background: color-mix(in srgb, var(--trx-warning-color) 12%, transparent);
  color: var(--trx-warning-color); font-size: 1.75rem;
  display: flex; align-items: center; justify-content: center;
}
.trx-session-dialog__title { font-size: 1.25rem; font-weight: 700; color: var(--trx-text-primary); margin: 0 0 0.5rem; }
.trx-session-dialog__msg { font-size: 0.875rem; color: var(--trx-text-secondary); margin: 0 0 1.5rem; line-height: 1.6; }
.trx-session-dialog__msg strong { color: var(--trx-warning-color); font-size: 1.1em; }
.trx-session-dialog__actions { display: flex; flex-direction: column; gap: 0.5rem; }
.trx-session-dialog__btn {
  padding: 0.6rem 1rem; border-radius: 10px; font-size: 0.875rem; font-weight: 600;
  cursor: pointer; transition: all 0.15s; border: none;
  display: inline-flex; align-items: center; justify-content: center; gap: 0.4rem;
}
.trx-session-dialog__btn--extend { background: var(--trx-accent-color); color: white; }
.trx-session-dialog__btn--extend:hover { opacity: 0.9; }
.trx-session-dialog__btn--logout { background: transparent; color: var(--trx-text-secondary); border: 1px solid var(--trx-border-color); }
.trx-session-dialog__btn--logout:hover { background: var(--trx-bg-secondary); }
.trx-session-fade-enter-active, .trx-session-fade-leave-active { transition: all 0.2s ease; }
.trx-session-fade-enter-from, .trx-session-fade-leave-to { opacity: 0; }
</style>
