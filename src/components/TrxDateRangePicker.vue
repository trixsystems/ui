<script setup lang="ts">
import { computed } from 'vue'

export interface TrxDateRange {
  start: string | null
  end: string | null
}

const props = withDefaults(defineProps<{
  modelValue?: TrxDateRange
  disabled?: boolean
  startPlaceholder?: string
  endPlaceholder?: string
}>(), {
  modelValue: () => ({ start: null, end: null }),
  startPlaceholder: 'Data inicial',
  endPlaceholder: 'Data final',
})

const emit = defineEmits<{ 'update:modelValue': [range: TrxDateRange] }>()

const startVal = computed(() => props.modelValue?.start ?? '')
const endVal   = computed(() => props.modelValue?.end ?? '')

function onStart(e: Event) {
  emit('update:modelValue', { start: (e.target as HTMLInputElement).value || null, end: props.modelValue?.end ?? null })
}

function onEnd(e: Event) {
  emit('update:modelValue', { start: props.modelValue?.start ?? null, end: (e.target as HTMLInputElement).value || null })
}

function clear() {
  emit('update:modelValue', { start: null, end: null })
}

const hasValue = computed(() => !!(props.modelValue?.start || props.modelValue?.end))
</script>

<template>
  <div class="trx-daterange" :class="{ 'trx-daterange--disabled': disabled }">
    <i class="pi pi-calendar trx-daterange__icon"></i>
    <input
      class="trx-daterange__input"
      type="date"
      :value="startVal"
      :disabled="disabled"
      :placeholder="startPlaceholder"
      :max="endVal || undefined"
      @change="onStart"
    />
    <span class="trx-daterange__sep">→</span>
    <input
      class="trx-daterange__input"
      type="date"
      :value="endVal"
      :disabled="disabled"
      :placeholder="endPlaceholder"
      :min="startVal || undefined"
      @change="onEnd"
    />
    <button v-if="hasValue && !disabled" class="trx-daterange__clear" @click="clear">
      <i class="pi pi-times"></i>
    </button>
  </div>
</template>

<style scoped>
.trx-daterange {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.4rem 0.75rem;
  border: 1px solid var(--trx-border-color);
  border-radius: 8px;
  background: var(--trx-bg-card);
  transition: border-color 0.2s;
}

.trx-daterange:focus-within { border-color: var(--trx-accent-color); }
.trx-daterange--disabled { opacity: 0.5; pointer-events: none; }

.trx-daterange__icon { font-size: 0.85rem; color: var(--trx-text-secondary); }

.trx-daterange__input {
  border: none;
  background: transparent;
  color: var(--trx-text-primary);
  font-size: 0.875rem;
  outline: none;
  cursor: pointer;
  font-family: inherit;
}

.trx-daterange__sep { font-size: 0.75rem; color: var(--trx-text-secondary); }

.trx-daterange__clear {
  background: none;
  border: none;
  cursor: pointer;
  color: var(--trx-text-secondary);
  font-size: 0.7rem;
  padding: 0.15rem;
  line-height: 1;
}

.trx-daterange__clear:hover { color: var(--trx-danger-color); }
</style>
