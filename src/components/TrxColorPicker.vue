<script lang="ts">
const PRESETS = [
  '#ef4444','#f97316','#eab308','#22c55e','#10b981',
  '#06b6d4','#3b82f6','#8b5cf6','#ec4899','#6b7280',
  '#000000','#ffffff',
]
export { PRESETS }
</script>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

withDefaults(defineProps<{
  modelValue?: string
  presets?: string[]
  disabled?: boolean
}>(), {
  modelValue: '#10b981',
  presets: () => PRESETS,
})

const emit = defineEmits<{ 'update:modelValue': [color: string] }>()
const open = ref(false)

function select(color: string) {
  emit('update:modelValue', color)
  open.value = false
}

function onNative(e: Event) {
  emit('update:modelValue', (e.target as HTMLInputElement).value)
}

function onDocClick(e: MouseEvent) {
  const el = document.querySelector('.trx-color-picker')
  if (el && !el.contains(e.target as Node)) open.value = false
}

onMounted(() => document.addEventListener('click', onDocClick, true))
onBeforeUnmount(() => document.removeEventListener('click', onDocClick, true))
</script>

<template>
  <div class="trx-color-picker" :class="{ 'trx-color-picker--disabled': disabled }">
    <button
      class="trx-color-picker__trigger"
      :disabled="disabled"
      @click="open = !open"
    >
      <span class="trx-color-picker__swatch" :style="{ background: modelValue }"></span>
      <span class="trx-color-picker__hex">{{ modelValue }}</span>
      <i class="pi pi-chevron-down trx-color-picker__arrow"></i>
    </button>

    <Transition name="trx-dropdown">
      <div v-if="open" class="trx-color-picker__panel">
        <div class="trx-color-picker__presets">
          <button
            v-for="c in presets"
            :key="c"
            class="trx-color-picker__preset"
            :class="{ 'trx-color-picker__preset--active': modelValue === c }"
            :style="{ background: c, borderColor: c === '#ffffff' ? '#e5e7eb' : c }"
            :title="c"
            @click="select(c)"
          />
        </div>
        <div class="trx-color-picker__custom">
          <span>Personalizado:</span>
          <input type="color" class="trx-color-picker__native" :value="modelValue" @input="onNative" @change="open = false" />
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.trx-color-picker { position: relative; display: inline-flex; }
.trx-color-picker--disabled { opacity: 0.5; pointer-events: none; }
.trx-color-picker__trigger {
  display: flex; align-items: center; gap: 0.5rem;
  padding: 0.35rem 0.65rem;
  border: 1px solid var(--trx-border-color); border-radius: 8px;
  background: var(--trx-bg-card); cursor: pointer; transition: border-color 0.2s;
}
.trx-color-picker__trigger:hover { border-color: var(--trx-accent-color); }
.trx-color-picker__swatch { width: 18px; height: 18px; border-radius: 4px; border: 1px solid rgba(0,0,0,0.1); flex-shrink: 0; }
.trx-color-picker__hex { font-size: 0.825rem; font-family: monospace; color: var(--trx-text-primary); }
.trx-color-picker__arrow { font-size: 0.65rem; color: var(--trx-text-secondary); }
.trx-color-picker__panel {
  position: absolute; top: calc(100% + 4px); left: 0;
  background: var(--trx-bg-card); border: 1px solid var(--trx-border-color);
  border-radius: 10px; box-shadow: var(--trx-shadow-md); padding: 0.75rem; z-index: 100;
  min-width: 200px;
}
.trx-color-picker__presets { display: flex; flex-wrap: wrap; gap: 0.4rem; margin-bottom: 0.75rem; }
.trx-color-picker__preset {
  width: 24px; height: 24px; border-radius: 4px; border: 2px solid transparent;
  cursor: pointer; transition: transform 0.1s;
}
.trx-color-picker__preset:hover { transform: scale(1.15); }
.trx-color-picker__preset--active { border-color: var(--trx-text-primary) !important; transform: scale(1.1); }
.trx-color-picker__custom {
  display: flex; align-items: center; gap: 0.5rem;
  font-size: 0.8rem; color: var(--trx-text-secondary);
  border-top: 1px solid var(--trx-border-color); padding-top: 0.5rem;
}
.trx-color-picker__native { width: 32px; height: 28px; border: none; cursor: pointer; border-radius: 4px; padding: 0; }
.trx-dropdown-enter-active, .trx-dropdown-leave-active { transition: all 0.15s ease; }
.trx-dropdown-enter-from, .trx-dropdown-leave-to { opacity: 0; transform: translateY(-6px); }
</style>
