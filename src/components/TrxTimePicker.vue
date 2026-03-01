<script setup lang="ts">
import { computed, ref, onMounted, onBeforeUnmount } from 'vue'

const props = withDefaults(defineProps<{
  modelValue?: string
  disabled?: boolean
  invalid?: boolean
  step?: number
  placeholder?: string
}>(), {
  step: 30,
  placeholder: '--:--',
})

const emit = defineEmits<{ 'update:modelValue': [time: string] }>()

const open = ref(false)

const options = computed(() => {
  const times: string[] = []
  const total = 24 * 60
  for (let m = 0; m < total; m += props.step) {
    const h = Math.floor(m / 60)
    const min = m % 60
    times.push(`${String(h).padStart(2, '0')}:${String(min).padStart(2, '0')}`)
  }
  return times
})

function select(t: string) {
  emit('update:modelValue', t)
  open.value = false
}

function clear() {
  emit('update:modelValue', '')
}

function onDocClick(e: MouseEvent) {
  const el = document.querySelector('.trx-timepicker')
  if (el && !el.contains(e.target as Node)) open.value = false
}

onMounted(() => document.addEventListener('click', onDocClick, true))
onBeforeUnmount(() => document.removeEventListener('click', onDocClick, true))
</script>

<template>
  <div class="trx-timepicker" :class="{ 'trx-timepicker--invalid': invalid, 'trx-timepicker--disabled': disabled }">
    <button
      class="trx-timepicker__trigger"
      :disabled="disabled"
      @click="open = !open"
    >
      <i class="pi pi-clock trx-timepicker__icon"></i>
      <span :class="{ 'trx-timepicker__placeholder': !modelValue }">{{ modelValue || placeholder }}</span>
      <i v-if="modelValue" class="pi pi-times trx-timepicker__clear" @click.stop="clear"></i>
      <i v-else class="pi pi-chevron-down trx-timepicker__arrow"></i>
    </button>

    <Transition name="trx-dropdown">
      <div v-if="open" class="trx-timepicker__panel">
        <button
          v-for="t in options"
          :key="t"
          class="trx-timepicker__option"
          :class="{ 'trx-timepicker__option--active': t === modelValue }"
          @click="select(t)"
        >{{ t }}</button>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.trx-timepicker { position: relative; display: inline-flex; }
.trx-timepicker--disabled { opacity: 0.5; pointer-events: none; }

.trx-timepicker__trigger {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.4rem 0.75rem;
  border: 1px solid var(--trx-border-color);
  border-radius: 8px;
  background: var(--trx-bg-card);
  color: var(--trx-text-primary);
  font-size: 0.875rem;
  cursor: pointer;
  transition: border-color 0.2s;
  min-width: 100px;
}

.trx-timepicker--invalid .trx-timepicker__trigger { border-color: var(--trx-danger-color); }
.trx-timepicker__trigger:focus { outline: none; border-color: var(--trx-accent-color); }

.trx-timepicker__icon { font-size: 0.85rem; color: var(--trx-text-secondary); }
.trx-timepicker__placeholder { color: var(--trx-text-secondary); flex: 1; }
.trx-timepicker__arrow { font-size: 0.65rem; color: var(--trx-text-secondary); margin-left: auto; }
.trx-timepicker__clear { font-size: 0.65rem; color: var(--trx-text-secondary); margin-left: auto; }
.trx-timepicker__clear:hover { color: var(--trx-danger-color); }

.trx-timepicker__panel {
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  background: var(--trx-bg-card);
  border: 1px solid var(--trx-border-color);
  border-radius: 10px;
  box-shadow: var(--trx-shadow-md);
  overflow-y: auto;
  max-height: 200px;
  min-width: 100px;
  z-index: 100;
}

.trx-timepicker__option {
  display: block;
  width: 100%;
  padding: 0.45rem 0.75rem;
  border: none;
  background: transparent;
  color: var(--trx-text-primary);
  font-size: 0.875rem;
  text-align: left;
  cursor: pointer;
  transition: background 0.15s;
  font-family: 'Courier New', monospace;
}

.trx-timepicker__option:hover { background: var(--trx-bg-secondary); }
.trx-timepicker__option--active { background: var(--trx-accent-color); color: white; }

.trx-dropdown-enter-active, .trx-dropdown-leave-active { transition: all 0.15s ease; }
.trx-dropdown-enter-from, .trx-dropdown-leave-to { opacity: 0; transform: translateY(-6px); }
</style>
