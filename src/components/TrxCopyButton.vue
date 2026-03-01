<script setup lang="ts">
/**
 * TrxCopyButton — Botão que copia texto para o clipboard com feedback visual.
 *
 * @example
 * <TrxCopyButton value="(11) 99999-8888" />
 * <TrxCopyButton value="token_abc123" label="Copiar token" />
 */

import { ref } from 'vue'

const props = withDefaults(
  defineProps<{
    /** Texto a ser copiado */
    value: string
    /** Label do botão (padrão: exibe o valor) */
    label?: string
    /** Exibe o valor como texto ao lado do botão */
    showValue?: boolean
    /** Duração do feedback em ms */
    feedbackDuration?: number
    size?: 'small' | 'normal'
  }>(),
  { feedbackDuration: 1500, size: 'normal' },
)

const emit = defineEmits<{
  copy: [value: string]
}>()

const copied = ref(false)

async function copy() {
  try {
    await navigator.clipboard.writeText(props.value)
    copied.value = true
    emit('copy', props.value)
    setTimeout(() => { copied.value = false }, props.feedbackDuration)
  } catch {
    // fallback para browsers sem clipboard API
    const el = document.createElement('textarea')
    el.value = props.value
    el.style.position = 'fixed'
    el.style.opacity = '0'
    document.body.appendChild(el)
    el.select()
    document.execCommand('copy')
    document.body.removeChild(el)
    copied.value = true
    setTimeout(() => { copied.value = false }, props.feedbackDuration)
  }
}
</script>

<template>
  <div :class="['trx-copy', `trx-copy--${size}`]">
    <span v-if="showValue" class="trx-copy__value">{{ value }}</span>

    <button
      type="button"
      :class="['trx-copy__btn', { 'trx-copy__btn--copied': copied }]"
      :aria-label="copied ? 'Copiado!' : `Copiar ${label ?? value}`"
      :title="copied ? 'Copiado!' : 'Copiar'"
      @click="copy"
    >
      <i :class="copied ? 'pi pi-check' : 'pi pi-copy'" aria-hidden="true" />
      <span v-if="label && !showValue">{{ copied ? 'Copiado!' : label }}</span>
      <span v-else-if="!label && !showValue">{{ copied ? 'Copiado!' : 'Copiar' }}</span>
    </button>
  </div>
</template>

<style scoped>
.trx-copy { display: inline-flex; align-items: center; gap: 0.5rem; }

.trx-copy__value {
  font-family: 'Fira Code', Consolas, monospace;
  font-size: 0.8125rem;
  color: var(--trx-text-secondary);
  background: var(--trx-bg-tertiary);
  padding: 0.125rem 0.5rem;
  border-radius: 4px;
  border: 1px solid var(--trx-border);
}

.trx-copy__btn {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.25rem 0.625rem;
  font-size: 0.8125rem;
  font-weight: 500;
  border-radius: 6px;
  border: 1px solid var(--trx-border);
  background: var(--trx-bg-tertiary);
  color: var(--trx-text-secondary);
  cursor: pointer;
  transition: all 0.15s;
  white-space: nowrap;
}
.trx-copy__btn:hover {
  background: var(--trx-bg-hover);
  color: var(--trx-text-primary);
  border-color: var(--trx-border-strong);
}

.trx-copy__btn--copied {
  background: #ecfdf5;
  color: #065f46;
  border-color: #a7f3d0;
}
.dark .trx-copy__btn--copied {
  background: rgba(16,185,129,.15);
  color: #6ee7b7;
  border-color: rgba(16,185,129,.3);
}

/* Size */
.trx-copy--small .trx-copy__btn {
  padding: 0.125rem 0.375rem;
  font-size: 0.75rem;
}
</style>
