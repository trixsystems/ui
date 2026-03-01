<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  modelValue?: number
  format?: 'hh:mm:ss' | 'mm:ss'
  disabled?: boolean
  invalid?: boolean
  placeholder?: string
}>(), {
  modelValue: 0,
  format: 'hh:mm:ss',
})

const emit = defineEmits<{ 'update:modelValue': [seconds: number] }>()

const display = computed(() => {
  const s = props.modelValue ?? 0
  const h = Math.floor(s / 3600)
  const m = Math.floor((s % 3600) / 60)
  const sec = s % 60
  const pad = (n: number) => String(n).padStart(2, '0')
  return props.format === 'hh:mm:ss'
    ? `${pad(h)}:${pad(m)}:${pad(sec)}`
    : `${pad(m + h * 60)}:${pad(sec)}`
})

function parse(val: string): number {
  const parts = val.split(':').map(Number)
  if (parts.length === 3) return (parts[0] * 3600) + (parts[1] * 60) + parts[2]
  if (parts.length === 2) return (parts[0] * 60) + parts[1]
  return 0
}

function onInput(e: Event) {
  const val = (e.target as HTMLInputElement).value
  const secs = parse(val)
  if (!isNaN(secs)) emit('update:modelValue', secs)
}
</script>

<template>
  <div class="trx-duration" :class="{ 'trx-duration--invalid': invalid, 'trx-duration--disabled': disabled }">
    <i class="pi pi-clock trx-duration__icon"></i>
    <input
      class="trx-duration__input"
      type="text"
      :value="display"
      :disabled="disabled"
      :placeholder="placeholder ?? (format === 'hh:mm:ss' ? '00:00:00' : '00:00')"
      pattern="[0-9]{1,2}:[0-9]{2}(:[0-9]{2})?"
      @change="onInput"
    />
  </div>
</template>

<style scoped>
.trx-duration {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.4rem 0.75rem;
  border: 1px solid var(--trx-border-color);
  border-radius: 8px;
  background: var(--trx-bg-card);
  transition: border-color 0.2s;
}

.trx-duration:focus-within { border-color: var(--trx-accent-color); }
.trx-duration--invalid { border-color: var(--trx-danger-color); }
.trx-duration--disabled { opacity: 0.5; pointer-events: none; }

.trx-duration__icon { font-size: 0.85rem; color: var(--trx-text-secondary); }

.trx-duration__input {
  border: none;
  background: transparent;
  color: var(--trx-text-primary);
  font-size: 0.875rem;
  font-family: 'Courier New', monospace;
  outline: none;
  width: 80px;
}
</style>
