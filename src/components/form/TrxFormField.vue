<script setup lang="ts">
defineProps<{
  /** Nome do campo (para htmlFor/id) */
  name: string
  /** Label exibido acima do campo */
  label?: string
  /** Mensagem de erro (exibida em vermelho abaixo do campo) */
  error?: string
  /** Torna o label obrigatório com asterisco */
  required?: boolean
  /** Texto de ajuda exibido abaixo do campo (substituído pelo erro quando há) */
  hint?: string
  /** Campo desabilitado */
  disabled?: boolean
}>()
</script>

<template>
  <div
    :class="[
      'trx-form-field',
      { 'trx-form-field--error': error, 'trx-form-field--disabled': disabled },
    ]"
  >
    <label v-if="label" :for="name" class="trx-form-field__label">
      {{ label }}
      <span v-if="required" class="trx-form-field__required" aria-hidden="true">*</span>
    </label>

    <div class="trx-form-field__control">
      <slot />
    </div>

    <p v-if="error" :id="`${name}-error`" class="trx-form-field__error" role="alert">
      <i class="pi pi-exclamation-circle" aria-hidden="true" />
      {{ error }}
    </p>
    <p v-else-if="hint" :id="`${name}-hint`" class="trx-form-field__hint">
      {{ hint }}
    </p>
  </div>
</template>

<style scoped>
.trx-form-field {
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
}

.trx-form-field__label {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--trx-text-primary);
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.trx-form-field__required {
  color: var(--trx-danger-color);
  font-size: 0.875rem;
  line-height: 1;
}

.trx-form-field__control {
  position: relative;
}

/* Borda vermelha no input filho quando há erro */
.trx-form-field--error .trx-form-field__control :deep(input),
.trx-form-field--error .trx-form-field__control :deep(textarea),
.trx-form-field--error .trx-form-field__control :deep(.p-inputtext),
.trx-form-field--error .trx-form-field__control :deep(.p-select) {
  border-color: var(--trx-danger-color) !important;
}

.trx-form-field__error {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.8125rem;
  color: var(--trx-danger-color);
  margin: 0;
  animation: fadein 0.15s ease;
}

.trx-form-field__error .pi {
  font-size: 0.75rem;
  flex-shrink: 0;
}

.trx-form-field__hint {
  font-size: 0.8125rem;
  color: var(--trx-text-muted);
  margin: 0;
}

.trx-form-field--disabled {
  opacity: 0.6;
  pointer-events: none;
}

@keyframes fadein {
  from { opacity: 0; transform: translateY(-4px); }
  to   { opacity: 1; transform: translateY(0); }
}
</style>
