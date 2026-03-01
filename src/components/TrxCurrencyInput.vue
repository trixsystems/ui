<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  modelValue?: number | null
  currency?: string
  locale?: string
  disabled?: boolean
  invalid?: boolean
  placeholder?: string
  min?: number
  max?: number
}>(), {
  currency: 'BRL',
  locale: 'pt-BR',
  placeholder: 'R$ 0,00',
})

const emit = defineEmits<{
  'update:modelValue': [value: number | null]
  change: [value: number | null]
}>()

const displayValue = computed(() => {
  if (props.modelValue === null || props.modelValue === undefined) return ''
  return new Intl.NumberFormat(props.locale, {
    style: 'currency',
    currency: props.currency,
  }).format(props.modelValue)
})

function onInput(e: Event) {
  const raw = (e.target as HTMLInputElement).value
    .replace(/[^\d,.-]/g, '')
    .replace(',', '.')
  const num = parseFloat(raw)
  const val = isNaN(num) ? null : num
  emit('update:modelValue', val)
  emit('change', val)
  ;(e.target as HTMLInputElement).value = displayValue.value
}

function onFocus(e: Event) {
  const input = e.target as HTMLInputElement
  const raw = props.modelValue !== null && props.modelValue !== undefined
    ? String(props.modelValue).replace('.', ',')
    : ''
  input.value = raw
  input.select()
}

function onBlur(e: Event) {
  ;(e.target as HTMLInputElement).value = displayValue.value
}
</script>

<template>
  <div class="trx-currency" :class="{ 'trx-currency--invalid': invalid, 'trx-currency--disabled': disabled }">
    <input
      class="trx-currency__input"
      type="text"
      inputmode="decimal"
      :value="displayValue"
      :placeholder="placeholder"
      :disabled="disabled"
      @focus="onFocus"
      @blur="onBlur"
      @input="onInput"
    />
  </div>
</template>

<style scoped>
.trx-currency { display: inline-flex; }
.trx-currency--disabled { opacity: 0.5; pointer-events: none; }
.trx-currency__input {
  padding: 0.45rem 0.75rem;
  border: 1px solid var(--trx-border-color); border-radius: 8px;
  background: var(--trx-bg-card); color: var(--trx-text-primary);
  font-size: 0.875rem; font-family: inherit; outline: none;
  text-align: right; width: 150px; transition: border-color 0.2s;
}
.trx-currency__input:focus { border-color: var(--trx-accent-color); }
.trx-currency--invalid .trx-currency__input { border-color: var(--trx-danger-color); }
</style>
