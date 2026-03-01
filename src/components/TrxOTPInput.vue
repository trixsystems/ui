<script setup lang="ts">
import { ref } from 'vue'

const props = withDefaults(defineProps<{
  modelValue?: string
  length?: number
  disabled?: boolean
  invalid?: boolean
  masked?: boolean
}>(), {
  modelValue: '',
  length: 6,
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
  complete: [value: string]
}>()

const inputs = ref<HTMLInputElement[]>([])

function getValue(i: number) {
  return (props.modelValue ?? '')[i] ?? ''
}

function onInput(e: Event, i: number) {
  const char = (e.target as HTMLInputElement).value.replace(/\D/g, '').slice(-1)
  const arr = (props.modelValue ?? '').split('')
  arr[i] = char
  const val = arr.join('').slice(0, props.length)
  emit('update:modelValue', val)
  if (char && i < props.length - 1) inputs.value[i + 1]?.focus()
  if (val.length === props.length) emit('complete', val)
}

function onKeydown(e: KeyboardEvent, i: number) {
  if (e.key === 'Backspace') {
    const arr = (props.modelValue ?? '').split('')
    if (!arr[i] && i > 0) {
      inputs.value[i - 1]?.focus()
      arr[i - 1] = ''
    } else {
      arr[i] = ''
    }
    emit('update:modelValue', arr.join(''))
  }
  if (e.key === 'ArrowLeft' && i > 0) inputs.value[i - 1]?.focus()
  if (e.key === 'ArrowRight' && i < props.length - 1) inputs.value[i + 1]?.focus()
}

function onPaste(e: ClipboardEvent) {
  e.preventDefault()
  const text = e.clipboardData?.getData('text').replace(/\D/g, '').slice(0, props.length) ?? ''
  emit('update:modelValue', text)
  if (text.length === props.length) emit('complete', text)
  inputs.value[Math.min(text.length, props.length - 1)]?.focus()
}
</script>

<template>
  <div class="trx-otp" :class="{ 'trx-otp--invalid': invalid }">
    <input
      v-for="i in length"
      :key="i - 1"
      :ref="el => { if (el) inputs[i - 1] = el as HTMLInputElement }"
      class="trx-otp__cell"
      :type="masked ? 'password' : 'text'"
      inputmode="numeric"
      maxlength="1"
      :value="getValue(i - 1)"
      :disabled="disabled"
      :class="{ 'trx-otp__cell--filled': !!getValue(i - 1) }"
      @input="onInput($event, i - 1)"
      @keydown="onKeydown($event, i - 1)"
      @paste="onPaste"
      @focus="($event.target as HTMLInputElement).select()"
    />
  </div>
</template>

<style scoped>
.trx-otp { display: flex; gap: 0.5rem; }
.trx-otp__cell {
  width: 44px; height: 52px;
  border: 2px solid var(--trx-border-color); border-radius: 10px;
  background: var(--trx-bg-card); color: var(--trx-text-primary);
  font-size: 1.25rem; font-weight: 700; text-align: center;
  outline: none; transition: all 0.2s; font-family: monospace;
}
.trx-otp__cell:focus { border-color: var(--trx-accent-color); box-shadow: 0 0 0 3px color-mix(in srgb, var(--trx-accent-color) 15%, transparent); }
.trx-otp__cell--filled { border-color: var(--trx-accent-color); }
.trx-otp--invalid .trx-otp__cell { border-color: var(--trx-danger-color); }
.trx-otp__cell:disabled { opacity: 0.5; cursor: not-allowed; }
</style>
