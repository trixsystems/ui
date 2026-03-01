<script setup lang="ts">
import { ref } from 'vue'

const props = withDefaults(defineProps<{
  label?: string
  confirmLabel?: string
  cancelLabel?: string
  variant?: 'default' | 'danger' | 'warning'
  icon?: string
  loading?: boolean
  disabled?: boolean
}>(), {
  label: 'Excluir',
  confirmLabel: 'Confirmar',
  cancelLabel: 'Cancelar',
  variant: 'danger',
})

const emit = defineEmits<{ confirm: [] }>()

const confirming = ref(false)
let timer: ReturnType<typeof setTimeout>

function onFirst() {
  if (props.disabled || props.loading) return
  confirming.value = true
  timer = setTimeout(() => { confirming.value = false }, 3000)
}

function onConfirm() {
  clearTimeout(timer)
  confirming.value = false
  emit('confirm')
}

function onCancel() {
  clearTimeout(timer)
  confirming.value = false
}
</script>

<template>
  <div class="trx-confirm-btn">
    <Transition name="trx-confirm-swap" mode="out-in">
      <div v-if="!confirming" key="idle" class="trx-confirm-btn__idle">
        <button
          class="trx-confirm-btn__btn"
          :class="`trx-confirm-btn__btn--${variant}`"
          :disabled="disabled || loading"
          @click="onFirst"
        >
          <i v-if="loading" class="pi pi-spin pi-spinner"></i>
          <i v-else-if="icon" :class="icon"></i>
          <span>{{ label }}</span>
        </button>
      </div>

      <div v-else key="confirm" class="trx-confirm-btn__confirm-row">
        <span class="trx-confirm-btn__question">Tem certeza?</span>
        <button class="trx-confirm-btn__btn trx-confirm-btn__btn--confirm" @click="onConfirm">
          {{ confirmLabel }}
        </button>
        <button class="trx-confirm-btn__btn trx-confirm-btn__btn--cancel" @click="onCancel">
          {{ cancelLabel }}
        </button>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.trx-confirm-btn { display: inline-flex; }

.trx-confirm-btn__idle { display: flex; }
.trx-confirm-btn__confirm-row { display: flex; align-items: center; gap: 0.4rem; }

.trx-confirm-btn__question { font-size: 0.8rem; color: var(--trx-text-secondary); white-space: nowrap; }

.trx-confirm-btn__btn {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.4rem 0.75rem;
  border-radius: 8px;
  border: 1px solid transparent;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s;
}

.trx-confirm-btn__btn:disabled { opacity: 0.5; cursor: not-allowed; }

.trx-confirm-btn__btn--default {
  background: var(--trx-bg-secondary);
  color: var(--trx-text-primary);
  border-color: var(--trx-border-color);
}

.trx-confirm-btn__btn--danger {
  background: rgba(239,68,68,0.1);
  color: var(--trx-danger-color);
  border-color: rgba(239,68,68,0.3);
}

.trx-confirm-btn__btn--danger:hover:not(:disabled) {
  background: var(--trx-danger-color);
  color: white;
}

.trx-confirm-btn__btn--warning {
  background: rgba(245,158,11,0.1);
  color: var(--trx-warning-color);
  border-color: rgba(245,158,11,0.3);
}

.trx-confirm-btn__btn--warning:hover:not(:disabled) {
  background: var(--trx-warning-color);
  color: white;
}

.trx-confirm-btn__btn--confirm {
  background: var(--trx-danger-color);
  color: white;
  border-color: var(--trx-danger-color);
  font-size: 0.8rem;
  padding: 0.35rem 0.6rem;
}

.trx-confirm-btn__btn--cancel {
  background: var(--trx-bg-secondary);
  color: var(--trx-text-secondary);
  border-color: var(--trx-border-color);
  font-size: 0.8rem;
  padding: 0.35rem 0.6rem;
}

.trx-confirm-swap-enter-active, .trx-confirm-swap-leave-active { transition: all 0.15s ease; }
.trx-confirm-swap-enter-from { opacity: 0; transform: translateX(8px); }
.trx-confirm-swap-leave-to   { opacity: 0; transform: translateX(-8px); }
</style>
