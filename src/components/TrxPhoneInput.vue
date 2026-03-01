<script setup lang="ts">
withDefaults(defineProps<{
  modelValue?: string
  placeholder?: string
  disabled?: boolean
  invalid?: boolean
  showDdi?: boolean
  ddi?: string
}>(), {
  modelValue: '',
  placeholder: '(00) 00000-0000',
  showDdi: false,
  ddi: '+55',
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
  change: [value: string]
}>()

function onInput(e: Event) {
  const raw = (e.target as HTMLInputElement).value.replace(/\D/g, '').slice(0, 11)
  const formatted = format(raw)
  emit('update:modelValue', formatted)
  emit('change', formatted)
}

function format(digits: string): string {
  if (digits.length <= 2) return digits.length ? `(${digits}` : ''
  if (digits.length <= 6) return `(${digits.slice(0,2)}) ${digits.slice(2)}`
  if (digits.length <= 10) return `(${digits.slice(0,2)}) ${digits.slice(2,6)}-${digits.slice(6)}`
  return `(${digits.slice(0,2)}) ${digits.slice(2,7)}-${digits.slice(7)}`
}
</script>

<template>
  <div class="trx-phone-input" :class="{ 'trx-phone-input--invalid': invalid, 'trx-phone-input--disabled': disabled }">
    <span v-if="showDdi" class="trx-phone-input__ddi">{{ ddi }}</span>
    <i class="pi pi-phone trx-phone-input__icon"></i>
    <input
      class="trx-phone-input__field"
      type="tel"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      autocomplete="tel"
      @input="onInput"
    />
  </div>
</template>

<style scoped>
.trx-phone-input {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--trx-bg-card);
  border: 1px solid var(--trx-border-color);
  border-radius: 8px;
  padding: 0.5rem 0.75rem;
  transition: border-color 0.2s;
}

.trx-phone-input:focus-within { border-color: var(--trx-accent-color); box-shadow: 0 0 0 3px rgba(16,185,129,0.15); }
.trx-phone-input--invalid { border-color: var(--trx-danger-color); }
.trx-phone-input--disabled { opacity: 0.5; pointer-events: none; background: var(--trx-bg-secondary); }

.trx-phone-input__ddi {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--trx-text-secondary);
  background: var(--trx-bg-secondary);
  padding: 0.1rem 0.4rem;
  border-radius: 4px;
  white-space: nowrap;
}

.trx-phone-input__icon { font-size: 0.85rem; color: var(--trx-text-secondary); flex-shrink: 0; }

.trx-phone-input__field {
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-size: 0.9rem;
  color: var(--trx-text-primary);
  font-family: monospace;
  letter-spacing: 0.05em;
  min-width: 0;
}

.trx-phone-input__field::placeholder { color: var(--trx-text-secondary); opacity: 0.7; letter-spacing: normal; font-family: inherit; }
</style>
