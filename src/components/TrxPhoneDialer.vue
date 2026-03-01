<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  modelValue?: string
  disabled?: boolean
  showDisplay?: boolean
}>(), {
  modelValue: '',
  showDisplay: true,
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
  call: [number: string]
  clear: []
}>()

const keys = ['1','2','3','4','5','6','7','8','9','*','0','#']
const subLabels: Record<string, string> = {
  '2':'ABC','3':'DEF','4':'GHI','5':'JKL','6':'MNO',
  '7':'PQRS','8':'TUV','9':'WXYZ','0':'+','*':'','#':'',
}

const number = computed({
  get: () => props.modelValue ?? '',
  set: (val) => emit('update:modelValue', val),
})

function press(key: string) {
  if (props.disabled) return
  number.value = number.value + key
}

function backspace() {
  number.value = number.value.slice(0, -1)
}

function doClear() {
  number.value = ''
  emit('clear')
}

function doCall() {
  if (number.value) emit('call', number.value)
}
</script>

<template>
  <div class="trx-dialer" :class="{ 'trx-dialer--disabled': disabled }">
    <div v-if="showDisplay" class="trx-dialer__display">
      <span class="trx-dialer__number">{{ number || '&nbsp;' }}</span>
      <button v-if="number" class="trx-dialer__backspace" @click="backspace" title="Apagar">
        <i class="pi pi-delete-left"></i>
      </button>
    </div>

    <div class="trx-dialer__grid">
      <button
        v-for="key in keys"
        :key="key"
        class="trx-dialer__key"
        :disabled="disabled"
        @click="press(key)"
      >
        <span class="trx-dialer__key-main">{{ key }}</span>
        <span v-if="subLabels[key]" class="trx-dialer__key-sub">{{ subLabels[key] }}</span>
      </button>
    </div>

    <div class="trx-dialer__actions">
      <button class="trx-dialer__clear" :disabled="disabled || !number" @click="doClear" title="Limpar">
        <i class="pi pi-times"></i>
      </button>
      <button class="trx-dialer__call" :disabled="disabled || !number" @click="doCall" title="Ligar">
        <i class="pi pi-phone"></i>
      </button>
    </div>
  </div>
</template>

<style scoped>
.trx-dialer {
  background: var(--trx-bg-card);
  border: 1px solid var(--trx-border-color);
  border-radius: 16px;
  padding: 1.25rem;
  width: 240px;
  user-select: none;
}

.trx-dialer--disabled { opacity: 0.5; pointer-events: none; }

.trx-dialer__display {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--trx-bg-secondary);
  border-radius: 8px;
  padding: 0.5rem 0.75rem;
  margin-bottom: 1rem;
  min-height: 40px;
}

.trx-dialer__number {
  font-family: monospace;
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--trx-text-primary);
  letter-spacing: 0.1em;
  flex: 1;
}

.trx-dialer__backspace {
  background: none;
  border: none;
  cursor: pointer;
  color: var(--trx-text-secondary);
  padding: 0.25rem;
  font-size: 1rem;
  transition: color 0.15s;
}

.trx-dialer__backspace:hover { color: var(--trx-danger-color); }

.trx-dialer__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
  margin-bottom: 0.75rem;
}

.trx-dialer__key {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 0.5rem;
  background: var(--trx-bg-secondary);
  border: 1px solid var(--trx-border-color);
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.15s ease;
  min-height: 52px;
}

.trx-dialer__key:hover:not(:disabled) {
  background: var(--trx-accent-color);
  color: white;
  border-color: var(--trx-accent-color);
  transform: scale(1.05);
}

.trx-dialer__key:active:not(:disabled) { transform: scale(0.95); }

.trx-dialer__key-main {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--trx-text-primary);
  line-height: 1;
}

.trx-dialer__key:hover:not(:disabled) .trx-dialer__key-main { color: white; }

.trx-dialer__key-sub {
  font-size: 0.55rem;
  letter-spacing: 0.1em;
  color: var(--trx-text-secondary);
  margin-top: 0.15rem;
}

.trx-dialer__key:hover:not(:disabled) .trx-dialer__key-sub { color: rgba(255,255,255,0.8); }

.trx-dialer__actions {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 0.5rem;
}

.trx-dialer__clear,
.trx-dialer__call {
  padding: 0.75rem;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.15s;
}

.trx-dialer__clear { background: var(--trx-bg-secondary); color: var(--trx-danger-color); }
.trx-dialer__clear:hover:not(:disabled) { background: var(--trx-danger-color); color: white; }
.trx-dialer__call { background: var(--trx-success-color); color: white; }
.trx-dialer__call:hover:not(:disabled) { filter: brightness(1.1); }
.trx-dialer__call:disabled, .trx-dialer__clear:disabled { opacity: 0.4; cursor: not-allowed; }
</style>
